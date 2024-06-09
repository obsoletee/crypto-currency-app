import { Route, Routes } from 'react-router-dom';

import { Container } from './Container/Container';
import { Header } from './Header/Header';
import { CryptTablePage } from '../../pages/CryptTablePage';
import { CryptDetailsPage } from '../../pages/CryptDetailsPage';
import { NotFoundPage } from '../../pages/NotFoundPage';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<CryptTablePage />} />
          <Route path="/:id" element={<CryptDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </div>
  );
};
