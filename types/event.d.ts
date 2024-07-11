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
