import { List, ListItem } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdCard } from '../../components/adCard';
import { formattedDate } from '../../shared/lib/formattedDate';
import type { AdvertItems } from '../../shared/types/advertisement.type';

interface ListAdType {
  data: AdvertItems[];
}

export const ListAd: FC<ListAdType> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <List>
      <AnimatePresence>
        {data?.map((ad) => (
          <ListItem
            key={ad.id}
            disablePadding
            sx={{ mb: 2, cursor: 'pointer' }}
            onClick={() => navigate(`/ad/${ad.id}`)}
            component={motion.li}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 60 }}
          >
            <AdCard
              image={ad.images}
              title={ad.title}
              price={ad.price}
              description={ad.description}
              city={ad.city}
              date={formattedDate(ad.createdAt)}
            />
          </ListItem>
        ))}
      </AnimatePresence>
    </List>
  );
};
