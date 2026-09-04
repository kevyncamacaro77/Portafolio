import './styles/main.scss';
import { projects, personal, Project } from './data.ts';
import { initTheme, toggleTheme } from './scripts/theme.ts';

// ---------- Router ----------
type Route = { name: 'home' } | { name: 'project'; id: string };

function parseHash(): Route {
  const hash = window.location.hash.replace(/^#\/?/, '');
  const parts = hash.split('/').filter(Boolean);
  if (parts[0] === 'proyecto' && parts[1]) {
    return { name: 'project', id: parts[1] };
  }
  return { name: 'home' };
}

// ---------- Helpers ----------
function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
}

// ---------- Layout ----------
function renderNav(): string {
  return `
    <nav class="nav">
      <div class="container nav-inner">
        <div class="brand" data-nav="home"><span class="dot"></span>${esc(personal.name)}</div>
        <div class="nav-links" id="navLinks">
          <a data-nav="home">Inicio</a>
          <a data-nav="home" data-scroll="proyectos">Proyectos</a>
          <a data-nav="home" data-scroll="sobre">Sobre mí</a>
          <a data-nav="home" data-scroll="contacto">Contacto</a>
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          <button class="toggle" id="themeToggle" aria-label="Cambiar tema">
            <span class="moon">🌙</span><span class="sun">☀️</span>
          </button>
        </div>
      </div>
    </nav>`;
}

function renderFooter(): string {
  return `
    <footer>
      <div class="container foot-inner">
        <p>© ${new Date().getFullYear()} ${esc(personal.name)}. Construido con TypeScript + SCSS.</p>
        <div class="flinks">
          <a href="${personal.github}" target="_blank" rel="noopener">GitHub</a>
          <a href="mailto:${personal.email}">Email</a>
        </div>
      </div>
    </footer>`;
}

function renderProjectCard(p: Project): string {
  const ledClass = p.status === 'green' ? 'green' : 'amber';
  return `
    <div class="p-card" data-nav="proyecto/${p.id}">
      <div class="p-thumb">
        <img src="${p.screenshot}" alt="${esc(p.name)}" loading="lazy">
        <span class="tag">${esc(p.role)}</span>
      </div>
      <div class="p-body">
        <h3>${esc(p.name)}</h3>
        <p class="sub">${esc(p.tagline)}</p>
        <div class="p-stack">${p.stack.map((s) => `<span class="chip">${esc(s)}</span>`).join('')}</div>
        <div class="foot">
          <span class="status"><span class="led ${ledClass}"></span>${esc(p.statusLabel)}</span>
          <span class="arrow">→</span>
        </div>
      </div>
    </div>`;
}

// ---------- Views ----------
function renderHome(): string {
  return `
    <section class="hero">
      <div class="container">
        <span class="eyebrow">● Disponible para trabajo remoto</span>
        <h1>${esc(personal.title)}<br><span class="grad">con perfil full-stack</span></h1>
        <p class="lead">${esc(personal.tagline)}</p>
        <div class="cta-row">
          <button class="btn btn-primary" data-nav="home" data-scroll="proyectos">Ver proyectos →</button>
          <button class="btn btn-ghost" data-nav="home" data-scroll="contacto">Contactar</button>
        </div>
        <div class="hero-meta">
          ${personal.stats.map((s) => `<div class="stat"><span class="num">${esc(s.num)}</span><span class="lbl">${esc(s.lbl)}</span></div>`).join('')}
        </div>
      </div>
    </section>

    <div class="tech-strip">
      <div class="container">
        <p class="label">Stack tecnológico</p>
        <div class="tech-grid">
          ${personal.stack.map((t) => `<span class="tech-pill"><span class="t-dot"></span>${esc(t)}</span>`).join('')}
        </div>
      </div>
    </div>

    <section class="block" id="proyectos">
      <div class="container">
        <div class="sec-head">
          <span class="kicker">Proyectos</span>
          <h2>Aplicaciones que he construido de punta a punta</h2>
          <p>Sistemas completos: backend, frontend, base de datos y despliegue con Docker.</p>
        </div>
        <div class="projects">
          ${projects.map(renderProjectCard).join('')}
        </div>
      </div>
    </section>

    <section class="block alt" id="sobre">
      <div class="container about-grid">
        <div>
          <h2>Sobre mí</h2>
          <p>Soy desarrollador full-stack con enfoque en construir aplicaciones empresariales seguras y escalables. Mi experiencia cubre tanto el backend (Node.js, Django) como el frontend (Angular, Vue) y el despliegue con Docker.</p>
          <p>Técnico Superior en Informática, con más de 2 años de experiencia en pasantías desarrollando sistemas reales en producción para empresas.</p>
          <div class="badges">
            <div class="badge"><div class="b-t">Backend</div><div class="b-s">Node · Django</div></div>
            <div class="badge"><div class="b-t">Frontend</div><div class="b-s">Angular · Vue</div></div>
            <div class="badge"><div class="b-t">Datos</div><div class="b-s">PostgreSQL · Redis</div></div>
            <div class="badge"><div class="b-t">Deploy</div><div class="b-s">Docker · Vercel</div></div>
          </div>
        </div>
        <div class="about-card">
          <h3>Lo que ofrezco</h3>
          <ul>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>Desarrollo full-stack de punta a punta</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>APIs REST robustas y seguras</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>Interfaces modernas y responsivas</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>Despliegue con Docker y CI</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="cta-band" id="contacto">
      <div class="container">
        <h2>¿Buscás un desarrollador full-stack?</h2>
        <p>${esc(personal.location)}. Escríbeme y conversemos sobre tu proyecto u oportunidad.</p>
        <div class="contact-row">
          <a class="contact-link" href="mailto:${personal.email}">✉️ ${esc(personal.email)}</a>
          <a class="contact-link" href="tel:${personal.phone.replace(/\s/g, '')}">📱 ${esc(personal.phone)}</a>
          <a class="contact-link" href="${personal.github}" target="_blank" rel="noopener">🐙 ${esc(personal.githubLabel)}</a>
        </div>
      </div>
    </section>`;
}

