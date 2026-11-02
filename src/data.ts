export interface Screenshot {
  src: string;
  title: string;
  desc: string;
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface Metric {
  value: string;
  label: string;
}

export type CategoryId = 'empresarial' | 'salud' | 'logistica' | 'deportes' | 'ia' | 'ecommerce';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  role: string;
  category: CategoryId;
  featured?: boolean;
  year: string;
  status: 'green' | 'amber';
  statusLabel: string;
  stack: string[];
  description: string;
  highlights: string[];
  metrics: Metric[];
  screenshot: string;
  screenshots: Screenshot[];
  features: Feature[];
  heroColor: string;
}

export const categories: { id: CategoryId | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'empresarial', label: 'Empresarial' },
  { id: 'logistica', label: 'Logística' },
  { id: 'deportes', label: 'Deportes' },
  { id: 'salud', label: 'Salud' },
  { id: 'ia', label: 'IA' },
  { id: 'ecommerce', label: 'E-commerce' },
];

export const categoryLabels: Record<CategoryId, string> = {
  empresarial: 'Empresarial',
  salud: 'Salud',
  logistica: 'Logística',
  deportes: 'Deportes',
  ia: 'Inteligencia artificial',
  ecommerce: 'E-commerce',
};

export const categoryShort: Record<CategoryId, string> = {
  empresarial: 'Empresarial',
  salud: 'Salud',
  logistica: 'Logística',
  deportes: 'Deportes',
  ia: 'IA',
  ecommerce: 'E-commerce',
};

// Iconos SVG reutilizables (trazo 1.7, 24×24)
const ico = {
  kanban:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="3.5" width="5" height="17" rx="1.2"/><rect x="9.5" y="3.5" width="5" height="11" rx="1.2"/><rect x="16.5" y="3.5" width="5" height="7" rx="1.2"/></svg>',
  shield:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',
  bolt:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10"/></svg>',
  chart:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="15"/></svg>',
  users:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  database:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
  calendar:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="17" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="9 15 11 17 15 13"/></svg>',
  clipboard:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 12h6M9 16h6"/></svg>',
  lock:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  wifi:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9.5a15 15 0 0 1 20 0"/><path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>',
  sync:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
  receipt:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="15" y2="13"/></svg>',
  box:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
  book:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="9" y1="7" x2="16" y2="7"/><line x1="9" y1="11" x2="16" y2="11"/></svg>',
  money:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  printer:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>',
  settings:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  mic:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',
  cpu:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
  doc:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>',
  map:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>',
  pin:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  truck:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  trophy:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12v5a6 6 0 0 1-12 0z"/><path d="M6 5H3v2a4 4 0 0 0 4 4M18 5h3v2a4 4 0 0 1-4 4"/><path d="M12 14v4M8 21h8"/></svg>',
  cart:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
  card:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
  code:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  plug:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0z"/><path d="M12 17v5"/></svg>',
  sparkles:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z"/></svg>',
  globe:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
};

