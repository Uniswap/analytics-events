/**
 * Known pages in the app. Highest order context.
 */
export enum PageName {
  ABOUT_PAGE = 'about-page',
  LANDING_PAGE = 'landing-page',
  NFT_COLLECTION_PAGE = 'nft-collection-page',
  NFT_DETAILS_PAGE = 'nft-details-page',
  NFT_EXPLORE_PAGE = 'nft-explore-page',
  NFT_PROFILE_PAGE = 'nft-profile-page',
  POOL_PAGE = 'pool-page',
  SWAP_PAGE = 'swap-page',
  TOKENS_PAGE = 'tokens-page',
  TOKEN_DETAILS_PAGE = 'token-details',
  VOTE_PAGE = 'vote-page',
}

/**
 * Sections. Disambiguates low-level elements that may share a name.
 * eg a `back` button in a modal will have the same `element`,
 * but a different `section`.
 */
export enum SectionName {
  CURRENCY_INPUT_PANEL = 'swap-currency-input',
  CURRENCY_OUTPUT_PANEL = 'swap-currency-output',
  NAVBAR_SEARCH = 'Navbar Search',
  WIDGET = 'widget',
}

/** Known modals for analytics purposes. */
export enum ModalName {
  CONFIRM_SWAP = 'confirm-swap-modal',
  NFT_LISTING = 'nft-listing-modal',
  NFT_TX_COMPLETE = 'nft-tx-complete-modal',
  TOKEN_SELECTOR = 'token-selector-modal',
}

/**
 * Known element names for analytics purposes.
 * Use to identify low-level components given a TraceContext
 */
export enum ElementName {
  ABOUT_PAGE_NFTS_CARD = 'about-page-nfts-card',
  ABOUT_PAGE_SWAP_CARD = 'about-page-swap-card',
  AUTOROUTER_VISUALIZATION_ROW = 'expandable-autorouter-visualization-row',
  BLOG_LINK = 'blog-link',
  CAREERS_LINK = 'careers-link',
  COMMON_BASES_CURRENCY_BUTTON = 'common-bases-currency-button',
  CONFIRM_SWAP_BUTTON = 'confirm-swap-or-send',
  CONNECT_WALLET_BUTTON = 'connect-wallet-button',
  CONTINUE_BUTTON = 'continue-button',
  DOCS_LINK = 'docs-link',
  EXPLORE_BANNER = 'explore-banner',
  EXPLORE_SEARCH_INPUT = 'explore_search_input',
  IMPORT_TOKEN_BUTTON = 'import-token-button',
  LANDING_PAGE_SWAP_ELEMENT = 'landing-page-swap-element',
  LEARN_MORE_LINK = 'learn-more-link',
  LEGACY_LANDING_PAGE_LINK = 'legacy-landing-page-link',
  MAX_TOKEN_AMOUNT_BUTTON = 'max-token-amount-button',
  NAVBAR_SEARCH_INPUT = 'navbar-search-input',
  NFT_ACTIVITY_TAB = 'nft-activity-tab',
  NFT_BUY_BAG_PAY_BUTTON = 'nft-buy-bag-pay-button',
  NFT_FILTER_BUTTON = 'nft-filter-button',
  NFT_FILTER_OPTION = 'nft-filter-option',
  NFT_TRENDING_ROW = 'nft-trending-row',
  PRICE_UPDATE_ACCEPT_BUTTON = 'price-update-accept-button',
  SUPPORT_LINK = 'support-link',
  SWAP_BUTTON = 'swap-button',
  SWAP_DETAILS_DROPDOWN = 'swap-details-dropdown',
  SWAP_TOKENS_REVERSE_ARROW_BUTTON = 'swap-tokens-reverse-arrow-button',
  TOKEN_SELECTOR_ROW = 'token-selector-row',
  TWITTER_LINK = 'twitter-link',
  WALLET_TYPE_OPTION = 'wallet-type-option',
}
