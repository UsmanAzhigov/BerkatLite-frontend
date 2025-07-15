import type { TypeFileds } from '../../types/defaultFields.type';

export interface FilterOption {
  key: string;
  label: string;
  type: TypeFileds;
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
