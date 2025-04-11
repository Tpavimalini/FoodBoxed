import { useState } from 'react';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const categories = ['Coffee', 'Beverages', 'Gourmet Main', 'Nibbles', 'Sweet Treats'];
  const products = [
    { name: 'Green tea', price: '$4.99', image: 'path/to/green-tea.jpg' },
    { name: 'South Indian filter coffee', price: '$3.99', image: 'path/to/filter-coffee.jpg' },
    { name: 'Hot chocolate', price: '$5.99', image: 'path/to/hot-chocolate.jpg' },
    { name: 'Fresh shake', price: '$4.99', image: 'path/to/fresh-shake.jpg' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-teal-400 rounded-lg p-8 mb-12 relative">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-white mb-4">INDULGE IN BLISS</h1>
          <p className="text-white mb-6">Our Rich & Creamy Hot Chocolate - Warmth in Every Sip! Try it Now!</p>
          <button className="bg-yellow-400 px-6 py-2 rounded-md text-black font-semibold">
            SHOP NOW
          </button>
        </div>
        <div className="absolute bottom-4 left-4 flex space-x-2">
          <div className="w-12 h-1 bg-white rounded"></div>
          <div className="w-12 h-1 bg-white/50 rounded"></div>
          <div className="w-12 h-1 bg-white/50 rounded"></div>
        </div>
      </div>

      {/* Best-Selling Products */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">BEST-SELLING PRODUCTS</h2>
        <div className="flex space-x-4 mb-6">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full ${
                index === 0 ? 'bg-purple-200' : 'bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hot Sale Banner */}
      <div className="bg-red-500 rounded-lg p-8 mb-12 relative">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-white text-2xl font-bold mb-2">BEST DEALS</h2>
            <h3 className="text-white text-xl mb-4">Sales of the Week</h3>
            <button className="bg-yellow-400 px-6 py-2 rounded-md text-black font-semibold">
              SHOP NOW
            </button>
          </div>
          <div className="relative">
            <span className="absolute -top-4 right-0 bg-teal-400 text-white px-4 py-1 rounded-full text-sm">
              HOT SALE
            </span>
            <img src="path/to/burger.png" alt="Burger" className="w-64" />
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-5 gap-4 mb-12">
        {['Pizza', 'Burger', 'Sandwiches', 'Pasta', 'Coffee'].map((category, index) => (
          <div key={index} className="text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-2"></div>
            <p className="font-medium">{category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home