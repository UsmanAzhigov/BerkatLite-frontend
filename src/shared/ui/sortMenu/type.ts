import type { SortBy, SortOrder } from '../../types';

export interface SortOption {
  value: string;
  label: string;
}

export interface SortMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  sortBy: SortBy;
  sortOrder: SortOrder;
  onChange: (sortBy: string, sortOrder: SortOrder) => void;
}
