import { type FC } from 'react';
import { InfoMessage, LoadingSkeleton } from '../../../components';
import type { AdvertItems } from '../../../shared/types/advertisement.type';
import { ListAd } from '../../../widgets';

interface RenderContentProps {
  loading: boolean;
  allItems: AdvertItems[];
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
