import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiCheck,
  FiMessageCircle,
  FiTruck,
} from "react-icons/fi";

import products from "../../../../src/data/products";
import { useCart } from "../../../../src/context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || ""
  );

  const [quantity, setQuantity] = useState(1);

  const [added, setAdded] = useState(false);

  // Delivery location
  const [deliveryLocation, setDeliveryLocation] = useState("inside");

  if (!product) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-[#FFF9F5] px-4">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[#171717]">
            Product Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            Sorry, this product could not be found.
          </p>

          <Link
            to="/shop"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#BE2229] px-6 py-3 font-bold text-white transition hover:bg-[#9F1D23]"
          >
            <FiArrowLeft size={18} />
            Back To Shop
          </Link>
        </div>
      </section>
    );
  }

  // Quantity increase
  const increaseQuantity = () => {
    if (product.stock && quantity >= product.stock) return;

    setQuantity((prev) => prev + 1);
  };

  // Quantity decrease
  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  // Add to cart
  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, "");

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  // Product total
  const productTotal = product.price * quantity;

  // Delivery charge
  const deliveryCharge =
    deliveryLocation === "inside" ? 80 : 120;

  // Final total
  const grandTotal = productTotal + deliveryCharge;

  // WhatsApp Order
  const handleWhatsAppOrder = () => {
    const deliveryText =
      deliveryLocation === "inside"
        ? "Chattogram-এর ভিতরে"
        : "Chattogram-এর বাইরে";

    const message = `
Hello BDARFATJAMA,

I want to order this product:

Product: ${product.name}
Category: ${product.category}
Price: ৳${product.price}
Size: ${selectedSize || "Not selected"}
Quantity: ${quantity}

Product Total: ৳${productTotal}

Delivery Location: ${deliveryText}
Delivery Charge: ৳${deliveryCharge}

Grand Total: ৳${grandTotal}

Product Link:
${window.location.origin}/product/${product.id}

Product Image:
${product.image}

Please confirm my order.

Thank you.
`;

    const whatsappNumber = "8801846615162";

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-[#FFF9F5] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Back */}
        <Link
          to="/shop"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#BE2229] transition hover:gap-3"
        >
          <FiArrowLeft />
          Back To Shop
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* ================= IMAGE ================= */}
          <div className="overflow-hidden rounded-3xl bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="h-full max-h-[650px] w-full object-cover"
            />
          </div>

          {/* ================= DETAILS ================= */}
          <div className="flex flex-col justify-center">

            {/* Category */}
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#EE627D]">
              {product.category}
            </p>

            {/* Product Name */}
            <h1 className="text-3xl font-black text-[#171717] sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-2">
              <span className="text-yellow-500">★★★★★</span>

              <span className="text-sm text-gray-500">
                {product.rating || "4.8"} / 5
              </span>
            </div>

            {/* Price */}
            <div className="mt-6">
              <span className="text-3xl font-black text-[#BE2229]">
                ৳{product.price}
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 leading-7 text-gray-600">
              {product.description}
            </p>

            {/* ================= SIZE ================= */}
            {product.sizes?.length > 0 && (
              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-bold text-[#171717]">
                    Select Size
                  </h3>

                  <span className="text-sm text-gray-500">
                    Selected: {selectedSize}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-14 rounded-lg border-2 px-4 py-2 font-bold transition ${
                        selectedSize === size
                          ? "border-[#BE2229] bg-[#BE2229] text-white"
                          : "border-[#E1CFC4] bg-white text-[#171717] hover:border-[#BE2229]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ================= QUANTITY ================= */}
            <div className="mt-8">
              <h3 className="mb-3 font-bold text-[#171717]">
                Quantity
              </h3>

              <div className="flex w-fit items-center overflow-hidden rounded-xl border border-[#E1CFC4] bg-white">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="flex h-12 w-12 items-center justify-center transition hover:bg-[#E1CFC4]/40"
                >
                  <FiMinus />
                </button>

                <span className="flex h-12 w-14 items-center justify-center border-x border-[#E1CFC4] font-bold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="flex h-12 w-12 items-center justify-center transition hover:bg-[#E1CFC4]/40"
                >
                  <FiPlus />
                </button>
              </div>
            </div>

            {/* ================= DELIVERY ================= */}
            <div className="mt-8 rounded-2xl border border-[#E1CFC4] bg-white p-5">

              <div className="mb-4 flex items-center gap-2">
                <FiTruck
                  className="text-[#BE2229]"
                  size={21}
                />

                <h3 className="font-bold text-[#171717]">
                  Delivery Location
                </h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">

                {/* Chattogram Inside */}
                <label
                  className={`cursor-pointer rounded-xl border-2 p-4 transition ${
                    deliveryLocation === "inside"
                      ? "border-[#BE2229] bg-[#BE2229]/5"
                      : "border-[#E1CFC4] hover:border-[#BE2229]"
                  }`}
                >
                  <div className="flex items-start gap-3">

                    <input
                      type="radio"
                      name="deliveryLocation"
                      value="inside"
                      checked={deliveryLocation === "inside"}
                      onChange={() =>
                        setDeliveryLocation("inside")
                      }
                      className="mt-1 accent-[#BE2229]"
                    />

                    <div>
                      <p className="font-bold text-[#171717]">
                        Chattogram-এর ভিতরে
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        Delivery Charge: ৳80
                      </p>
                    </div>

                  </div>
                </label>

                {/* Chattogram Outside */}
                <label
                  className={`cursor-pointer rounded-xl border-2 p-4 transition ${
                    deliveryLocation === "outside"
                      ? "border-[#BE2229] bg-[#BE2229]/5"
                      : "border-[#E1CFC4] hover:border-[#BE2229]"
                  }`}
                >
                  <div className="flex items-start gap-3">

                    <input
                      type="radio"
                      name="deliveryLocation"
                      value="outside"
                      checked={deliveryLocation === "outside"}
                      onChange={() =>
                        setDeliveryLocation("outside")
                      }
                      className="mt-1 accent-[#BE2229]"
                    />

                    <div>
                      <p className="font-bold text-[#171717]">
                        Chattogram-এর বাইরে
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        Delivery Charge: ৳120
                      </p>
                    </div>

                  </div>
                </label>

              </div>
            </div>

            {/* ================= PRICE SUMMARY ================= */}
            <div className="mt-6 rounded-2xl bg-[#E1CFC4]/30 p-5">

              <div className="flex items-center justify-between text-gray-600">
                <span>
                  Product Total
                </span>

                <span className="font-bold text-[#171717]">
                  ৳{productTotal}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between text-gray-600">
                <span>
                  Delivery Charge
                </span>

                <span className="font-bold text-[#171717]">
                  ৳{deliveryCharge}
                </span>
              </div>

              <div className="my-4 border-t border-[#E1CFC4]" />

              <div className="flex items-center justify-between">
                <span className="text-lg font-black text-[#171717]">
                  Grand Total
                </span>

                <span className="text-2xl font-black text-[#BE2229]">
                  ৳{grandTotal}
                </span>
              </div>

            </div>

            {/* ================= BUTTONS ================= */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              {/* Add To Cart */}
              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-bold transition ${
                  added
                    ? "bg-green-600 text-white"
                    : "bg-[#BE2229] text-white hover:bg-[#9F1D23]"
                }`}
              >
                {added ? (
                  <>
                    <FiCheck size={19} />
                    Added To Cart
                  </>
                ) : (
                  <>
                    <FiShoppingBag size={19} />
                    Add To Cart
                  </>
                )}
              </button>

              {/* WhatsApp */}
              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#1DA851]"
              >
                <FiMessageCircle size={19} />
                Order on WhatsApp
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;