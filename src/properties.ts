export enum WalletConnectionResult {
  FAILED = 'Failed',
  SUCCEEDED = 'Succeeded',
}

export enum SwapPriceUpdateUserResponse {
  ACCEPTED = 'Accepted',
  REJECTED = 'Rejected',
}

/** Known navbar search result types */
export enum NavBarSearchTypes {
  COLLECTION_SUGGESTION = 'collection-suggestion',
  COLLECTION_TRENDING = 'collection-trending',
  RECENT_SEARCH = 'recent',
  TOKEN_SUGGESTION = 'token-suggestion',
  TOKEN_TRENDING = 'token-trending',
}

/**
 * Known Filter Types for NFTs
 */
export enum FilterTypes {
  MARKETPLACE = 'Marketplace',
  PRICE_RANGE = 'Price Range',
  TRAIT = 'Trait',
}