function renderProject(p: Project): string {
  return `
    <section class="detail-hero">
      <div class="container">
        <p class="crumb"><a data-nav="home">← Inicio</a> / ${esc(p.name)}</p>
        <h1 style="color:${p.heroColor}">${esc(p.name)}</h1>
        <p class="lead">${esc(p.description)}</p>
        <div class="meta-chips">
          ${p.stack.map((s) => `<span class="mc">${esc(s)}</span>`).join('')}
        </div>
        <button class="network-back" data-nav="home">← Volver a proyectos</button>
      </div>
    </section>

    <section class="gallery-block">
      <div class="container">
        ${p.screenshots.map((s, i) => `
          <div class="shot">
            <div class="shot-frame">
              ${s.src.endsWith('placeholder.png')
                ? `<div class="placeholder-notice">🖼️ Captura en preparación — Sistema ${esc(p.name)}</div>`
                : `<img src="${s.src}" alt="${esc(s.title)}" loading="lazy">`}
            </div>
            <div class="shot-cap">
              <span class="number">${String(i + 1).padStart(2, '0')}</span>
              <span class="sc-t">${esc(s.title)}</span>
              <span style="flex:1"></span>
              <span class="sc-d">${esc(s.desc)}</span>
            </div>
          </div>`).join('')}
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2>Características destacadas</h2>
        <div class="feat-grid">
          ${p.features.map((f) => `
            <div class="feat">
              <div class="feat-ico">${f.icon}</div>
              <h4>${esc(f.title)}</h4>
              <p>${esc(f.desc)}</p>
            </div>`).join('')}
        </div>
      </div>
    </section>`;
}

// ---------- App ----------
const app = document.getElementById('app');

function bind(): void {
  // Nav scroll behavior
  document.querySelectorAll('[data-scroll]').forEach((el) => {
    el.addEventListener('click', () => {
      const target = el.getAttribute('data-scroll');
      if (target) {
        const nav = document.getElementById('navLinks');
        nav?.classList.remove('open');
        const scrollTo = document.getElementById(target);
        if (scrollTo) scrollTo.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // SPA navigation
  document.querySelectorAll('[data-nav]').forEach((el) => {
    el.addEventListener('click', () => {
      const target = el.getAttribute('data-nav');
      if (target) {
        const nav = document.getElementById('navLinks');
        nav?.classList.remove('open');
        window.location.hash = target === 'home' ? '#/' : `#/proyecto/${target}`;
      }
    });
  });

  // Linked project card click
  document.querySelectorAll('.p-card').forEach((el) => {
    el.addEventListener('click', () => {
      const nav = el.getAttribute('data-nav');
      if (nav) window.location.hash = nav;
    });
  });
}

function bindAppRender(): void {
  const doRender = () => {
    if (!app) return;
    const route = parseHash();
    let main: string;
    if (route.name === 'project') {
      const p = projects.find((x) => x.id === route.id) ?? projects[0];
      main = renderProject(p);
    } else {
      main = renderHome();
    }
    app.innerHTML = renderNav() + `<main>${main}</main>` + renderFooter();
    app.querySelector('#themeToggle')?.addEventListener('click', () => toggleTheme());
    bind();
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };
  doRender();

  window.addEventListener('hashchange', doRender);

  // Navbar shadow on scroll
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// Init
initTheme();
bindAppRender();
