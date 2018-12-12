---
title: projects
date: 2018-11-24 02:01:51
---

# Das Medium core website

This is Das Medium's core website. Currently it feeds content from our legacy Wordpress site.
It's based on Create-React-App TypeScript.

It features type-safe actions for proper Redux implementation with Typescript. I organized application state blending the [Duck Pattern](https://github.com/erikras/ducks-modular-redux) and [Piotrek Witek's Style](https://github.com/piotrwitek).

## Libraries

- [Redux-Observable](https://redux-obserable.js.org)
- [RxJS](https://rxjs-dev.firebaseapp.com)
- [Wordpress Rest Api](https://wp.dasmedium.co/wp-json/wp/v2/posts/)
- [Bootstrap](https://getbootstrap.com)
- [Type-safe Actions](https://github.com/piotrwitek/typesafe-actions)
- And more...

There are few typings that still need to be worked out, (ie. Epics, RootActions, RootState as arguments).

This website will always be a work in progress and will always feed its main content from Wordpress, because we stay true to the roots.

Feel free to check it out on [here](https://dasmedium.co)
Repository [here](https://github.com/dasmedium/dasmediumReactWebsite)

# Tetoka Education Social Network Version 1


This project is the first version of the Tetoka Social Network client application.
A demo of this app can be found [here](https://bstrapp.tetoka.co/).
Feel free to create an account and browse around.
Current work in progress to restyle this app from its current bootstrap version to
a newer interface based on [Material-UI](https://material-ui.com/) is located in [this repo](https://github.com/dasmedium/dmsocial). A demo of this application is [live](https://app.tetoka.co) as well. All current development and new features will be located there.

Version 1 is a nodejs application using recently decoupled/dockerized Express backend and MongoDB.
Redux handles application state on the front-end.

Tetoka aims to bridge the gap between cryptographic payment networks and incentivised learning. This application is not yet a payment network or crypto investment platform.

Repository [here](https://github.com/dasmedium/tetokabootstrapapp)

# Tetoka Education Social Network Version 2

This project is the front-end Tetoka Social Network client application.
The current live prototype of this app is hosted [here](https://app.tetoka.co).
Feel free to create an account and browse around.
The focus of this repo is to develop a new user interface based on [Material-UI](https://material-ui.com/) instead and replace the bootstrap styling of version 1.

This is a nodejs application consuming an Express api. MongoDB for storage and Redux handles application state.

Repository [here](https://github.com/dasmedium/dmsocial)

## Planned features:

- Material UI styling _in-progress_
- [GraphQL integration layer](https://github.com/dasmedium/tetokaAPI)
- Solidity Smart Contracts

Tetoka aims to bridge the gap between cryptographic payment networks and incentivised learning. This application is not yet a payment network or crypto investment platform.

***
# Demos and Coding Challenge POC's
The following are repositories of demos from coding challenges or courses either for proof of concept implementation or to test the implementation of a given library or tech stack.

# Simple NodeJs Task List Application

This is a Task manager app built on **Nodejs**, using **Express** framework and
**Angular 2**. It was built following a tutorial by [Traversy Media](https://traversymedia.com).
A running example can be found [here](https://tasklist.dasmedium.co)

## Dependencies

1. **MLab** - Remote MongoDb implementation
2. **Express** - Routing, Api, Http etc.
3. **Angular 2** - Tasklist Component and Task Service

- [Angular 2 Documentation](https://web.archive.org/web/20161011223739/https://angular.io/docs/ts/latest/quickstart.html)

4. **Bootstrap** - Bower
5. **MongoJs** - ORM to interact with MongoDB
6. **NodeJS**
7. **NPM dependencies:**

- Body Parser(form handling)
- Ejs (templating)
- Mongojs
- Nodemon

[Repository](https://github.com/dasmedium/nodeapp)
