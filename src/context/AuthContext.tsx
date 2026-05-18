'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  orders: Order[];
}

interface Order {
  id: string;
  date: string;
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Pending';
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock initial user for testing order history
  const mockUser: User = {
    id: 'u1',
    name: 'John Doe',
    email: 'user@example.com',
    orders: [
      {
        id: 'SZ-1024',
        date: '2026-05-10',
        total: 245.00,
        status: 'Delivered',
        items: [
          { id: '1', name: 'Neon Velocity Runner - Goku Edition', price: 129.99, quantity: 1, image: '/images/shoes.png' },
          { id: '12', name: 'CloudWalk Trainers', price: 110.00, quantity: 1, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80' }
        ]
      },
      {
        id: 'SZ-2056',
        date: '2026-05-15',
        total: 85.00,
        status: 'Processing',
        items: [
          { id: 'w1', name: 'Zen-Flow Yoga Set', price: 85.00, quantity: 1, image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80' }
        ]
      }
    ]
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('SPORT ZONE_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simple mock login
    if (email === 'user@example.com' && password === 'password123') {
      setUser(mockUser);
      localStorage.setItem('SPORT ZONE_user', JSON.stringify(mockUser));
      return true;
    }
    return false;
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simple mock signup
    const newUser: User = { id: Math.random().toString(), name, email, orders: [] };
    setUser(newUser);
    localStorage.setItem('SPORT ZONE_user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('SPORT ZONE_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
