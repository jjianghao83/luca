import { Navigation } from './Navigation';
import { ArticleCard } from './ArticleCard';
import { Footer } from './Footer';
import { Article, Category } from '../App';
import { articles } from '../data/mockData';

type CategoryPageProps = {
  category: Category;
  onNavigateToHome: () => void;
  onNavigateToCategory: (category: Category) => void;
  onNavigateToArticle: (article: Article) => void;
};

export function CategoryPage({ 
  category, 
  onNavigateToHome, 
  onNavigateToCategory,
  onNavigateToArticle 
}: CategoryPageProps) {
  const categoryArticles = articles.filter(
    (article) => article.category === category.name
  );

  return (
    <div>
      <Navigation 
        onNavigateToHome={onNavigateToHome}
        onNavigateToCategory={onNavigateToCategory}
      />

      <div 
        className="text-white py-12 lg:py-16"
        style={{ 
          background: `linear-gradient(135deg, ${category.color} 0%, ${category.color}dd 100%)`
        }}
      >
        <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
          <h1 
            className="mb-3 lg:mb-4 text-3xl lg:text-4xl"
            style={{ lineHeight: '1.2' }}
          >
            {category.name}
          </h1>
          <p 
            className="text-white/90"
            style={{ 
              fontSize: '16px',
              lineHeight: '1.5'
            }}
          >
            深度解读 · 独立思考 · 人文关怀
          </p>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="mb-8 lg:mb-12">
          <h2 
            className="mb-4 lg:mb-6 text-xl lg:text-2xl"
            style={{ 
              color: '#1E293B',
              lineHeight: '1.2'
            }}
          >
            子栏目
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-3 lg:gap-4">
            {category.subCategories.map((subCategory) => {
              const count = categoryArticles.filter(
                (article) => article.subCategory === subCategory.name
              ).length;
              
              return (
                <div
                  key={subCategory.id}
                  className="px-5 lg:px-6 py-4 lg:py-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-2"
                  style={{ borderColor: '#E2E8F0' }}
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span 
                      className="text-lg"
                      style={{ color: '#1E293B' }}
                    >
                      {subCategory.name}
                    </span>
                    <span 
                      className="px-2 py-0.5 rounded flex-shrink-0"
                      style={{ 
                        backgroundColor: '#EFF6FF',
                        color: '#60A5FA',
                        fontSize: '13px'
                      }}
                    >
                      {count}
                    </span>
                  </div>
                  <p 
                    className="text-sm"
                    style={{ 
                      color: '#64748B',
                      fontSize: '14px',
                      lineHeight: '1.5'
                    }}
                  >
                    {subCategory.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-6 lg:mb-8">
          <h2 
            className="mb-2 text-xl lg:text-2xl"
            style={{ 
              color: '#1E293B',
              lineHeight: '1.2'
            }}
          >
            {category.name}
          </h2>
          <div 
            className="w-16 h-1"
            style={{ backgroundColor: category.color }}
          />
        </div>

        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {categoryArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={onNavigateToArticle}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16" style={{ color: '#64748B' }}>
            <p style={{ fontSize: '16px' }}>暂无文章</p>
          </div>
        )}
      </div>

      <Footer onNavigateToHome={onNavigateToHome} />
    </div>
  );
}
