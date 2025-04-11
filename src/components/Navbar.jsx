import { Link } from 'react-router-dom';
import { ShoppingBagIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="bg-yellow-400 px-2 py-1 rounded text-black font-bold">Shop</span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link to="/about" className="text-gray-700 hover:text-gray-900">About Us</Link>
                <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-teal-400 text-white px-4 py-2 rounded-md">
              Reserve my table
            </button>
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-600" />
            <ShoppingBagIcon className="h-6 w-6 text-gray-600" />
            <UserIcon className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar