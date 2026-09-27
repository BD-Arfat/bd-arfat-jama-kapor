import React from 'react';
import logo from '../../assets/bdarfat.jpeg';
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowRight,
  FiHeart,
} from "react-icons/fi";

const Footar = () => {
    return (
        <footer className="relative overflow-hidden bg-[#171717] text-white">

            {/* Decorative Background */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#BE2229]/20 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#EE627D]/10 blur-3xl" />

            {/* ================= MAIN FOOTER ================= */}
            <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* ================= BRAND ================= */}
                    <div className="lg:col-span-1">

                        <a href="/" className="inline-block">
                            <img
                                src={logo}
                                alt="BDARFATJAMA"
                                className="h-20 w-auto object-contain"
                            />
                        </a>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
                            Discover your perfect style with ZYRQON FITS.
                            Quality clothing, modern designs, and everyday comfort
                            made for your lifestyle.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-6 flex items-center gap-3">

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full
                border border-white/10 bg-white/5
                transition duration-300 hover:-translate-y-1
                hover:border-[#BE2229] hover:bg-[#BE2229]"
                            >
                                <FiFacebook size={18} />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full
                border border-white/10 bg-white/5
                transition duration-300 hover:-translate-y-1
                hover:border-[#EE627D] hover:bg-[#EE627D]"
                            >
                                <FiInstagram size={18} />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full
                border border-white/10 bg-white/5
                transition duration-300 hover:-translate-y-1
                hover:border-[#BE2229] hover:bg-[#BE2229]"
                            >
                                <FiTwitter size={18} />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full
                border border-white/10 bg-white/5
                transition duration-300 hover:-translate-y-1
                hover:border-[#BE2229] hover:bg-[#BE2229]"
                            >
                                <FiYoutube size={18} />
                            </a>

                        </div>
                    </div>

                    {/* ================= QUICK LINKS ================= */}
                    <div>

                        <h3 className="relative inline-block text-lg font-bold">
                            Quick Links

                            <span className="absolute -bottom-2 left-0 h-[2px] w-8 bg-[#EE627D]" />
                        </h3>

                        <ul className="mt-7 space-y-4">

                            <li>
                                <a
                                    href="/"
                                    className="group flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                                >
                                    <FiArrowRight
                                        className="text-[#EE627D] transition-transform group-hover:translate-x-1"
                                    />
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/shop"
                                    className="group flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                                >
                                    <FiArrowRight
                                        className="text-[#EE627D] transition-transform group-hover:translate-x-1"
                                    />
                                    Shop
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/about"
                                    className="group flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                                >
                                    <FiArrowRight
                                        className="text-[#EE627D] transition-transform group-hover:translate-x-1"
                                    />
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/contact"
                                    className="group flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                                >
                                    <FiArrowRight
                                        className="text-[#EE627D] transition-transform group-hover:translate-x-1"
                                    />
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/cart"
                                    className="group flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                                >
                                    <FiArrowRight
                                        className="text-[#EE627D] transition-transform group-hover:translate-x-1"
                                    />
                                    Shopping Cart
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* ================= CATEGORIES ================= */}
                    <div>

                        <h3 className="relative inline-block text-lg font-bold">
                            Categories

                            <span className="absolute -bottom-2 left-0 h-[2px] w-8 bg-[#EE627D]" />
                        </h3>

                        <ul className="mt-7 space-y-4">

                            <li>
                                <a
                                    href="/category/tshirts"
                                    className="group flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                                >
                                    <FiArrowRight
                                        className="text-[#EE627D] transition-transform group-hover:translate-x-1"
                                    />
                                    T-Shirts
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/category/shirts"
                                    className="group flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                                >
                                    <FiArrowRight
                                        className="text-[#EE627D] transition-transform group-hover:translate-x-1"
                                    />
                                    Shirts
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/category/jerseys"
                                    className="group flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                                >
                                    <FiArrowRight
                                        className="text-[#EE627D] transition-transform group-hover:translate-x-1"
                                    />
                                    Jerseys
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/category/pants"
                                    className="group flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                                >
                                    <FiArrowRight
                                        className="text-[#EE627D] transition-transform group-hover:translate-x-1"
                                    />
                                    Pants
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/category/new-arrivals"
                                    className="group flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                                >
                                    <FiArrowRight
                                        className="text-[#EE627D] transition-transform group-hover:translate-x-1"
                                    />
                                    New Arrivals
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* ================= CONTACT ================= */}
                    <div>

                        <h3 className="relative inline-block text-lg font-bold">
                            Get In Touch

                            <span className="absolute -bottom-2 left-0 h-[2px] w-8 bg-[#EE627D]" />
                        </h3>

                        <div className="mt-7 space-y-5">

                            {/* Address */}
                            <div className="flex items-start gap-3">

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#BE2229]/15 text-[#EE627D]">
                                    <FiMapPin size={19} />
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        Address
                                    </p>

                                    <p className="mt-1 text-sm leading-6 text-gray-400">
                                        Chattogram, Bangladesh
                                    </p>
                                </div>

                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-3">

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#BE2229]/15 text-[#EE627D]">
                                    <FiPhone size={18} />
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        Phone
                                    </p>

                                    <a
                                        href="tel:+8801XXXXXXXXX"
                                        className="mt-1 block text-sm text-gray-400 transition hover:text-white"
                                    >
                                        +880 1XXX-XXXXXX
                                    </a>
                                </div>

                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-3">

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#BE2229]/15 text-[#EE627D]">
                                    <FiMail size={18} />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        Email
                                    </p>

                                    <a
                                        href="mailto:info@bdarfatjama.com"
                                        className="mt-1 block truncate text-sm text-gray-400 transition hover:text-white"
                                    >
                                        info@Zyrqon-fits.com
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                {/* ================= NEWSLETTER ================= */}
                <div
                    className="mt-14 rounded-3xl border border-white/10
          bg-white/[0.04] p-6 sm:p-8"
                >

                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                        <div>
                            <h3 className="text-xl font-bold sm:text-2xl">
                                Stay Updated With Our Latest Styles
                            </h3>

                            <p className="mt-2 text-sm text-gray-400">
                                Get updates about new products, offers and exclusive deals.
                            </p>
                        </div>

                        {/* Newsletter Form */}
                        <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">

                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="h-12 flex-1 rounded-xl border border-white/10
                bg-white/5 px-4 text-sm text-white outline-none
                placeholder:text-gray-500
                transition focus:border-[#EE627D]"
                            />

                            <button
                                type="submit"
                                className="h-12 rounded-xl bg-[#BE2229]
                px-6 text-sm font-bold text-white
                transition duration-300
                hover:bg-[#9F1D23] hover:shadow-lg
                hover:shadow-[#BE2229]/20"
                            >
                                Subscribe
                            </button>

                        </form>

                    </div>
                </div>

                {/* ================= BOTTOM ================= */}
                <div className="mt-10 border-t border-white/10 pt-6">

                    <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">

                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()}{" "}
                            <span className="font-semibold text-gray-300">
                                ZYRQON FITS
                            </span>
                            . All rights reserved.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-500">

                            <a
                                href="/privacy-policy"
                                className="transition hover:text-white"
                            >
                                Privacy Policy
                            </a>

                            <span className="h-4 w-px bg-white/10" />

                            <a
                                href="/terms"
                                className="transition hover:text-white"
                            >
                                Terms & Conditions
                            </a>

                        </div>

                    </div>

                    {/* Made With Love */}
                    <div className="mt-5 flex items-center justify-center gap-1 text-xs text-gray-600">

                        Made with
                        <FiHeart
                            size={12}
                            className="fill-[#EE627D] text-[#EE627D]"
                        />
                        for fashion lovers

                    </div>

                </div>

            </div>

            {/* Bottom Gradient Line */}
            <div className="h-1 w-full bg-gradient-to-r from-[#BE2229] via-[#EE627D] to-[#BE2229]" />

        </footer>
    );
};

export default Footar;