
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail, ArrowRight, Download } from "lucide-react";
import { TypingAnimation } from "@/components/TypingAnimation";
import { ContactForm } from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleViewWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      <Navigation />

      {/* Hero Section - Anki-inspired clean design */}
      <motion.section
        id="home"
        className="relative overflow-hidden min-h-screen flex items-center pt-16 bg-white dark:bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Content - 3 columns */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="lg:col-span-3 space-y-8"
              >
                {/* Clean header card */}
                <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 dark:text-white leading-tight mb-4">
                    Anurag Bhonsle
                  </h1>
                  <div className="h-px bg-gradient-to-r from-blue-500 to-transparent mb-6"></div>
                  <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                    Full-Stack Developer & Problem Solver
                  </p>
                </div>

                {/* Description card */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
                  <TypingAnimation
                    text="Building scalable web applications with modern technologies. Passionate about clean code, user experience, and solving complex problems."
                    className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                  />
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Dialog
                    open={showContactForm}
                    onOpenChange={setShowContactForm}
                  >
                    <DialogTrigger asChild>
                      <Button
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-sm transition-all duration-200 font-medium"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Get In Touch
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl bg-white dark:bg-gray-900">
                      <DialogHeader>
                        <DialogTitle className="text-gray-900 dark:text-white">
                          Contact
                        </DialogTitle>
                      </DialogHeader>
                      <ContactForm />
                    </DialogContent>
                  </Dialog>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 font-medium"
                    onClick={handleViewWork}
                  >
                    View Projects
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>

              {/* Profile Image - 2 columns */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="lg:col-span-2 relative"
              >
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
                  <div className="aspect-square overflow-hidden rounded-md">
                    <img
                      src="/anurag.png"
                      alt="Anurag Bhonsle"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                      Full-Stack Developer
                    </p>
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
