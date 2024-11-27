import { useState, useCallback } from 'react';
import { Ad } from '../types/ad';
import { useAdStore } from '../store/adStore';
import { AdDeploymentService } from '../services/adDeployment';

export function useAdDeployment() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { deployAd, currentAd } = useAdStore();

  const handleDeployment = useCallback(async (paymentDetails: any) => {
    setIsLoading(true);
    setError(null);

    try {
      await deployAd(paymentDetails);
      
      // Start monitoring deployment status
      if (currentAd?.id) {
        const checkStatus = async () => {
          const status = await AdDeploymentService.getAdStatus(currentAd.id!);
          return status.status === 'active';
        };

        // Poll for status every 5 seconds until active
        const interval = setInterval(async () => {
          const isActive = await checkStatus();
          if (isActive) {
            clearInterval(interval);
          }
        }, 5000);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to deploy ad');
    } finally {
      setIsLoading(false);
    }
  }, [deployAd, currentAd]);

  return {
    isLoading,
    error,
    handleDeployment,
  };
}