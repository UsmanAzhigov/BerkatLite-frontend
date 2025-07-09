export interface FilterOption {
  key: string;
  label: string;
  type: 'select' | 'input';
  options?: { value: string; label: string }[];
}

export interface FilterMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  filters: FilterOption[];
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
  onReset: () => void;
}
