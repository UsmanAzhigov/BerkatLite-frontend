export const SortBy = {
  PRICE: 'price',
  POPULAR: 'popular',
  CREATED_AT: 'createdAt',
} as const;
export type SortBy = (typeof SortBy)[keyof typeof SortBy];

export const SortOrder = {
  ASC: 'asc',
  DESC: 'desc',
  NONE: '',
} as const;
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

export interface DefaultFields {
  search: string;
  sortOrder: SortOrder;
  sortBy: SortBy;
  page: number;
  city: string;
  priceFrom: string;
  priceTo: string;
  category: string;
  filterAnchorEl: null | HTMLElement;
  sortAnchorEl: null | HTMLElement;
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
