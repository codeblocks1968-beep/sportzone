import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Facebook = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Twitter = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const Instagram = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Youtube = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);


const Footer = () => {
  return (
    <footer style={{
      background: 'var(--card)',
      padding: '6rem 0 2rem',
      marginTop: '4rem',
      borderTop: '1px solid var(--border)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Info */}
          <div>
            <h2 style={{ color: 'var(--foreground)', marginBottom: '1.5rem', fontWeight: 900, letterSpacing: '-1.5px' }}>
              SPORT ZONE
            </h2>
            <p style={{ opacity: 0.7, lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Push beyond limits with premium sports gear and apparel. 
              Join the SPORT ZONE community and redefine your performance.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="#"><Facebook size={20} /></Link>
              <Link href="#"><Twitter size={20} /></Link>
              <Link href="#"><Instagram size={20} /></Link>
              <Link href="#"><Youtube size={20} /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Quick Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: 0.8 }}>
              <Link href="/categories">Categories</Link>
              <Link href="/about">Our Story</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Contact Us</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.8 }}>
              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                <MapPin size={18} />
                <span>123 Sport Avenue, Jodhpur</span>
              </div>
              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                <Mail size={18} />
                <span>support@SPORT ZONE.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Newsletter</h3>
            <p style={{ opacity: 0.7, marginBottom: '1rem' }}>Subscribe to get special offers and news.</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input 
                type="email" 
                placeholder="Email address" 
                style={{
                  background: 'var(--background)',
                  border: '1px solid var(--border)',
                  color: 'var(--foreground)',
                  padding: '0.8rem',
                  borderRadius: 'var(--radius)',
                  width: '100%'
                }}
              />
              <button className="btn-primary" style={{ padding: '0.8rem 1.2rem' }}>Join</button>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '2rem',
          textAlign: 'center',
          opacity: 0.5,
          fontSize: '0.9rem'
        }}>
          <p>&copy; {new Date().getFullYear()} SPORT ZONE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
