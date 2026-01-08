function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "₹2,999",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "₹4,999",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: "₹1,999",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: "₹1,499",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 font-geist">
          Product Gallery
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition flex flex-col"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-4"
              />

              {/* Product Info */}
              <h2 className="text-lg font-semibold mb-1">{product.name}</h2>

              <p className="text-gray-600 mb-4">{product.price}</p>

              {/* Button */}
              <button className="mt-auto bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                View Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
