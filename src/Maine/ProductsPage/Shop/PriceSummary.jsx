const PriceSummary = ({
  product,
  quantity,
  productTotal,
  deliveryCharge,
  grandTotal,
}) => {
  return (
    <div className="mt-6 rounded-2xl bg-[#E1CFC4]/30 p-5">

      <h3 className="mb-4 text-lg font-bold text-gray-900">
        Price Summary
      </h3>

      <div className="space-y-3">

        {/* Product */}
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-gray-600">
            {product.name} × {quantity}
          </span>

          <span className="font-semibold text-gray-900">
            ৳{productTotal}
          </span>
        </div>

        {/* Delivery */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">
            Delivery Charge
          </span>

          <span className="font-semibold text-gray-900">
            ৳{deliveryCharge}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-[#BE2229]/10 pt-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-gray-900">
              Grand Total
            </span>

            <span className="text-2xl font-bold text-[#BE2229]">
              ৳{grandTotal}
            </span>
          </div>
        </div>
        {/* ================= BANGLA NOTICE ================= */}
      <div className="mt-5 rounded-xl border border-[#BE2229]/10 bg-[#BE2229]/5 px-4 py-3">

        <p className="text-xs leading-5 text-gray-600">
          <span className="font-bold text-[#BE2229]">
            নোট:
          </span>{" "}
          অর্ডার নিশ্চিত করার পর আমাদের পক্ষ থেকে আপনার সাথে
          যোগাযোগ করা হবে।
        </p>

      </div>

      </div>
    </div>
  );
};

export default PriceSummary;