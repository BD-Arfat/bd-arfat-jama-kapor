import { CreditCard } from "lucide-react";

const PaymentNotice = () => {
  return (
    <div className="mt-6 rounded-2xl border border-[#E1CFC4] bg-[#E1CFC4]/30 p-4">
      <div className="flex gap-3">
        <div className="mt-0.5 shrink-0">
          <CreditCard
            size={20}
            className="text-[#BE2229]"
          />
        </div>

        <div>
          <h4 className="font-bold text-gray-900">
            Payment Information
          </h4>

          <p className="mt-1 text-sm leading-6 text-gray-600">
            ডেলিভারি চার্জ অগ্রিম পরিশোধ করতে হবে। পণ্য হাতে পাওয়ার পর পণ্যের মূল্য পরিশোধ করা যাবে।
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentNotice;