export interface Profile {
  id: number;
  email: string;
  role: string;
  attendee: Attendee;
}

export interface Attendee {
  id: number;
  name: string;
  phone: any;
  image: any;
  gender: any;
  age: any;
  address: any;
  province: any;
  city: any;
  referralCode: string;
  totalPoints: number;
}
