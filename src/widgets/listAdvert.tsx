import { Grid } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { AdvertCard } from '../components';
import type { AdvertItems } from '../shared/types/advertisement.type';

/**
 * Свойства для компонента ListAd
 * @property {AdvertItems[]} data - Список объявлений для отображения
 */
interface ListAdType {
  data: AdvertItems[];
}

/**
 * Компонент ListAd отображает список карточек объявлений с анимацией
 * @param {ListAdType} props - Свойства компонента
 * @returns {JSX.Element} Список карточек объявлений
 */
export const ListAd: FC<ListAdType> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2}>
      <AnimatePresence>
        {data?.map((ad) => (
          <Grid size={{ xs: 6 }} key={ad.id} sx={{ display: 'flex' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 60 }}
              style={{ height: '100%', width: '100%', display: 'flex' }}
            >
              <AdvertCard
                image={ad.images}
                title={ad.title}
                price={ad.price}
                description={ad.description}
                city={ad.city}
                date={ad.createdAt}
                onClick={() => navigate(`/ad/${ad.id}`)}
              />
            </motion.div>
          </Grid>
        ))}
      </AnimatePresence>
    </Grid>
  );
};
