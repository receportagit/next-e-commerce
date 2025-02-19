
import {
  ShoppingCartIcon
} from "@heroicons/react/24/outline";

const ShoppingCartIconCls = () => {
  return (
    <div className="relative">
      <ShoppingCartIcon className="h-7 w-7 text-lightPrimary" />
      <span className="font-lato absolute top-[-2px] right-[-5px] inline-flex items-center justify-center w-4 h-4 bg-danger text-white text-xs rounded-full">
        3
      </span>
    </div>
  );
};

export default ShoppingCartIconCls;
