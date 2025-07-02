import { Route, Routes } from 'react-router-dom';
import { AdPage, HomePage } from '../pages';

import Layout from './layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ad/:id" element={<AdPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
