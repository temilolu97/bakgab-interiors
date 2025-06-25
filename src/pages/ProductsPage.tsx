import { Link } from 'react-router-dom';
import { products } from '../productsData';

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="block bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-lg hover:border-blue-200 transition-transform transform hover:scale-105 group"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg mb-3 w-full h-40 object-cover group-hover:scale-105 transition"
            />
            <div className="font-semibold text-lg mb-1 text-blue-900">{product.name}</div>
            <div className="text-gray-600 mb-1">₦{product.price.toLocaleString()}</div>
            <div className="text-xs text-gray-500">{product.category}</div>
          </Link>
        ))}
      </div>
    </div>
  );
} 