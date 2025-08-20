import InsertCommentIcon from '@mui/icons-material/InsertComment';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Stack } from '@mui/material';
import React from 'react';
import { COLORS } from '../../../shared/constants';
import { Button } from '../../../shared/ui';

/**
 * Свойства для компонента ContactButtons.
 * @property {string[]} phone - Список телефонов для связи
 */
interface ContactButtonsProps {
  phone: string;
}

/**
 * Компонент ContactButtons отображает кнопки для связи через WhatsApp и телефон.
 * @param {ContactButtonsProps} props - Свойства компонента
 * @returns {JSX.Element} Кнопки для связи
 */
export const ContactButtons: React.FC<ContactButtonsProps> = ({ phone }) => (
  <Stack display="flex" flexDirection="row" justifyContent="space-between">
    <Button
      sx={{ backgroundColor: COLORS.GREEN_WHATSAPP, width: '150px', padding: '8px' }}
      onClick={() => window.open(`https://wa.me/${phone.replace(/\D/g, '')}`, '_blank')}
    >
      <InsertCommentIcon sx={{ mr: 1 }} />
      Написать
    </Button>
    <Button sx={{ width: '150px', padding: '8px' }} onClick={() => window.open(`tel:${phone}`)}>
      <PhoneInTalkIcon sx={{ mr: 1 }} />
      Позвонить
    </Button>
  </Stack>
);
