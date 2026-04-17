'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-black to-blue-900">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                        Привет, я{' '}
                        <span className="gradient-text">
              {personalInfo.name.split(' ')[0]}
            </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-6">{personalInfo.title}</p>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                        {personalInfo.bio}
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:shadow-lg transition-all"
                        >
                            Связаться
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-3 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all"
                        >
                            Мои работы
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
