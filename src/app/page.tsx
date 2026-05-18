'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import HeroSlider from '@/components/HeroSlider';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

export default function Home() {
  const trendingProducts = products.filter(p => p.trending);

  return (
    <div>
      <HeroSlider />

      {/* Featured Categories */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
            <div>
              <p style={{ color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Categories</p>
              <h2 className="section-title">Elevate Your Game</h2>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { name: 'Sportswear', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80', count: '120+ Items' },
              { name: 'Running Shoes', image: '/images/shoes.png', count: '85+ Items' },
              { name: 'Gym Equipment', image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80', count: '50+ Items' }
            ].map((cat, i) => (
              <motion.div
                key={cat.name}
                whileHover={{ scale: 1.02 }}
                style={{
                  position: 'relative',
                  height: '400px',
                  borderRadius: 'var(--radius)',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                <Image src={cat.image} alt={cat.name} fill style={{ objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '2rem'
                }}>
                  <p style={{ color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{cat.count}</p>
                  <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '1rem' }}>{cat.name}</h3>
                  <Link href="/shop" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                    Shop Now <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section style={{ padding: '6rem 0', background: 'var(--accent)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Hot Picks</p>
            <h2 className="section-title" style={{ margin: '0 auto 2rem' }}>Trending Now</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/shop" className="btn-secondary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Trust Markers */}
      <section style={{ padding: '4rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            textAlign: 'center'
          }}>
            <div>
              <h4 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Free Shipping</h4>
              <p style={{ opacity: 0.7 }}>On all orders over $100</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>30 Days Return</h4>
              <p style={{ opacity: 0.7 }}>Hassle-free exchanges</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Secure Payment</h4>
              <p style={{ opacity: 0.7 }}>100% encrypted checkout</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>24/7 Support</h4>
              <p style={{ opacity: 0.7 }}>We're here to help</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
