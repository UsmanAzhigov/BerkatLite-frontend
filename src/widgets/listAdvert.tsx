import { Grid } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

import type { FC, Ref } from 'react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
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
  const [visibleCount, setVisibleCount] = useState(10);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView && visibleCount < data.length) {
      setVisibleCount((prev) => Math.min(prev + 10, data.length));
    }
  }, [inView, visibleCount, data.length]);

  return (
    <Grid container spacing={2}>
      <AnimatePresence>
        {data?.slice(0, visibleCount).map((ad, idx) => (
          <Grid
            size={{ xs: 6 }}
            key={ad.id}
            sx={{ display: 'flex' }}
            ref={idx === visibleCount - 1 ? (ref as Ref<HTMLDivElement>) : undefined}
          >
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
                city={ad.city ?? ''}
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
