import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)
const STORAGE_KEY = 'disciples_lang'

function detectInitialLang() {
  if (typeof window === 'undefined') return 'es'

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'es') return stored
  } catch {
    // localStorage unavailable (private browsing, etc.) — fall through to detection
  }

  const browserLangs = navigator.languages?.length ? navigator.languages : [navigator.language]
  const primary = browserLangs?.[0] || 'en'
  return primary.toLowerCase().startsWith('es') ? 'es' : 'en'
}

function readByPath(obj, path) {
  return path.split('.').reduce((node, key) => node?.[key], obj)
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang)
  const [announcement, setAnnouncement] = useState('')

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (next) => {
    if (next === lang) return
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // localStorage unavailable — the choice just won't persist across visits
    }
    setAnnouncement(readByPath(translations[next], 'common.languageAnnounce') || '')
  }

  const t = useMemo(() => {
    return (key) => {
      const value = readByPath(translations[lang], key)
      if (value !== undefined) return value
      return readByPath(translations.es, key) ?? key
    }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])

  return (
    <LanguageContext.Provider value={value}>
      {children}
      <div aria-live="polite" role="status" className="sr-only">
        {announcement}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
