export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Super Mercado El Rey",
  description: " Sistema de facturación y control de inventario",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Facturación",
      href: "/billing",
    },
    {
      label: "Inventario",
      href: "/inventory",
    },
    {
      label: "Proveedores",
      href: "/providers",
    },
  ],
  navMenuItems: [
    {
      label: "Facturación",
      href: "/billing",
    },
    {
      label: "Inventario",
      href: "/inventory",
    },
    {
      label: "Proveedores",
      href: "/providers",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
