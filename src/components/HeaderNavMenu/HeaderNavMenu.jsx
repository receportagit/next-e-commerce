"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
} from "react-icons/fa";
import { categories } from "../../lib/categories/categories";

const HeaderNavMenu = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleSubMenu = (id) => {
    setShowSubMenu(showSubMenu === id ? null : id);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setShowSubMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const icons = [
    { id: 1, component: <FaSearch />, label: "Search", link: "/search" },
    { id: 2, component: <FaHeart />, label: "Favorites", link: "/favorites" },
    { id: 3, component: <FaShoppingCart />, label: "Cart", link: "/cart" },
    { id: 4, component: <FaUserCircle />, label: "Account", link: "/account" },
  ];

  return (
    <header>
      <div className="container bg-white dark:bg-dark lg:px-10">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            {/* Logo */}
            <div className="px-4 font-serif text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              <Link href="#" className="block w-full py-5">
                LOGO
              </Link>
            </div>
            {/* MEGA MENU */}
            <div className="flex flex-grow items-center justify-between px-4 font-raleway text-sm font-medium uppercase text-primary">
              <ul className="block lg:flex" ref={menuRef}>
                {categories.map((category) => (
                  <li key={category.id} className="relative">
                    <button
                      onClick={() => toggleSubMenu(category.id)}
                      className="flex w-full items-center justify-between gap-2 py-2 lg:ml-12 lg:inline-flex lg:w-auto lg:justify-center text-lg"
                    >
                      {category.label}
                      <span
                        className={`${
                          showSubMenu === category.id ? "-scale-y-100" : ""
                        } duration-200`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </button>

                    <div
                      className={`w-full rounded-xl bg-white p-2 lg:absolute lg:left-0 lg:top-full lg:w-[630px] lg:p-8 lg:shadow-lg dark:bg-dark transition-all duration-300 ease-in-out ${
                        showSubMenu === category.id
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95"
                      }`}
                    >
                      <div className="grid gap-5 lg:grid-cols-3">
                        {category.subcategories.map((subCategory) => (
                          <div key={subCategory.id}>
                            <h4 className="mb-3 text-sm font-semibold text-dark dark:text-white underline">
                              {subCategory.label}
                            </h4>
                            <div className="flex flex-col space-y-3">
                              {subCategory.children.map((child) => (
                                <a
                                  key={child.id}
                                  href={child.link}
                                  className="text-base font-medium text-body-color hover:text-primary dark:text-dark-6"
                                >
                                  {child.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              {/* İCONS */}
              <div className="flex items-center gap-4">
                {icons.map((icon) => (
                  <div
                    key={icon.id}
                    className="relative group flex flex-col items-center"
                  >
                    {/* İkon */}
                    <a
                      href={icon.link}
                      className="text-2xl hover:text-accent transition-all duration-300"
                      title={icon.label}
                    >
                      {icon.component}
                    </a>
                    {/* İsim */}
                    <span className="absolute bottom-[-1.5rem] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-y-1 bg-black text-white rounded-md px-2 py-1 transition-all duration-300">
                      {icon.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNavMenu;
