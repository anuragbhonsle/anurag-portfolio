import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveLink?: string;
  githubLink?: string;
  reverse?: boolean;
}

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-32 last:mb-0"
    >
      <div
        className={`grid lg:grid-cols-2 gap-16 items-center ${
          project.reverse ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        {/* Project Image */}
        <div className={project.reverse ? "lg:col-start-2" : ""}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative group"
          >
            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Project Details */}
        <div className={`space-y-6 ${project.reverse ? "lg:col-start-1" : ""}`}>
          <div className="space-y-4">
            <motion.h3
              className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {project.title}
            </motion.h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-400 px-3 py-1"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            {project.liveLink && (
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open(project.liveLink, "_blank")}
              >
                <Eye className="w-5 h-5 mr-2" />
                Live Demo
              </Button>
            )}
            {project.githubLink && (
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(project.githubLink, "_blank")}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectSection = () => {
  const projects: Project[] = [
    {
      title: "AnimeVerse",
      description:
        "A comprehensive web application for managing anime watchlists. Features include personalized recommendations, progress tracking, community reviews, and a responsive design that works seamlessly across all devices.",
      image: "animeverse.png",
      tech: ["React.js", "Node.js", "Supabase", "Express.js", "Tailwind CSS"],
      liveLink: "https://anime-verse-xi.vercel.app/",
      githubLink: "https://github.com/anuragbhonsle",
    },
    {
      title: "Eclipz",
      description:
        "A privacy-focused anonymous messaging platform using Firebase for backend services. Supports Google Sign-In with Firebase Authentication, real-time Firestore database for message storage, and responsive frontend built with React and Tailwind CSS. Prioritizes user simplicity, data privacy, and clean UI across devices.",
      image: "ecz.png",
      tech: ["React.js", "Node.js", "Firebase", "Express.js", "Tailwind CSS"],
      liveLink: "https://unseen-eclipz-stream.vercel.app/",
      githubLink: "https://github.com/anuragbhonsle",
    },
    // Add more projects here as needed
  ];

  return (
    <section
      id="work"
      className="py-24 bg-white dark:bg-black border-y border-gray-300 dark:border-gray-700 shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A collection of projects that showcase my skills and passion for
              creating web apps
            </p>
          </motion.div>

          <div className="space-y-0">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={{ ...project, reverse: index % 2 === 1 }}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
