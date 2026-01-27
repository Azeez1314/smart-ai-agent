import { algoliasearch } from "algoliasearch";

if (!process.env.ALGOLIA_APP_ID || !process.env.ALGOLIA_SEARCH_KEY) {
  throw new Error("Missing Algolia environment variables");
}

export const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_SEARCH_KEY
);

// In v5, you don't need to init indexes - just use the client directly
export const PRODUCTS_INDEX_NAME = "products";
export const DOCS_INDEX_NAME = "docs";