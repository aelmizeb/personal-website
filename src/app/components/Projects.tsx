'use client'

import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { getProjects } from '@/utils/firebase';
import { useEffect, useState } from 'react';
import type { Project } from '@/types';
import { basePath } from '@/utils/constants';
import { t } from 'i18next';
import { useLanguage } from '@/app/context/LanguageContext';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const { lang } = useLanguage();

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects(lang)
      setProjects(data)
    }
    fetchProjects()
  }, [lang]);

  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          {...fadeInUp}
        >
          {t('common.featuredOpenSourceProjects')}
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate={projects.length > 0 ? "animate" : "initial"}
        >
          {projects.map((project, index) => {
            const imageSrc = project.image?.startsWith('http') 
              ? project.image 
              : `${basePath}${project.image}`

            return (
              <motion.article
                key={project.title}
                className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 300 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <motion.h3 
                  className="text-xl font-semibold mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.description}
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="h-5 w-5" />
                    <span>Code</span>
                  </motion.a>
                  {project.demoLink?.trim() && (
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="h-5 w-5" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </motion.div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
