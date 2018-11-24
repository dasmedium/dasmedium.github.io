---
title: Tetoka Api Roadmap
date: 2018-09-09 05:11:16
tags:
---

Tetoka app will have its backend re-written and hosted as a microservice. The roadmap for the development of this app poses a few challenges.

1. Decoupling the original backend - #DONE
2. Rethinking Async process within the graphQL scope
3. Making the graphQL endpoint our Network Interface on the frontend app.
4. Wrapping the appollo provider around a Redux provider to be able to use both state from Apollo and from our defined store. This will help in implementing Finite State Automata on our UI.
5. Define our finite states.
6. Create our state machine.
7. Refactor current MongoDb models into graphQL schemas for all possible relationships.
8. Rewrite some database services for Passport and GraphQL integration.

This will set the base functionality of a social network application. A very tiny and very simple version of facebook.
Some custom queries and mutation related to transaction activity will need to be written into this api, although the payment network service will be written and hosted on the blockchain.
