
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/shared/HeroSection';
import FeaturedCard from '@/components/shared/FeaturedCard';
import ArticleCard from '@/components/shared/ArticleCard';
import Newsletter from '@/components/shared/Newsletter';
import CategoryGrid from '@/components/shared/CategoryGrid';
import { Separator } from '@/components/ui/separator';

// Mock data for featured articles
const featuredArticles = [
  {
    id: 1,
    title: 'The Evolution of Machine Learning: From Algorithms to Neural Networks',
    excerpt: 'A comprehensive look at how machine learning has transformed over the decades and its impact on modern technology.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    category: 'Technology',
    slug: '/articles/technology/evolution-of-machine-learning',
    author: 'Dr. Alan Mitchell',
    date: 'Apr 18, 2025'
  },
  {
    id: 2,
    title: 'The Amazon Rainforest: Earth\'s Vital Organ Under Threat',
    excerpt: 'Exploring the biodiversity of the Amazon and the conservation efforts to protect it from deforestation.',
    image: 'https://images.unsplash.com/photo-1586967440823-e9b86435fc6a',
    category: 'Geography',
    slug: '/articles/geography/amazon-rainforest',
    author: 'Sophia Mendez',
    date: 'Apr 15, 2025'
  },
  {
    id: 3,
    title: 'Quantum Physics Explained: The Basics of Wave-Particle Duality',
    excerpt: 'A beginner-friendly introduction to the fundamental concepts of quantum mechanics.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    category: 'Science',
    slug: '/articles/science/quantum-physics-basics',
    author: 'Dr. Robert Chang',
    date: 'Apr 12, 2025'
  }
];

// Mock data for recent articles
const recentArticles = [
  {
    id: 1,
    title: 'The Lost City of Atlantis: Myth or Reality?',
    excerpt: 'Examining the historical evidence and theories behind the legendary sunken city.',
    image: 'https://images.unsplash.com/photo-1603489825371-a70f1cb954d1',
    category: 'History',
    slug: '/articles/history/lost-city-of-atlantis',
    author: 'James Wilson',
    date: 'Apr 10, 2025'
  },
  {
    id: 2,
    title: 'Sustainable Living: Small Changes with Big Impact',
    excerpt: 'Practical tips for reducing your carbon footprint and living more sustainably.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
    category: 'Knowledge',
    slug: '/articles/knowledge/sustainable-living',
    author: 'Emma Green',
    date: 'Apr 8, 2025'
  },
  {
    id: 3,
    title: 'The Great Barrier Reef: A Treasure at Risk',
    excerpt: 'Understanding the challenges facing the world\'s largest coral reef system.',
    image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0',
    category: 'Geography',
    slug: '/articles/geography/great-barrier-reef',
    author: 'Oliver Martinez',
    date: 'Apr 5, 2025'
  },
  {
    id: 4,
    title: 'The Renaissance: A Golden Age of Art and Innovation',
    excerpt: 'Exploring the cultural rebirth that shaped modern Western civilization.',
    image: 'https://images.unsplash.com/photo-1610194244365-448954b1424f',
    category: 'History',
    slug: '/articles/history/the-renaissance',
    author: 'Isabella Romano',
    date: 'Apr 3, 2025'
  }
];

// Mock data for featured stories and poems
const featuredContent = [
  {
    id: 1,
    title: 'The Midnight Garden',
    excerpt: 'A short story about a magical garden that only appears under the full moon.',
    image: 'https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea',
    category: 'Stories',
    slug: '/stories/midnight-garden',
    author: 'Olivia Johnson',
    date: 'Apr 16, 2025'
  },
  {
    id: 2,
    title: 'Echoes of Dawn',
    excerpt: 'A collection of poems celebrating the quiet beauty of morning light.',
    image: 'https://images.unsplash.com/photo-1504437484202-613bb3316221',
    category: 'Poems',
    slug: '/poems/echoes-of-dawn',
    author: 'Nathan Park',
    date: 'Apr 9, 2025'
  }
];

const Index = () => {
  return (
    <Layout>
      <HeroSection 
        title="Times New Readers"
        subtitle="Discover thought-provoking articles, captivating stories, and beautiful poetry from writers around the world."
        ctaText="Start Reading"
        ctaLink="/articles"
        backgroundImage="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
      />
      
      {/* Featured Articles Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-8 text-reader-DEFAULT">Featured Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <FeaturedCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                image={article.image}
                category={article.category}
                slug={article.slug}
                author={article.author}
                date={article.date}
                large={index === 0}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-12 bg-reader-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-4 text-reader-DEFAULT">Explore Categories</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Dive into our collection of articles across various subjects. From cutting-edge technology to ancient history, there's something for every curious mind.
          </p>
          
          <CategoryGrid />
        </div>
      </section>
      
      {/* Recent Articles Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-8 text-reader-DEFAULT">Recent Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentArticles.map((article) => (
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
      
      {/* Stories & Poems Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-8 text-reader-DEFAULT">Stories & Poems</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredContent.map((content) => (
              <ArticleCard
                key={content.id}
                title={content.title}
                excerpt={content.excerpt}
                image={content.image}
                category={content.category}
                slug={content.slug}
                author={content.author}
                date={content.date}
              />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Discover more captivating content in our collections.</p>
            <div className="flex justify-center space-x-4">
              <a href="/stories" className="text-reader-DEFAULT hover:text-reader-light font-medium underline underline-offset-4">
                Browse Stories
              </a>
              <a href="/poems" className="text-reader-DEFAULT hover:text-reader-light font-medium underline underline-offset-4">
                Browse Poems
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-12 bg-reader-DEFAULT text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="font-serif text-3xl font-bold mb-6 text-center">About Times New Readers</h2>
          
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="mb-4">
              Times New Readers is a platform dedicated to thoughtful reading and literary exploration. We believe in the power of words to inform, inspire, and transform.
            </p>
            <p className="mb-4">
              Our mission is to create a space where readers can discover well-crafted articles across various subjects, from technology and science to history and geography. We also celebrate the art of storytelling through fictional narratives and poetry.
            </p>
            <p>
              Whether you're seeking knowledge, inspiration, or simply a good read, Times New Readers is your literary companion for the digital age.
            </p>
          </div>
          
          <Separator className="my-8 bg-white/20" />
          
          <div className="text-center">
            <p className="text-lg mb-4">Join our community of writers and readers</p>
            <a href="/join-us" className="inline-block bg-reader-accent text-reader-dark px-6 py-2 rounded hover:bg-reader-accent/90 transition-colors font-medium">
              Learn More
            </a>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <Newsletter />
    </Layout>
  );
};

export default Index;
