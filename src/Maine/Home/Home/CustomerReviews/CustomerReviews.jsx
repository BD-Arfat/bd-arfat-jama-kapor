import React, { useEffect, useState } from "react";
import {
  FiStar,
  FiChevronLeft,
  FiChevronRight,
  FiCheck,
} from "react-icons/fi";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Rahim",
      location: "Chattogram",
      platform: "WhatsApp",
      message:
        "Bhai, t-shirt ta peyechi. Quality onek valo, kapor tao comfortable. Delivery-o onek fast chilo.",
      time: "10:42 AM",
    },
    {
      id: 2,
      name: "Sakib",
      location: "Dhaka",
      platform: "Messenger",
      message:
        "Jersey ta exactly picture er moto peyechi. Size-o perfect hoyeche. Definitely abar order korbo.",
      time: "11:18 AM",
    },
    {
      id: 3,
      name: "Nayeem",
      location: "Cumilla",
      platform: "WhatsApp",
      message:
        "Shirt er quality dekhe honestly surprised. Price onujayi quality khub e valo.",
      time: "12:05 PM",
    },
    {
      id: 4,
      name: "Fahim",
      location: "Sylhet",
      platform: "Messenger",
      message:
        "Bhai delivery khub taratari peyechi. Product quality o excellent. Thank you BDARFATJAMA.",
      time: "1:32 PM",
    },
    {
      id: 5,
      name: "Arman",
      location: "Chattogram",
      platform: "WhatsApp",
      message:
        "Oversized t-shirt ta onek comfortable. Color tao exactly website er moto.",
      time: "2:16 PM",
    },
    {
      id: 6,
      name: "Rafi",
      location: "Dhaka",
      platform: "Messenger",
      message:
        "First time order korlam. Packaging sundor chilo ebong product quality onek bhalo.",
      time: "3:45 PM",
    },
    {
      id: 7,
      name: "Tanvir",
      location: "Narayanganj",
      platform: "WhatsApp",
      message:
        "Pant ta peyechi bhai. Fitting perfect and fabric quality khub comfortable.",
      time: "4:20 PM",
    },
    {
      id: 8,
      name: "Shuvo",
      location: "Rajshahi",
      platform: "Messenger",
      message:
        "Product er quality onek valo. Customer support-o khub helpful chilo.",
      time: "5:10 PM",
    },
    {
      id: 9,
      name: "Hasan",
      location: "Chattogram",
      platform: "WhatsApp",
      message:
        "Overall experience excellent. Quality, price and delivery sob kichu bhalo peyechi.",
      time: "6:28 PM",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Automatically slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const previousReview = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">

          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#EE627D]" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#BE2229]">
              Customer Reviews
            </span>

            <span className="h-[2px] w-8 bg-[#EE627D]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
            What Our{" "}
            <span className="text-[#BE2229]">
              Customers Say
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
            Real feedback from customers who experienced
            BDARFATJAMA products and service.
          </p>

          {/* Rating */}
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="flex gap-1 text-[#EE627D]">
              {[1, 2, 3, 4, 5].map((star) => (
                <FiStar
                  key={star}
                  size={17}
                  fill="currentColor"
                />
              ))}
            </div>

            <span className="text-sm font-bold text-[#171717]">
              5.0
            </span>

            <span className="text-xs text-gray-400">
              Customer Rating
            </span>
          </div>
        </div>

        {/* ================= SLIDER ================= */}
        <div className="relative mx-auto max-w-5xl">

          {/* Cards */}
          <div className="overflow-hidden px-1 py-3">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="w-full flex-shrink-0 px-1 sm:px-3"
                >
                  <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-gray-200 bg-[#f7f7f7] shadow-lg">

                    {/* ================= CHAT HEADER ================= */}
                    <div className="flex items-center justify-between bg-[#171717] px-4 py-4 sm:px-6">

                      <div className="flex items-center gap-3">

                        {/* Avatar */}
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#BE2229] text-sm font-bold text-white">
                          {review.name.charAt(0)}
                        </div>

                        <div>
                          <h3 className="text-sm font-bold text-white">
                            {review.name}
                          </h3>

                          <p className="text-[10px] text-white/60">
                            {review.location} • Online
                          </p>
                        </div>

                      </div>

                      {/* Platform */}
                      <div className="rounded-full bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white">
                        {review.platform}
                      </div>

                    </div>

                    {/* ================= CHAT BODY ================= */}
                    <div className="min-h-[280px] bg-[#efe7df] p-4 sm:min-h-[320px] sm:p-7">

                      {/* Date */}
                      <div className="mb-6 flex justify-center">
                        <span className="rounded-full bg-white/80 px-4 py-1.5 text-[9px] font-medium text-gray-500 shadow-sm">
                          TODAY
                        </span>
                      </div>

                      {/* Incoming Message */}
                      <div className="mb-5 flex items-start gap-2">

                        <div className="max-w-[82%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm">

                          <p className="text-sm leading-6 text-gray-700">
                            Assalamu Alaikum! Product ta peyechi.
                          </p>

                          <div className="mt-1 flex justify-end">
                            <span className="text-[9px] text-gray-400">
                              10:40 AM
                            </span>
                          </div>

                        </div>

                      </div>

                      {/* Customer Message */}
                      <div className="flex justify-end">

                        <div className="max-w-[88%] rounded-2xl rounded-tr-sm bg-[#dcf8c6] px-4 py-3 shadow-sm sm:max-w-[75%]">

                          <p className="text-sm leading-6 text-gray-700">
                            {review.message}
                          </p>

                          <div className="mt-1 flex items-center justify-end gap-1">

                            <span className="text-[9px] text-gray-400">
                              {review.time}
                            </span>

                            <FiCheck
                              size={12}
                              className="text-[#25a7e0]"
                            />

                            <FiCheck
                              size={12}
                              className="-ml-2 text-[#25a7e0]"
                            />

                          </div>

                        </div>

                      </div>

                    </div>

                    {/* ================= REVIEW FOOTER ================= */}
                    <div className="border-t border-gray-200 bg-white px-4 py-4 sm:px-6">

                      <div className="flex items-center justify-between">

                        <div className="flex items-center gap-1">

                          {[1, 2, 3, 4, 5].map((star) => (
                            <FiStar
                              key={star}
                              size={14}
                              fill="currentColor"
                              className="text-[#EE627D]"
                            />
                          ))}

                          <span className="ml-2 text-xs font-bold text-gray-500">
                            Verified Customer
                          </span>

                        </div>

                        <span className="rounded-full bg-[#E1CFC4]/50 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#BE2229]">
                          Review #{review.id}
                        </span>

                      </div>

                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= PREVIOUS ================= */}
          <button
            type="button"
            onClick={previousReview}
            aria-label="Previous review"
            className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#BE2229] shadow-lg transition-all hover:bg-[#BE2229] hover:text-white sm:flex"
          >
            <FiChevronLeft size={20} />
          </button>

          {/* ================= NEXT ================= */}
          <button
            type="button"
            onClick={nextReview}
            aria-label="Next review"
            className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#BE2229] shadow-lg transition-all hover:bg-[#BE2229] hover:text-white sm:flex"
          >
            <FiChevronRight size={20} />
          </button>

        </div>

        {/* ================= DOTS ================= */}
        <div className="mt-7 flex items-center justify-center gap-2">

          {reviews.map((review, index) => (
            <button
              key={review.id}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to review ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-7 bg-[#BE2229]"
                  : "w-2 bg-[#E1CFC4] hover:bg-[#EE627D]"
              }`}
            />
          ))}

        </div>

        {/* ================= BOTTOM TEXT ================= */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400">
            ❤️ Loved by customers across Bangladesh
          </p>
        </div>

      </div>
    </section>
  );
};

export default CustomerReviews;