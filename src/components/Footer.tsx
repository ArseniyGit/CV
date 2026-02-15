import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer className="py-12 border-t border-dark-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-dark font-bold text-sm">
              A
            </div>
            <span className="text-text-secondary text-sm">
              © {new Date().getFullYear()} arseniy.dev — Все права защищены
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            {['Telegram', 'GitHub', 'Email'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-text-muted text-sm hover:text-accent transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <a
            href="#"
            className="group flex items-center gap-2 text-text-muted hover:text-accent transition-colors duration-300"
          >
            <span className="text-sm">Наверх</span>
            <div className="w-8 h-8 rounded-full border border-dark-border flex items-center justify-center group-hover:border-accent transition-colors duration-300">
              <ArrowUp size={14} />
            </div>
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
