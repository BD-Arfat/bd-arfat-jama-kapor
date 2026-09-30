
import { MapPin, Truck } from "lucide-react";

const DeliveryOption = ({
  deliveryLocation,
  setDeliveryLocation,
}) => {
  const deliveryOptions = [
    {
      value: "inside",
      title: "Inside Chattogram",
      subtitle: "চট্টগ্রাম শহরের ভিতরে",
      charge: 80,
    },
    {
      value: "outside",
      title: "Outside Chattogram",
      subtitle: "চট্টগ্রামের বাইরে",
      charge: 130,
    },
  ];

  return (
    <div className="mt-7">

      {/* ================= HEADER ================= */}
      <div className="mb-4 flex items-center justify-between">

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#BE2229]">
            Delivery
          </p>

          <h3 className="mt-1 text-lg font-bold text-[#222]">
            Delivery Location
          </h3>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#BE2229]/10 text-[#BE2229]">
          <Truck size={17} />
        </div>

      </div>


      {/* ================= OPTIONS ================= */}
      <div className="grid gap-3 sm:grid-cols-2">

        {deliveryOptions.map((option) => {
          const isSelected =
            deliveryLocation === option.value;

          return (
            <label
              key={option.value}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border p-4 transition-all duration-300 ${
                isSelected
                  ? "border-[#BE2229] bg-[#BE2229]/5 shadow-sm"
                  : "border-[#E5DED9] bg-white hover:border-[#BE2229]/40 hover:shadow-sm"
              }`}
            >

              {/* Hidden Radio */}
              <input
                type="radio"
                name="delivery"
                value={option.value}
                checked={isSelected}
                onChange={(e) =>
                  setDeliveryLocation(e.target.value)
                }
                className="sr-only"
              />


              <div className="flex items-center justify-between gap-4">

                {/* LEFT */}
                <div className="flex items-center gap-3">

                  {/* Location Icon */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition ${
                      isSelected
                        ? "bg-[#BE2229] text-white"
                        : "bg-[#F5F0ED] text-gray-500 group-hover:text-[#BE2229]"
                    }`}
                  >
                    <MapPin size={17} />
                  </div>


                  {/* TEXT */}
                  <div>
                    <p className="text-sm font-semibold text-[#222]">
                      {option.title}
                    </p>

                    <p className="mt-1 text-[11px] text-gray-500">
                      {option.subtitle}
                    </p>
                  </div>

                </div>


                {/* RIGHT */}
                <div className="text-right">

                  <p className="text-[10px] text-gray-400">
                    Delivery
                  </p>

                  <p className="mt-0.5 text-base font-bold text-[#BE2229]">
                    ৳{option.charge}
                  </p>

                </div>

              </div>


              {/* SELECTED INDICATOR */}
              <div
                className={`absolute right-3 top-3 h-2 w-2 rounded-full transition ${
                  isSelected
                    ? "bg-[#BE2229]"
                    : "bg-transparent"
                }`}
              />

            </label>
          );
        })}

      </div>


      {/* ================= BANGLA NOTICE ================= */}
      <div className="mt-4 flex gap-2.5 rounded-xl border border-[#E8DED7] bg-[#FAF7F4] px-4 py-3">

        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#BE2229]" />

        <p className="text-xs leading-5 text-gray-500">
          <span className="font-semibold text-[#444]">
            ডেলিভারি নোট:
          </span>{" "}
          আপনার ঠিকানা অনুযায়ী সঠিক ডেলিভারি চার্জ প্রযোজ্য হবে।
        </p>

      </div>

    </div>
  );
};

export default DeliveryOption;
