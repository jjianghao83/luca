import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Category } from '../App';
import { categories } from '../data/mockData';

type NavigationProps = {
  onNavigateToHome: () => void;
  onNavigateToCategory: (category: Category) => void;
};

export function Navigation({ onNavigateToHome, onNavigateToCategory }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="cursor-pointer flex-shrink-0"
            onClick={() => {
              onNavigateToHome();
              setIsMobileMenuOpen(false);
            }}
          >
            <h1 style={{ color: '#1E293B' }}>光影观点</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={onNavigateToHome}
              className="transition-colors"
              style={{ color: '#64748B' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#60A5FA'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
            >
              首页
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onNavigateToCategory(category)}
                className="transition-colors"
                style={{ color: '#64748B' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#60A5FA'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
              >
                {category.name}
              </button>
            ))}
            <button
              className="transition-colors"
              style={{ color: '#64748B' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#60A5FA'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
            >
              关于我们
            </button>
            <button
              className="transition-colors p-2"
              style={{ color: '#64748B' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#60A5FA'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: '#64748B' }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: '#E2E8F0' }}>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  onNavigateToHome();
                  setIsMobileMenuOpen(false);
                }}
                className="text-left py-2 transition-colors"
                style={{ color: '#64748B' }}
              >
                首页
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    onNavigateToCategory(category);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left py-2 transition-colors"
                  style={{ color: '#64748B' }}
                >
                  {category.name}
                </button>
              ))}
              <button
                className="text-left py-2 transition-colors"
                style={{ color: '#64748B' }}
              >
                关于我们
              </button>
              <button
                className="flex items-center gap-2 py-2 transition-colors"
                style={{ color: '#64748B' }}
              >
                <Search className="w-5 h-5" />
                <span>搜索</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
