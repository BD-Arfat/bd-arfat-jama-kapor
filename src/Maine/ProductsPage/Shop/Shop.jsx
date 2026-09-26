import { Link } from "react-router-dom";
import products from "../../../../src/data/products";

const Shop = () => {
  return (
    <section className="bg-[#FFF9F5] py-20">

      <div className="mx-auto max-w-7xl px-4">

        <h2 className="mb-10 text-center text-4xl font-bold">
          Shop Collection
        </h2>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">

          {products.map((product) => (

            <div
              key={product.id}
              className="overflow-hidden rounded-3xl bg-white shadow-md"
            >

              <Link to={`/product/${product.id}`}>

                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-[4/5] w-full object-cover"
                />

              </Link>

              <div className="p-4">

                <p className="text-sm text-gray-500">
                  {product.category}
                </p>

                <Link
                  to={`/product/${product.id}`}
                  className="mt-2 block text-lg font-bold hover:text-red-600"
                >
                  {product.name}
                </Link>

                <div className="mt-3 flex items-center gap-3">

                  <span className="text-xl font-bold text-red-600">
                    ৳{product.price}
                  </span>

                  <span className="text-gray-400 line-through">
                    ৳{product.oldPrice}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Shop;