import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          ShopEase
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
          <Link to="/cart" className="text-gray-700 hover:text-blue-600">Cart</Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <Link to="/products" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Products</Link>
          <Link to="/cart" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Cart</Link>
        </div>
      )}
    </nav>
  );
}
