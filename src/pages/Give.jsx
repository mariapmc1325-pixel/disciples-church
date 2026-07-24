import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoIconWhite from '../assets/logo/logo-icon-white.png'
import { useLanguage } from '../i18n/LanguageContext'
import LanguageToggle from '../components/LanguageToggle'

const EMBED_ID = 'subsplash-embed-5kmh'

export default function Give() {
  const { t } = useLanguage()
  const injectedRef = useRef(false)

  useEffect(() => {
    if (injectedRef.current) return
    injectedRef.current = true

    const target = document.getElementById(EMBED_ID)
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.onload = function () {
      window.subsplashEmbed('u/-PWQSWS/give?&embed=true', 'https://subsplash.com/', EMBED_ID)
    }
    script.src = 'https://dashboard.static.subsplash.com/production/web-client/external/embed-1.1.0.js'
    target.parentElement.insertBefore(script, target)

    return () => script.remove()
  }, [])

  return (
    <div className="min-h-screen bg-background text-ink font-body px-6 sm:px-10 lg:px-16 py-16 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary-dark lift-on-hover">
          <ArrowLeft className="h-4 w-4" /> {t('legal.backHome')}
        </Link>
        <LanguageToggle />
      </div>

      {/* mb-28 here (not spacing near the embed) because the Subsplash embed
          script relocates/rebuilds its target div on load — anything placed
          next to it, including a plain spacer, gets wiped out. This content
          block is never touched, so the gap has to live on its bottom edge. */}
      <div className="flex flex-col items-start text-left mb-28">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary mb-6">
          <img src={logoIconWhite} alt="" className="h-5 w-4 object-contain" />
        </span>

        <h1 className="font-display uppercase font-extrabold text-4xl sm:text-5xl text-ink tracking-tight">
          {t('give.title')}
        </h1>
        <p className="font-serif italic text-accent text-2xl sm:text-3xl mt-4">
          <span className="block">{t('give.subtitleLine1')}</span>
          <span className="block">{t('give.subtitleLine2')}</span>
        </p>
        <p className="text-muted text-base sm:text-lg leading-relaxed mt-6 max-w-xl">{t('give.body')}</p>
        <p className="font-serif italic text-muted text-sm mt-4">{t('give.scripture')}</p>
      </div>

      <div id={EMBED_ID} />
    </div>
  )
}