export const projects: Project[] = [
  {
    id: 'crm',
    name: 'CRM Empresarial',
    tagline: 'Pipeline de ventas, contactos y documentos con seguridad de nivel bancario.',
    role: 'Full-Stack (Vue + Node)',
    category: 'empresarial',
    featured: true,
    year: '2025',
    status: 'green',
    statusLabel: 'Producción',
    stack: ['Node.js', 'TypeScript', 'Express', 'Vue 3', 'Vuetify', 'PostgreSQL', 'Redis', 'Docker'],
    screenshot: '/assets/img/crm/dashboard.webp',
    description:
      'Plataforma integral de CRM para equipos comerciales. Pipeline kanban interactivo, historial de contactos, tareas, documentos con firma electrónica y notificaciones en tiempo real. La seguridad se resolvió con JWT rotativo, sesión única y cifrado AES-256-GCM de datos sensibles; los reportes se exportan a Excel y PDF.',
    highlights: [
      'Pipeline kanban con arrastrar y soltar y métricas por etapa.',
      'Cifrado AES-256-GCM de datos de identificación personal.',
      'Notificaciones push con Server-Sent Events y sesión única por usuario.',
    ],
    metrics: [
      { value: '8', label: 'módulos integrados' },
      { value: 'AES-256', label: 'cifrado de datos sensibles' },
      { value: '2FA', label: 'acceso con doble factor' },
    ],
    screenshots: [
      { src: '/assets/img/crm/login.webp', title: 'Login seguro', desc: 'Acceso con autenticación y verificación 2FA' },
      { src: '/assets/img/crm/dashboard.webp', title: 'Dashboard', desc: 'Métricas clave, gráficos y metas del periodo' },
      { src: '/assets/img/crm/pipeline.webp', title: 'Pipeline de ventas', desc: 'Gestión ágil de oportunidades mediante kanban interactivo' },
      { src: '/assets/img/crm/contactos.webp', title: 'Contactos', desc: 'Historial detallado, relaciones y recuperación de registros eliminados' },
      { src: '/assets/img/crm/tareas.webp', title: 'Tareas', desc: 'Organización eficiente de pendientes y seguimiento a clientes' },
      { src: '/assets/img/crm/documentos.webp', title: 'Documentos', desc: 'Almacenamiento seguro y trazabilidad de documentos firmados' },
      { src: '/assets/img/crm/estadisticas.webp', title: 'Estadísticas', desc: 'Análisis detallado y reportes gerenciales exportables' },
    ],
    features: [
      { icon: ico.kanban, title: 'Pipeline Kanban', desc: 'Gestión visual de oportunidades. Arrastra tratos entre las distintas etapas del embudo comercial.' },
      { icon: ico.shield, title: 'Seguridad avanzada', desc: 'JWT rotativo, sesión única por usuario y cifrado de datos de identificación personal (PII).' },
      { icon: ico.bolt, title: 'Tiempo real', desc: 'Notificaciones push vía Server-Sent Events para una respuesta inmediata del equipo.' },
      { icon: ico.chart, title: 'Reportes detallados', desc: 'Generación instantánea de reportes en Excel y PDF con los KPIs más importantes del negocio.' },
      { icon: ico.users, title: 'Control de acceso (RBAC)', desc: 'Gestión multi-rol con permisos granulares adaptados a la jerarquía de la empresa.' },
      { icon: ico.database, title: 'Alto rendimiento', desc: 'PostgreSQL para persistencia relacional y Redis como caché para acelerar consultas complejas.' },
    ],
    heroColor: '#b026ff',
  },
  {
    id: 'delivery',
    name: 'Pulse Delivery',
    tagline: 'Pedidos, reparto y rastreo GPS en vivo con un stack de costo operativo cero.',
    role: 'Full-Stack (Vue + Node)',
    category: 'logistica',
    featured: true,
    year: '2026',
    status: 'green',
    statusLabel: 'Producción',
    stack: ['Vue 3', 'TypeScript', 'SCSS', 'Node.js', 'Express', 'Socket.io', 'Leaflet', 'OSRM', 'SQLite'],
    screenshot: '/assets/img/delivery/landing.png',
    description:
      'Plataforma de delivery en tiempo real con tres roles —cliente, repartidor y administrador— sobre un monorepo TypeScript. Incluye catálogo y checkout, telemetría GPS por WebSockets, cálculo de rutas con OSRM, handshake antifraude por PIN y panel administrativo con CRUD de menú, flota y auditoría de pedidos.',
    highlights: [
      'Telemetría GPS en vivo con Socket.io: posición, velocidad y rumbo del repartidor.',
      'Handshake por PIN generado en el servidor para cerrar cada entrega sin fraude.',
      'Mapas Leaflet + OpenStreetMap y rutas OSRM: $0 USD de infraestructura mensual.',
    ],
    metrics: [
      { value: '$0', label: 'costo mensual de mapas y ruteo' },
      { value: '3', label: 'roles con vistas dedicadas' },
      { value: 'GPS', label: 'telemetría en tiempo real' },
    ],
    screenshots: [
      { src: '/assets/img/delivery/landing.png', title: 'Catálogo del cliente', desc: 'Menú por categorías, precios y cálculo de entrega en vivo' },
      { src: '/assets/img/delivery/menu.png', title: 'Productos y checkout', desc: 'Tarjetas de producto con etiquetas, rating y carrito lateral' },
      { src: '/assets/img/delivery/repartidor.png', title: 'Vista del repartidor', desc: 'Pedidos asignados, mapa de ruta y cierre con PIN' },
      { src: '/assets/img/delivery/admin.png', title: 'Panel administrativo', desc: 'CRUD de menú, flota, monitor de órdenes y reportes' },
      { src: '/assets/img/delivery/checkout.png', title: 'Pedido en curso', desc: 'Seguimiento del pedido y estado de la entrega' },
    ],
    features: [
      { icon: ico.map, title: 'Rastreo en vivo', desc: 'Telemetría GPS por WebSockets con posición, velocidad y rumbo sobre Leaflet + OpenStreetMap.' },
      { icon: ico.shield, title: 'Handshake por PIN', desc: 'Código de 4 dígitos generado en el servidor que el repartidor debe validar para cerrar la orden.' },
      { icon: ico.cart, title: 'Catálogo y checkout', desc: 'Filtros por categoría, subtotales, costo de entrega y carrito persistente durante la sesión.' },
      { icon: ico.truck, title: 'Ficha de vehículo', desc: 'Marca, modelo, placa y color en tiempo real para identificar al repartidor asignado.' },
      { icon: ico.settings, title: 'Panel administrativo', desc: 'CRUD en caliente de menú y flota, más monitor global de pedidos con auditoría de PINs.' },
      { icon: ico.money, title: 'Stack de costo cero', desc: 'OSRM y Leaflet reemplazan APIs de pago; los sonidos de interfaz se sintetizan con Web Audio.' },
    ],
    heroColor: '#ff5a1f',
  },
  {
    id: 'futsal',
    name: 'Torneo Futsal IUJO',
    tagline: 'Gestión deportiva completa: liga, playoffs, fichajes, sanciones y estadísticas.',
    role: 'Full-Stack (Next.js + Postgres)',
    category: 'deportes',
    featured: true,
    year: '2026',
    status: 'green',
    statusLabel: 'Producción',
    stack: ['Next.js 14', 'React 18', 'TypeScript', 'SCSS', 'PostgreSQL', 'Supabase', 'Vercel Blob', 'Vitest'],
    screenshot: '/assets/img/futsal/home.png',
    description:
      'Sistema oficial del campeonato de futsal IUJO. Cubre el ciclo completo del torneo: equipos, plantillas, calendario, tabla de posiciones, cuartos y playoffs, estadísticas individuales, sanciones y pagos, con un panel administrativo protegido por sesión. Los datos viven en Postgres (JSONB) y los escudos en Vercel Blob.',
    highlights: [
      '19 equipos, 175 jugadores y 40 partidos gestionados desde el panel.',
      'Liga regular y eliminatorias con cuadro de playoffs y desempates.',
      'Persistencia en Postgres con respaldo local y escudos en Vercel Blob.',
    ],
    metrics: [
      { value: '19', label: 'equipos registrados' },
      { value: '175', label: 'jugadores en el mercado' },
      { value: '40', label: 'partidos del torneo' },
    ],
    screenshots: [
      { src: '/assets/img/futsal/home.png', title: 'Portada del torneo', desc: 'Campeón vigente, cruces de cuartos y próxima jornada' },
      { src: '/assets/img/futsal/equipos.png', title: 'Equipos', desc: 'Plantillas oficiales, escudos y estadísticas por equipo' },
      { src: '/assets/img/futsal/partidos.png', title: 'Calendario', desc: 'Liga regular y eliminatorias con resultados y horarios' },
      { src: '/assets/img/futsal/estadisticas.png', title: 'Estadísticas', desc: 'Goles, puntos y rendimiento colectivo de la liga' },
      { src: '/assets/img/futsal/jugadores.png', title: 'Jugadores y fichajes', desc: 'Directorio de futbolistas y mercado de transferencias' },
      { src: '/assets/img/futsal/login.png', title: 'Acceso administrador', desc: 'Sesión protegida para gestionar el torneo' },
    ],
    features: [
      { icon: ico.trophy, title: 'Liga y playoffs', desc: 'Tabla de posiciones, cuartos, semifinales y final con formatos de clasificación configurables.' },
      { icon: ico.users, title: 'Plantillas y fichajes', desc: 'Altas, bajas y transferencias con validación de elegibilidad y sanciones.' },
      { icon: ico.calendar, title: 'Calendario oficial', desc: 'Programación de jornadas, resultados en vivo y hora oficial de Venezuela.' },
      { icon: ico.chart, title: 'Estadísticas', desc: 'Goles, asistencias, tarjetas y rendimiento por jugador y por equipo.' },
      { icon: ico.shield, title: 'Panel protegido', desc: 'Autenticación de administrador y operaciones auditables sobre el estado del torneo.' },
      { icon: ico.database, title: 'Postgres + Blob', desc: 'Estado del torneo en JSONB sobre Postgres y escudos servidos desde Vercel Blob.' },
    ],
    heroColor: '#00e676',
  },
  {
    id: 'medica',
    name: 'Gestión Médica',
    tagline: 'Citas, consultas y expediente clínico digital con operación offline.',
    role: 'Full-Stack (Angular + Django)',
    category: 'salud',
    year: '2025',
    status: 'green',
    statusLabel: 'Producción',
    stack: ['Angular', 'TypeScript', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'WebSockets', 'Docker'],
    screenshot: '/assets/img/medica/dashboard.webp',
    description:
      'Solución para centros de salud con roles diferenciados (administrador, secretaría, médico y paciente). Agenda sincronizada en tiempo real, formularios dinámicos por especialidad y expediente clínico cifrado. Incorpora capacidades offline tipo PWA para sostener la operación ante fallas de conexión y reportes gerenciales para dirección médica.',
    highlights: [
      'Cuatro roles con permisos específicos sobre el expediente clínico.',
      'PWA offline con sincronización delta para consultorios sin red estable.',
      'Cifrado Fernet de datos clínicos y agenda sincronizada por WebSockets.',
    ],
    metrics: [
      { value: '4', label: 'roles clínicos' },
      { value: 'PWA', label: 'operación sin conexión' },
      { value: 'Fernet', label: 'cifrado de datos clínicos' },
    ],
    screenshots: [
      { src: '/assets/img/medica/login.webp', title: 'Control de acceso', desc: 'Ingreso basado en roles con autenticación JWT.' },
      { src: '/assets/img/medica/dashboard.webp', title: 'Panel administrativo', desc: 'Visión general de la clínica con indicadores de desempeño y flujo de pacientes.' },
      { src: '/assets/img/medica/citas.webp', title: 'Agenda dinámica', desc: 'Programación visual y control eficiente de turnos médicos.' },
      { src: '/assets/img/medica/perfil-paciente.webp', title: 'Historial clínico', desc: 'Expediente digital centralizado con la información vital del paciente.' },
      { src: '/assets/img/medica/reportes.webp', title: 'Inteligencia de negocio', desc: 'Métricas y reportes clave para la dirección médica.' },
    ],
    features: [
      { icon: ico.users, title: 'Gestión multi-rol', desc: 'Permisos específicos (RBAC) para médicos, administrativos y pacientes.' },
      { icon: ico.calendar, title: 'Agenda inteligente', desc: 'Control absoluto sobre la programación de citas, reduciendo tiempos de espera.' },
      { icon: ico.clipboard, title: 'Formularios adaptables', desc: 'Consultas configurables dinámicamente según las necesidades de cada especialidad.' },
      { icon: ico.lock, title: 'Privacidad garantizada', desc: 'Protección de los datos clínicos mediante cifrado de alto nivel (Fernet).' },
      { icon: ico.wifi, title: 'Operatividad offline', desc: 'Modo PWA con sincronización delta para seguir trabajando sin conexión.' },
      { icon: ico.sync, title: 'Sincronización en vivo', desc: 'WebSockets para mantener la agenda y el estado de los pacientes al segundo.' },
    ],
    heroColor: '#00f0ff',
  },
  {
    id: 'erp',
    name: 'ERP Contable',
    tagline: 'Facturación, inventario y contabilidad con partida doble y multimoneda.',
    role: 'Full-Stack (Vue + Node)',
    category: 'empresarial',
    year: '2026',
    status: 'amber',
    statusLabel: 'En desarrollo',
    stack: ['Node.js', 'TypeScript', 'Express', 'Vue', 'PostgreSQL', 'Redis', 'BullMQ', 'Docker'],
    screenshot: '/assets/img/erp/dashboard.webp',
    description:
      'ERP financiero enfocado en precisión contable: facturas con código QR, control de inventario por almacenes, plan de cuentas jerárquico y asientos de partida doble. Genera estados financieros en tiempo real (resultados, balance, sumas y saldos) y sincroniza la tasa oficial del BCV para operaciones multimoneda.',
    highlights: [
      'Asientos de partida doble siempre balanceados y auditables.',
      'Inventario por almacenes y categorías con alertas de reposición.',
      'Cierres de mes y cálculos pesados delegados a colas BullMQ.',
    ],
    metrics: [
      { value: '2×', label: 'partida doble balanceada' },
      { value: 'BCV', label: 'tasa oficial sincronizada' },
      { value: 'BullMQ', label: 'procesos en segundo plano' },
    ],
    screenshots: [
      { src: '/assets/img/erp/dashboard.webp', title: 'Dashboard financiero', desc: 'Análisis de liquidez, cuentas por cobrar y resumen de caja.' },
      { src: '/assets/img/erp/clientes.webp', title: 'Cartera de clientes', desc: 'Gestión centralizada de cuentas y líneas de crédito.' },
      { src: '/assets/img/erp/facturas.webp', title: 'Módulo de facturación', desc: 'Emisión rápida de documentos fiscales con generación de QR.' },
      { src: '/assets/img/erp/transacciones.webp', title: 'Control de inventario', desc: 'Registro preciso de movimientos, entradas y salidas de mercancía.' },
      { src: '/assets/img/erp/estado-resultado.webp', title: 'Estados financieros', desc: 'Reporte automatizado de ganancias y pérdidas.' },
      { src: '/assets/img/erp/reportes.webp', title: 'Exportación de datos', desc: 'Informes detallados listos para auditoría en Excel y PDF.' },
    ],
    features: [
      { icon: ico.receipt, title: 'Facturación avanzada', desc: 'Facturas y notas de crédito con códigos QR de validación.' },
      { icon: ico.box, title: 'Control de stock', desc: 'Inventario por almacenes y categorías, con alertas de reposición.' },
      { icon: ico.book, title: 'Núcleo contable', desc: 'Plan de cuentas personalizable y generación automática de asientos.' },
      { icon: ico.money, title: 'Sincronización de divisas', desc: 'Tasa oficial del BCV para transacciones multimoneda.' },
      { icon: ico.printer, title: 'Reportes de auditoría', desc: 'Libros mayores, balances y estados de resultados exportables.' },
      { icon: ico.settings, title: 'Procesamiento asíncrono', desc: 'Cierres de mes y cálculos pesados en colas BullMQ.' },
    ],
    heroColor: '#00ff66',
  },
  {
    id: 'jarvis',
    name: 'IA JARVIS (LISA)',
    tagline: 'Asistente de voz y texto para Windows: escucha, investiga y redacta documentos.',
    role: 'Full-Stack (Python + TypeScript)',
    category: 'ia',
    year: '2026',
    status: 'green',
    statusLabel: 'Producción',
    stack: ['Python', 'TypeScript', 'SCSS', 'pywebview', 'customtkinter', 'SQLite', 'Vosk', 'Ollama', 'edge-tts', 'PyInstaller'],
    screenshot: '/assets/img/jarvis/chat.png',
    description:
      'Asistente personal de voz y texto estilo Iron Man para Windows. Escucha, habla, investiga en internet y redacta documentos .docx con progreso en vivo. Integra 51 habilidades por voz, reconocimiento online y offline (Vosk), voces neuronales en español y un router de modelos (Gemini, Groq, DeepSeek, OpenRouter y Ollama local) sobre una interfaz HUD con orbe reactivo.',
    highlights: [
      '51 habilidades invocables por voz y 234 pruebas automatizadas.',
      'Router de 5 proveedores de IA con claves cifradas mediante DPAPI.',
      'Reconocimiento offline con Vosk y síntesis neural con detección de emoción.',
    ],
    metrics: [
      { value: '51', label: 'habilidades por voz' },
      { value: '5', label: 'proveedores de IA' },
      { value: '234', label: 'tests automatizados' },
    ],
    screenshots: [
      { src: '/assets/img/jarvis/ui.png', title: 'Pantalla principal', desc: 'Asistente con orbe reactivo y tema HUD futurista.' },
      { src: '/assets/img/jarvis/chat.png', title: 'Chat con la IA', desc: 'Conversación por voz y texto con respuestas en streaming.' },
      { src: '/assets/img/jarvis/configuracion.png', title: 'Configuración', desc: 'Ajustes de voz, proveedores LLM y seguridad.' },
    ],
    features: [
      { icon: ico.mic, title: 'Voz natural', desc: 'Reconocimiento online y offline (Vosk) y síntesis neural con pausa, reanudación y emoción.' },
      { icon: ico.cpu, title: 'Router de IA', desc: 'Gemini, Groq, DeepSeek, OpenRouter y Ollama local, con claves cifradas (DPAPI).' },
      { icon: ico.bolt, title: '51 habilidades', desc: 'Música, apps, comandos, alarmas y agenda activados por voz.' },
      { icon: ico.doc, title: 'Documentos reales', desc: 'Investiga en la web y redacta informes en .docx con progreso sección por sección.' },
      { icon: ico.shield, title: 'Seguridad y auditoría', desc: 'Archivos confinados al workspace, confirmación de acciones de riesgo y audit.log.' },
      { icon: ico.database, title: 'Memoria persistente', desc: 'Historial en SQLite y memoria de largo plazo con hechos y preferencias.' },
    ],
    heroColor: '#ff8800',
  },
  {
    id: 'umbral',
    name: 'Umbral',
    tagline: 'E-commerce editorial con backend en Go y storefront en Next.js.',
    role: 'Full-Stack (Go + Next.js)',
    category: 'ecommerce',
    year: '2026',
    status: 'green',
    statusLabel: 'Demo funcional',
    stack: ['Go', 'Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'Stripe (opcional)'],
    screenshot: '/assets/img/umbral/portada.png',
    description:
      'Tienda de objetos para el hogar con una dirección de arte editorial: papel cálido, tinta y terracota. La API en Go resuelve catálogo, carrito, pedidos, inventario y pagos sobre un monolito modular; el storefront en Next.js consume esos endpoints con renderizado dinámico. El checkout usa un simulador propio con validación Luhn, caducidad y CVC, y deja Stripe como adaptador aislado sin conexión real.',
    highlights: [
      'API en Go con catálogo, carrito, pedidos e inventario, cubierta por pruebas de dominio e integración.',
      'Storefront en Next.js 16 con carrito persistente, seguimiento por número y panel de administración.',
      'Pago simulado con tarjetas de prueba y validación de tarjeta; el PAN nunca se almacena ni se registra.',
    ],
    metrics: [
      { value: '10', label: 'piezas en catálogo' },
      { value: '8', label: 'categorías' },
      { value: '6', label: 'estados de pedido' },
    ],
    screenshots: [
      { src: '/assets/img/umbral/portada.png', title: 'Portada', desc: 'Hero editorial, selección curada y navegación por estancia.' },
      { src: '/assets/img/umbral/catalogo.png', title: 'Catálogo', desc: 'Diez piezas, filtros por categoría y búsqueda por material.' },
      { src: '/assets/img/umbral/producto.png', title: 'Detalle de producto', desc: 'Variantes, stock en vivo, materiales y piezas relacionadas.' },
      { src: '/assets/img/umbral/carrito.png', title: 'Carrito', desc: 'Cotización contra la API, envío gratuito y persistencia local.' },
      { src: '/assets/img/umbral/checkout.png', title: 'Checkout', desc: 'Datos de entrega y pago simulado con tarjetas de prueba.' },
      { src: '/assets/img/umbral/pedido.png', title: 'Seguimiento', desc: 'Estado del pedido, línea de tiempo y resumen de entrega.' },
      { src: '/assets/img/umbral/admin.png', title: 'Panel de pedidos', desc: 'Token de administración, métricas y avance de estados.' },
      { src: '/assets/img/umbral/movil.png', title: 'Vista móvil', desc: 'Catálogo responsive a 390 px con navegación compacta.' },
    ],
    features: [
      { icon: ico.code, title: 'Backend en Go', desc: 'net/http, pgx y go-redis con paquetes de dominio desacoplados y pruebas.' },
      { icon: ico.cart, title: 'Catálogo y carrito', desc: 'Variantes, stock, precios y cotización en vivo con persistencia local.' },
      { icon: ico.card, title: 'Pago simulado', desc: 'Valida Luhn, caducidad y CVC; incluye tarjetas de prueba y declives controlados.' },
      { icon: ico.plug, title: 'Stripe opcional', desc: 'Adaptador aislado que falla de forma explícita si no se configura.' },
      { icon: ico.database, title: 'Postgres + Redis', desc: 'Migraciones embebidas, seed idempotente y caché con fallback en memoria.' },
      { icon: ico.globe, title: 'Storefront Next.js', desc: 'App Router, SEO por producto y diseño responsive con Tailwind CSS.' },
    ],
    heroColor: '#a14e2c',
  },
];

export const personal = {
  name: 'Kevyn Camacaro',
  role: 'Software Engineer & Full-Stack Developer',
  title: 'Construyo productos full-stack que aguantan producción',
  tagline:
    'Ingeniero de software enfocado en backend (Go, Node.js, Python) y frontends modernos (Next.js, Vue, Angular). Diseño sistemas modulares, seguros y observables, con obsesión por el rendimiento y la experiencia real del usuario.',
  email: 'kevyn.camacaro03@gmail.com',
  phone: '+58 414 559 2859',
  github: 'https://github.com/kevyncamacaro77',
  githubLabel: 'github.com/kevyncamacaro77',
  location: 'Barquisimeto, Venezuela · Disponible Globalmente',
  stack: [
    'Go', 'Node.js', 'TypeScript', 'Python', 'Next.js', 'React', 'Vue.js', 'Angular',
    'PostgreSQL', 'Redis', 'Docker', 'Supabase',
  ],
  stats: [
    { num: '7', lbl: 'Productos construidos de punta a punta' },
    { num: '3+', lbl: 'Sistemas empresariales en producción' },
    { num: '12+', lbl: 'Tecnologías en el stack diario' },
  ],
  focus: [
    'Arquitectura modular y APIs seguras',
    'Tiempo real con WebSockets y colas',
    'Rendimiento, accesibilidad y DX',
  ],
};
