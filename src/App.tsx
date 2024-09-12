import Header from "./components/header";
//import About from "./components/about";
import Action from "./components/action";
import Services from "./components/services";
import Contact from "./components/contact";

import { LanguageProvider } from "./i18n";

function App() {
  return (
    <LanguageProvider>
      <div className="flex flex-col">
        <Header />
        <Action />
        <Services />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
