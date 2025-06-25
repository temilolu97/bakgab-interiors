import { Link } from 'react-router-dom';
import { products } from '../productsData';

export default function LandingPage() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-blue-50 to-white rounded-xl p-8 mb-12 shadow-lg">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900">Welcome to BAKGAB Interiors</h1>
          <p className="mb-4 text-lg text-gray-700">Elevate your space with timeless elegance. We provide premium-quality furniture and interior items that bring style, comfort, and functionality into homes and offices.</p>
          <p className="mb-6 text-gray-600">From classic wooden pieces to modern luxury designs, explore our curated collection of furnishings made for every lifestyle.</p>
          <Link to="/products" className="inline-block bg-gold text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-white hover:text-gold hover:border-gold border border-gold transition">Shop Now →</Link>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80" alt="BAKGAB Interiors Hero" className="rounded-xl shadow-lg w-full max-w-xs" />
        </div>
      </section>
      {/* About & Values */}
      <section className="mb-12">
        <div className=" gap-8 items-center bg-white rounded-xl shadow-lg p-8">
         
          {/* Text side */}
          <div>
            <h2 className="text-3xl font-extrabold mb-4 text-gold flex items-center gap-2">
              <span>🛋️</span> About Us
            </h2>
            <p className="mb-4 text-lg text-gray-700">
              <span className="font-bold text-gold">BAKGAB Interiors</span> is where craftsmanship meets inspiration. We believe that great spaces inspire better living, and our mission is to bring timeless comfort, style, and purpose into every home and office.
            </p>
            <p className="mb-4 text-gray-600">
              Our collections are curated for those who value quality, innovation, and everyday functionality. From cozy homes to productive workspaces, we create pieces that reflect both contemporary trends and lasting elegance—making exceptional interior solutions accessible to everyone.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-3 bg-gold/10 rounded-lg p-3">
                <span className="text-gold text-2xl">🛠️</span>
                <span className="font-medium text-gray-800">Craftsmanship</span>
              </div>
              <div className="flex items-center gap-3 bg-gold/10 rounded-lg p-3">
                <span className="text-gold text-2xl">💸</span>
                <span className="font-medium text-gray-800">Affordability</span>
              </div>
              <div className="flex items-center gap-3 bg-gold/10 rounded-lg p-3">
                <span className="text-gold text-2xl">🤝</span>
                <span className="font-medium text-gray-800">Service</span>
              </div>
              <div className="flex items-center gap-3 bg-gold/10 rounded-lg p-3">
                <span className="text-gold text-2xl">✔️</span>
                <span className="font-medium text-gray-800">Integrity</span>
              </div>
            </div>
            <div className="mt-2">
              <h4 className="font-semibold mb-3 text-gold">What We Offer</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 bg-gold/5 rounded-lg p-3">
                  <span className="text-xl text-gold">🛋️</span>
                  <span>Living Room Furniture</span>
                </div>
                <div className="flex items-center gap-3 bg-gold/5 rounded-lg p-3">
                  <span className="text-xl text-gold">🛏️</span>
                  <span>Bedroom Sets</span>
                </div>
                <div className="flex items-center gap-3 bg-gold/5 rounded-lg p-3">
                  <span className="text-xl text-gold">🪑</span>
                  <span>Office Furnishings</span>
                </div>
                <div className="flex items-center gap-3 bg-gold/5 rounded-lg p-3">
                  <span className="text-xl text-gold">🏺</span>
                  <span>Home Décor Accessories</span>
                </div>
                <div className="flex items-center gap-3 bg-gold/5 rounded-lg p-3">
                  <span className="text-xl text-gold">📝</span>
                  <span>Custom Orders</span>
                </div>
                <div className="flex items-center gap-3 bg-gold/5 rounded-lg p-3">
                  <span className="text-xl text-gold">🚚</span>
                  <span>Nationwide Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gold">🛍️ Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product, idx) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="block bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-lg hover:border-gold transition-transform transform hover:scale-105 group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg mb-3 w-full h-40 object-cover group-hover:scale-105 transition"
              />
              <div className="font-semibold text-lg mb-1 text-gold">{product.name}</div>
              <div className="text-gray-600 mb-1">₦{product.price.toLocaleString()}</div>
              <div className="text-xs text-gray-500">{product.category}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
} 