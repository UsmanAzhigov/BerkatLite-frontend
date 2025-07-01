export interface Property {
  key: string;
  value: string;
}

export interface Advert {
  title: string;
  description: string;
  phone: string[];
  city: string;
  properties: Array<Property>;
}
