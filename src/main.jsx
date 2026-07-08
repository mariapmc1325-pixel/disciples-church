import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Terms from './pages/Terms.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacidad" element={<PrivacyPolicy />} />
          <Route path="/terminos" element={<Terms />} />
        </Routes>
      </HashRouter>
    </LanguageProvider>
  </StrictMode>
)
