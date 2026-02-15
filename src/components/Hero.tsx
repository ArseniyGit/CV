import { motion } from 'framer-motion';
import { ArrowDown, Code2, Bot, Server } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(200,255,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dark-border bg-dark-card/50 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-text-secondary text-sm">Открыт для заказов</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.9] mb-8"
          >
            <span className="text-text-primary">FULLSTACK</span>
            <br />
            <span className="text-accent">DEVELOPER</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-text-secondary text-lg sm:text-xl max-w-2xl mb-12 leading-relaxed"
          >
            Меня зовут <span className="text-text-primary font-semibold">Арсений</span>. 
            Создаю веб-приложения, Telegram-ботов и автоматизацию. 
            Превращаю идеи в работающие digital-продукты.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-accent text-dark font-bold text-base rounded-full hover:bg-accent-dim transition-all duration-300 hover:scale-105 transform inline-flex items-center justify-center gap-2"
            >
              Обсудить проект
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-dark-border text-text-primary font-semibold text-base rounded-full hover:border-accent hover:text-accent transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Мои услуги
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 sm:gap-16 mb-16"
          >
            {[
              { icon: <Code2 size={20} />, label: 'Веб-приложения' },
              { icon: <Bot size={20} />, label: 'Telegram-боты' },
              { icon: <Server size={20} />, label: 'DevOps' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="text-accent">{item.icon}</div>
                <span className="text-text-secondary text-xs sm:text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-text-muted hover:text-accent transition-colors duration-300"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
