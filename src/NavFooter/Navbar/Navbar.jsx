import React, { useState } from "react";
import bdarfat from "../../assets/bdarfat.png";

import {
    FiMenu,
    FiX,
    FiSearch,
    FiShoppingBag,
    FiUser,
    FiChevronDown,
    FiMinus,
    FiPlus,
    FiTrash2,
    FiMessageCircle,
} from "react-icons/fi";

import { useCart } from "../../../src/context/CartContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);

    // Cart Drawer
    const [cartOpen, setCartOpen] = useState(false);

    // Delivery Location
    const [deliveryLocation, setDeliveryLocation] = useState("inside");

    const {
        cartItems,
        cartCount,
        cartTotal,
        removeFromCart,
        updateQuantity,
    } = useCart();

    // Delivery Charge
    const deliveryCharge =
        deliveryLocation === "inside" ? 80 : 120;

    // Grand Total
    const grandTotal = cartTotal + deliveryCharge;

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    // =====================================================
    // WHATSAPP CHECKOUT
    // =====================================================
    const handleWhatsAppCheckout = () => {
        const deliveryText =
            deliveryLocation === "inside"
                ? "Chattogram-এর ভিতরে"
                : "Chattogram-এর বাইরে";

        const message = `
Hello BDARFATJAMA,

I want to order these products:

${cartItems
                .map(
                    (item, index) => `
Product ${index + 1}: ${item.name}

Category: ${item.category || "N/A"}

Price: ৳${item.price}

Size: ${item.size || "Not selected"}

Quantity: ${item.quantity}

Product Total: ৳${item.price * item.quantity}

Product Link:

${window.location.origin}/product/${item.id}

Product Image:

${item.image}

`
                )
                .join("\n")}

Cart Subtotal: ৳${cartTotal}

Delivery Location: ${deliveryText}

Delivery Charge: ৳${deliveryCharge}

Grand Total: ৳${grandTotal}

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
        <>
            {/* =====================================================
          NAVBAR
      ====================================================== */}

            <nav className="sticky top-0 z-50 w-full border-b border-[#E1CFC4]/60 bg-[#FFF9F5]/95 backdrop-blur-md">
                <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                    {/* ================= LOGO ================= */}
                    <a
                        href="/"
                        className="flex shrink-0 items-center"
                    >
                        <img
                            src={bdarfat}
                            alt="BDARFATJAMA"
                            className="h-[58px] w-auto object-contain"
                        />
                    </a>

                    {/* ================= DESKTOP MENU ================= */}
                    <div className="hidden items-center gap-8 lg:flex">

                        {navLinks.slice(0, 2).map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-[15px] font-semibold text-gray-800 transition duration-300 hover:text-[#BE2229]
                after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0
                after:bg-[#BE2229] after:transition-all after:duration-300
                hover:after:w-full"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* ================= CATEGORIES ================= */}
                        <div className="group relative">
                            <button
                                onClick={() =>
                                    setCategoryOpen(!categoryOpen)
                                }
                                className="flex items-center gap-1.5 text-[15px] font-semibold text-gray-800 transition duration-300 hover:text-[#BE2229]"
                            >
                                Categories

                                <FiChevronDown
                                    className={`transition-transform duration-300 ${
                                        categoryOpen
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                />
                            </button>

                            {/* Dropdown */}
                            <div
                                className={`absolute left-1/2 top-[38px] w-52 -translate-x-1/2 rounded-2xl border border-[#E1CFC4] bg-white p-2 shadow-xl transition-all duration-300 ${
                                    categoryOpen
                                        ? "visible translate-y-0 opacity-100"
                                        : "invisible -translate-y-2 opacity-0"
                                }`}
                            >
                                <a
                                    href="/category/tshirts"
                                    className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-[#FCE8E8] hover:text-[#BE2229]"
                                >
                                    👕 T-Shirts
                                </a>

                                <a
                                    href="/category/shirts"
                                    className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-[#FCE8E8] hover:text-[#BE2229]"
                                >
                                    👔 Shirts
                                </a>

                                <a
                                    href="/category/jerseys"
                                    className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-[#FCE8E8] hover:text-[#BE2229]"
                                >
                                    ⚽ Jerseys
                                </a>

                                <a
                                    href="/category/pants"
                                    className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-[#FCE8E8] hover:text-[#BE2229]"
                                >
                                    👖 Pants
                                </a>
                            </div>
                        </div>

                        {navLinks.slice(2).map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-[15px] font-semibold text-gray-800 transition duration-300 hover:text-[#BE2229]
                after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0
                after:bg-[#BE2229] after:transition-all after:duration-300
                hover:after:w-full"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* ================= DESKTOP RIGHT SIDE ================= */}
                    <div className="hidden items-center gap-3 lg:flex">

                        {/* Search */}
                        <button
                            className="flex h-10 w-10 items-center justify-center rounded-full
              text-gray-700 transition duration-300
              hover:bg-[#FCE8E8] hover:text-[#BE2229]"
                            title="Search"
                        >
                            <FiSearch size={20} />
                        </button>

                        {/* Account */}
                        <button
                            className="flex h-10 w-10 items-center justify-center rounded-full
              text-gray-700 transition duration-300
              hover:bg-[#FCE8E8] hover:text-[#BE2229]"
                            title="Account"
                        >
                            <FiUser size={20} />
                        </button>

                        {/* ================= CART BUTTON ================= */}
                        <button
                            type="button"
                            onClick={() => setCartOpen(true)}
                            className="relative flex h-11 w-11 items-center justify-center
              rounded-full bg-[#BE2229] text-white
              shadow-md shadow-[#BE2229]/20
              transition duration-300 hover:scale-105 hover:bg-[#9F1D23]"
                            title="Shopping Cart"
                        >
                            <FiShoppingBag size={20} />

                            {cartCount > 0 && (
                                <span
                                    className="absolute -right-1 -top-1 flex h-5 min-w-5
                  items-center justify-center rounded-full bg-[#EE627D]
                  px-1 text-[10px] font-bold text-white ring-2 ring-white"
                                >
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* Login */}
                        <a
                            href="/login"
                            className="ml-2 rounded-full border-2 border-[#BE2229]
              px-5 py-2.5 text-sm font-bold text-[#BE2229]
              transition duration-300
              hover:bg-[#BE2229] hover:text-white"
                        >
                            Login
                        </a>
                    </div>

                    {/* ================= MOBILE RIGHT ================= */}
                    <div className="flex items-center gap-2 lg:hidden">

                        {/* Mobile Cart */}
                        <button
                            type="button"
                            onClick={() => setCartOpen(true)}
                            className="relative flex h-10 w-10 items-center justify-center
              rounded-full bg-[#BE2229] text-white"
                            title="Shopping Cart"
                        >
                            <FiShoppingBag size={19} />

                            {cartCount > 0 && (
                                <span
                                    className="absolute -right-1 -top-1 flex h-5 min-w-5
                  items-center justify-center rounded-full bg-[#EE627D]
                  px-1 text-[10px] font-bold ring-2 ring-white"
                                >
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex h-10 w-10 items-center justify-center
              rounded-full border border-[#E1CFC4]
              text-gray-800 transition hover:bg-[#FCE8E8]"
                        >
                            {isOpen ? (
                                <FiX size={23} />
                            ) : (
                                <FiMenu size={23} />
                            )}
                        </button>
                    </div>
                </div>

                {/* =====================================================
            MOBILE MENU
        ====================================================== */}

                <div
                    className={`overflow-hidden border-t border-[#E1CFC4]/50 bg-[#FFF9F5]
          transition-all duration-300 lg:hidden ${
              isOpen
                  ? "max-h-[600px] opacity-100"
                  : "max-h-0 opacity-0"
          }`}
                >
                    <div className="mx-auto max-w-7xl px-5 pb-6 pt-4">

                        {/* Mobile Links */}
                        <div className="flex flex-col gap-1">

                            <a
                                href="/"
                                onClick={() => setIsOpen(false)}
                                className="rounded-xl px-4 py-3.5 font-semibold text-gray-800 transition hover:bg-[#FCE8E8] hover:text-[#BE2229]"
                            >
                                Home
                            </a>

                            <a
                                href="/shop"
                                onClick={() => setIsOpen(false)}
                                className="rounded-xl px-4 py-3.5 font-semibold text-gray-800 transition hover:bg-[#FCE8E8] hover:text-[#BE2229]"
                            >
                                Shop
                            </a>

                            {/* Mobile Categories */}
                            <div>
                                <button
                                    onClick={() =>
                                        setCategoryOpen(
                                            !categoryOpen
                                        )
                                    }
                                    className="flex w-full items-center justify-between rounded-xl
                  px-4 py-3.5 font-semibold text-gray-800
                  transition hover:bg-[#FCE8E8] hover:text-[#BE2229]"
                                >
                                    Categories

                                    <FiChevronDown
                                        className={`transition-transform duration-300 ${
                                            categoryOpen
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    />
                                </button>

                                <div
                                    className={`ml-4 overflow-hidden transition-all duration-300 ${
                                        categoryOpen
                                            ? "max-h-60 opacity-100"
                                            : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <a
                                        href="/category/tshirts"
                                        className="block border-l-2 border-[#EE627D] px-4 py-2.5 text-sm text-gray-600 hover:text-[#BE2229]"
                                    >
                                        T-Shirts
                                    </a>

                                    <a
                                        href="/category/shirts"
                                        className="block border-l-2 border-[#EE627D] px-4 py-2.5 text-sm text-gray-600 hover:text-[#BE2229]"
                                    >
                                        Shirts
                                    </a>

                                    <a
                                        href="/category/jerseys"
                                        className="block border-l-2 border-[#EE627D] px-4 py-2.5 text-sm text-gray-600 hover:text-[#BE2229]"
                                    >
                                        Jerseys
                                    </a>

                                    <a
                                        href="/category/pants"
                                        className="block border-l-2 border-[#EE627D] px-4 py-2.5 text-sm text-gray-600 hover:text-[#BE2229]"
                                    >
                                        Pants
                                    </a>
                                </div>
                            </div>

                            <a
                                href="/about"
                                onClick={() => setIsOpen(false)}
                                className="rounded-xl px-4 py-3.5 font-semibold text-gray-800 transition hover:bg-[#FCE8E8] hover:text-[#BE2229]"
                            >
                                About
                            </a>

                            <a
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="rounded-xl px-4 py-3.5 font-semibold text-gray-800 transition hover:bg-[#FCE8E8] hover:text-[#BE2229]"
                            >
                                Contact
                            </a>
                        </div>

                        {/* Mobile Bottom Actions */}
                        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#E1CFC4] pt-4">

                            <button
                                className="flex items-center justify-center gap-2
                rounded-xl border border-[#E1CFC4]
                py-3 font-semibold text-gray-700
                transition hover:bg-[#FCE8E8] hover:text-[#BE2229]"
                            >
                                <FiSearch size={18} />
                                Search
                            </button>

                            <a
                                href="/login"
                                className="flex items-center justify-center gap-2
                rounded-xl bg-[#BE2229] py-3
                font-semibold text-white
                transition hover:bg-[#9F1D23]"
                            >
                                <FiUser size={18} />
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* =====================================================
          CART DRAWER
      ====================================================== */}

            {cartOpen && (
                <div className="fixed inset-0 z-[100]">

                    {/* ================= OVERLAY ================= */}
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
                        onClick={() => setCartOpen(false)}
                    />

                    {/* ================= DRAWER ================= */}
                    <div
                        className="absolute right-0 top-0 flex h-full
            w-full max-w-md flex-col bg-[#FFF9F5]
            shadow-2xl"
                    >

                        {/* ================= DRAWER HEADER ================= */}
                        <div className="flex items-center justify-between border-b border-[#E1CFC4] px-5 py-5">

                            <div>
                                <h2 className="text-xl font-black text-[#171717]">
                                    Shopping Cart
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    {cartCount}{" "}
                                    {cartCount === 1
                                        ? "item"
                                        : "items"}{" "}
                                    in your cart
                                </p>
                            </div>

                            {/* Close */}
                            <button
                                type="button"
                                onClick={() => setCartOpen(false)}
                                className="flex h-10 w-10 items-center justify-center rounded-full
                bg-white text-gray-600 transition
                hover:bg-[#E1CFC4]"
                            >
                                <FiX size={21} />
                            </button>
                        </div>

                        {/* ================= CART ITEMS ================= */}
                        <div className="flex-1 overflow-y-auto px-5 py-5">

                            {/* Empty Cart */}
                            {cartItems.length === 0 ? (
                                <div className="flex h-full flex-col items-center justify-center text-center">

                                    <div
                                        className="flex h-20 w-20 items-center justify-center
                    rounded-full bg-[#E1CFC4]/40"
                                    >
                                        <FiShoppingBag
                                            size={32}
                                            className="text-[#BE2229]"
                                        />
                                    </div>

                                    <h3 className="mt-5 text-lg font-black text-[#171717]">
                                        Your Cart is Empty
                                    </h3>

                                    <p className="mt-2 text-sm text-gray-500">
                                        Add some products to your cart.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setCartOpen(false)
                                        }
                                        className="mt-5 rounded-full bg-[#BE2229]
                    px-6 py-3 text-sm font-bold text-white
                    transition hover:bg-[#9F1D23]"
                                    >
                                        Continue Shopping
                                    </button>

                                </div>
                            ) : (

                                /* Products */
                                <div className="space-y-4">

                                    {cartItems.map((item) => (
                                        <div
                                            key={`${item.id}-${item.size}-${item.color}`}
                                            className="rounded-2xl border border-[#E1CFC4]
                      bg-white p-3"
                                        >

                                            <div className="flex gap-3">

                                                {/* Product Image */}
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="h-24 w-20 shrink-0 rounded-xl object-cover"
                                                />

                                                {/* Product Info */}
                                                <div className="min-w-0 flex-1">

                                                    {/* Name + Remove */}
                                                    <div className="flex items-start justify-between gap-2">

                                                        <h3 className="line-clamp-2 text-sm font-bold text-[#171717]">
                                                            {item.name}
                                                        </h3>

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                removeFromCart(
                                                                    item.id,
                                                                    item.size,
                                                                    item.color
                                                                )
                                                            }
                                                            className="shrink-0 text-gray-400 transition hover:text-[#BE2229]"
                                                            title="Remove"
                                                        >
                                                            <FiTrash2 size={17} />
                                                        </button>
                                                    </div>

                                                    {/* Price */}
                                                    <p className="mt-1 text-sm font-bold text-[#BE2229]">
                                                        ৳{item.price}
                                                    </p>

                                                    {/* Size */}
                                                    {item.size && (
                                                        <p className="mt-1 text-xs text-gray-500">
                                                            Size:{" "}
                                                            {item.size}
                                                        </p>
                                                    )}

                                                    {/* Quantity */}
                                                    <div className="mt-3 flex items-center justify-between">

                                                        <div
                                                            className="flex items-center overflow-hidden
                              rounded-lg border border-[#E1CFC4]"
                                                        >

                                                            {/* Minus */}
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    updateQuantity(
                                                                        item.id,
                                                                        item.quantity -
                                                                            1,
                                                                        item.size,
                                                                        item.color
                                                                    )
                                                                }
                                                                disabled={
                                                                    item.quantity <=
                                                                    1
                                                                }
                                                                className="flex h-8 w-8 items-center justify-center
                                text-gray-600 transition
                                hover:bg-[#E1CFC4]/40
                                disabled:cursor-not-allowed
                                disabled:opacity-40"
                                                            >
                                                                <FiMinus
                                                                    size={
                                                                        13
                                                                    }
                                                                />
                                                            </button>

                                                            {/* Quantity */}
                                                            <span
                                                                className="flex h-8 w-9 items-center
                                justify-center border-x border-[#E1CFC4]
                                text-xs font-bold"
                                                            >
                                                                {
                                                                    item.quantity
                                                                }
                                                            </span>

                                                            {/* Plus */}
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    updateQuantity(
                                                                        item.id,
                                                                        item.quantity +
                                                                            1,
                                                                        item.size,
                                                                        item.color
                                                                    )
                                                                }
                                                                className="flex h-8 w-8 items-center justify-center
                                text-gray-600 transition
                                hover:bg-[#E1CFC4]/40"
                                                            >
                                                                <FiPlus
                                                                    size={
                                                                        13
                                                                    }
                                                                />
                                                            </button>
                                                        </div>

                                                        {/* Item Total */}
                                                        <span className="text-sm font-black text-[#171717]">
                                                            ৳
                                                            {item.price *
                                                                item.quantity}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* =====================================================
                    BOTTOM SUMMARY
                ====================================================== */}

                        {cartItems.length > 0 && (
                            <div className="border-t border-[#E1CFC4] bg-white px-5 py-5">

                                {/* ================= DELIVERY LOCATION ================= */}
                                <div className="mb-5">

                                    <p className="mb-3 text-sm font-bold text-[#171717]">
                                        Delivery Location
                                    </p>

                                    <div className="space-y-2">

                                        {/* Inside Chattogram */}
                                        <label
                                            className={`flex cursor-pointer items-center rounded-xl border p-3 transition ${
                                                deliveryLocation ===
                                                "inside"
                                                    ? "border-[#BE2229] bg-[#FCE8E8]"
                                                    : "border-[#E1CFC4] bg-white"
                                            }`}
                                        >
                                            <input
                                                type="radio"
                                                name="deliveryLocation"
                                                value="inside"
                                                checked={
                                                    deliveryLocation ===
                                                    "inside"
                                                }
                                                onChange={() =>
                                                    setDeliveryLocation(
                                                        "inside"
                                                    )
                                                }
                                                className="h-4 w-4 accent-[#BE2229]"
                                            />

                                            <div className="ml-3">
                                                <p className="text-sm font-bold text-gray-800">
                                                    Chattogram-এর ভিতরে
                                                </p>

                                                <p className="mt-0.5 text-xs text-gray-500">
                                                    Delivery Charge: ৳80
                                                </p>
                                            </div>
                                        </label>

                                        {/* Outside Chattogram */}
                                        <label
                                            className={`flex cursor-pointer items-center rounded-xl border p-3 transition ${
                                                deliveryLocation ===
                                                "outside"
                                                    ? "border-[#BE2229] bg-[#FCE8E8]"
                                                    : "border-[#E1CFC4] bg-white"
                                            }`}
                                        >
                                            <input
                                                type="radio"
                                                name="deliveryLocation"
                                                value="outside"
                                                checked={
                                                    deliveryLocation ===
                                                    "outside"
                                                }
                                                onChange={() =>
                                                    setDeliveryLocation(
                                                        "outside"
                                                    )
                                                }
                                                className="h-4 w-4 accent-[#BE2229]"
                                            />

                                            <div className="ml-3">
                                                <p className="text-sm font-bold text-gray-800">
                                                    Chattogram-এর বাইরে
                                                </p>

                                                <p className="mt-0.5 text-xs text-gray-500">
                                                    Delivery Charge: ৳120
                                                </p>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                {/* ================= PRICE SUMMARY ================= */}
                                <div className="mb-4 space-y-2 border-t border-[#E1CFC4] pt-4">

                                    {/* Cart Subtotal */}
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">
                                            Cart Subtotal
                                        </span>

                                        <span className="font-semibold text-gray-800">
                                            ৳{cartTotal}
                                        </span>
                                    </div>

                                    {/* Delivery Charge */}
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">
                                            Delivery Charge
                                        </span>

                                        <span className="font-semibold text-gray-800">
                                            ৳{deliveryCharge}
                                        </span>
                                    </div>

                                    {/* Grand Total */}
                                    <div className="flex items-center justify-between border-t border-[#E1CFC4] pt-3">
                                        <span className="text-base font-black text-[#171717]">
                                            Grand Total
                                        </span>

                                        <span className="text-xl font-black text-[#BE2229]">
                                            ৳{grandTotal}
                                        </span>
                                    </div>
                                </div>

                                {/* ================= WHATSAPP CHECKOUT ================= */}
                                <button
                                    type="button"
                                    onClick={handleWhatsAppCheckout}
                                    className="flex w-full items-center justify-center
                    gap-2 rounded-xl bg-[#25D366]
                    px-5 py-3 font-bold text-white
                    transition hover:bg-[#1DA851]"
                                >
                                    <FiMessageCircle size={18} />

                                    Checkout on WhatsApp
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;