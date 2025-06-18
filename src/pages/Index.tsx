
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Code2, 
  Shield, 
  Rocket, 
  Globe, 
  Github, 
  Linkedin, 
  Mail,
  ExternalLink,
  Target,
  Brain,
  BookOpen,
  Eye,
  Server,
  Database,
  Terminal
} from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { TypingAnimation } from '@/components/TypingAnimation';
import { ContactForm } from '@/components/ContactForm';

const Index = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const skills = {
    frontend: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'],
    programming: ['C++', 'Data Structures', 'Algorithms', 'Problem Solving'],
    cybersecurity: ['Ethical Hacking', 'Penetration Testing', 'Network Security', 'Web Security'],
    tools: ['Git', 'Docker', 'Linux', 'VS Code', 'Postman']
  };

  const projects = [
    {
      title: 'Animeverse',
      description: 'A comprehensive anime watchlist management platform with recommendation algorithms and user engagement features.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      features: ['Intelligent recommendations', 'Progress tracking', 'Community reviews', 'Responsive design'],
      status: 'Live',
      color: 'bg-gradient-to-r from-blue-600 to-blue-800',
      link: 'https://anime-verse-xi.vercel.app/',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'SecureChat',
      description: 'End-to-end encrypted messaging application with advanced security protocols for secure communication.',
      tech: ['React.js', 'Socket.io', 'Node.js', 'Cryptography'],
      features: ['E2E encryption', 'Secure messaging', 'Anonymous mode', 'Security auditing'],
      status: 'In Development',
      color: 'bg-gradient-to-r from-gray-600 to-gray-800'
    },
    {
      title: 'VulnScanner',
      description: 'Automated vulnerability assessment tool for web applications with comprehensive security analysis.',
      tech: ['Python', 'Node.js', 'Security APIs', 'React.js'],
      features: ['OWASP Top 10 scanning', 'Custom rules', 'Detailed reports', 'CI/CD integration'],
      status: 'Planning',
      color: 'bg-gradient-to-r from-blue-800 to-gray-900'
    }
  ];

  const blogPosts = [
    {
      title: 'Building Scalable Web Applications with Modern JavaScript',
      excerpt: 'Comprehensive guide to developing robust full-stack applications using React.js and Node.js...',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Development'
    },
    {
      title: 'Cybersecurity Best Practices for Web Developers',
      excerpt: 'Essential security measures and ethical hacking principles for building secure applications...',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Security'
    },
    {
      title: 'Algorithm Optimization Strategies for Technical Interviews',
      excerpt: 'Advanced data structures and algorithmic approaches for solving complex programming challenges...',
      date: '2024-01-05',
      readTime: '12 min read',
      category: 'Algorithms'
    }
  ];

  const professionalFacts = [
    { icon: <Code2 className="w-5 h-5" />, text: "Dedicated to writing clean, maintainable code following industry best practices" },
    { icon: <Shield className="w-5 h-5" />, text: "Committed to ethical technology development and cybersecurity excellence" },
    { icon: <Globe className="w-5 h-5" />, text: "Multilingual professional fluent in English, Hindi, and Marathi" },
    { icon: <Brain className="w-5 h-5" />, text: "Continuous learner with daily commitment to skill development and growth" },
    { icon: <Target className="w-5 h-5" />, text: "Goal-oriented developer focused on delivering impactful solutions" },
    { icon: <Terminal className="w-5 h-5" />, text: "Strong foundation in computer science principles and software engineering" }
  ];

  const handleViewWork = () => {
    window.open('https://github.com/anuragbhonsle', '_blank');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle />
      
      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge className="mb-4 bg-blue-600 text-white border-0 hover:bg-blue-700">
                <Code2 className="w-4 h-4 mr-2" />
                Full-Stack Developer & Cybersecurity Specialist
              </Badge>
            </motion.div>
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Anurag Kumar Bhonsle
            </motion.h1>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8"
            >
              <TypingAnimation 
                text="I design robust user interfaces, solve complex algorithmic problems, and build secure systems with a focus on excellence and innovation."
                className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
              />
            </motion.div>
            <motion.p 
              className="text-lg text-gray-500 dark:text-gray-400 mb-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Building secure, scalable web applications with modern technologies
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Contact</DialogTitle>
                  </DialogHeader>
                  <ContactForm />
                </DialogContent>
              </Dialog>
              <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20" onClick={handleViewWork}>
                <Github className="w-5 h-5 mr-2" />
                View Portfolio
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Me Section */}
      <motion.section 
        className="py-20 bg-gray-50 dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Professional Overview</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white text-6xl font-bold shadow-xl">
                  AKB
                </div>
              </motion.div>
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">About</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I am Anurag Kumar Bhonsle, a 22-year-old software developer with an MCA degree and a passion for creating innovative digital solutions. My expertise spans full-stack development and cybersecurity, with a commitment to building secure, scalable applications.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Currently advancing my skills in <span className="font-semibold text-blue-600">full-stack development</span> while pursuing specialized knowledge in <span className="font-semibold text-blue-600">cybersecurity</span>. My objective is to become a certified ethical hacker within the next 2-3 years.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I maintain a disciplined approach to professional development, dedicating 2-3 hours daily to learning new technologies and refining my skills. This commitment to continuous improvement drives my career growth and technical excellence.
                </p>
                <div className="flex gap-4 pt-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    <Target className="w-4 h-4 mr-2" />
                    Problem Solver
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    <Shield className="w-4 h-4 mr-2" />
                    Security Focused
                  </Badge>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills & Tech Stack */}
      <motion.section 
        className="py-20 bg-white dark:bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Technical Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="border-2 hover:shadow-lg transition-all duration-300 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="flex items-center capitalize text-gray-900 dark:text-white">
                        {category === 'frontend' && <Code2 className="w-6 h-6 mr-2 text-blue-600" />}
                        {category === 'backend' && <Server className="w-6 h-6 mr-2 text-blue-600" />}
                        {category === 'programming' && <Brain className="w-6 h-6 mr-2 text-blue-600" />}
                        {category === 'cybersecurity' && <Shield className="w-6 h-6 mr-2 text-blue-600" />}
                        {category === 'tools' && <Terminal className="w-6 h-6 mr-2 text-blue-600" />}
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge key={skill} variant="secondary" className="hover:scale-105 transition-transform bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="py-20 bg-gray-50 dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Featured Projects</h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-700">
                    <div className={`h-32 ${project.color} relative`}>
                      {project.image && (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-gray-900 border-0">
                          {project.status}
                        </Badge>
                      </div>
                      {project.link && (
                        <div className="absolute top-4 left-4">
                          <Button 
                            size="sm" 
                            variant="secondary" 
                            onClick={() => window.open(project.link, '_blank')}
                            className="bg-white/90 text-gray-900 hover:bg-white"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Live Demo
                          </Button>
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between text-gray-900 dark:text-white">
                        {project.title}
                        <ExternalLink className="w-5 h-5 text-gray-400" />
                      </CardTitle>
                      <CardDescription className="leading-relaxed dark:text-gray-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-600 dark:text-gray-400 mb-2">Technology Stack:</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs border-blue-200 text-blue-800 dark:border-blue-700 dark:text-blue-200">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-gray-600 dark:text-gray-400 mb-2">Key Features:</h4>
                          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                            {project.features.map((feature, i) => (
                              <li key={i} className="flex items-center">
                                <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Blog Section */}
      <motion.section 
        className="py-20 bg-white dark:bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Technical Blog</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="mb-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-lg text-gray-900 dark:text-white">{post.title}</CardTitle>
                      <CardDescription className="dark:text-gray-300">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                          <BookOpen className="w-4 h-4 mr-1" />
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                <BookOpen className="w-5 h-5 mr-2" />
                View All Articles
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Values & Mission */}
      <motion.section 
        className="py-20 bg-blue-900 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16">Professional Values & Mission</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">Core Values</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <Target className="w-6 h-6 mr-3 mt-1 text-blue-300" />
                    <div>
                      <h4 className="font-semibold">Continuous Learning</h4>
                      <p className="text-blue-100">Committed to daily skill enhancement and staying current with emerging technologies and industry best practices.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 mr-3 mt-1 text-blue-300" />
                    <div>
                      <h4 className="font-semibold">Ethical Technology</h4>
                      <p className="text-blue-100">Developing secure, responsible solutions that protect user data and maintain the highest ethical standards.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Code2 className="w-6 h-6 mr-3 mt-1 text-blue-300" />
                    <div>
                      <h4 className="font-semibold">Quality Engineering</h4>
                      <p className="text-blue-100">Building robust, scalable applications with clean code architecture and comprehensive testing methodologies.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">Professional Mission</h3>
                <div className="text-left space-y-4">
                  <p className="text-blue-100 leading-relaxed">
                    To become a distinguished professional who specializes in secure application development and ethical cybersecurity practices, contributing to safer digital environments.
                  </p>
                  <p className="text-blue-100 leading-relaxed">
                    Seeking opportunities that combine full-stack development, security engineering, and team collaboration to deliver innovative solutions that make a meaningful impact.
                  </p>
                  <p className="text-blue-100 leading-relaxed">
                    Committed to knowledge sharing, mentoring emerging developers, and contributing to the technology community through open source projects and technical writing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Professional Background */}
      <motion.section 
        className="py-20 bg-gray-50 dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Professional Background</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {professionalFacts.map((fact, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-blue-600 mr-4 flex-shrink-0">
                    {fact.icon}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{fact.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="py-20 bg-gray-900 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Professional Contact</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Available for full-stack development opportunities, cybersecurity consulting, 
              and collaborative projects. Let's discuss how we can work together to create innovative solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gray-800 border-gray-700 text-center">
                  <CardContent className="pt-6">
                    <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-gray-400 text-sm">anuragkbhonsle@gmail.com</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gray-800 border-gray-700 text-center">
                  <CardContent className="pt-6">
                    <Github className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                    <h3 className="font-semibold mb-2">GitHub</h3>
                    <p className="text-gray-400 text-sm">@anuragbhonsle</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gray-800 border-gray-700 text-center">
                  <CardContent className="pt-6">
                    <Linkedin className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                    <h3 className="font-semibold mb-2">LinkedIn</h3>
                    <p className="text-gray-400 text-sm">Professional Network</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Contact Form</DialogTitle>
                </DialogHeader>
                <ContactForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
