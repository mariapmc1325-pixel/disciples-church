import { Link } from 'react-router-dom'
import { ArrowLeft, Church } from 'lucide-react'

export default function Terms() {
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
        Términos y Condiciones
      </h1>
      <p className="text-muted mb-10">Última actualización: julio de 2026</p>

      <div className="space-y-8 text-[15px] leading-relaxed text-ink/80">
        <section>
          <h2 className="font-display font-bold text-xl text-ink mb-2">Uso del sitio</h2>
          <p>
            Este sitio web es un recurso informativo de Disciples Church para dar a conocer nuestros servicios,
            ministerios y formas de contacto. El contenido se ofrece de buena fe y puede actualizarse sin previo aviso.
          </p>
        </section>
        <section>
          <h2 className="font-display font-bold text-xl text-ink mb-2">Formulario de contacto</h2>
          <p>
            Al enviar el formulario de contacto, aceptas que un miembro de nuestro equipo se comunique contigo
            por teléfono o correo electrónico para responder tu solicitud.
          </p>
        </section>
        <section>
          <h2 className="font-display font-bold text-xl text-ink mb-2">Propiedad del contenido</h2>
          <p>
            Los textos, imágenes y materiales de este sitio pertenecen a Disciples Church y no deben reproducirse
            sin autorización previa.
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
