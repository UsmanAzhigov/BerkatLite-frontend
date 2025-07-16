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
  phone: string[];
  properties: Property[];
  createdAt: string;
}

interface AdvertMetaProps {
  page: number;
  take: number;
  total: number;
  totalPages: number;
}

export interface Advert {
  items: AdvertItems[];
  meta: AdvertMetaProps;
}

export interface InfoBlockProps {
  title: string;
  price?: number;
  description: string;
}

export interface ImageBlockProps {
  image?: string[];
  title: string;
}
