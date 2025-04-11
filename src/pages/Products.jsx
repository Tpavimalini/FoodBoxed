import { useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const categories = ['Pizza', 'Pasta', 'Drinks', 'Desserts', 'Main Course', 'Starters'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    {
      id: 1,
      name: 'Brick Oven Pizza',
      price: '₹599',
      image: '/images/pizza.jpg',
      category: 'Pizza',
      rating: 4.5,
    },
    // Add more products here
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* New Launch Banner */}
      <div className="bg-yellow-400 rounded-lg p-6 mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-black">NEW LAUNCH</h2>
          <p className="text-black">Try our new special dishes crafted with love!</p>
        </div>
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">NEW</span>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <div className="flex space-x-4 overflow-x-auto pb-4">
          <button
            className={`px-4 py-2 rounded-full ${
              selectedCategory === 'All' ? 'bg-teal-400 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category ? 'bg-teal-400 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-medium">{product.price}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1">{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Best Deals Banner */}
      <div className="bg-red-500 rounded-lg p-6 my-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-white text-2xl font-bold">BEST DEALS</h2>
            <h3 className="text-white">Sales of the Week</h3>
          </div>
          <button className="bg-yellow-400 px-6 py-2 rounded-md text-black font-semibold">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Stay Updated Section */}
      <div className="bg-teal-400 rounded-lg p-6">
        <h2 className="text-white text-xl font-bold mb-4">STAY UPDATED</h2>
        <div className="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-md"
          />
          <button className="bg-yellow-400 px-6 py-2 rounded-md text-black font-semibold">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}