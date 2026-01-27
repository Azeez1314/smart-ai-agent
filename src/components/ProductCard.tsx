import Image from "next/image";

type ProductCardProps = {
  name: string;
  price: number;
  description: string;
  category: string;
  image?: string;
};

export default function ProductCard({
  name,
  price,
  description,
  category,
  image,
}: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
      {image && (
        <div className="relative h-48 w-full bg-gray-100">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
          <span className="text-blue-600 font-bold text-lg">${price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
}