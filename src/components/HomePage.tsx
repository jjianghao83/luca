import { Navigation } from './Navigation';
import { Carousel } from './Carousel';
import { ArticleCard } from './ArticleCard';
import { Footer } from './Footer';
import { Article, Category } from '../App';
import { articles, featuredArticles } from '../data/mockData';

type HomePageProps = {
  onNavigateToCategory: (category: Category) => void;
  onNavigateToArticle: (article: Article) => void;
};

export function HomePage({ onNavigateToCategory, onNavigateToArticle }: HomePageProps) {
  const handleNavigateToHome = () => {
    // Already on home page
  };

  return (
    <div>
      <Navigation 
        onNavigateToHome={handleNavigateToHome}
        onNavigateToCategory={onNavigateToCategory}
      />
      
      <Carousel 
        articles={featuredArticles}
        onArticleClick={onNavigateToArticle}
      />

      <div className="max-w-[1920px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="mb-6 lg:mb-8">
          <h2 
            className="mb-2 text-2xl lg:text-3xl"
            style={{ 
              color: '#1E293B',
              lineHeight: '1.2'
            }}
          >
            最新文章
          </h2>
          <div 
            className="w-16 h-1"
            style={{ backgroundColor: '#60A5FA' }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onClick={onNavigateToArticle}
            />
          ))}
        </div>
      </div>

      <Footer onNavigateToHome={handleNavigateToHome} />
    </div>
  );
}
