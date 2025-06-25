import { useState } from 'react'

import './App.css'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { products } from './productsData'
import LandingPage from './pages/LandingPage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CartPage from './pages/CartPage'
import logo from '../src/assets/logo.png'

function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gold p-8 text-sm text-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* Column 1: Contact */}
        <div>
          <div className="font-bold mb-2 text-gold">Contact</div>
          <div>08029051394</div>
          <div>info@bakgabdigital.com</div>
          <div>4, Salako Street, Off Oliiyide, Mushin, Lagos State, Nigeria</div>
        </div>
        {/* Column 2: Policies */}
        <div>
          <div className="font-bold mb-2 text-gold">Policies & Info</div>
          <div>Free delivery in Lagos on orders above ₦250,000</div>
          <div>7-day return policy on eligible items</div>
          <div>Privacy: Your data is confidential and secured.</div>
          <div>Returns: Accepted within 7 days for eligible items if damaged or not as described. T&Cs apply.</div>
        </div>
        {/* Column 3: Terms & Copyright */}
        <div>
          <div className="font-bold mb-2 text-gold">Terms & Payment</div>
          <div>By shopping on our platform, you agree to our return, refund, and delivery terms.</div>
          <div>We accept bank transfers, debit/credit cards, and secure online payments.</div>
          <div className="mt-4 text-xs text-gray-500">© 2025 <a href="https://www.bakgabinteriors.com" className="underline text-gold">www.bakgabinteriors.com</a> — Powered by BAKGAB DIGITAL ENTERPRISE</div>
        </div>
      </div>
    </footer>
  );
}

function CartIcon({ quantity }: { quantity: number }) {
  return (
    <div className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFD700" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L7.11 14.21a2.25 2.25 0 002.197 1.79h7.392a2.25 2.25 0 002.197-1.79l1.273-7.938a1.125 1.125 0 00-1.11-1.322H5.25m0 0L4.125 4.125M6.75 21a.75.75 0 100-1.5.75.75 0 000 1.5zm10.5 0a.75.75 0 100-1.5.75.75 0 000 1.5z" />
      </svg>
      {quantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-gold text-white text-xs font-bold rounded-full px-2 py-0.5 shadow">{quantity}</span>
      )}
    </div>
  );
}

function Navbar({ cartQuantity }: { cartQuantity: number }) {
  const location = useLocation();
  return (
    <nav className="w-full bg-white border-b border-gold shadow-sm sticky top-0 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="font-extrabold text-2xl text-gold tracking-tight flex items-center gap-2">
          <span className="inline-block">BAKGAB Interiors</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/products" className={`hover:text-gold font-medium transition ${location.pathname.startsWith('/products') ? 'text-gold' : 'text-gray-700'}`}>Products</Link>
          <Link to="/cart" className="relative">
            <CartIcon quantity={cartQuantity} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const [cart, setCart] = useState<{ product: typeof products[0]; quantity: number }[]>([]);

  function addToCart(product: typeof products[0], qty: number = 1) {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prev, { product, quantity: qty }];
    });
  }

  function updateQty(id: string, qty: number) {
    setCart((prev) => prev.map((item) =>
      item.product.id === id ? { ...item, quantity: qty } : item
    ));
  }

  function removeFromCart(id: string) {
    setCart((prev) => prev.filter((item) => item.product.id !== id));
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar cartQuantity={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailsPage addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} updateQty={updateQty} removeFromCart={removeFromCart} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
