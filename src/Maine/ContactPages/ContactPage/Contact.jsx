import React, { useState } from "react";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiMessageCircle,
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiChevronDown,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  // =========================
  // FORM INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // SEND FORM TO WHATSAPP
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "8801516599295";

    const whatsappMessage = `
Hello BDARFATJAMA,

I would like to contact you.

━━━━━━━━━━━━━━━━━━
CUSTOMER INFORMATION
━━━━━━━━━━━━━━━━━━

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Subject: ${formData.subject}

━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━

${formData.message}

Thank you.
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="bg-[#FFF9F5] text-[#222]">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-[#BE2229]/10 bg-[#E1CFC4]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#BE2229]" />

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#BE2229]">
                  Contact Us
                </p>
              </div>

              <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                Let&apos;s Talk
                <span className="block text-[#BE2229]">
                  With Us.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-700 sm:text-base">
                Have a question about our products, size, delivery or order?
                Feel free to contact us. Our team is always ready to help you.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#BE2229]/30">
                <FiArrowDownRight
                  size={38}
                  className="text-[#BE2229]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          CONTACT INFORMATION
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* CALL */}
          <a
            href="tel:+8801516599295"
            className="group border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#BE2229]"
          >
            <div className="mb-8 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E1CFC4] text-[#BE2229]">
                <FiPhone size={19} />
              </div>

              <FiArrowUpRight
                size={20}
                className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>

            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Call Us
            </p>

            <h3 className="text-lg font-bold">
              01516599295
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Call us for quick support
            </p>
          </a>


          {/* WHATSAPP */}
          <a
            href="https://wa.me/8801516599295"
            target="_blank"
            rel="noreferrer"
            className="group border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#BE2229]"
          >
            <div className="mb-8 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E1CFC4] text-[#BE2229]">
                <FiMessageCircle size={19} />
              </div>

              <FiArrowUpRight
                size={20}
                className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>

            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              WhatsApp
            </p>

            <h3 className="text-lg font-bold">
              Chat With Us
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Get instant assistance
            </p>
          </a>


          {/* EMAIL */}
          <a
            href="mailto:support@bdarfatjama.com"
            className="group border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#BE2229]"
          >
            <div className="mb-8 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E1CFC4] text-[#BE2229]">
                <FiMail size={19} />
              </div>

              <FiArrowUpRight
                size={20}
                className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>

            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Email Us
            </p>

            <h3 className="break-all text-base font-bold sm:text-lg">
              support@bdarfatjama.com
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Send us an email anytime
            </p>
          </a>


          {/* LOCATION */}
          <div className="group border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#BE2229]">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E1CFC4] text-[#BE2229]">
                <FiMapPin size={19} />
              </div>

              <FiArrowUpRight size={20} />
            </div>

            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Our Location
            </p>

            <h3 className="text-lg font-bold">
              Chattogram, Bangladesh
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Serving customers across Bangladesh
            </p>
          </div>

        </div>
      </section>


      {/* =====================================================
          WHATSAPP QUICK SUPPORT
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden bg-[#BE2229] px-6 py-8 text-white sm:px-10 sm:py-10">

          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/20" />
          <div className="absolute -bottom-16 right-24 h-44 w-44 rounded-full border border-white/10" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#BE2229]">
                <FiMessageCircle size={22} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                  Quick Support
                </p>

                <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                  Need help right now?
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-white/80">
                  Chat directly with us on WhatsApp and get quick assistance
                  about your order or products.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/8801516599295"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-bold text-[#BE2229] transition duration-300 hover:bg-[#222] hover:text-white"
            >
              Chat on WhatsApp

              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>
        </div>
      </section>


      {/* =====================================================
          CONTACT FORM
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">

          {/* FORM */}
          <div>
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#BE2229]" />

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#BE2229]">
                  Send A Message
                </p>
              </div>

              <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
                Tell Us
                <span className="text-[#BE2229]"> What You Need.</span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600">
                Fill out the form below and click the button. Your message
                will open directly in WhatsApp so our team can respond to you.
              </p>
            </div>


            <form
              onSubmit={handleSubmit}
              className="border border-gray-200 bg-[#FFF9F5] p-5 sm:p-8"
            >

              {/* NAME + PHONE */}
              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-700"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#BE2229]"
                  />
                </div>


                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="01XXXXXXXXX"
                    required
                    className="w-full border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#BE2229]"
                  />
                </div>

              </div>


              {/* EMAIL + SUBJECT */}
              <div className="mt-5 grid gap-5 md:grid-cols-2">

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#BE2229]"
                  />
                </div>


                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-700"
                  >
                    Subject
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#BE2229]"
                  >
                    <option value="">
                      Select a subject
                    </option>

                    <option value="Order Related">
                      Order Related
                    </option>

                    <option value="Product Information">
                      Product Information
                    </option>

                    <option value="Size & Color">
                      Size & Color
                    </option>

                    <option value="Delivery">
                      Delivery
                    </option>

                    <option value="Exchange / Return">
                      Exchange / Return
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

              </div>


              {/* MESSAGE */}
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-700"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#BE2229]"
                />
              </div>


              {/* SUBMIT */}
              <button
                type="submit"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 bg-[#BE2229] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#222]"
              >
                Send Message

                <FiSend
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <p className="mt-3 text-center text-xs text-gray-500">
                Clicking &quot;Send Message&quot; will open WhatsApp with your
                message.
              </p>

            </form>
          </div>


          {/* BUSINESS INFORMATION */}
          <div className="lg:pt-16">

            <div className="bg-[#E1CFC4] p-6 sm:p-8">

              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#BE2229] text-white">
                <FiClock size={21} />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#BE2229]">
                Business Hours
              </p>

              <h3 className="mt-2 text-2xl font-black uppercase">
                We&apos;re Here To Help
              </h3>

              <div className="mt-7 space-y-4">

                <div className="flex items-center justify-between border-b border-black/10 pb-4">
                  <span className="text-sm font-medium">
                    Saturday - Thursday
                  </span>

                  <span className="text-sm font-bold">
                    9:00 AM - 9:00 PM
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-black/10 pb-4">
                  <span className="text-sm font-medium">
                    Friday
                  </span>

                  <span className="text-sm font-bold text-[#BE2229]">
                    Closed
                  </span>
                </div>

              </div>

              <div className="mt-7 border-l-2 border-[#BE2229] pl-4">
                <p className="text-sm leading-6 text-gray-700">
                  For urgent order support, you can always contact us directly
                  through WhatsApp.
                </p>
              </div>

            </div>


            {/* PHONE CARD */}
            <a
              href="tel:+8801516599295"
              className="mt-4 flex items-center justify-between border border-gray-200 bg-white p-5 transition duration-300 hover:border-[#BE2229]"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E1CFC4] text-[#BE2229]">
                  <FiPhone size={18} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Call
                  </p>

                  <p className="mt-1 font-bold">
                    01516599295
                  </p>
                </div>

              </div>

              <FiArrowUpRight size={19} />
            </a>


            {/* WHATSAPP CARD */}
            <a
              href="https://wa.me/8801516599295"
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center justify-between border border-gray-200 bg-white p-5 transition duration-300 hover:border-[#BE2229]"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E1CFC4] text-[#BE2229]">
                  <FiMessageCircle size={18} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    WhatsApp
                  </p>

                  <p className="mt-1 font-bold">
                    01516599295
                  </p>
                </div>

              </div>

              <FiArrowUpRight size={19} />
            </a>

          </div>

        </div>
      </section>


      {/* =====================================================
          FAQ SECTION
      ====================================================== */}
      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-20">

          <div className="mx-auto mb-10 max-w-2xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#BE2229]">
              FAQ
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase sm:text-5xl">
              Frequently Asked
              <span className="text-[#BE2229]"> Questions</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Here are some common questions our customers ask.
            </p>

          </div>


          <div className="space-y-3">

            {/* FAQ 1 */}
            <details className="group border border-gray-200 bg-[#FFF9F5]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 font-bold sm:p-6">
                <span>
                  How can I place an order?
                </span>

                <FiChevronDown
                  size={20}
                  className="shrink-0 transition-transform duration-300 group-open:rotate-180"
                />
              </summary>

              <div className="border-t border-gray-200 px-5 pb-5 pt-4 text-sm leading-7 text-gray-600 sm:px-6 sm:pb-6">
                You can select your favorite product, choose the required
                size and quantity, and then contact us through WhatsApp to
                confirm your order.
              </div>
            </details>


            {/* FAQ 2 */}
            <details className="group border border-gray-200 bg-[#FFF9F5]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 font-bold sm:p-6">
                <span>
                  How long does delivery take?
                </span>

                <FiChevronDown
                  size={20}
                  className="shrink-0 transition-transform duration-300 group-open:rotate-180"
                />
              </summary>

              <div className="border-t border-gray-200 px-5 pb-5 pt-4 text-sm leading-7 text-gray-600 sm:px-6 sm:pb-6">
                Delivery time may vary depending on your location. Our team
                will provide you with the expected delivery time when
                confirming your order.
              </div>
            </details>


            {/* FAQ 3 */}
            <details className="group border border-gray-200 bg-[#FFF9F5]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 font-bold sm:p-6">
                <span>
                  Can I change my size or color?
                </span>

                <FiChevronDown
                  size={20}
                  className="shrink-0 transition-transform duration-300 group-open:rotate-180"
                />
              </summary>

              <div className="border-t border-gray-200 px-5 pb-5 pt-4 text-sm leading-7 text-gray-600 sm:px-6 sm:pb-6">
                Yes, if your order has not been processed yet, you can contact
                us through WhatsApp and request a size or color change.
              </div>
            </details>


            {/* FAQ 4 */}
            <details className="group border border-gray-200 bg-[#FFF9F5]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 font-bold sm:p-6">
                <span>
                  How can I contact BDARFATJAMA?
                </span>

                <FiChevronDown
                  size={20}
                  className="shrink-0 transition-transform duration-300 group-open:rotate-180"
                />
              </summary>

              <div className="border-t border-gray-200 px-5 pb-5 pt-4 text-sm leading-7 text-gray-600 sm:px-6 sm:pb-6">
                You can call or WhatsApp us directly at 01516599295. You can
                also use the contact form on this page.
              </div>
            </details>

          </div>

        </div>
      </section>


      {/* =====================================================
          SOCIAL CTA
      ====================================================== */}
      <section className="bg-[#222] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#EE627D]">
                Stay Connected
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-black uppercase leading-tight sm:text-5xl">
                Follow BDARFATJAMA
                <span className="text-[#EE627D]"> Online.</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                Stay updated with our latest products, new collections,
                offers and announcements.
              </p>
            </div>


            <div className="flex flex-wrap gap-3">

              {/* FACEBOOK */}
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center border border-white/20 transition duration-300 hover:border-[#EE627D] hover:bg-[#EE627D]"
                aria-label="Facebook"
              >
                <FiFacebook size={19} />
              </a>


              {/* INSTAGRAM */}
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center border border-white/20 transition duration-300 hover:border-[#EE627D] hover:bg-[#EE627D]"
                aria-label="Instagram"
              >
                <FiInstagram size={19} />
              </a>


              {/* WHATSAPP */}
              <a
                href="https://wa.me/8801516599295"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center border border-white/20 transition duration-300 hover:border-[#EE627D] hover:bg-[#EE627D]"
                aria-label="WhatsApp"
              >
                <FiMessageCircle size={19} />
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Contact;