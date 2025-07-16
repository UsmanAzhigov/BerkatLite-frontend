import { Message, Phone } from '@mui/icons-material';
import React from 'react';
import { Button } from '../../../shared/ui';

interface ContactButtonsProps {
  phone: string[];
}

export const ContactButtons: React.FC<ContactButtonsProps> = ({ phone }) => (
  <>
    <Button
      startIcon={<Message />}
      sx={{ backgroundColor: '#25D366' }}
      onClick={() => window.open(`https://wa.me/${phone[0].replace(/\D/g, '')}`, '_blank')}
    >
      Написать
    </Button>
    <Button startIcon={<Phone />} onClick={() => window.open(`tel:${phone}`)}>
      Позвонить
    </Button>
  </>
);
