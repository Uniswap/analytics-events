# Uniswap Labs Analytics Events
[![npm](https://img.shields.io/npm/v/@uniswap/analytics-events)](https://www.npmjs.com/package/@uniswap/analytics-events)

The `@uniswap/analytics-events` package is a [npm package](https://www.npmjs.com/package/@uniswap/analytics-events) of constants used as the inputs into our [@uniswap/analytics](https://www.npmjs.com/package/@uniswap/analytics) package.

## Installation

Install via `npm` or `yarn`.

```js
yarn add @uniswap/analytics-events
```
```js
npm i --save @uniswap/analytics-events
```

## Release

Releasing is performed manually using the [release](/.github/workflows/release.yaml) Github workflow.

This repository uses [semantic-release](https://github.com/semantic-release/semantic-release) for the release process,
which in turn uses the [Angular commit message suggestions](https://github.com/angular/angular/blob/main/CONTRIBUTING.md) to identify the type of release.

## Documentation

The top level folders such as [Interface](./src/interface) contain application specific data. This data gives context to the event being logged. Add a new folder for every new application being added.

The top level files, such as [primitives](./src//primitives.ts) contain generic data that is supposed to be reused by different applications. This data describes the events being logged, such as `EventName.MENU_CLICK`, which reflects an event on a menu.

## Example Apps

This package is used into a few of Uniswap Labs repos:

- [Interface](https://github.com/Uniswap/widgets-demo/tree/nextjs)
- [Docs](https://github.com/Uniswap/docs)




## Legal notice

Uniswap Labs encourages integrators to evaluate their own regulatory obligations when integrating this package into their products, including, but not limited to, those related to economic or trade sanctions compliance.
