import './styles/main.scss';
import { categories, categoryLabels, categoryShort, projects, personal, Project, CategoryId } from './data.ts';
import { initTheme, toggleTheme } from './scripts/theme.ts';

// ---------- State ----------
let activeFilter: CategoryId | 'todos' = 'todos';

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

// ---------- SEO ----------
function setMeta(title: string, description: string): void {
  document.title = title;
  const set = (selector: string, attr: string, value: string) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  };
  set('meta[name="description"]', 'content', description);
  set('meta[property="og:title"]', 'content', title);
  set('meta[property="og:description"]', 'content', description);
  set('meta[name="twitter:title"]', 'content', title);
  set('meta[name="twitter:description"]', 'content', description);
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', window.location.href.split('#')[0] + (window.location.hash || ''));
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
        <div class="nav-actions">
          <button class="theme-switch" id="themeToggle" role="switch" aria-checked="false" aria-label="Cambiar tema">
            <svg class="icon sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
            <svg class="icon moon" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            <div class="thumb"></div>
          </button>
          <button class="burger" id="navBurger" aria-label="Abrir menú" aria-expanded="false">
            <span></span><span></span><span></span>
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
    <div class="p-card${p.featured ? ' is-featured' : ''}" data-nav="proyecto/${p.id}">
      <div class="p-thumb">
        <img src="${p.screenshot}" alt="${esc(p.name)}" loading="lazy">
        <div class="p-badges">
          <span class="tag">${esc(p.role)}</span>
          <span class="p-cat">${esc(categoryShort[p.category])}</span>
        </div>
        ${p.featured ? '<span class="featured-badge">Destacado</span>' : ''}
      </div>
      <div class="p-body">
        <h3>${esc(p.name)}</h3>
        <p class="sub">${esc(p.tagline)}</p>
        <div class="p-metrics">
          ${p.metrics.map((m) => `<div class="pm"><span class="pm-v">${esc(m.value)}</span><span class="pm-l">${esc(m.label)}</span></div>`).join('')}
        </div>
        <div class="p-stack">${p.stack.slice(0, 5).map((s) => `<span class="chip">${esc(s)}</span>`).join('')}</div>
        <div class="foot">
          <span class="status"><span class="led ${ledClass}"></span>${esc(p.statusLabel)} · ${esc(p.year)}</span>
          <span class="arrow">→</span>
        </div>
      </div>
    </div>`;
}

function renderFilters(): string {
  const visible = projects.filter((p) => activeFilter === 'todos' || p.category === activeFilter);
  return `
    <div class="filter-wrap">
      <div class="filter-row" role="tablist" aria-label="Filtrar proyectos por categoría">
        ${categories
          .map((c) => {
            const count = c.id === 'todos' ? projects.length : projects.filter((p) => p.category === c.id).length;
            return `<button class="filter-chip${activeFilter === c.id ? ' active' : ''}" role="tab" aria-selected="${activeFilter === c.id}" data-filter="${c.id}">
              ${esc(c.label)}<span class="fc-count">${count}</span>
            </button>`;
          })
          .join('')}
      </div>
      <div class="projects" id="projectGrid">
        ${visible.map(renderProjectCard).join('')}
      </div>
    </div>`;
}

// ---------- Views ----------
function renderHome(): string {
  return `
    <section class="hero">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="hero-bg"></div>
      <div class="container">
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
          <h2>Siete productos, un mismo estándar de ingeniería</h2>
          <p>De CRM y ERP a logística en tiempo real, salud, deportes y e-commerce. Cada proyecto incluye backend, frontend, base de datos y despliegue.</p>
        </div>
        ${renderFilters()}
      </div>
    </section>

    <section class="block alt" id="sobre">
      <div class="container about-grid">
        <div>
          <h2>Sobre mí</h2>
          <p>Ingeniero de Software Full-Stack enfocado en construir productos que aguantan producción: APIs modulares, frontends rápidos y operación observable. Trabajo con Go y Node.js en backend, Next.js, Vue y Angular en frontend, y PostgreSQL, Redis y Docker como base de infraestructura.</p>
          <p>He entregado sistemas empresariales completos —CRM, ERP contable, gestión médica y logística en tiempo real— y proyectos de datos como un torneo deportivo con más de 170 jugadores. Mi prioridad es siempre la misma: código mantenible, decisiones documentadas y una experiencia que el usuario final entienda sin manual.</p>
          <div class="badges">
            <div class="badge"><div class="b-t">Backend & APIs</div><div class="b-s">Go · Node.js · Python · Express · Django</div></div>
            <div class="badge"><div class="b-t">Frontend</div><div class="b-s">Next.js · React · Vue · Angular · TypeScript</div></div>
            <div class="badge"><div class="b-t">Datos</div><div class="b-s">PostgreSQL · Redis · SQLite · Supabase</div></div>
            <div class="badge"><div class="b-t">Infraestructura</div><div class="b-s">Docker · Vercel · WebSockets · CI/CD</div></div>
          </div>
        </div>
        <div class="about-card">
          <h3>Lo que aporto a tu equipo</h3>
          <ul>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>Arquitectura modular y APIs seguras</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>Tiempo real con WebSockets y colas</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>Interfaces accesibles y de alto rendimiento</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>Entrega continua y observabilidad en producción</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="cta-band" id="contacto">
      <div class="container">
        <h2>¿Buscas elevar el nivel de tu próximo proyecto?</h2>
        <p>${esc(personal.location)}. Hablemos sobre cómo puedo aportar valor técnico a tu equipo o idea.</p>
        <div class="contact-row">
          <a class="contact-link" href="mailto:${personal.email}"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg> ${esc(personal.email)}</a>
          <a class="contact-link" href="tel:${personal.phone.replace(/\s/g, '')}"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg> ${esc(personal.phone)}</a>
          <a class="contact-link" href="${personal.github}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.89 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg> ${esc(personal.githubLabel)}</a>
        </div>
      </div>
    </section>`;
}

function renderProject(p: Project): string {
  return `
    <section class="detail-hero">
      <div class="container">
        <p class="crumb"><a data-nav="home">← Inicio</a> / ${esc(p.name)}</p>
        <div class="detail-topline">
          <span class="p-cat">${esc(categoryLabels[p.category])}</span>
          <span class="detail-year">${esc(p.year)}</span>
          ${p.featured ? '<span class="featured-badge">Destacado</span>' : ''}
        </div>
        <h1 style="--proj-accent:${p.heroColor}">${esc(p.name)}</h1>
        <p class="lead">${esc(p.description)}</p>
        <div class="detail-metrics">
          ${p.metrics.map((m) => `<div class="dm"><span class="dm-v">${esc(m.value)}</span><span class="dm-l">${esc(m.label)}</span></div>`).join('')}
        </div>
        <div class="meta-chips">
          ${p.stack.map((s) => `<span class="mc">${esc(s)}</span>`).join('')}
        </div>
        <button class="network-back" data-nav="home">← Volver a proyectos</button>
      </div>
    </section>

    <section class="highlights">
      <div class="container">
        <h2>Lo más relevante</h2>
        <ul class="hl-list">
          ${p.highlights.map((h) => `<li><span class="hl-dot"></span>${esc(h)}</li>`).join('')}
        </ul>
      </div>
    </section>

    <section class="gallery-block">
      <div class="container">
        ${p.screenshots.map((s, i) => `
          <div class="shot">
            <div class="shot-frame lb-trigger" data-project="${p.id}" data-index="${i}" style="cursor: zoom-in;">
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

// ---------- Lightbox (Álbum de imágenes) ----------
let currentGalleryProject: Project | null = null;
let currentGalleryIndex = 0;
let touchStartX = 0;

function lockPageScroll(): void {
  document.body.classList.add('no-scroll');
}

function unlockPageScroll(): void {
  document.body.classList.remove('no-scroll');
}

function updateLightbox() {
  if (!currentGalleryProject) return;
  const shots = currentGalleryProject.screenshots;
  const s = shots[currentGalleryIndex];
  const imgEl = document.getElementById('lb-img') as HTMLImageElement | null;
  const capEl = document.getElementById('lb-caption');
  const countEl = document.getElementById('lb-count');
  if (imgEl && s) {
    imgEl.classList.remove('lb-page-fade');
    void imgEl.offsetWidth;
    imgEl.src = s.src;
    imgEl.alt = s.title;
    imgEl.classList.add('lb-page-fade');
  }
  if (capEl) {
    capEl.innerHTML = `<strong>${esc(s.title)}</strong><span class="lb-desc">${esc(s.desc)}</span>`;
  }
  if (countEl) {
    countEl.textContent = `${String(currentGalleryIndex + 1).padStart(2, '0')} / ${String(shots.length).padStart(2, '0')}`;
  }
  const thumbs = document.querySelectorAll('.lb-thumb');
  thumbs.forEach((t, i) => t.classList.toggle('active', i === currentGalleryIndex));
  (thumbs[currentGalleryIndex] as HTMLElement | undefined)?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
}

function goLightboxImage(i: number) {
  if (!currentGalleryProject) return;
  const n = currentGalleryProject.screenshots.length;
  currentGalleryIndex = ((i % n) + n) % n;
  updateLightbox();
}

function openLightbox(projectId: string, index: number) {
  currentGalleryProject = projects.find((p) => p.id === projectId) || null;
  if (!currentGalleryProject) return;
  currentGalleryIndex = index;

  const album = document.getElementById('lb-album');
  if (album) {
    album.innerHTML = currentGalleryProject.screenshots
      .map((s, i) => `<button class="lb-thumb" data-i="${i}" aria-label="${esc(s.title)}"><img src="${s.src}" alt="${esc(s.title)}"></button>`)
      .join('');
    album.querySelectorAll('.lb-thumb').forEach((t) => {
      t.addEventListener('click', () => goLightboxImage(Number(t.getAttribute('data-i'))));
    });
  }

  updateLightbox();
  document.getElementById('lightbox')?.classList.add('active');
  lockPageScroll();
}

function closeLightbox() {
  document.getElementById('lightbox')?.classList.remove('active');
  unlockPageScroll();
}

function nextLightboxImage() { goLightboxImage(currentGalleryIndex + 1); }
function prevLightboxImage() { goLightboxImage(currentGalleryIndex - 1); }

function bindLightbox() {
  const overlay = document.getElementById('lightbox');
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });
  document.querySelector('.lb-close')?.addEventListener('click', closeLightbox);
  document.querySelector('.lb-next')?.addEventListener('click', nextLightboxImage);
  document.querySelector('.lb-prev')?.addEventListener('click', prevLightboxImage);

  window.addEventListener('keydown', (e) => {
    if (!overlay?.classList.contains('active')) return;
    if (e.key === 'Escape' || e.key === 'Esc') closeLightbox();
    if (e.key === 'ArrowRight') nextLightboxImage();
    if (e.key === 'ArrowLeft') prevLightboxImage();
  });

  overlay?.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  overlay?.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) {
      if (dx < 0) nextLightboxImage(); else prevLightboxImage();
    }
  }, { passive: true });
}

let pendingScrollTarget: string | null = null;

function bindProjectCards(): void {
  document.querySelectorAll('.p-card').forEach((el) => {
    el.addEventListener('click', () => {
      const nav = el.getAttribute('data-nav');
      if (nav) window.location.hash = nav;
    });
  });
}

function bindFilters(): void {
  document.querySelectorAll('.filter-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const value = chip.getAttribute('data-filter') as CategoryId | 'todos' | null;
      if (!value || value === activeFilter) return;
      activeFilter = value;
      document.querySelectorAll('.filter-chip').forEach((c) => {
        const on = c.getAttribute('data-filter') === value;
        c.classList.toggle('active', on);
        c.setAttribute('aria-selected', String(on));
      });
      const visible = projects.filter((p) => activeFilter === 'todos' || p.category === activeFilter);
      const grid = document.getElementById('projectGrid');
      if (grid) {
        grid.innerHTML = visible.map(renderProjectCard).join('');
        bindProjectCards();
      }
    });
  });
}

function bind(): void {
  const navLinks = document.getElementById('navLinks');

  // Menú hamburguesa (móvil)
  document.getElementById('navBurger')?.addEventListener('click', (e) => {
    const burger = e.currentTarget as HTMLElement;
    const open = navLinks?.classList.toggle('open') ?? false;
    burger.classList.toggle('active', open);
    burger.setAttribute('aria-expanded', String(open));
  });

  // Desplazamiento a secciones — funciona desde cualquier vista (home o demo)
  document.querySelectorAll('[data-scroll]').forEach((el) => {
    el.addEventListener('click', () => {
      const target = el.getAttribute('data-scroll');
      if (!target) return;
      navLinks?.classList.remove('open');
      const section = document.getElementById(target);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      // La sección no existe en esta vista (ej: dentro de una demo):
      // navegar al inicio y desplazarse cuando termine de renderizar.
      pendingScrollTarget = target;
      if (parseHash().name !== 'home') {
        window.location.hash = '#/';
      }
    });
  });

  // Navegación SPA
  document.querySelectorAll('[data-nav]').forEach((el) => {
    el.addEventListener('click', () => {
      // Si el elemento también tiene data-scroll, el otro listener se encarga.
      if (el.hasAttribute('data-scroll')) return;

      const target = el.getAttribute('data-nav');
      if (!target) return;
      navLinks?.classList.remove('open');

      const newHash = target === 'home' ? '#/' : `#/proyecto/${target}`;
      if (newHash === (window.location.hash || '#/')) {
        // Ya estamos en esa página: subir al inicio.
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.location.hash = newHash;
      }
    });
  });

  // Tarjetas de proyectos y filtros
  bindProjectCards();
  bindFilters();

  // Apertura del álbum de imágenes
  document.querySelectorAll('.lb-trigger').forEach((el) => {
    el.addEventListener('click', () => {
      const proj = el.getAttribute('data-project');
      const idx = el.getAttribute('data-index');
      if (proj && idx !== null) {
        openLightbox(proj, parseInt(idx, 10));
      }
    });
  });
}

