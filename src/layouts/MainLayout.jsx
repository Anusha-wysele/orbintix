import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  const { pathname } = useLocation();

  // Automatically scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-primary font-outfit flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[78px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
