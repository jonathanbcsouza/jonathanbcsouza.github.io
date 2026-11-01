import { Navbar } from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
