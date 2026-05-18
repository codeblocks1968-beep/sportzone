'use client';

import React from 'react';
import { ShoppingBag, Search, Filter, ExternalLink } from 'lucide-react';

export default function AdminOrders() {
  const orders = [
    { id: '#ORD-7231', customer: 'Sarah Jenkins', date: 'May 16, 2026', total: '$129.99', status: 'Processing', items: 2 },
    { id: '#ORD-7230', customer: 'Michael Ross', date: 'May 16, 2026', total: '$45.00', status: 'Shipped', items: 1 },
    { id: '#ORD-7229', customer: 'Emily Chen', date: 'May 15, 2026', total: '$210.50', status: 'Delivered', items: 3 },
    { id: '#ORD-7228', customer: 'David Wilson', date: 'May 15, 2026', total: '$89.99', status: 'Processing', items: 1 },
    { id: '#ORD-7227', customer: 'Jessica Alba', date: 'May 14, 2026', total: '$1,200.00', status: 'Cancelled', items: 5 },
  ];

  return (
    <div>
      <div style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '0.5rem' }}>Orders</h1>
        <p style={{ opacity: 0.5 }}>Track and manage customer orders.</p>
      </div>

      <div style={{
        background: '#111113',
        borderRadius: '2rem',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        overflow: 'hidden'
      }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', gap: '1rem' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }} size={18} />
            <input 
              type="text" 
              placeholder="Search orders..." 
              style={{
                width: '100%',
                padding: '0.8rem 1rem 0.8rem 2.8rem',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '0.8rem',
                color: 'white',
                outline: 'none'
              }}
            />
          </div>
          <button style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            padding: '0 1.5rem', 
            background: 'rgba(255, 255, 255, 0.03)', 
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '0.8rem',
            color: 'white',
            cursor: 'pointer'
          }}>
            <Filter size={18} /> Filter
          </button>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: 'rgba(255, 255, 255, 0.01)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <th style={{ padding: '1.2rem 1.5rem', opacity: 0.4, fontWeight: 'normal', fontSize: '0.85rem' }}>Order ID</th>
              <th style={{ padding: '1.2rem 1.5rem', opacity: 0.4, fontWeight: 'normal', fontSize: '0.85rem' }}>Customer</th>
              <th style={{ padding: '1.2rem 1.5rem', opacity: 0.4, fontWeight: 'normal', fontSize: '0.85rem' }}>Date</th>
              <th style={{ padding: '1.2rem 1.5rem', opacity: 0.4, fontWeight: 'normal', fontSize: '0.85rem' }}>Total</th>
              <th style={{ padding: '1.2rem 1.5rem', opacity: 0.4, fontWeight: 'normal', fontSize: '0.85rem' }}>Status</th>
              <th style={{ padding: '1.2rem 1.5rem', opacity: 0.4, fontWeight: 'normal', fontSize: '0.85rem' }}></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                <td style={{ padding: '1.2rem 1.5rem', fontWeight: 'bold' }}>{order.id}</td>
                <td style={{ padding: '1.2rem 1.5rem' }}>{order.customer}</td>
                <td style={{ padding: '1.2rem 1.5rem', opacity: 0.6 }}>{order.date}</td>
                <td style={{ padding: '1.2rem 1.5rem', fontWeight: 'bold' }}>{order.total}</td>
                <td style={{ padding: '1.2rem 1.5rem' }}>
                  <span style={{ 
                    padding: '0.25rem 0.6rem', 
                    borderRadius: '2rem', 
                    fontSize: '0.75rem', 
                    fontWeight: 'bold',
                    background: order.status === 'Processing' ? '#2563eb15' : 
                               order.status === 'Shipped' ? '#8b5cf615' : 
                               order.status === 'Delivered' ? '#10b98115' : '#ef444415',
                    color: order.status === 'Processing' ? '#2563eb' : 
                           order.status === 'Shipped' ? '#8b5cf6' : 
                           order.status === 'Delivered' ? '#10b981' : '#ef4444'
                  }}>
                    {order.status}
                  </span>
                </td>
                <td style={{ padding: '1.2rem 1.5rem', textAlign: 'right' }}>
                  <button style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer' }}><ExternalLink size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
