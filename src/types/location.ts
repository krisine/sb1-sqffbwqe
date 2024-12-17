export interface Location {
  id: string;
  name: string;
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  types: string[];
  openingHours: string;
  contact: string;
}