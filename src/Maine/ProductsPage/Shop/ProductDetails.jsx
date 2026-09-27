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

  // =========================
  // SELECTED SIZE
  // =========================
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || ""
  );

  // =========================
  // SELECTED COLOR
  // =========================
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || ""
  );

  // =========================
  // SELECTED IMAGE
  // =========================
  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || product?.image || ""
  );

  // =========================
  // QUANTITY
  // =========================
  const [quantity, setQuantity] = useState(1);

  // =========================
  // ADD TO CART SUCCESS
  // =========================
  const [added, setAdded] = useState(false);

  // =========================
  // DELIVERY LOCATION
  // =========================
  const [deliveryLocation, setDeliveryLocation] =
    useState("inside");

  // =========================
  // PRODUCT NOT FOUND
  // =========================
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

  // =========================
  // QUANTITY INCREASE
  // =========================
  const increaseQuantity = () => {
    if (product.stock && quantity >= product.stock) return;

    setQuantity((prev) => prev + 1);
  };

  // =========================
  // QUANTITY DECREASE
  // =========================
  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  // =========================
  // ADD TO CART
  // =========================
  const handleAddToCart = () => {
    addToCart(
      product,
      quantity,
      selectedSize,
      selectedColor
    );

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  // =========================
  // PRODUCT TOTAL
  // =========================
  const productTotal = product.price * quantity;

  // =========================
  // DELIVERY CHARGE
  // =========================
  const deliveryCharge =
    deliveryLocation === "inside" ? 80 : 120;

  // =========================
  // GRAND TOTAL
  // =========================
  const grandTotal = productTotal + deliveryCharge;

  // =========================
  // WHATSAPP ORDER
  // =========================
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

Color: ${selectedColor || "Not selected"}

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
    <section className="bg-[#FFF9F5] py-10 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            BACK TO SHOP
        ========================= */}
        <Link
          to="/shop"
          className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-[#BE2229] transition hover:gap-3 sm:mb-8"
        >
          <FiArrowLeft />
          Back To Shop
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">

          {/* =========================
              PRODUCT IMAGES
          ========================= */}
          <div className="min-w-0">

            {/* MAIN IMAGE */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm sm:rounded-3xl">
              <img
                src={selectedImage}
                alt={product.name}
                className="h-[430px] w-full object-cover transition duration-300 sm:h-[550px] lg:h-[650px]"
              />
            </div>

            {/* IMAGE THUMBNAILS */}
            {product.images?.length > 0 && (
              <div className="mt-3 grid grid-cols-5 gap-2 sm:mt-4 sm:gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className={`group overflow-hidden rounded-lg border-2 bg-white transition sm:rounded-xl ${
                      selectedImage === image
                        ? "border-[#BE2229]"
                        : "border-transparent hover:border-[#E1CFC4]"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="h-[72px] w-full object-cover transition duration-300 group-hover:scale-105 sm:h-24"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* FALLBACK IMAGE */}
            {!product.images?.length && product.image && (
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedImage(product.image)
                  }
                  className="overflow-hidden rounded-xl border-2 border-[#BE2229]"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-24 w-24 object-cover"
                  />
                </button>
              </div>
            )}
          </div>

          {/* =========================
              PRODUCT DETAILS
          ========================= */}
          <div className="flex flex-col justify-center">

            {/* CATEGORY */}
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#EE627D] sm:text-sm">
              {product.category}
            </p>

            {/* PRODUCT NAME */}
            <h1 className="text-3xl font-black leading-tight text-[#171717] sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            {/* RATING */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-yellow-500">
                ★★★★★
              </span>

              <span className="text-sm text-gray-500">
                {product.rating || "4.8"} / 5
              </span>

              {product.reviews && (
                <span className="text-sm text-gray-400">
                  ({product.reviews} Reviews)
                </span>
              )}
            </div>

            {/* PRICE */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="text-3xl font-black text-[#BE2229] sm:text-4xl">
                ৳{product.price}
              </span>

              {product.oldPrice && (
                <span className="text-lg text-gray-400 line-through">
                  ৳{product.oldPrice}
                </span>
              )}

              {product.discount && (
                <span className="rounded-full bg-[#BE2229] px-3 py-1 text-xs font-bold text-white">
                  {product.discount}% OFF
                </span>
              )}
            </div>

            {/* STOCK */}
            {product.stock !== undefined && (
              <div className="mt-3">
                {product.stock > 0 ? (
                  <span className="text-sm font-semibold text-green-600">
                    ✓ {product.stock} items available
                  </span>
                ) : (
                  <span className="text-sm font-semibold text-red-600">
                    Out of Stock
                  </span>
                )}
              </div>
            )}

            {/* DESCRIPTION */}
            <p className="mt-6 leading-7 text-gray-600">
              {product.description}
            </p>

            {/* =========================
                SIZE
            ========================= */}
            {product.sizes?.length > 0 && (
              <div className="mt-7 sm:mt-8">

                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-bold text-[#171717]">
                    Select Size
                  </h3>

                  <span className="text-sm text-gray-500">
                    Selected:{" "}
                    <span className="font-bold text-[#171717]">
                      {selectedSize}
                    </span>
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-14 rounded-lg border-2 px-4 py-2.5 font-bold transition ${
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

            {/* =========================
                COLOR
            ========================= */}
            {product.colors?.length > 0 && (
              <div className="mt-7">

                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-bold text-[#171717]">
                    Select Color
                  </h3>

                  <span className="text-sm text-gray-500">
                    Selected:{" "}
                    <span className="font-bold text-[#171717]">
                      {selectedColor}
                    </span>
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`rounded-xl border-2 px-5 py-2.5 text-sm font-bold transition active:scale-95 ${
                        selectedColor === color
                          ? "border-[#BE2229] bg-[#BE2229] text-white"
                          : "border-[#E1CFC4] bg-white text-[#171717] hover:border-[#BE2229]"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* =========================
                QUANTITY
            ========================= */}
            <div className="mt-7 sm:mt-8">

              <h3 className="mb-3 font-bold text-[#171717]">
                Quantity
              </h3>

              <div className="flex w-fit items-center overflow-hidden rounded-xl border border-[#E1CFC4] bg-white">

                <button
                  type="button"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  className="flex h-12 w-12 items-center justify-center transition hover:bg-[#E1CFC4]/40 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <FiMinus />
                </button>

                <span className="flex h-12 w-14 items-center justify-center border-x border-[#E1CFC4] font-bold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  disabled={
                    product.stock &&
                    quantity >= product.stock
                  }
                  className="flex h-12 w-12 items-center justify-center transition hover:bg-[#E1CFC4]/40 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <FiPlus />
                </button>

              </div>
            </div>

            {/* =========================
                DELIVERY
            ========================= */}
            <div className="mt-7 rounded-2xl border border-[#E1CFC4] bg-white p-4 sm:mt-8 sm:p-5">

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

                {/* INSIDE CHATTOGRAM */}
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
                      checked={
                        deliveryLocation === "inside"
                      }
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

                {/* OUTSIDE CHATTOGRAM */}
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
                      checked={
                        deliveryLocation === "outside"
                      }
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
              {/* =========================
    PAYMENT NOTICE
========================= */}
<div className="mt-4 rounded-2xl border border-[#BE2229]/20 bg-[#BE2229]/5 p-4 sm:p-5">
  <p className="text-sm leading-6 text-gray-700 sm:text-base">
    <span className="font-bold text-[#BE2229]">
      Payment Notice:
    </span>{" "}
    ডেলিভারি চার্জ অগ্রিম প্রদান করতে হবে। পণ্যের মূল্য
    পণ্য হাতে পাওয়ার পর পরিশোধযোগ্য।
  </p>
</div>

{/* =========================
    PRICE SUMMARY
========================= */}
<div className="mt-6 rounded-2xl bg-[#E1CFC4]/30 p-4 sm:p-5"></div>
            </div>

            {/* =========================
                PRICE SUMMARY
            ========================= */}
            <div className="mt-6 rounded-2xl bg-[#E1CFC4]/30 p-4 sm:p-5">

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

            {/* =========================
                ACTION BUTTONS
            ========================= */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              {/* ADD TO CART */}
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={
                  product.stock !== undefined &&
                  product.stock <= 0
                }
                className={`flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-bold transition ${
                  added
                    ? "bg-green-600 text-white"
                    : "bg-[#BE2229] text-white hover:bg-[#9F1D23]"
                } disabled:cursor-not-allowed disabled:bg-gray-400`}
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

              {/* WHATSAPP */}
              <button
                type="button"
                onClick={handleWhatsAppOrder}
                disabled={
                  product.stock !== undefined &&
                  product.stock <= 0
                }
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#1DA851] disabled:cursor-not-allowed disabled:bg-gray-400"
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