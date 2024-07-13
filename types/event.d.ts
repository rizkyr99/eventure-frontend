export interface EventSummary {
  id: number;
  name: string;
  slug: string;
  image: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  location: string;
  isFree: boolean;
  category: string;
  lowestPrice: number;
}

export interface EventDetails {
  id: number;
  name: string;
  slug: string;
  image: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
  category: string;
  organizer: Organizer;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Organizer {
  id: number;
  name: string;
  address: any;
  image: any;
}
