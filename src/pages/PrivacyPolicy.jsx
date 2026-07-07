import { Link } from 'react-router-dom'
import { ArrowLeft, Church } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-ink font-body px-6 sm:px-10 lg:px-16 py-16 max-w-3xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary-dark lift-on-hover mb-10">
        <ArrowLeft className="h-4 w-4" /> Volver al inicio
      </Link>

      <div className="flex items-center gap-2 mb-8">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
          <Church className="h-5 w-5 text-white" strokeWidth={2.4} />
        </span>
        <span className="font-display font-bold text-lg text-ink">Disciples Church</span>
      </div>

      <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-ink tracking-tight mb-4">
        Política de Privacidad
      </h1>
      <p className="text-muted mb-10">Última actualización: julio de 2026</p>

      <div className="space-y-8 text-[15px] leading-relaxed text-ink/80">
        <section>
          <h2 className="font-display font-bold text-xl text-ink mb-2">Información que recopilamos</h2>
          <p>
            Cuando te comunicas con nosotros a través de nuestro formulario de contacto, recopilamos tu nombre,
            correo electrónico, teléfono y el mensaje que nos envíes. Esta información se usa únicamente para
            responder a tu solicitud y ayudarte a conectar con nuestra comunidad.
          </p>
        </section>
        <section>
          <h2 className="font-display font-bold text-xl text-ink mb-2">Cómo usamos tu información</h2>
          <p>
            Usamos tus datos exclusivamente para responder tus preguntas, conectarte con un Grupo Familiar o
            coordinar tu bautismo. No vendemos ni compartimos tu información con terceros con fines de mercadeo.
          </p>
        </section>
        <section>
          <h2 className="font-display font-bold text-xl text-ink mb-2">Tus derechos</h2>
          <p>
            Puedes solicitar en cualquier momento que actualicemos o eliminemos tu información de contacto,
            escribiéndonos a pastorjaves@hotmail.es.
          </p>
        </section>
        <section>
          <h2 className="font-display font-bold text-xl text-ink mb-2">Contacto</h2>
          <p>
            Disciples Church · 724 Garlington Rd, Greenville, SC 29615 · 864-567-8516 ·
            pastorjaves@hotmail.es
          </p>
        </section>
      </div>
    </div>
  )
}
