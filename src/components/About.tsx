import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Target, Rocket } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-12 h-px bg-accent" />
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Обо мне</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Big statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-8">
              Создаю{' '}
              <span className="text-accent">цифровые</span>{' '}
              продукты
              <br />
              которые работают
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-10">
              Я — Fullstack-разработчик с фокусом на веб-приложениях и Telegram-экосистеме. 
              Моя цель — создавать решения, которые приносят реальную пользу бизнесу: 
              от сайтов и ботов до полной автоматизации процессов.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '1', label: 'Год опыта' },
                { value: '10+', label: 'Проектов' },
                { value: '24/7', label: 'На связи' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="text-center p-4 rounded-2xl border border-dark-border bg-dark-card/30"
                >
                  <div className="text-3xl sm:text-4xl font-black text-accent mb-1">{stat.value}</div>
                  <div className="text-text-secondary text-xs sm:text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Feature cards */}
          <div className="space-y-6">
            {[
              {
                icon: <Zap size={24} />,
                title: 'Быстрая разработка',
                desc: 'Современный стек технологий позволяет мне доставлять проекты в сжатые сроки без потери качества.',
              },
              {
                icon: <Target size={24} />,
                title: 'Фокус на результат',
                desc: 'Каждый проект — это решение конкретной бизнес-задачи. Я разбираюсь в потребностях и предлагаю оптимальное решение.',
              },
              {
                icon: <Rocket size={24} />,
                title: 'Полный цикл',
                desc: 'От идеи до продакшена — разработка, деплой, настройка серверов и поддержка. Всё в одних руках.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                className="group p-6 rounded-2xl border border-dark-border bg-dark-card/50 hover:border-accent/30 transition-all duration-500 hover:bg-dark-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-text-primary font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Marquee line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 overflow-hidden border-t border-b border-dark-border py-6"
        >
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex gap-12 whitespace-nowrap"
          >
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-12 items-center">
                {['WEB APPS', 'TELEGRAM BOTS', 'MINI APPS', 'DEVOPS', 'АВТОМАТИЗАЦИЯ', 'API', 'BACKEND', 'FRONTEND'].map(
                  (text, i) => (
                    <span key={i} className="flex items-center gap-4">
                      <span className="text-2xl sm:text-3xl font-black tracking-tighter text-text-muted">
                        {text}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    </span>
                  )
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
