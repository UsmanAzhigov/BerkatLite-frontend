import type { Advert } from '../types';

export const mockAdverts: Advert[] = [
  {
    id: '1',
    title: 'Продам велосипед',
    description: 'Горный велосипед, почти новый',
    phone: ['+7 928 091 6480'],
    city: 'Грозный',
    price: 15000,
    image: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    ],
    date: '12.06.2024',
    properties: [
      { key: 'Состояние', value: 'Отличное' },
      { key: 'Цвет', value: 'Синий' },
    ],
  },
  {
    id: '2',
    title: 'Сдам квартиру',
    description: '2-комнатная, центр города',
    phone: ['+7 938 007 4271'],
    city: 'Аргун',
    price: 20000,
    image: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    ],
    date: '12.06.2024',
    properties: [
      { key: 'Этаж', value: '3' },
      { key: 'Площадь', value: '60м2' },
    ],
  },
  {
    id: '3',
    title: 'Продам ноутбук',
    description: 'MacBook Pro 2020, отличное состояние',
    phone: ['+7 900 123 4567'],
    city: 'Грозный',
    price: 80000,
    image: [],
    date: '10.06.2024',
    properties: [
      { key: 'Состояние', value: 'Как новый' },
      { key: 'Гарантия', value: 'Есть' },
    ],
  },
  {
    id: '4',
    title: 'Аренда офиса',
    description: 'Офис 100м2, центр города',
    phone: ['+7 900 765 4321'],
    city: 'Аргун',
    price: 50000,
    image: [],
    date: '09.06.2024',
    properties: [
      { key: 'Площадь', value: '100м2' },
      { key: 'Этаж', value: '2' },
    ],
  },
];
