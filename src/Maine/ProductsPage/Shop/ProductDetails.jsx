
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Context
import { useCart } from "../../../context/CartContext";

// Product Data
import  products  from "../../../data/products";

// Components
import ProductGallery from "../Shop/ProductGallery";
import ProductInfo from "../Shop/ProductInfo";
import ProductStock from "../Shop/ProductStock";
import ProductSize from "../Shop/ProductSize";
import ProductColor from "../Shop/ProductColor";
import ProductQuantity from "../Shop/ProductQuantity";
import DeliveryOption from "../Shop/DeliveryOption";
import PaymentNotice from "../Shop/PaymentNotice";
import PriceSummary from "../Shop/PriceSummary";
import ProductActions from "../Shop/ProductActions";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // -----------------------------
  // Find Product
  // -----------------------------
  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  // -----------------------------
  // States
  // -----------------------------
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || ""
  );

  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || ""
  );

  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || product?.image || ""
  );

  const [quantity, setQuantity] = useState(1);

  const [deliveryLocation, setDeliveryLocation] =
    useState("inside");

  const [addedToCart, setAddedToCart] = useState(false);

  // -----------------------------
  // Stock
  // -----------------------------
  const isOutOfStock =
    product?.stock !== undefined &&
    Number(product.stock) <= 0;

  // -----------------------------
  // Increase Quantity
  // -----------------------------
  const increaseQuantity = () => {
    if (!product || isOutOfStock) return;

    if (
      product.stock !== undefined &&
      quantity >= Number(product.stock)
    ) {
      return;
    }

    setQuantity((prev) => prev + 1);
  };

  // -----------------------------
  // Decrease Quantity
  // -----------------------------
  const decreaseQuantity = () => {
    setQuantity((prev) => {
      if (prev <= 1) return 1;
      return prev - 1;
    });
  };

  // -----------------------------
  // Add To Cart
  // -----------------------------
  const handleAddToCart = () => {
    if (!product || isOutOfStock) return;

    if (
      product.stock !== undefined &&
      quantity > Number(product.stock)
    ) {
      return;
    }

    const cartProduct = {
      ...product,
      quantity,
      selectedSize,
      selectedColor,
    };

    addToCart(cartProduct);

    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 2500);
  };

  // -----------------------------
  // Delivery Charge
  // -----------------------------
  const deliveryCharge =
    deliveryLocation === "inside" ? 80 : 130;

  // -----------------------------
  // Product Total
  // -----------------------------
  const productTotal =
    Number(product?.price || 0) * quantity;

  // -----------------------------
  // Grand Total
  // -----------------------------
  const grandTotal =
    productTotal + deliveryCharge;

  // -----------------------------
  // WhatsApp Order
  // -----------------------------
  const handleWhatsAppOrder = () => {
    if (!product || isOutOfStock) return;

    if (
      product.stock !== undefined &&
      quantity > Number(product.stock)
    ) {
      return;
    }

    const whatsappNumber = "8801776185498";

    const productLink =
      `${window.location.origin}/product/${product.id}`;

    const message = `
Hello ZYRQON FITS,

I want to order this product.

━━━━━━━━━━━━━━━━━━
🛍️ PRODUCT DETAILS
━━━━━━━━━━━━━━━━━━

Product: ${product.name}
Price: ৳${product.price}
Quantity: ${quantity}
Size: ${selectedSize || "Not selected"}
Color: ${selectedColor || "Not selected"}

Product Total: ৳${productTotal}

━━━━━━━━━━━━━━━━━━
🚚 DELIVERY
━━━━━━━━━━━━━━━━━━

Location:
${
  deliveryLocation === "inside"
    ? "Inside Chattogram"
    : "Outside Chattogram"
}

Delivery Charge: ৳${deliveryCharge}

Grand Total: ৳${grandTotal}

━━━━━━━━━━━━━━━━━━
🔗 PRODUCT LINK
━━━━━━━━━━━━━━━━━━

${productLink}

Thank you.
    `.trim();

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  // -----------------------------
  // Product Not Found
  // -----------------------------
  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FFF9F5] px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Product Not Found
          </h2>

          <p className="mt-2 text-gray-500">
            Sorry, the product you are looking for does not exist.
          </p>

          <button
            onClick={() => navigate("/shop")}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#BE2229] px-6 py-3 font-semibold text-white transition hover:bg-[#a51d23]"
          >
            <ArrowLeft size={18} />
            Back To Shop
          </button>
        </div>
      </div>
    );
  }

  // -----------------------------
  // Main UI
  // -----------------------------
  return (
    <main className="min-h-screen bg-[#FFF9F5] py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate("/shop")}
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-[#BE2229]"
        >
          <ArrowLeft size={18} />
          Back To Shop
        </button>

        {/* Product Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

          {/* LEFT - Product Gallery */}
          <ProductGallery
            product={product}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />

          {/* RIGHT - Product Information */}
          <div>
            <ProductInfo product={product} />

            <ProductStock
              isOutOfStock={isOutOfStock}
              product={product}
            />

            <ProductSize
              product={product}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />

            {/* <ProductColor
              product={product}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            /> */}

            <ProductQuantity
              quantity={quantity}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              product={product}
            />

            <DeliveryOption
              deliveryLocation={deliveryLocation}
              setDeliveryLocation={setDeliveryLocation}
            />

            <PaymentNotice />

            <PriceSummary
              product={product}
              quantity={quantity}
              productTotal={productTotal}
              deliveryCharge={deliveryCharge}
              grandTotal={grandTotal}
            />

            <ProductActions
              isOutOfStock={isOutOfStock}
              addedToCart={addedToCart}
              handleAddToCart={handleAddToCart}
              handleWhatsAppOrder={handleWhatsAppOrder}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
