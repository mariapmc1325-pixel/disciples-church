import { useEffect, useRef, useState } from 'react'
import { HERO_TAGLINE_PHRASES } from '../i18n/heroTaglines'
import { useLanguage } from '../i18n/LanguageContext'

const TYPE_MS = 1300
const ERASE_MS = 1100
const HOLD_MS = 2800

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

const LINE1_CLASS = 'hero-line-1 block text-4xl sm:text-5xl md:text-6xl'
const LINE2_CLASS =
  'hero-line-2 block normal-case font-serif italic font-medium text-primary-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2'

/* ----------------------------------------------------------------
   Ambient hero tagline: types the Spanish phrase, erases it, types
   the English phrase, erases it, repeats — forever, independent of
   the sitewide language toggle. Purely decorative; screen readers
   get a single static (non-looping) reading via the sr-only line.
---------------------------------------------------------------- */
export default function AnimatedTagline() {
  const { lang } = useLanguage()
  const reducedMotion = usePrefersReducedMotion()
  const startLangRef = useRef(lang)

  const [langKey, setLangKey] = useState(startLangRef.current)
  const [charCount, setCharCount] = useState(0)
  const [phase, setPhase] = useState('typing') // 'typing' | 'holding' | 'erasing'
  const timeoutRef = useRef(null)
  const rafRef = useRef(null)

  const pair = HERO_TAGLINE_PHRASES[0]
  const target = pair[langKey]
  const totalChars = target.line1.length + target.line2.length

  useEffect(() => {
    if (reducedMotion) return undefined

    let cancelled = false

    const animateCount = (fromChars, toChars, duration, onDone) => {
      let startTime = null
      const frame = (now) => {
        if (cancelled) return
        if (startTime === null) startTime = now
        const progress = Math.min((now - startTime) / duration, 1)
        setCharCount(Math.round(fromChars + (toChars - fromChars) * progress))
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(frame)
        } else {
          onDone()
        }
      }
      rafRef.current = requestAnimationFrame(frame)
    }

    if (phase === 'typing') {
      animateCount(0, totalChars, TYPE_MS, () => setPhase('holding'))
    } else if (phase === 'holding') {
      timeoutRef.current = setTimeout(() => setPhase('erasing'), HOLD_MS)
    } else {
      animateCount(totalChars, 0, ERASE_MS, () => {
        setLangKey((prev) => (prev === 'es' ? 'en' : 'es'))
        setPhase('typing')
      })
    }

    return () => {
      cancelled = true
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [phase, totalChars, reducedMotion])

  if (reducedMotion) {
    const staticPhrase = pair[lang]
    return (
      <h1 className="font-display uppercase font-extrabold text-white leading-[0.95] tracking-tight">
        <span className={LINE1_CLASS}>{staticPhrase.line1}</span>
        <span className={LINE2_CLASS} style={{ lineHeight: '0.92' }}>
          {staticPhrase.line2}
        </span>
      </h1>
    )
  }

  const line1Len = target.line1.length
  const displayLine1 = target.line1.slice(0, Math.min(charCount, line1Len))
  const displayLine2 = target.line2.slice(0, Math.max(0, charCount - line1Len))
  const cursorOnLine2 = charCount > line1Len || charCount === totalChars

  const cursor = (
    <span
      aria-hidden="true"
      className="inline-block w-[2px] sm:w-[3px] h-[0.8em] bg-current ml-1 align-middle animate-pulse"
    />
  )

  return (
    <h1 className="font-display uppercase font-extrabold text-white leading-[0.95] tracking-tight">
      <span aria-hidden="true">
        <span className={LINE1_CLASS}>
          {displayLine1}
          {!cursorOnLine2 && cursor}
        </span>
        <span className={LINE2_CLASS} style={{ lineHeight: '0.92' }}>
          {displayLine2}
          {cursorOnLine2 && cursor}
        </span>
      </span>
      <span className="sr-only">
        {pair[lang].line1} {pair[lang].line2}
      </span>
    </h1>
  )
}
