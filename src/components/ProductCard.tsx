'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/data/products';
import { useStore } from '@/context/StoreContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const isWishlisted = wishlist.some(item => item.id === product.id);

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      style={{
        background: 'var(--card)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        border: '1px solid var(--border)',
        position: 'relative',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Product Image */}
      <Link href={`/product/${product.id}`} style={{ position: 'relative', display: 'block', height: '300px' }}>
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          {product.trending && (
            <span style={{
              background: 'var(--secondary)',
              color: 'white',
              padding: '0.3rem 0.8rem',
              borderRadius: '2rem',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              textTransform: 'uppercase'
            }}>Trending</span>
          )}
          <span style={{
            background: 'var(--accent)',
            color: 'var(--foreground)',
            padding: '0.3rem 0.8rem',
            borderRadius: '2rem',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            border: '1px solid var(--border)'
          }}>{product.gender}</span>
        </div>
        
        {product.discountPrice && (
          <span style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            background: '#ef4444',
            color: 'white',
            padding: '0.3rem 0.8rem',
            borderRadius: '0.5rem',
            fontSize: '0.8rem',
            fontWeight: 'bold'
          }}>
            {Math.round((1 - product.discountPrice / product.price) * 100)}% OFF
          </span>
        )}
      </Link>

      {/* Wishlist Button */}
      <button 
        onClick={() => toggleWishlist(product)}
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: isWishlisted ? 'var(--secondary)' : 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(5px)',
          border: 'none',
          borderRadius: '50%',
          width: '35px',
          height: '35px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          zIndex: 10
        }}
      >
        <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
      </button>

      {/* Product Details */}
      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>{product.category}</p>
          <span style={{ 
            fontSize: '0.7rem', 
            fontWeight: 'bold',
            color: product.stockStatus === 'In Stock' ? '#22c55e' : product.stockStatus === 'Low Stock' ? '#f59e0b' : '#ef4444'
          }}>{product.stockStatus}</span>
        </div>
        <Link href={`/product/${product.id}`}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', height: '2.5rem', overflow: 'hidden' }}>{product.name}</h3>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Star size={16} fill="#fbbf24" color="#fbbf24" />
          <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{product.rating}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {product.discountPrice ? (
              <>
                <span style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ef4444' }}>${product.discountPrice.toFixed(2)}</span>
                <span style={{ fontSize: '0.9rem', opacity: 0.5, textDecoration: 'line-through' }}>${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary)' }}>${product.price.toFixed(2)}</span>
            )}
          </div>
          <button 
            className="btn-primary" 
            style={{ padding: '0.8rem', borderRadius: 'var(--radius)' }}
            onClick={() => addToCart(product)}
            title="Add to Cart"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
