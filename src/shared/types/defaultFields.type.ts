export enum SortBy {
  PRICE = 'price',
  VIEWS = 'views',
  CREATED_AT = 'createdAt',
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
  NONE = '',
}

export enum TypeFileds {
  SELECT = 'select',
  INPUT = 'input',
}

export enum FILTER_KEYS {
  CATEGORY = 'category',
  CITY = 'city',
  PRICE_FROM = 'priceFrom',
  PRICE_TO = 'priceTo',
}

export interface DefaultFields {
  search: string;
  sortOrder: SortOrder;
  sortBy: SortBy;
  page: number;
  city: string;
  priceFrom: string;
  priceTo: string;
  category: string;
  filterAnchorEl: null;
  sortAnchorEl: null;
}

export const defaultFields: DefaultFields = {
  search: '',
  sortOrder: SortOrder.NONE,
  sortBy: SortBy.PRICE,
  page: 1,
  city: '',
  priceFrom: '',
  priceTo: '',
  category: '',
  filterAnchorEl: null,
  sortAnchorEl: null,
};
