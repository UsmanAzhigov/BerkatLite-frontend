import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app';
import './app/index.scss';

/**
 * Точка входа в приложение
 * Монтирует React-приложение в DOM и оборачивает его в BrowserRouter
 */
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
