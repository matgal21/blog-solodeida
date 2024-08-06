---
title: ¿Qué hacer en... BUDAPEST?
slug: que-hacer-en-budapest
description: Las Mejores Atracciones de Budapest, descubrí la Perla del Danubio.
category:
  - Descubrir
tags:
  - Hungría
  - Budapest
  - Descubrir
  - Turismo
pubDate: 2024-09-01
cover: "/images/budapest/budapest.jpeg"
coverAlt: Parlamento Budapest
author: Mateo
---

## Budapest, la capital de Hungría, es una ciudad fascinante que combina a la perfección su rica historia con una vibrante vida moderna. Dividida por el majestuoso río Danubio, esta ciudad está llena de impresionantes monumentos, relajantes baños termales y una cultura única. En esta nota, exploraremos las mejores atracciones de Budapest que no te puedes perder. Desde el icónico Parlamento Húngaro hasta las históricas Termas Széchenyi, descubre todo lo que hace de Budapest un destino inolvidable.

## 1. El Parlamento Húngaro 

El Parlamento Húngaro es uno de los edificios más emblemáticos de Budapest y una visita obligada para cualquier viajero. Situado a orillas del Danubio, este majestuoso edificio neogótico es el tercero más grande del mundo de su tipo. Los visitantes pueden disfrutar de visitas guiadas que les llevan a través de sus impresionantes salas, incluyendo la Sala de la Cúpula, donde se guardan las Joyas de la Corona Húngara. La fachada iluminada del Parlamento por la noche es una vista espectacular que no te puedes perder.

## 2. El Bastión de los Pescadores 

El Bastión de los Pescadores es una de las atracciones más fotogénicas de Budapest. Ubicado en el distrito de Buda, este mirador ofrece vistas panorámicas impresionantes de la ciudad y el Danubio. Construido a finales del siglo XIX, su diseño neogótico y neorrománico parece sacado de un cuento de hadas. Pasea por sus torres y terrazas para disfrutar de las mejores vistas del Parlamento y el Puente de las Cadenas. Muy cerca se encuentra la Iglesia de Matías, otra joya arquitectónica que vale la pena visitar.

## 3. Las Termas Széchenyi 

Budapest es famosa por sus baños termales, y las Termas Széchenyi son las más grandes y populares de la ciudad. Inauguradas en 1913, estas termas se encuentran en el Parque de la Ciudad y ofrecen una experiencia de relajación inigualable. Con 15 piscinas interiores y 3 al aire libre, además de saunas y baños de vapor, las Termas Széchenyi son perfectas para relajarse y disfrutar de las propiedades curativas de sus aguas termales. Sumérgete en sus piscinas al aire libre, especialmente en invierno, para una experiencia única.

## 4. El Castillo de Buda 

El Castillo de Buda, también conocido como el Palacio Real, es una de las atracciones más importantes de Budapest. Este impresionante complejo palaciego ha sido residencia de reyes húngaros desde el siglo XIII y ahora alberga la Galería Nacional Húngara y el Museo de Historia de Budapest. Pasea por sus terrenos, admira la arquitectura barroca y disfruta de las vistas panorámicas de la ciudad desde sus terrazas. No te pierdas el cambio de guardia frente al Palacio Sándor, la residencia oficial del Presidente de Hungría, ubicada cerca del castillo.

## 5. La Avenida Andrássy y la Ópera Estatal 

La Avenida Andrássy es una de las principales arterias de Budapest y una visita obligada para los amantes de la arquitectura y las compras. Este elegante bulevar, declarado Patrimonio de la Humanidad por la UNESCO, está flanqueado por hermosos edificios de estilo neo-renacentista, tiendas de lujo, restaurantes y cafés. A lo largo de la avenida se encuentra la majestuosa Ópera Estatal de Hungría, un ejemplo impresionante de la arquitectura del siglo XIX. Aprovecha para asistir a una ópera o ballet y disfrutar de su increíble acústica y decoración interior.

Como conclusión 

