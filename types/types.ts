export type LocationType = {
  description: string;
  location: {
    lat: number;
    lng: number;
  };
} | null;

export type TimeTravelType = {
  distance: { text: string; value: number };
  duration: { text: string; value: number };
  status: string;
} | null;
