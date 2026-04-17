'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'

const About = () => {
    return (
        <section id="about" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold text-center text-white mb-12">
                        Обо мне
                    </h2>
                    <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
                        <p className="text-gray-300 leading-relaxed">
                            {personalInfo.bio}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