### Budapest es una ciudad que sorprende y encanta a todos sus visitantes con su mezcla de historia, cultura y belleza. Ya sea que explores el imponente Parlamento Húngaro, te maravilles con las vistas desde el Bastión de los Pescadores, te relajes en las Termas Széchenyi, descubras la historia en el Castillo de Buda o pasees por la elegante Avenida Andrássy, cada experiencia en Budapest será inolvidable. ¡Empieza a planear tu viaje y descubre por ti mismo todo lo que la encantadora capital húngara tiene para ofrecer!


**Astro components** are the basic building blocks of any Astro project. They are HTML-only templating components with no client-side runtime. You can spot an Astro component by its file extension: `.astro`.

Astro components are extremely flexible. Often, an Astro component will contain some **reusable UI on the page**, like a header or a profile card. At other times, an Astro component may contain a smaller snippet of HTML, like a collection of common `<meta>` tags that make SEO easy to work with. Astro components can even contain an entire page layout.

The most important thing to know about Astro components is that they **don't render on the client**. They render to HTML either at build-time or on-demand using [server-side rendering (SSR)](/en/guides/server-side-rendering/). You can include JavaScript code inside of your component frontmatter, and all of it will be stripped from the final page sent to your users' browsers. The result is a faster site, with zero JavaScript footprint added by default.

