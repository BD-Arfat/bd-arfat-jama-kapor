import { Minus, Plus } from "lucide-react";

const ProductQuantity = ({
  quantity,
  increaseQuantity,
  decreaseQuantity,
  product,
}) => {
  const reachedStock =
    product.stock !== undefined &&
    quantity >= product.stock;

  return (
    <div className="mt-7">
      <h3 className="mb-3 font-bold text-gray-900">
        Quantity
      </h3>

      <div className="flex items-center gap-4">
        <div className="flex items-center overflow-hidden rounded-xl border border-gray-200 bg-white">
          <button
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className="p-3 text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Minus size={18} />
          </button>

          <span className="min-w-12 text-center font-bold">
            {quantity}
          </span>

          <button
            onClick={increaseQuantity}
            disabled={reachedStock}
            className="p-3 text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Plus size={18} />
          </button>
        </div>

        {reachedStock && (
          <span className="text-xs font-medium text-gray-500">
            Maximum available stock reached
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductQuantity;