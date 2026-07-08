import { useLanguage } from '../i18n/LanguageContext'

/* ----------------------------------------------------------------
   Sitewide EN / ES switch — two equal text labels, no flags.
   `dark` controls contrast against the transparent hero navbar vs.
   the opaque/glass states.
---------------------------------------------------------------- */
export default function LanguageToggle({ dark = false, className = '' }) {
  const { lang, setLang } = useLanguage()

  const inactiveClass = dark ? 'text-white/50 hover:text-white' : 'text-ink/40 hover:text-ink'
  const activeClass = dark ? 'text-white' : 'text-ink'
  const dividerClass = dark ? 'text-white/30' : 'text-ink/20'

  return (
    <div className={`flex items-center gap-1.5 font-mono text-xs font-semibold tracking-widest ${className}`}>
      <button
        type="button"
        onClick={() => setLang('es')}
        aria-pressed={lang === 'es'}
        aria-label="Cambiar a español"
        className={`transition-colors ${lang === 'es' ? `${activeClass} underline underline-offset-4 decoration-primary decoration-2` : inactiveClass}`}
      >
        ES
      </button>
      <span className={dividerClass} aria-hidden="true">
        /
      </span>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        aria-label="Switch to English"
        className={`transition-colors ${lang === 'en' ? `${activeClass} underline underline-offset-4 decoration-primary decoration-2` : inactiveClass}`}
      >
        EN
      </button>
    </div>
  )
}
