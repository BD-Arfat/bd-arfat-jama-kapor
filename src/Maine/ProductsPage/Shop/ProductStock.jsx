const ProductStock = ({ product }) => {
  if (product.stock === undefined) {
    return null;
  }

  if (product.stock <= 0) {
    return (
      <div className="mt-4">
        <span className="inline-flex rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-red-600">
          Out of Stock
        </span>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <span className="text-sm font-semibold text-green-600">
        ✓ {product.stock} items available
      </span>
    </div>
  );
};

export default ProductStock;