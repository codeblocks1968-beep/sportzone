'use client';

import React from 'react';
import { User, Mail, Shield, MoreHorizontal } from 'lucide-react';

export default function AdminUsers() {
  const users = [
    { id: 1, name: 'Adhiraj Singh', email: 'adhiraj@example.com', role: 'Super Admin', status: 'Active' },
    { id: 2, name: 'Sarah Jenkins', email: 'sarah.j@gmail.com', role: 'Manager', status: 'Active' },
    { id: 3, name: 'Michael Ross', email: 'm.ross@outlook.com', role: 'Customer', status: 'Active' },
    { id: 4, name: 'Emily Chen', email: 'emily.c@company.com', role: 'Customer', status: 'Inactive' },
    { id: 5, name: 'David Wilson', email: 'david.w@gmail.com', role: 'Support', status: 'Active' },
  ];

  return (
    <div>
      <div style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '0.5rem' }}>Users</h1>
        <p style={{ opacity: 0.5 }}>Manage user accounts and permissions.</p>
      </div>

      <div style={{
        background: '#111113',
        borderRadius: '2rem',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        overflow: 'hidden'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: 'rgba(255, 255, 255, 0.01)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <th style={{ padding: '1.2rem 1.5rem', opacity: 0.4, fontWeight: 'normal', fontSize: '0.85rem' }}>User</th>
              <th style={{ padding: '1.2rem 1.5rem', opacity: 0.4, fontWeight: 'normal', fontSize: '0.85rem' }}>Role</th>
              <th style={{ padding: '1.2rem 1.5rem', opacity: 0.4, fontWeight: 'normal', fontSize: '0.85rem' }}>Status</th>
              <th style={{ padding: '1.2rem 1.5rem', opacity: 0.4, fontWeight: 'normal', fontSize: '0.85rem' }}>Joined</th>
              <th style={{ padding: '1.2rem 1.5rem', opacity: 0.4, fontWeight: 'normal', fontSize: '0.85rem' }}></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
                <td style={{ padding: '1.2rem 1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      background: 'rgba(37, 99, 235, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary)'
                    }}>
                      <User size={20} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 'bold' }}>{user.name}</p>
                      <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>{user.email}</p>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '1.2rem 1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    <Shield size={16} color={user.role.includes('Admin') ? 'var(--primary)' : 'white'} />
                    {user.role}
                  </div>
                </td>
                <td style={{ padding: '1.2rem 1.5rem' }}>
                  <span style={{ 
                    padding: '0.25rem 0.6rem', 
                    borderRadius: '2rem', 
                    fontSize: '0.75rem', 
                    fontWeight: 'bold',
                    background: user.status === 'Active' ? '#10b98115' : '#ef444415',
                    color: user.status === 'Active' ? '#10b981' : '#ef4444'
                  }}>
                    {user.status}
                  </span>
                </td>
                <td style={{ padding: '1.2rem 1.5rem', opacity: 0.6, fontSize: '0.9rem' }}>Jan 12, 2026</td>
                <td style={{ padding: '1.2rem 1.5rem', textAlign: 'right' }}>
                  <button style={{ background: 'none', border: 'none', color: 'white', opacity: 0.4, cursor: 'pointer' }}><MoreHorizontal size={20} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
