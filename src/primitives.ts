/**
 * Event names that can occur in the application.
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
  FOOTER_CLICKED = 'Footer Clicked',
  MENU_CLICKED = 'Menu Clicked',
  NAVBAR_CLICKED = 'Navbar Clicked',
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
  NFT_LISTING_COMPLETED = 'NFT Listing Success',
  NFT_LISTING_SIGNED = 'NFT Listing Signed',
  NFT_SELL_ITEM_ADDED = 'NFT Sell Item Added',
  NFT_SELL_SELECTED = 'NFT Sell Selected',
  NFT_SELL_START_LISTING = 'NFT Sell Start Listing',
  NFT_TRENDING_ROW_SELECTED = 'Trending Row Selected',
  PAGE_CLICKED = 'Page Clicked',
  PAGE_VIEWED = 'Page Viewed',
  SEARCH_BAR_CLICKED = 'Search Bar Clicked',
  SENTIMENT_CLICKED = 'Sentiment Clicked',
  SWAP_AUTOROUTER_VISUALIZATION_EXPANDED = 'Swap Autorouter Visualization Expanded',
  SWAP_DETAILS_EXPANDED = 'Swap Details Expanded',
  SWAP_MAX_TOKEN_AMOUNT_SELECTED = 'Swap Max Token Amount Selected',
  SWAP_MODIFIED_IN_WALLET = 'Swap Modified in Wallet',
  SWAP_PRICE_UPDATE_ACKNOWLEDGED = 'Swap Price Update Acknowledged',
  SWAP_QUOTE_RECEIVED = 'Swap Quote Received',
  SWAP_SIGNED = 'Swap Signed',
  SWAP_SUBMITTED_BUTTON_CLICKED = 'Swap Submit Button Clicked',
  SWAP_TOKENS_REVERSED = 'Swap Tokens Reversed',
  SWAP_TRANSACTION_COMPLETED = 'Swap Transaction Completed',
  TOKEN_IMPORTED = 'Token Imported',
  TOKEN_SELECTED = 'Token Selected',
  TOKEN_SELECTOR_OPENED = 'Token Selector Opened',
  WALLET_CONNECT_TXN_COMPLETED = 'Wallet Connect Transaction Completed',
  WALLET_SELECTED = 'Wallet Selected',
  WEB_VITALS = 'Web Vitals',
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

// Get browser being used, code comes from: https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator.
export function getBrowser(): string {
  const sUsrAg = navigator.userAgent
  // The order matters here, and this may report false positives for unlisted browsers.
  if (sUsrAg.indexOf('Firefox') > -1) {
    return Browser.FIREFOX
    // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
  } else if (sUsrAg.indexOf('SamsungBrowser') > -1) {
    return Browser.SAMSUNG
    // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
  } else if (sUsrAg.indexOf('Opera') > -1 || sUsrAg.indexOf('OPR') > -1) {
    return Browser.OPERA
    // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
  } else if (sUsrAg.indexOf('Trident') > -1) {
    return Browser.INTERNET_EXPLORER
  } else if (sUsrAg.indexOf('Brave') > -1) {
    return Browser.BRAVE
    // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
  } else if (sUsrAg.indexOf('Edge') > -1) {
    return Browser.EDGE
    // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
  } else if (sUsrAg.indexOf('Edg') > -1) {
    return Browser.EDGE_CHROMIUM
    // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64
  } else if (sUsrAg.indexOf('Chrome') > -1) {
    return Browser.CHROME
    // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
  } else if (sUsrAg.indexOf('Safari') > -1) {
    return Browser.SAFARI
    // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
  } else {
    return Browser.UNKNOWN
  }
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
