import create from 'zustand';
import { Ad } from '../types/ad';
import { AdDeploymentService } from '../services/adDeployment';
import { PaymentProcessor } from '../services/paymentProcessor';

interface AdStore {
  currentAd: Partial<Ad> | null;
  deploymentStatus: 'idle' | 'processing' | 'success' | 'error';
  error: string | null;
  setCurrentAd: (ad: Partial<Ad>) => void;
  deployAd: (paymentDetails: any) => Promise<void>;
  resetState: () => void;
}

export const useAdStore = create<AdStore>((set, get) => ({
  currentAd: null,
  deploymentStatus: 'idle',
  error: null,

  setCurrentAd: (ad) => set({ currentAd: ad }),

  deployAd: async (paymentDetails) => {
    const { currentAd } = get();
    if (!currentAd?.budget?.total) return;

    set({ deploymentStatus: 'processing', error: null });

    try {
      // Process payment
      const paymentResult = await PaymentProcessor.processPayment(
        currentAd.budget.total,
        'USD',
        paymentDetails.method,
        paymentDetails
      );

      if (!paymentResult.success) {
        throw new Error('Payment failed');
      }

      // Validate ad before deployment
      const validation = await AdDeploymentService.validateAd(currentAd);
      if (!validation.valid) {
        throw new Error(validation.errors?.join(', ') || 'Ad validation failed');
      }

      // Deploy ad
      const deployedAd = await AdDeploymentService.deployAd(currentAd as Required<Omit<Ad, 'id' | 'status' | 'performance'>>);
      
      set({
        currentAd: deployedAd,
        deploymentStatus: 'success',
      });
    } catch (error) {
      set({
        deploymentStatus: 'error',
        error: error instanceof Error ? error.message : 'Ad deployment failed',
      });
    }
  },

  resetState: () => set({
    currentAd: null,
    deploymentStatus: 'idle',
    error: null,
  }),
}));