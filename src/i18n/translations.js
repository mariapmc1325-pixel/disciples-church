/* ----------------------------------------------------------------
   Sitewide copy, keyed by section then string id.
   Add a new language by adding a top-level key here — every
   component reads through t('a.b.c'), nothing is hardcoded per page.
---------------------------------------------------------------- */
export const translations = {
  es: {
    common: {
      brand: 'Disciples Church',
      imNew: 'Soy Nuevo',
      contactUs: 'Contáctanos',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      languageAnnounce: 'Idioma cambiado a español',
    },
    nav: {
      ministries: 'Ministerios',
      vision: 'Visión',
      sunday: 'Un Domingo',
      contact: 'Contacto',
    },
    hero: {
      founded: 'Fundada en 2020 · Greenville, SC',
      imageAlt: 'Congregación de Disciples Church adorando durante un servicio dominical',
      subtitle:
        'Una iglesia multicultural en el Upstate de Carolina del Sur, comprometida a seguir a Jesús, formar discípulos y alcanzar a las naciones.',
      serviceTime: 'Domingos · 11:00 AM',
      scroll: 'Desliza',
    },
    pillars: {
      eyebrow: '╱ Nuestra visión',
      heading1: 'Una familia de discípulos.',
      heading2: 'Para todas las naciones.',
      intro:
        'La misión de Disciples es hacer discípulos. Creemos que Dios transforma vidas a través de relaciones, comunidad y discipulado intencional.',
      items: {
        community: {
          title: 'Comunidad',
          label: 'grupos familiares',
          desc: 'Más de 20 Grupos Familiares se reúnen cada semana en hogares por todo el Upstate para crecer juntos en la fe.',
        },
        nations: {
          title: 'Naciones',
          label: 'naciones representadas',
          desc: 'Somos una familia multicultural: 17 naciones se reúnen bajo un mismo techo para adorar a un mismo Dios.',
        },
        family: {
          title: 'Familia',
          label: 'miembros activos',
          desc: 'Cerca de 400 personas llaman a Disciples su hogar espiritual, creciendo juntas desde el año 2020.',
        },
      },
    },
    protocol: {
      eyebrow: '╱ Un domingo en Disciples',
      heading1: 'Tres momentos.',
      heading2: 'Una misma familia.',
      stepLabel: 'Paso',
      brandTag: 'Disciples',
      steps: {
        worship: {
          title: 'Adoración',
          tagline: 'Comenzamos a las 11:00 AM.',
          text: 'Nuestro servicio incluye adoración, oración y enseñanza bíblica centrada en Jesús. Encontrarás un ambiente cálido y personas reales, con traducción simultánea disponible.',
          alt: 'Congregación adorando durante el servicio',
          meta: 'Paso 1 / Adoración',
        },
        table: {
          title: 'A La Mesa',
          tagline: 'Seguimos a la 1:30 PM.',
          text: 'Después del servicio te invitamos a A La Mesa, un tiempo de comida y compañerismo donde compartimos juntos alrededor de la mesa.',
          alt: 'Familia de la iglesia compartiendo en A La Mesa',
          meta: 'Paso 2 / Comunidad',
        },
        group: {
          title: 'Tu Grupo Familiar',
          tagline: 'Tu próximo paso.',
          text: 'Acércate a nuestro equipo de Protocolo después del servicio para conectar con un Grupo Familiar y seguir creciendo en comunidad durante la semana.',
          alt: 'Familia de la iglesia orando junta durante el servicio',
          meta: 'Paso 3 / Siguiente paso',
        },
      },
    },
    services: {
      eyebrow: '╱ Todos nuestros ministerios',
      heading1: 'Un mismo cuerpo,',
      heading2: 'muchos ministerios.',
      intro: 'Hay un lugar para ti en Disciples. Hogar en Greenville, Carolina del Sur, abierto a todo el Upstate.',
      items: {
        familyGroups: {
          title: 'Grupos Familiares',
          text: 'Más de 20 grupos se reúnen semanalmente en hogares por todo el Upstate para estudiar la Palabra, orar juntos y crecer en comunidad.',
        },
        encounter: {
          title: 'Encuentro',
          text: 'Un fin de semana dedicado a la sanidad, la libertad y un encuentro transformador con Dios.',
        },
        baptisms: {
          title: 'Bautismos',
          text: 'Una celebración pública de lo que Dios está haciendo en tu vida y tu decisión de seguir a Jesús.',
        },
        leadershipSchool: {
          title: 'Escuela de Liderazgo',
          text: 'Cinco niveles de formación para crecer en tu fe, vivir como Cristo y aprender a hacer discípulos.',
        },
        children: {
          title: 'Ministerio Infantil',
          text: 'Ambientes seguros y preparados para bebés y niños hasta los 11 años, con clases bíblicas apropiadas para su edad.',
        },
        translation: {
          title: 'Traducción Simultánea',
          text: 'Somos una iglesia bilingüe: cada servicio cuenta con traducción simultánea para que todos se sientan en casa.',
        },
      },
    },
    trust: {
      eyebrow: '╱ Por qué confiar en nosotros',
      heading: 'Más que un servicio dominical.',
      badges: {
        denomination: {
          title: 'Iglesia del Nazareno',
          text: 'Formamos parte de la Iglesia del Nazareno, una denominación cristiana de tradición wesleyana comprometida a seguir a Jesús y hacer discípulos.',
        },
        bilingual: {
          title: 'Iglesia bilingüe',
          text: 'Ofrecemos traducción simultánea en cada servicio para que toda persona, sin importar su idioma, se sienta en casa.',
        },
        nations: {
          title: '17 naciones representadas',
          text: 'Somos una familia multicultural del Upstate de Carolina del Sur, unida por un mismo llamado a seguir a Jesús.',
        },
      },
    },
    contact: {
      eyebrow: '╱ Contacto',
      heading1: '¿Cómo podemos',
      heading2: 'ayudarte?',
      intro: 'Escríbenos y con gusto te contactaremos para resolver tus dudas o ayudarte a dar tu próximo paso.',
      call: 'Llámanos',
      email: 'Escríbenos',
      visit: 'Visítanos',
      privacyTitle: 'Privacidad',
      privacyText: 'Tu información está segura con nosotros. Solo la usamos para responder tu mensaje; no la compartimos con terceros.',
      form: {
        name: 'Nombre',
        email: 'Correo electrónico',
        phone: 'Teléfono',
        zip: 'Código postal',
        message: 'Tu mensaje',
        messagePlaceholder: 'Cuéntanos brevemente en qué podemos ayudarte...',
        disclaimer: 'Te contactaremos lo antes posible. Los campos con * son obligatorios.',
        sending: 'Enviando...',
        send: 'Enviar mensaje',
      },
      success: {
        title: '¡Gracias por tu mensaje!',
        text: 'Nos pondremos en contacto contigo lo antes posible.',
      },
    },
    footer: {
      tagline: 'Disciples Church — una familia multicultural en el Upstate de Carolina del Sur.',
      description: 'Una iglesia comprometida a seguir a Jesús, formar discípulos y alcanzar a las naciones.',
      denomination: 'Iglesia del Nazareno · Tradición Wesleyana',
      columnMinistries: 'Ministerios',
      columnChurch: 'Iglesia',
      columnContact: 'Contacto',
      ourVision: 'Nuestra Visión',
      aSunday: 'Un Domingo',
      livePresence: 'Presencia en vivo · Servicios cada domingo',
      privacy: 'Privacidad',
      terms: 'Términos',
      copyright: '© 2026 Disciples Church',
    },
    legal: {
      backHome: 'Volver al inicio',
      updated: 'Última actualización: julio de 2026',
      contactSection: 'Contacto',
      addressLine: 'Disciples Church · 724 Garlington Rd, Greenville, SC 29615 · 864-567-8516 · pastorjaves@hotmail.es',
      privacy: {
        title: 'Política de Privacidad',
        sections: {
          collect: {
            title: 'Información que recopilamos',
            text: 'Cuando te comunicas con nosotros a través de nuestro formulario de contacto, recopilamos tu nombre, correo electrónico, teléfono y el mensaje que nos envíes. Esta información se usa únicamente para responder a tu solicitud y ayudarte a conectar con nuestra comunidad.',
          },
          use: {
            title: 'Cómo usamos tu información',
            text: 'Usamos tus datos exclusivamente para responder tus preguntas, conectarte con un Grupo Familiar o coordinar tu bautismo. No vendemos ni compartimos tu información con terceros con fines de mercadeo.',
          },
          rights: {
            title: 'Tus derechos',
            text: 'Puedes solicitar en cualquier momento que actualicemos o eliminemos tu información de contacto, escribiéndonos a pastorjaves@hotmail.es.',
          },
        },
      },
      terms: {
        title: 'Términos y Condiciones',
        sections: {
          use: {
            title: 'Uso del sitio',
            text: 'Este sitio web es un recurso informativo de Disciples Church para dar a conocer nuestros servicios, ministerios y formas de contacto. El contenido se ofrece de buena fe y puede actualizarse sin previo aviso.',
          },
          form: {
            title: 'Formulario de contacto',
            text: 'Al enviar el formulario de contacto, aceptas que un miembro de nuestro equipo se comunique contigo por teléfono o correo electrónico para responder tu solicitud.',
          },
          ownership: {
            title: 'Propiedad del contenido',
            text: 'Los textos, imágenes y materiales de este sitio pertenecen a Disciples Church y no deben reproducirse sin autorización previa.',
          },
        },
      },
    },
  },

  en: {
    common: {
      brand: 'Disciples Church',
      imNew: "I'm New",
      contactUs: 'Contact Us',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      languageAnnounce: 'Language changed to English',
    },
    nav: {
      ministries: 'Ministries',
      vision: 'Vision',
      sunday: 'A Sunday',
      contact: 'Contact',
    },
    hero: {
      founded: 'Founded in 2020 · Greenville, SC',
      imageAlt: 'Disciples Church congregation worshiping during a Sunday service',
      subtitle:
        'A multicultural church in the Upstate of South Carolina, committed to following Jesus, forming disciples, and reaching the nations.',
      serviceTime: 'Sundays · 11:00 AM',
      scroll: 'Scroll',
    },
    pillars: {
      eyebrow: '╱ Our vision',
      heading1: 'A family of disciples.',
      heading2: 'For every nation.',
      intro:
        "Disciples' mission is to make disciples. We believe God transforms lives through relationships, community, and intentional discipleship.",
      items: {
        community: {
          title: 'Community',
          label: 'family groups',
          desc: 'More than 20 Family Groups meet weekly in homes across the Upstate to grow together in faith.',
        },
        nations: {
          title: 'Nations',
          label: 'nations represented',
          desc: 'We are a multicultural family: 17 nations gather under one roof to worship one God.',
        },
        family: {
          title: 'Family',
          label: 'active members',
          desc: 'Nearly 400 people call Disciples their spiritual home, growing together since 2020.',
        },
      },
    },
    protocol: {
      eyebrow: '╱ A Sunday at Disciples',
      heading1: 'Three moments.',
      heading2: 'One family.',
      stepLabel: 'Step',
      brandTag: 'Disciples',
      steps: {
        worship: {
          title: 'Worship',
          tagline: 'We begin at 11:00 AM.',
          text: "Our service includes worship, prayer, and Jesus-centered Bible teaching. You'll find a warm atmosphere and real people, with simultaneous translation available.",
          alt: 'Congregation worshiping during the service',
          meta: 'Step 1 / Worship',
        },
        table: {
          title: 'At the Table',
          tagline: 'Next, at 1:30 PM.',
          text: "After the service, we invite you to A La Mesa (“At the Table”), a time of food and fellowship where we share a meal together.",
          alt: 'Church family sharing at A La Mesa',
          meta: 'Step 2 / Community',
        },
        group: {
          title: 'Your Family Group',
          tagline: 'Your next step.',
          text: 'Stop by our Protocol team after the service to connect with a Family Group and keep growing in community throughout the week.',
          alt: 'Church family praying together during the service',
          meta: 'Step 3 / Next step',
        },
      },
    },
    services: {
      eyebrow: '╱ All our ministries',
      heading1: 'One body,',
      heading2: 'many ministries.',
      intro: "There's a place for you at Disciples. Home in Greenville, South Carolina, open to the whole Upstate.",
      items: {
        familyGroups: {
          title: 'Family Groups',
          text: 'More than 20 groups meet weekly in homes across the Upstate to study the Word, pray together, and grow in community.',
        },
        encounter: {
          title: 'Encounter',
          text: 'A weekend dedicated to healing, freedom, and a transformative encounter with God.',
        },
        baptisms: {
          title: 'Baptisms',
          text: 'A public celebration of what God is doing in your life and your decision to follow Jesus.',
        },
        leadershipSchool: {
          title: 'School of Leadership',
          text: 'Five levels of training to grow in your faith, live like Christ, and learn to make disciples.',
        },
        children: {
          title: "Children's Ministry",
          text: 'Safe, prepared environments for babies and children up to age 11, with age-appropriate Bible classes.',
        },
        translation: {
          title: 'Simultaneous Translation',
          text: 'We are a bilingual church: every service offers simultaneous translation so everyone feels at home.',
        },
      },
    },
    trust: {
      eyebrow: '╱ Why trust us',
      heading: 'More than a Sunday service.',
      badges: {
        denomination: {
          title: 'Church of the Nazarene',
          text: 'We are part of the Church of the Nazarene, a Christian denomination in the Wesleyan tradition committed to following Jesus and making disciples.',
        },
        bilingual: {
          title: 'Bilingual church',
          text: 'We offer simultaneous translation at every service so that every person, regardless of language, feels at home.',
        },
        nations: {
          title: '17 nations represented',
          text: 'We are a multicultural family from the Upstate of South Carolina, united by one calling to follow Jesus.',
        },
      },
    },
    contact: {
      eyebrow: '╱ Contact',
      heading1: 'How can we',
      heading2: 'help you?',
      intro: "Write to us and we'll gladly get in touch to answer your questions or help you take your next step.",
      call: 'Call us',
      email: 'Email us',
      visit: 'Visit us',
      privacyTitle: 'Privacy',
      privacyText: 'Your information is safe with us. We only use it to respond to your message; we never share it with third parties.',
      form: {
        name: 'Name',
        email: 'Email address',
        phone: 'Phone',
        zip: 'ZIP code',
        message: 'Your message',
        messagePlaceholder: 'Tell us briefly how we can help...',
        disclaimer: "We'll get back to you as soon as possible. Fields marked with * are required.",
        sending: 'Sending...',
        send: 'Send message',
      },
      success: {
        title: 'Thank you for your message!',
        text: "We'll be in touch with you as soon as possible.",
      },
    },
    footer: {
      tagline: 'Disciples Church — a multicultural family in the Upstate of South Carolina.',
      description: 'A church committed to following Jesus, making disciples, and reaching the nations.',
      denomination: 'Church of the Nazarene · Wesleyan Tradition',
      columnMinistries: 'Ministries',
      columnChurch: 'Church',
      columnContact: 'Contact',
      ourVision: 'Our Vision',
      aSunday: 'A Sunday',
      livePresence: 'Live presence · Services every Sunday',
      privacy: 'Privacy',
      terms: 'Terms',
      copyright: '© 2026 Disciples Church',
    },
    legal: {
      backHome: 'Back to home',
      updated: 'Last updated: July 2026',
      contactSection: 'Contact',
      addressLine: 'Disciples Church · 724 Garlington Rd, Greenville, SC 29615 · 864-567-8516 · pastorjaves@hotmail.es',
      privacy: {
        title: 'Privacy Policy',
        sections: {
          collect: {
            title: 'Information we collect',
            text: 'When you contact us through our contact form, we collect your name, email address, phone number, and the message you send us. This information is used solely to respond to your request and help you connect with our community.',
          },
          use: {
            title: 'How we use your information',
            text: 'We use your data exclusively to answer your questions, connect you with a Family Group, or coordinate your baptism. We do not sell or share your information with third parties for marketing purposes.',
          },
          rights: {
            title: 'Your rights',
            text: 'You may request at any time that we update or delete your contact information by writing to us at pastorjaves@hotmail.es.',
          },
        },
      },
      terms: {
        title: 'Terms and Conditions',
        sections: {
          use: {
            title: 'Use of this site',
            text: 'This website is an informational resource from Disciples Church to share our services, ministries, and ways to get in touch. Content is provided in good faith and may be updated without prior notice.',
          },
          form: {
            title: 'Contact form',
            text: 'By submitting the contact form, you agree that a member of our team may reach out to you by phone or email to respond to your request.',
          },
          ownership: {
            title: 'Content ownership',
            text: 'The text, images, and materials on this site belong to Disciples Church and may not be reproduced without prior authorization.',
          },
        },
      },
    },
  },
}
