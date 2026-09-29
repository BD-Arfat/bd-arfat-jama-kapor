const DeliveryOption = ({
  deliveryLocation,
  setDeliveryLocation,
}) => {
  return (
    <div className="mt-7">
      <h3 className="mb-3 font-bold text-gray-900">
        Delivery Location
      </h3>

      <div className="grid gap-3 sm:grid-cols-2">

        {/* Inside Chattogram */}
        <label
          className={`cursor-pointer rounded-2xl border p-4 transition ${
            deliveryLocation === "inside"
              ? "border-[#BE2229] bg-[#BE2229]/5"
              : "border-gray-200 bg-white"
          }`}
        >
          <input
            type="radio"
            name="delivery"
            value="inside"
            checked={deliveryLocation === "inside"}
            onChange={(e) =>
              setDeliveryLocation(e.target.value)
            }
            className="sr-only"
          />

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900">
                Inside Chattogram
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Delivery Charge
              </p>
            </div>

            <span className="font-bold text-[#BE2229]">
              ৳80
            </span>
          </div>
        </label>

        {/* Outside Chattogram */}
        <label
          className={`cursor-pointer rounded-2xl border p-4 transition ${
            deliveryLocation === "outside"
              ? "border-[#BE2229] bg-[#BE2229]/5"
              : "border-gray-200 bg-white"
          }`}
        >
          <input
            type="radio"
            name="delivery"
            value="outside"
            checked={deliveryLocation === "outside"}
            onChange={(e) =>
              setDeliveryLocation(e.target.value)
            }
            className="sr-only"
          />

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900">
                Outside Chattogram
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Delivery Charge
              </p>
            </div>

            <span className="font-bold text-[#BE2229]">
              ৳120
            </span>
          </div>
        </label>

      </div>
    </div>
  );
};

export default DeliveryOption;