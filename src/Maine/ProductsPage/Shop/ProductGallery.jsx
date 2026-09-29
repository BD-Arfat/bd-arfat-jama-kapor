import { ImageOff } from "lucide-react";

const ProductGallery = ({
  product,
  selectedImage,
  setSelectedImage,
}) => {
  const images =
    product.images?.length > 0
      ? product.images
      : [product.image].filter(Boolean);

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt={product.name}
            className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[600px]"
          />
        ) : (
          <div className="flex h-[400px] items-center justify-center text-gray-400 sm:h-[500px]">
            <ImageOff size={50} />
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              onClick={() => setSelectedImage(image)}
              className={`h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition ${
                selectedImage === image
                  ? "border-[#BE2229]"
                  : "border-transparent"
              }`}
            >
              <img
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;