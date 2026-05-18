'use client';

import React, { useState } from 'react';
import { products } from '@/data/products';
import { Search, Plus, Filter, MoreVertical, Edit2, Trash2 } from 'lucide-react';

export default function AdminProducts() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2.5rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '0.5rem' }}>Products</h1>
          <p style={{ opacity: 0.5 }}>Manage your store's inventory and details.</p>
        </div>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 1.5rem', borderRadius: '1rem' }}>
          <Plus size={20} /> Add Product
        </button>
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
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
              <th style={{ padding: '1.2rem 1.5rem', opacity: 0.4, fontWeight: 'normal', fontSize: '0.85rem' }}>Product</th>
              <th style={{ padding: '1.2rem 1.5rem', opacity: 0.4, fontWeight: 'normal', fontSize: '0.85rem' }}>Category</th>
              <th style={{ padding: '1.2rem 1.5rem', opacity: 0.4, fontWeight: 'normal', fontSize: '0.85rem' }}>Price</th>
              <th style={{ padding: '1.2rem 1.5rem', opacity: 0.4, fontWeight: 'normal', fontSize: '0.85rem' }}>Status</th>
              <th style={{ padding: '1.2rem 1.5rem', opacity: 0.4, fontWeight: 'normal', fontSize: '0.85rem' }}>Stock</th>
              <th style={{ padding: '1.2rem 1.5rem', opacity: 0.4, fontWeight: 'normal', fontSize: '0.85rem' }}></th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.slice(0, 15).map((product) => (
              <tr key={product.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)', transition: 'all 0.2s' }} className="table-row">
                <td style={{ padding: '1rem 1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '45px', height: '45px', borderRadius: '0.5rem', overflow: 'hidden', flexShrink: 0 }}>
                      <img src={product.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>{product.name}</p>
                      <p style={{ fontSize: '0.75rem', opacity: 0.4 }}>ID: #{product.id.padStart(4, '0')}</p>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '1rem 1.5rem', fontSize: '0.9rem' }}>{product.category}</td>
                <td style={{ padding: '1rem 1.5rem', fontSize: '0.9rem', fontWeight: 'bold' }}>${product.price}</td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <span style={{ 
                    padding: '0.25rem 0.6rem', 
                    borderRadius: '2rem', 
                    fontSize: '0.75rem', 
                    fontWeight: 'bold',
                    background: product.stockStatus === 'In Stock' ? '#10b98115' : '#f59e0b15',
                    color: product.stockStatus === 'In Stock' ? '#10b981' : '#f59e0b'
                  }}>
                    {product.stockStatus}
                  </span>
                </td>
                <td style={{ padding: '1rem 1.5rem', fontSize: '0.9rem' }}>{Math.floor(Math.random() * 100) + 10} units</td>
                <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                    <button style={{ padding: '0.5rem', background: 'none', border: 'none', color: 'white', opacity: 0.4, cursor: 'pointer' }}><Edit2 size={16} /></button>
                    <button style={{ padding: '0.5rem', background: 'none', border: 'none', color: '#ef4444', opacity: 0.4, cursor: 'pointer' }}><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .table-row:hover {
          background: rgba(255, 255, 255, 0.02);
        }
      `}</style>
    </div>
  );
}
