
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
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
  Star
} from 'lucide-react';

const Index = () => {
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
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
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

  const funFacts = [
    { icon: <Coffee className="w-5 h-5" />, text: "Codes best with a cup of chai and lo-fi beats" },
    { icon: <Star className="w-5 h-5" />, text: "Believes in Cristiano's mentality: 'Your love makes me strong, your hate makes me unstoppable'" },
    { icon: <Globe className="w-5 h-5" />, text: "Speaks English, Hindi, and Marathi - debugging in multiple languages!" },
    { icon: <Brain className="w-5 h-5" />, text: "Daily ritual: 2-3 hours of learning, because growth never stops" },
    { icon: <Heart className="w-5 h-5" />, text: "Spiritual soul who finds peace in code and meditation" },
    { icon: <Zap className="w-5 h-5" />, text: "Gen-Z energy with old-school values of hard work and humility" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                <Rocket className="w-4 h-4 mr-2" />
                Full-Stack Developer & Aspiring Ethical Hacker
              </Badge>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Hey, I'm Anurag! 👋
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              A <span className="font-semibold text-blue-600">passionate developer</span> crafting digital experiences by day,
              and diving deep into <span className="font-semibold text-purple-600">cybersecurity</span> by night.
            </p>
            <p className="text-lg text-gray-500 mb-10 italic">
              "Building the web securely, one line of code at a time" ⚡
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0">
                <Mail className="w-5 h-5 mr-2" />
                Let's Connect
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50">
                <Github className="w-5 h-5 mr-2" />
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">About Me</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  AK
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800">The Story So Far...</h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm Anurag Kumar Bhonsle, a 22-year-old self-taught developer who believes that the best code comes from genuine passion, not just paychecks. With an MCA degree under my belt, I've been on this wild journey of turning coffee into code and problems into solutions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Currently mastering the art of <span className="font-semibold text-blue-600">full-stack development</span> while seriously diving into <span className="font-semibold text-purple-600">cybersecurity</span>. My goal? To become a skilled white-hat hacker within the next 2-3 years - because the digital world needs more guardians, not invaders.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  What sets me apart? I'm not just another developer who codes 9-to-5. I dedicate 2-3 hours daily to learning, growing, and building things that matter. Inspired by Cristiano Ronaldo's relentless work ethic, I believe that consistent effort beats talent when talent doesn't work hard.
                </p>
                <div className="flex gap-4 pt-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    <Target className="w-4 h-4 mr-2" />
                    Problem Solver
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    <Shield className="w-4 h-4 mr-2" />
                    Security Enthusiast
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tech Stack */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Skills & Tech Arsenal</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600">
                    <Code2 className="w-6 h-6 mr-2" />
                    Frontend Magic
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-600">
                    <Rocket className="w-6 h-6 mr-2" />
                    Backend Power
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-green-100 text-green-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-600">
                    <Brain className="w-6 h-6 mr-2" />
                    Problem Solving
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.programming.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 hover:border-red-400 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <Shield className="w-6 h-6 mr-2" />
                    Cybersecurity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.cybersecurity.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-red-100 text-red-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-600">
                    <Zap className="w-6 h-6 mr-2" />
                    Tools & More
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-orange-100 text-orange-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Featured Projects</h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`h-32 ${project.color} relative`}>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/20 text-white border-white/30">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <ExternalLink className="w-5 h-5 text-gray-400" />
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-600 mb-2">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-600 mb-2">Key Features:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values & Mission */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
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
      </section>

      {/* Fun Facts */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">The Human Behind the Code</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {funFacts.map((fact, index) => (
                <div key={index} className="flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-blue-500 mr-4 flex-shrink-0">
                    {fact.icon}
                  </div>
                  <p className="text-gray-700">{fact.text}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 italic">
                "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing." - Cristiano Ronaldo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Let's Build Something Amazing Together</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Whether you're looking for a passionate developer, need a security consultation, 
              or just want to geek out about the latest tech trends, I'm always excited to connect with fellow creators and innovators.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gray-800 border-gray-700 text-center">
                <CardContent className="pt-6">
                  <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                  <h3 className="font-semibold mb-2">Email Me</h3>
                  <p className="text-gray-400 text-sm">anurag.bhonsle@example.com</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700 text-center">
                <CardContent className="pt-6">
                  <Github className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <p className="text-gray-400 text-sm">@anuragbhonsle</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700 text-center">
                <CardContent className="pt-6">
                  <Linkedin className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <p className="text-gray-400 text-sm">Connect with me</p>
                </CardContent>
              </Card>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0">
              <Mail className="w-5 h-5 mr-2" />
              Start a Conversation
            </Button>
            <p className="text-gray-400 mt-6 italic">
              "Great things in business are never done by one person. They're done by a team of people." - Let's be that team! 🚀
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
