import { Routes, Route } from 'react-router-dom';

import { BackgroundField } from './components/BackgroundField';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { ScrollToHash } from './components/ScrollToHash';

import { Hero } from './sections/Hero';
import { Problem } from './sections/Problem';
import { Products } from './sections/Product';
import { Platforms } from './sections/Platforms';
import { Contact } from './sections/Contact';

import Privacy from './pages/Privacy';
import Ilber from './pages/İlber';
import Yaya from './pages/Yaya';
import Yoruk from './pages/Yoruk';
import Alkon from './pages/Alkon';

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg font-sans text-fg">
      <BackgroundField />

      <Header />

      <ScrollToHash />

      <Routes>
        <Route
          path="/"
          element={
            <main className="relative z-10">
              <Hero />

              <Problem />

              <Products />

              <Platforms />

              <Contact />

              <Footer />
            </main>
          }
        />

        <Route path="/privacy" element={<Privacy />} />
        <Route path="/ilber" element={<Ilber />} />
        <Route path="/alkon" element={<Alkon />} />
        <Route path="/yaya" element={<Yaya />} />
        <Route path="/yoruk" element={<Yoruk />} />
      </Routes>
    </div>
  );
}
