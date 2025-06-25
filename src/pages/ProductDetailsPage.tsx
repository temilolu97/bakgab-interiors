import { useParams } from 'react-router-dom';
import { products } from '../productsData';

export default function ProductDetailsPage({ addToCart }: { addToCart: (product: typeof products[0]) => void }) {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  if (!product) return <div className="p-4">Product not found.</div>;
  return (
    <div className='flex my-20'>
    <div className="max-w-3xl mx-auto p-4 flex flex-col md:flex-row gap-8 items-start bg-white rounded-xl shadow-lg border border-gray-200">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-xl shadow w-full max-w-md object-cover mb-6 md:mb-0 border border-gray-100"
      />
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-2 text-blue-900">{product.name}</h2>
        <div className="text-2xl text-blue-700 font-semibold mb-4">₦{product.price.toLocaleString()}</div>
        <div className="mb-4 text-gray-700">{product.description}</div>
        <div className="text-sm text-gray-500 mb-6">{product.category}</div>
        <button
          className="bg-blue-700 border border-black text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-800 hover:scale-105 transition-transform"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
    </div>
  );
} 