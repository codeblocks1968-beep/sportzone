'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, X, Sun, Moon, Heart, User as UserIcon } from 'lucide-react';
import { useStore } from '@/context/StoreContext';
import { useAuth } from '@/context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const { cart, wishlist, theme, toggleTheme } = useStore();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="glass" style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      padding: '1rem 0',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontSize: '1.8rem',
          fontWeight: 900,
          color: 'var(--foreground)',
          letterSpacing: '-1.5px',
          textTransform: 'none'
        }}>
          SPORT ZONE
        </Link>

        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }} className="desktop-menu">
          <Link href="/">Home</Link>
          <Link href="/shop?gender=Men">Men</Link>
          <Link href="/shop?gender=Women">Women</Link>
          <Link href="/about">About</Link>
        </div>

        {/* Icons */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          <button onClick={() => setSearchOpen(!searchOpen)} title="Search">
            <Search size={22} />
          </button>
          
          <Link href={user ? "/profile" : "/login"} title={user ? "Profile" : "Login"}>
            <UserIcon size={22} style={{ color: user ? 'var(--primary)' : 'inherit' }} />
          </Link>

          <Link href="/wishlist" style={{ position: 'relative' }} title="Wishlist">
            <Heart size={22} />
            {wishlist.length > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: 'var(--secondary)',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '0.7rem'
              }}>{wishlist.length}</span>
            )}
          </Link>
          <Link href="/cart" style={{ position: 'relative' }} title="Cart">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: 'var(--primary)',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '0.7rem',
                fontWeight: 'bold'
              }}>{cartCount}</span>
            )}
          </Link>
          <button onClick={toggleTheme} title="Toggle Theme">
            {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="mobile-toggle">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              background: 'var(--background)',
              padding: '1rem 0',
              borderBottom: '1px solid var(--border)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          >
            <div className="container">
              <form onSubmit={handleSearch} style={{ display: 'flex', gap: '1rem' }}>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  style={{
                    flex: 1,
                    padding: '0.8rem 1.2rem',
                    borderRadius: 'var(--radius)',
                    border: '1px solid var(--border)',
                    background: 'var(--accent)',
                    color: 'var(--foreground)',
                    fontSize: '1rem'
                  }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '0.8rem 2rem' }}>Search</button>
                <button type="button" onClick={() => setSearchOpen(false)} style={{ padding: '0.8rem' }}>
                  <X size={24} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              overflow: 'hidden',
              background: 'var(--background)',
              borderBottom: '1px solid var(--border)'
            }}
          >
            <div className="container" style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem',
              gap: '1.2rem'
            }}>
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/shop?gender=Men" onClick={() => setIsOpen(false)}>Men</Link>
              <Link href="/shop?gender=Women" onClick={() => setIsOpen(false)}>Women</Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
              <Link href={user ? "/profile" : "/login"} onClick={() => setIsOpen(false)}>
                {user ? "My Profile" : "Login / Signup"}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .desktop-menu {
          display: flex;
        }
        .mobile-toggle {
          display: none;
        }
        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
