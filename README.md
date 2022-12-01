# Uniswap Labs Analytics Events
[![npm](https://img.shields.io/npm/v/@uniswap/analytics-events)](https://www.npmjs.com/package/@uniswap/analytics-events)

The `@uniswap/analytics-events` package is a [npm package](https://www.npmjs.com/package/@uniswap/analytics-events) of constants used as the inputs into our [@uniswap/analytics](https://www.npmjs.com/package/@uniswap/analytics) package ([Github Link](https://github.com/Uniswap/analytics)). It is used in repos such as [interface](https://github.com/Uniswap/interface) and [docs](https://github.com/Uniswap/docs).

## Installation

Install via `npm` or `yarn`.

```bash
yarn add @uniswap/analytics-events
```

```bash
npm i --save @uniswap/analytics-events
```

## Adding New Events

To add new events, you will need to define, organize, and test them using the following rules and principles:

### Designing Events

Event, property, and property value enumerations ensure that event logging is not prone to misspelling, inconsistency, repitition, or unexpected logged values. These enumerations and events can be shared across products or be specific to a product or use case. When definining enumerations, consider that the package exports all names at the top level, so adding a specific prefix for your product or use case may be useful. If your use case are generalizable, you can define your enumeration as a primitive or reuse an existing primitive.

#### The Trace Framework

The [analytics](https://github.com/Uniswap/analytics) library implements the [Trace framework](https://slack.engineering/creating-a-react-analytics-logging-library/) to enable easy default properties and basic heiarchy of context. The following context properties are available, in order of specificity. This can be used directly for ease or logged manually for custom trigger events.

| Context     | Description                                                                                                                           |
| :---------  | :------------------------------------------------------------------------------------------------------------------------------------ |
| `page`      | The highest order context in the app. Describes the page / tab, such as Swap, Explore, Pool, Vote, etc.                               |
| `section`   | A section within the top level context. When a modal is open, section describes the part of the page from which the modal originated. |
| `modal`     | A modal, if one exists at the time of the event.                                                                                      |
| `element`   | The most specific element that triggered the event such as a specific button or link.                                                 |

No specific context is required and any or all of these trace fields may be null. Use these as it makes sense for your context, and define possible values in this repository.

### Event Naming

Events are composed of an event name, event properties, and user properties. Adding a new event will be concerned with the event name and properties.

Event names should:
- follow the Object-Action naming convention (based on this [article](https://segment.com/academy/collecting-data/naming-conventions-for-clean-data/)).
- be human readable
- capitalize each word (e.g [Proper Case](https://www.computerhope.com/jargon/p/proper-case.htm))
- start with object/product to ensure events are grouped together in Amplitude (sorted alphabetically)
- us past tense verbs (e.g. Button *Clicked*).
- *not* use acronyms or short hand (e.g. use `Transaction` over `Txn`)

Property names should:
- be `snake_case`
- be prefixed with `is_` when representing a boolean value
- end in units (unabbreviated) when needed (e.g. `time_seconds`)
- *not* use acronyms or short hand (e.g. use `Transaction` over `Txn`)

### Defining Events

Event names, property names, and property values should all be defined in Javascript using `enum`'s and follow the following conventions:
- `enum` names should be as specific as possible (e.g `DocsProtocolVersion` over `Version`).
- `enum` names should be in `PascalCase`.
- Code values of enums should be named in `UPPER_SNAKE_CASE`.
- String property values should be consistent within all possible values, opting for either `Proper Case`, `kebab-case`,  or `snake-case`. The default selection should be `Proper Case`.

An example (for illustrative purposes) of a well defined set of specific event components would look like:

```javascript
// Event names example
export enum NFTBuyEvents {
  NFT_BUY_ADDED = 'NFT Buy Bag Added',
  NFT_BUY_BAG_CHANGED = 'NFT Buy Bag Changed',
  NFT_BUY_BAG_REFUNDED = 'NFT Buy Bag Refunded',
  NFT_BUY_BAG_SIGNED = 'NFT Buy Bag Signed',
  NFT_BUY_BAG_SUCCEEDED = 'NFT Buy Bag Succeeded',
}

// Event properties example
export enum WalletEventProperties {
    WALLET_ADDRESS = 'wallet_address',
    TO_ADDRESS = 'to_address',
    TIMESTAMP_EPOCH_SECONDS = 'timestamp_epoch_seconds',
}

// Property values example
export enum DocsSentiment {
  NEGATIVE_SENTIMENT = 'Negative Sentiment',
  NEUTRAL_SENTIMENT = 'Neutral Sentiment',
  POSITIVE_SENTIMENT = 'Positive Sentiment',
}
```

### Event Organization Separation

All event names, property names, and property values should be defined using enumerations placed in the best folder for ease of reference, and can be split out into separate files when needed.

Top level files are for such as [primitives](./src/primitives.ts) contain generic data that is supposed to be reused by different applications. This data describes the events being logged, such as `EventName.MENU_CLICK`, which reflects an event on a menu. Specific event context should be captured in additional fields beyond the event name to create user-friendly hierarchy groupings.

Folders should be made by origin or product. For example, [Docs](./src/docs) contains events specific to our documentation. Folders can be grouped by product when multiple origins could use these events, such as general actions like swapping.

### Testing Events

For rapid development, a conveninece flow is availabe that allows you to do the following in a single command:
- create a tarball copy of the latest events
- copy this tarball to the specified project
- install this package in the specified project

To set this up, define the following environment variables (in your bash/zsh profile or as desired):
```bash
export ANALYTICS_IMPLEMENTING_REPO_PATH={PATH}
export ANALYTICS_IMPLEMENTING_REPO_INSTALL={npm|yarn}
```
Once set up, run the following command to run the sequence above:

```bash
yarn tarball:install
```

This flow also clears your `tmp` cache only for yarn, ensuring yarn install times are not degraded after testing your analytics changes.

#### Manually Installing

To test generate a tarball of the new test package and install it directly, using the following command:

```bash
yarn tarball
```

This will generate a `uniswap-analytics-events-dev.tgz` including your changes and a `0.0.1` package version number.

To install it in your implementing repo, copy/move the tarball to the top level of your implementing repo and then run the following commands:

```bash
# yarn
yarn cache clean
yarn add file:uniswap-analytics-dev.tgz

# npm
npm install uniswap-analytics-dev.tgz
```

### Releasing Events

Releasing a new version of the package is performed manually using the [release](/.github/workflows/release.yaml) Github workflow.

This repository uses [semantic-release](https://github.com/semantic-release/semantic-release) for the release process,
which in turn uses the [Angular commit message suggestions](https://github.com/angular/angular/blob/main/CONTRIBUTING.md) to identify the type of release.

Once a release is published, integrating your new events is as simple as updating to the latest version of the package via `npm`/`yarn`, replacing your local tarball.

## Legal notice

Uniswap Labs encourages integrators to evaluate their own regulatory obligations when integrating this package into their products, including, but not limited to, those related to economic or trade sanctions compliance.
