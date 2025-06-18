
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
  Terminal,
  ArrowRight,
  Check
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
      gradient: 'from-gray-900 to-gray-700',
      link: 'https://anime-verse-xi.vercel.app/',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'SecureChat',
      description: 'End-to-end encrypted messaging application with advanced security protocols for secure communication.',
      tech: ['React.js', 'Socket.io', 'Node.js', 'Cryptography'],
      features: ['E2E encryption', 'Secure messaging', 'Anonymous mode', 'Security auditing'],
      status: 'In Development',
      gradient: 'from-gray-800 to-gray-600'
    },
    {
      title: 'VulnScanner',
      description: 'Automated vulnerability assessment tool for web applications with comprehensive security analysis.',
      tech: ['Python', 'Node.js', 'Security APIs', 'React.js'],
      features: ['OWASP Top 10 scanning', 'Custom rules', 'Detailed reports', 'CI/CD integration'],
      status: 'Planning',
      gradient: 'from-gray-700 to-gray-500'
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

  const professionalValues = [
    { icon: <Code2 className="w-6 h-6" />, text: "Clean, maintainable code following industry best practices" },
    { icon: <Shield className="w-6 h-6" />, text: "Ethical technology development and cybersecurity excellence" },
    { icon: <Globe className="w-6 h-6" />, text: "Multilingual professional fluent in English, Hindi, and Marathi" },
    { icon: <Brain className="w-6 h-6" />, text: "Continuous learner with daily commitment to skill development" },
    { icon: <Target className="w-6 h-6" />, text: "Goal-oriented developer focused on delivering impactful solutions" },
    { icon: <Terminal className="w-6 h-6" />, text: "Strong foundation in computer science and software engineering" }
  ];

  const handleViewWork = () => {
    window.open('https://github.com/anuragbhonsle', '_blank');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle />
      
      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden min-h-screen flex items-center"
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
                  <Badge className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 px-4 py-2">
                    <Code2 className="w-4 h-4 mr-2" />
                    Full-Stack Developer & Cybersecurity Specialist
                  </Badge>
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
                    <Github className="w-5 h-5 mr-2" />
                    View Portfolio
                  </Button>
                </div>
              </motion.div>

              {/* Visual Element */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative"
              >
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl transform rotate-6 shadow-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-600 rounded-3xl transform -rotate-3 shadow-xl"></div>
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 flex items-center justify-center shadow-2xl">
                    <div className="text-center space-y-4">
                      <div className="text-6xl font-bold text-white">AKB</div>
                      <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
                      <div className="text-blue-300 font-medium">Full-Stack Developer</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="py-24 bg-gray-50 dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Professional Overview
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Dedicated software developer with expertise in full-stack development and cybersecurity
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I am Anurag Kumar Bhonsle, a 22-year-old software developer with an MCA degree and a passion for creating innovative digital solutions. My expertise spans full-stack development and cybersecurity, with a commitment to building secure, scalable applications.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Currently advancing my skills in <span className="font-semibold text-gray-900 dark:text-white">full-stack development</span> while pursuing specialized knowledge in <span className="font-semibold text-gray-900 dark:text-white">cybersecurity</span>. My objective is to become a certified ethical hacker within the next 2-3 years.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I maintain a disciplined approach to professional development, dedicating 2-3 hours daily to learning new technologies and refining my skills. This commitment to continuous improvement drives my career growth and technical excellence.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-4 py-2">
                    <Target className="w-4 h-4 mr-2" />
                    Problem Solver
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-4 py-2">
                    <Shield className="w-4 h-4 mr-2" />
                    Security Focused
                  </Badge>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {professionalValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-gray-600 dark:text-gray-400 mr-4 mt-1">
                      {value.icon}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{value.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="py-24 bg-white dark:bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Technical Expertise
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive skill set spanning modern web technologies and security practices
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardHeader className="relative z-10">
                      <CardTitle className="flex items-center capitalize text-gray-900 dark:text-white text-xl">
                        {category === 'frontend' && <Code2 className="w-6 h-6 mr-3 text-gray-600 dark:text-gray-400" />}
                        {category === 'backend' && <Server className="w-6 h-6 mr-3 text-gray-600 dark:text-gray-400" />}
                        {category === 'programming' && <Brain className="w-6 h-6 mr-3 text-gray-600 dark:text-gray-400" />}
                        {category === 'cybersecurity' && <Shield className="w-6 h-6 mr-3 text-gray-600 dark:text-gray-400" />}
                        {category === 'tools' && <Terminal className="w-6 h-6 mr-3 text-gray-600 dark:text-gray-400" />}
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 px-3 py-1"
                          >
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
        className="py-24 bg-gray-50 dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Showcasing innovative solutions and technical implementations
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-700">
                    <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                      {project.image && (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover opacity-20"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-gray-900 border-0 shadow-md">
                          {project.status}
                        </Badge>
                      </div>
                      {project.link && (
                        <div className="absolute bottom-4 left-4">
                          <Button 
                            size="sm" 
                            variant="secondary" 
                            onClick={() => window.open(project.link, '_blank')}
                            className="bg-white/90 text-gray-900 hover:bg-white shadow-md"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </div>
                      )}
                      <div className="absolute top-4 left-4 text-white">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {project.description}
                      </CardDescription>
                      
                      <div>
                        <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">Technology Stack</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-400">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">Key Features</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
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
        className="py-24 bg-white dark:bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Technical Insights
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Sharing knowledge and experiences in software development
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-gray-800 group">
                    <CardHeader className="space-y-4">
                      <div className="flex justify-between items-start">
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
                <BookOpen className="w-5 h-5 mr-2" />
                View All Articles
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="py-24 bg-gray-900 text-white relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Let's Connect</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Available for full-stack development opportunities, cybersecurity consulting, 
                and collaborative projects. Let's discuss how we can work together.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gray-800 border-gray-700 text-center hover:bg-gray-750 transition-colors duration-300">
                  <CardContent className="pt-8 pb-6">
                    <Mail className="w-10 h-10 mx-auto mb-4 text-blue-400" />
                    <h3 className="font-semibold mb-2 text-white text-lg">Email</h3>
                    <p className="text-gray-400">anuragkbhonsle@gmail.com</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gray-800 border-gray-700 text-center hover:bg-gray-750 transition-colors duration-300">
                  <CardContent className="pt-8 pb-6">
                    <Github className="w-10 h-10 mx-auto mb-4 text-blue-400" />
                    <h3 className="font-semibold mb-2 text-white text-lg">GitHub</h3>
                    <p className="text-gray-400">@anuragbhonsle</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gray-800 border-gray-700 text-center hover:bg-gray-750 transition-colors duration-300">
                  <CardContent className="pt-8 pb-6">
                    <Linkedin className="w-10 h-10 mx-auto mb-4 text-blue-400" />
                    <h3 className="font-semibold mb-2 text-white text-lg">LinkedIn</h3>
                    <p className="text-gray-400">Professional Network</p>
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
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
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
