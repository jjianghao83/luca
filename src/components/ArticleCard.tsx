import { Article } from '../App';
import { Calendar, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type ArticleCardProps = {
  article: Article;
  onClick: (article: Article) => void;
};

export function ArticleCard({ article, onClick }: ArticleCardProps) {
  const categoryColor = article.categoryId === 'film' ? '#1E3A8A' : '#0F766E';

  return (
    <div
      onClick={() => onClick(article)}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="aspect-video w-full overflow-hidden">
        <ImageWithFallback
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 lg:p-5">
        <div className="flex items-center gap-2 mb-3">
          <span 
            className="px-2 py-1 text-white rounded"
            style={{ 
              backgroundColor: categoryColor,
              fontSize: '13px'
            }}
          >
            {article.category}
          </span>
          {article.subCategory && (
            <span style={{ color: '#64748B', fontSize: '13px' }}>
              / {article.subCategory}
            </span>
          )}
        </div>
        <h3 
          className="mb-2 line-clamp-2 text-lg lg:text-xl"
          style={{ 
            color: '#1E293B',
            lineHeight: '1.2'
          }}
        >
          {article.title}
        </h3>
        <p 
          className="mb-3 line-clamp-2"
          style={{ 
            color: '#64748B',
            fontSize: '14px',
            lineHeight: '1.5'
          }}
        >
          {article.summary}
        </p>
        <div className="flex items-center gap-3 text-sm" style={{ color: '#64748B', fontSize: '14px' }}>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{article.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
