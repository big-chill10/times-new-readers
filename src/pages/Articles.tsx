
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/shared/HeroSection';
import ArticleCard from '@/components/shared/ArticleCard';
import CategoryGrid from '@/components/shared/CategoryGrid';
import Newsletter from '@/components/shared/Newsletter';
import { Separator } from '@/components/ui/separator';

// Mock data for articles
const featuredArticles = [
  {
    id: 1,
    title: 'The Future of Quantum Computing',
    excerpt: 'How quantum computers will revolutionize everything from medicine to cryptography.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    category: 'Technology',
    slug: '/articles/technology/future-of-quantum-computing',
    author: 'Dr. Richard Feynman',
    date: 'Apr 20, 2025'
  },
  {
    id: 2,
    title: 'Ocean Exploration: The Final Frontier',
    excerpt: 'Exploring the mysterious depths of our oceans and the discoveries being made.',
    image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab',
    category: 'Science',
    slug: '/articles/science/ocean-exploration',
    author: 'Marina Cousteau',
    date: 'Apr 18, 2025'
  },
];

const articlesByCategory = {
  technology: [
    {
      id: 1,
      title: 'Understanding Blockchain Technology',
      excerpt: 'A clear explanation of how blockchain works and its potential beyond cryptocurrency.',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a',
      category: 'Technology',
      slug: '/articles/technology/understanding-blockchain',
      author: 'Michael Chen',
      date: 'Apr 16, 2025'
    },
    {
      id: 2,
      title: 'The Rise of Edge Computing',
      excerpt: 'How processing data closer to its source is changing the internet landscape.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
      category: 'Technology',
      slug: '/articles/technology/edge-computing',
      author: 'Samantha Torres',
      date: 'Apr 14, 2025'
    },
  ],
  science: [
    {
      id: 1,
      title: 'CRISPR: Rewriting the Code of Life',
      excerpt: 'The ethical implications and potential of gene editing technology.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69',
      category: 'Science',
      slug: '/articles/science/crispr-technology',
      author: 'Dr. Elizabeth Martin',
      date: 'Apr 15, 2025'
    },
    {
      id: 2,
      title: 'The Search for Exoplanets',
      excerpt: 'How astronomers are finding worlds beyond our solar system.',
      image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
      category: 'Science',
      slug: '/articles/science/exoplanet-discovery',
      author: 'Dr. Neil Sharma',
      date: 'Apr 12, 2025'
    },
  ],
  knowledge: [
    {
      id: 1,
      title: 'The Art of Deep Learning',
      excerpt: 'Techniques for acquiring and retaining complex information effectively.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8',
      category: 'Knowledge',
      slug: '/articles/knowledge/deep-learning-techniques',
      author: 'Prof. Maria Johnson',
      date: 'Apr 10, 2025'
    },
    {
      id: 2,
      title: 'Understanding Cognitive Biases',
      excerpt: 'How our brains take shortcuts and how to overcome them.',
      image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31',
      category: 'Knowledge',
      slug: '/articles/knowledge/cognitive-biases',
      author: 'Dr. James Peterson',
      date: 'Apr 8, 2025'
    },
  ],
  history: [
    {
      id: 1,
      title: 'The Fall of the Roman Empire',
      excerpt: 'Examining the complex factors that led to the collapse of an ancient superpower.',
      image: 'https://images.unsplash.com/photo-1563889852258-a0559dc4be56',
      category: 'History',
      slug: '/articles/history/fall-of-rome',
      author: 'Prof. Marcus Aurelius',
      date: 'Apr 9, 2025'
    },
    {
      id: 2,
      title: 'The Silk Road: Ancient Globalization',
      excerpt: 'How trade routes connected East and West for centuries.',
      image: 'https://images.unsplash.com/photo-1573455494060-c5595004fb6c',
      category: 'History',
      slug: '/articles/history/silk-road',
      author: 'Dr. Amara Khan',
      date: 'Apr 7, 2025'
    },
  ],
  geography: [
    {
      id: 1,
      title: 'The Changing Arctic Landscape',
      excerpt: 'How climate change is transforming one of Earth\'s most remote regions.',
      image: 'https://images.unsplash.com/photo-1517783999520-f068d7431a60',
      category: 'Geography',
      slug: '/articles/geography/arctic-changes',
      author: 'Dr. Sven Erikson',
      date: 'Apr 11, 2025'
    },
    {
      id: 2,
      title: 'Megacities: Urban Challenges of the Future',
      excerpt: 'How cities with over 10 million inhabitants are managing growth and sustainability.',
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785',
      category: 'Geography',
      slug: '/articles/geography/megacities',
      author: 'Prof. Leila Rahman',
      date: 'Apr 6, 2025'
    },
  ],
};

const Articles = () => {
  return (
    <Layout>
      <HeroSection 
        title="Articles"
        subtitle="Explore our collection of in-depth articles across various subjects. From technology breakthroughs to historical insights, expand your knowledge with every read."
        backgroundImage="https://images.unsplash.com/photo-1550399105-c4db5fb85c18"
      />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-8 text-reader-DEFAULT">Featured Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                image={article.image}
                category={article.category}
                slug={article.slug}
                author={article.author}
                date={article.date}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-reader-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-4 text-reader-DEFAULT">Categories</h2>
          <p className="text-gray-600 mb-8">
            Browse articles by subject to find exactly what interests you.
          </p>
          
          <CategoryGrid />
        </div>
      </section>
      
      {/* Articles by Category */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(articlesByCategory).map(([category, articles], index) => (
            <div key={category} className={index > 0 ? 'mt-16' : ''}>
              <div className="flex justify-between items-baseline mb-6">
                <h2 className="font-serif text-2xl font-bold text-reader-DEFAULT capitalize">
                  {category}
                </h2>
                <a 
                  href={`/articles/${category}`} 
                  className="text-reader-DEFAULT hover:text-reader-light text-sm font-medium"
                >
                  View All
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    title={article.title}
                    excerpt={article.excerpt}
                    image={article.image}
                    category={article.category}
                    slug={article.slug}
                    author={article.author}
                    date={article.date}
                  />
                ))}
              </div>
              
              {index < Object.entries(articlesByCategory).length - 1 && (
                <Separator className="mt-12" />
              )}
            </div>
          ))}
        </div>
      </section>
      
      <Newsletter />
    </Layout>
  );
};

export default Articles;
