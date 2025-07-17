import { Message, Phone } from '@mui/icons-material';
import React from 'react';
import { COLORS } from '../../../shared/constants';
import { Button } from '../../../shared/ui';

/**
 * Свойства для компонента ContactButtons.
 * @property {string[]} phone - Список телефонов для связи
 */
interface ContactButtonsProps {
  phone: string[];
}

/**
 * Компонент ContactButtons отображает кнопки для связи через WhatsApp и телефон.
 * @param {ContactButtonsProps} props - Свойства компонента
 * @returns {JSX.Element} Кнопки для связи
 */
export const ContactButtons: React.FC<ContactButtonsProps> = ({ phone }) => (
  <>
    <Button
      startIcon={<Message />}
      sx={{ backgroundColor: COLORS.GREEN_WHATSAPP }}
      onClick={() => window.open(`https://wa.me/${phone[0].replace(/\D/g, '')}`, '_blank')}
    >
      Написать
    </Button>
    <Button startIcon={<Phone />} onClick={() => window.open(`tel:${phone}`)}>
      Позвонить
    </Button>
  </>
);
