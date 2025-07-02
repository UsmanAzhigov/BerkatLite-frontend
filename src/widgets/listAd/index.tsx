import { List, ListItem } from '@mui/material';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdCard } from '../../components/adCard';
import type { Advert } from '../../shared/types';

interface ListAdType {
  data: Advert[];
}

export const ListAd: FC<ListAdType> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <List>
      {data?.map((ad) => (
        <ListItem
          key={ad.id}
          disablePadding
          sx={{ mb: 2, cursor: 'pointer' }}
          onClick={() => navigate(`/ad/${ad.id}`)}
        >
          <AdCard
            image={ad.image}
            title={ad.title}
            price={ad.price}
            description={ad.description}
            city={ad.city}
            date={ad.date}
          />
        </ListItem>
      ))}
    </List>
  );
};
