import Image from "next/image";

const ProductCard = ({ product }) => {
  if (!product || !product.image) {
    return null;
  }

  return (
    <div
      key={product.id}
      className="relative bg-white overflow-hidden w-full group"
    >
      <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden xl:aspect-h-8 xl:aspect-w-7">
        <Image
          src={product.image}
          alt={"Product Image"}
          width={300}
          height={300}
        />
      </div>
      <div className="p-2">
        <h3 className="font-lato text-xs sm:text-sm lg:text-lg font-semibold text-primary">
          {product.title}
        </h3>
        <div className="flex gap-2 items-center mt-1">
          <span className="font-lato text-xs sm:text-sm font-bold text-accent">
            ${product.price?.toFixed(2) || "N/A"}
          </span>
          <span className="font-lato text-xs sm:text-sm font-bold text-neutral line-through">
            ${product.oldPrice?.toFixed(2) || "N/A"}
          </span>
        </div>
      </div>
      <div className="absolute top-2 right-[-30px] flex space-x-4 z-10 group-hover:right-2 transition-all duration-300 ease-in-out">
        <div className="flex flex-col justify-center gap-1 items-center ">
          {/* Favorite Icon */}
          <div className="p-[1px] bg-neutral rounded-[3px] border-secondary border-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </div>

          {/* Add to Cart Icon */}
          <div className="p-[1px] bg-neutral rounded-[3px] border-secondary border-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
