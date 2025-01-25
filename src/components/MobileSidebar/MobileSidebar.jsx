import { XMarkIcon } from "@heroicons/react/24/outline";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import Logo from "../Logo/Logo";
import { categories } from "../../lib/categories/categories";

const MobileSidebar = ({ collapsed = true, onClose }) => {
  return (
    <Sidebar
      collapsed={!collapsed}
      collapsedWidth={0}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        zIndex: 60,
        borderRightWidth: 0,
      }}
      className="bg-lightSecondary lg:hidden font-raleway text-sm font-bold text-light uppercase"
      backgroundColor="bg-lightSecondary"
    >
      <div className="flex justify-between items-center p-4 bg-light">
        <Logo />
        <button
          onClick={onClose}
          className="text-lightPrimary hover:text-black"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>
      <Menu>
        {categories.map((category, indexOf) => {
          return category.subcategories ? (
            <SubMenu
              key={indexOf}
              className="bg-lightSecondary"
              label={category.label}
            >
              {category.subcategories.map((subcategory, indexSubOf) => {
                return subcategory.children?.length > 0 ? (
                  <SubMenu
                    key={indexSubOf}
                    className="bg-lightSecondary"
                    label={subcategory.label}
                  >
                    {subcategory.children.map((child, indexchildOf) => {
                      return (
                        <MenuItem
                          key={indexchildOf}
                          className="bg-lightSecondary"
                        >
                          {child.label}
                        </MenuItem>
                      );
                    })}
                  </SubMenu>
                ) : (
                  <MenuItem className="bg-lightSecondary">
                    {subcategory.label}
                  </MenuItem>
                );
              })}
            </SubMenu>
          ) : (
            <MenuItem className="bg-lightSecondary">{category.label}</MenuItem>
          );
        })}
      </Menu>
    </Sidebar>
  );
};

export default MobileSidebar;
