import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { CategoryPage } from './components/CategoryPage';
import { ArticleDetailPage } from './components/ArticleDetailPage';

export type Article = {
  id: number;
  title: string;
  summary: string;
  image: string;
  category: string;
  categoryId: string;
  subCategory?: string;
  content: string;
  date: string;
  author: string;
};

export type SubCategory = {
  id: string;
  name: string;
  description: string;
};

export type Category = {
  id: string;
  name: string;
  color: string;
  subCategories: SubCategory[];
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'category' | 'detail'>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleNavigateToCategory = (category: Category) => {
    setSelectedCategory(category);
    setCurrentPage('category');
  };

  const handleNavigateToArticle = (article: Article) => {
    setSelectedArticle(article);
    setCurrentPage('detail');
  };

  const handleNavigateToHome = () => {
    setCurrentPage('home');
    setSelectedCategory(null);
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFC' }}>
      {currentPage === 'home' && (
        <HomePage 
          onNavigateToCategory={handleNavigateToCategory}
          onNavigateToArticle={handleNavigateToArticle}
        />
      )}
      {currentPage === 'category' && selectedCategory && (
        <CategoryPage 
          category={selectedCategory}
          onNavigateToHome={handleNavigateToHome}
          onNavigateToArticle={handleNavigateToArticle}
          onNavigateToCategory={handleNavigateToCategory}
        />
      )}
      {currentPage === 'detail' && selectedArticle && (
        <ArticleDetailPage 
          article={selectedArticle}
          onNavigateToHome={handleNavigateToHome}
          onNavigateToCategory={handleNavigateToCategory}
        />
      )}
    </div>
  );
}
