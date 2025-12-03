import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Article } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

type CarouselProps = {
  articles: Article[];
  onArticleClick: (article: Article) => void;
};

export function Carousel({ articles, onArticleClick }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [articles.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % articles.length);
  };

  return (
    <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden bg-gray-900">
      {articles.map((article, index) => (
        <div
          key={article.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="relative w-full h-full cursor-pointer"
            onClick={() => onArticleClick(article)}
          >
            <ImageWithFallback
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 text-white">
              <span 
                className="inline-block px-3 py-1 rounded mb-3 lg:mb-4 text-sm"
                style={{ backgroundColor: '#60A5FA', fontSize: '13px' }}
              >
                {article.category}
              </span>
              <h2 className="mb-2 lg:mb-3 text-2xl lg:text-3xl" style={{ lineHeight: '1.2' }}>
                {article.title}
              </h2>
              <p className="text-gray-200 max-w-3xl text-sm lg:text-base" style={{ lineHeight: '1.5' }}>
                {article.summary}
              </p>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>

      <div className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {articles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
