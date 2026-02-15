import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, ArrowUpRight } from 'lucide-react';

function TelegramIcon() {
  return (
    <svg viewBox="0 0 240 240" className="w-[22px] h-[22px]" aria-hidden="true">
      <circle cx="120" cy="120" r="120" fill="#24A1DE" />
      <path
        fill="#FFFFFF"
        d="M51.2 118.6c36.8-16 61.3-26.5 73.6-31.5 35-14.5 42.3-17 47.1-17.1 1.1 0 3.5.3 5.1 1.6 1.3 1.1 1.7 2.5 1.9 3.5.2 1 .4 3.3.2 5.1-2.2 25.4-12.9 87-18.4 115.5-2.3 12-6.9 16-11.3 16.4-9.6.9-16.8-6.3-26-12.3-14.4-9.5-22.5-15.4-36.5-24.7-16.2-10.6-5.7-16.4 3.5-26 2.4-2.5 44.2-40.5 45-43.9.1-.4.2-1.9-.7-2.7-.9-.8-2.2-.5-3.1-.3-1.3.3-22.6 14.4-63.9 42.2-6 4.1-11.4 6-16.2 5.9-5.3-.1-15.4-3-22.9-5.4-9.2-3-16.5-4.6-15.8-9.7.4-2.7 4-5.4 10.8-8.1Z"
      />
    </svg>
  );
}

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 relative scroll-mt-24" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-t from-accent/[0.02] to-transparent" />

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
            Контакты
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-6"
        >
          Давайте <span className="text-accent">работать</span>
          <br />
          вместе
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-secondary text-lg max-w-xl mb-16"
        >
          Есть идея или задача? Напишите мне, и мы обсудим, как я могу помочь 
          воплотить ваш проект в жизнь.
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-text-secondary text-sm font-medium mb-2">Имя</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Ваше имя"
                  className="w-full px-5 py-4 rounded-xl bg-dark-card border border-dark-border text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors duration-300 text-sm"
                />
              </div>
              <div>
                <label className="block text-text-secondary text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="email@example.com"
                  className="w-full px-5 py-4 rounded-xl bg-dark-card border border-dark-border text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors duration-300 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-text-secondary text-sm font-medium mb-2">Сообщение</label>
              <textarea
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Расскажите о вашем проекте..."
                className="w-full px-5 py-4 rounded-xl bg-dark-card border border-dark-border text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors duration-300 resize-none text-sm"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-dark font-bold text-base rounded-full hover:bg-accent-dim transition-all duration-300 hover:scale-105 transform"
            >
              {submitted ? 'Отправлено! ✓' : (
                <>
                  Отправить сообщение
                  <Send size={18} />
                </>
              )}
            </button>
          </motion.form>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href="https://t.me/ArseniyMaslow"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl border border-dark-border bg-dark-card/30 hover:border-accent/40 hover:bg-dark-card/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                <TelegramIcon />
              </div>
              <div className="flex-1">
                <span className="block text-text-primary font-semibold text-sm">Telegram</span>
                <span className="text-text-muted text-xs">@ArseniyMaslow</span>
              </div>
              <ArrowUpRight size={16} className="text-text-muted group-hover:text-accent transition-colors duration-300" />
            </a>

            <a
              href="mailto:arseniy.maslov.08@mail.ru"
              className="group flex items-center gap-4 p-5 rounded-2xl border border-dark-border bg-dark-card/30 hover:border-accent/40 hover:bg-dark-card/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <Mail size={22} />
              </div>
              <div className="flex-1">
                <span className="block text-text-primary font-semibold text-sm">Email</span>
                <span className="text-text-muted text-xs">arseniy.maslov.08@mail.ru</span>
              </div>
              <ArrowUpRight size={16} className="text-text-muted group-hover:text-accent transition-colors duration-300" />
            </a>

            {/* Availability card */}
            <div className="p-6 rounded-2xl border border-accent/20 bg-accent/5 mt-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-text-primary font-semibold text-sm">Доступен для работы</span>
              </div>
              <p className="text-text-secondary text-xs leading-relaxed">
                Сейчас я открыт для новых проектов и заказов. Среднее время ответа — 2 часа.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
