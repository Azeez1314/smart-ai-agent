import { searchClient, PRODUCTS_INDEX_NAME, DOCS_INDEX_NAME } from "../algolia";

// Define a type for the input for each tool
type ProductSearchInput = { query: string; maxPrice?: number; category?: string };
type DocSearchInput = { query: string };

// Define tools object
export const tools = {
  algoliaProductSearch: async ({ query, maxPrice, category }: ProductSearchInput) => {
    const filters: string[] = [];
    if (maxPrice) filters.push(`price <= ${maxPrice}`);
    if (category) filters.push(`category:${category}`);
    
    const response = await searchClient.search({
      requests: [
        {
          indexName: PRODUCTS_INDEX_NAME,
          query,
          filters: filters.join(" AND "),
          hitsPerPage: 4,
        },
      ],
    });
    
    // Access the hits from the first result
    const firstResult = response.results[0];
    return 'hits' in firstResult ? firstResult.hits : [];
  },
  
  algoliaDocSearch: async ({ query }: DocSearchInput) => {
    const response = await searchClient.search({
      requests: [
        {
          indexName: DOCS_INDEX_NAME,
          query,
          hitsPerPage: 3,
        },
      ],
    });
    
    // Access the hits from the first result
    const firstResult = response.results[0];
    return 'hits' in firstResult ? firstResult.hits : [];
  },
};

// Helper function to safely call a tool
export const callTool = async (toolName: keyof typeof tools, input: any) => {
  const toolFn = tools[toolName];
  if (!toolFn) {
    throw new Error(`Tool "${toolName}" not found`);
  }
  return await toolFn(input);
};