
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface FeaturedCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  slug: string;
  author: string;
  date: string;
  className?: string;
  large?: boolean;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  title,
  excerpt,
  image,
  category,
  slug,
  author,
  date,
  className,
  large = false
}) => {
  return (
    <Link to={slug} className={cn(
      "group block overflow-hidden", 
      large ? "md:col-span-2" : "",
      className
    )}>
      <div className="relative h-60 md:h-80 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <Badge variant="secondary" className="bg-reader-accent text-reader-dark mb-3">
            {category}
          </Badge>
          <h3 className={cn(
            "font-serif font-bold leading-tight mb-2 group-hover:text-reader-accent transition-colors",
            large ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
          )}>
            {title}
          </h3>
          {large && (
            <p className="text-gray-200 line-clamp-2 mb-3">{excerpt}</p>
          )}
          <div className="flex items-center text-sm text-gray-300">
            <span>By {author}</span>
            <span className="mx-2">•</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCard;
