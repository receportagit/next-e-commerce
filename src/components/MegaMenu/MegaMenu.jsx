import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Logo } from "../../components";
import { categories } from "../../lib/categories/categories";
import { useScroll } from "./../../hooks/useScroll";

const MegaMenu = ({
  collapsedMobileMenu,
  toggleSubMenu,
  menuRef,
  showSubMenu,
  icons,
}) => {
  const scrollY = useScroll();

  return (
    <div
      className={`bg-white
      ${scrollY > 150 ? "fixed top-0 left-0 w-full z-40 shadow-md" : null}`}
    >
      <div className="container px-5 lg:px-20 flex items-center justify-between py-4">
        <div className="lg:hidden">
          <Bars3Icon
            className="h-7 w-7 text-lightPrimary"
            onClick={collapsedMobileMenu}
          />
        </div>

        {/* LOGO */}
        <Logo />
        {/* MEGA MENU AND ICONS */}
        <div className="flex items-center justify-end lg:justify-between lg:flex-grow gap-4">
          {/* MEGA MENU */}
          <div className="hidden lg:flex ml-14" ref={menuRef}>
            {categories.map((category) => (
              <li key={category.id} className="relative">
                <button
                  onClick={() => toggleSubMenu(category.id)}
                  className="flex w-full items-center justify-between font-raleway font-bold text-lightPrimary gap-2 py-2 lg:ml-10  lg:w-auto lg:justify-center text-lg hover:text-accent transition-all duration-300"
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
                  className={`w-full border border-neutral bg-white p-2 lg:absolute lg:left-0 lg:top-full lg:w-[800px] lg:p-8 lg:shadow-lg transition-all duration-300 ease-in-out ${
                    showSubMenu === category.id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                  style={{ zIndex: 2 }}
                >
                  <div className="grid gap-5 lg:grid-cols-3">
                    {category.subcategories.map((subCategory) => (
                      <div key={subCategory.id}>
                        <h4 className="mb-4 uppercase font-raleway font-bold text-lightPrimary">
                          {subCategory.label}
                        </h4>
                        <div className="flex flex-col space-y-3 font-sans font-semibold text-lightSecondary">
                          {subCategory.children.map((child) => (
                            <Link key={child.id} href={child.link}>
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </div>

          {/* ICONS */}
          <div className="flex items-center gap-4">
            {icons.map((icon) => (
              <div
                key={icon.id}
                className="relative group flex flex-col items-center"
                onClick={icon.onClick}
              >
                <Link
                  href={icon.link}
                  className="hover:text-accent transition-all duration-300"
                  title={icon.label}
                >
                  {icon.component}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
