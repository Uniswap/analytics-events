/**
 * Sections. Disambiguate low-level elements that may share a name.
 * eg a `back` button in a modal will have the same `element`,
 * but a different `section`.
 */
export enum DocsSectionName {
  BOTTOM_MENU_LINKS = 'Bottom Menu Links',
  DEVELOPER_LINKS = 'Developer Links',
  GETTING_STARTED_LINKS = 'Getting Started Links',
  QUICK_LINKS = 'Quick Links',
  WELCOME_LINKS = 'Welcome Links',
}

/**
 * Known element names for analytics purposes.
 * Use to identify low-level components given a TraceContext
 */
export enum DocsHomepageElementName {
  BUILD_ORACLE = 'Build Oracle',
  DISCORD = 'Discord',
  EMBED_SWAP_WIDGET = 'Embed Swap Widget',
  FORUM = 'Forum',
  GITHUB = 'Github',
  GRANTS = 'Grants',
  IMPLEMENT_SWAP = 'Implement Swap',
  PROVIDE_LIQUIDITY = 'Provide Liquidity',
  SDK = 'SDK',
  SDK_QUICK_START = 'Sdk Quick Start',
  SMART_CONTRACTS = 'Smart Contracts',
  SMART_CONTRACT_OVERVIEW = 'Smart Contract Overview',
  V3_CONTRACT_ADDRESS = 'V3 Contract Address',
  V3_CORE = 'V3 Core',
  V3_PERIPHERY = 'V3 Periphery',
  V3_SDK = 'V3 SDK',
  V3_WIDGETS = 'V3 Widgets',
  WHAT_IS_UNISWAP = 'What is Uniswap',
  WHITEPAPER = 'Whitepaper',
  WIDGETS = 'Widgets',
}
