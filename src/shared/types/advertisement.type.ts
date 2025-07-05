export interface Property {
  name: string;
  text: string;
}

export interface Advert {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  popular: number;
  city: string;
  phone: string[];
  properties: Array<Property>;
  createdAt: string;
}
