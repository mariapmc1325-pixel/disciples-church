(function () {
  const app = document.getElementById('app');
  const ORDEN = ['artesano', 'racional', 'guardian', 'idealista'];

  const estado = { pantalla: 'inicio', temperamento: null, indice: 0, respuestas: [] };

  function esc(texto) {
    return String(texto)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ---------- Arte low-poly original ----------

  // Divide un polígono en triángulos desde un centro y alterna tonos para el efecto facetado.
  function facetas(puntos, centro, tonos) {
    return puntos
      .map((p, i) => {
        const q = puntos[(i + 1) % puntos.length];
        return `<polygon points="${centro} ${p} ${q}" fill="${tonos[i % tonos.length]}"/>`;
      })
      .join('');
  }

  const FORMAS = {
    // llama
    artesano: { puntos: ['50,4', '64,26', '78,18', '84,50', '74,80', '50,94', '26,80', '16,50', '24,28', '38,38'], centro: '50,60' },
    // gema
    racional: { puntos: ['30,12', '50,8', '70,12', '90,36', '70,64', '50,94', '30,64', '10,36'], centro: '50,40' },
    // escudo
    guardian: { puntos: ['50,6', '70,12', '88,20', '86,46', '74,72', '50,94', '26,72', '14,46', '12,20', '30,12'], centro: '50,46' },
    // hoja
    idealista: { puntos: ['50,4', '70,20', '84,44', '78,70', '62,86', '50,94', '38,86', '22,70', '16,44', '30,20'], centro: '50,52' },
  };

  function emblema(clave, clase) {
    const t = TEMPERAMENTOS[clave];
    const f = FORMAS[clave];
    const tonos = [t.color, t.oscuro, t.claro, t.color, t.oscuro];
    return `<svg class="${clase || 'emblema'}" viewBox="0 0 100 100" aria-hidden="true">${facetas(f.puntos, f.centro, tonos)}</svg>`;
  }

  function arbol(x, base, alto) {
    const a = alto / 3;
    const capas = [0, 1, 2]
      .map((i) => {
        const y = base - a * i - a * 0.4;
        const w = alto * (0.42 - i * 0.1);
        return `<polygon points="${x},${y - a * 1.3} ${x - w},${y} ${x},${y - a * 0.2}" fill="#2f9468"/>` +
          `<polygon points="${x},${y - a * 1.3} ${x + w},${y} ${x},${y - a * 0.2}" fill="#3fb07d"/>`;
      })
      .join('');
    return `<rect x="${x - 1.5}" y="${base - a * 0.5}" width="3" height="${a * 0.5}" fill="#6b5a45"/>${capas}`;
  }

  function paisaje() {
    return `<svg class="paisaje" viewBox="0 0 800 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <rect width="800" height="220" fill="#4a9fbd"/>
      <polygon points="0,150 90,70 170,140 260,50 360,140 450,80 540,150 640,60 730,130 800,90 800,220 0,220" fill="#8cc6da"/>
      <polygon points="90,70 120,110 70,100" fill="#e9f5f9"/>
      <polygon points="260,50 300,100 240,90" fill="#e9f5f9"/>
      <polygon points="450,80 480,115 430,108" fill="#e9f5f9"/>
      <polygon points="640,60 680,108 620,100" fill="#e9f5f9"/>
      <polygon points="0,180 120,140 260,170 400,130 560,165 700,135 800,160 800,220 0,220" fill="#b9dce8"/>
      <polygon points="0,200 200,170 420,190 620,165 800,185 800,220 0,220" fill="#ffffff"/>
      ${arbol(60, 200, 70)}${arbol(110, 196, 50)}${arbol(690, 190, 72)}${arbol(745, 196, 54)}${arbol(380, 192, 40)}
    </svg>`;
  }

  // ---------- Pantallas ----------

  function aplicarColor(clave) {
    const t = clave ? TEMPERAMENTOS[clave] : null;
    const s = document.documentElement.style;
    s.setProperty('--tema', t ? t.color : '#88619a');
    s.setProperty('--tema-oscuro', t ? t.oscuro : '#664777');
    s.setProperty('--tema-claro', t ? t.claro : '#a988ba');
    s.setProperty('--tema-palido', t ? t.palido : '#f1ebf4');
    s.setProperty('--tema-texto-boton', t ? t.textoBoton : '#ffffff');
  }

  function pantallaInicio() {
    aplicarColor(null);
    const tarjetas = ORDEN.map((clave) => {
      const t = TEMPERAMENTOS[clave];
      return `
        <button class="tarjeta-temp" style="--c:${t.color};--cp:${t.palido};--co:${t.oscuro}" data-temp="${clave}">
          ${emblema(clave)}
          <span class="tarjeta-nombre">${esc(t.nombre)}</span>
          <span class="tarjeta-lema">${esc(t.lema)}</span>
          <span class="tarjeta-tipos">${t.tipos.join(' · ')}</span>
        </button>`;
    }).join('');

    app.innerHTML = `
      <header class="hero">
        ${paisaje()}
        <div class="hero-texto">
          <p class="sobretitulo">Seminario de Temperamentos</p>
          <h1>Descubre tu perfil de personalidad</h1>
        </div>
      </header>
      <section class="contenido">
        <p class="intro">¿Cuál es tu temperamento? Elige el que descubriste en la clase y responde su cuestionario para encontrar cuál de los 16 perfiles te describe mejor.</p>
        <div class="rejilla">${tarjetas}</div>
      </section>`;

    app.querySelectorAll('[data-temp]').forEach((b) =>
      b.addEventListener('click', () => iniciar(b.dataset.temp)),
    );
  }

  function iniciar(clave) {
    estado.temperamento = clave;
    estado.indice = 0;
    estado.respuestas = [];
    estado.pantalla = 'cuestionario';
    render();
  }

  function encabezado(t, clave) {
    return `
      <div class="barra-superior">
        <button class="enlace" data-accion="inicio">← Temperamentos</button>
        <span class="chip">${emblema(clave, 'emblema-mini')} ${esc(t.nombre)}</span>
      </div>`;
  }

  function pantallaCuestionario() {
    const clave = estado.temperamento;
    const t = TEMPERAMENTOS[clave];
    const preguntas = CUESTIONARIOS[clave] || [];
    aplicarColor(clave);

    if (preguntas.length === 0) {
      app.innerHTML = `
        <section class="contenido estrecho">
          ${encabezado(t, clave)}
          <div class="panel centrado">
            ${emblema(clave, 'emblema-grande')}
            <h2>Cuestionario ${esc(t.nombre)}</h2>
            <p>Este cuestionario estará disponible pronto.</p>
          </div>
        </section>`;
      return;
    }

    const i = estado.indice;
    const p = preguntas[i];
    const elegida = estado.respuestas[i];
    const progreso = Math.round((i / preguntas.length) * 100);
    const opciones = p.opciones.map((o, j) => `
      <button class="opcion${elegida === j ? ' elegida' : ''}" data-opcion="${j}">
        <span class="opcion-letra">${String.fromCharCode(65 + j)}</span>
        <span>${esc(o.texto)}</span>
      </button>`).join('');

    app.innerHTML = `
      <section class="contenido estrecho">
        ${encabezado(t, clave)}
        <div class="progreso" role="progressbar" aria-valuemin="0" aria-valuemax="${preguntas.length}" aria-valuenow="${i}">
          <div class="progreso-relleno" style="width:${progreso}%"></div>
        </div>
        <p class="contador">Pregunta ${i + 1} de ${preguntas.length}</p>
        <div class="panel">
          <h2 class="pregunta">${esc(p.texto)}</h2>
          <div class="opciones">${opciones}</div>
        </div>
        ${i > 0 ? '<button class="enlace" data-accion="atras">← Pregunta anterior</button>' : ''}
      </section>`;

    app.querySelectorAll('[data-opcion]').forEach((b) =>
      b.addEventListener('click', () => {
        estado.respuestas[i] = Number(b.dataset.opcion);
        if (i + 1 < preguntas.length) {
          estado.indice++;
        } else {
          estado.pantalla = 'resultado';
        }
        render();
      }),
    );
  }

  function calcular() {
    const preguntas = CUESTIONARIOS[estado.temperamento];
    const conteo = {};
    TEMPERAMENTOS[estado.temperamento].tipos.forEach((tipo) => (conteo[tipo] = 0));
    estado.respuestas.forEach((r, i) => {
      const tipo = preguntas[i].opciones[r].tipo;
      (Array.isArray(tipo) ? tipo : [tipo]).forEach((x) => (conteo[x] = (conteo[x] || 0) + 1));
    });
    const lista = Object.entries(conteo).sort((a, b) => b[1] - a[1]);
    const maximo = lista[0][1];
    return {
      total: preguntas.length,
      lista,
      ganadores: lista.filter(([, n]) => n === maximo).map(([tipo]) => tipo),
    };
  }

  function tarjetaPerfil(tipo, n, total) {
    const p = PERFILES[tipo];
    return `
      <div class="perfil">
        <p class="perfil-letras">${tipo}</p>
        <p class="perfil-nombre">${esc(p.nombre)}</p>
        <p class="perfil-desc">${esc(p.descripcion)}</p>
        <p class="perfil-cuenta"><strong>${n} de ${total}</strong> de tus respuestas apuntaron a este perfil</p>
      </div>`;
  }

  function pantallaResultado() {
    const clave = estado.temperamento;
    const t = TEMPERAMENTOS[clave];
    aplicarColor(clave);
    const { total, lista, ganadores } = calcular();
    const maximo = lista[0][1];

    const barras = lista.map(([tipo, n]) => `
      <li class="barra${ganadores.includes(tipo) ? ' principal' : ''}">
        <span class="barra-tipo">${tipo}</span>
        <span class="barra-pista"><span class="barra-relleno" style="width:${maximo ? (n / total) * 100 : 0}%"></span></span>
        <span class="barra-num">${n}</span>
      </li>`).join('');

    const otros = lista.filter(([tipo, n]) => n > 0 && !ganadores.includes(tipo));
    const frases = otros.map(([tipo, n]) => `${n} ${n === 1 ? 'respuesta apuntó' : 'respuestas apuntaron'} a <strong>${tipo}</strong> (${esc(PERFILES[tipo].nombre)})`);
    const textoOtros = frases.length
      ? `También ${frases.length > 1 ? `${frases.slice(0, -1).join(', ')} y ${frases[frases.length - 1]}` : frases[0]}.`
      : '';

    app.innerHTML = `
      <section class="contenido estrecho">
        ${encabezado(t, clave)}
        <div class="panel centrado resultado">
          ${emblema(clave, 'emblema-grande')}
          <p class="sobretitulo">${ganadores.length > 1 ? 'Tu perfil está entre' : 'Tu perfil es'}</p>
          <div class="perfiles">${ganadores.map((tipo) => tarjetaPerfil(tipo, maximo, total)).join('')}</div>
        </div>
        <div class="panel">
          <h3>Desglose de tus respuestas</h3>
          <ul class="barras">${barras}</ul>
          ${textoOtros ? `<p class="otros">${textoOtros}</p>` : ''}
        </div>
        <div class="acciones">
          <button class="boton" data-accion="repetir">Repetir cuestionario</button>
          <button class="boton secundario" data-accion="inicio">Elegir otro temperamento</button>
        </div>
      </section>`;
  }

  function render() {
    if (estado.pantalla === 'inicio') pantallaInicio();
    else if (estado.pantalla === 'cuestionario') pantallaCuestionario();
    else pantallaResultado();

    app.querySelectorAll('[data-accion]').forEach((b) =>
      b.addEventListener('click', () => {
        const accion = b.dataset.accion;
        if (accion === 'inicio') estado.pantalla = 'inicio';
        else if (accion === 'atras') estado.indice--;
        else if (accion === 'repetir') return iniciar(estado.temperamento);
        render();
      }),
    );
    window.scrollTo(0, 0);
  }

  render();
})();
