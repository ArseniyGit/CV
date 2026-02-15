import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Telegram Bot',
    category: 'Telegram Bot',
    desc: 'Полноценный магазин в Telegram с каталогом, корзиной, оплатой и уведомлениями. Интеграция с платёжными системами и админ-панелью.',
    tags: ['Node.js', 'Telegraf.js', 'PostgreSQL', 'Prisma'],
    gradient: 'from-purple-500/20 to-blue-500/20',
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web App',
    desc: 'Админ-панель для SaaS-продукта с аналитикой, управлением пользователями, биллингом и REST API для мобильного приложения.',
    tags: ['Nest.js', 'React', 'PostgreSQL', 'Docker'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Telegram Mini App',
    category: 'Mini App',
    desc: 'Веб-приложение внутри Telegram для бронирования услуг. Календарь, оплата, уведомления и интеграция с CRM.',
    tags: ['React', 'TWA API', 'Node.js', 'MongoDB'],
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'CI/CD Pipeline',
    category: 'DevOps',
    desc: 'Автоматизированный пайплайн развёртывания с Docker, GitHub Actions, автотестами и мониторингом для микросервисной архитектуры.',
    tags: ['Docker', 'GitHub Actions', 'Nginx', 'Bash'],
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
];

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-accent" />
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Проекты
          </span>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter"
          >
            Избранные <span className="text-accent">работы</span>
          </motion.h2>
        </div>

        {/* Projects list */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group relative rounded-3xl border border-dark-border bg-dark-card/30 hover:border-accent/30 transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
                  {/* Number & Category */}
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-2 lg:w-40 flex-shrink-0">
                    <span className="text-5xl lg:text-6xl font-black text-dark-border group-hover:text-accent/20 transition-colors duration-300">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-5 max-w-2xl">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 text-xs font-medium rounded-full border border-dark-border text-text-muted group-hover:border-accent/20 group-hover:text-accent/70 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 lg:flex-shrink-0">
                    <button className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-text-muted hover:border-accent hover:text-accent transition-all duration-300">
                      <Github size={16} />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-text-muted hover:border-accent hover:text-accent transition-all duration-300">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
