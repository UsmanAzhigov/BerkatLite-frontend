import { type FC } from 'react';
import { InfoMessage, LoadingSkeleton } from '../../../components';
import type { AdvertItems } from '../../../shared/types/advertisement.type';
import { ListAd } from '../../../widgets';

/**
 * Свойства для компонента RenderContent
 * @property {boolean} loading - Флаг загрузки данных
 * @property {AdvertItems[]} allItems - Список объявлений
 */
interface RenderContentProps {
  loading: boolean;
  allItems: AdvertItems[];
}

/**
 * Компонент RenderContent отображает список объявлений, скелетон или сообщение об отсутствии товаров
 * @param {RenderContentProps} props - Свойства компонента
 * @returns {JSX.Element} Список объявлений, скелетон или сообщение
 */
export const RenderContent: FC<RenderContentProps> = ({ loading, allItems }) => {
  if (loading) {
    return <LoadingSkeleton />;
  }
  if (allItems.length > 0) {
    return <ListAd data={allItems} />;
  }
  return <InfoMessage message="Товаров нет 🫩" />;
};
