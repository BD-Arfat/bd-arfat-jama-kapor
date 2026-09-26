import {
  FiArrowUpRight,
  FiStar,
  FiShoppingBag,
} from "react-icons/fi";

const ShopByCategory = () => {
  const categories = [
    {
      id: 1,
      name: "T-Shirts",
      subtitle: "Everyday Comfort",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
      link: "/category/tshirts",
      icon: <FiShoppingBag />,
    },

    {
      id: 2,
      name: "Shirts",
      subtitle: "Classic & Modern",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85",
      link: "/category/shirts",
      icon: <FiShoppingBag />,
    },

    {
      id: 3,
      name: "Jerseys",
      subtitle: "For Every Game",
      image:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85",
      link: "/category/jerseys",
      icon: <FiStar />,
    },

    {
      id: 4,
      name: "Pants",
      subtitle: "Style Meets Comfort",
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85",
      link: "/category/pants",
      icon: <FiShoppingBag />,
    },

    {
      id: 5,
      name: "New Arrivals",
      subtitle: "Fresh From The Rack",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=85",
      link: "/category/new-arrivals",
      icon: <FiStar />,
      badge: "NEW",
    },

    {
      id: 6,
      name: "Best Sellers",
      subtitle: "Customer Favorites",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
      link: "/category/best-sellers",
      icon: <FiStar />,
      badge: "POPULAR",
    },
  ];

  return (
    <section className="bg-[#FFF9F5] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-10 text-center sm:mb-12">

          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#EE627D]" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#BE2229]">
              Explore Collection
            </span>

            <span className="h-[2px] w-8 bg-[#EE627D]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
            Shop By{" "}
            <span className="text-[#BE2229]">
              Category
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Find your perfect style from our carefully selected
            collection of quality clothing made for every occasion.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">

          {categories.map((category) => (
            <a
              key={category.id}
              href={category.link}
              className="group relative block overflow-hidden rounded-2xl
              bg-gray-200 shadow-sm transition-all duration-500
              hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl"
            >

              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/4.7]">

                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="h-full w-full object-cover
                  transition duration-700
                  group-hover:scale-110"
                />

                {/* Gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-t
                  from-black/80 via-black/20 to-transparent"
                />

                {/* Badge */}
                {category.badge && (
                  <div
                    className="absolute left-3 top-3 rounded-full
                    bg-[#BE2229] px-3 py-1.5 text-[9px]
                    font-bold tracking-wider text-white shadow-lg
                    sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-[10px]"
                  >
                    {category.badge}
                  </div>
                )}

                {/* Arrow */}
                <div
                  className="absolute right-3 top-3 flex h-9 w-9
                  items-center justify-center rounded-full
                  bg-white/90 text-[#BE2229]
                  transition duration-500
                  group-hover:rotate-45
                  sm:right-5 sm:top-5 sm:h-11 sm:w-11"
                >
                  <FiArrowUpRight size={19} />
                </div>

                {/* Content */}
                <div
                  className="absolute inset-x-0 bottom-0 p-4
                  sm:p-6 lg:p-7"
                >

                  <div
                    className="mb-2 flex h-8 w-8 items-center
                    justify-center rounded-full bg-[#EE627D]
                    text-white sm:h-9 sm:w-9"
                  >
                    {category.icon}
                  </div>

                  <h3
                    className="text-xl font-extrabold text-white
                    sm:text-2xl lg:text-3xl"
                  >
                    {category.name}
                  </h3>

                  <p
                    className="mt-1 text-[10px] font-medium
                    uppercase tracking-wider text-white/75 sm:text-xs"
                  >
                    {category.subtitle}
                  </p>

                  <div
                    className="mt-3 flex items-center gap-2
                    text-xs font-bold text-white sm:mt-4 sm:text-sm"
                  >
                    <span>Shop Now</span>

                    <span
                      className="h-px w-6 bg-[#EE627D]
                      transition-all duration-300
                      group-hover:w-10"
                    />
                  </div>

                </div>
              </div>
            </a>
          ))}

        </div>

        {/* View All */}
        <div className="mt-10 flex justify-center sm:mt-12">

          <a
            href="/shop"
            className="group flex items-center gap-3 rounded-full
            border-2 border-[#BE2229] px-7 py-3 text-sm font-bold
            text-[#BE2229] transition-all duration-300
            hover:bg-[#BE2229] hover:text-white
            sm:px-9 sm:py-3.5"
          >
            View All Products

            <FiArrowUpRight
              size={18}
              className="transition-transform duration-300
              group-hover:rotate-45"
            />
          </a>

        </div>

      </div>
    </section>
  );
};

export default ShopByCategory;