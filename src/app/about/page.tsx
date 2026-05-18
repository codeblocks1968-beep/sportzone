'use client';

import React from 'react';
import Image from 'next/image';
import { Target, Users, Zap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div>
      {/* Hero */}
      <section style={{
        height: '50vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000'
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.4 }}>
          <Image src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80" alt="About Hero" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '4rem', color: 'white' }}
          >
            OUR <span style={{ color: 'var(--primary)' }}>STORY</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.2rem', color: 'white', marginTop: '1rem' }}
          >
            Made with love by Mahak
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Beyond Performance</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, opacity: 0.8, marginBottom: '2rem' }}>
                Founded in 2024, SPORT ZONE was born out of a simple idea: that every athlete, from the weekend warrior to the pro sprinter, deserves gear that empowers them to push their boundaries.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.8 }}>
                We combine cutting-edge technology with sustainable materials to create products that not only perform at the highest level but also respect the environments where we play.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ position: 'relative', height: '450px', borderRadius: 'var(--radius)', overflow: 'hidden' }}
            >
              <Image src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80" alt="Athlete" fill style={{ objectFit: 'cover' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '6rem 0', background: 'var(--accent)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ margin: '0 auto 2rem' }}>Our Values</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
            {[
              { icon: <Target size={40} />, title: 'Innovation', desc: 'Constantly pushing the limits of sports technology.' },
              { icon: <Zap size={40} />, title: 'Speed', desc: 'Fast delivery, fast response, and gear built for velocity.' },
              { icon: <Users size={40} />, title: 'Community', desc: 'Empowering athletes to connect and grow together.' },
              { icon: <Award size={40} />, title: 'Quality', desc: 'Every stitch and material is tested for extreme endurance.' }
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: '3rem 2rem',
                  background: 'var(--card)',
                  borderRadius: 'var(--radius)',
                  textAlign: 'center',
                  border: '1px solid var(--border)'
                }}
              >
                <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                  {value.icon}
                </div>
                <h3 style={{ marginBottom: '1rem' }}>{value.title}</h3>
                <p style={{ opacity: 0.7 }}>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
