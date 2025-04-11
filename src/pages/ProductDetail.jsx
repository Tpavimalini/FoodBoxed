import { useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    name: 'Brick Oven Pizza',
    price: '₹599',
    description: 'Fresh from the brick oven with handpicked ingredients and our special sauce.',
    rating: 4.5,
    reviews: [
      { id: 1, user: 'John D.', rating: 5, comment: 'Best pizza in town!' },
      { id: 2, user: 'Sarah M.', rating: 4, comment: 'Really good, will order again.' },
    ],
    relatedProducts: [
      { id: 1, name: 'Margherita Pizza', price: '₹499', image: '/images/pizza1.jpg' },
      { id: 2, name: 'Pasta Alfredo', price: '₹399', image: '/images/pasta.jpg' },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/images/pizza.jpg"
            alt={product.name}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <span className="text-yellow-400">★★★★★</span>
            <span className="ml-2">{product.rating}</span>
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="text-2xl font-bold mb-6">{product.price}</div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <button
              className="w-10 h-10 rounded-full border-2 border-teal-400 flex items-center justify-center"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              className="w-10 h-10 rounded-full border-2 border-teal-400 flex items-center justify-center"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          <button className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-md mb-4">
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">CUSTOMER REVIEWS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400">{'★'.repeat(review.rating)}</span>
                <span className="ml-2">{review.rating}</span>
              </div>
              <p className="text-gray-600 mb-2">{review.comment}</p>
              <p className="font-medium">{review.user}</p>
            </div>
          ))}
        </div>
      </div>

      {/* People Also Bought */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">PEOPLE ALSO BOUGHT</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {product.relatedProducts.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-900">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}