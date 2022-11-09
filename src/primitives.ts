/**
 * Event names that can occur in the applications.
 *
 * Subject to change as new features are added and new events are defined
 * and logged.
 */
export enum EventName {
  APPROVE_TOKEN_TXN_SUBMITTED = 'Approve Token Transaction Submitted',
  APP_LOADED = 'Application Loaded',
  CONNECT_WALLET_BUTTON_CLICKED = 'Connect Wallet Button Clicked',
  EXPLORE_BANNER_CLICKED = 'Explore Banner Clicked',
  EXPLORE_SEARCH_SELECTED = 'Explore Search Selected',
  EXPLORE_TOKEN_ROW_CLICKED = 'Explore Token Row Clicked',
  GITHUB_V3_CONTRACT_ADDRESS_CLICKED = 'Github V3 Contract Address Clicked',
  GITHUB_V3_CORE_CLICKED = 'Github V3 Core Clicked',
  GITHUB_V3_PERIPHERY_CLICKED = 'Github V3 Periphery Clicked',
  GITHUB_V3_SDK_CLICKED = 'Github V3 SDK Clicked',
  GITHUB_V3_WIDGETS_CLICKED = 'Github V3 Widgets Clicked',
  GUIDE_BUILD_ORACLE_CLICKED = 'Guide Build Oracle Clicked',
  GUIDE_EMBED_SWAP_WIDGET_CLICKED = 'Guide Embed Swap Widget Clicked',
  GUIDE_IMPLEMENT_SWAP_CLICKED = 'Guide Implement Swap Clicked',
  GUIDE_PROVIDE_LIQUIDITY_CLICKED = 'Guide Provide Liquidity Clicked',
  GUIDE_SDK_QUICK_START_CLICKED = 'Guide SDK Quick Start Clicked',
  MENU_CLICK = 'Menu Click',
  NAVBAR_CLICK = 'Navbar Click',
  NAVBAR_RESULT_SELECTED = 'Navbar Result Selected',
  NAVBAR_SEARCH_EXITED = 'Navbar Search Exited',
  NAVBAR_SEARCH_SELECTED = 'Navbar Search Selected',
  NFT_ACTIVITY_SELECTED = 'NFT Activity Selected',
  NFT_BUY_ADDED = 'NFT Buy Bag Added',
  NFT_BUY_BAG_CHANGED = 'NFT Buy Bag Changed',
  NFT_BUY_BAG_PAY = 'NFT Buy Bag Pay Clicked',
  NFT_BUY_BAG_REFUNDED = 'NFT Buy Bag Refunded',
  NFT_BUY_BAG_SIGNED = 'NFT Buy Bag Signed',
  NFT_BUY_BAG_SUCCEEDED = 'NFT Buy Bag Succeeded',
  NFT_FILTER_OPENED = 'NFT Collection Filter Opened',
  NFT_FILTER_SELECTED = 'NFT Filter Selected',
  NFT_TRENDING_ROW_SELECTED = 'Trending Row Selected',
  PAGE_CLICK = 'Page Click',
  PAGE_VIEWED = 'Page Viewed',
  QUICK_LINK_SDK_CLICKED = 'Quick Link SDK Clicked',
  QUICK_LINK_SMART_CONTRACTS_CLICKED = 'Quick Link Smart Contracts Clicked',
  QUICK_LINK_WHITEPAPER_CLICKED = 'Quick Link Whitepaper Clicked',
  QUICK_LINK_WIDGETS_CLICKED = 'Quick Link Widgets Clicked',
  SEARCH_BAR_CLICKED = 'Search Bar Clicked',
  SMART_CONTRACT_OVERVIEW_CLICKED = 'Smart Contract Overview Clicked',
  SWAP_AUTOROUTER_VISUALIZATION_EXPANDED = 'Swap Autorouter Visualization Expanded',
  SWAP_DETAILS_EXPANDED = 'Swap Details Expanded',
  SWAP_MAX_TOKEN_AMOUNT_SELECTED = 'Swap Max Token Amount Selected',
  SWAP_PRICE_UPDATE_ACKNOWLEDGED = 'Swap Price Update Acknowledged',
  SWAP_QUOTE_RECEIVED = 'Swap Quote Received',
  SWAP_SIGNED = 'Swap Signed',
  SWAP_SUBMITTED_BUTTON_CLICKED = 'Swap Submit Button Clicked',
  SWAP_TOKENS_REVERSED = 'Swap Tokens Reversed',
  SWAP_TRANSACTION_COMPLETED = 'Swap Transaction Completed',
  TOKEN_IMPORTED = 'Token Imported',
  TOKEN_SELECTED = 'Token Selected',
  TOKEN_SELECTOR_OPENED = 'Token Selector Opened',
  V3_SDK_CLICKED = 'V3 SDK Clicked',
  WALLET_CONNECT_TXN_COMPLETED = 'Wallet Connect Transaction Completed',
  WALLET_SELECTED = 'Wallet Selected',
  WEB_VITALS = 'Web Vitals',
  WHAT_IS_UNISWAP_CLICKED = 'What is Uniswap Clicked',
  WRAP_TOKEN_TXN_INVALIDATED = 'Wrap Token Transaction Invalidated',
  WRAP_TOKEN_TXN_SUBMITTED = 'Wrap Token Transaction Submitted',
}

/**
 * Known events that trigger callbacks.
 * @example
 *  <TraceEvent events={[BrowserEvent.onClick]} element={name}>
 */
export enum BrowserEvent {
  onClick = 'onClick',
  onFocus = 'onFocus',
  onKeyPress = 'onKeyPress',
  onSelect = 'onSelect',
}

export enum Browser {
  BRAVE = 'Brave',
  CHROME = 'Google Chrome or Chromium',
  EDGE = 'Microsoft Edge (Legacy)',
  EDGE_CHROMIUM = 'Microsoft Edge (Chromium)',
  FIREFOX = 'Mozilla Firefox',
  INTERNET_EXPLORER = 'Microsoft Internet Explorer',
  OPERA = 'Opera',
  SAFARI = 'Apple Safari',
  SAMSUNG = 'Samsung Internet',
  UNKNOWN = 'unknown',
}

export enum CustomUserProperties {
  ALL_WALLET_ADDRESSES_CONNECTED = 'all_wallet_addresses_connected',
  ALL_WALLET_CHAIN_IDS = 'all_wallet_chain_ids',
  BROWSER = 'browser',
  DARK_MODE = 'is_dark_mode',
  EXPERT_MODE = 'is_expert_mode',
  SCREEN_RESOLUTION_HEIGHT = 'screen_resolution_height',
  SCREEN_RESOLUTION_WIDTH = 'screen_resolution_width',
  USER_AGENT = 'user_agent',
  WALLET_ADDRESS = 'wallet_address',
  WALLET_TYPE = 'wallet_type',
}
