export interface Reward {
  id: string;
  title: string;
  description: string;
  points: number;
  image: string;
  available: boolean;
  expiresAt?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  points: number;
  startDate: string;
  endDate: string;
  image: string;
  participants: number;
}