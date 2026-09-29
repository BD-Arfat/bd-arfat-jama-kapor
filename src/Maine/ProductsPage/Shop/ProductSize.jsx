const ProductSize = ({
  product,
  selectedSize,
  setSelectedSize,
}) => {
  if (!product.sizes?.length) {
    return null;
  }

  return (
    <div className="mt-7">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-bold text-gray-900">
          Select Size
        </h3>

        <span className="text-sm text-gray-500">
          {selectedSize || "Choose"}
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        {product.sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`min-w-12 rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
              selectedSize === size
                ? "border-[#BE2229] bg-[#BE2229] text-white"
                : "border-gray-200 bg-white text-gray-700 hover:border-[#BE2229]"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductSize;