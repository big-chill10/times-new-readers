
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { 
    name: 'Technology', 
    path: '/articles/technology',
    description: 'Latest innovations and digital trends'
  },
  { 
    name: 'Science', 
    path: '/articles/science',
    description: 'Discoveries and scientific breakthroughs'
  },
  { 
    name: 'Knowledge', 
    path: '/articles/knowledge',
    description: 'Insights to expand your understanding'
  },
  { 
    name: 'History', 
    path: '/articles/history',
    description: 'Stories from our collective past'
  },
  { 
    name: 'Geography', 
    path: '/articles/geography',
    description: 'Exploring our world and its wonders'
  }
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {categories.map((category) => (
        <Link 
          key={category.name}
          to={category.path} 
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 hover:border-reader-accent group"
        >
          <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-reader-DEFAULT transition-colors">
            {category.name}
          </h3>
          <p className="text-gray-600 text-sm">{category.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;
