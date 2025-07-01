import { Route, Routes } from 'react-router-dom';
import AdPage from '../pages/adPage';
import HomePage from '../pages/home';
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
