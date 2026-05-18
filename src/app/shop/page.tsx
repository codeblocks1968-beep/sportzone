'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import FilterSidebar from '@/components/FilterSidebar';
import { ChevronDown, Search as SearchIcon, SlidersHorizontal } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

const ShopPage = () => {
  const searchParams = useSearchParams();
  const initialGender = searchParams.get('gender') || 'All';
  const initialSearch = searchParams.get('q') || '';

  const [filters, setFilters] = useState({
    category: 'All',
    gender: initialGender,
    size: '',
    color: '',
    priceRange: [0, 1000] as [number, number],
    brand: '',
    rating: 0,
    sort: 'New Arrivals'
  });

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    const gender = searchParams.get('gender');
    if (gender) setFilters(prev => ({ ...prev, gender }));
    const q = searchParams.get('q');
    if (q) setSearchQuery(q);
  }, [searchParams]);

  const categories = ['All', ...new Set(products.map(p => p.category))];
  const brands = [...new Set(products.map(p => p.brand))];

  const filteredProducts = useMemo(() => {
    let result = products.filter(p => {
      const matchCategory = filters.category === 'All' || p.category === filters.category;
      const matchGender = filters.gender === 'All' || p.gender === filters.gender;
      const matchSize = !filters.size || (p.sizes && p.sizes.includes(filters.size));
      const matchColor = !filters.color || (p.colors && p.colors.some(c => c.toLowerCase().includes(filters.color.toLowerCase())));
      const matchPrice = p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1];
      const matchBrand = !filters.brand || p.brand === filters.brand;
      const matchRating = p.rating >= filters.rating;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchGender && matchSize && matchColor && matchPrice && matchBrand && matchRating && matchSearch;
    });

    // Sorting
    if (filters.sort === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    } else if (filters.sort === 'Top Rated') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (filters.sort === 'Best Sellers') {
      result.sort((a, b) => (a.trending ? -1 : 1));
    }

    return result;
  }, [filters, searchQuery]);

  return (
    <div style={{ padding: '4rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1rem', textTransform: 'uppercase' }}>
            {filters.gender !== 'All' ? `${filters.gender}'s Collection` : 'Our Collections'}
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.7, maxWidth: '700px', margin: '0 auto' }}>
            Explore our premium range of high-performance sportswear, engineered for the modern athlete.
          </p>
        </div>

        {/* Search Bar & Sort */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: '2rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ position: 'relative', flex: 1, minWidth: '300px' }}>
            <SearchIcon size={20} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }} />
            <input
              type="text"
              placeholder="Search products, materials, or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1rem 1rem 3rem',
                borderRadius: 'var(--radius)',
                background: 'var(--accent)',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
                fontSize: '1rem',
                fontWeight: '500'
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button 
              className="mobile-filter-btn"
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              style={{
                display: 'none',
                padding: '1rem',
                borderRadius: 'var(--radius)',
                background: 'var(--accent)',
                border: '1px solid var(--border)',
                cursor: 'pointer'
              }}
            >
              <SlidersHorizontal size={20} />
            </button>

            <div style={{ position: 'relative' }}>
              <select 
                value={filters.sort}
                onChange={(e) => setFilters(f => ({ ...f, sort: e.target.value }))}
                style={{
                  padding: '1rem 3rem 1rem 1.5rem',
                  borderRadius: 'var(--radius)',
                  background: 'var(--accent)',
                  color: 'var(--foreground)',
                  border: '1px solid var(--border)',
                  appearance: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '1rem'
                }}
              >
                <option>New Arrivals</option>
                <option>Best Sellers</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Top Rated</option>
              </select>
              <ChevronDown size={18} style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', opacity: 0.6 }} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '3rem' }}>
          {/* Desktop Sidebar */}
          <FilterSidebar 
            filters={filters} 
            setFilters={setFilters} 
            categories={categories} 
            brands={brands} 
          />

          {/* Product Grid */}
          <div style={{ flex: 1 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '2.5rem'
            }}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div style={{ textAlign: 'center', padding: '8rem 0' }}>
                <h2 style={{ opacity: 0.5 }}>No items found</h2>
                <p style={{ opacity: 0.7 }}>Try adjusting your filters or search query.</p>
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
                  className="btn-primary"
                  style={{ marginTop: '2rem' }}
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .mobile-filter-btn {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ShopPage;
