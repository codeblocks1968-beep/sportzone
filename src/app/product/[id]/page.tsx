'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/data/products';
import { useStore } from '@/context/StoreContext';
import { ShoppingCart, Heart, Star, Shield, Truck, RotateCcw, ChevronLeft } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';

const ProductDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <h1>Product Not Found</h1>
        <button className="btn-primary" onClick={() => router.push('/shop')}>Back to Shop</button>
      </div>
    );
  }

  const isWishlisted = wishlist.some(item => item.id === product.id);
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div style={{ padding: '4rem 0' }}>
      <div className="container">
        <button 
          onClick={() => router.back()}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', background: 'none', color: 'var(--foreground)', opacity: 0.7 }}
        >
          <ChevronLeft size={20} /> Back
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '4rem',
          marginBottom: '6rem'
        }}>
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
              position: 'relative',
              height: '600px',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              background: 'var(--accent)'
            }}
          >
            <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p style={{ color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{product.brand}</p>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{product.name}</h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < Math.floor(product.rating) ? 'var(--primary)' : 'none'} color="var(--primary)" />
                ))}
              </div>
              <span style={{ fontWeight: 'bold' }}>{product.rating} (120 Reviews)</span>
            </div>

            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '2rem' }}>${product.price.toFixed(2)}</h2>

            <p style={{ opacity: 0.8, lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1.1rem' }}>
              {product.description}
            </p>

            {/* Selection */}
            {product.sizes && (
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '1rem' }}>Select Size</h4>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `2px solid ${selectedSize === size ? 'var(--primary)' : 'var(--border)'}`,
                        borderRadius: 'var(--radius)',
                        background: 'transparent',
                        color: 'var(--foreground)',
                        fontWeight: 'bold'
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.colors && (
              <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ marginBottom: '1rem' }}>Select Color</h4>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: color,
                        border: `3px solid ${selectedColor === color ? 'var(--primary)' : 'transparent'}`,
                        boxShadow: '0 0 5px rgba(0,0,0,0.2)'
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
              <button 
                className="btn-primary" 
                style={{ flex: 1, justifyContent: 'center', padding: '1.2rem' }}
                onClick={() => addToCart(product)}
              >
                <ShoppingCart size={24} /> Add to Cart
              </button>
              <button 
                onClick={() => toggleWishlist(product)}
                style={{
                  width: '60px',
                  background: isWishlisted ? 'var(--secondary)' : 'var(--accent)',
                  color: isWishlisted ? 'white' : 'var(--foreground)',
                  borderRadius: 'var(--radius)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Heart size={24} fill={isWishlisted ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Features */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--accent)', borderRadius: 'var(--radius)' }}>
                <Truck size={24} style={{ color: 'var(--primary)', marginBottom: '0.5rem' }} />
                <p style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Free Delivery</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--accent)', borderRadius: 'var(--radius)' }}>
                <RotateCcw size={24} style={{ color: 'var(--primary)', marginBottom: '0.5rem' }} />
                <p style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>30 Day Returns</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--accent)', borderRadius: 'var(--radius)' }}>
                <Shield size={24} style={{ color: 'var(--primary)', marginBottom: '0.5rem' }} />
                <p style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Genuine Gear</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section style={{ marginTop: '6rem' }}>
            <h2 className="section-title">You Might Also Like</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '2rem'
            }}>
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
