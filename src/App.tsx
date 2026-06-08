import { Routes, Route, useLocation } from 'react-router-dom';

import { BackgroundField } from './components/BackgroundField';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { ScrollToHash } from './components/ScrollToHash';

import { Hero } from './sections/Hero';
import { Products } from './sections/Product';
import { Platforms } from './sections/Platforms.tsx';
import { Contact } from './sections/Contact';

import Privacy from './pages/Privacy';
import Ilber from './pages/İlber';

export default function App() {
  const location = useLocation();
  const isIlberPage = location.pathname === '/ilber';

  return (
    <div className="relative min-h-screen bg-bg font-sans text-fg">
      <BackgroundField />

      {!isIlberPage && <Header />}

      <ScrollToHash />

      <Routes>
        <Route
          path="/"
          element={
            <main className="relative z-10">
              <Hero />
              <Products />
              <Platforms />
              <Contact />
              <Footer />
            </main>
          }
        />

        <Route path="/privacy" element={<Privacy />} />
        <Route path="/ilber" element={<Ilber />} />
      </Routes>
    </div>
  );
}