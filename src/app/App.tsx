import { Route, Routes } from 'react-router-dom';

import { AdvertPage, HomePage } from '../pages';
import Layout from './layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ad/:id" element={<AdvertPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
