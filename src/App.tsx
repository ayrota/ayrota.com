import { Routes, Route } from 'react-router-dom';

import { BackgroundField } from './components/BackgroundField';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Hero } from './sections/Hero';
import { Approach } from './sections/Approach';
import { Capabilities } from './sections/Capabilities';
import { Provisioning } from './sections/Provisioning';
import { Contact } from './sections/Contact';
import { Core } from './sections/Core';
import { EarlyAccess } from './sections/EarlyAccess';

import Privacy from './pages/Privacy';
import { ScrollToHash } from './components/ScrollToHash';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-fg font-sans relative">
      <BackgroundField />
      <Header />
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
              <Provisioning />
              <EarlyAccess />
              <Contact />
              <Footer />
            </main>
          }
        />

        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </div>
  );
}