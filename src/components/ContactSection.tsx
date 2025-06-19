import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const ContactSection = () => {
  const { theme } = useTheme();
  
  const contactMethods = [
    {
      label: "Email",
      value: "anurag.b.2107@gmail.com",
      href: "mailto:anurag.b.2107@gmail.com",
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/anuragbhonsle",
      href: "https://linkedin.com/in/anuragbhonsle",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      value: "github.com/anuragbhonsle",
      href: "https://github.com/anuragbhonsle",
      icon: Github,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to collaborate? Let's connect and build something amazing together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`group p-8 rounded-2xl shadow-lg transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-900 border border-gray-800 hover:bg-gray-800'
                    : 'bg-gray-50 border border-gray-200 hover:bg-white hover:shadow-xl'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-2xl transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'bg-blue-500/20 group-hover:bg-blue-500/30'
                      : 'bg-blue-500/10 group-hover:bg-blue-500/20'
                  }`}>
                    <method.icon className="w-8 h-8 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-1">
                      {method.label}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-colors duration-200">
                      {method.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
