"use client";

import { Collapse } from "antd";

const { Panel } = Collapse;

const Product = () => {
  const product = {
    id: 1,
    name: "Black Sweatpants",
    subDescriptions: ["Skinny", "Low Waist", "Wide Leg"],
    description:
      "These black sweatpants are crafted from high-quality cotton fabric, offering maximum comfort and a stylish look. Perfect for casual wear or workouts.",
    price: "$39.99",
    images: [
      "/product/product1.jpg",
      "/product/product2.jpg",
      "/product/product3.jpg",
      "/product/product4.jpg",
      "/product/product5.jpg",
      "/product/product6.jpg",
    ],
    details: [
      "Soft and breathable cotton fabric",
      "Modern and comfortable fit",
      "Elastic waistband with adjustable drawstring",
      "Suitable for everyday wear and sports activities",
    ],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Gray", hex: "#808080" },
      { name: "Navy Blue", hex: "#000080" },
    ],
    sizes: ["S", "M", "L", "XL"],
    additionalInfo: [
      {
        title: "Washing, Care & Information",
        content:
          "Wash at 30°C. Do not use bleach. Prefer low-temperature ironing.",
      },
      { title: "Country of Manufacture", content: "Turkey" },
      { title: "Price Validity Date", content: "19.10.2024" },
      {
        title: "Payment Options",
        content:
          "Credit card, debit card, and cash on delivery options are available.",
      },
      {
        title: "Return & Exchange",
        content:
          "You can return or exchange within 14 days free of charge. Used products cannot be returned.",
      },
    ],
  };

  if (!product) {
    return <div>Ürün bulunamadı</div>;
  }

  return (
    <div className="container px-5 lg:px-10 mb-8">
      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Sol taraf (Resimler) */}
        <div className="col-span-full md:col-span-8 w-full" data-aos="fade-up">
          <div className="grid grid-cols-2 gap-2">
            {/* 2 sütunlu grid ekledik */}
            {product.images.map((img, index) => (
              <div key={index} className="col-span-1">
                <img
                  src={img}
                  alt={`Ürün Resmi ${index + 1}`}
                  className="w-full h-auto border border-gray-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Sağ taraf */}
        <div
          className="col-span-full md:col-span-4 md:sticky top-20 self-start font-lato"
          data-aos="fade-up"
        >
          {/* Ürün Adı */}
          <h2 className="text-2xl font-bold text-secondary m-0 p-0">
            {product.name}
          </h2>
          <p className="text-md text-lightPrimary">
            {product.subDescriptions.join(", ")}
          </p>

          {/* Ürün Fiyatı */}
          <p className="text-xl text-primary font-bold mt-2">{product.price}</p>

          {/* Beden Seçimi */}
          <div className="mt-4">
            <div className="flex gap-2">
              {product.sizes.map((size, index) => (
                <span
                  key={index}
                  className="px-2 py-1 border rounded-md text-secondary hover:bg-gray-200 transition"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Renk Seçimi */}
          <div className="mt-4">
            <div className="flex gap-3">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className={`w-5 h-5 rounded-full border-1 transition `}
                  style={{ backgroundColor: color.hex, cursor: "pointer" }}
                />
              ))}
            </div>
          </div>

          {/* Açıklama */}
          <p className="text-lightPrimary mt-4">{product.description}</p>

          {/* Ürün Özellikleri */}
          <ul className="mt-4 space-y-2">
            {product.details.map((detail, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-lightPrimary"
              >
                ✅ {detail}
              </li>
            ))}
          </ul>

          {/* Sepete Ekle Butonu */}
          <button className="mt-6 w-full bg-secondary hover:bg-lightSecondary text-white font-semibold py-3 rounded-md transition">
            Add to cart
          </button>

          {/* Ekstra Bilgiler - Accordion */}
          <div className="mt-4">
            <Collapse accordion>
              {product.additionalInfo.map((info, index) => (
                <Panel header={info.title} key={index}>
                  <p className="text-md text-secondary">{info.content}</p>
                </Panel>
              ))}
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
