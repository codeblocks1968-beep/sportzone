'use client';

import React from 'react';
import { ChevronDown, Star } from 'lucide-react';

interface FilterSidebarProps {
  filters: {
    category: string;
    gender: string;
    size: string;
    color: string;
    priceRange: [number, number];
    brand: string;
    rating: number;
    sort: string;
  };
  setFilters: (filters: any) => void;
  categories: string[];
  brands: string[];
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, setFilters, categories, brands }) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '7', '8', '9', '10', '11'];
  const colors = [
    { name: 'Black', hex: '#000000' },
    { name: 'White', hex: '#ffffff' },
    { name: 'Gray', hex: '#666666' },
    { name: 'Navy', hex: '#1e293b' },
    { name: 'Blue', hex: '#2563eb' },
    { name: 'Red', hex: '#ef4444' },
    { name: 'Pink', hex: '#ec4899' },
    { name: 'Neon', hex: '#ccff00' }
  ];

  const updateFilter = (key: string, value: any) => {
    setFilters((prev: any) => ({ ...prev, [key]: value }));
  };

  return (
    <aside style={{ width: '280px', flexShrink: 0 }} className="shop-sidebar">
      {/* Gender Selection (if not pre-filtered) */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h4 style={{ marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Collection</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {['All', 'Men', 'Women', 'Unisex'].map(g => (
            <label key={g} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }}>
              <input 
                type="radio" 
                name="gender" 
                checked={filters.gender === g} 
                onChange={() => updateFilter('gender', g)}
                style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }}
              />
              <span style={{ fontSize: '1rem', fontWeight: filters.gender === g ? 'bold' : 'normal' }}>{g}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h4 style={{ marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Category</h4>
        <select 
          value={filters.category} 
          onChange={(e) => updateFilter('category', e.target.value)}
          style={{
            width: '100%',
            padding: '0.8rem',
            borderRadius: 'var(--radius)',
            border: '1px solid var(--border)',
            background: 'var(--background)',
            color: 'var(--foreground)',
            fontWeight: '500'
          }}
        >
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </div>

      {/* Price Range */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h4 style={{ marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Price Range</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <input 
            type="number" 
            placeholder="Min" 
            value={filters.priceRange[0]}
            onChange={(e) => updateFilter('priceRange', [parseInt(e.target.value) || 0, filters.priceRange[1]])}
            style={{ width: '80px', padding: '0.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)' }}
          />
          <span>-</span>
          <input 
            type="number" 
            placeholder="Max" 
            value={filters.priceRange[1]}
            onChange={(e) => updateFilter('priceRange', [filters.priceRange[0], parseInt(e.target.value) || 1000])}
            style={{ width: '80px', padding: '0.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)' }}
          />
        </div>
      </div>

      {/* Sizes */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h4 style={{ marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Size</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {sizes.map(size => (
            <button
              key={size}
              onClick={() => updateFilter('size', filters.size === size ? '' : size)}
              style={{
                width: '45px',
                height: '45px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                background: filters.size === size ? 'var(--primary)' : 'var(--background)',
                color: filters.size === size ? 'white' : 'var(--foreground)',
                fontWeight: '600',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h4 style={{ marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Color</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {colors.map(color => (
            <button
              key={color.name}
              onClick={() => updateFilter('color', filters.color === color.name ? '' : color.name)}
              title={color.name}
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: color.hex,
                border: filters.color === color.name ? '3px solid var(--primary)' : '1px solid var(--border)',
                cursor: 'pointer',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Brands */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h4 style={{ marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Brand</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {brands.map(brand => (
            <label key={brand} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }}>
              <input 
                type="checkbox" 
                checked={filters.brand === brand}
                onChange={() => updateFilter('brand', filters.brand === brand ? '' : brand)}
                style={{ width: '16px', height: '16px' }}
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h4 style={{ marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Minimum Rating</h4>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {[1, 2, 3, 4, 5].map(star => (
            <button 
              key={star} 
              onClick={() => updateFilter('rating', star)}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <Star size={24} fill={star <= filters.rating ? 'gold' : 'none'} stroke={star <= filters.rating ? 'gold' : 'currentColor'} />
            </button>
          ))}
        </div>
      </div>

      <button 
        onClick={() => setFilters({
          category: 'All',
          gender: 'All',
          size: '',
          color: '',
          priceRange: [0, 1000],
          brand: '',
          rating: 0,
          sort: 'New Arrivals'
        })}
        style={{
          width: '100%',
          padding: '1rem',
          borderRadius: 'var(--radius)',
          background: 'var(--accent)',
          border: 'none',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginTop: '1rem'
        }}
      >
        Clear All Filters
      </button>

      <style jsx>{`
        @media (max-width: 1024px) {
          .shop-sidebar {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
};

export default FilterSidebar;
