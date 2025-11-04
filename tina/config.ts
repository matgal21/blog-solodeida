import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titulo",
            isTitle: true,
            required: true,
            searchable: true, // ¡Añadido! Este campo será buscable
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            // No suele ser necesario que el slug sea directamente buscable,
            // pero podrías añadir searchable: true si lo necesitas.
          },
          {
            type: "string",
            name: "description",
            label: "Descripción",
            searchable: true, // ¡Añadido! Este campo será buscable
          },
          {
            type: "string",
            name: "category",
            label: "Categoria",
            list: true,
            options: [
              { label: "General", value: "General" },
              { label: "Viajes", value: "Viajes" },
              { label: "Crónicas", value: "Crónicas" },
              { label: "Aviación", value: "Aviación" },
              { label: "Descubrir", value: "Descubrir" },
              // Puedes añadir más opciones de categoría aquí
            ],
            searchable: true, // ¡Añadido! Las categorías serán buscables
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            searchable: true, // ¡Añadido! Los tags serán buscables
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Fecha de Publicación",
            required: true,
          },
          {
            type: "image",
            name: "cover",
            label: "Imagen de portada",
          },
          {
            type: "string",
            name: "coverAlt",
            label: "Resumen imagen",
          },
          {
            type: "string",
            name: "author",
            label: "Autor",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: "<fcc58c7154760f970e44d158a156230f00732d1b>",
      stopwordLanguages: ["spa"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
  
});