
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send this to an API
      toast({
        title: "Thanks for subscribing!",
        description: "You'll receive our updates at " + email,
      });
      setEmail('');
    }
  };

  return (
    <div className="bg-reader-muted py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 text-reader-DEFAULT">
          Join Our Newsletter
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Subscribe to receive the latest articles, stories, and poems directly in your inbox. 
          Stay informed and inspired with Times New Readers.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow"
          />
          <Button type="submit" className="bg-reader-DEFAULT hover:bg-reader-light text-white">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
