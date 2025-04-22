
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage
}) => {
  return (
    <div 
      className="relative py-16 md:py-24 px-4 overflow-hidden bg-reader-DEFAULT text-white"
      style={backgroundImage ? { 
        backgroundImage: `linear-gradient(rgba(26, 46, 76, 0.8), rgba(26, 46, 76, 0.9)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : undefined}
    >
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <Button className="bg-reader-accent text-reader-dark hover:bg-reader-accent/80 text-lg px-8 py-6 h-auto">
            <Link to={ctaLink}>{ctaText}</Link>
          </Button>
        )}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M42.9,-65.2C55.8,-57.8,66.6,-45.6,73.4,-31.2C80.2,-16.7,83,-0.1,79.3,14.5C75.6,29.1,65.5,41.7,53.5,51.8C41.5,61.9,27.7,69.5,12.4,74.3C-2.9,79,-19.7,80.9,-34.5,75.1C-49.3,69.3,-62.1,55.9,-69.3,40.8C-76.5,25.7,-78,8.9,-75,-6.6C-72,-22.1,-64.4,-36.2,-53.4,-44.9C-42.3,-53.6,-27.8,-56.9,-14.2,-61.9C-0.6,-66.9,12.2,-73.7,26.9,-73.3C41.6,-73,58.3,-65.5,42.9,-65.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M42.9,-65.2C55.8,-57.8,66.6,-45.6,73.4,-31.2C80.2,-16.7,83,-0.1,79.3,14.5C75.6,29.1,65.5,41.7,53.5,51.8C41.5,61.9,27.7,69.5,12.4,74.3C-2.9,79,-19.7,80.9,-34.5,75.1C-49.3,69.3,-62.1,55.9,-69.3,40.8C-76.5,25.7,-78,8.9,-75,-6.6C-72,-22.1,-64.4,-36.2,-53.4,-44.9C-42.3,-53.6,-27.8,-56.9,-14.2,-61.9C-0.6,-66.9,12.2,-73.7,26.9,-73.3C41.6,-73,58.3,-65.5,42.9,-65.2Z" transform="translate(100 100)" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
