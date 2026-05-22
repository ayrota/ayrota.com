import { Routes, Route, useLocation } from 'react-router-dom';

import { BackgroundField } from './components/BackgroundField';
import { Header } from './components/header';
import { Footer } from './components/footer';

import { Hero } from './sections/Hero';
import { Approach } from './sections/Approach';
import { Capabilities } from './sections/Capabilities';
import { Provisioning } from './sections/Provisioning';
import { Contact } from './sections/Contact';
import { Core } from './sections/Core';
import { EarlyAccess } from './sections/EarlyAccess';

import Privacy from './pages/Privacy';
import { ScrollToHash } from './components/ScrollToHash';
import { Product } from './sections/Product';
import Ilber from './pages/Ilber';

export default function App() {
  const location = useLocation();

  const isIlberPage = location.pathname === '/ilber';

  return (
    <div className="min-h-screen bg-bg text-fg font-sans relative">
      <BackgroundField />

      {!isIlberPage && <Header />}

      <ScrollToHash />

      <Routes>
        <Route
          path="/"
          element={
            <main className="relative z-10">
              <Hero />
              <Approach />
              <Core />
              <Capabilities />
              <Product />
              <Provisioning />
              <EarlyAccess />
              <Contact />
              <Footer />
            </main>
          }
        />

        <Route path="/privacy" element={<Privacy />} />

        <Route
          path="/ilber"
          element={
            <main className="relative z-10">
              <Ilber />
            </main>
          }
        />
      </Routes>
    </div>
  );
}