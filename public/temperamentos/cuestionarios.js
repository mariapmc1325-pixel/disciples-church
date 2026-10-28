// Contenido de los cuatro cuestionarios, copiado sin cambios de la
// «Guía de contenido e implementación web — Cuestionarios de temperamento».
//
// Cada opción tiene un profile_id fijo: una respuesta suma 1 punto a ese perfil.
// La correspondencia nunca se muestra a quien responde.

window.CUESTIONARIOS = 
{
  "racional": {
    "perfiles": [
      {
        "id": "ENTJ",
        "nombre": "El Comandante",
        "descripcion": "Dirigir, organizar y transformar ideas en resultados."
      },
      {
        "id": "INTJ",
        "nombre": "El Arquitecto",
        "descripcion": "Anticipar escenarios y construir estrategias a largo plazo."
      },
      {
        "id": "ENTP",
        "nombre": "El Argumentador",
        "descripcion": "Explorar alternativas, debatir y cuestionar supuestos."
      },
      {
        "id": "INTP",
        "nombre": "El Lógico",
        "descripcion": "Investigar, analizar y comprender principios."
      }
    ],
    "preguntas": [
      {
        "id": "racional-01",
        "texto": "Cuando tienes un día completamente libre, ¿qué te resulta más atractivo?",
        "opciones": [
          {
            "texto": "Organizar algo que tengo ganas de hacer y aprovechar bien el día.",
            "profile_id": "ENTJ"
          },
          {
            "texto": "Dedicar tiempo a un proyecto personal que llevo imaginando desde hace tiempo.",
            "profile_id": "INTJ"
          },
          {
            "texto": "Probar algo nuevo, salir sin demasiados planes y ver qué surge.",
            "profile_id": "ENTP"
          },
          {
            "texto": "Quedarme explorando un tema que me despierta curiosidad, aunque pasen horas.",
            "profile_id": "INTP"
          }
        ]
      },
      {
        "id": "racional-02",
        "texto": "Cuando estás conversando con amigos, ¿qué disfrutas más?",
        "opciones": [
          {
            "texto": "Tomar la iniciativa para decidir qué hacer o resolver una situación.",
            "profile_id": "ENTJ"
          },
          {
            "texto": "Hablar de ideas profundas, el futuro o temas que normalmente pasan desapercibidos.",
            "profile_id": "INTJ"
          },
          {
            "texto": "Debatir, bromear, provocar nuevas ideas y explorar diferentes puntos de vista.",
            "profile_id": "ENTP"
          },
          {
            "texto": "Analizar un tema a fondo y entender por qué las cosas son como son.",
            "profile_id": "INTP"
          }
        ]
      },
      {
        "id": "racional-03",
        "texto": "Cuando debes elegir algo importante en tu vida personal, ¿qué sueles hacer?",
        "opciones": [
          {
            "texto": "Decidir y actuar; prefiero avanzar antes que quedarme estancado.",
            "profile_id": "ENTJ"
          },
          {
            "texto": "Pensar en las consecuencias futuras y elegir el camino que tenga más sentido a largo plazo.",
            "profile_id": "INTJ"
          },
          {
            "texto": "Considerar diferentes posibilidades, incluso algunas que no había pensado al principio.",
            "profile_id": "ENTP"
          },
          {
            "texto": "Investigar, reflexionar y asegurarme de comprender bien lo que estoy eligiendo.",
            "profile_id": "INTP"
          }
        ]
      },
      {
        "id": "racional-04",
        "texto": "Si alguien te cuenta un problema personal, ¿cuál suele ser tu primera reacción?",
        "opciones": [
          {
            "texto": "Ayudarle a tomar una decisión y hacer algo para cambiar la situación.",
            "profile_id": "ENTJ"
          },
          {
            "texto": "Intentar identificar la causa profunda y pensar cómo evitar que vuelva a ocurrir.",
            "profile_id": "INTJ"
          },
          {
            "texto": "Explorar varias interpretaciones y ayudarle a ver posibilidades que no había considerado.",
            "profile_id": "ENTP"
          },
          {
            "texto": "Escuchar, hacer preguntas y tratar de comprender exactamente qué está pasando.",
            "profile_id": "INTP"
          }
        ]
      },
      {
        "id": "racional-05",
        "texto": "¿Qué te molesta más en una conversación?",
        "opciones": [
          {
            "texto": "Que nadie tome una decisión y todo se quede en palabras.",
            "profile_id": "ENTJ"
          },
          {
            "texto": "Que se ignore lo importante y se pierda de vista el panorama general.",
            "profile_id": "INTJ"
          },
          {
            "texto": "Que no se permita cuestionar las ideas o considerar otras perspectivas.",
            "profile_id": "ENTP"
          },
          {
            "texto": "Que se hagan afirmaciones sin sentido o sin argumentos suficientes.",
            "profile_id": "INTP"
          }
        ]
      },
      {
        "id": "racional-06",
        "texto": "Cuando descubres un tema que te interesa mucho, ¿qué haces?",
        "opciones": [
          {
            "texto": "Pienso en cómo aprovechar ese conocimiento para hacer algo concreto.",
            "profile_id": "ENTJ"
          },
          {
            "texto": "Relaciono lo que aprendo con otras ideas y construyo una visión general.",
            "profile_id": "INTJ"
          },
          {
            "texto": "Salto de una idea a otra, hago conexiones inesperadas y busco temas relacionados.",
            "profile_id": "ENTP"
          },
          {
            "texto": "Profundizo hasta comprender los principios que explican cómo funciona.",
            "profile_id": "INTP"
          }
        ]
      },
      {
        "id": "racional-07",
        "texto": "Cuando viajas o visitas un lugar nuevo, ¿qué prefieres?",
        "opciones": [
          {
            "texto": "Tener claro qué quiero conocer y aprovechar el tiempo para hacer lo que me interesa.",
            "profile_id": "ENTJ"
          },
          {
            "texto": "Investigar el lugar con antelación y diseñar un itinerario que tenga sentido.",
            "profile_id": "INTJ"
          },
          {
            "texto": "Improvisar, explorar sitios inesperados y dejarme sorprender.",
            "profile_id": "ENTP"
          },
          {
            "texto": "Observar, curiosear y detenerme en aquello que despierte mi interés, sin demasiada prisa.",
            "profile_id": "INTP"
          }
        ]
      },
      {
        "id": "racional-08",
        "texto": "Cuando alguien no está de acuerdo contigo, ¿qué te sale hacer?",
        "opciones": [
          {
            "texto": "Defender mi postura y buscar una conclusión clara.",
            "profile_id": "ENTJ"
          },
          {
            "texto": "Pensar si su punto de vista encaja con lo que sé y con mi interpretación general.",
            "profile_id": "INTJ"
          },
          {
            "texto": "Discutir las ideas por curiosidad, incluso intentando defender el otro lado del argumento.",
            "profile_id": "ENTP"
          },
          {
            "texto": "Examinar los argumentos para descubrir cuál tiene más coherencia.",
            "profile_id": "INTP"
          }
        ]
      },
      {
        "id": "racional-09",
        "texto": "¿Qué tipo de actividad puede absorberte durante horas?",
        "opciones": [
          {
            "texto": "Un reto que me permita superar obstáculos y comprobar de lo que soy capaz.",
            "profile_id": "ENTJ"
          },
          {
            "texto": "Diseñar, planificar o imaginar cómo construir algo que tengo en mente.",
            "profile_id": "INTJ"
          },
          {
            "texto": "Un juego de ingenio, una conversación estimulante o una experiencia novedosa.",
            "profile_id": "ENTP"
          },
          {
            "texto": "Resolver un acertijo, entender un concepto o investigar una pregunta difícil.",
            "profile_id": "INTP"
          }
        ]
      },
      {
        "id": "racional-10",
        "texto": "Cuando cambian los planes a última hora, ¿cómo sueles reaccionar?",
        "opciones": [
          {
            "texto": "Busco rápidamente una alternativa y decido cómo seguir adelante.",
            "profile_id": "ENTJ"
          },
          {
            "texto": "Reviso cómo afecta el cambio a lo que había previsto y reorganizo la situación.",
            "profile_id": "INTJ"
          },
          {
            "texto": "Me adapto con facilidad y hasta puedo disfrutar de lo inesperado.",
            "profile_id": "ENTP"
          },
          {
            "texto": "Necesito entender qué ha cambiado y valorar las opciones antes de decidir.",
            "profile_id": "INTP"
          }
        ]
      },
      {
        "id": "racional-11",
        "texto": "¿Qué te gustaría que los demás comprendieran mejor de ti?",
        "opciones": [
          {
            "texto": "Que soy una persona decidida y que, cuando algo importa, quiero que suceda.",
            "profile_id": "ENTJ"
          },
          {
            "texto": "Que suelo pensar mucho más de lo que expreso y que tengo mis propias convicciones.",
            "profile_id": "INTJ"
          },
          {
            "texto": "Que cuestionar algo no significa que esté en contra; simplemente me gusta explorar ideas.",
            "profile_id": "ENTP"
          },
          {
            "texto": "Que necesito comprender las cosas a mi manera y no aceptarlas solo porque otros lo hacen.",
            "profile_id": "INTP"
          }
        ]
      },
      {
        "id": "racional-12",
        "texto": "¿Qué te produce mayor satisfacción?",
        "opciones": [
          {
            "texto": "Superar un desafío que parecía difícil y ver que conseguí lo que me propuse.",
            "profile_id": "ENTJ"
          },
          {
            "texto": "Ver cómo una idea que llevaba tiempo desarrollando finalmente cobra sentido o se concreta.",
            "profile_id": "INTJ"
          },
          {
            "texto": "Descubrir una posibilidad inesperada que cambia mi manera de pensar.",
            "profile_id": "ENTP"
          },
          {
            "texto": "Llegar por mí mismo a una explicación que por fin resuelve una duda.",
            "profile_id": "INTP"
          }
        ]
      }
    ]
  },
  "artesano": {
    "perfiles": [
      {
        "id": "ESTP",
        "nombre": "El Emprendedor",
        "descripcion": "Acción, retos, improvisación y respuestas prácticas."
      },
      {
        "id": "ESFP",
        "nombre": "El Animador",
        "descripcion": "Conexión, entusiasmo y experiencias compartidas."
      },
      {
        "id": "ISFP",
        "nombre": "El Aventurero",
        "descripcion": "Autenticidad, expresión personal y libertad."
      },
      {
        "id": "ISTP",
        "nombre": "El Virtuoso",
        "descripcion": "Experimentación práctica, autonomía y resolución técnica."
      }
    ],
    "preguntas": [
      {
        "id": "artesano-01",
        "texto": "Cuando tienes un día completamente libre, ¿qué te apetece más?",
        "opciones": [
          {
            "texto": "Hacer algo emocionante, salir a explorar o buscar un reto que me active.",
            "profile_id": "ESTP"
          },
          {
            "texto": "Compartir un buen momento con gente que quiero y disfrutar lo que surja.",
            "profile_id": "ESFP"
          },
          {
            "texto": "Dedicarme a algo creativo que refleje mis gustos y mi estilo personal.",
            "profile_id": "ISFP"
          },
          {
            "texto": "Arreglar, construir o aprender a hacer algo práctico por mi cuenta.",
            "profile_id": "ISTP"
          }
        ]
      },
      {
        "id": "artesano-02",
        "texto": "Si tus amigos proponen hacer algo inesperado, ¿cómo reaccionas?",
        "opciones": [
          {
            "texto": "Me apunto si parece divertido o desafiante; ya veremos cómo lo resolvemos.",
            "profile_id": "ESTP"
          },
          {
            "texto": "¡Me encanta! Sobre todo si podemos disfrutarlo todos juntos.",
            "profile_id": "ESFP"
          },
          {
            "texto": "Depende de si me apetece y de si la experiencia conecta conmigo.",
            "profile_id": "ISFP"
          },
          {
            "texto": "Primero quiero saber de qué se trata y qué tan complicado será.",
            "profile_id": "ISTP"
          }
        ]
      },
      {
        "id": "artesano-03",
        "texto": "Cuando alguien cercano tiene un problema, ¿cómo sueles ayudar?",
        "opciones": [
          {
            "texto": "Busco una solución rápida y práctica para sacarlo del apuro.",
            "profile_id": "ESTP"
          },
          {
            "texto": "Intento animarlo, acompañarlo y hacer que se sienta mejor.",
            "profile_id": "ESFP"
          },
          {
            "texto": "Le escucho con atención y procuro respetar lo que siente y necesita.",
            "profile_id": "ISFP"
          },
          {
            "texto": "Analizo qué está fallando y le ayudo a encontrar una solución por sí mismo.",
            "profile_id": "ISTP"
          }
        ]
      },
      {
        "id": "artesano-04",
        "texto": "¿Qué te hace sentir más orgulloso de ti mismo?",
        "opciones": [
          {
            "texto": "Haber superado un desafío difícil gracias a mi habilidad y decisión.",
            "profile_id": "ESTP"
          },
          {
            "texto": "Haber creado un momento especial y haber disfrutado con los demás.",
            "profile_id": "ESFP"
          },
          {
            "texto": "Haber expresado quién soy de una manera auténtica y personal.",
            "profile_id": "ISFP"
          },
          {
            "texto": "Haber dominado una habilidad o resuelto algo que parecía complicado.",
            "profile_id": "ISTP"
          }
        ]
      },
      {
        "id": "artesano-05",
        "texto": "Cuando surge una discusión, ¿qué sueles hacer?",
        "opciones": [
          {
            "texto": "Enfrento el tema directamente y digo lo que pienso sin darle demasiadas vueltas.",
            "profile_id": "ESTP"
          },
          {
            "texto": "Intento bajar la tensión y que podamos seguir llevándonos bien.",
            "profile_id": "ESFP"
          },
          {
            "texto": "Defiendo mis convicciones, especialmente si siento que algo importante para mí está en juego.",
            "profile_id": "ISFP"
          },
          {
            "texto": "Me concentro en los hechos y en qué argumento tiene más sentido.",
            "profile_id": "ISTP"
          }
        ]
      },
      {
        "id": "artesano-06",
        "texto": "¿Qué tipo de experiencia disfrutas más?",
        "opciones": [
          {
            "texto": "Algo intenso que ponga a prueba mis reflejos, mi valentía o mi capacidad de reacción.",
            "profile_id": "ESTP"
          },
          {
            "texto": "Una experiencia llena de música, risas, gente y momentos memorables.",
            "profile_id": "ESFP"
          },
          {
            "texto": "Una experiencia sensorial o artística que me permita conectar conmigo mismo.",
            "profile_id": "ISFP"
          },
          {
            "texto": "Una actividad en la que pueda experimentar, usar herramientas o desarrollar una técnica.",
            "profile_id": "ISTP"
          }
        ]
      },
      {
        "id": "artesano-07",
        "texto": "Si tienes que aprender algo nuevo, ¿qué método te funciona mejor?",
        "opciones": [
          {
            "texto": "Lanzarme a intentarlo y aprender mientras resuelvo los obstáculos.",
            "profile_id": "ESTP"
          },
          {
            "texto": "Aprender con otras personas, practicando y disfrutando el proceso.",
            "profile_id": "ESFP"
          },
          {
            "texto": "Experimentar a mi ritmo hasta encontrar una manera que me guste y me resulte natural.",
            "profile_id": "ISFP"
          },
          {
            "texto": "Observar cómo funciona, probarlo y perfeccionar la técnica con la práctica.",
            "profile_id": "ISTP"
          }
        ]
      },
      {
        "id": "artesano-08",
        "texto": "¿Qué suele pasar cuando estás en una reunión con personas que no conoces?",
        "opciones": [
          {
            "texto": "Me resulta natural iniciar una conversación, bromear o tomar la iniciativa.",
            "profile_id": "ESTP"
          },
          {
            "texto": "Intento crear un ambiente agradable y conectar con distintas personas.",
            "profile_id": "ESFP"
          },
          {
            "texto": "Observo primero y me acerco a quienes me hacen sentir cómodo siendo yo mismo.",
            "profile_id": "ISFP"
          },
          {
            "texto": "Me siento más cómodo conversando sobre algo concreto o interesante que hablando por hablar.",
            "profile_id": "ISTP"
          }
        ]
      },
      {
        "id": "artesano-09",
        "texto": "Cuando algo en casa deja de funcionar, ¿qué haces?",
        "opciones": [
          {
            "texto": "Intento resolverlo enseguida, improvisando si hace falta.",
            "profile_id": "ESTP"
          },
          {
            "texto": "Busco una solución sencilla y, si puedo, convierto la situación en algo llevadero.",
            "profile_id": "ESFP"
          },
          {
            "texto": "Pienso en una solución que también tenga sentido para mi espacio y mis preferencias.",
            "profile_id": "ISFP"
          },
          {
            "texto": "Examino el mecanismo, identifico la falla y trato de repararlo yo mismo.",
            "profile_id": "ISTP"
          }
        ]
      },
      {
        "id": "artesano-10",
        "texto": "¿Qué te resulta más difícil tolerar?",
        "opciones": [
          {
            "texto": "Sentirme atrapado en una rutina sin emoción ni oportunidades para actuar.",
            "profile_id": "ESTP"
          },
          {
            "texto": "Un ambiente frío en el que no puedo disfrutar ni conectar con los demás.",
            "profile_id": "ESFP"
          },
          {
            "texto": "Que intenten imponerme una forma de ser o que no respeten mi individualidad.",
            "profile_id": "ISFP"
          },
          {
            "texto": "Que compliquen innecesariamente algo que podría resolverse de manera práctica.",
            "profile_id": "ISTP"
          }
        ]
      },
      {
        "id": "artesano-11",
        "texto": "Cuando tomas una decisión personal, ¿qué suele pesar más?",
        "opciones": [
          {
            "texto": "Qué opción me permite actuar, aprovechar la oportunidad y ver resultados concretos.",
            "profile_id": "ESTP"
          },
          {
            "texto": "Qué opción me permitirá disfrutar más y compartir experiencias positivas.",
            "profile_id": "ESFP"
          },
          {
            "texto": "Qué opción se siente auténtica y está en armonía con mis valores personales.",
            "profile_id": "ISFP"
          },
          {
            "texto": "Qué opción es más funcional, razonable y eficiente en la práctica.",
            "profile_id": "ISTP"
          }
        ]
      },
      {
        "id": "artesano-12",
        "texto": "¿Cuál de estas frases te representa mejor?",
        "opciones": [
          {
            "texto": "Prefiero enfrentar la vida de frente y descubrir de qué soy capaz.",
            "profile_id": "ESTP"
          },
          {
            "texto": "La vida se disfruta más cuando aprovecho el momento y lo comparto con otros.",
            "profile_id": "ESFP"
          },
          {
            "texto": "Quiero vivir a mi manera, conservar mi libertad y expresar quién soy.",
            "profile_id": "ISFP"
          },
          {
            "texto": "Me gusta entender cómo funcionan las cosas y demostrar lo que puedo hacer.",
            "profile_id": "ISTP"
          }
        ]
      }
    ]
  },
  "guardian": {
    "perfiles": [
      {
        "id": "ESTJ",
        "nombre": "El Ejecutivo",
        "descripcion": "Organización, responsabilidad y decisiones claras."
      },
      {
        "id": "ISFJ",
        "nombre": "El Defensor",
        "descripcion": "Cuidado atento, lealtad y apoyo constante."
      },
      {
        "id": "ESFJ",
        "nombre": "El Cónsul",
        "descripcion": "Conexión, armonía y colaboración."
      },
      {
        "id": "ISTJ",
        "nombre": "El Logístico",
        "descripcion": "Método, precisión y cumplimiento consistente."
      }
    ],
    "preguntas": [
      {
        "id": "guardian-01",
        "texto": "Tienes un día libre sin compromisos. ¿Qué te resulta más natural?",
        "opciones": [
          {
            "texto": "Aprovecharlo para adelantar pendientes y dejar cosas resueltas.",
            "profile_id": "ESTJ"
          },
          {
            "texto": "Disfrutar de un día tranquilo haciendo algo por mí o por las personas que quiero.",
            "profile_id": "ISFJ"
          },
          {
            "texto": "Organizar algo para compartir con amigos o familiares.",
            "profile_id": "ESFJ"
          },
          {
            "texto": "Dedicar tiempo a mis intereses y hacer las cosas a mi propio ritmo.",
            "profile_id": "ISTJ"
          }
        ]
      },
      {
        "id": "guardian-02",
        "texto": "Un amigo te cuenta que está pasando por un momento difícil. ¿Cómo reaccionas?",
        "opciones": [
          {
            "texto": "Le ayudo a identificar qué puede hacer para mejorar la situación.",
            "profile_id": "ESTJ"
          },
          {
            "texto": "Le escucho con atención y busco maneras concretas de cuidarlo.",
            "profile_id": "ISFJ"
          },
          {
            "texto": "Procuro que no se sienta solo y le recuerdo que cuenta conmigo.",
            "profile_id": "ESFJ"
          },
          {
            "texto": "Le ayudo a entender los hechos y pensar con calma en los siguientes pasos.",
            "profile_id": "ISTJ"
          }
        ]
      },
      {
        "id": "guardian-03",
        "texto": "Habías organizado tus planes, pero algo cambia a última hora. ¿Qué haces?",
        "opciones": [
          {
            "texto": "Reorganizo rápidamente las prioridades para que todo siga funcionando.",
            "profile_id": "ESTJ"
          },
          {
            "texto": "Me adapto, procurando que el cambio no afecte demasiado a los demás.",
            "profile_id": "ISFJ"
          },
          {
            "texto": "Hablo con todos para que nadie se sienta confundido o excluido.",
            "profile_id": "ESFJ"
          },
          {
            "texto": "Reviso qué cambió, qué sigue siendo posible y cómo ajustar el plan.",
            "profile_id": "ISTJ"
          }
        ]
      },
      {
        "id": "guardian-04",
        "texto": "Algo en casa deja de funcionar. ¿Cuál suele ser tu primera reacción?",
        "opciones": [
          {
            "texto": "Me encargo de resolverlo y de que no quede pendiente.",
            "profile_id": "ESTJ"
          },
          {
            "texto": "Pienso en quién necesita más que se solucione y cómo ayudar mientras tanto.",
            "profile_id": "ISFJ"
          },
          {
            "texto": "Coordino con los demás para encontrar una solución que funcione para todos.",
            "profile_id": "ESFJ"
          },
          {
            "texto": "Investigo qué está fallando antes de decidir cómo arreglarlo.",
            "profile_id": "ISTJ"
          }
        ]
      },
      {
        "id": "guardian-05",
        "texto": "En una reunión familiar o con amigos, ¿qué papel sueles asumir?",
        "opciones": [
          {
            "texto": "Me aseguro de que las cosas estén organizadas y salgan bien.",
            "profile_id": "ESTJ"
          },
          {
            "texto": "Estoy pendiente de los detalles y de que todos estén cómodos.",
            "profile_id": "ISFJ"
          },
          {
            "texto": "Animo la conversación e intento que todos se sientan incluidos.",
            "profile_id": "ESFJ"
          },
          {
            "texto": "Ayudo con lo que haga falta, aunque prefiero no ser el centro de atención.",
            "profile_id": "ISTJ"
          }
        ]
      },
      {
        "id": "guardian-06",
        "texto": "Surge un desacuerdo con alguien cercano. ¿Qué te importa más al resolverlo?",
        "opciones": [
          {
            "texto": "Hablar directamente del problema y llegar a una solución.",
            "profile_id": "ESTJ"
          },
          {
            "texto": "Expresar lo que pienso sin herir innecesariamente a la otra persona.",
            "profile_id": "ISFJ"
          },
          {
            "texto": "Recuperar el entendimiento y evitar que la relación se deteriore.",
            "profile_id": "ESFJ"
          },
          {
            "texto": "Aclarar los hechos y llegar a una conclusión justa y coherente.",
            "profile_id": "ISTJ"
          }
        ]
      },
      {
        "id": "guardian-07",
        "texto": "Tienes que tomar una decisión importante para tu vida personal. ¿En qué te apoyas más?",
        "opciones": [
          {
            "texto": "En lo que resulte más práctico y permita avanzar.",
            "profile_id": "ESTJ"
          },
          {
            "texto": "En cómo afectará a las personas que me importan y a mis responsabilidades.",
            "profile_id": "ISFJ"
          },
          {
            "texto": "En escuchar a quienes están involucrados y considerar sus necesidades.",
            "profile_id": "ESFJ"
          },
          {
            "texto": "En los hechos, las experiencias anteriores y las consecuencias previsibles.",
            "profile_id": "ISTJ"
          }
        ]
      },
      {
        "id": "guardian-08",
        "texto": "Estás haciendo algo en equipo, ya sea en casa, en el trabajo o en un proyecto personal. ¿Qué aportas naturalmente?",
        "opciones": [
          {
            "texto": "Defino prioridades, organizo las tareas y ayudo a mantener el ritmo.",
            "profile_id": "ESTJ"
          },
          {
            "texto": "Me aseguro de que las personas tengan el apoyo y los recursos que necesitan.",
            "profile_id": "ISFJ"
          },
          {
            "texto": "Facilito la colaboración y procuro que todos participen.",
            "profile_id": "ESFJ"
          },
          {
            "texto": "Doy seguimiento a los detalles y compruebo que las cosas estén bien hechas.",
            "profile_id": "ISTJ"
          }
        ]
      },
      {
        "id": "guardian-09",
        "texto": "¿Qué significa para ti ser una persona confiable?",
        "opciones": [
          {
            "texto": "Cumplir lo prometido y hacerme responsable de los resultados.",
            "profile_id": "ESTJ"
          },
          {
            "texto": "Estar presente y demostrar cariño con pequeños actos constantes.",
            "profile_id": "ISFJ"
          },
          {
            "texto": "Hacer sentir a los demás que pueden contar conmigo y que son importantes.",
            "profile_id": "ESFJ"
          },
          {
            "texto": "Ser consistente, cumplir los acuerdos y hacer las cosas correctamente.",
            "profile_id": "ISTJ"
          }
        ]
      },
      {
        "id": "guardian-10",
        "texto": "Alguien te señala algo que podrías mejorar. ¿Qué reacción se parece más a la tuya?",
        "opciones": [
          {
            "texto": "Quiero saber qué debo cambiar para corregirlo y avanzar.",
            "profile_id": "ESTJ"
          },
          {
            "texto": "Me importa cómo afectó a otros y si he fallado a alguien.",
            "profile_id": "ISFJ"
          },
          {
            "texto": "Me preocupa cómo se siente la otra persona y cómo podemos entendernos.",
            "profile_id": "ESFJ"
          },
          {
            "texto": "Necesito ejemplos concretos para evaluar si la crítica es justa.",
            "profile_id": "ISTJ"
          }
        ]
      },
      {
        "id": "guardian-11",
        "texto": "Cuando quieres aprender algo nuevo, ¿qué método te funciona mejor?",
        "opciones": [
          {
            "texto": "Tener un objetivo claro y practicar hasta conseguir resultados.",
            "profile_id": "ESTJ"
          },
          {
            "texto": "Aprender paso a paso, con orientación y tiempo para ganar confianza.",
            "profile_id": "ISFJ"
          },
          {
            "texto": "Aprender junto a otras personas y compartir la experiencia.",
            "profile_id": "ESFJ"
          },
          {
            "texto": "Seguir instrucciones claras, comprender el método y practicar con precisión.",
            "profile_id": "ISTJ"
          }
        ]
      },
      {
        "id": "guardian-12",
        "texto": "¿Cuál de estas frases se parece más a tu manera de ser?",
        "opciones": [
          {
            "texto": "«Si algo importa, hay que organizarse y hacerlo realidad».",
            "profile_id": "ESTJ"
          },
          {
            "texto": "«Demuestro que me importas estando pendiente de ti».",
            "profile_id": "ISFJ"
          },
          {
            "texto": "«Las cosas funcionan mejor cuando nos cuidamos y colaboramos».",
            "profile_id": "ESFJ"
          },
          {
            "texto": "«La confianza se construye haciendo las cosas bien, una y otra vez».",
            "profile_id": "ISTJ"
          }
        ]
      }
    ]
  },
  "idealista": {
    "perfiles": [
      {
        "id": "ENFJ",
        "nombre": "El Protagonista",
        "descripcion": "Inspirar, acompañar y desarrollar el potencial ajeno."
      },
      {
        "id": "INFP",
        "nombre": "El Mediador",
        "descripcion": "Autenticidad, imaginación y fidelidad a valores personales."
      },
      {
        "id": "ENFP",
        "nombre": "El Activista",
        "descripcion": "Entusiasmo, posibilidades y conexiones."
      },
      {
        "id": "INFJ",
        "nombre": "El Abogado",
        "descripcion": "Intuición, profundidad y propósito significativo."
      }
    ],
    "preguntas": [
      {
        "id": "idealista-01",
        "texto": "Tienes un sábado completamente libre. ¿Qué te gustaría hacer?",
        "opciones": [
          {
            "texto": "Organizar un encuentro o actividad que permita compartir y conectar con personas importantes.",
            "profile_id": "ENFJ"
          },
          {
            "texto": "Dedicar tiempo a algo creativo, personal o que me haga sentir en paz conmigo mismo.",
            "profile_id": "INFP"
          },
          {
            "texto": "Salir a explorar algo nuevo y dejar que el día me sorprenda.",
            "profile_id": "ENFP"
          },
          {
            "texto": "Disfrutar de un espacio tranquilo para reflexionar, leer o profundizar en algo significativo.",
            "profile_id": "INFJ"
          }
        ]
      },
      {
        "id": "idealista-02",
        "texto": "Un amigo te cuenta que se siente perdido y no sabe qué hacer con su vida. ¿Cómo reaccionas?",
        "opciones": [
          {
            "texto": "Lo animo a reconocer sus capacidades y lo ayudo a encontrar un camino.",
            "profile_id": "ENFJ"
          },
          {
            "texto": "Lo escucho sin juzgar y lo ayudo a descubrir qué desea realmente.",
            "profile_id": "INFP"
          },
          {
            "texto": "Le comparto nuevas perspectivas y posibilidades que quizá no había considerado.",
            "profile_id": "ENFP"
          },
          {
            "texto": "Intento comprender qué hay detrás de lo que siente y ayudarlo a identificar el origen de su inquietud.",
            "profile_id": "INFJ"
          }
        ]
      },
      {
        "id": "idealista-03",
        "texto": "En una reunión con amigos, ¿qué suele salirte naturalmente?",
        "opciones": [
          {
            "texto": "Asegurarme de que todos se sientan incluidos y conectados.",
            "profile_id": "ENFJ"
          },
          {
            "texto": "Tener conversaciones profundas con una o dos personas con quienes me siento cómodo.",
            "profile_id": "INFP"
          },
          {
            "texto": "Conversar con distintas personas, compartir ideas y crear momentos divertidos.",
            "profile_id": "ENFP"
          },
          {
            "texto": "Observar el ambiente y conectar de manera especial con alguien a través de una conversación significativa.",
            "profile_id": "INFJ"
          }
        ]
      },
      {
        "id": "idealista-04",
        "texto": "Tienes una idea que podría mejorar algo en tu comunidad, familia o trabajo. ¿Qué haces primero?",
        "opciones": [
          {
            "texto": "Busco involucrar y motivar a otras personas para hacerla realidad.",
            "profile_id": "ENFJ"
          },
          {
            "texto": "Reflexiono sobre si representa mis valores y cómo expresarla de manera auténtica.",
            "profile_id": "INFP"
          },
          {
            "texto": "Imagino distintas posibilidades y comparto mi entusiasmo con otros.",
            "profile_id": "ENFP"
          },
          {
            "texto": "Desarrollo una visión clara de lo que quiero cambiar y por qué sería importante.",
            "profile_id": "INFJ"
          }
        ]
      },
      {
        "id": "idealista-05",
        "texto": "Alguien cercano tiene una opinión muy diferente de la tuya sobre un tema importante. ¿Cómo reaccionas?",
        "opciones": [
          {
            "texto": "Intento construir un diálogo donde ambos se sientan escuchados.",
            "profile_id": "ENFJ"
          },
          {
            "texto": "Respeto su opinión, pero me mantengo fiel a lo que siento y creo.",
            "profile_id": "INFP"
          },
          {
            "texto": "Me interesa explorar su perspectiva y descubrir ideas nuevas durante la conversación.",
            "profile_id": "ENFP"
          },
          {
            "texto": "Trato de comprender las razones profundas detrás de su postura antes de responder.",
            "profile_id": "INFJ"
          }
        ]
      },
      {
        "id": "idealista-06",
        "texto": "¿Qué tipo de reconocimiento te haría sentir más satisfecho?",
        "opciones": [
          {
            "texto": "«Gracias a ti, encontré la confianza para crecer».",
            "profile_id": "ENFJ"
          },
          {
            "texto": "«Admiro que seas tan auténtico y fiel a lo que crees».",
            "profile_id": "INFP"
          },
          {
            "texto": "«Contigo siempre descubro posibilidades y experiencias nuevas».",
            "profile_id": "ENFP"
          },
          {
            "texto": "«Me ayudaste a entender algo de mí que nunca había comprendido».",
            "profile_id": "INFJ"
          }
        ]
      },
      {
        "id": "idealista-07",
        "texto": "Si tuvieras que comenzar un proyecto personal, ¿qué te entusiasmaría más?",
        "opciones": [
          {
            "texto": "Que tenga un impacto positivo en las personas y pueda inspirarlas.",
            "profile_id": "ENFJ"
          },
          {
            "texto": "Que refleje mis ideas, sentimientos y valores más personales.",
            "profile_id": "INFP"
          },
          {
            "texto": "Que me permita experimentar, conocer gente y probar caminos distintos.",
            "profile_id": "ENFP"
          },
          {
            "texto": "Que responda a un propósito profundo y pueda producir un cambio duradero.",
            "profile_id": "INFJ"
          }
        ]
      },
      {
        "id": "idealista-08",
        "texto": "Un familiar está pasando por un conflicto emocional. ¿Qué papel sueles asumir?",
        "opciones": [
          {
            "texto": "Facilito la conversación para que las personas se entiendan y puedan avanzar.",
            "profile_id": "ENFJ"
          },
          {
            "texto": "Ofrezco un espacio seguro para que pueda expresar lo que siente sin presión.",
            "profile_id": "INFP"
          },
          {
            "texto": "Lo acompaño con cercanía y trato de mostrarle otras maneras de ver la situación.",
            "profile_id": "ENFP"
          },
          {
            "texto": "Escucho atentamente y busco identificar el problema emocional de fondo.",
            "profile_id": "INFJ"
          }
        ]
      },
      {
        "id": "idealista-09",
        "texto": "Cuando necesitas tomar una decisión importante, ¿qué suele influir más en ti?",
        "opciones": [
          {
            "texto": "Cómo afectará a las personas involucradas y si contribuirá a un bien compartido.",
            "profile_id": "ENFJ"
          },
          {
            "texto": "Si la decisión es coherente con mis valores y con quien quiero ser.",
            "profile_id": "INFP"
          },
          {
            "texto": "Las oportunidades que abre y la libertad que me dará para explorar.",
            "profile_id": "ENFP"
          },
          {
            "texto": "Si encaja con mi visión de futuro y con el propósito que quiero seguir.",
            "profile_id": "INFJ"
          }
        ]
      },
      {
        "id": "idealista-10",
        "texto": "¿Qué situación te resulta más difícil de tolerar?",
        "opciones": [
          {
            "texto": "Ver que alguien tiene potencial, pero no recibe apoyo para desarrollarlo.",
            "profile_id": "ENFJ"
          },
          {
            "texto": "Sentirme obligado a actuar en contra de mis principios.",
            "profile_id": "INFP"
          },
          {
            "texto": "Sentirme atrapado en una rutina sin posibilidades de cambio.",
            "profile_id": "ENFP"
          },
          {
            "texto": "Dedicar tiempo a algo que siento vacío o sin verdadero significado.",
            "profile_id": "INFJ"
          }
        ]
      },
      {
        "id": "idealista-11",
        "texto": "Cuando conoces a alguien por primera vez, ¿qué suele despertar más tu interés?",
        "opciones": [
          {
            "texto": "Descubrir sus fortalezas y qué lo motiva a seguir adelante.",
            "profile_id": "ENFJ"
          },
          {
            "texto": "Conocer su mundo interior y aquello que lo hace único.",
            "profile_id": "INFP"
          },
          {
            "texto": "Escuchar sus historias, ideas y experiencias sorprendentes.",
            "profile_id": "ENFP"
          },
          {
            "texto": "Comprender su forma de pensar y lo que realmente siente, más allá de lo evidente.",
            "profile_id": "INFJ"
          }
        ]
      },
      {
        "id": "idealista-12",
        "texto": "¿Con cuál de estas frases te identificas más?",
        "opciones": [
          {
            "texto": "«Quiero inspirar a las personas a convertirse en su mejor versión».",
            "profile_id": "ENFJ"
          },
          {
            "texto": "«Quiero vivir de manera auténtica y ser fiel a lo que llevo dentro».",
            "profile_id": "INFP"
          },
          {
            "texto": "«Quiero descubrir todas las posibilidades que la vida tiene para ofrecer».",
            "profile_id": "ENFP"
          },
          {
            "texto": "«Quiero comprender profundamente la vida y contribuir a un cambio significativo».",
            "profile_id": "INFJ"
          }
        ]
      }
    ]
  }
}
;
