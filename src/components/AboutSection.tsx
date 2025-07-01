import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("story");
  const { theme } = useTheme();

  const tabs = [
    { id: "story", label: "My Story" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
  ];

  const storyContent = (
    <div className="space-y-4">
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
        I'm a full-stack developer and MCA graduate with a passion for building
        web applications that solve real-world problems. Currently working with
        technologies like React, Node.js, and Express, I enjoy creating
        scalable, secure, and user-focused solutions from front to back.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
        I'm also actively sharpening my skills in data structures and algorithms
        using C++, and diving into backend development with a long-term goal of
        stepping into the world of cybersecurity. With a mindset focused on
        consistent learning and growth, I'm committed to leveling up every day
        both as a developer and as a problem solver.
      </p>
    </div>
  );

  const experienceContent = (
    <div className="space-y-4">
      <div className="border-l-2 border-blue-500 pl-4">
        <h4 className="font-medium text-gray-900 dark:text-white text-lg mb-1">
          Front-end Web Developer Intern
        </h4>
        <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
          @Yhills - Remote (Mar 2024 – May 2024)
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
          Designed and built a responsive blog website using HTML, CSS, and
          JavaScript. The project involved creating interactive UI elements,
          implementing dynamic post rendering, and ensuring a clean,
          mobile-friendly layout. I also practiced writing modular JavaScript
          and used Git for version control throughout the development process.
        </p>
      </div>
    </div>
  );

  const educationContent = (
    <div className="space-y-6">
      <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
        <h4 className="font-medium text-gray-900 dark:text-white text-lg mb-1">
          Master of Computer Applications (MCA)
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          Savitribai Phule Pune University (2023–2025)
        </p>
        <p className="text-blue-600 dark:text-blue-400 font-medium">
          CGPA: 7.62
        </p>
      </div>
      <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
        <h4 className="font-medium text-gray-900 dark:text-white text-lg mb-1">
          Bachelor of Science in Computer Science
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          Savitribai Phule Pune University (2020–2023)
        </p>
        <p className="text-blue-600 dark:text-blue-400 font-medium">
          CGPA: 8.59
        </p>
      </div>
    </div>
  );

  const skillsContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
        <h4 className="font-medium text-gray-900 dark:text-white text-lg mb-3">
          Frontend Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"].map(
            (skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm rounded-full"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
      <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
        <h4 className="font-medium text-gray-900 dark:text-white text-lg mb-3">
          Backend Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {["Node.js", "Express", "SQL", "NoSQL"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="about"
      className="py-16 bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-16 h-px bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Tab Navigation - Card Style */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 p-4">
                <div className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left px-4 py-3 rounded-md font-medium transition-all duration-200 ${
                        activeTab === tab.id
                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-l-2 border-blue-500"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tab Content - Card Style */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 min-h-[400px]"
              >
                {activeTab === "story" && storyContent}
                {activeTab === "experience" && experienceContent}
                {activeTab === "education" && educationContent}
                {activeTab === "skills" && skillsContent}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
