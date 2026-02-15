import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Bot, ShoppingCart, Crosshair, MessageSquare, Shield, CreditCard, BarChart3, Users, Zap, Search, Brain, Clock } from 'lucide-react';

const featuredProjects = [
  {
    id: 1,
    title: 'TrustifyMarket',
    subtitle: 'Маркетплейс игровых товаров',
    description:
      'Полноценный маркетплейс цифровых и игровых товаров, реализованный как Telegram Mini App с веб-версией. Платформа объединяет продавцов и покупателей, обеспечивая безопасные сделки с системой гарантий и арбитража.',
    features: [
      { icon: <ShoppingCart size={16} />, text: 'Каталог товаров с категориями, поиском и фильтрами' },
      { icon: <Shield size={16} />, text: 'Система безопасных сделок с эскроу и защитой покупателя' },
      { icon: <CreditCard size={16} />, text: 'Интегрированная платёжная система и вывод средств' },
      { icon: <Users size={16} />, text: 'Профили продавцов с рейтингом, отзывами и верификацией' },
      { icon: <MessageSquare size={16} />, text: 'Встроенный чат между продавцом и покупателем' },
      { icon: <BarChart3 size={16} />, text: 'Панель аналитики продаж и админ-панель модерации' },
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'Telegram Mini App', 'Prisma', 'TWA API', 'Payments'],
    links: {
      bot: 'https://t.me/TrustifyMarketBOT',
      website: 'https://trustifymarket.com/',
    },
    gradient: 'from-emerald-500/30 via-teal-500/20 to-cyan-500/10',
    accentColor: 'text-emerald-400',
    bannerBg: 'from-emerald-900/40 via-teal-900/30 to-dark-card',
    bannerIcon: <ShoppingCart size={64} className="text-emerald-400/30" />,
    bannerTitle: 'TRUSTIFY',
    bannerSubtitle: 'MARKET',
  },
  {
    id: 2,
    title: 'BloxySpin',
    subtitle: 'Gambling Website',
    description:
      'Полнофункциональная гемблинг-платформа с кастомной механикой игр. Включает систему рулетки, crash-игры, открытие кейсов и батлы. Проект с полным бэкендом, реалтайм-обновлениями и адаптивным интерфейсом.',
    features: [
      { icon: <Crosshair size={16} />, text: 'Рулетка, Crash-игра, открытие кейсов и Case Battles' },
      { icon: <Zap size={16} />, text: 'Реалтайм-обновления через WebSocket (Socket.IO)' },
      { icon: <CreditCard size={16} />, text: 'Система депозитов, вывода средств и внутренней валюты' },
      { icon: <Users size={16} />, text: 'Авторизация через Roblox OAuth, профили и история' },
      { icon: <Shield size={16} />, text: 'Provably Fair алгоритм — проверяемая честность игр' },
      { icon: <BarChart3 size={16} />, text: 'Админ-панель с управлением играми, пользователями и статистикой' },
    ],
    tags: ['React', 'Node.js', 'Express', 'Socket.IO', 'MongoDB', 'Roblox API', 'CSS Modules'],
    links: {
      github: 'https://github.com/ArseniyGit/BloxySpin-Gambling-Website',
    },
    gradient: 'from-purple-500/30 via-violet-500/20 to-fuchsia-500/10',
    accentColor: 'text-purple-400',
    bannerBg: 'from-purple-900/40 via-violet-900/30 to-dark-card',
    bannerIcon: <Crosshair size={64} className="text-purple-400/30" />,
    bannerTitle: 'BLOXY',
    bannerSubtitle: 'SPIN',
  },
  {
    id: 3,
    title: 'Lead Hunter Bot',
    subtitle: 'Telegram-бот охотник за лидами',
    description:
      'Интеллектуальная система автоматизации лидогенерации в Telegram. Бот мониторит сотни чатов в реальном времени, определяет релевантные запросы с помощью NLP/LLM-классификации и ведёт персонализированный диалог для квалификации лидов.',
    features: [
      { icon: <Search size={16} />, text: 'Мониторинг 50–300+ Telegram-чатов в режиме реального времени' },
      { icon: <Brain size={16} />, text: 'Двухслойная классификация: rule-based фильтр + LLM (типы A/B/C/D)' },
      { icon: <MessageSquare size={16} />, text: 'Персонализированные сообщения с цитированием контекста запроса' },
      { icon: <Users size={16} />, text: 'Воронка квалификации: 4 шага → handoff карточка лида менеджеру' },
      { icon: <Shield size={16} />, text: 'Антиспам: лимиты, задержки, blacklist, shadow/manual-approve режимы' },
      { icon: <Clock size={16} />, text: 'Дневные отчёты, метрики (scanned/detected/leads) и команды управления' },
    ],
    tags: ['Python', 'Telethon', 'PostgreSQL', 'OpenAI API', 'NLP', 'Docker', 'Asyncio'],
    links: {},
    gradient: 'from-orange-500/30 via-amber-500/20 to-yellow-500/10',
    accentColor: 'text-orange-400',
    bannerBg: 'from-orange-900/40 via-amber-900/30 to-dark-card',
    bannerIcon: <Bot size={64} className="text-orange-400/30" />,
    bannerTitle: 'LEAD',
    bannerSubtitle: 'HUNTER',
  },
];

