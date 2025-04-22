
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/shared/HeroSection';
import ArticleCard from '@/components/shared/ArticleCard';
import Newsletter from '@/components/shared/Newsletter';

// Mock data for category descriptions
const categoryInfo = {
  technology: {
    title: "Technology",
    description: "Explore the latest innovations, digital trends, and technological advancements shaping our world.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  science: {
    title: "Science",
    description: "Discover groundbreaking research, scientific discoveries, and the wonders of the natural world.",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31"
  },
  knowledge: {
    title: "Knowledge",
    description: "Expand your understanding with insights on learning, cognition, and intellectual growth.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8"
  },
  history: {
    title: "History",
    description: "Journey through time to explore the events, people, and civilizations that shaped our past.",
    image: "https://images.unsplash.com/photo-1461360370896-8a85b4b0779d"
  },
  geography: {
    title: "Geography",
    description: "Travel across landscapes, cultures, and environments to understand our diverse planet.",
    image: "https://images.unsplash.com/photo-1526761122248-c31c93f8b2b9"
  }
};

// Mock data for articles by category
const articlesByCategory = {
  technology: [
    {
      id: 1,
      title: "Understanding Blockchain Technology",
      excerpt: "A clear explanation of how blockchain works and its potential beyond cryptocurrency.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
      category: "Technology",
      slug: "/articles/technology/understanding-blockchain",
      author: "Michael Chen",
      date: "Apr 16, 2025"
    },
    {
      id: 2,
      title: "The Rise of Edge Computing",
      excerpt: "How processing data closer to its source is changing the internet landscape.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      category: "Technology",
      slug: "/articles/technology/edge-computing",
      author: "Samantha Torres",
      date: "Apr 14, 2025"
    },
    {
      id: 3,
      title: "The Future of Quantum Computing",
      excerpt: "How quantum computers will revolutionize everything from medicine to cryptography.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
      category: "Technology",
      slug: "/articles/technology/future-of-quantum-computing",
      author: "Dr. Richard Feynman",
      date: "Apr 20, 2025"
    },
    {
      id: 4,
      title: "Artificial Intelligence in Healthcare",
      excerpt: "How AI is transforming diagnosis, treatment, and patient care in modern medicine.",
      image: "https://images.unsplash.com/photo-1576671414121-aa1faa7d044a",
      category: "Technology",
      slug: "/articles/technology/ai-healthcare",
      author: "Dr. Sarah Johnson",
      date: "Apr 8, 2025"
    },
    {
      id: 5,
      title: "The Evolution of Cybersecurity",
      excerpt: "Tracking the development of digital security from passwords to advanced threat detection.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      category: "Technology",
      slug: "/articles/technology/cybersecurity-evolution",
      author: "Marcus Reed",
      date: "Apr 5, 2025"
    },
    {
      id: 6,
      title: "Virtual Reality: Beyond Gaming",
      excerpt: "Exploring VR applications in education, healthcare, and workplace training.",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac",
      category: "Technology",
      slug: "/articles/technology/vr-beyond-gaming",
      author: "Kevin Park",
      date: "Apr 3, 2025"
    }
  ],
  science: [
    {
      id: 1,
      title: "CRISPR: Rewriting the Code of Life",
      excerpt: "The ethical implications and potential of gene editing technology.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
      category: "Science",
      slug: "/articles/science/crispr-technology",
      author: "Dr. Elizabeth Martin",
      date: "Apr 15, 2025"
    },
    {
      id: 2,
      title: "The Search for Exoplanets",
      excerpt: "How astronomers are finding worlds beyond our solar system.",
      image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5",
      category: "Science",
      slug: "/articles/science/exoplanet-discovery",
      author: "Dr. Neil Sharma",
      date: "Apr 12, 2025"
    },
    {
      id: 3,
      title: "Ocean Exploration: The Final Frontier",
      excerpt: "Exploring the mysterious depths of our oceans and the discoveries being made.",
      image: "https://images.unsplash.com/photo-1551244072-5d12893278ab",
      category: "Science",
      slug: "/articles/science/ocean-exploration",
      author: "Marina Cousteau",
      date: "Apr 18, 2025"
    },
    {
      id: 4,
      title: "The Microbiome Revolution",
      excerpt: "How our understanding of gut bacteria is changing medicine and nutrition.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557",
      category: "Science",
      slug: "/articles/science/microbiome-revolution",
      author: "Dr. James Lee",
      date: "Apr 10, 2025"
    },
    {
      id: 5,
      title: "Climate Science: Models and Predictions",
      excerpt: "Understanding the complex mathematics behind climate forecasting.",
      image: "https://images.unsplash.com/photo-1564514260658-a77b9bf5e520",
      category: "Science",
      slug: "/articles/science/climate-models",
      author: "Dr. Maria Rodriguez",
      date: "Apr 7, 2025"
    },
    {
      id: 6,
      title: "Neuroscience of Consciousness",
      excerpt: "The latest research on how our brains create our subjective experience.",
      image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776",
      category: "Science",
      slug: "/articles/science/neuroscience-consciousness",
      author: "Dr. David Kim",
      date: "Apr 4, 2025"
    }
  ],
  knowledge: [
    {
      id: 1,
      title: "The Art of Deep Learning",
      excerpt: "Techniques for acquiring and retaining complex information effectively.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8",
      category: "Knowledge",
      slug: "/articles/knowledge/deep-learning-techniques",
      author: "Prof. Maria Johnson",
      date: "Apr 10, 2025"
    },
    {
      id: 2,
      title: "Understanding Cognitive Biases",
      excerpt: "How our brains take shortcuts and how to overcome them.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31",
      category: "Knowledge",
      slug: "/articles/knowledge/cognitive-biases",
      author: "Dr. James Peterson",
      date: "Apr 8, 2025"
    },
    {
      id: 3,
      title: "The Knowledge Economy",
      excerpt: "How information and expertise drive modern economic growth.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      category: "Knowledge",
      slug: "/articles/knowledge/knowledge-economy",
      author: "Dr. Robert Chen",
      date: "Apr 17, 2025"
    },
    {
      id: 4,
      title: "Digital Literacy in the 21st Century",
      excerpt: "Essential skills for navigating our information-saturated world.",
      image: "https://images.unsplash.com/photo-1516382799247-87df95d790b7",
      category: "Knowledge",
      slug: "/articles/knowledge/digital-literacy",
      author: "Sarah Williams",
      date: "Apr 15, 2025"
    },
    {
      id: 5,
      title: "The Science of Effective Learning",
      excerpt: "Research-backed methods to improve memory and skill acquisition.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
      category: "Knowledge",
      slug: "/articles/knowledge/effective-learning",
      author: "Dr. Thomas Brooks",
      date: "Apr 12, 2025"
    },
    {
      id: 6,
      title: "Critical Thinking in the Age of Misinformation",
      excerpt: "Strategies for evaluating claims and identifying false information.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      category: "Knowledge",
      slug: "/articles/knowledge/critical-thinking",
      author: "Prof. Emily Garcia",
      date: "Apr 5, 2025"
    }
  ],
  history: [
    {
      id: 1,
      title: "The Fall of the Roman Empire",
      excerpt: "Examining the complex factors that led to the collapse of an ancient superpower.",
      image: "https://images.unsplash.com/photo-1563889852258-a0559dc4be56",
      category: "History",
      slug: "/articles/history/fall-of-rome",
      author: "Prof. Marcus Aurelius",
      date: "Apr 9, 2025"
    },
    {
      id: 2,
      title: "The Silk Road: Ancient Globalization",
      excerpt: "How trade routes connected East and West for centuries.",
      image: "https://images.unsplash.com/photo-1573455494060-c5595004fb6c",
      category: "History",
      slug: "/articles/history/silk-road",
      author: "Dr. Amara Khan",
      date: "Apr 7, 2025"
    },
    {
      id: 3,
      title: "The Renaissance: A Golden Age",
      excerpt: "How art, science, and humanism transformed European culture.",
      image: "https://images.unsplash.com/photo-1565635602509-6eb2c9295246",
      category: "History",
      slug: "/articles/history/renaissance",
      author: "Dr. Isabella Romano",
      date: "Apr 19, 2025"
    },
    {
      id: 4,
      title: "The Industrial Revolution",
      excerpt: "How mechanization changed society, economics, and the environment.",
      image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29",
      category: "History",
      slug: "/articles/history/industrial-revolution",
      author: "Dr. Thomas Edison",
      date: "Apr 16, 2025"
    },
    {
      id: 5,
      title: "Ancient Egypt: Secrets of the Pharaohs",
      excerpt: "Recent archaeological discoveries shedding light on Egyptian civilization.",
      image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020",
      category: "History",
      slug: "/articles/history/ancient-egypt",
      author: "Dr. Nefertiti Jones",
      date: "Apr 13, 2025"
    },
    {
      id: 6,
      title: "The Cold War Era",
      excerpt: "Understanding the global tensions that shaped modern international relations.",
      image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      category: "History",
      slug: "/articles/history/cold-war",
      author: "Prof. Robert Frost",
      date: "Apr 3, 2025"
    }
  ],
  geography: [
    {
      id: 1,
      title: "The Changing Arctic Landscape",
      excerpt: "How climate change is transforming one of Earth's most remote regions.",
      image: "https://images.unsplash.com/photo-1517783999520-f068d7431a60",
      category: "Geography",
      slug: "/articles/geography/arctic-changes",
      author: "Dr. Sven Erikson",
      date: "Apr 11, 2025"
    },
    {
      id: 2,
      title: "Megacities: Urban Challenges of the Future",
      excerpt: "How cities with over 10 million inhabitants are managing growth and sustainability.",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785",
      category: "Geography",
      slug: "/articles/geography/megacities",
      author: "Prof. Leila Rahman",
      date: "Apr 6, 2025"
    },
    {
      id: 3,
      title: "The Amazon Rainforest: Earth's Vital Organ",
      excerpt: "The biodiversity, significance, and challenges facing the world's largest rainforest.",
      image: "https://images.unsplash.com/photo-1586967440823-e9b86435fc6a",
      category: "Geography",
      slug: "/articles/geography/amazon-rainforest",
      author: "Dr. Sophia Mendez",
      date: "Apr 20, 2025"
    },
    {
      id: 4,
      title: "Desert Ecosystems: Life in Extreme Conditions",
      excerpt: "How plants and animals adapt to survive in the world's most arid environments.",
      image: "https://images.unsplash.com/photo-1547234935-80c7145ec969",
      category: "Geography",
      slug: "/articles/geography/desert-ecosystems",
      author: "Dr. Amir Hassan",
      date: "Apr 17, 2025"
    },
    {
      id: 5,
      title: "Island Nations and Rising Seas",
      excerpt: "The environmental challenges facing coastal and island communities worldwide.",
      image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5",
      category: "Geography",
      slug: "/articles/geography/island-rising-seas",
      author: "Marina Waters",
      date: "Apr 14, 2025"
    },
    {
      id: 6,
      title: "Mountain Ranges: Formation and Influence",
      excerpt: "How geological forces create mountains and their impact on climate and culture.",
      image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99",
      category: "Geography",
      slug: "/articles/geography/mountain-ranges",
      author: "Dr. Everest Sherpa",
      date: "Apr 2, 2025"
    }
  ]
};

const CategoryArticles = () => {
  const { category } = useParams<{ category: string }>();
  
  // Default to technology if no valid category is provided
  const safeCategory = category && Object.keys(categoryInfo).includes(category) 
    ? category 
    : 'technology';
  
  const info = categoryInfo[safeCategory as keyof typeof categoryInfo];
  const articles = articlesByCategory[safeCategory as keyof typeof articlesByCategory] || [];
  
  return (
    <Layout>
      <HeroSection 
        title={info.title}
        subtitle={info.description}
        backgroundImage={info.image}
      />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-8 text-reader-DEFAULT">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </section>
      
      <Newsletter />
    </Layout>
  );
};

export default CategoryArticles;
