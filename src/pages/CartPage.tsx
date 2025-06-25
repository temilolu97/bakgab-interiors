import { products } from '../productsData';

export default function CartPage({ cart, updateQty, removeFromCart }: { cart: { product: typeof products[0]; quantity: number }[], updateQty?: (id: string, qty: number) => void, removeFromCart?: (id: string) => void }) {
  if (cart.length === 0) return <div className="p-8 text-center text-gray-500">Your cart is empty.</div>;
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-blue-900">Your Cart</h2>
      <ul className="divide-y divide-gray-100 mb-6">
        {cart.map((item) => (
          <li key={item.product.id} className="flex items-center gap-4 py-4 bg-white rounded-xl shadow-sm border border-gray-100 mb-3 px-4">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="rounded-lg w-24 h-20 object-cover"
            />
            <div className="flex-1">
              <div className="font-semibold text-lg text-blue-900">{item.product.name}</div>
              <div className="text-gray-600">₦{item.product.price.toLocaleString()}</div>
              <div className="flex items-center gap-2 mt-2">
                <button
                  className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100 text-lg"
                  onClick={() => updateQty && updateQty(item.product.id, Math.max(1, item.quantity - 1))}
                  aria-label="Decrease quantity"
                  disabled={!updateQty}
                >-</button>
                <span className="font-semibold text-lg w-8 text-center">{item.quantity}</span>
                <button
                  className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100 text-lg"
                  onClick={() => updateQty && updateQty(item.product.id, item.quantity + 1)}
                  aria-label="Increase quantity"
                  disabled={!updateQty}
                >+</button>
              </div>
            </div>
            <div className="font-bold text-blue-700 text-lg">₦{(item.product.price * item.quantity).toLocaleString()}</div>
            {removeFromCart && (
              <button
                className="ml-2 p-2 rounded-full hover:bg-red-100 text-red-600 transition"
                onClick={() => removeFromCart(item.product.id)}
                aria-label="Remove from cart"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </li>
        ))}
      </ul>
      <div className="text-right text-2xl font-bold text-blue-900 mb-6">Total: ₦{cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0).toLocaleString()}</div>
      <div className="flex justify-end">
        <button
          className="bg-blue-700 border border-black text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-800 transition text-lg disabled:opacity-50"
          disabled={cart.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
} 