
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/shared/HeroSection';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Separator } from '@/components/ui/separator';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
    subscribe: true
  });
  
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, interest: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, subscribe: e.target.checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to an API
    console.log('Form submitted:', formData);
    
    toast({
      title: "Application Received!",
      description: "Thanks for your interest in joining Times New Readers. We'll be in touch soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      interest: '',
      message: '',
      subscribe: true
    });
  };
  
  return (
    <Layout>
      <HeroSection 
        title="Join Our Community"
        subtitle="Become part of Times New Readers as a contributor, reader, or supporter. Share your voice and connect with our literary community."
        backgroundImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
      />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 text-reader-DEFAULT">Why Join Us?</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">For Writers</h3>
                  <p className="text-gray-600">
                    Share your voice with a growing audience. Whether you write articles, stories, or poems, 
                    our platform provides a space to publish your work and connect with readers who appreciate quality writing.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">For Readers</h3>
                  <p className="text-gray-600">
                    Join our community to engage with writers, participate in discussions, and receive personalized 
                    recommendations based on your reading preferences.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">For Supporters</h3>
                  <p className="text-gray-600">
                    Help sustain our platform and support quality writing. Members get exclusive access to special content, 
                    events, and the satisfaction of supporting literary culture.
                  </p>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              <div>
                <h3 className="font-serif text-xl font-semibold mb-4">Membership Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-reader-accent mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Early access to new content</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-reader-accent mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Participation in writer workshops</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-reader-accent mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Monthly virtual literary events</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-reader-accent mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Direct connection with our editorial team</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-reader-accent mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Recognition for your contributions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 text-reader-DEFAULT">Get Started</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                    I'm interested in joining as a
                  </label>
                  <Select value={formData.interest} onValueChange={handleSelectChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="writer">Writer</SelectItem>
                      <SelectItem value="reader">Reader</SelectItem>
                      <SelectItem value="supporter">Supporter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a bit about yourself or ask any questions you might have."
                    rows={5}
                  />
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="subscribe"
                      name="subscribe"
                      type="checkbox"
                      checked={formData.subscribe}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 rounded border-gray-300 text-reader-DEFAULT focus:ring-reader-light"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="subscribe" className="text-sm text-gray-600">
                      Subscribe to our newsletter to receive updates
                    </label>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-reader-DEFAULT hover:bg-reader-light text-white py-2"
                >
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-reader-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="font-serif text-2xl font-bold mb-4 text-reader-DEFAULT">Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            If you'd like to learn more about joining Times New Readers or have specific questions, 
            feel free to reach out to our team directly.
          </p>
          <a 
            href="mailto:join@timesnewreaders.com" 
            className="text-reader-DEFAULT hover:text-reader-light underline underline-offset-4 font-medium"
          >
            join@timesnewreaders.com
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default JoinUs;
