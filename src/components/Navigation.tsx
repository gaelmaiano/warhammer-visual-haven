import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-Gael-black text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="font-gothic text-2xl text-warhammer-purple">WARHAMMER</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="font-gothic px-3 py-2 text-warhammer-purple hover:text-warhammer-purple-dark transition-colors">Home</a>
              <a href="#" className="font-gothic px-3 py-2 text-warhammer-purple hover:text-warhammer-purple-dark transition-colors">News</a>
              <a href="#" className="font-gothic px-3 py-2 text-warhammer-purple hover:text-warhammer-purple-dark transition-colors">Gallery</a>
              <a href="#" className="font-gothic px-3 py-2 text-warhammer-purple hover:text-warhammer-purple-dark transition-colors">About</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-warhammer-purple hover:text-warhammer-purple-dark focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-warhammer-black">
            <a href="#" className="font-gothic block px-3 py-2 text-warhammer-purple hover:text-warhammer-purple-dark">Home</a>
            <a href="#" className="font-gothic block px-3 py-2 text-warhammer-purple hover:text-warhammer-purple-dark">News</a>
            <a href="#" className="font-gothic block px-3 py-2 text-warhammer-purple hover:text-warhammer-purple-dark">Gallery</a>
            <a href="#" className="font-gothic block px-3 py-2 text-warhammer-purple hover:text-warhammer-purple-dark">About</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;