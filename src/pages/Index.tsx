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
  Heart, 
  Coffee, 
  Globe, 
  Github, 
  Linkedin, 
  Mail,
  ExternalLink,
  Zap,
  Target,
  Brain,
  Star,
  Trophy,
  Calendar,
  BookOpen,
  Eye
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
      description: 'A sleek anime watchlist manager that helps otakus track their favorite series, discover new shows, and connect with fellow anime enthusiasts.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      features: ['Smart recommendations', 'Progress tracking', 'Community reviews', 'Responsive design'],
      status: 'Live',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      link: 'https://anime-verse-xi.vercel.app/',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'SecureChat',
      description: 'End-to-end encrypted messaging app with advanced security features, built while diving deep into cybersecurity concepts.',
      tech: ['React.js', 'Socket.io', 'Node.js', 'Cryptography'],
      features: ['E2E encryption', 'Self-destructing messages', 'Anonymous mode', 'Security auditing'],
      status: 'In Development',
      color: 'bg-gradient-to-r from-green-500 to-teal-500'
    },
    {
      title: 'VulnScanner',
      description: 'Automated vulnerability scanner for web applications, helping developers identify and fix security issues early in development.',
      tech: ['Python', 'Node.js', 'Security APIs', 'React.js'],
      features: ['OWASP Top 10 scanning', 'Custom rules', 'Detailed reports', 'CI/CD integration'],
      status: 'Planning',
      color: 'bg-gradient-to-r from-red-500 to-orange-500'
    }
  ];

  const achievements = [
    { title: 'LeetCode Streak', value: '178 days', icon: <Trophy className="w-6 h-6" /> },
    { title: 'Projects Completed', value: '15+', icon: <Code2 className="w-6 h-6" /> },
    { title: 'Years of Learning', value: '3+', icon: <Calendar className="w-6 h-6" /> },
    { title: 'Languages Known', value: '3', icon: <Globe className="w-6 h-6" /> }
  ];

  const blogPosts = [
    {
      title: 'My Journey from Zero to Full-Stack Developer',
      excerpt: 'How I went from knowing nothing about coding to building real-world applications...',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Personal'
    },
    {
      title: 'Understanding Ethical Hacking: The White Hat Path',
      excerpt: 'Why I chose to pursue cybersecurity and what it means to be an ethical hacker...',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cybersecurity'
    },
    {
      title: 'Building Animeverse: Lessons Learned',
      excerpt: 'The technical challenges and solutions behind my anime watchlist manager...',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Development'
    }
  ];

  const funFacts = [
    { icon: <Coffee className="w-5 h-5" />, text: "Codes best with a cup of chai and lo-fi beats" },
    { icon: <Star className="w-5 h-5" />, text: "Believes in Cristiano's mentality: 'Your love makes me strong, your hate makes me unstoppable'" },
    { icon: <Globe className="w-5 h-5" />, text: "Speaks English, Hindi, and Marathi - debugging in multiple languages!" },
    { icon: <Brain className="w-5 h-5" />, text: "Daily ritual: 2-3 hours of learning, because growth never stops" },
    { icon: <Heart className="w-5 h-5" />, text: "Spiritual soul who finds peace in code and meditation" },
    { icon: <Zap className="w-5 h-5" />, text: "Gen-Z energy with old-school values of hard work and humility" }
  ];

  const handleViewWork = () => {
    window.open('https://github.com/anuragbhonsle', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-colors duration-300">
      <ThemeToggle />
      
      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden py-20 lg:py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-400/5 dark:to-purple-400/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                <Rocket className="w-4 h-4 mr-2" />
                Full-Stack Developer & Aspiring Ethical Hacker
              </Badge>
            </motion.div>
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-gray-100 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hey, I'm Anurag! 👋
            </motion.h1>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8"
            >
              <TypingAnimation 
                text="I design user interfaces, solve complex problems with DSA, and build secure systems — all while staying curious and consistent."
                className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
              />
            </motion.div>
            <motion.p 
              className="text-lg text-gray-500 dark:text-gray-400 mb-10 italic"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              "Building the web securely, one line of code at a time" ⚡
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0">
                    <Mail className="w-5 h-5 mr-2" />
                    Let's Connect
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Get In Touch</DialogTitle>
                  </DialogHeader>
                  <ContactForm />
                </DialogContent>
              </Dialog>
              <Button variant="outline" size="lg" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20" onClick={handleViewWork}>
                <Github className="w-5 h-5 mr-2" />
                View My Work
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section 
        className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">Achievements & Stats</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-blue-500 mb-3 flex justify-center">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">{achievement.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{achievement.title}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Me Section */}
      <motion.section 
        className="py-20 bg-white dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200">About Me</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  AK
                </div>
              </motion.div>
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">The Story So Far...</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm Anurag Kumar Bhonsle, a 22-year-old self-taught developer who believes that the best code comes from genuine passion, not just paychecks. With an MCA degree under my belt, I've been on this wild journey of turning coffee into code and problems into solutions.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Currently mastering the art of <span className="font-semibold text-blue-600">full-stack development</span> while seriously diving into <span className="font-semibold text-purple-600">cybersecurity</span>. My goal? To become a skilled white-hat hacker within the next 2-3 years - because the digital world needs more guardians, not invaders.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  What sets me apart? I'm not just another developer who codes 9-to-5. I dedicate 2-3 hours daily to learning, growing, and building things that matter. Inspired by Cristiano Ronaldo's relentless work ethic, I believe that consistent effort beats talent when talent doesn't work hard.
                </p>
                <div className="flex gap-4 pt-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    <Target className="w-4 h-4 mr-2" />
                    Problem Solver
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    <Shield className="w-4 h-4 mr-2" />
                    Security Enthusiast
                  </Badge>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills & Tech Stack */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200">Skills & Tech Arsenal</h2>
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
                  <Card className="border-2 hover:shadow-lg transition-all duration-300 dark:bg-gray-800">
                    <CardHeader>
                      <CardTitle className="flex items-center capitalize">
                        {category === 'frontend' && <Code2 className="w-6 h-6 mr-2 text-blue-600" />}
                        {category === 'backend' && <Rocket className="w-6 h-6 mr-2 text-green-600" />}
                        {category === 'programming' && <Brain className="w-6 h-6 mr-2 text-purple-600" />}
                        {category === 'cybersecurity' && <Shield className="w-6 h-6 mr-2 text-red-600" />}
                        {category === 'tools' && <Zap className="w-6 h-6 mr-2 text-orange-600" />}
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge key={skill} variant="secondary" className="hover:scale-105 transition-transform">
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
        className="py-20 bg-white dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200">Featured Projects</h2>
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
                        <Badge className="bg-white/20 text-white border-white/30">
                          {project.status}
                        </Badge>
                      </div>
                      {project.link && (
                        <div className="absolute top-4 left-4">
                          <Button 
                            size="sm" 
                            variant="secondary" 
                            onClick={() => window.open(project.link, '_blank')}
                            className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Live Demo
                          </Button>
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
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
                          <h4 className="font-semibold text-sm text-gray-600 dark:text-gray-400 mb-2">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
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
        className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200">Latest Blog Posts</h2>
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
                  <Card className="h-full hover:shadow-lg transition-all duration-300 dark:bg-gray-800">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="mb-2">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-lg">{post.title}</CardTitle>
                      <CardDescription className="dark:text-gray-300">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                        <Button variant="ghost" size="sm">
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
              <Button variant="outline" size="lg">
                <BookOpen className="w-5 h-5 mr-2" />
                View All Posts
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Values & Mission */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16">Values & Mission</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">What Drives Me</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <Heart className="w-6 h-6 mr-3 mt-1 text-red-400" />
                    <div>
                      <h4 className="font-semibold">Continuous Learning</h4>
                      <p className="text-blue-100">Every day is a chance to grow. I dedicate time daily to learning because stagnation is the enemy of progress.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 mr-3 mt-1 text-green-400" />
                    <div>
                      <h4 className="font-semibold">Ethical Technology</h4>
                      <p className="text-blue-100">Technology should empower and protect, not exploit. I build with responsibility and security in mind.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Target className="w-6 h-6 mr-3 mt-1 text-yellow-400" />
                    <div>
                      <h4 className="font-semibold">Purpose-Driven Development</h4>
                      <p className="text-blue-100">Code should solve real problems and make people's lives better, not just exist for the sake of existing.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">My Mission</h3>
                <div className="text-left space-y-4">
                  <p className="text-blue-100 leading-relaxed">
                    To become a skilled professional who bridges the gap between development and security, creating robust applications while helping organizations stay safe from digital threats.
                  </p>
                  <p className="text-blue-100 leading-relaxed">
                    I want to work in a role that combines problem-solving, ethical hacking, web development, and mentoring others - because knowledge shared is knowledge multiplied.
                  </p>
                  <p className="text-blue-100 leading-relaxed">
                    My ultimate goal is to contribute to a safer digital world while staying true to my values of humility, continuous growth, and authentic connection with others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Fun Facts */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200">The Human Behind the Code</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {funFacts.map((fact, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-blue-500 mr-4 flex-shrink-0">
                    {fact.icon}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{fact.text}</p>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 dark:text-gray-400 italic">
                "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing." - Cristiano Ronaldo
              </p>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-8">Let's Build Something Amazing Together</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Whether you're looking for a passionate developer, need a security consultation, 
              or just want to geek out about the latest tech trends, I'm always excited to connect with fellow creators and innovators.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gray-800 border-gray-700 text-center">
                  <CardContent className="pt-6">
                    <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                    <h3 className="font-semibold mb-2">Email Me</h3>
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
                    <p className="text-gray-400 text-sm">Connect with me</p>
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
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0">
                    <Mail className="w-5 h-5 mr-2" />
                    Start a Conversation
                  </Button>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Get In Touch</DialogTitle>
                </DialogHeader>
                <ContactForm />
              </DialogContent>
            </Dialog>
            <p className="text-gray-400 mt-6 italic">
              "Great things in business are never done by one person. They're done by a team of people." - Let's be that team! 🚀
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
