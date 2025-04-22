
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  image?: string;
  category: string;
  slug: string;
  author: string;
  date: string;
  className?: string;
  horizontal?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  image,
  category,
  slug,
  author,
  date,
  className,
  horizontal = false
}) => {
  return (
    <Link to={slug} className={cn(
      "group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300",
      horizontal ? "md:flex" : "",
      className
    )}>
      {image && (
        <div className={cn(
          "relative overflow-hidden", 
          horizontal ? "md:w-1/3 h-48 md:h-auto" : "h-48"
        )}>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
      )}
      
      <div className={cn(
        "p-5",
        horizontal ? "md:w-2/3" : ""
      )}>
        <Badge variant="secondary" className="bg-reader-accent text-reader-dark mb-3">
          {category}
        </Badge>
        
        <h3 className="font-serif text-xl font-bold leading-tight mb-2 group-hover:text-reader-DEFAULT transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{excerpt}</p>
        
        <div className="flex items-center text-sm text-gray-500">
          <span>By {author}</span>
          <span className="mx-2">•</span>
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