function bindAppRender(): void {
  const syncThemeToggle = () => {
    const toggle = app?.querySelector('#themeToggle');
    toggle?.setAttribute('aria-checked', String(document.documentElement.getAttribute('data-theme') === 'dark'));
  };

  const doRender = () => {
    if (!app) return;
    closeLightbox();
    const route = parseHash();
    let main: string;
    if (route.name === 'project') {
      const p = projects.find((x) => x.id === route.id) ?? projects[0];
      main = renderProject(p);
      setMeta(`${p.name} — ${personal.name}`, `${p.tagline} Stack: ${p.stack.slice(0, 5).join(', ')}.`);
    } else {
      main = renderHome();
      setMeta(
        `${personal.name} — ${personal.role}`,
        'Portafolio de Kevyn Camacaro, ingeniero de software full-stack: Go, Node.js, Next.js, Vue, Angular, PostgreSQL, Redis y Docker. Siete productos en producción, desde CRM y ERP hasta logística en tiempo real y e-commerce.',
      );
    }
    app.innerHTML = renderNav() + `<main>${main}</main>` + renderFooter();
    app.querySelector('#themeToggle')?.addEventListener('click', () => {
      toggleTheme();
      syncThemeToggle();
    });
    syncThemeToggle();
    bind();

    if (pendingScrollTarget) {
      const target = pendingScrollTarget;
      pendingScrollTarget = null;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
        });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
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
bindLightbox();
bindAppRender();
