// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "solo de ida | blog de viajes";
export const SITE_TITLE = "Solo de Ida | Blog de viajes";
export const SITE_DESCRIPTION = "En mi blog de viajes, como viajero comparto noticias de turismo, información clave para planificar viajes y mis experiencias recorriendo destinos alrededor del mundo";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "Solo de Ida | TAGS";
export const Tags_DESCRIPTION =
  "solo de ida - tags";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `${tag} | Solo de ida`,
    description: `Todos los posteos sobre ${tag}, en el blog.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `${category} | Solo de ida`,
    description: `Todos los posts sobre ${category}, categoria en Solo de Ida`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/General/1/", title: "General" },
  { href: "/category/Viajes/1/", title: "Viajes" },
  { href: "/category/Crónicas/1/", title: "Crónicas" },
  { href: "/category/Aviación/1/", title: "Aviación" },
  { href: "/category/Descubrir/1/", title: "Descubrir destinos" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/posts/sobre-mi/", title: "Acerca del blog" },
  { href: "/tags/", title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://x.com/@solodeida",
    icon: "tabler:brand-x",
    label: "X",
  },
  {
    href: "https://youtube.com/@solodeida",
    icon: "tabler:brand-youtube",
    label: "Youtube",
  },
  {
    href: "https://tiktok.com/@solodeida",
    icon: "tabler:brand-tiktok",
    label: "Tiktok",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Busqueda del blog`;
export const SEARCH_PAGE_DESCRIPTION = `Busca todo el contenido de ${SITE_TITLE}`;
