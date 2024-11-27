export interface Ad {
  id: string;
  campaignId: string;
  type: 'telegram' | 'mobile_game';
  format: 'image' | 'video' | 'text' | 'interactive';
  content: {
    title: string;
    description: string;
    mediaUrl?: string;
    callToAction: string;
    landingUrl: string;
  };
  targeting: {
    countries: string[];
    languages: string[];
    interests: string[];
    ageRange: {
      min: number;
      max: number;
    };
    gender: 'all' | 'male' | 'female';
    deviceTypes: string[];
  };
  status: 'pending' | 'active' | 'paused' | 'completed' | 'rejected';
  performance: {
    impressions: number;
    clicks: number;
    conversions: number;
    spend: number;
  };
  schedule: {
    startDate: string;
    endDate: string;
    timezone: string;
  };
  budget: {
    total: number;
    daily: number;
    remaining: number;
  };
  createdAt: string;
  updatedAt: string;
}