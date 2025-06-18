
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Mail, ArrowRight } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { TypingAnimation } from '@/components/TypingAnimation';
import { ContactForm } from '@/components/ContactForm';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import ProjectSection from '@/components/ProjectSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleViewWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <ThemeToggle />
      
      {/* Hero Section */}
      <motion.section 
        id="home"
        className="relative overflow-hidden min-h-screen flex items-center pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)`
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                    Anurag Kumar
                    <span className="block text-blue-600">Bhonsle</span>
                  </h1>
                </div>
                
                <div className="space-y-6">
                  <TypingAnimation 
                    text="I design robust user interfaces, solve complex algorithmic problems, and build secure systems with a focus on excellence and innovation."
                    className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
                  />
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    Building secure, scalable web applications with modern technologies
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
                    <DialogTrigger asChild>
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <Mail className="w-5 h-5 mr-2" />
                        Get In Touch
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Contact</DialogTitle>
                      </DialogHeader>
                      <ContactForm />
                    </DialogContent>
                  </Dialog>
                  <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300" onClick={handleViewWork}>
                    View Work
                  </Button>
                </div>
              </motion.div>

              {/* Visual Element - Anime-style placeholder */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative"
              >
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl transform rotate-6 shadow-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-600 rounded-3xl transform -rotate-3 shadow-xl"></div>
                  <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-4 flex items-center justify-center shadow-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop"
                      alt="Anime style placeholder"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Index;
