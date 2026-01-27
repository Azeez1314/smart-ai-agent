import ProductCard from "./ProductCard";

type MessageBubbleProps = {
  role: "user" | "assistant";
  content: string;
  toolResults?: any;
};

export default function MessageBubble({
  role,
  content,
  toolResults,
}: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-3 ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        <p className="whitespace-pre-wrap">{content}</p>
        
        {/* Render product cards if tool results contain products */}
        {!isUser && toolResults && Array.isArray(toolResults) && toolResults.length > 0 && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            {toolResults.map((item: any, index: number) => {
              // Check if it's a product (has price) or a doc
              if (item.price !== undefined) {
                return (
                  <ProductCard
                    key={item.objectID || index}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    category={item.category}
                    image={item.image}
                  />
                );
              }
              return null;
            })}
          </div>
        )}
      </div>
    </div>
  );
}