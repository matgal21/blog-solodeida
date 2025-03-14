import { defineConfig } from "astro/config";
import { remarkModifiedTime } from "./src/utils/remark-modified-time.mjs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import pagefind from "astro-pagefind";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';




// https://astro.build/config
export default defineConfig({
  site: "https://solodeida.com/",
  trailingSlash: "always",


  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  experimental: {
    contentCollectionCache: true,
  },

  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.unsplash.com",
      },
    ],
  },

  markdown: {
    remarkPlugins: [remarkModifiedTime],
  },

  integrations: [
    react(),
    mdx(),
    sitemap(),
    pagefind(),
    tailwind(),

    partytown({
      config: {
        forward: ["dataLayer.push"],
        debug: false,
      },
    }),

    icon({
      include: {
        tabler: ["*"],
      },
    }),
    
  ],
  
  vite: {
    build: {
      rollupOptions: {
        output: {
          hoistTransitiveImports: false,
        },
        external: ['zwitch'], // Añadir zwitch a la lista de dependencias externas si sigues teniendo problemas.
      },
    },
  },
});
