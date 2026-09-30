
import { useState } from "react";
import { ImageOff, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const ProductGallery = ({
  product,
  selectedImage,
  setSelectedImage,
}) => {
  const images =
    product.images?.length > 0
      ? product.images
      : [product.image].filter(Boolean);

  const [isZoomed, setIsZoomed] = useState(false);

  const currentIndex = Math.max(
    images.indexOf(selectedImage),
    0
  );

  const handlePrevious = () => {
    if (images.length <= 1) return;

    const previousIndex =
      currentIndex === 0
        ? images.length - 1
        : currentIndex - 1;

    setSelectedImage(images[previousIndex]);
  };

  const handleNext = () => {
    if (images.length <= 1) return;

    const nextIndex =
      currentIndex === images.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedImage(images[nextIndex]);
  };

  return (
    <div className="w-full">

      {/* ================= MAIN IMAGE ================= */}
      <div className="group relative overflow-hidden rounded-[28px] bg-[#F3EDE8]">

        {selectedImage ? (
          <div className="relative">

            <img
              src={selectedImage}
              alt={product.name}
              className={`h-[420px] w-full object-cover transition duration-700 sm:h-[520px] lg:h-[620px] ${
                isZoomed
                  ? "scale-110 cursor-zoom-out"
                  : "cursor-zoom-in group-hover:scale-[1.03]"
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />

            {/* ================= IMAGE COUNT ================= */}
            {images.length > 1 && (
              <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1.5 text-[10px] font-semibold tracking-wider text-white backdrop-blur-sm">
                {currentIndex + 1} / {images.length}
              </div>
            )}

            {/* ================= ZOOM BUTTON ================= */}
            <button
              type="button"
              onClick={() => setIsZoomed(!isZoomed)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#222] shadow-md backdrop-blur-sm transition hover:bg-[#BE2229] hover:text-white"
              aria-label="Zoom image"
            >
              <Maximize2 size={17} />
            </button>


            {/* ================= PREVIOUS ================= */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#222] opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-[#BE2229] hover:text-white group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
            )}


            {/* ================= NEXT ================= */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#222] opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-[#BE2229] hover:text-white group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            )}

          </div>
        ) : (
          /* ================= NO IMAGE ================= */
          <div className="flex h-[420px] items-center justify-center text-gray-400 sm:h-[520px] lg:h-[620px]">
            <div className="text-center">

              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white">
                <ImageOff size={30} />
              </div>

              <p className="text-sm">
                No image available
              </p>

            </div>
          </div>
        )}

      </div>


      {/* ================= THUMBNAILS ================= */}
      {images.length > 1 && (
        <div className="mt-5">

          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">

            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => {
                  setSelectedImage(image);
                  setIsZoomed(false);
                }}
                className={`group relative h-[78px] w-[68px] shrink-0 overflow-hidden rounded-xl bg-[#F3EDE8] transition-all duration-300 sm:h-[88px] sm:w-[76px] ${
                  selectedImage === image
                    ? "ring-2 ring-[#BE2229] ring-offset-2"
                    : "opacity-70 hover:opacity-100"
                }`}
              >

                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />

                {/* Active overlay */}
                {selectedImage === image && (
                  <span className="absolute inset-0 bg-[#BE2229]/10" />
                )}

              </button>
            ))}

          </div>

        </div>
      )}

    </div>
  );
};

export default ProductGallery;
