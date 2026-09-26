import React from 'react';
import bdarfat from '../../assets/bdarfat.png'
import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiChevronDown,
} from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            {/* Navbar */}
            <nav className="sticky top-0 z-50 w-full border-b border-[#E1CFC4]/60 bg-[#FFF9F5]/95 backdrop-blur-md">
                <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                    {/* ================= LOGO ================= */}
                    <a
                        href="/"
                        className="flex items-center shrink-0"
                    >
                        <img
                            src={bdarfat}
                            alt="BDARFATJAMA"
                            className="h-[58px] w-auto object-contain"
                        />
                    </a>

                    {/* ================= DESKTOP MENU ================= */}
                    <div className="hidden lg:flex items-center gap-8">

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

                        {/* Categories */}
                        <div className="group relative">
                            <button
                                onClick={() => setCategoryOpen(!categoryOpen)}
                                className="flex items-center gap-1.5 text-[15px] font-semibold text-gray-800 transition duration-300 hover:text-[#BE2229]"
                            >
                                Categories
                                <FiChevronDown
                                    className={`transition-transform duration-300 ${categoryOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Dropdown */}
                            <div
                                className={`absolute left-1/2 top-[38px] w-52 -translate-x-1/2 rounded-2xl border border-[#E1CFC4] bg-white p-2 shadow-xl transition-all duration-300 ${categoryOpen
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

                    {/* ================= RIGHT SIDE ================= */}
                    <div className="hidden lg:flex items-center gap-3">

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

                        {/* Cart */}
                        <a
                            href="/cart"
                            className="relative flex h-11 w-11 items-center justify-center
              rounded-full bg-[#BE2229] text-white
              shadow-md shadow-[#BE2229]/20
              transition duration-300 hover:scale-105 hover:bg-[#9F1D23]"
                            title="Shopping Cart"
                        >
                            <FiShoppingBag size={20} />

                            {/* Cart Count */}
                            <span
                                className="absolute -right-1 -top-1 flex h-5 min-w-5
                items-center justify-center rounded-full bg-[#EE627D]
                px-1 text-[10px] font-bold text-white ring-2 ring-white"
                            >
                                0
                            </span>
                        </a>

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
                        <a
                            href="/cart"
                            className="relative flex h-10 w-10 items-center justify-center
              rounded-full bg-[#BE2229] text-white"
                        >
                            <FiShoppingBag size={19} />

                            <span
                                className="absolute -right-1 -top-1 flex h-5 min-w-5
                items-center justify-center rounded-full bg-[#EE627D]
                px-1 text-[10px] font-bold ring-2 ring-white"
                            >
                                0
                            </span>
                        </a>

                        {/* Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex h-10 w-10 items-center justify-center
              rounded-full border border-[#E1CFC4]
              text-gray-800 transition hover:bg-[#FCE8E8]"
                        >
                            {isOpen ? <FiX size={23} /> : <FiMenu size={23} />}
                        </button>
                    </div>
                </div>

                {/* ================= MOBILE MENU ================= */}
                <div
                    className={`overflow-hidden border-t border-[#E1CFC4]/50 bg-[#FFF9F5]
          transition-all duration-300 lg:hidden ${isOpen
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
                                    onClick={() => setCategoryOpen(!categoryOpen)}
                                    className="flex w-full items-center justify-between rounded-xl
                  px-4 py-3.5 font-semibold text-gray-800
                  transition hover:bg-[#FCE8E8] hover:text-[#BE2229]"
                                >
                                    Categories

                                    <FiChevronDown
                                        className={`transition-transform duration-300 ${categoryOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`ml-4 overflow-hidden transition-all duration-300 ${categoryOpen
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
        </>
    );
};

export default Navbar;