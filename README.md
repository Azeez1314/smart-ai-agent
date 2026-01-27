# Smart AI Shopping Agent

A production-ready AI shopping assistant powered by Google Gemini and Algolia Search. This application demonstrates an agentic workflow where an LLM decides when to use tools to search products and documentation.

## Features

- 🤖 **AI-Powered Agent**: Uses Google Gemini to understand user intent and decide when to search
- 🔍 **Intelligent Search**: Integrates Algolia for fast product and documentation search
- 💬 **Conversational Memory**: Maintains context across the conversation
- 🎨 **Modern UI**: Beautiful, responsive chat interface built with Next.js and Tailwind CSS
- 📦 **Product Display**: Visual product cards with images and details
- 🛠️ **Tool Calling**: LLM autonomously decides when to use search tools

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **AI**: Google Gemini 2.0 Flash
- **Search**: Algolia
- **Language**: TypeScript

## Project Structure

```
smart-ai-agent/
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── api/agent/         # API endpoints
│       └── route.ts       # Agent API handler
│
├── components/             # React components
│   ├── AgentChat.tsx      # Main chat interface
│   ├── MessageBubble.tsx  # Chat message component
│   └── ProductCard.tsx    # Product display card
│
├── lib/                   # Core logic
│   ├── agent/            # Agent logic
│   │   ├── runAgent.ts   # Main agent orchestration
│   │   ├── prompts.ts    # System prompts
│   │   ├── tools.ts      # Tool definitions
│   │   └── memory.ts     # Conversation memory
│   ├── algolia.ts        # Algolia client
│   ├── gemini.ts         # Gemini client
│   └── logger.ts         # Logging utility
│
├── scripts/
│   └── indexAlgolia.ts   # Data indexing script
│
└── data/                 # Sample data
    ├── products.json     # Product catalog
    └── docs.json         # Documentation
```

## Setup Instructions

### 1. Prerequisites

- Node.js 18+ installed
- Algolia account (free tier available)
- Google AI Studio account (for Gemini API key)

### 2. Get API Keys

**Algolia:**
1. Sign up at [algolia.com](https://www.algolia.com/)
2. Create a new application
3. Get your App ID, Admin API Key, and Search API Key from the API Keys section

**Google Gemini:**
1. Go to [ai.google.dev](https://ai.google.dev/)
2. Click "Get API key in Google AI Studio"
3. Create a new API key

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Algolia Configuration
ALGOLIA_APP_ID=your_algolia_app_id_here
ALGOLIA_ADMIN_KEY=your_algolia_admin_key_here
ALGOLIA_SEARCH_KEY=your_algolia_search_key_here

# Google Gemini API
GEMINI_API_KEY=your_gemini_api_key_here
```

### 5. Index Sample Data to Algolia

```bash
npm run index
```

You should see:
```
🚀 Starting Algolia indexing...
📦 Indexing 10 products...
📄 Indexing 10 docs...
✅ Indexed products + docs into Algolia successfully!
```

### 6. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How It Works

### Agent Workflow

1. **User Input**: User sends a message through the chat interface
2. **Intent Analysis**: Gemini LLM analyzes the message and decides if it needs to use a tool
3. **Tool Execution**: If needed, the agent calls Algolia search tools
4. **Response Generation**: LLM generates a natural response based on search results
5. **Memory Update**: Conversation history is maintained for context

### Available Tools

- **algoliaProductSearch**: Search products with optional filters (price, category)
- **algoliaDocSearch**: Search documentation and policies

### Example Queries

Try these queries to see the agent in action:

**Product Searches:**
- "Show me electronics under $100"
- "I need a gift for someone who likes fitness"
- "What headphones do you have?"

**Policy Questions:**
- "What's your return policy?"
- "Do you offer free shipping?"
- "How do I track my order?"

**Mixed Queries:**
- "I want wireless headphones, what's your return policy?"

## Architecture Decisions

### Why Gemini?

- Fast response times
- Good tool calling capabilities
- Cost-effective for production use

### Why Algolia?

- Lightning-fast search (<100ms)
- Powerful filtering and ranking
- Easy integration with Next.js

### Agent Pattern

This project implements a **tool-calling agent** pattern:

1. LLM receives user input
2. LLM decides autonomously if it needs more information
3. If yes, it outputs a structured tool call
4. Backend executes the tool
5. LLM receives results and generates final response

This is more flexible than hardcoded if/else logic and allows the AI to handle ambiguous queries intelligently.

## Customization

### Adding New Products

Edit `data/products.json` and run:
```bash
npm run index
```

### Adding New Tools

1. Add tool function to `lib/agent/tools.ts`
2. Update system prompt in `lib/agent/prompts.ts`
3. Agent will automatically learn to use it!

### Styling

Modify `tailwind.config.ts` and component styles to match your brand.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js.

## Troubleshooting

**"Missing Algolia environment variables"**
- Make sure `.env.local` exists and has all required keys
- Restart the dev server after adding env vars

**"Tool execution error"**
- Verify Algolia indices are created and populated
- Check that index names match ("products" and "docs")

**"Gemini API error"**
- Verify your API key is valid
- Check you haven't exceeded rate limits

## License

MIT

## Contributing

Pull requests are welcome! Please open an issue first to discuss major changes.

---

Built with ❤️ using Next.js, Gemini, and Algolia