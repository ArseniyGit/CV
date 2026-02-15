import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const categories = [
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', level: 95 },
      { name: 'Python', level: 85 },
      { name: 'Nest.js', level: 90 },
      { name: 'Telegraf.js', level: 95 },
      { name: 'Prisma', level: 90 },
    ],
  },
  {
    title: 'Базы данных',
    items: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 80 },
      { name: 'SQLite', level: 85 },
    ],
  },
  {
    title: 'DevOps',
    items: [
      { name: 'Docker', level: 85 },
      { name: 'Nginx', level: 90 },
      { name: 'GitHub Actions', level: 80 },
      { name: 'Bash', level: 75 },
    ],
  },
  {
    title: 'API & Интеграции',
    items: [
      { name: 'RESTful API', level: 95 },
      { name: 'Платёжные системы', level: 85 },
      { name: 'AI API', level: 80 },
      { name: 'Уведомления', level: 90 },
    ],
  },
];

export function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stack" className="py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-accent" />
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Технологии
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-20"
        >
          Мой <span className="text-accent">стек</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + ci * 0.1 }}
              className="p-8 rounded-3xl border border-dark-border bg-dark-card/30"
            >
              <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {cat.title}
              </h3>

              <div className="space-y-5">
                {cat.items.map((item, ii) => (
                  <div key={ii}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-text-secondary text-sm font-medium">{item.name}</span>
                      <span className="text-text-muted text-xs font-mono">{item.level}%</span>
                    </div>
                    <div className="h-1.5 bg-dark-light rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${item.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + ci * 0.1 + ii * 0.1,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-gradient-to-r from-accent to-accent-dim rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
