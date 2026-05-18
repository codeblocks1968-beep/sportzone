'use client';

import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}
          >
            Get In <span style={{ color: 'var(--primary)' }}>Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ opacity: 0.7, maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}
          >
            Have questions about our gear or need help with an order? 
            Our elite support team is ready to assist you.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem' }}>Contact Information</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  background: 'var(--accent)',
                  padding: '1rem',
                  borderRadius: '1rem',
                  color: 'var(--primary)'
                }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Email Us</h3>
                  <p style={{ opacity: 0.7 }}>support@SPORT ZONE.com</p>
                  <p style={{ opacity: 0.7 }}>info@SPORT ZONE.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  background: 'var(--accent)',
                  padding: '1rem',
                  borderRadius: '1rem',
                  color: 'var(--primary)'
                }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Call Us</h3>
                  <p style={{ opacity: 0.7 }}>+1 (555) 123-4567</p>
                  <p style={{ opacity: 0.7 }}>Mon - Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  background: 'var(--accent)',
                  padding: '1rem',
                  borderRadius: '1rem',
                  color: 'var(--primary)'
                }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Our Studio</h3>
                  <p style={{ opacity: 0.7 }}>123 Sport Avenue, Fitness City</p>
                  <p style={{ opacity: 0.7 }}>New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div style={{ 
              marginTop: '4rem', 
              padding: '2rem', 
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              borderRadius: '2rem',
              color: 'white'
            }}>
              <h3 style={{ marginBottom: '1rem' }}>Live Support</h3>
              <p style={{ opacity: 0.9, marginBottom: '1.5rem' }}>Need an immediate answer? Our live chat is available during business hours.</p>
              <button style={{
                background: 'white',
                color: 'var(--primary)',
                padding: '0.8rem 1.5rem',
                borderRadius: '0.8rem',
                fontWeight: '700'
              }}>Start Chat</button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              background: 'var(--card)',
              padding: '3rem',
              borderRadius: '2rem',
              border: '1px solid var(--border)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
            }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem' }}>Send a Message</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', opacity: 0.8 }}>First Name</label>
                  <input type="text" required style={inputStyle} placeholder="John" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', opacity: 0.8 }}>Last Name</label>
                  <input type="text" required style={inputStyle} placeholder="Doe" />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', opacity: 0.8 }}>Email Address</label>
                <input type="email" required style={inputStyle} placeholder="john@example.com" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', opacity: 0.8 }}>Subject</label>
                <select style={inputStyle}>
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Return Request</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', opacity: 0.8 }}>Your Message</label>
                <textarea required rows={5} style={inputStyle} placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '1rem',
  borderRadius: '1rem',
  background: 'var(--background)',
  border: '1px solid var(--border)',
  color: 'var(--foreground)',
  fontSize: '1rem',
  outline: 'none',
  transition: 'all 0.3s ease',
  fontFamily: 'inherit'
};

export default ContactPage;
