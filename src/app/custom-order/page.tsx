'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, UploadCloud, Scissors } from 'lucide-react';

const CustomOrderPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Apparel',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Custom order request submitted successfully! Our team will contact you shortly with a quote.');
    setFormData({ name: '', email: '', category: 'Apparel', description: '' });
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
            Create Your <span style={{ color: 'var(--primary)' }}>Masterpiece</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ opacity: 0.7, maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}
          >
            Can't find exactly what you're looking for? Let us bring your vision to life. 
            Request a custom design for apparel, figures, masks, or decor.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Information Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem' }}>How It Works</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  background: 'var(--accent)',
                  padding: '1rem',
                  borderRadius: '1rem',
                  color: 'var(--primary)'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>1</div>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Submit Your Vision</h3>
                  <p style={{ opacity: 0.7 }}>Fill out the form with detailed descriptions of what you want us to create.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  background: 'var(--accent)',
                  padding: '1rem',
                  borderRadius: '1rem',
                  color: 'var(--primary)'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>2</div>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Review & Quote</h3>
                  <p style={{ opacity: 0.7 }}>Our artisans will review your request and provide a detailed quote and timeline.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  background: 'var(--accent)',
                  padding: '1rem',
                  borderRadius: '1rem',
                  color: 'var(--primary)'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>3</div>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Creation & Delivery</h3>
                  <p style={{ opacity: 0.7 }}>Once approved, we'll craft your custom piece and ship it directly to you.</p>
                </div>
              </div>
            </div>

            <div style={{ 
              marginTop: '4rem', 
              padding: '2rem', 
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              borderRadius: '2rem',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Scissors size={48} style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Premium Craftsmanship</h3>
              <p style={{ opacity: 0.9 }}>Every custom piece is crafted with the highest quality materials to ensure durability and aesthetic perfection.</p>
            </div>
          </motion.div>

          {/* Custom Order Form */}
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
            <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem' }}>Request Form</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', opacity: 0.8 }}>Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  style={inputStyle} 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', opacity: 0.8 }}>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  style={inputStyle} 
                  placeholder="john@example.com" 
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', opacity: 0.8 }}>Product Category</label>
                <select 
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="Apparel">Apparel (T-Shirts, Hoodies)</option>
                  <option value="Figure">Action Figure / Collectible</option>
                  <option value="Mask">Cosplay Mask</option>
                  <option value="Decor">Home Decor (LED, Posters)</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', opacity: 0.8 }}>Design Details</label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required 
                  rows={5} 
                  style={inputStyle} 
                  placeholder="Describe the character, colors, poses, or specific materials you want..."
                ></textarea>
              </div>
              
              <div style={{
                border: '2px dashed var(--border)',
                padding: '2rem',
                borderRadius: '1rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: 'var(--background)'
              }} className="upload-area">
                <UploadCloud size={32} style={{ margin: '0 auto 1rem', color: 'var(--primary)' }} />
                <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Upload Reference Images</p>
                <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>PNG, JPG up to 10MB (Optional)</p>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem', marginTop: '1rem' }}>
                Submit Request <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      <style jsx>{`
        .upload-area:hover {
          border-color: var(--primary);
          background: var(--accent);
        }
      `}</style>
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

export default CustomOrderPage;
