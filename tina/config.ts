import { defineConfig } from "tinacms";

const NEXT_PUBLIC_TINA_CLIENT_ID = "ee9f497e-8ac0-4ec5-a301-ea3eac105a23";
const TINA_TOKEN = "ea27bce51aea9718fba25b74617e97e1188de9d5";
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
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
          },
          {
            type: "string",
            name: "description",
            label: "Descripción",
          },
          {
            type: "string",
            name: "category",
            label: "Categoria",
            options: [
              { label: "Selecciona una categoría", value: "" }, // Opción por defecto (opcional)
              { label: "Aviación", value: "- Aviacion" }, // El 'value' es lo que se guarda
              { label: "Viajes", value: "- Viajes" },
              { label: "General", value: "- General" },
              { label: "Descubrir", value: "- Descubrir" }
              // Puedes añadir más opciones de categoría aquí
            ],
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Date"
          },
          {
            type: "image",
            name: "cover",
            label: "Imagen de portada"
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
});
