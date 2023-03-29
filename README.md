# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![app screenshot](./src/images/screenshot.jpg)

### Links

- Solution URL: [Github repository](https://your-solution-url.com)
- Live Site URL: [Base apparel coming soon](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [Vite](https://vitejs.dev/) - Frontend Tooling
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types

### What I learned

My logic told me that adding a `submit listener` to the form was enough to trigger the form validation function, but I was getting an `undefined` value for the `input` field. It was until I put the `event listener` inside a `window onload event` that I started to get the right `email input` value.

I'm not sure why the `event listener` is not enough to read the `input` value.

This is my code to validate that the `input` field is not empty:

```js
window.onload = () => {
  form.addEventListener("submit", validarFormulario);
};

function validarFormulario(e: Event) {
  e.preventDefault();

  const correo = formInput.value;

  if (correo === "") {
    alerta("Please enter your email", "error");
    return;
  }

  validarCorreo(correo);
}
```

### Continued development

There's still to much to learn about JavaScript. Keep practicing with Frontend Mentor challenges definitely is a good decision.

### Useful resources

- [Deploying Vite App to GitHub Pages](https://dev.to/shashannkbawa/deploying-vite-app-to-github-pages-3ane) - This helped me to deploy a _Vite app_ to **Github Pages**. Setting to deploy from the main branch wasn't enough.
- [TailwindCSS Docs](https://tailwindcss.com/docs/installation) - To install TailwindCSS and get the corresponding utility classes.

## Author

- Website - [Alfonso](https://github.com/ameneses67)
- Frontend Mentor - [@ameneses67](https://www.frontendmentor.io/profile/ameneses67)
- Twitter - [@alfonso_meneses](https://www.twitter.com/alfonso_meneses)
