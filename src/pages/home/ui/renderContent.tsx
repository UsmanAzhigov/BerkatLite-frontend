import { type FC } from 'react';
import { InfoMessage, LoadingSkeleton } from '../../../components';
import { ListAd } from '../../../widgets';

interface RenderContentProps {
  loading: boolean;
  allItems: any[];
}

export const RenderContent: FC<RenderContentProps> = ({ loading, allItems }) => {
  if (loading) {
    return <LoadingSkeleton />;
  }
  if (allItems.length > 0) {
    return <ListAd data={allItems} />;
  }
  return <InfoMessage message="Товаров нет 🫩" />;
};
