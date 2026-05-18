'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sidebarItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
  { name: 'Products', icon: Package, href: '/admin/products' },
  { name: 'Orders', icon: ShoppingCart, href: '/admin/orders' },
  { name: 'Users', icon: Users, href: '/admin/users' },
  { name: 'Settings', icon: Settings, href: '/admin/settings' },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Basic auth check
    const auth = localStorage.getItem('adminLoggedIn');
    const isLoginPage = pathname === '/admin/login';

    if (auth !== 'true' && !isLoginPage) {
      router.push('/admin/login');
    } else if (auth === 'true' && isLoginPage) {
      router.push('/admin');
    } else {
      setIsAuthorized(true);
    }
  }, [router, pathname]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    router.push('/admin/login');
  };

  if (!isAuthorized && pathname !== '/admin/login') return <div style={{ height: '100vh', background: 'var(--bg)' }}></div>;

  if (pathname === '/admin/login') return <>{children}</>;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0a0a0b', color: 'white' }}>
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? '280px' : '80px' }}
        style={{
          background: '#111113',
          borderRight: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          position: 'sticky',
          top: 0,
          height: '100vh',
          zIndex: 100,
          overflow: 'hidden'
        }}
      >
        <div style={{ padding: '2rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <div style={{
            minWidth: '40px',
            height: '40px',
            background: 'var(--primary)',
            borderRadius: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ShieldCheck size={24} color="white" />
          </div>
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ fontWeight: '900', fontSize: '1.2rem', letterSpacing: '-0.5px' }}
              >
                ADMIN<span style={{ color: 'var(--primary)' }}>PANEL</span>
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <nav style={{ flex: 1, padding: '2rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {sidebarItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                borderRadius: '0.75rem',
                color: pathname === item.href ? 'white' : 'rgba(255, 255, 255, 0.4)',
                background: pathname === item.href ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
                transition: 'all 0.3s',
                textDecoration: 'none',
                border: pathname === item.href ? '1px solid rgba(37, 99, 235, 0.2)' : '1px solid transparent'
              }}
            >
              <item.icon size={22} color={pathname === item.href ? 'var(--primary)' : 'currentColor'} />
              <AnimatePresence>
                {isSidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          ))}
        </nav>

        <div style={{ padding: '2rem 1rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              borderRadius: '0.75rem',
              color: '#ef4444',
              background: 'rgba(239, 68, 68, 0.05)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            <LogOut size={22} />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Header */}
        <header style={{
          height: '80px',
          background: 'rgba(16, 16, 18, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem',
          position: 'sticky',
          top: 0,
          zIndex: 90
        }}>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: 'none',
              color: 'white',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Adhiraj Singh</p>
              <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>Super Admin</p>
            </div>
            <div style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, var(--primary), #ef4444)',
              border: '2px solid rgba(255, 255, 255, 0.1)'
            }}></div>
          </div>
        </header>

        {/* Content Area */}
        <div style={{ padding: '2.5rem', flex: 1 }}>
          {children}
        </div>
      </main>
    </div>
  );
}
