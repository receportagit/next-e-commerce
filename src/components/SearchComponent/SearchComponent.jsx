import { XMarkIcon } from "@heroicons/react/24/outline";

const SearchComponent = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-primary bg-opacity-75 flex items-center justify-center">
      {/* Modal Content */}
      <div
        data-aos="zoom-in"
        data-aos-duration="400"
        data-aos-delay="0"
        className="relative flex items-center gap-4 bg-light w-full max-w-2xl mx-4 rounded-lg shadow-lg p-6"
      >
        {/* Search Input */}
        <input
          type="text"
          placeholder="seach..."
          className="w-full border-0 border-b bg-light border-gray-300 focus:border-secondary rounded-none p-3 focus:outline-none focus:ring-0"
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="text-lightPrimary hover:text-black"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
