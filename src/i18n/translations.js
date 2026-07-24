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
      give: 'Dar',
      live: 'Vivo',
    },
    hero: {
      imageAlt: 'Congregación de Disciples Church adorando durante un servicio dominical',
      subtitle:
        'Una iglesia multicultural en el Upstate de Carolina del Sur, comprometida a seguir a Jesús, formar discípulos y alcanzar a las naciones.',
      serviceTime: 'Domingos · 11:00 AM',
    },
    pillars: {
      heading: 'Una comunidad en crecimiento.',
      subtitle: 'Grupos, naciones y personas unidas por un mismo llamado: hacer discípulos.',
      items: {
        community: {
          label: 'grupos familiares',
          desc: 'Más de 30 Grupos Familiares se reúnen cada semana en hogares por todo el Upstate para crecer juntos en la fe.',
        },
        nations: {
          label: 'naciones representadas',
          desc: 'Somos una familia multicultural: 17 naciones se reúnen bajo un mismo techo para adorar a un mismo Dios.',
        },
        family: {
          label: 'miembros activos',
          desc: 'Cerca de 300 personas llaman a Disciples su hogar espiritual, creciendo juntas desde el año 2020.',
        },
      },
    },
    protocol: {
      heading: 'Un Domingo en Disciples',
      subtitle: 'Te esperamos este domingo.',
      steps: {
        worship: {
          title: 'Adoración',
          tagline: 'Comienza a las 11:00 AM.',
          text: 'Nuestro servicio incluye adoración, oración y enseñanza bíblica centrada en Jesús. Encontrarás un ambiente cálido y personas reales, con traducción simultánea disponible.',
          alt: 'Congregación adorando durante el servicio',
        },
        children: {
          title: 'Ministerio Infantil',
          tagline: 'Bebés y niños hasta 11 años.',
          text: 'Todos los niños se registran con Kids Check al llegar. Los mayores pueden pasar directamente a la adoración infantil, mientras que los menores de 4 años permanecen con sus padres hasta después de los anuncios.',
          alt: 'Niños en su clase bíblica durante el servicio',
        },
        table: {
          title: 'A La Mesa',
          tagline: 'Seguimos a la 1:30 PM.',
          text: 'Después del servicio te invitamos a A La Mesa, un tiempo de comida y hermandad donde compartimos juntos alrededor de la mesa.',
          alt: 'Familia de la iglesia compartiendo en A La Mesa',
        },
        group: {
          title: 'Tu Grupo Familiar',
          tagline: 'Tu próximo paso.',
          text: 'Acércate a nuestro equipo de Protocolo después del servicio para conectar con un Grupo Familiar y seguir creciendo en comunidad durante la semana. Hay grupos para adolescentes, jóvenes adultos y adultos, disponibles en español, inglés y bilingües.',
          alt: 'Familia de la iglesia orando junta durante el servicio',
        },
      },
    },
    path: {
      heading: 'Nuestra Visión',
      subtitle: 'El camino del discípulo',
      intro:
        'La misión de Disciples es hacer discípulos. Creemos que seguir a Jesús es un camino que se recorre en comunidad. Estos cinco pasos representan la manera en que caminamos junto a cada persona, ayudándola a crecer en su fe hasta vivir como discípulo y hacer discípulos.',
      steps: {
        reach: {
          name: 'Alcanzar',
          label: 'Grupos Familiares',
          text: 'La mejor manera de conocer a Jesús y conectar con una comunidad. Más de 20 grupos se reúnen cada semana en hogares por todo el Upstate.',
        },
        affirm: {
          name: 'Afirmar',
          label: 'Encuentro & Bautismos',
          text: 'Todo discípulo necesita un encuentro con Dios y la oportunidad de declarar públicamente su nueva vida en Cristo.',
        },
        equip: {
          name: 'Equipar',
          label: 'Escuela de Liderazgo',
          text: 'Cinco niveles de formación bíblica para aprender a vivir como Jesús y servir a otros.',
        },
        train: {
          name: 'Instruir',
          label: 'Discipulado Intencional',
          text: 'Crecemos continuamente en la Palabra, el carácter y la práctica del discipulado.',
        },
        send: {
          name: 'Enviar',
          label: 'Haz Discípulos',
          text: 'El objetivo no es solo asistir a una iglesia. Es convertirte en un líder que haga discípulos y abra camino para que otros conozcan a Jesús.',
        },
      },
    },
    trust: {
      heading: 'Lo que nos distingue.',
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
      heading: '¿Cómo podemos ayudarte?',
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
      denomination: 'Iglesia del Nazareno',
      columnSocials: 'Socials',
      columnChurch: 'Iglesia',
      columnContact: 'Contacto',
      socials: {
        youtube: 'YouTube',
        facebook: 'Facebook',
        instagram: 'Instagram',
      },
      growth: 'Crecimiento',
      ourVision: 'Visión',
      aSunday: 'Un Domingo',
      distingue: 'Lo Que Nos Distingue',
      servicesEverySunday: 'Servicios cada domingo',
      privacy: 'Privacidad',
      terms: 'Términos',
      copyright: '© 2026 Disciples Church',
    },
    give: {
      title: 'Dar',
      subtitleLine1: 'Un acto de adoración.',
      subtitleLine2: 'Una respuesta de gratitud.',
      body: 'Creemos que el diezmo y la ofrenda son una oportunidad para honrar a Dios con lo que Él nos ha dado. Al dar con un corazón agradecido, confiamos en sus promesas de provisión, protección y bendición para quienes caminan en fidelidad.',
      scripture: 'Malaquías 3:10-12',
    },
    legal: {
      backHome: 'Volver al inicio',
      updated: 'Última actualización: julio de 2026',
      contactSection: 'Contacto',
      addressLine: 'Disciples Church · 724 Garlington Rd, Greenville, SC 29615 · (864) 567-4567 · nazareno.greenville@live.com',
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
            text: 'Puedes solicitar en cualquier momento que actualicemos o eliminemos tu información de contacto, escribiéndonos a nazareno.greenville@live.com.',
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
      give: 'Give',
      live: 'Live',
    },
    hero: {
      imageAlt: 'Disciples Church congregation worshiping during a Sunday service',
      subtitle:
        'A multicultural church in the Upstate of South Carolina, committed to following Jesus, forming disciples, and reaching the nations.',
      serviceTime: 'Sundays · 11:00 AM',
    },
    pillars: {
      heading: 'A community in growth.',
      subtitle: 'Groups, nations, and people united by one calling: making disciples.',
      items: {
        community: {
          label: 'family groups',
          desc: 'More than 30 Family Groups meet weekly in homes across the Upstate to grow together in faith.',
        },
        nations: {
          label: 'nations represented',
          desc: 'We are a multicultural family: 17 nations gather under one roof to worship one God.',
        },
        family: {
          label: 'active members',
          desc: 'Nearly 300 people call Disciples their spiritual home, growing together since 2020.',
        },
      },
    },
    protocol: {
      heading: 'A Sunday at Disciples',
      subtitle: "We'll see you this Sunday.",
      steps: {
        worship: {
          title: 'Worship',
          tagline: 'We begin at 11:00 AM.',
          text: "Our service includes worship, prayer, and Jesus-centered Bible teaching. You'll find a warm atmosphere and real people, with simultaneous translation available.",
          alt: 'Congregation worshiping during the service',
        },
        children: {
          title: "Children's Ministry",
          tagline: 'Babies and children up to age 11.',
          text: "All children check in with Kids Check upon arrival. Older children can go directly to kids' worship, while those under 4 stay with their parents until after announcements.",
          alt: "Children in their Bible class during the service",
        },
        table: {
          title: 'At the Table',
          tagline: 'Next, at 1:30 PM.',
          text: "After the service, we invite you to A La Mesa (“At the Table”), a time of food and fellowship where we share a meal together.",
          alt: 'Church family sharing at A La Mesa',
        },
        group: {
          title: 'Your Family Group',
          tagline: 'Your next step.',
          text: 'Stop by our Protocol team after the service to connect with a Family Group and keep growing in community throughout the week. There are groups for teens, young adults, and adults, available in Spanish, English, and bilingual.',
          alt: 'Church family praying together during the service',
        },
      },
    },
    path: {
      heading: 'Our Vision',
      subtitle: "the disciple's path",
      intro:
        "Disciples' mission is to make disciples. We believe following Jesus is a path walked in community. These five steps represent how we walk alongside each person, helping them grow in faith until they live as a disciple and make disciples.",
      steps: {
        reach: {
          name: 'Reach',
          label: 'Family Groups',
          text: 'The best way to know Jesus and connect with a community. More than 20 groups meet weekly in homes across the Upstate.',
        },
        affirm: {
          name: 'Affirm',
          label: 'Encounter & Baptisms',
          text: 'Every disciple needs an encounter with God and the chance to publicly declare their new life in Christ.',
        },
        equip: {
          name: 'Equip',
          label: 'School of Leadership',
          text: 'Five levels of biblical training to learn to live like Jesus and serve others.',
        },
        train: {
          name: 'Instruct',
          label: 'Intentional Discipleship',
          text: 'We keep growing continuously in the Word, in character, and in the practice of discipleship.',
        },
        send: {
          name: 'Send',
          label: 'Make Disciples',
          text: "The goal isn't just attending a church. It's becoming a leader who makes disciples and opens the way for others to know Jesus.",
        },
      },
    },
    trust: {
      heading: 'What sets us apart.',
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
      heading: 'How can we help you?',
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
      denomination: 'Church of the Nazarene',
      columnSocials: 'Socials',
      columnChurch: 'Church',
      columnContact: 'Contact',
      socials: {
        youtube: 'YouTube',
        facebook: 'Facebook',
        instagram: 'Instagram',
      },
      growth: 'Growth',
      ourVision: 'Vision',
      aSunday: 'A Sunday',
      distingue: 'What Sets Us Apart',
      servicesEverySunday: 'Services every Sunday',
      privacy: 'Privacy',
      terms: 'Terms',
      copyright: '© 2026 Disciples Church',
    },
    give: {
      title: 'Give',
      subtitleLine1: 'An act of worship.',
      subtitleLine2: 'A response of gratitude.',
      body: 'We believe tithes and offerings are an opportunity to honor God with what He has given us. When we give with a grateful heart, we trust His promises of provision, protection, and blessing for those who walk in faithfulness.',
      scripture: 'Malachi 3:10-12',
    },
    legal: {
      backHome: 'Back to home',
      updated: 'Last updated: July 2026',
      contactSection: 'Contact',
      addressLine: 'Disciples Church · 724 Garlington Rd, Greenville, SC 29615 · (864) 567-4567 · nazareno.greenville@live.com',
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
            text: 'You may request at any time that we update or delete your contact information by writing to us at nazareno.greenville@live.com.',
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
