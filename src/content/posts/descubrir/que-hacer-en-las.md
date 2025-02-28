---
title: ¿Qué hacer en... LOS ÁNGELES?
slug: que-hacer-en-los-angeles-5
description: Desde la hostentación de Hollywood hasta las hermosas y reconocidas playas.
category:
  - Descubrir
tags:
  - Tailwind
  - Astro
  - Jamstack
    - Turismo

pubDate: 2023-09-01
cover: "/images/usa/la.jpg"
coverAlt: Los Angeles ciudad
author: Mateo
---

Los Ángeles, la segunda ciudad más grande de Estados Unidos, es conocida por su clima soleado, sus playas icónicas y su vibrante industria del entretenimiento. Con una mezcla única de cultura, historia y modernidad, LA ofrece algo para todos. En esta nota, exploraremos las mejores atracciones de Los Ángeles que no te puedes perder. Desde el glamuroso Hollywood hasta las relajantes playas de Santa Mónica, descubre todo lo que hace de esta ciudad un destino imprescindible.

1. Hollywood 

Hollywood es sinónimo de la industria del cine y una visita obligada para cualquier viajero en Los Ángeles. Comienza tu recorrido en el Paseo de la Fama, donde puedes encontrar las estrellas de tus celebridades favoritas en las aceras de Hollywood Boulevard. Visita el Teatro Chino de Grauman, famoso por sus huellas de manos y pies de estrellas del cine. Para una vista icónica, dirígete al Observatorio Griffith, desde donde puedes admirar el famoso cartel de Hollywood y disfrutar de impresionantes vistas de la ciudad. No te pierdas una visita a los estudios de cine como Universal Studios o Warner Bros., donde puedes conocer los secretos detrás de tus películas y series favoritas.

2. Santa Mónica 

Santa Mónica es conocida por sus hermosas playas y su famoso muelle, el Santa Monica Pier. Pasea por el muelle, disfruta de las atracciones del parque de diversiones Pacific Park y admira las vistas panorámicas del océano Pacífico. La playa de Santa Mónica es perfecta para tomar el sol, nadar o practicar deportes acuáticos. También puedes alquilar una bicicleta y recorrer el sendero Marvin Braude, que se extiende a lo largo de la costa. No te olvides de explorar la Third Street Promenade, una calle peatonal llena de tiendas, restaurantes y entretenimiento en vivo. Santa Mónica ofrece un ambiente relajado y vibrante, ideal para disfrutar de un día soleado en la costa.

3. El Museo Getty 

El Museo Getty es uno de los principales centros culturales de Los Ángeles. Situado en una colina en el barrio de Brentwood, este museo alberga una impresionante colección de arte europeo, desde la Edad Media hasta el siglo XX. Los visitantes pueden admirar obras de artistas como Van Gogh, Rembrandt y Cézanne. Además del arte, el Museo Getty es conocido por su impresionante arquitectura moderna diseñada por Richard Meier y sus hermosos jardines que ofrecen vistas panorámicas de la ciudad. La entrada al museo es gratuita, aunque se requiere reserva. Pasear por sus galerías y jardines es una experiencia tanto educativa como inspiradora.

4. El Paseo de la Fama de Venice Beach 

Venice Beach es uno de los lugares más eclécticos y vibrantes de Los Ángeles. Este famoso paseo marítimo es conocido por su ambiente bohemio y su diversidad cultural. Pasea por el Ocean Front Walk, donde encontrarás artistas callejeros, vendedores ambulantes y una variedad de tiendas y cafés. Venice Beach es también hogar del famoso Muscle Beach, un gimnasio al aire libre donde los culturistas entrenan bajo el sol. No te pierdas los coloridos murales y el arte callejero que adornan los edificios del área. Además, puedes alquilar una bicicleta o patines para recorrer el paseo marítimo o simplemente relajarte en la playa y disfrutar del sol y las olas.

5. El Parque Griffith y el Observatorio Griffith 

El Parque Griffith es uno de los parques urbanos más grandes de los Estados Unidos y ofrece una variedad de actividades al aire libre. El punto culminante del parque es el Observatorio Griffith, que no solo proporciona excelentes vistas de Los Ángeles y el icónico cartel de Hollywood, sino que también ofrece exposiciones educativas sobre astronomía y el espacio. El parque es ideal para hacer senderismo, con numerosas rutas que ofrecen vistas panorámicas de la ciudad y la montaña. Además, el parque alberga el zoológico de Los Ángeles, el Teatro Griego y el campo de golf Harding, ofreciendo algo para todos los gustos. Visitar el Observatorio Griffith al atardecer es especialmente recomendable para disfrutar de una puesta de sol inolvidable.

Conclusión (100 palabras)

Los Ángeles es una ciudad que combina glamour, cultura y naturaleza de manera única. Ya sea que explores el brillo de Hollywood, disfrutes del sol en Santa Mónica, te maravilles con el arte en el Museo Getty, experimentes la vibrante cultura de Venice Beach o te relajes en el Parque Griffith, cada rincón de LA tiene algo especial que ofrecer. ¡Empieza a planear tu viaje y descubre por ti mismo todo lo que la fascinante ciudad de Los Ángeles tiene para ofrecer!

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