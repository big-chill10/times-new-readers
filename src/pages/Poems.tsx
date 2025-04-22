
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/shared/HeroSection';
import ArticleCard from '@/components/shared/ArticleCard';
import Newsletter from '@/components/shared/Newsletter';
import { Separator } from '@/components/ui/separator';

// Mock data for poems
const featuredPoems = [
  {
    id: 1,
    title: 'Autumn Leaves',
    excerpt: 'A meditation on change and the passing of seasons as reflected in falling leaves.',
    image: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6',
    category: 'Nature',
    slug: '/poems/autumn-leaves',
    author: 'Eliza Morgan',
    date: 'Apr 20, 2025'
  },
  {
    id: 2,
    title: 'City Lights',
    excerpt: 'An urban nocturne exploring the beauty and isolation of metropolitan nights.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390',
    category: 'Urban',
    slug: '/poems/city-lights',
    author: 'James Rivers',
    date: 'Apr 16, 2025'
  },
];

const recentPoems = [
  {
    id: 1,
    title: 'The Silent Hour',
    excerpt: 'A reflection on the peaceful moments before dawn when the world is still.',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8',
    category: 'Reflective',
    slug: '/poems/silent-hour',
    author: 'Thomas Gray',
    date: 'Apr 14, 2025'
  },
  {
    id: 2,
    title: 'Ocean Memories',
    excerpt: 'Recalling childhood summers by the sea through rhythm and imagery.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    category: 'Nostalgia',
    slug: '/poems/ocean-memories',
    author: 'Marina Wells',
    date: 'Apr 12, 2025'
  },
  {
    id: 3,
    title: 'Whispers of the Wind',
    excerpt: 'The wind carries messages across time and space in this lyrical poem.',
    image: 'https://images.unsplash.com/photo-1523882505971-5c29b55b695c',
    category: 'Nature',
    slug: '/poems/whispers-wind',
    author: 'Sophia Chen',
    date: 'Apr 10, 2025'
  },
  {
    id: 4,
    title: 'Stargazer',
    excerpt: 'A cosmic journey through the constellations and their ancient stories.',
    image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45',
    category: 'Celestial',
    slug: '/poems/stargazer',
    author: 'Leo Cosmos',
    date: 'Apr 8, 2025'
  },
];

const Poems = () => {
  return (
    <Layout>
      <HeroSection 
        title="Poems"
        subtitle="Experience the power of poetic expression. Our collection features diverse voices exploring themes of nature, love, identity, and the human experience."
        backgroundImage="https://images.unsplash.com/photo-1455390582262-044cdead277a"
      />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-8 text-reader-DEFAULT">Featured Poems</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPoems.map((poem) => (
              <ArticleCard
                key={poem.id}
                title={poem.title}
                excerpt={poem.excerpt}
                image={poem.image}
                category={poem.category}
                slug={poem.slug}
                author={poem.author}
                date={poem.date}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-reader-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="font-serif text-2xl font-bold mb-4 text-reader-DEFAULT">Poem of the Week</h2>
            
            <h3 className="font-serif text-xl font-semibold mb-2">Moonlight Sonata</h3>
            <p className="text-gray-600 mb-6 italic">By Olivia Winters</p>
            
            <div className="prose prose-reader max-w-none">
              <div className="quote">
                Silver light spills across the floor,<br />
                A liquid path from sky to door.<br />
                Night's symphony plays soft and slow,<br />
                As shadows dance and moonbeams glow.
              </div>
              
              <div className="quote">
                Time suspends in this gentle hour,<br />
                Stars unfold like night's pale flower.<br />
                In this space between dark and day,<br />
                Silent music shows the way.
              </div>
              
              <p className="mb-0 mt-6">
                <a href="/poems/moonlight-sonata" className="text-reader-DEFAULT hover:text-reader-light font-medium">
                  Read full poem →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-8 text-reader-DEFAULT">Recent Poems</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentPoems.map((poem) => (
              <ArticleCard
                key={poem.id}
                title={poem.title}
                excerpt={poem.excerpt}
                image={poem.image}
                category={poem.category}
                slug={poem.slug}
                author={poem.author}
                date={poem.date}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Newsletter />
    </Layout>
  );
};

export default Poems;
