import { XMarkIcon } from "@heroicons/react/24/outline";

const SearchComponent = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-primary bg-opacity-80 flex items-center justify-center">
      {/* Modal Content */}
      <div
        data-aos="zoom-in"
        data-aos-duration="400"
        data-aos-delay="0"
        className="relative flex items-center gap-4 w-full max-w-2xl mx-4 p-6"
      >
        {/* Search Input */}
        <input
          type="text"
          placeholder="Seach..."
          className="w-full border-0 border-b bg-transparent border-gray-300 focus:border-white rounded-none py-3"
        />

        {/* Close Button */}
        <button onClick={onClose} className="text-white hover:text-red-500">
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
