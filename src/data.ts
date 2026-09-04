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

export interface Project {
  id: 'crm' | 'medica' | 'erp';
  name: string;
  tagline: string;
  role: string;
  status: 'green' | 'amber';
  statusLabel: string;
  stack: string[];
  description: string;
  screenshot: string;
  screenshots: Screenshot[];
  features: Feature[];
  heroColor: string;
}

export const projects: Project[] = [
  {
    id: 'crm',
    name: 'CRM Empresarial',
    tagline: 'Sistema completo de gestión de relaciones con clientes, ventas y pipeline comercial.',
    role: 'Full-Stack (Vue + Node)',
    status: 'green',
    statusLabel: 'Producción',
    stack: ['Node.js', 'TypeScript', 'Express', 'Vue 3', 'Vuetify', 'PostgreSQL', 'Redis', 'Docker'],
    screenshot: '/assets/img/crm/dashboard.webp',
    description:
      'Plataforma integral de CRM diseñada para optimizar procesos comerciales. Incluye un pipeline de ventas tipo kanban altamente interactivo, gestión avanzada de contactos con historial (timeline), asignación de tareas, manejo de documentos con firma electrónica y notificaciones en tiempo real. Arquitectura enfocada en la seguridad con autenticación JWT, manejo de sesión única y cifrado de datos sensibles (AES-256-GCM), junto a un panel de reportes con exportación a Excel y PDF.',
    screenshots: [
      { src: '/assets/img/crm/login.webp', title: 'Login seguro', desc: 'Acceso con autenticación y verificación 2FA' },
      { src: '/assets/img/crm/dashboard.webp', title: 'Dashboard', desc: 'Métricas clave, gráficos y metas del periodo' },
      { src: '/assets/img/crm/pipeline.webp', title: 'Pipeline de ventas', desc: 'Gestión ágil de oportunidades mediante kanban interactivo' },
      { src: '/assets/img/crm/contactos.webp', title: 'Contactos', desc: 'Historial detallado, relaciones y recuperación de registros eliminados' },
      { src: '/assets/img/crm/tareas.webp', title: 'Tareas', desc: 'Organización eficiente de pendientes y seguimiento a clientes' },
      { src: '/assets/img/crm/documentos.webp', title: 'Documentos', desc: 'Almacenamiento seguro y trazabilidad de documentos firmados' },
      { src: '/assets/img/crm/estadisticas.webp', title: 'Estadísticas', desc: 'Análisis detallado y reportes gerenciales exportables' }
    ],
    features: [
      { icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="3.5" width="5" height="17" rx="1.2"/><rect x="9.5" y="3.5" width="5" height="11" rx="1.2"/><rect x="16.5" y="3.5" width="5" height="7" rx="1.2"/></svg>', title: 'Pipeline Kanban', desc: 'Gestión visual de oportunidades. Arrastra tratos entre las distintas etapas del embudo comercial.' },
      { icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>', title: 'Seguridad Avanzada', desc: 'Implementación de JWT rotativo, sesión única por usuario y cifrado de datos de identificación personal (PII).' },
      { icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10"/></svg>', title: 'Actualizaciones en Tiempo Real', desc: 'Sistema de notificaciones push vía Server-Sent Events (SSE) para una respuesta inmediata.' },
      { icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="15"/></svg>', title: 'Reportes Detallados', desc: 'Generación instantánea de reportes en Excel y PDF con los KPIs más importantes del negocio.' },
      { icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>', title: 'Control de Acceso (RBAC)', desc: 'Gestión multi-rol con permisos granulares adaptados a la jerarquía de la empresa.' },
      { icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>', title: 'Alto Rendimiento', desc: 'Uso combinado de PostgreSQL para persistencia relacional y Redis como caché para acelerar consultas complejas.' }
    ],
    heroColor: '#b026ff' // Neon Purple
  },
  {
    id: 'medica',
    name: 'Gestión Médica',
    tagline: 'Plataforma integral para clínicas: gestión de citas, consultas y expediente clínico digital.',
    role: 'Full-Stack (Angular + Django)',
    status: 'green',
    statusLabel: 'Producción',
    stack: ['Angular', 'TypeScript', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'WebSockets', 'Docker'],
    screenshot: '/assets/img/medica/dashboard.webp',
    description:
      'Solución tecnológica completa para centros de salud. Cuenta con roles diferenciados (administrador, secretaría, médico, paciente), ofreciendo una agenda de citas sincronizada en tiempo real, consultas mediante formularios dinámicos adaptados a cada especialidad, y un expediente clínico digital fuertemente cifrado. Además, incorpora capacidades offline tipo PWA para asegurar la operatividad ante fallas de conexión, y reportes gerenciales para la toma de decisiones.',
    screenshots: [
      { src: '/assets/img/medica/login.webp', title: 'Control de Acceso', desc: 'Ingreso basado en roles con autenticación JWT.' },
      { src: '/assets/img/medica/dashboard.webp', title: 'Panel Administrativo', desc: 'Visión general de la clínica, con indicadores de desempeño y flujo de pacientes.' },
      { src: '/assets/img/medica/citas.webp', title: 'Agenda Dinámica', desc: 'Programación visual y control eficiente de turnos médicos.' },
      { src: '/assets/img/medica/perfil-paciente.webp', title: 'Historial Clínico', desc: 'Expediente digital centralizado con toda la información vital del paciente.' },
      { src: '/assets/img/medica/reportes.webp', title: 'Inteligencia de Negocio', desc: 'Métricas y reportes clave para la dirección médica.' }
    ],
    features: [
      { icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>', title: 'Gestión Multi-Rol', desc: 'Acceso personalizado con permisos específicos (RBAC) para médicos, administrativos y pacientes.' },
      { icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="17" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="9 15 11 17 15 13"/></svg>', title: 'Agenda Inteligente', desc: 'Control absoluto sobre la programación de citas, reduciendo tiempos de espera.' },
      { icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 12h6M9 16h6"/></svg>', title: 'Formularios Adaptables', desc: 'Consultas configurables dinámicamente según las necesidades de cada especialidad médica.' },
      { icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 7.5 19 4"/><path d="M21 2l-2 2"/><circle cx="7.5" cy="15.5" r="4.5"/><path d="M12 11 7.5 15.5"/><path d="M15.5 7.5 12 11"/></svg>', title: 'Privacidad Garantizada', desc: 'Protección absoluta de los datos clínicos mediante cifrado de alto nivel (Fernet).' },
      { icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9.5a15 15 0 0 1 20 0"/><path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>', title: 'Operatividad Offline', desc: 'Modo PWA con sincronización delta, permitiendo continuar trabajando incluso sin conexión a internet.' },
      { icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>', title: 'Sincronización en Vivo', desc: 'WebSockets integrados para mantener la agenda y estado de los pacientes actualizados al segundo.' }
    ],
    heroColor: '#00f0ff' // Neon cyan claro
  },
  {
    id: 'erp',
    name: 'ERP Contable',
    tagline: 'Sistema de planificación de recursos empresariales: facturación, inventario y contabilidad.',
    role: 'Full-Stack (Vue + Node)',
    status: 'amber',
    statusLabel: 'En desarrollo',
    stack: ['Node.js', 'TypeScript', 'Express', 'Vue', 'PostgreSQL', 'Redis', 'Bull', 'Docker'],
    screenshot: '/assets/img/erp/dashboard.webp',
    description:
      'ERP financiero robusto enfocado en la precisión contable. Permite la emisión de facturas (incluyendo códigos QR), control exhaustivo de inventario (ideal para altos volúmenes como autopartes), y mantenimiento de un plan de cuentas jerárquico. Genera asientos contables doblemente balanceados y estados financieros en tiempo real (estado de resultados, balance general, sumas y saldos). Incluye integración automatizada con la tasa de cambio oficial del BCV.',
    screenshots: [
      { src: '/assets/img/erp/dashboard.webp', title: 'Dashboard Financiero', desc: 'Análisis de liquidez, cuentas por cobrar y resumen de caja.' },
      { src: '/assets/img/erp/clientes.webp', title: 'Cartera de Clientes', desc: 'Gestión centralizada de cuentas y líneas de crédito.' },
      { src: '/assets/img/erp/facturas.webp', title: 'Módulo de Facturación', desc: 'Emisión rápida de documentos fiscales con generación de QR.' },
      { src: '/assets/img/erp/transacciones.webp', title: 'Control de Inventario', desc: 'Registro preciso de movimientos, entradas y salidas de mercancía.' },
      { src: '/assets/img/erp/estado-resultado.webp', title: 'Estados Financieros', desc: 'Reporte automatizado de ganancias y pérdidas.' },
      { src: '/assets/img/erp/reportes.webp', title: 'Exportación de Datos', desc: 'Informes detallados listos para auditoría en formatos Excel y PDF.' }
    ],
    features: [
      { icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="15" y2="13"/></svg>', title: 'Facturación Avanzada', desc: 'Generación ágil de facturas y notas de crédito, con soporte para códigos QR de validación.' },
      { icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>', title: 'Control de Stock', desc: 'Manejo de inventario por almacenes y categorías, con alertas de reposición.' },
      { icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="9" y1="7" x2="16" y2="7"/><line x1="9" y1="11" x2="16" y2="11"/></svg>', title: 'Núcleo Contable', desc: 'Arquitectura sólida con plan de cuentas personalizable y generación automática de asientos.' },
      { icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>', title: 'Sincronización Divisas', desc: 'Conexión en tiempo real con la tasa de cambio oficial (BCV) para transacciones multimoneda.' },
      { icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>', title: 'Reportes de Auditoría', desc: 'Generación impecable de libros mayores, balances y estados de resultados.' },
      { icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>', title: 'Procesamiento Asíncrono', desc: 'Cierres de mes y cálculos pesados manejados en segundo plano mediante colas de trabajo (BullMQ).' }
    ],
    heroColor: '#00ff66' // Neon green
  }
];

export const personal = {
  name: 'Kevyn Camacaro',
  role: 'Software Engineer & Full-Stack Developer',
  title: 'Transformando ideas en soluciones tecnológicas escalables',
  tagline: 'Especialista en arquitectura backend (Node.js, Python) e interfaces interactivas (Vue, Angular). Apasionado por el código limpio, el rendimiento y la creación de productos que impactan.',
  email: 'kevyn.camacaro03@gmail.com',
  phone: '+58 414 559 2859',
  github: 'https://github.com/kevyncamacaro77',
  githubLabel: 'github.com/kevyncamacaro77',
  location: 'Barquisimeto, Venezuela · Disponible Globalmente',
  stack: [
    'Node.js', 'TypeScript', 'Python', 'Django', 'Angular', 'Vue.js', 'PostgreSQL', 'Docker', 'Redis', 'AWS'
  ],
  stats: [
    { num: '3+', lbl: 'Sistemas Empresariales en Producción' },
    { num: '2', lbl: 'Años de Experiencia Comprobada' },
    { num: '10+', lbl: 'Tecnologías Dominadas en el Stack' }
  ]
};
