
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-reader-DEFAULT mb-6">404</h1>
        <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <div className="space-x-4">
          <Button variant="default" className="bg-reader-DEFAULT hover:bg-reader-light">
            <Link to="/">Return Home</Link>
          </Button>
          <Button variant="outline">
            <Link to="/articles">Browse Articles</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