When your Astro component does need client-side interactivity, you can add [standard HTML `<script>` tags](/en/guides/client-side-scripts/) or [UI Framework components](/en/core-concepts/framework-components/#hydrating-interactive-components).

## Component Structure

An Astro component is made up of two main parts: the **Component Script** and the **Component Template**. Each part performs a different job, but together they provide a framework that is both easy to use and expressive enough to handle whatever you might want to build.

```astro title="src/components/EmptyComponent.astro"
---
// Component Script (JavaScript)
---

<!-- Component Template (HTML + JS Expressions) -->
```

### The Component Script

Astro uses a code fence (`---`) to identify the component script in your Astro component. If you've ever written Markdown before, you may already be familiar with a similar concept called _frontmatter._ Astro's idea of a component script was directly inspired by this concept.

You can use the component script to write any JavaScript code that you need to render your template. This can include:

- importing other Astro components
- importing other framework components, like React
- importing data, like a JSON file
- fetching content from an API or database
- creating variables that you will reference in your template

```astro title="src/components/MyComponent.astro"
---
import SomeAstroComponent from "../components/SomeAstroComponent.astro";
import SomeReactComponent from "../components/SomeReactComponent.jsx";
import someData from "../data/pokemon.json";

// Access passed-in component props, like `<X title="Hello, World" />`
const { title } = Astro.props;
// Fetch external data, even from a private API or database
const data = await fetch("SOME_SECRET_API_URL/users").then((r) => r.json());
---

<!-- Your template here! -->
```

The code fence is designed to guarantee that the JavaScript that you write in it is "fenced in." It won't escape into your frontend application, or fall into your user's hands. You can safely write code here that is expensive or sensitive (like a call to your private database) without worrying about it ever ending up in your user's browser.

:::tip
You can even write TypeScript in your component script!
:::

### The Component Template

The component template is below the code fence and determines the HTML output of your component.

If you write plain HTML here, your component will render that HTML in any Astro page it is imported and used.

However, [Astro's component template syntax](/en/core-concepts/astro-syntax/) also supports **JavaScript expressions**, Astro [`<style>`](/en/guides/styling/#styling-in-astro) and [`<script>`](/en/guides/client-side-scripts/#using-script-in-astro) tags, **imported components**, and [**special Astro directives**](/en/reference/directives-reference/). Data and values defined in the component script can be used in the component template to produce dynamically-created HTML.

```astro title="src/components/MyFavoritePokemon.astro"
---
// Your component script here!
import Banner from "../components/Banner.astro";
import ReactPokemonComponent from "../components/ReactPokemonComponent.jsx";
const myFavoritePokemon = [
  /* ... */
];
const { title } = Astro.props;
---

<!-- HTML comments supported! -->{/* JS comment syntax is also valid! */}

<Banner />
<h1>Hello, world!</h1>

<!-- Use props and other variables from the component script: -->
<p>{title}</p>

<!-- Include other UI framework components with a `client:` directive to hydrate: -->
<ReactPokemonComponent client:visible />

<!-- Mix HTML with JavaScript expressions, similar to JSX: -->
<ul>
  {myFavoritePokemon.map((data) => <li>{data.name}</li>)}
</ul>

<!-- Use a template directive to build class names from multiple strings or even objects! -->
<p class:list={["add", "dynamic", { classNames: true }]}></p>
```

## Component-based design

Components are designed to be **reusable** and **composable**. You can use components inside of other components to build more and more advanced UI. For example, a `Button` component could be used to create a `ButtonGroup` component:

```astro title="src/components/ButtonGroup.astro"
---
import Button from "./Button.astro";
---

<div>
  <Button title="Button 1" />
  <Button title="Button 2" />
  <Button title="Button 3" />
</div>
```

## Component Props

An Astro component can define and accept props. These props then become available to the component template for rendering HTML. Props are available on the `Astro.props` global in your frontmatter script.

Here is an example of a component that receives a `greeting` prop and a `name` prop. Notice that the props to be received are destructured from the global `Astro.props` object.

```astro "Astro.props"
---
// src/components/GreetingHeadline.astro
// Usage: <GreetingHeadline greeting="Howdy" name="Partner" />
const { greeting, name } = Astro.props;
---

<h2>{greeting}, {name}!</h2>
```

This component, when imported and rendered in other Astro components, layouts or pages, can pass these props as attributes:

```astro /(\w+)=\S+/
---
// src/components/GreetingCard.astro
import GreetingHeadline from "./GreetingHeadline.astro";
const name = "Astro";
---

<h1>Greeting Card</h1>
<GreetingHeadline greeting="Hi" name={name} />
<p>I hope you have a wonderful day!</p>
```

You can also define your props with TypeScript with a `Props` type interface. Astro will automatically pick up the `Props` interface in your frontmatter and give type warnings/errors. These props can also be given default values when destructured from `Astro.props`.

```astro ins={3-6}
---
// src/components/GreetingHeadline.astro
interface Props {
  name: string;
  greeting?: string;
}

const { greeting = "Hello", name } = Astro.props;
---

<h2>{greeting}, {name}!</h2>
```

Component props can be given default values to use when none are provided.

```astro ins="= "Hello"" ins="= "Astronaut""
---
// src/components/GreetingHeadline.astro
const { greeting = "Hello", name = "Astronaut" } = Astro.props;
---

<h2>{greeting}, {name}!</h2>
```

## Slots

The `<slot />` element is a placeholder for external HTML content, allowing you to inject (or "slot") child elements from other files into your component template.

By default, all child elements passed to a component will be rendered in its `<slot />`

:::note
Unlike _props_, which are attributes passed to an Astro component available for use throughout your component with `Astro.props`, _slots_ render child HTML elements where they are written.
:::

```astro "<slot />"
---
// src/components/Wrapper.astro
import Header from "./Header.astro";
import Logo from "./Logo.astro";
import Footer from "./Footer.astro";

const { title } = Astro.props;
---

<div id="content-wrapper">
  <Header />
  <Logo />
  <h1>{title}</h1>
  <slot />
  <!-- children will go here -->
  <Footer />
</div>
```

```astro {6-7}
---
// src/pages/fred.astro
import Wrapper from "../components/Wrapper.astro";
---

<Wrapper title="Fred's Page">
  <h2>All about Fred</h2>
  <p>Here is some stuff about Fred.</p>
</Wrapper>
```

This pattern is the basis of an [Astro layout component](/en/core-concepts/layouts/): an entire page of HTML content can be “wrapped” with `<SomeLayoutComponent></SomeLayoutComponent>` tags and sent to the component to render inside of common page elements defined there.

### Named Slots

An Astro component can also have named slots. This allows you to pass only HTML elements with the corresponding slot name into a slot's location.

Slots are named using the `name` attribute:

```astro /<slot .*?/>/
---
// src/components/Wrapper.astro
import Header from "./Header.astro";
import Logo from "./Logo.astro";
import Footer from "./Footer.astro";

const { title } = Astro.props;
---

<div id="content-wrapper">
  <Header />
  <slot name="after-header" />
  <!--  children with the `slot="after-header"` attribute will go here -->
  <Logo />
  <h1>{title}</h1>
  <slot />
  <!--  children without a `slot`, or with `slot="default"` attribute will go here -->
  <Footer />
  <slot name="after-footer" />
  <!--  children with the `slot="after-footer"` attribute will go here -->
</div>
```

To inject HTML content into a particular slot, use the `slot` attribute on any child element to specify the name of the slot. All other child elements of the component will be injected into the default (unnamed) `<slot />`.

```astro /slot=".*?"/
---
// src/pages/fred.astro
import Wrapper from "../components/Wrapper.astro";
---

<Wrapper title="Fred's Page">
  <img src="https://my.photo/fred.jpg" slot="after-header" />
  <h2>All about Fred</h2>
  <p>Here is some stuff about Fred.</p>
  <p slot="after-footer">Copyright 2022</p>
</Wrapper>
```

Use a `slot="my-slot"` attribute on the child element that you want to pass through to a matching `<slot name="my-slot" />` placeholder in your component.

Note that named slots must be an immediate child of the component. You cannot pass named slots through nested elements.

:::tip
Named slots can also be passed to [UI framework components](/en/core-concepts/framework-components/)!
:::

:::note
An astro slot name can not be dynamically generated, such as within a map function. If this feature is needed within UI framework components, it might be best to generate these dynamic slots within the framework itself.
:::

### Fallback Content for Slots

Slots can also render **fallback content**. When there are no matching children passed to a slot, a `<slot />` element will render its own placeholder children.

```astro {14}
---
// src/components/Wrapper.astro
import Header from "./Header.astro";
import Logo from "./Logo.astro";
import Footer from "./Footer.astro";

const { title } = Astro.props;
---

<div id="content-wrapper">
  <Header />
  <Logo />
  <h1>{title}</h1>
  <slot>
    <p>This is my fallback content, if there is no child passed into slot</p>
  </slot>
  <Footer />
</div>
```

### Transferring slots

Slots can be transferred to other components. For example, when creating nested layouts:

```astro title="src/layouts/BaseLayout.astro" {9,12}
---

---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <slot name="head" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

```astro {6,7}
// src/layouts/HomeLayout.astro

import BaseLayout from './BaseLayout.astro';
<BaseLayout>
  <slot name="head" slot="head" />
  <slot />
</BaseLayout>
```

:::note
Named slots can be transferred to another component using both the `name` and `slot` attributes on a `<slot />` tag
:::

Now, the default and `head` slots passed to `HomeLayout` will be transferred to the `BaseLayout` parent

```astro
// src/pages/index.astro

import HomeLayout from '../layouts/HomeLayout.astro';
<HomeLayout>
  <title slot="head">Astro</title>
  <h1>Astro</h1>
</HomeLayout>
```

## HTML Components

Astro supports importing and using `.html` files as components or placing these files within the `src/pages/` subdirectory as pages. You may want to use HTML components if you're reusing code from an existing site built without a framework, or if you want to ensure that your component has no dynamic features.

HTML components must contain only valid HTML, and therefore lack key Astro component features:

- They don't support frontmatter, server-side imports, or dynamic expressions.
- Any `<script>` tags are left unbundled, treated as if they had `is:inline`.
- They can only [reference assets that are in the `public/` folder](/en/core-concepts/project-structure/#public).

:::note
A [`<slot />` element](/en/core-concepts/astro-components/#slots) inside an HTML component will work as it would in an Astro component. In order to use the [HTML Web Component Slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) element instead, add `is:inline` to your `<slot>` element.
:::

## Next Steps

📚 Learn about using [UI framework components](/en/core-concepts/framework-components/) in your Astro project.

Budapest, la capital de Hungría, es una ciudad fascinante que combina a la perfección su rica historia con una vibrante vida moderna. Dividida por el majestuoso río Danubio, esta ciudad está llena de impresionantes monumentos, relajantes baños termales y una cultura única. En esta nota, exploraremos las mejores atracciones de Budapest que no te puedes perder. Desde el icónico Parlamento Húngaro hasta las históricas Termas Széchenyi, descubre todo lo que hace de Budapest un destino inolvidable.

1. El Parlamento Húngaro (150 palabras)

El Parlamento Húngaro es uno de los edificios más emblemáticos de Budapest y una visita obligada para cualquier viajero. Situado a orillas del Danubio, este majestuoso edificio neogótico es el tercero más grande del mundo de su tipo. Los visitantes pueden disfrutar de visitas guiadas que les llevan a través de sus impresionantes salas, incluyendo la Sala de la Cúpula, donde se guardan las Joyas de la Corona Húngara. La fachada iluminada del Parlamento por la noche es una vista espectacular que no te puedes perder.

2. El Bastión de los Pescadores (150 palabras)

El Bastión de los Pescadores es una de las atracciones más fotogénicas de Budapest. Ubicado en el distrito de Buda, este mirador ofrece vistas panorámicas impresionantes de la ciudad y el Danubio. Construido a finales del siglo XIX, su diseño neogótico y neorrománico parece sacado de un cuento de hadas. Pasea por sus torres y terrazas para disfrutar de las mejores vistas del Parlamento y el Puente de las Cadenas. Muy cerca se encuentra la Iglesia de Matías, otra joya arquitectónica que vale la pena visitar.

3. Las Termas Széchenyi (150 palabras)

Budapest es famosa por sus baños termales, y las Termas Széchenyi son las más grandes y populares de la ciudad. Inauguradas en 1913, estas termas se encuentran en el Parque de la Ciudad y ofrecen una experiencia de relajación inigualable. Con 15 piscinas interiores y 3 al aire libre, además de saunas y baños de vapor, las Termas Széchenyi son perfectas para relajarse y disfrutar de las propiedades curativas de sus aguas termales. Sumérgete en sus piscinas al aire libre, especialmente en invierno, para una experiencia única.

4. El Castillo de Buda (150 palabras)

El Castillo de Buda, también conocido como el Palacio Real, es una de las atracciones más importantes de Budapest. Este impresionante complejo palaciego ha sido residencia de reyes húngaros desde el siglo XIII y ahora alberga la Galería Nacional Húngara y el Museo de Historia de Budapest. Pasea por sus terrenos, admira la arquitectura barroca y disfruta de las vistas panorámicas de la ciudad desde sus terrazas. No te pierdas el cambio de guardia frente al Palacio Sándor, la residencia oficial del Presidente de Hungría, ubicada cerca del castillo.

5. La Avenida Andrássy y la Ópera Estatal (150 palabras)

La Avenida Andrássy es una de las principales arterias de Budapest y una visita obligada para los amantes de la arquitectura y las compras. Este elegante bulevar, declarado Patrimonio de la Humanidad por la UNESCO, está flanqueado por hermosos edificios de estilo neo-renacentista, tiendas de lujo, restaurantes y cafés. A lo largo de la avenida se encuentra la majestuosa Ópera Estatal de Hungría, un ejemplo impresionante de la arquitectura del siglo XIX. Aprovecha para asistir a una ópera o ballet y disfrutar de su increíble acústica y decoración interior.

Conclusión (100 palabras)

Budapest es una ciudad que sorprende y encanta a todos sus visitantes con su mezcla de historia, cultura y belleza. Ya sea que explores el imponente Parlamento Húngaro, te maravilles con las vistas desde el Bastión de los Pescadores, te relajes en las Termas Széchenyi, descubras la historia en el Castillo de Buda o pasees por la elegante Avenida Andrássy, cada experiencia en Budapest será inolvidable. ¡Empieza a planear tu viaje y descubre por ti mismo todo lo que la encantadora capital húngara tiene para ofrecer!