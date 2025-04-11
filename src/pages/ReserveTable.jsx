function ReserveTable() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">RESERVE MY TABLE</h1>
      
      {/* Delivery Partners */}
      <div className="flex items-center gap-6 mb-12">
        <img src="/images/zomato.png" alt="Zomato" className="h-8" />
        <img src="/images/swiggy.png" alt="Swiggy" className="h-8" />
        <img src="/images/dunzo.png" alt="Dunzo" className="h-8" />
      </div>

      {/* Restaurant Image */}
      <div className="mb-12">
        <img
          src="/images/restaurant-interior.jpg"
          alt="Restaurant Interior"
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      {/* Gallery */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">OUR GALLERY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="rounded-lg overflow-hidden">
              <img
                src={`/images/gallery-${item}.jpg`}
                alt={`Gallery ${item}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="space-y-4">
          {[
            'Is there a reservation fee or deposit required?',
            'What is the cancellation policy for table reservations?',
            'Can I make special requests when making a reservation?',
            'What are the operating hours for table service?'
          ].map((question, index) => (
            <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-between">
              <span>{question}</span>
              <button className="text-gray-600">+</button>
            </div>
          ))}
        </div>
      </div>

      {/* Delivery & Take Out */}
      <div className="bg-teal-400 rounded-lg p-8 relative">
        <div className="max-w-lg">
          <h2 className="text-2xl font-bold text-white mb-4">DELIVERY & TAKE OUT</h2>
          <p className="text-white mb-6">
            Enjoy our delicious meals in the comfort of your home. Order now for delivery or takeout!
          </p>
          <button className="bg-yellow-400 px-6 py-2 rounded-md text-black font-semibold">
            ORDER NOW
          </button>
        </div>
        <div className="absolute bottom-0 right-0">
          <img
            src="/images/delivery-van.png"
            alt="Delivery Van"
            className="h-32"
          />
        </div>
      </div>

      {/* Stay Updated Section */}
      <div className="mt-12 bg-teal-400 rounded-lg p-6">
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