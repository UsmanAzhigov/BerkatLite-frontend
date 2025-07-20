export interface Property {
  name: string;
  text: string;
}

export interface City {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface AdvertItems {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  views: number;
  city: string | null;
  cityId?: string;
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
