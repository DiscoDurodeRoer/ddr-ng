# DDR-NG

![npm version](https://img.shields.io/badge/npm-1-blue)

[![Discord](https://img.shields.io/badge/discord-ddr--ng-5865F2?logo=discord&logoColor=white)](https://discord.gg/Drgv4JRqxu)

[![DDR-NG Logo](https://ddr-ng.com/img/logo.png)](https://ddr-ng.com)

# 📦 Versions

`ddr-ng` always matches Angular's **major** version.  

|ddr-ng | Compatibility   |
|-------|-----------------|
|22.x.x | ✅ Full support |
|21.x.x | ✅ Full support |
|20.x.x | ✅ Full support |
|19.x.x | ✅ Full support |
|18.x.x | ✅ Full support |

# 🚀 Getting Started with ddr-ng

## 📌 What is the ddr component library?
It is a set of reusable components, services, pipes and directives for our projects.

## ⚙️ How to install ddr-ng
To install the ddr library, run the following command:

```bash
npm install ddr-ng@22.0.1
```

## 🛠️ What should we include in the angular.json file?

We will add the following in **styles**:

```json
"styles": [
  "node_modules/ddr-ng/resources/themes/ddr-blue.scss",
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/bootstrap-icons/font/bootstrap-icons.min.css",
  "src/styles.scss"
]
```

If you want to have all available themes, you can add them all in styles

```json
"styles": [
  "node_modules/ddr-ng/resources/themes/ddr-blue.scss",
  "node_modules/ddr-ng/resources/themes/ddr-dark.scss",
  "node_modules/ddr-ng/resources/themes/ddr-purple.scss",
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/bootstrap-icons/font/bootstrap-icons.css",
  "src/styles.scss"
]
```

## ⚙️ Provider Ddr

To configure the library, you must add the "provideDdr" provider to the providers in app.config, specifying the theme to use and the i18n configuration (optional).

```ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideDdr } from 'ddr-ng/providers/config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideDdr({
      theme: {
        name: 'ddr-blue'
      },
      translate: {
        path: `/i18n/`,
        language: 'en'
      }
    })
  ]
}; 
```

Now you can use everything exported from the library, check the [showcases](https://ddr-ng.com) for examples.

## 🔗 Additional Resources

- 🎨 [Themes](https://ddr-ng.com/themes) – Learn how to change the theme dynamically.
- 🌐 [Translate](https://ddr-ng.com/translate) – Learn how to add translations and use i18n features.

## 🌐 Community
- 💬 Join our [Discord](https://discord.gg/Drgv4JRqxu) to ask questions, share ideas, or get support.
- ⭐ Don’t forget to [star us on GitHub](https://github.com/ddr-ng) if you like this project.

## ⚖️ License
MIT © Discoduroderoer