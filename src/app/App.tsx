import { Route, Routes } from 'react-router-dom';

import { useEffect } from 'react';
import { AdvertPage, FilterPage, HomePage } from '../pages';
import { useAllCategories } from '../shared/hooks/useAllCategories';
import { useAllCities } from '../shared/hooks/useAllCities';
import { Layout } from './layout';

/**
 * Главный компонент приложения
 * Включает роутинг и базовый layout
 * @returns {JSX.Element} Корневой компонент приложения
 */
function App() {
  const { fetchCities } = useAllCities();
  const { fetchCategories } = useAllCategories();

  useEffect(() => {
    fetchCities();
    fetchCategories();
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ad/:id" element={<AdvertPage />} />
        <Route path="/filters" element={<FilterPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
