import Header from "./components/header";
import Contact from "./components/contact";
import { LanguageProvider } from "./i18n";
import React, { useRef } from "react";
import Action from "./components/action";
import About from "./components/about";
import Footer from "./components/footer";
import Professions from "./components/professions";
import Solutions from "./components/solutions";

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const professionsRef = useRef<HTMLDivElement | null>(null);

  return (
    <LanguageProvider>
      <div className="flex flex-col">
        <Header />
        <Action
          scrollAbout={() => {
            if (aboutRef.current)
              aboutRef.current.scrollIntoView({ behavior: "smooth" });
          }}
          scrollContact={() => {
            if (contactRef.current)
              contactRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <About
          ref={aboutRef}
          scroll={() => {
            if (professionsRef.current)
              professionsRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <Professions
          ref={professionsRef}
          scroll={() => {
            if (solutionsRef.current)
              solutionsRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <Solutions
          ref={solutionsRef}
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
