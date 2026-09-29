import { Check, ShoppingBag, MessageCircle } from "lucide-react";

const ProductActions = ({
  isOutOfStock,
  addedToCart,
  handleAddToCart,
  handleWhatsAppOrder,
}) => {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">

      {/* Add To Cart */}
      <button
        onClick={handleAddToCart}
        disabled={isOutOfStock}
        className={`flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 font-bold transition ${
          isOutOfStock
            ? "cursor-not-allowed bg-gray-200 text-gray-400"
            : addedToCart
            ? "bg-green-600 text-white"
            : "bg-[#BE2229] text-white hover:bg-[#a51d23]"
        }`}
      >
        {isOutOfStock ? (
          "Out of Stock"
        ) : addedToCart ? (
          <>
            <Check size={20} />
            Added To Cart
          </>
        ) : (
          <>
            <ShoppingBag size={20} />
            Add To Cart
          </>
        )}
      </button>

      {/* WhatsApp */}
      <button
        onClick={handleWhatsAppOrder}
        disabled={isOutOfStock}
        className={`flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 font-bold transition ${
          isOutOfStock
            ? "cursor-not-allowed bg-gray-200 text-gray-400"
            : "bg-green-600 text-white hover:bg-green-700"
        }`}
      >
        <MessageCircle size={20} />

        {isOutOfStock
          ? "Out of Stock"
          : "Order on WhatsApp"}
      </button>

    </div>
  );
};

export default ProductActions;