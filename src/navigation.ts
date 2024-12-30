import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    /*{
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',  
    },*/
    {
      text: 'Servicios',
      href: '#features',
    },
    {
      text: 'Productos',
      href: '#products',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Sistema de Auditoria',
      links: [
        { text: 'Características', href: '#' },
        // { text: 'Seguridad', href: '#' },
        // { text: 'Equipo', href: '#' },
        { text: 'Empresa', href: '#' },
        { text: 'Historias de clientes', href: '#' },
        // { text: 'Precios', href: '#' },
        // { text: 'Recursos', href: '#' },
      ],
    },
    {
      title: 'Sistema de Tareas',
      links: [
        { text: 'Características', href: '#' },
        // { text: 'Seguridad', href: '#' },
        // { text: 'Equipo', href: '#' },
        { text: 'Empresa', href: '#' },
        { text: 'Historias de clientes', href: '#' },
        // { text: 'Precios', href: '#' },
        // { text: 'Recursos', href: '#' },
      ],
    },
    {
      title: 'Sistema de Hojas de Ruta',
      links: [
        { text: 'Características', href: '#' },
        // { text: 'Seguridad', href: '#' },
        // { text: 'Equipo', href: '#' },
        { text: 'Empresa', href: '#' },
        { text: 'Historias de clientes', href: '#' },
        // { text: 'Precios', href: '#' },
        // { text: 'Recursos', href: '#' },
      ],
    },
    /*{
      title: 'Plataforma',
      links: [
        { text: 'API de Desarrollador', href: '#' },
        { text: 'Socios', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { text: 'Documentos', href: '#' },
        { text: 'Foro Comunitario', href: '#' },
        { text: 'Servicios Profesionales', href: '#' },
        { text: 'Habilidades', href: '#' },
        { text: 'Estado', href: '#' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { text: 'Acerca de', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Carreras', href: '#' },
        { text: 'Prensa', href: '#' },
        { text: 'Inclusión', href: '#' },
        { text: 'Impacto Social', href: '#' },
        { text: 'Tienda', href: '#' },
      ],
    },*/
  ],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terms') },
    { text: 'Política de Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
  `,
};
