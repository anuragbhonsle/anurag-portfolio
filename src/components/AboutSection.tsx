import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Code, User, GraduationCap, Wrench } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Node.js",
    "C++",
    "Data Structures",
    "Algorithms",
    "Git",
    "GitHub",
    "Tailwind CSS",
    "MongoDB",
    "Express.js",
    "PostgreSQL",
    "Linux",
    "VS Code",
    "Postman",
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                  I build websites full-time and study algorithms part-time.
                </h2>
              </div>

              <Tabs defaultValue="story" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger
                    value="story"
                    className="flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    My Story
                  </TabsTrigger>
                  <TabsTrigger
                    value="experience"
                    className="flex items-center gap-2"
                  >
                    <Code className="w-4 h-4" />
                    Experience
                  </TabsTrigger>
                  <TabsTrigger
                    value="education"
                    className="flex items-center gap-2"
                  >
                    <GraduationCap className="w-4 h-4" />
                    Education
                  </TabsTrigger>
                  <TabsTrigger
                    value="skills"
                    className="flex items-center gap-2"
                  >
                    <Wrench className="w-4 h-4" />
                    Skills
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="story" className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        I am Anurag, a 22-year-old developer with a passion for
                        front-end development, DSA, and cybersecurity. I'm
                        deeply committed to learning and building meaningful
                        digital experiences. My journey started with curiosity
                        about how websites work, and now I'm dedicated to
                        creating secure, scalable applications that make a
                        difference.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="experience" className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="border-l-4 border-blue-600 pl-4">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Frontend Developer Intern
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            @ Yhills
                          </p>
                          <p className="text-gray-500 dark:text-gray-400">
                            March 2024 – May 2024
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 mt-2">
                            Developed responsive web applications using React.js
                            and modern frontend technologies.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="education" className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-6">
                        <div className="border-l-4 border-blue-600 pl-4">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Master of Computer Applications (MCA)
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            SPPU
                          </p>
                          <p className="text-gray-500 dark:text-gray-400">
                            2023 – 2025
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 font-medium">
                            CGPA: 7.45
                          </p>
                        </div>
                        <div className="border-l-4 border-gray-300 pl-4">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Bachelor of Science in Computer Science
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 font-medium">
                            SPPU
                          </p>
                          <p className="text-gray-500 dark:text-gray-400">
                            2020 – 2023
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 font-medium">
                            CGPA: 8.59
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="skills" className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
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
                </TabsContent>
              </Tabs>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.pinimg.com/originals/0d/d0/f7/0dd0f79ee32eb3dcf58bdc5bf212a1f9.gif"
                  alt="About me"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
