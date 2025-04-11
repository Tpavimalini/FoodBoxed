function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-teal-400 rounded-lg p-8 mb-12 relative">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-black mb-4">WHO WE ARE</h1>
          <p className="text-black mb-6">Where Gourmet Treats Meet Unforgettable Moments!"</p>
          <button className="bg-yellow-400 px-6 py-2 rounded-md text-black font-semibold">
            KNOW MORE
          </button>
        </div>
      </div>

      {/* What Makes Us Special */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">WHAT MAKES US SPECIAL</h2>
        <div className="flex justify-center mb-8">
          <div className="relative w-96 h-96">
            {/* Circular diagram */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-purple-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">Craftsmanship Commitment</span>
              </div>
            </div>
            <div className="absolute top-0 left-0">
              <div className="w-24 h-24 bg-teal-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">Delicious Adventure</span>
              </div>
            </div>
            {/* Add more circular elements for other qualities */}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">OUR JOURNEY</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-semibold mb-2">INCEPTION</h3>
            <p className="text-gray-600">Our story begins with a passion for exceptional food...</p>
          </div>
          {/* Add more journey milestones */}
        </div>
      </section>
    </div>
  );
}

export default About