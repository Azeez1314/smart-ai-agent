# 🚀 Quick Start Guide

## Get Your App Running in 5 Minutes!

### Step 1: Get API Keys

**Algolia (Free):**
1. Go to https://www.algolia.com/users/sign_up
2. Create account → Create application
3. Go to Settings → API Keys
4. Copy: Application ID, Admin API Key, Search-Only API Key

**Google Gemini (Free):**
1. Go to https://ai.google.dev/
2. Click "Get API key in Google AI Studio"
3. Create new API key
4. Copy the key

### Step 2: Setup Environment

1. Open the project folder
2. Find `.env.local` file
3. Replace the placeholder values with your real API keys:

```env
ALGOLIA_APP_ID=YOUR_ACTUAL_APP_ID
ALGOLIA_ADMIN_KEY=YOUR_ACTUAL_ADMIN_KEY
ALGOLIA_SEARCH_KEY=YOUR_ACTUAL_SEARCH_KEY
GEMINI_API_KEY=YOUR_ACTUAL_GEMINI_KEY
```

### Step 3: Install & Run

Open terminal in the project folder and run:

```bash
# Install dependencies
npm install

# Index sample data to Algolia
npm run index

# Start the app
npm run dev
```

### Step 4: Test It!

Open http://localhost:3000 and try these:

- "Show me electronics under $100"
- "What's your return policy?"
- "I need wireless headphones"

## Troubleshooting

**Problem: "Missing environment variables"**
- Solution: Make sure `.env.local` has all 4 API keys

**Problem: "Tool execution error"**
- Solution: Run `npm run index` again to index data

**Problem: Port 3000 already in use**
- Solution: Run `npm run dev -- -p 3001` to use port 3001

## Next Steps

1. Customize products in `src/data/products.json`
2. Add your own documentation in `src/data/docs.json`
3. Modify styles in `src/components/`
4. Deploy to Vercel!

Need help? Check the main README.md for detailed docs.