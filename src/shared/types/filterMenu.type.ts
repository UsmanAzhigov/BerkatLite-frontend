export interface FilterMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  filters: Array<{
    key: string;
    label: string;
    type: 'select' | 'number';
    options?: Array<{ value: string; label: string }>;
  }>;
  values: Record<string, any>;
  onChange: (key: string, value: string) => void;
  onReset: () => void;
}