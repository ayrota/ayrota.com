import Header from "./components/header";
import Action from "./components/action";
import DtSection from "./components/dtSection";
import Contact from "./components/contact";

import { LanguageProvider } from "./i18n";
import { useRef } from "react";
import AiSection from "./components/aisection";
import DtAiSection from "./components/dtAiSection";



function App() {
  const dtAiSectionRef = useRef<HTMLDivElement | null>(null);
  const dtSectionRef = useRef<HTMLDivElement | null>(null);
  const aiSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToDtAi = () => {
    if (dtAiSectionRef.current) {
      dtAiSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDt = () => {
    if (dtSectionRef.current) {
      dtSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAi = () => {
    if (aiSectionRef.current) {
      aiSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <LanguageProvider>
      <div className="flex flex-col">
        <Header />
        <Action scrollToDtAi={scrollToDtAi}/>
        <DtAiSection ref={dtAiSectionRef} scrollToDt={scrollToDt} />
        <DtSection ref={dtSectionRef} scrollToAi={scrollToAi} />
        <AiSection ref={aiSectionRef} />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
