
import React from 'react';
import { useLocation } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import { Separator } from '@/components/ui/separator';

// Mock data for search results
const mockSearchResults = [
  {
    id: 1,
    title: 'The Future of Artificial Intelligence',
    excerpt: 'Exploring how AI will reshape our world in the coming decades, from healthcare to transportation.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    category: 'Technology',
    slug: '/articles/technology/future-of-ai',
    author: 'Alex Johnson',
    date: 'Apr 10, 2025'
  },
  {
    id: 2,
    title: 'Ancient Civilizations of Mesopotamia',
    excerpt: 'Discovering the rich history and cultural contributions of the cradle of civilization.',
    image: 'https://images.unsplash.com/photo-1603489825371-a70f1cb954d1',
    category: 'History',
    slug: '/articles/history/ancient-mesopotamia',
    author: 'Sarah Williams',
    date: 'Apr 8, 2025'
  },
  {
    id: 3,
    title: 'Whispers in the Wind',
    excerpt: 'A poem about finding hope in nature\'s gentle reminders.',
    category: 'Poems',
    slug: '/poems/whispers-in-the-wind',
    author: 'Michael Chen',
    date: 'Apr 15, 2025'
  },
  {
    id: 4,
    title: 'The Last Letter',
    excerpt: 'A short story about reconnection and forgiveness spanning generations.',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d',
    category: 'Stories',
    slug: '/stories/the-last-letter',
    author: 'Emma Rodriguez',
    date: 'Apr 5, 2025'
  }
];

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';

  // Simulate filtering results based on query
  // In a real app, this would come from an API call
  const results = query 
    ? mockSearchResults.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.excerpt.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-reader-DEFAULT">
        Search Results for "{query}"
      </h1>
      
      {results.length > 0 ? (
        <div className="space-y-6">
          {results.map((result) => (
            <div key={result.id}>
              <ArticleCard 
                title={result.title}
                excerpt={result.excerpt}
                image={result.image}
                category={result.category}
                slug={result.slug}
                author={result.author}
                date={result.date}
                horizontal
              />
              <Separator className="mt-6" />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-serif mb-4 text-gray-700">No results found</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We couldn't find any content matching your search. Try using different keywords or browse our categories.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
