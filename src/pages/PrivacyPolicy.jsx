import { Link } from 'react-router-dom'
import { ArrowLeft, Church } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import LanguageToggle from '../components/LanguageToggle'

export default function PrivacyPolicy() {
  const { t } = useLanguage()
  const sections = ['collect', 'use', 'rights']

  return (
    <div className="min-h-screen bg-background text-ink font-body px-6 sm:px-10 lg:px-16 py-16 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary-dark lift-on-hover">
          <ArrowLeft className="h-4 w-4" /> {t('legal.backHome')}
        </Link>
        <LanguageToggle />
      </div>

      <div className="flex items-center gap-2 mb-8">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
          <Church className="h-5 w-5 text-white" strokeWidth={2.4} />
        </span>
        <span className="font-display font-bold text-lg text-ink">{t('common.brand')}</span>
      </div>

      <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-ink tracking-tight mb-4">
        {t('legal.privacy.title')}
      </h1>
      <p className="text-muted mb-10">{t('legal.updated')}</p>

      <div className="space-y-8 text-[15px] leading-relaxed text-ink/80">
        {sections.map((key) => (
          <section key={key}>
            <h2 className="font-display font-bold text-xl text-ink mb-2">{t(`legal.privacy.sections.${key}.title`)}</h2>
            <p>{t(`legal.privacy.sections.${key}.text`)}</p>
          </section>
        ))}
        <section>
          <h2 className="font-display font-bold text-xl text-ink mb-2">{t('legal.contactSection')}</h2>
          <p>{t('legal.addressLine')}</p>
        </section>
      </div>
    </div>
  )
}
