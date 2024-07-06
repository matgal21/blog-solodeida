// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "solo de ida | blog de viajes";
export const SITE_TITLE = "Solo de Ida | Blog de viajes";
export const SITE_DESCRIPTION = "Blog de viajes y experiencas vividas";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "solo de ida | tags";
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
    description: `Browse all articles under the ${category} category in AstroVerse`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/One/1/", title: "General" },
  { href: "/category/Three/1/", title: "Viajes" },
  { href: "/tags/Astro/1/", title: "Qué hacer en...?" },
  { href: "/category/Crónicas/1/", title: "Crónicas" },
  { href: "/tags/", title: "TAGS" },
  { href: "/category/Descubrir/1/", title: "Descubrir" },



];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/posts/sobre-mi/", title: "Sobre mi" },
  { href: "/tags/", title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://twitter.com/@solodeida",
    icon: "tabler:brand-twitter",
    label: "Twitter",
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
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
