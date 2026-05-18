'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Package, User as UserIcon, LogOut, ChevronRight, Clock, MapPin, CreditCard } from 'lucide-react';
import Image from 'next/image';

const ProfilePage = () => {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>Loading...</div>;
  }

  return (
    <div style={{ padding: '4rem 0' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '300px 1fr', 
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Sidebar */}
          <aside>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{
                background: 'var(--card)',
                padding: '2rem',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                textAlign: 'center'
              }}
            >
              <div style={{
                width: '100px',
                height: '100px',
                background: 'var(--accent)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: 'var(--primary)',
                border: '4px solid var(--primary)'
              }}>
                <UserIcon size={50} />
              </div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{user.name}</h2>
              <p style={{ opacity: 0.7, marginBottom: '2rem' }}>{user.email}</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', textAlign: 'left' }}>
                <button style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem', borderRadius: 'var(--radius)', background: 'var(--accent)', border: 'none', width: '100%', cursor: 'pointer' }}>
                  <Package size={20} /> My Orders
                </button>
                <button style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem', borderRadius: 'var(--radius)', background: 'none', border: 'none', width: '100%', cursor: 'pointer', opacity: 0.7 }}>
                  <MapPin size={20} /> Addresses
                </button>
                <button style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem', borderRadius: 'var(--radius)', background: 'none', border: 'none', width: '100%', cursor: 'pointer', opacity: 0.7 }}>
                  <CreditCard size={20} /> Payment Methods
                </button>
                <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '0.5rem 0' }} />
                <button 
                  onClick={() => { logout(); router.push('/'); }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem', borderRadius: 'var(--radius)', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: 'none', width: '100%', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  <LogOut size={20} /> Logout
                </button>
              </div>
            </motion.div>
          </aside>

          {/* Content */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Order History</h1>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {user.orders.map((order) => (
                  <div 
                    key={order.id}
                    style={{
                      background: 'var(--card)',
                      borderRadius: 'var(--radius)',
                      border: '1px solid var(--border)',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{
                      padding: '1.5rem 2rem',
                      background: 'var(--accent)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderBottom: '1px solid var(--border)'
                    }}>
                      <div style={{ display: 'flex', gap: '3rem' }}>
                        <div>
                          <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.3rem' }}>Order Placed</p>
                          <p style={{ fontWeight: 'bold' }}>{order.date}</p>
                        </div>
                        <div>
                          <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.3rem' }}>Total Amount</p>
                          <p style={{ fontWeight: 'bold' }}>${order.total.toFixed(2)}</p>
                        </div>
                        <div>
                          <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.3rem' }}>Status</p>
                          <span style={{ 
                            padding: '0.2rem 0.8rem', 
                            borderRadius: '100px', 
                            fontSize: '0.8rem', 
                            fontWeight: 'bold',
                            background: order.status === 'Delivered' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                            color: order.status === 'Delivered' ? '#22c55e' : '#3b82f6',
                            border: `1px solid ${order.status === 'Delivered' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(59, 130, 246, 0.2)'}`
                          }}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      <p style={{ fontWeight: 'bold', opacity: 0.5 }}>Order #{order.id}</p>
                    </div>

                    <div style={{ padding: '2rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {order.items.map((item) => (
                          <div key={item.id} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                            <div style={{ position: 'relative', width: '80px', height: '80px', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)' }}>
                              <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div style={{ flex: 1 }}>
                              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{item.name}</h4>
                              <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Qty: {item.quantity}</p>
                            </div>
                            <p style={{ fontWeight: 'bold' }}>${item.price.toFixed(2)}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                        <button className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>Track Order</button>
                        <button className="btn-secondary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>View Details</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
