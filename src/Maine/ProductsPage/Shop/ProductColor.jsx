const ProductColor = ({
  product,
  selectedColor,
  setSelectedColor,
}) => {
  if (!product.colors?.length) {
    return null;
  }

  return (
    <div className="mt-7">
      <h3 className="mb-3 font-bold text-gray-900">
        Select Color
      </h3>

      <div className="flex flex-wrap gap-3">
        {product.colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
              selectedColor === color
                ? "border-[#BE2229] bg-[#BE2229] text-white"
                : "border-gray-200 bg-white text-gray-700 hover:border-[#BE2229]"
            }`}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductColor;