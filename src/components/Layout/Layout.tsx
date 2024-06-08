import { Container } from './Container/Container';
import { Header } from './Header/Header';
import { CryptTablePage } from '../../pages/CryptTablePage';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Container>
        <CryptTablePage />
      </Container>
    </div>
  );
};
