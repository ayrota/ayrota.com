import { Routes, Route } from 'react-router-dom';

import { BackgroundField } from './components/BackgroundField';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { ScrollToHash } from './components/ScrollToHash';
import { Seo } from './components/Seo';

import { Hero } from './sections/Hero';
import { Applications } from './sections/Applications';
import { Products } from './sections/Product';
import { Technology } from './sections/Technology';
import { Engagement } from './sections/Engagement';
import { Contact } from './sections/Contact';

import Privacy from './pages/Privacy';
import Yaya from './pages/Yaya';
import Alkon from './pages/Alkon';

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg font-sans text-fg">
      <Seo />
      <BackgroundField />

      <Header />

      <ScrollToHash />

      <Routes>
        <Route
          path="/"
          element={
            <main className="relative z-10">
              <Hero />

              <Applications />

              <Products />

              <Technology />

              <Engagement />

              <Contact />

              <Footer />
            </main>
          }
        />

        <Route path="/privacy" element={<Privacy />} />
        <Route path="/alkon" element={<Alkon />} />
        <Route path="/yaya" element={<Yaya />} />
        <Route
          path="*"
          element={
            <main className="relative z-10 flex min-h-screen flex-col bg-[#09131d] pt-32 text-white">
              <div className="mx-auto w-full max-w-[1500px] flex-1 px-6 py-24 md:px-10">
                <h1 className="text-[40px] font-semibold">404</h1>
                <p className="mt-4 text-white/60">Page not found / Sayfa bulunamadı.</p>
                <a
                  className="mt-8 inline-block border-b border-cyan-200/40 pb-2 text-white"
                  href="/"
                >
                  AYROTA
                </a>
              </div>
              <Footer />
            </main>
          }
        />
      </Routes>
    </div>
  );
}
