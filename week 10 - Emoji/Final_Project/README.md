<img src="./public/info-page-issac.PNG" title="App">
<br/>
<a href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=es" target="_blank" rel="noreferrer">
 <img src="https://geekflare.com/wp-content/uploads/2019/01/lighthouse-google.png" title="Google Lighthouse">
</a>

# React-PWA⚛️ width Vite JS⚡️ System Quality Certificate! 

## Synopsis

This project my modern web application.
It's a combination of the process of making modern React applications.
The system has a system quality certificate, using Google Lighthouse.

Lighthouse is an open-source, automated tool for improving the performance, quality, and correctness of your web apps. 

## Motivation

The project has a router, a UI framework, store integration, theming, error handling, base file/folder structure, and many more.

## Features

- ✅ [Vite](#vite)
- ✅ [React](#react)
  - `v18` 🔥
- ✅ [TypeScript](#typescript)
- ✅ [Router](#router)
  - `React Router v6`
- ✅ [UI-framework](#ui-framework)
  - `MUI v5`
- ✅ [Base file/folder structure](#base-filefolder-structure)
- ✅ [PWA](#pwa)
- ✅ [Error Handling](#error-handling)
- ✅ [Pages](#pages)
- ✅ [Dev tools](#dev-tools)
  - ✅ localhost

#### Vite

[Vite](https://vitejs.dev/) is a blazingly fast build tool based on [native ES modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), [rollup](https://rollupjs.org/guide/en/), and [esbuild](https://esbuild.github.io/). `React-PWA` v1 was based on [CRA](https://reactjs.org/docs/create-a-new-react-app.html). We still love `CRA` and really think it's a great tool, but `Vite` provides a much better developer experience and it's unconditionally faster (maybe, we will also create a `CRA` version of `React-PWA` v2 in near future).

#### React

The latest version (v18) is used here. All dependencies support [React](https://reactjs.org/) v18 and the `v2` is refactored according to the latest changes and requirements of `React` v18.

#### TypeScript

For those who are not familiar with `TypeScript` - don't worry, you will love it, as we all did. `TypeScript` is a superset of `JavaScript`; it should be very easy to work with if you know `JavaScript`.

#### Router

[React Router v6](https://reactrouter.com/) is used here. You can find routing in the [src/routes](./src/routes/) folder.

#### UI-framework

[MUI](https://mui.com/) v5 is used here. `MUI` is a fully-loaded component library, super customizable, and easy to use.

#### Base file/folder structure

Here how the base file/folder structure looks like:

TBD: more information about the file/folder structure will be added soon.

#### PWA

Out of the box, it's a `Progressive Web Application`. It can be installed on mobile and desktop devices 🙂, it can work offline, and many more. Check more about PWAs [here](https://web.dev/progressive-web-apps/)

Your users will also be informed about the new version of your app:


#### Error Handling

Nobody likes white screens and crashes without any notes. In [src/error-handling](./src/error-handling) you can find the error handling implementation. Here you can find `withErrorHandler` high order component. You can wrap any component by this HOC and it will catch all errors and show a default or your custom fallback. Currently, the main APP component is wrapped by `withErrorHandler` HOC.

#### Pages

From a layout point of view the application consists of 3 main parts:

- Header
- Pages
- Footer

The last one is a router-based switcher. All routes are defined in [src/routes](./src/routes/index.ts). By default, pages are being loaded asynchronously via [asyncComponentLoader](src/utils/loader/loader.tsx). You can use it to asynchronously load any `React` component you want. It uses `React.Suspense` and `React.lazy` with some magic 🧙‍♂️

# Dev tools

  It's a simple way to run your application on localhost.

  Just run:

  ```bash
  npm run https-preview # or yarn https-preview
  ```

  after:

  ```bash
  npm run build # or yarn build
  ```

  and check `https://localhost` in your browser.

## [Live]()

<div>
 <img src="./public/main-page-issac.png" width="280" title="Dark demo">
</div>

## License

[MIT](./LICENSE)
