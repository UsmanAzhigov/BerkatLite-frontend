export interface Property {
  key: string;
  value: string;
}

export interface Advert {
  title: string;
  description: string;
  phone: string[];
  city: string;
  image: string[];
  date: string;
  price: number;
  properties: Array<Property>;
}
