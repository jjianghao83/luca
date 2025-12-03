import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Article, Category } from '../App';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type ArticleDetailPageProps = {
  article: Article;
  onNavigateToHome: () => void;
  onNavigateToCategory: (category: Category) => void;
};

export function ArticleDetailPage({ 
  article, 
  onNavigateToHome,
  onNavigateToCategory
}: ArticleDetailPageProps) {
  const categoryColor = article.categoryId === 'film' ? '#1E3A8A' : '#0F766E';

  return (
    <div>
      <Navigation 
        onNavigateToHome={onNavigateToHome}
        onNavigateToCategory={onNavigateToCategory}
      />

      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-6 lg:py-12">
        <button
          onClick={onNavigateToHome}
          className="flex items-center gap-2 mb-6 lg:mb-8 transition-colors"
          style={{ color: '#64748B' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#60A5FA'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
        >
          <ArrowLeft className="w-5 h-5" />
          <span style={{ fontSize: '16px' }}>返回首页</span>
        </button>

        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="aspect-[21/9] w-full overflow-hidden">
            <ImageWithFallback
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 lg:p-12">
            <div className="flex flex-wrap items-center gap-3 mb-4 lg:mb-6">
              <span 
                className="px-3 py-1 text-white rounded"
                style={{ 
                  backgroundColor: categoryColor,
                  fontSize: '13px'
                }}
              >
                {article.category}
              </span>
              {article.subCategory && (
                <span 
                  className="px-3 py-1 rounded"
                  style={{ 
                    backgroundColor: '#F1F5F9',
                    color: '#64748B',
                    fontSize: '13px'
                  }}
                >
                  {article.subCategory}
                </span>
              )}
              <div className="flex items-center gap-4 ml-auto">
                <div className="flex items-center gap-2" style={{ color: '#64748B', fontSize: '14px' }}>
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2" style={{ color: '#64748B', fontSize: '14px' }}>
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
              </div>
            </div>

            <h1 
              className="mb-4 lg:mb-6 text-2xl lg:text-4xl"
              style={{ 
                color: '#1E293B',
                lineHeight: '1.2'
              }}
            >
              {article.title}
            </h1>

            <div className="prose max-w-none">
              <p 
                className="mb-6 lg:mb-8 text-lg"
                style={{ 
                  color: '#64748B',
                  fontSize: '18px',
                  lineHeight: '1.5'
                }}
              >
                {article.summary}
              </p>
              
              <div 
                className="space-y-4 whitespace-pre-line"
                style={{ 
                  color: '#1E293B',
                  fontSize: '16px',
                  lineHeight: '1.5'
                }}
              >
                {article.content}
              </div>
            </div>
          </div>
        </article>
      </div>

      <Footer onNavigateToHome={onNavigateToHome} />
    </div>
  );
}
