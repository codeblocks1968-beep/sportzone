'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '@/context/StoreContext';
import { Trash2, Plus, Minus, ShoppingBag, CreditCard, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 15.00;
  const total = subtotal + shipping;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <div style={{
          background: 'var(--accent)',
          padding: '4rem',
          borderRadius: 'var(--radius)',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'var(--primary)',
            color: 'black',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 2rem'
          }}>
            <ShoppingBag size={40} />
          </div>
          <h1 style={{ marginBottom: '1rem' }}>Order Confirmed!</h1>
          <p style={{ opacity: 0.8, marginBottom: '2rem' }}>
            Thank you for shopping with SPORT ZONE. Your order #SZ-{Math.floor(Math.random() * 10000)} is being processed.
          </p>
          <Link href="/shop" className="btn-primary">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '2rem' }}>Your Cart is Empty</h1>
        <Link href="/shop" className="btn-primary">Go to Shop</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '4rem 0' }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Your Shopping Cart</h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '4rem'
        }}>
          {/* Cart Items */}
          <div>
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  exit={{ opacity: 0, x: -20 }}
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    padding: '1.5rem',
                    background: 'var(--card)',
                    borderRadius: 'var(--radius)',
                    border: '1px solid var(--border)',
                    marginBottom: '1.5rem'
                  }}
                >
                  <div style={{ position: 'relative', width: '100px', height: '100px', flexShrink: 0 }}>
                    <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover', borderRadius: 'var(--radius)' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.1rem' }}>{item.name}</h3>
                      <button onClick={() => removeFromCart(item.id)} style={{ color: 'var(--secondary)' }}>
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <p style={{ opacity: 0.6, fontSize: '0.9rem', marginBottom: '1rem' }}>{item.category}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--accent)', padding: '0.3rem 0.8rem', borderRadius: '2rem' }}>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={16} /></button>
                        <span style={{ fontWeight: 'bold' }}>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={16} /></button>
                      </div>
                      <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary / Checkout */}
          <div>
            {!isCheckingOut ? (
              <div style={{
                background: 'var(--accent)',
                padding: '2rem',
                borderRadius: 'var(--radius)',
                position: 'sticky',
                top: '120px'
              }}>
                <h2 style={{ marginBottom: '2rem' }}>Order Summary</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ opacity: 0.7 }}>Subtotal</span>
                    <span style={{ fontWeight: 'bold' }}>${subtotal.toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ opacity: 0.7 }}>Shipping</span>
                    <span style={{ fontWeight: 'bold' }}>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.2rem', marginTop: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: '800' }}>Total</span>
                    <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)' }}>${total.toFixed(2)}</span>
                  </div>
                </div>
                <button 
                  className="btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', padding: '1.2rem' }}
                  onClick={() => setIsCheckingOut(true)}
                >
                  Checkout <CreditCard size={20} />
                </button>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: 'var(--card)',
                  padding: '2rem',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border)'
                }}
              >
                <button onClick={() => setIsCheckingOut(false)} style={{ marginBottom: '1.5rem', background: 'none', color: 'var(--foreground)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ChevronRight size={18} style={{ transform: 'rotate(180deg)' }} /> Back to Cart
                </button>
                <h2 style={{ marginBottom: '2rem' }}>Checkout</h2>
                <form onSubmit={handleCheckout} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <input type="text" placeholder="Full Name" required style={{ padding: '1rem', borderRadius: 'var(--radius)', background: 'var(--accent)', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                  <input type="email" placeholder="Email Address" required style={{ padding: '1rem', borderRadius: 'var(--radius)', background: 'var(--accent)', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                  <input type="text" placeholder="Shipping Address" required style={{ padding: '1rem', borderRadius: 'var(--radius)', background: 'var(--accent)', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <input type="text" placeholder="City" required style={{ padding: '1rem', borderRadius: 'var(--radius)', background: 'var(--accent)', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                    <input type="text" placeholder="ZIP Code" required style={{ padding: '1rem', borderRadius: 'var(--radius)', background: 'var(--accent)', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                  </div>
                  <h3 style={{ margin: '1rem 0' }}>Payment Information</h3>
                  <input type="text" placeholder="Card Number" required style={{ padding: '1rem', borderRadius: 'var(--radius)', background: 'var(--accent)', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <input type="text" placeholder="MM/YY" required style={{ padding: '1rem', borderRadius: 'var(--radius)', background: 'var(--accent)', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                    <input type="text" placeholder="CVV" required style={{ padding: '1rem', borderRadius: 'var(--radius)', background: 'var(--accent)', border: '1px solid var(--border)', color: 'var(--foreground)' }} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ marginTop: '1rem', padding: '1.2rem', justifyContent: 'center' }}>
                    Place Order - ${total.toFixed(2)}
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
