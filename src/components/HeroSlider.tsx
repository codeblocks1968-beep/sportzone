'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Push Beyond Limits",
    subtitle: "UNLEASH YOUR POTENTIAL",
    description: "High-performance gear designed for the modern athlete. Engineered for speed, built for endurance.",
    image: "/images/hero.png",
    cta: "Shop Now",
    link: "/shop",
    color: "var(--primary)"
  },
  {
    id: 2,
    title: "Level Up Your Training",
    subtitle: "PREMIUM GYM GEAR",
    description: "Experience the perfect blend of comfort and durability with our latest compression wear collection.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80",
    cta: "Explore Gear",
    link: "/shop?category=Compression Wear",
    color: "#ef4444"
  },
  {
    id: 3,
    title: "Evolve Your Style",
    subtitle: "SNEAKER REVOLUTION",
    description: "Step into the future with our Neon Velocity series. Maximum cushioning meets iconic anime-inspired design.",
    image: "/images/shoes.png",
    cta: "View Collection",
    link: "/shop?category=Sneakers",
    color: "#ccff00"
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{
      position: 'relative',
      height: '90vh',
      width: '100%',
      overflow: 'hidden',
      backgroundColor: '#000'
    }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1
          }}
        >
          <Image 
            src={slides[current].image} 
            alt={slides[current].title} 
            fill 
            style={{ objectFit: 'cover', opacity: 0.6 }}
            priority
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), transparent)'
          }}></div>
        </motion.div>
      </AnimatePresence>

      <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ maxWidth: '700px' }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ 
                color: slides[current].color, 
                fontWeight: 'bold', 
                letterSpacing: '4px',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}
            >
              {slides[current].subtitle}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ 
                fontSize: 'clamp(3rem, 8vw, 5rem)', 
                lineHeight: '1.1', 
                marginBottom: '1.5rem',
                color: 'white',
                fontWeight: 900
              }}
            >
              {slides[current].title.split(' ').map((word, i) => (
                <span key={i}>
                  {word === "Limits" || word === "Revolution" || word === "Training" ? (
                    <span style={{ color: slides[current].color }}>{word} </span>
                  ) : (
                    word + ' '
                  )}
                </span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ 
                fontSize: '1.2rem', 
                color: 'white', 
                opacity: 0.8, 
                marginBottom: '2.5rem',
                lineHeight: 1.6,
                maxWidth: '500px'
              }}
            >
              {slides[current].description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{ display: 'flex', gap: '1rem' }}
            >
              <Link href={slides[current].link} className="btn-primary" style={{ backgroundColor: slides[current].color, borderColor: slides[current].color }}>
                {slides[current].cta} <ArrowRight size={20} />
              </Link>
              <Link href="/shop" className="btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
                View All
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div style={{
        position: 'absolute',
        bottom: '3rem',
        right: '4rem',
        display: 'flex',
        gap: '1rem',
        zIndex: 20
      }}>
        <button 
          onClick={prevSlide}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '3rem',
        left: '4rem',
        display: 'flex',
        gap: '0.5rem',
        zIndex: 20
      }}>
        {slides.map((_, i) => (
          <div 
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: current === i ? '40px' : '10px',
              height: '4px',
              background: current === i ? slides[current].color : 'rgba(255, 255, 255, 0.3)',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
