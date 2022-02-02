
# 2022 React Tailwind DaisyUI Craco Starter Template

> Out of frustration to installing version 3 of tailwind in React 17 I created this template for people to to produce a fast implementation ready to go out of the box. 

- Do not run ```npm audit fix```

- [x] Version 2


## Instructions

Run these commands in order to spin up a fully loaded React Tailwind & DaisyUI Application.

### 1
```$> download or clone this repo```

### 2
```$>  npm install  or npm i```

### 3
```$> npm start```


<hr/>

## Steps for initial build version of React, Tailwind and DaisyUI

> YOU DO NOT NEED TO RUN ANYTHING BELOW IT IS ALREADY DONE!


### DaisyUI steps

[DasiyUI](https://daisyui.com/)
You need [Node.js](https://nodejs.org/en/download/) and [Tailwind CSS](https://tailwindcss.com/docs/installation) installed.

1\. Install daisyUI:

```
npm i daisyui
```

2\. Then add daisyUI to your tailwind.config.js

```
module.exports = {

    plugins: [
      require('daisyui'),
    ],

  }
```

### Tailwind build steps
---------------------

Start by creating a new Create React App project if you don't have one set up already. The most common approach is to use [Create React App](https://create-react-app.dev/):

```
npx create-react-app my-project
cd my-project
```

* * * * *

[](https://v2.tailwindcss.com/docs/guides/create-react-app#setting-up-tailwind-css)Setting up Tailwind CSS
----------------------------------------------------------------------------------------------------------

*Tailwind CSS requires Node.js 12.13.0 or higher.*

### [](https://v2.tailwindcss.com/docs/guides/create-react-app#install-tailwind-via-npm)Install Tailwind via npm

Install Tailwind and its peer-dependencies using `npm`:

```
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

Create React App doesn't support PostCSS 8 yet so you need to install [the Tailwind CSS v2.0 PostCSS 7 compatibility build](https://v2.tailwindcss.com/docs/installation#post-css-7-compatibility-build) for now as we've shown above.

### [](https://v2.tailwindcss.com/docs/guides/create-react-app#install-and-configure-craco)Install and configure CRACO

Since Create React App doesn't let you override the PostCSS configuration natively, we also need to install [CRACO](https://github.com/gsoft-inc/craco) to be able to configure Tailwind:

```
npm install @craco/craco
```

Once it's installed, update your `scripts` in your `package.json` file to use `craco` instead of `react-scripts` for all scripts except `eject`:

```
  {
    // ...
    "scripts": {
-     "start": "react-scripts start",
-     "build": "react-scripts build",
-     "test": "react-scripts test",
+     "start": "craco start",
+     "build": "craco build",
+     "test": "craco test",
      "eject": "react-scripts eject"
    },
  }
```

Next, create a `craco.config.js` at the root of our project and add the `tailwindcss` and `autoprefixer` as PostCSS plugins:

```
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

If you're planning to use any other PostCSS plugins, you should read our documentation on [using PostCSS as your preprocessor](https://v2.tailwindcss.com/docs/using-with-preprocessors) for more details about the best way to order them alongside Tailwind.

### [](https://v2.tailwindcss.com/docs/guides/create-react-app#create-your-configuration-file)Create your configuration file

Next, generate your `tailwind.config.js` file:

```
npx tailwindcss-cli@latest init
```

This will create a minimal `tailwind.config.js` file at the root of your project:

```
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

Learn more about configuring Tailwind in the [configuration documentation](https://v2.tailwindcss.com/docs/configuration).

### [](https://v2.tailwindcss.com/docs/guides/create-react-app#configure-tailwind-to-remove-unused-styles-in-production)Configure Tailwind to remove unused styles in production

In your `tailwind.config.js` file, configure the `purge` option with the paths to all of your components so Tailwind can tree-shake unused styles in production builds:

```
  // tailwind.config.js
  module.exports = {
-   purge: [],
+   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
```

Read our separate guide on [optimizing for production](https://v2.tailwindcss.com/docs/optimizing-for-production) to learn more about tree-shaking unused styles for best performance.

### [](https://v2.tailwindcss.com/docs/guides/create-react-app#include-tailwind-in-your-css)Include Tailwind in your CSS

Open the `./src/index.css` file that Create React App generates for you by default and use the `@tailwind` directive to include Tailwind's `base`, `components`, and `utilities` styles, replacing the original file contents:

```
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

