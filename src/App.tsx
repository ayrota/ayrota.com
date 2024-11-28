import Header from "./components/header";
import Contact from "./components/contact";
import { LanguageProvider } from "./i18n";
import React, { useRef } from "react";
import Action from "./components/action";
import About from "./components/about";
import Services from "./components/services";
import Info from "./components/info";
import Footer from "./components/footer";

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <LanguageProvider>
      <div className="flex flex-col">
        <Header />
        <Action
          scroll={() => {
            if (aboutRef.current)
              aboutRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <About
          ref={aboutRef}
          scroll={() => {
            if (servicesRef.current)
              servicesRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <Services
          ref={servicesRef}
          scroll={() => {
            if (infoRef.current)
              infoRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <Info
          ref={infoRef}
          scroll={() => {
            if (contactRef.current)
              contactRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
