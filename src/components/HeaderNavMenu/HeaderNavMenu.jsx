"use client";

import {
  HeartIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import {
  MegaMenu,
  MobileSidebar,
  SearchComponent,
  ShoppingCartIcon,
} from "../../components";

const HeaderNavMenu = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const menuRef = useRef(null);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const collapsedMobileMenu = () => setIsOpenMobileMenu(!isOpenMobileMenu);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

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
    {
      id: 1,
      component: <MagnifyingGlassIcon className="h-7 w-7 text-lightPrimary" />,
      label: "Search",
      link: "",
      onClick: () => openSearch(),
    },
    {
      id: 2,
      component: <HeartIcon className="h-7 w-7 text-lightPrimary" />,
      label: "Favorites",
      link: "/favorites",
      onClick: () => console.log("Favorites clicked"),
    },
    {
      id: 3,
      component: <ShoppingCartIcon />,
      label: "Cart",
      link: "/cart",
      onClick: () => console.log("Cart clicked"),
    },
    {
      id: 4,
      component: <UserCircleIcon className="h-7 w-7 text-lightPrimary" />,
      label: "Account",
      link: "/account",
      onClick: () => console.log("Account clicked"),
    },
  ];

  return (
    <>
      {/* Search */}
      <SearchComponent isOpen={isSearchOpen} onClose={closeSearch} />

      {/* MobileSidebar */}
      <MobileSidebar
        collapsed={isOpenMobileMenu}
        onClose={collapsedMobileMenu}
      />

      {/* Header MegaMenu */}
      <MegaMenu
        collapsedMobileMenu={collapsedMobileMenu}
        toggleSubMenu={toggleSubMenu}
        menuRef={menuRef}
        showSubMenu={showSubMenu}
        icons={icons}
      />
    </>
  );
};

export default HeaderNavMenu;
