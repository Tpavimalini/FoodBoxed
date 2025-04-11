function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">CONTACT US</h1>
      <p className="text-gray-600 mb-8">
        Enjoy gourmet goodness delivered to your door or ready for takeout. Order now for a delicious dining experience at home!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Second Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter second name"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="+91"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">What are you looking for</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>Select your query</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-md">
              SUBMIT
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <img src="path/to/restaurant-image.jpg" alt="Restaurant" className="w-full h-48 object-cover rounded-lg mb-4" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <h3 className="font-semibold mb-2">CALL US</h3>
              <p className="text-gray-600">+91 9876543210</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">EMAIL US</h3>
              <p className="text-gray-600">info@gmail.com</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">LOCATION</h3>
              <p className="text-gray-600">123 Street, City</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reserve a Table Section */}
      <div className="mt-12">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <img src="path/to/restaurant-interior.jpg" alt="Restaurant Interior" className="w-full h-64 object-cover rounded-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">RESERVE A TABLE</h2>
            <p className="text-gray-600 mb-6">
              Secure your spot for an unforgettable dining experience. Reserve your table now and embark on a culinary journey filled with exquisite flavors and exceptional service.
            </p>
            <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">OUR GALLERY</h2>
        <div className="grid grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="bg-gray-200 h-32 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact