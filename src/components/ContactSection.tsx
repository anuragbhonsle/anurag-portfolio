
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Instagram, Twitter } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      label: 'Email',
      value: 'anuragkbhonsle@gmail.com',
      href: 'mailto:anuragkbhonsle@gmail.com',
      description: 'Let\'s discuss your next project'
    },
    {
      icon: <Github className="w-8 h-8" />,
      label: 'GitHub',
      value: '@anuragbhonsle',
      href: 'https://github.com/anuragbhonsle',
      description: 'Check out my latest code'
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      label: 'Instagram',
      value: '@erenxxnn',
      href: 'https://www.instagram.com/erenxxnn/',
      description: 'Follow my creative journey'
    },
    {
      icon: <Twitter className="w-8 h-8" />,
      label: 'X (Twitter)',
      value: '@Anuraaaag7',
      href: 'https://x.com/Anuraaaag7',
      description: 'Connect and share ideas'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on your next project? I'm always excited to work on innovative ideas and meaningful solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 flex justify-center">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{method.label}</h3>
                    <p className="text-gray-400 text-sm">{method.description}</p>
                    <p className="text-blue-400 font-medium">{method.value}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white mt-4"
                      onClick={() => window.open(method.href, '_blank')}
                    >
                      Connect
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 text-lg mb-8">
              Prefer email? Drop me a line and I'll get back to you within 24 hours.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => window.open('mailto:anuragkbhonsle@gmail.com', '_blank')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
