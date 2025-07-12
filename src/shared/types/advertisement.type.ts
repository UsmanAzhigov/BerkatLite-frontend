export interface Property {
  name: string;
  text: string;
}

export interface AdvertItems {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  popular: number;
  city: string;
  phone: string;
  properties: Array<Property>;
  createdAt: string;
}

export interface Advert {
  items: AdvertItems[];
  meta: {
    page: number;
    take: number;
    total: number;
    totalPages: number;
  };
}
