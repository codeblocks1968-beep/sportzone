'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight,
  Package
} from 'lucide-react';
import { products } from '@/data/products';

const stats = [
  { name: 'Total Revenue', value: '$128,430', change: '+12.5%', icon: DollarSign, color: '#10b981' },
  { name: 'Total Orders', value: '1,429', change: '+18.2%', icon: ShoppingCart, color: '#2563eb' },
  { name: 'Active Users', value: '8,392', change: '+5.4%', icon: Users, color: '#8b5cf6' },
  { name: 'Avg. Order Value', value: '$89.87', change: '-2.1%', icon: TrendingUp, color: '#f59e0b' },
];

export default function AdminDashboard() {
  return (
    <div>
      <div style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '0.5rem' }}>Dashboard Overview</h1>
        <p style={{ opacity: 0.5 }}>Welcome back! Here's what's happening with SPORT ZONE today.</p>
      </div>

      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            style={{
              background: '#111113',
              padding: '1.5rem',
              borderRadius: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '1rem',
                background: `${stat.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <stat.icon size={24} color={stat.color} />
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                color: stat.change.startsWith('+') ? '#10b981' : '#ef4444',
                padding: '0.25rem 0.5rem',
                background: stat.change.startsWith('+') ? '#10b98110' : '#ef444410',
                borderRadius: '0.5rem'
              }}>
                {stat.change}
                {stat.change.startsWith('+') ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              </div>
            </div>
            <div>
              <p style={{ fontSize: '0.9rem', opacity: 0.5, marginBottom: '0.5rem' }}>{stat.name}</p>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '900' }}>{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '2rem'
      }}>
        {/* Recent Products */}
        <div style={{
          background: '#111113',
          padding: '2rem',
          borderRadius: '2rem',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '900' }}>Recent Inventory</h2>
            <button style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: 'bold', cursor: 'pointer' }}>View All</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {products.slice(0, 5).map((product) => (
              <div key={product.id} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.03)'
              }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '0.5rem', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold' }}>{product.name}</h4>
                  <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>{product.category}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontWeight: '900' }}>${product.price}</p>
                  <p style={{ fontSize: '0.75rem', color: '#10b981' }}>{product.stockStatus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div style={{
          background: '#111113',
          padding: '2rem',
          borderRadius: '2rem',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '2rem' }}>Recent Activity</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { user: 'Sarah J.', action: 'placed a new order', time: '2 mins ago', type: 'order' },
              { user: 'Mike R.', action: 'registered as a member', time: '15 mins ago', type: 'user' },
              { user: 'Order #4829', action: 'was marked as shipped', time: '1 hour ago', type: 'shipping' },
              { user: 'New Stock', action: 'added to Running Shoes', time: '3 hours ago', type: 'stock' },
              { user: 'Review', action: '5 stars for Velocity Runner', time: '5 hours ago', type: 'review' }
            ].map((activity, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: activity.type === 'order' ? 'var(--primary)' : '#8b5cf6',
                  marginTop: '0.4rem',
                  flexShrink: 0
                }}></div>
                <div>
                  <p style={{ fontSize: '0.95rem' }}><span style={{ fontWeight: 'bold' }}>{activity.user}</span> {activity.action}</p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.4 }}>{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
