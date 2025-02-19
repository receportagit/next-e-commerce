import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Divider } from "antd";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white font-raleway py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">About Us</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Clothing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home Appliances
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Books
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section with React Icons */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Payment Methods Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Payment Methods</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <ShoppingCartIcon className="w-10 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <MagnifyingGlassIcon className="w-10 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <HeartIcon className="w-10 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <UserCircleIcon className="w-10 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-4 text-center">
          <Divider
            style={{
              borderColor: "#fff",
            }}
          >
            <p className="text-white text-sm">
              © 2025 Company Name. All Rights Reserved.
            </p>
          </Divider>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
