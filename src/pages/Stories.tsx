
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/shared/HeroSection';
import ArticleCard from '@/components/shared/ArticleCard';
import Newsletter from '@/components/shared/Newsletter';
import { Separator } from '@/components/ui/separator';

// Mock data for stories
const featuredStories = [
  {
    id: 1,
    title: 'The Clockmaker\'s Daughter',
    excerpt: 'A tale of time, loss, and the magical mechanics that bind our lives together.',
    image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8',
    category: 'Historical Fiction',
    slug: '/stories/clockmakers-daughter',
    author: 'Eleanor Jenkins',
    date: 'Apr 19, 2025'
  },
  {
    id: 2,
    title: 'Starlight and Shadow',
    excerpt: 'A young astronomer discovers a mysterious signal from a distant galaxy that changes everything.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
    category: 'Science Fiction',
    slug: '/stories/starlight-shadow',
    author: 'Raymond Chen',
    date: 'Apr 17, 2025'
  },
];

const recentStories = [
  {
    id: 1,
    title: 'The Last Library',
    excerpt: 'In a world where books are forgotten, one guardian keeps the flame of literature alive.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66',
    category: 'Dystopian',
    slug: '/stories/last-library',
    author: 'Marcus Reed',
    date: 'Apr 15, 2025'
  },
  {
    id: 2,
    title: 'The Blue Door',
    excerpt: 'A mysterious door appears in an ordinary neighborhood, leading to extraordinary adventures.',
    image: 'https://images.unsplash.com/photo-1558449033-2eb086679855',
    category: 'Fantasy',
    slug: '/stories/blue-door',
    author: 'Sophia Wong',
    date: 'Apr 13, 2025'
  },
  {
    id: 3,
    title: 'Echoes of Autumn',
    excerpt: 'A reunion between old friends reveals secrets buried for decades.',
    image: 'https://images.unsplash.com/photo-1501084291732-13b1ba8f0ebc',
    category: 'Drama',
    slug: '/stories/echoes-autumn',
    author: 'Thomas Miller',
    date: 'Apr 11, 2025'
  },
  {
    id: 4,
    title: 'The Lighthouse Keeper',
    excerpt: 'A solitary life on a remote island is disrupted by an unexpected visitor during a terrible storm.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    category: 'Mystery',
    slug: '/stories/lighthouse-keeper',
    author: 'Claire Evans',
    date: 'Apr 9, 2025'
  },
  {
    id: 5,
    title: 'Morning Coffee',
    excerpt: 'A chance encounter at a café leads to a life-changing connection.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    category: 'Romance',
    slug: '/stories/morning-coffee',
    author: 'David Kim',
    date: 'Apr 7, 2025'
  },
  {
    id: 6,
    title: 'The Secret Garden Party',
    excerpt: 'An invitation to an exclusive gathering reveals a world hidden in plain sight.',
    image: 'https://images.unsplash.com/photo-1470219556762-1771e7f9427d',
    category: 'Contemporary',
    slug: '/stories/secret-garden-party',
    author: 'Emily Jackson',
    date: 'Apr 5, 2025'
  }
];

const Stories = () => {
  return (
    <Layout>
      <HeroSection 
        title="Stories"
        subtitle="Immerse yourself in captivating narratives from talented writers across genres. From heartwarming tales to thrilling adventures, find your next favorite story."
        backgroundImage="https://images.unsplash.com/photo-1532012197267-da84d127e765"
      />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-8 text-reader-DEFAULT">Featured Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredStories.map((story) => (
              <ArticleCard
                key={story.id}
                title={story.title}
                excerpt={story.excerpt}
                image={story.image}
                category={story.category}
                slug={story.slug}
                author={story.author}
                date={story.date}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-reader-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="font-serif text-2xl font-bold mb-4 text-reader-DEFAULT">Story of the Week</h2>
            
            <h3 className="font-serif text-xl font-semibold mb-3">The Glass Butterfly</h3>
            <p className="text-gray-600 mb-4 italic">By Amelia Parker</p>
            
            <div className="prose prose-reader max-w-none">
              <p>
                The butterfly arrived on the first day of spring, its wings catching the sunlight as it landed on my windowsill. 
                Unlike any butterfly I'd ever seen, its wings appeared to be made of the finest stained glass, each segment a different jewel tone 
                that cast colored shadows across my desk.
              </p>
              <p>
                I knew immediately it wasn't an ordinary creature. In the three years since my grandmother's passing, 
                I'd grown accustomed to the emptiness of the old house, to the silence that seemed to press in from all sides. 
                But something about this delicate visitor made the air feel different, as if the house itself had taken a breath after a long slumber.
              </p>
              <p className="mb-0">
                <a href="/stories/glass-butterfly" className="text-reader-DEFAULT hover:text-reader-light font-medium">
                  Continue reading →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-8 text-reader-DEFAULT">Recent Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentStories.map((story) => (
              <ArticleCard
                key={story.id}
                title={story.title}
                excerpt={story.excerpt}
                image={story.image}
                category={story.category}
                slug={story.slug}
                author={story.author}
                date={story.date}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Newsletter />
    </Layout>
  );
};

export default Stories;
