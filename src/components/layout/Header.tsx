
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setIsSearchOpen(false);
    }
  };

  const articleCategories = [
    { name: 'Technology', path: '/articles/technology' },
    { name: 'Science', path: '/articles/science' },
    { name: 'Knowledge', path: '/articles/knowledge' },
    { name: 'History', path: '/articles/history' },
    { name: 'Geography', path: '/articles/geography' },
  ];

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="font-serif text-2xl font-bold text-reader-DEFAULT">Times New Readers</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <Link to="/articles" className="nav-link font-medium">
                Articles
              </Link>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {articleCategories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-reader-muted hover:text-reader-DEFAULT transition-colors duration-200"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/stories" className="nav-link font-medium">
              Stories
            </Link>
            <Link to="/poems" className="nav-link font-medium">
              Poems
            </Link>
            <Link to="/join-us" className="nav-link font-medium">
              Join Us
            </Link>
          </nav>

          {/* Desktop Search and Menu Button */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="w-48 pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </form>
            <Button variant="outline" className="ml-4 bg-reader-accent text-reader-dark hover:bg-reader-accent/80">
              <Link to="/" className="flex items-center">
                Home
              </Link>
            </Button>
          </div>

          {/* Mobile Menu and Search Buttons */}
          <div className="flex md:hidden items-center space-x-2">
            <button 
              type="button" 
              onClick={toggleSearch}
              className="p-2 rounded-md text-gray-400 hover:text-reader-DEFAULT"
            >
              <Search className="h-6 w-6" />
            </button>
            <button 
              type="button" 
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-400 hover:text-reader-DEFAULT"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isSearchOpen ? "max-h-16 opacity-100 mb-2" : "max-h-0 opacity-0"
        )}>
          <form onSubmit={handleSearchSubmit} className="px-2 py-2">
            <Input
              type="search"
              placeholder="Search..."
              className="w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isMenuOpen ? "max-h-96 opacity-100 border-t border-gray-200" : "max-h-0 opacity-0"
        )}>
          <nav className="flex flex-col py-2">
            <Link to="/" className="px-4 py-2 text-base font-medium hover:bg-reader-muted">
              Home
            </Link>
            <div className="relative">
              <details className="group">
                <summary className="px-4 py-2 text-base font-medium hover:bg-reader-muted flex justify-between items-center cursor-pointer">
                  Articles
                  <span className="transition-transform transform group-open:rotate-180">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 3H0L6 9Z" fill="currentColor" />
                    </svg>
                  </span>
                </summary>
                <div className="pl-4">
                  {articleCategories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.path}
                      className="block px-4 py-2 text-sm font-medium hover:bg-reader-muted"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </details>
            </div>
            <Link to="/stories" className="px-4 py-2 text-base font-medium hover:bg-reader-muted">
              Stories
            </Link>
            <Link to="/poems" className="px-4 py-2 text-base font-medium hover:bg-reader-muted">
              Poems
            </Link>
            <Link to="/join-us" className="px-4 py-2 text-base font-medium hover:bg-reader-muted">
              Join Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
