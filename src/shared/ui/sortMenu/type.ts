export interface SortOption {
  value: string;
  label: string;
}

export interface SortMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  sortBy: string;
  sortOrder: 'ASC' | 'DESC';
  onChange: (sortBy: string, sortOrder: 'ASC' | 'DESC') => void;
}
