export enum SortBy {
  PRICE = 'price',
  POPULAR = 'popular',
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
