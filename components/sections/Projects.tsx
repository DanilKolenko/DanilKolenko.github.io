'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-center text-white mb-12">
                        Проекты
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10"
                            >
                                <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-6xl">
                                    🚀
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>
                                    <div className="flex gap-2 flex-wrap mb-4">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span key={tech} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        {project.demoUrl && (
                                            <a href={project.demoUrl} target="_blank" className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-sm">
                                                Демо
                                            </a>
                                        )}
                                        {project.codeUrl && (
                                            <a href={project.codeUrl} target="_blank" className="flex-1 text-center px-4 py-2 border border-white/30 rounded-lg text-sm">
                                                Код
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