export function FeaturedProjects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="featured" className="py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.015] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter"
          >
            Топ-3 <span className="text-accent">проекта</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-base max-w-md"
          >
            Проекты, которыми я горжусь. Каждый из них — это уникальный вызов и полностью рабочий продукт.
          </motion.p>
        </div>

        {/* Projects cards */}
        <div className="space-y-10">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="group rounded-3xl border border-dark-border bg-dark-card/30 hover:border-accent/30 transition-all duration-500 overflow-hidden"
            >
              {/* Banner */}
              <div className={`relative h-48 sm:h-56 lg:h-64 bg-gradient-to-br ${project.bannerBg} overflow-hidden`}>
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                      backgroundSize: '40px 40px',
                    }}
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  {project.bannerIcon}
                </div>
                <div className="absolute top-6 right-6 opacity-30">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                </div>

                {/* Banner text */}
                <div className="absolute bottom-6 left-8 sm:left-10">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-none opacity-60 group-hover:opacity-80 transition-opacity duration-500">
                    <span className="text-white/80">{project.bannerTitle}</span>
                    <span className={`${project.accentColor}`}>{project.bannerSubtitle}</span>
                  </div>
                </div>

                {/* Project number */}
                <div className="absolute top-6 left-8 sm:left-10">
                  <span className="text-white/20 text-7xl sm:text-8xl font-black">
                    {String(project.id).padStart(2, '0')}
                  </span>
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent`} />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left: Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl lg:text-3xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/20">
                        {project.subtitle}
                      </span>
                    </div>

                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                      {project.description}
                    </p>

                    {/* Features grid */}
                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {project.features.map((feature, fi) => (
                        <div
                          key={fi}
                          className="flex items-start gap-3 p-3 rounded-xl bg-dark-light/50 border border-dark-border/50 group-hover:border-dark-border transition-colors duration-300"
                        >
                          <div className={`${project.accentColor} mt-0.5 flex-shrink-0`}>
                            {feature.icon}
                          </div>
                          <span className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className="px-3 py-1.5 text-xs font-medium rounded-full bg-dark-light border border-dark-border text-text-muted group-hover:border-accent/20 group-hover:text-accent/70 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Links */}
                  <div className="flex lg:flex-col gap-3 lg:justify-start lg:pt-2 flex-shrink-0">
                    {project.links.website && (
                      <a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-dark-border bg-dark-light/50 text-text-secondary hover:border-accent hover:text-accent transition-all duration-300 text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        <span>Веб-сайт</span>
                      </a>
                    )}
                    {project.links.bot && (
                      <a
                        href={project.links.bot}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-dark-border bg-dark-light/50 text-text-secondary hover:border-accent hover:text-accent transition-all duration-300 text-sm font-medium"
                      >
                        <Bot size={16} />
                        <span>Telegram Bot</span>
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-dark-border bg-dark-light/50 text-text-secondary hover:border-accent hover:text-accent transition-all duration-300 text-sm font-medium"
                      >
                        <Github size={16} />
                        <span>GitHub</span>
                      </a>
                    )}
                    {Object.keys(project.links).length === 0 && (
                      <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-dark-border/50 bg-dark-light/30 text-text-muted text-sm font-medium">
                        <Shield size={16} />
                        <span>Приватный проект</span>
                      </div>
                    )}
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
