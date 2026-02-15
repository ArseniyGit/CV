import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Bot, Smartphone, Server, ArrowUpRight } from 'lucide-react';

const services = [
  {
    num: '01',
    icon: <Globe size={28} />,
    title: 'Веб-приложения',
    desc: 'Backend и Frontend разработка. Создаю современные веб-приложения с чистой архитектурой, адаптивным дизайном и высокой производительностью.',
    tags: ['React', 'Next.js', 'Node.js', 'Nest.js'],
  },
  {
    num: '02',
    icon: <Bot size={28} />,
    title: 'Telegram-боты',
    desc: 'Разработка Telegram-ботов различной сложности — от простых информационных до сложных бизнес-инструментов с интеграциями и платежами.',
    tags: ['Telegraf.js', 'Python', 'Webhooks', 'Payments'],
  },
  {
    num: '03',
    icon: <Smartphone size={28} />,
    title: 'Telegram Mini Apps',
    desc: 'Полноценные веб-приложения внутри Telegram. Магазины, сервисы, игры — с нативным UX и интеграцией с Telegram API.',
    tags: ['TWA', 'React', 'Telegram API', 'WebApp'],
  },
  {
    num: '04',
    icon: <Server size={28} />,
    title: 'DevOps & Серверы',
    desc: 'Деплой и настройка серверов. VPS, Nginx, Docker, CI/CD через GitHub Actions. Автоматизация инфраструктуры для стабильной работы.',
    tags: ['Docker', 'Nginx', 'CI/CD', 'VPS'],
  },
];

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-32 relative scroll-mt-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-accent" />
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Услуги</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-20"
        >
          Что я <span className="text-accent">делаю</span>
        </motion.h2>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group relative p-8 lg:p-10 rounded-3xl border border-dark-border bg-dark-card/30 hover:border-accent/40 hover:bg-dark-card/80 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-text-muted text-sm font-mono">{service.num}</span>
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-dark transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-text-muted group-hover:text-accent transition-colors duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 transform"
                  />
                </div>

                <h3 className="text-text-primary text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-dark-light border border-dark-border text-text-secondary group-hover:border-accent/20 group-hover:text-accent/80 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
