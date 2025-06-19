
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("story");
  const { theme } = useTheme();

  const tabs = [
    { id: "story", label: "My Story" },
    { id: "experience", label: "My Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
  ];

  const storyContent = (
    <>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        I'm a full-stack developer with a passion for creating web applications
        that solve real-world problems. My journey in tech started with a
        fascination for video games, which naturally evolved into an interest
        in how they were made. This curiosity led me to explore programming,
        and I've been hooked ever since.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Over the years, I've honed my skills in various technologies, including
        React, Node.js, and more. I enjoy the challenge of learning new things
        and staying up-to-date with the latest trends in the industry.
      </p>
    </>
  );

  const experienceContent = (
    <>
      <h4 className="font-semibold text-gray-900 dark:text-white text-xl mb-2">
        Software Engineer - Tech Company
      </h4>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Developed and maintained web applications using React and Node.js.
        Collaborated with cross-functional teams to deliver high-quality
        software solutions.
      </p>
      <h4 className="font-semibold text-gray-900 dark:text-white text-xl mb-2">
        Web Developer - Startup
      </h4>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Built responsive websites and web applications using modern web
        technologies. Worked closely with designers and project managers to
        meet client requirements.
      </p>
    </>
  );

  const educationContent = (
    <>
      <h4 className="font-semibold text-gray-900 dark:text-white text-xl mb-2">
        Bachelor of Science in Computer Science - University
      </h4>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Graduated with honors, focusing on software engineering and web
        development.
      </p>
      <h4 className="font-semibold text-gray-900 dark:text-white text-xl mb-2">
        Online Courses and Certifications
      </h4>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Completed various online courses and certifications in web development,
        including React, Node.js, and more.
      </p>
    </>
  );

  const skillsContent = (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">
          Frontend
        </h4>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">
          Backend
        </h4>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Node.js</li>
          <li>Express</li>
          <li>SQL</li>
          <li>NoSQL</li>
        </ul>
      </div>
    </div>
  );

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Content */}
            <div className="space-y-8">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-black dark:text-white"
              >
                Gamer by ❤️, Developer by Default
              </motion.h3>

              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-blue-500 text-white'
                        : theme === 'dark'
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-black'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-black p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800"
              >
                {activeTab === "story" && storyContent}
                {activeTab === "experience" && experienceContent}
                {activeTab === "education" && educationContent}
                {activeTab === "skills" && skillsContent}
              </motion.div>
            </div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/api/placeholder/400/500"
                  alt="Anurag"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-lg"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
