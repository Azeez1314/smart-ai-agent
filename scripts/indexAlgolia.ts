import { config } from "dotenv";
import { algoliasearch } from "algoliasearch";
import productsJSON from "@/src/data/products.json";
import docsJSON from "@/src/data/docs.json";

// Load environment variables from .env.local
config({ path: ".env.local" });

if (!process.env.ALGOLIA_APP_ID || !process.env.ALGOLIA_ADMIN_KEY) {
  throw new Error("❌ Missing Algolia environment variables");
}

const algoliaClient = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_ADMIN_KEY
);

const PRODUCTS_INDEX = "products";
const DOCS_INDEX = "docs";

async function run() {
  console.log("🚀 Starting Algolia indexing...");

  // Ensure we actually have arrays
  const products = Array.isArray(productsJSON) ? productsJSON : (productsJSON as any).default;
  const docs = Array.isArray(docsJSON) ? docsJSON : (docsJSON as any).default;

  // Make sure every object has a unique objectID
  const productsWithID = products.map((product: any, index: number) => ({
    ...product,
    objectID: product.objectID ?? `product-${index + 1}`
  }));

  const docsWithID = docs.map((doc: any, index: number) => ({
    ...doc,
    objectID: doc.objectID ?? `doc-${index + 1}`
  }));

  console.log(`📦 Indexing ${productsWithID.length} products...`);
  console.log(`📄 Indexing ${docsWithID.length} docs...`);

  // Save objects to Algolia
  await algoliaClient.saveObjects({ indexName: PRODUCTS_INDEX, objects: productsWithID });
  await algoliaClient.saveObjects({ indexName: DOCS_INDEX, objects: docsWithID });

  console.log("✅ Indexed products + docs into Algolia successfully!");
}

run().catch(err => {
  console.error("❌ Algolia indexing failed:", err);
  process.exit(1);
});