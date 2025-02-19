import Image from "next/image";

export default function Section5() {
  return (
    <div data-aos="fade-up" className="mb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        <div
          className={`relative w-full overflow-hidden col-span-1 md:col-span-2 group`}
        >
          <Image
            priority
            src="/galery/galery1.jpg"
            alt="Ürün Resmi"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-40" />
        </div>
        <div
          className={`relative w-full overflow-hidden col-span-1 md:col-span-2 group`}
        >
          <Image
            priority
            src="/galery/galery2.jpg"
            alt="Ürün Resmi"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
          />{" "}
          <div className="absolute inset-0 bg-black opacity-40" />
        </div>
        <div
          className={`relative w-full overflow-hidden col-span-1 md:col-span-1 group`}
        >
          <Image
            priority
            src="/galery/galery3.jpg"
            alt="Ürün Resmi"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
          />{" "}
          <div className="absolute inset-0 bg-black opacity-40" />
        </div>
        <div
          className={`relative w-full overflow-hidden col-span-1 md:col-span-1 group`}
        >
          <Image
            priority
            src="/galery/galery4.jpg"
            alt="Ürün Resmi"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
          />{" "}
          <div className="absolute inset-0 bg-black opacity-40" />
        </div>
        <div
          className={`relative w-full overflow-hidden col-span-1 md:col-span-1 group`}
        >
          <Image
            priority
            src="/galery/galery5.jpg"
            alt="Ürün Resmi"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
          />{" "}
          <div className="absolute inset-0 bg-black opacity-40" />
        </div>
        <div
          className={`relative w-full overflow-hidden col-span-1 md:col-span-1 group`}
        >
          <Image
            priority
            src="/galery/galery6.jpg"
            alt="Ürün Resmi"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
          />{" "}
          <div className="absolute inset-0 bg-black opacity-40" />
        </div>
      </div>
    </div>
  );
}
