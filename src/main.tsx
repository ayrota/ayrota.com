import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';

import { LanguageProvider } from './lib/LanguageContext';

function migrateLegacyHashUrls() {
  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') return;

  const { hash, search } = window.location;
  const legacyPage = hash.match(/^#\/(alkon|yaya|privacy)\/?$/i);

  if (legacyPage) {
    window.history.replaceState(null, '', `/${legacyPage[1].toLowerCase()}/${search}`);
    return;
  }

  const legacySection = hash.match(
    /^#\/#(hero|products|applications|technology|engagement|contact)$/i,
  );

  if (legacySection) {
    window.history.replaceState(null, '', `/${search}#${legacySection[1].toLowerCase()}`);
  }
}

migrateLegacyHashUrls();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
