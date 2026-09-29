import { Star } from "lucide-react";

const ProductInfo = ({ product }) => {
  const originalPrice = Number(
    product.originalPrice || product.price
  );

  const currentPrice = Number(product.price || 0);

  const discount =
    originalPrice > currentPrice
      ? Math.round(
          ((originalPrice - currentPrice) / originalPrice) * 100
        )
      : 0;

  return (
    <div>
      {/* Category */}
      <p className="text-sm font-semibold uppercase tracking-wider text-[#BE2229]">
        {product.category}
      </p>

      {/* Name */}
      <h1 className="mt-2 text-3xl font-bold leading-tight text-[#222] sm:text-4xl">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-2">
        <div className="flex items-center gap-1">
          <Star
            size={18}
            fill="#f59e0b"
            className="text-yellow-500"
          />

          <span className="font-semibold text-gray-800">
            {product.rating || 0}
          </span>
        </div>

        {product.reviews !== undefined && (
          <span className="text-sm text-gray-500">
            ({product.reviews} reviews)
          </span>
        )}
      </div>

      {/* Price */}
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <span className="text-3xl font-bold text-[#BE2229]">
          ৳{currentPrice}
        </span>

        {originalPrice > currentPrice && (
          <span className="text-lg text-gray-400 line-through">
            ৳{originalPrice}
          </span>
        )}

        {discount > 0 && (
          <span className="rounded-full bg-[#BE2229]/10 px-3 py-1 text-sm font-bold text-[#BE2229]">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Description */}
      {product.description && (
        <div className="mt-6">
          <h3 className="text-lg font-bold text-gray-900">
            Description
          </h3>

          <p className="mt-2 leading-7 text-gray-600">
            {product.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;