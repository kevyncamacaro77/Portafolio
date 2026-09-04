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
    tagline: 'Sistema completo de gestiÃ³n de relaciones con clientes, ventas y pipeline comercial.',
    role: 'Full-Stack (Vue + Node)',
    status: 'green',
    statusLabel: 'ProducciÃ³n',
    stack: ['Node.js', 'TypeScript', 'Express', 'Vue 3', 'Vuetify', 'PostgreSQL', 'Redis', 'Docker'],
    screenshot: '/assets/img/crm/dashboard.webp',
    description:
      'Plataforma integral de CRM con pipeline de ventas tipo kanban, gestiÃ³n de contactos con timeline, tareas, documentos firmados y notificaciones en tiempo real. Arquitectura robusta con autenticaciÃ³n JWT por sesiÃ³n Ãºnica, cifrado de datos personales (AES-256-GCM) y panel de reportes con exportaciÃ³n Excel/PDF.',
    screenshots: [
      { src: '/assets/img/crm/login.webp', title: 'Login seguro', desc: 'Acceso con autenticaciÃ³n y verificaciÃ³n 2FA' },
      { src: '/assets/img/crm/dashboard.webp', title: 'Dashboard', desc: 'KPIs, grÃ¡ficos y metas del periodo' },
      { src: '/assets/img/crm/pipeline.webp', title: 'Pipeline de ventas', desc: 'GestiÃ³n de oportunidades en kanban arrastrable' },
      { src: '/assets/img/crm/contactos.webp', title: 'Contactos', desc: 'Timeline, relaciones y soft-delete con deshacer' },
      { src: '/assets/img/crm/tareas.webp', title: 'Tareas', desc: 'OrganizaciÃ³n de pendientes y seguimiento' },
      { src: '/assets/img/crm/documentos.webp', title: 'Documentos', desc: 'Subida firmada y descarga segura' },
      { src: '/assets/img/crm/estadisticas.webp', title: 'EstadÃ­sticas', desc: 'AnÃ¡lisis y reportes exportables' }
    ],
    features: [
      { icon: 'ðŸ“ˆ', title: 'Pipeline kanban', desc: 'Arrastra deals entre etapas del embudo comercial.' },
      { icon: 'ðŸ”', title: 'Seguridad', desc: 'JWT rotativo, sesiÃ³n Ãºnica y cifrado de datos PII.' },
      { icon: 'ðŸ””', title: 'Tiempo real', desc: 'Notificaciones por SSE con respuesta inmediata.' },
      { icon: 'ðŸ“„', title: 'Reportes', desc: 'ExportaciÃ³n a Excel y PDF con KPIs del negocio.' },
      { icon: 'ðŸ‘¥', title: 'Multi-rol', desc: 'RBAC con permisos granulares por rol.' },
      { icon: 'ðŸ—„ï¸', title: 'PostgreSQL + Redis', desc: 'Persistencia relacional y cachÃ© de alto rendimiento.' }
    ],
    heroColor: '#4f46e5'
  },
  {
    id: 'medica',
    name: 'GestiÃ³n MÃ©dica',
    tagline: 'Plataforma de gestiÃ³n de consultas mÃ©dicas, citas y expediente clÃ­nico digital.',
    role: 'Full-Stack (Angular + Django)',
    status: 'green',
    statusLabel: 'ProducciÃ³n',
    stack: ['Angular', 'TypeScript', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'WebSockets', 'Docker'],
    screenshot: '/assets/img/medica/dashboard.webp',
    description:
      'Sistema de gestiÃ³n mÃ©dica completo con roles diferenciados (administrador, secretaria, mÃ©dico, paciente), agenda de citas, consultas con formularios dinÃ¡micos por especialidad, expediente clÃ­nico cifrado y sincronizaciÃ³n offline como PWA. Incluye WebSockets para actualizaciÃ³n en tiempo real y generaciÃ³n de reportes gerenciales.',
    screenshots: [
      { src: '/assets/img/medica/login.webp', title: 'Inicio de sesiÃ³n', desc: 'Acceso por roles con autenticaciÃ³n JWT en el hospital.' },
      { src: '/assets/img/medica/dashboard.webp', title: 'Dashboard administrador', desc: 'Panel de control con indicadores y resumen operativo.' },
      { src: '/assets/img/medica/citas.webp', title: 'Agenda de citas', desc: 'ProgramaciÃ³n y control de citas desde el escritorio de secretarÃ­a.' },
      { src: '/assets/img/medica/perfil-paciente.webp', title: 'Perfil de paciente', desc: 'Expediente y datos clÃ­nicos del paciente.' },
      { src: '/assets/img/medica/reportes.webp', title: 'Reportes gerenciales', desc: 'GeneraciÃ³n de reportes para la direcciÃ³n.' }
    ],
    features: [
      { icon: 'ðŸ©º', title: 'Roles clÃ­nicos', desc: 'Cuatro perfiles de acceso con permisos RBAC.' },
      { icon: 'ðŸ“…', title: 'Agenda de citas', desc: 'ProgramaciÃ³n y control de citas mÃ©dicas.' },
      { icon: 'ðŸ“‹', title: 'Consultas dinÃ¡micas', desc: 'Formularios configurables por especialidad.' },
      { icon: 'ðŸ”’', title: 'Expediente cifrado', desc: 'Datos clÃ­nicos protegidos con cifrado Fernet.' },
      { icon: 'ðŸ“´', title: 'Offline PWA', desc: 'SincronizaciÃ³n delta para trabajo sin conexiÃ³n.' },
      { icon: 'âš¡', title: 'Tiempo real', desc: 'WebSockets con estado de agenda en vivo.' }
    ],
    heroColor: '#0ea5e9'
  },
  {
    id: 'erp',
    name: 'ERP Contable',
    tagline: 'Sistema contable con facturaciÃ³n, inventario, plan de cuentas y estados financieros.',
    role: 'Full-Stack (Vue + Node)',
    status: 'amber',
    statusLabel: 'En desarrollo',
    stack: ['Node.js', 'TypeScript', 'Express', 'Vue', 'PostgreSQL', 'Redis', 'Bull', 'Docker'],
    screenshot: '/assets/img/erp/dashboard.webp',
    description:
      'ERP contable con emisiÃ³n de facturas, gestiÃ³n de inventario tipo autopartes, plan de cuentas jerÃ¡rquico, asientos contables balanceados y estados financieros (estado de resultados, balance, sumas y saldos). GeneraciÃ³n de reportes Excel/PDF, cÃ³digos QR en facturas e integraciÃ³n con tasa de cambio del BCV.',
    screenshots: [
      { src: '/assets/img/erp/dashboard.webp', title: 'Dashboard', desc: 'Resumen financiero e indicadores' },
      { src: '/assets/img/erp/clientes.webp', title: 'Clientes', desc: 'GestiÃ³n de cartera de clientes' },
      { src: '/assets/img/erp/facturas.webp', title: 'Facturas', desc: 'EmisiÃ³n de documentos con QR' },
      { src: '/assets/img/erp/transacciones.webp', title: 'Transacciones', desc: 'Movimientos e inventario' },
      { src: '/assets/img/erp/estado-resultado.webp', title: 'Estado de resultados', desc: 'Reporte financiero contable' },
      { src: '/assets/img/erp/reportes.webp', title: 'Reportes', desc: 'ExportaciÃ³n a Excel y PDF' }
    ],
    features: [
      { icon: 'ðŸ§¾', title: 'FacturaciÃ³n', desc: 'Facturas y documentos con cÃ³digo QR.' },
      { icon: 'ðŸ“¦', title: 'Inventario', desc: 'Control de existencias por categorÃ­as.' },
      { icon: 'ðŸ“Š', title: 'Contabilidad', desc: 'Plan de cuentas y asientos balanceados.' },
      { icon: 'ðŸ’°', title: 'Tasa BCV', desc: 'ConversiÃ³n a tasa de cambio oficial.' },
      { icon: 'ðŸ–¨ï¸', title: 'Reportes', desc: 'Estados financieros en Excel y PDF.' },
      { icon: 'âš™ï¸', title: 'Trabajos en cola', desc: 'Cierres y batch con Bull y Redis.' }
    ],
    heroColor: '#10b981'
  }
];

export const personal = {
  name: 'Kevyn Camacaro',
  role: 'Desarrollador Full-Stack Junior',
  title: 'Construyo aplicaciones web completas y escalables',
  tagline: 'Backend Node.js y Django, frontend Angular y Vue, bases de datos PostgreSQL y despliegue con Docker.',
  email: 'kevyn.camacaro03@gmail.com',
  phone: '+58 414 559 2859',
  github: 'https://github.com/kevyncamacaro77',
  githubLabel: 'github.com/kevyncamacaro77',
  location: 'Barquisimeto, Venezuela Â· Remoto',
  stack: [
    'Node.js', 'TypeScript', 'Python', 'Django REST', 'Angular', 'Vue', 'PostgreSQL', 'Docker', 'Redis', 'Express'
  ],
  stats: [
    { num: '3+', lbl: 'Proyectos full-stack desplegados' },
    { num: '2', lbl: 'AÃ±os de experiencia (pasantÃ­as)' },
    { num: '10+', lbl: 'TecnologÃ­as del stack' }
  ]
};
