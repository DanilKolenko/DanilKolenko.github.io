export interface Project {
    id: number
    title: string
    description: string
    technologies: string[]
    imageUrl: string
    demoUrl?: string
    codeUrl?: string
}

export interface Skill {
    name: string
    level: number
    category: 'frontend' | 'backend' | 'tools' | 'other'
}

export const personalInfo = {
    name: 'Данил коленко',
    title: 'Full Stack Developer',
    bio: 'Опытный разработчик с 5+ годами создания веб-приложений. Специализируюсь на React, Next.js и Node.js.',
    email: 'ivan@example.com',
    location: 'Москва, Россия',
    experience: '5+ лет',
    avatar: '/images/avatar.jpg',
}

export const skills: Skill[] = [
    { name: 'React/Next.js', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'Python', level: 75, category: 'backend' },
    { name: 'Tailwind CSS', level: 85, category: 'frontend' },
    { name: 'Git/GitHub', level: 90, category: 'tools' },
    { name: 'Docker', level: 70, category: 'tools' },
    { name: 'PostgreSQL', level: 75, category: 'backend' },
]

export const projects: Project[] = [
    {
        id: 1,
        title: 'E-commerce Платформа',
        description: 'Полнофункциональный интернет-магазин с корзиной, оплатой и админ-панелью',
        technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'PostgreSQL'],
        imageUrl: '/images/project1.jpg',
        demoUrl: 'https://example.com/demo1',
        codeUrl: 'https://github.com/username/project1',
    },
    {
        id: 2,
        title: 'Аналитическая Дашборд',
        description: 'Интерактивная панель аналитики с графиками и реальными данными',
        technologies: ['React', 'D3.js', 'Express', 'MongoDB'],
        imageUrl: '/images/project2.jpg',
        demoUrl: 'https://example.com/demo2',
        codeUrl: 'https://github.com/username/project2',
    },
    {
        id: 3,
        title: 'Task Manager API',
        description: 'REST API для управления задачами с JWT аутентификацией',
        technologies: ['Node.js', 'Express', 'JWT', 'MongoDB'],
        imageUrl: '/images/project3.jpg',
        codeUrl: 'https://github.com/username/project3',
    },
]

export const socialLinks = {
    github: 'https://github.com/username',
    telegram: 'https://t.me/username',
    vk: 'https://vk.com/username',
    email: 'mailto:ivan@example.com',
    yandexmusic: 'https://music.yandex.ru/users/username',
    kinopoisk: 'https://www.kinopoisk.ru/user/username/',
}
