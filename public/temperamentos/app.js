(function () {
  const app = document.getElementById('app');
  const ORDEN = ['racional', 'artesano', 'guardian', 'idealista'];
  const NOTA_LIMITES = 'Este cuestionario es una herramienta orientativa de autoconocimiento, no una evaluación psicológica validada.';

  // respuestas: { [pregunta.id]: índice de la opción elegida }
  const estado = { pantalla: 'inicio', temperamento: null, respuestas: {} };

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
    // gema
    racional: { puntos: ['30,12', '50,8', '70,12', '90,36', '70,64', '50,94', '30,64', '10,36'], centro: '50,40' },
    // llama
    artesano: { puntos: ['50,4', '64,26', '78,18', '84,50', '74,80', '50,94', '26,80', '16,50', '24,28', '38,38'], centro: '50,60' },
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

  // ---------- Puntuación ----------

  // Reglas de la guía: 1 punto por respuesta al perfil de la opción; empates muestran
  // todos los perfiles empatados; orden de mayor a menor conservando el del catálogo.
  function calcular(clave) {
    const { perfiles, preguntas } = CUESTIONARIOS[clave];
    const faltan = preguntas.filter((q) => estado.respuestas[q.id] === undefined);
    if (faltan.length) return { incompleto: true, faltan };

    const puntos = Object.fromEntries(perfiles.map((p) => [p.id, 0]));
    preguntas.forEach((q) => {
      puntos[q.opciones[estado.respuestas[q.id]].profile_id] += 1;
    });
    const maximo = Math.max(...Object.values(puntos));
    return {
      incompleto: false,
      total: preguntas.length,
      ganadores: perfiles.filter((p) => puntos[p.id] === maximo),
      orden: perfiles.slice().sort((a, b) => puntos[b.id] - puntos[a.id]),
      puntos,
    };
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

  function nota() {
    return `<p class="nota">${NOTA_LIMITES}</p>`;
  }

  function encabezado(clave) {
    const t = TEMPERAMENTOS[clave];
    return `
      <div class="barra-superior">
        <button type="button" class="enlace" data-accion="inicio">← Temperamentos</button>
        <span class="chip">${emblema(clave, 'emblema-mini')} ${esc(t.nombre)}</span>
      </div>`;
  }

  function pantallaInicio() {
    aplicarColor(null);
    const tarjetas = ORDEN.map((clave) => {
      const t = TEMPERAMENTOS[clave];
      const codigos = CUESTIONARIOS[clave].perfiles.map((p) => p.id).join(' · ');
      return `
        <button type="button" class="tarjeta-temp" style="--c:${t.color};--cp:${t.palido};--co:${t.oscuro}" data-temp="${clave}">
          ${emblema(clave)}
          <span class="tarjeta-nombre">${esc(t.nombre)}</span>
          <span class="tarjeta-lema">${esc(t.lema)}</span>
          <span class="tarjeta-tipos">${codigos}</span>
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
        <p class="intro">¿Cuál es tu temperamento? Elige el que descubriste en la clase y responde sus 12 preguntas para conocer el perfil más afín a ti.</p>
        <div class="rejilla">${tarjetas}</div>
        ${nota()}
      </section>`;

    app.querySelectorAll('[data-temp]').forEach((b) =>
      b.addEventListener('click', () => {
        estado.temperamento = b.dataset.temp;
        estado.respuestas = {};
        estado.pantalla = 'cuestionario';
        render();
      }),
    );
  }

  function pantallaCuestionario() {
    const clave = estado.temperamento;
    const t = TEMPERAMENTOS[clave];
    const { perfiles, preguntas } = CUESTIONARIOS[clave];
    aplicarColor(clave);

    const listaPerfiles = perfiles.map((p) => `
      <li><strong>${esc(p.nombre)} (${p.id})</strong>: ${esc(p.descripcion)}</li>`).join('');

    const bloques = preguntas.map((q, i) => {
      const opciones = q.opciones.map((o, j) => {
        const id = `${q.id}-${j}`;
        const marcada = estado.respuestas[q.id] === j ? ' checked' : '';
        return `
          <label class="opcion" for="${id}">
            <input type="radio" id="${id}" name="${q.id}" value="${j}"${marcada} />
            <span class="opcion-letra" aria-hidden="true">${String.fromCharCode(65 + j)}</span>
            <span class="opcion-texto">${esc(o.texto)}</span>
          </label>`;
      }).join('');
      const respondida = estado.respuestas[q.id] !== undefined ? ' respondida' : '';
      return `
        <fieldset class="pregunta${respondida}" id="bloque-${q.id}">
          <legend><span class="pregunta-num">${i + 1}.</span> ${esc(q.texto)}</legend>
          <div class="opciones">${opciones}</div>
        </fieldset>`;
    }).join('');

    app.innerHTML = `
      <section class="contenido estrecho">
        ${encabezado(clave)}
        <div class="panel presentacion">
          ${emblema(clave, 'emblema-grande')}
          <h1>Temperamento ${esc(t.nombre)}</h1>
          <p>Responde las ${preguntas.length} preguntas eligiendo la opción que más se parezca a ti. Puedes cambiar tus respuestas antes de enviarlas.</p>
          <h2>Los cuatro perfiles</h2>
          <ul class="lista-perfiles">${listaPerfiles}</ul>
        </div>
        <div class="avance" aria-hidden="true">
          <span class="avance-texto"></span>
          <div class="progreso"><div class="progreso-relleno"></div></div>
        </div>
        <form class="formulario" novalidate>
          ${bloques}
          <p class="aviso" role="status" aria-live="polite"></p>
          <button type="submit" class="boton grande">Descubrir mi perfil</button>
        </form>
        ${nota()}
      </section>`;

    const total = preguntas.length;
    const textoAvance = app.querySelector('.avance-texto');
    const relleno = app.querySelector('.progreso-relleno');
    const aviso = app.querySelector('.aviso');

    function actualizarAvance() {
      const n = preguntas.filter((q) => estado.respuestas[q.id] !== undefined).length;
      textoAvance.textContent = `${n} de ${total}`;
      relleno.style.width = `${(n / total) * 100}%`;
    }
    actualizarAvance();

    const form = app.querySelector('form');
    form.addEventListener('change', (e) => {
      const input = e.target;
      estado.respuestas[input.name] = Number(input.value);
      const bloque = document.getElementById(`bloque-${input.name}`);
      bloque.classList.add('respondida');
      bloque.classList.remove('falta');
      actualizarAvance();
      if (aviso.textContent) {
        const r = calcular(clave);
        aviso.textContent = r.incompleto ? textoFaltan(r.faltan.length) : '';
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const r = calcular(clave);
      if (r.incompleto) {
        aviso.textContent = textoFaltan(r.faltan.length);
        r.faltan.forEach((q) => document.getElementById(`bloque-${q.id}`).classList.add('falta'));
        const primera = document.getElementById(`bloque-${r.faltan[0].id}`);
        primera.scrollIntoView({ behavior: 'smooth', block: 'center' });
        primera.querySelector('input').focus({ preventScroll: true });
        return;
      }
      estado.pantalla = 'resultado';
      render();
    });
  }

  function textoFaltan(n) {
    return n === 1
      ? 'Falta 1 pregunta por responder. Respóndela para ver tu resultado.'
      : `Faltan ${n} preguntas por responder. Respóndelas para ver tu resultado.`;
  }

  function textoParaCopiar(clave, r) {
    const t = TEMPERAMENTOS[clave];
    const principal = r.ganadores.length > 1 ? 'Una combinación de perfiles' : 'Perfil principal';
    return [
      `Mi resultado — Temperamento ${t.nombre}`,
      '',
      `${principal}:`,
      ...r.ganadores.map((p) => `${p.nombre} (${p.id}) — ${p.descripcion}`),
      '',
      'Puntajes:',
      ...r.orden.map((p) => `${p.nombre} (${p.id}): ${r.puntos[p.id]} / ${r.total}`),
      '',
      NOTA_LIMITES,
    ].join('\n');
  }

  function pantallaResultado() {
    const clave = estado.temperamento;
    aplicarColor(clave);
    const r = calcular(clave);
    const empate = r.ganadores.length > 1;

    const principales = r.ganadores.map((p) => `
      <div class="perfil">
        <p class="perfil-letras">${p.id}</p>
        <p class="perfil-nombre">${esc(p.nombre)}</p>
        <p class="perfil-desc">${esc(p.descripcion)}</p>
        <p class="perfil-cuenta">${r.puntos[p.id]} / ${r.total}</p>
      </div>`).join('');

    const barras = r.orden.map((p) => {
      const n = r.puntos[p.id];
      const destacado = r.ganadores.includes(p) ? ' principal' : '';
      return `
        <li class="barra${destacado}">
          <div class="barra-etiqueta">
            <span><strong>${esc(p.nombre)}</strong> <span class="barra-codigo">${p.id}</span></span>
            <span class="barra-num">${n} / ${r.total}</span>
          </div>
          <span class="barra-pista"><span class="barra-relleno" style="width:${(n / r.total) * 100}%"></span></span>
        </li>`;
    }).join('');

    app.innerHTML = `
      <section class="contenido estrecho">
        ${encabezado(clave)}
        <div class="panel centrado resultado" aria-live="polite">
          ${emblema(clave, 'emblema-grande')}
          <h1 tabindex="-1">Tu resultado</h1>
          <p class="sobretitulo">${empate ? 'Una combinación de perfiles' : 'Tu perfil principal'}</p>
          <div class="perfiles${empate ? ' empate' : ''}">${principales}</div>
        </div>
        <div class="panel">
          <h2>Tus puntajes</h2>
          <ul class="barras">${barras}</ul>
        </div>
        ${nota()}
        <div class="acciones">
          <button type="button" class="boton" data-accion="copiar">Copiar mis resultados</button>
          <button type="button" class="boton secundario" data-accion="inicio">Volver a empezar</button>
        </div>
        <p class="aviso centrado-texto" role="status" aria-live="polite"></p>
      </section>`;

    app.querySelector('h1').focus({ preventScroll: true });
    app.querySelector('[data-accion=copiar]').addEventListener('click', () =>
      copiar(textoParaCopiar(clave, r)),
    );
  }

  function copiar(texto) {
    const aviso = app.querySelector('.aviso');
    const listo = () => (aviso.textContent = 'Resultados copiados. Ya puedes pegarlos donde quieras.');
    const respaldo = () => {
      const area = document.createElement('textarea');
      area.value = texto;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand('copy');
      area.remove();
      if (ok) listo();
      else aviso.textContent = 'No se pudieron copiar los resultados. Inténtalo de nuevo.';
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(texto).then(listo, respaldo);
    } else {
      respaldo();
    }
  }

  function render() {
    if (estado.pantalla === 'inicio') pantallaInicio();
    else if (estado.pantalla === 'cuestionario') pantallaCuestionario();
    else pantallaResultado();

    app.querySelectorAll('[data-accion=inicio]').forEach((b) =>
      b.addEventListener('click', () => {
        estado.pantalla = 'inicio';
        estado.respuestas = {};
        render();
      }),
    );
    window.scrollTo(0, 0);
  }

  render();
})();
