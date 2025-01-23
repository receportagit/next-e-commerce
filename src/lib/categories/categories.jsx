export const categories = [
  {
    id: 1,
    label: "MEN",
    link: "/men",
    subcategories: [
      {
        id: 101,
        label: "Clothing",
        link: "/men/clothing",
        children: [
          { id: 1011, label: "T-Shirts", link: "/men/clothing/tshirts" },
          { id: 1012, label: "Jeans", link: "/men/clothing/jeans" },
          { id: 1013, label: "Jackets", link: "/men/clothing/jackets" },
          { id: 1014, label: "Suits", link: "/men/clothing/suits" },
        ],
      },
      {
        id: 102,
        label: "Shoes",
        link: "/men/shoes",
        children: [
          { id: 1021, label: "Sneakers", link: "/men/shoes/sneakers" },
          { id: 1022, label: "Formal Shoes", link: "/men/shoes/formal" },
          { id: 1023, label: "Boots", link: "/men/shoes/boots" },
          { id: 1024, label: "Sandals", link: "/men/shoes/sandals" },
        ],
      },
      {
        id: 103,
        label: "Accessories",
        link: "/men/accessories",
        children: [
          { id: 1031, label: "Watches", link: "/men/accessories/watches" },
          {
            id: 1032,
            label: "Sunglasses",
            link: "/men/accessories/sunglasses",
          },
          { id: 1033, label: "Belts", link: "/men/accessories/belts" },
          { id: 1034, label: "Hats", link: "/men/accessories/hats" },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "WOMEN",
    link: "/women",
    subcategories: [
      {
        id: 201,
        label: "Clothing",
        link: "/women/clothing",
        children: [
          { id: 2011, label: "Dresses", link: "/women/clothing/dresses" },
          { id: 2012, label: "Tops", link: "/women/clothing/tops" },
          { id: 2013, label: "Skirts", link: "/women/clothing/skirts" },
          { id: 2014, label: "Outerwear", link: "/women/clothing/outerwear" },
        ],
      },
      {
        id: 202,
        label: "Shoes",
        link: "/women/shoes",
        children: [
          { id: 2021, label: "Heels", link: "/women/shoes/heels" },
          { id: 2022, label: "Flats", link: "/women/shoes/flats" },
          { id: 2023, label: "Boots", link: "/women/shoes/boots" },
          { id: 2024, label: "Sandals", link: "/women/shoes/sandals" },
        ],
      },
      {
        id: 203,
        label: "Accessories",
        link: "/women/accessories",
        children: [
          { id: 2031, label: "Jewelry", link: "/women/accessories/jewelry" },
          { id: 2032, label: "Bags", link: "/women/accessories/bags" },
          { id: 2033, label: "Scarves", link: "/women/accessories/scarves" },
          { id: 2034, label: "Hats", link: "/women/accessories/hats" },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "CHILDREN",
    link: "/children",
    subcategories: [
      {
        id: 301,
        label: "Clothing",
        link: "/children/clothing",
        children: [
          { id: 3011, label: "T-Shirts", link: "/children/clothing/tshirts" },
          { id: 3012, label: "Jeans", link: "/children/clothing/jeans" },
          { id: 3013, label: "Dresses", link: "/children/clothing/dresses" },
        ],
      },
      {
        id: 302,
        label: "Shoes",
        link: "/children/shoes",
        children: [
          { id: 3021, label: "Sneakers", link: "/children/shoes/sneakers" },
          { id: 3022, label: "Boots", link: "/children/shoes/boots" },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "ACCESSORIES",
    link: "/accessories",
    subcategories: [
      {
        id: 401,
        label: "Bags",
        link: "/accessories/bags",
        children: [
          { id: 4011, label: "Backpacks", link: "/accessories/bags/backpacks" },
          { id: 4012, label: "Handbags", link: "/accessories/bags/handbags" },
        ],
      },
      {
        id: 402,
        label: "Jewelry",
        link: "/accessories/jewelry",
        children: [
          {
            id: 4021,
            label: "Earrings",
            link: "/accessories/jewelry/earrings",
          },
          {
            id: 4022,
            label: "Necklaces",
            link: "/accessories/jewelry/necklaces",
          },
        ],
      },
    ],
  },
];
