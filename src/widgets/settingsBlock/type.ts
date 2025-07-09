import type { DefaultFields } from '../../shared/types';

export interface FilterBlockProps {
  fields: DefaultFields;
  setFields: React.Dispatch<React.SetStateAction<DefaultFields>>;
}
