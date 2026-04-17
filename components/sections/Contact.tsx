'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { socialLinks } from '@/data/portfolio'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        setTimeout(() => {
            setStatus('success')
            setFormData({ name: '', email: '', message: '' })
            setTimeout(() => setStatus('idle'), 3000)
        }, 1000)
    }

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-center text-white mb-12">
                        Контакты
                    </h2>
                    <div className="max-w-2xl mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Ваше имя"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                            />
                            <textarea
                                rows={4}
                                placeholder="Сообщение"
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                            />
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
                            >
                                {status === 'loading' ? 'Отправка...' : 'Отправить'}
                            </button>
                            {status === 'success' && (
                                <div className="bg-green-500/20 border border-green-500 text-green-300 text-center p-3 rounded-lg">
                                    Сообщение отправлено! ✨
                                </div>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
