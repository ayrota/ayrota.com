import Header from "./components/header";
import About from "./components/about";
import { LanguageProvider } from "./i18n";

function App() {
  return (
    <LanguageProvider>
      <div className="flex flex-col">
        <Header />
        <About />
      </div>
    </LanguageProvider>
  );
}

export default App;
