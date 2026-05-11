import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800/30 via-dark-900 to-dark-900 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="shrink-0"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent/40 to-accent-light/20 blur-md" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-dark-600">
                <img
                  src="./profile.png"
                  alt="Alfonso Gómez"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Status dot */}
              <div className="absolute bottom-4 right-4 w-5 h-5 rounded-full bg-emerald-500 border-4 border-dark-900" title="Disponible para proyectos" />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center md:text-left flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
                Full Stack Developer & Data Science
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Alfonso
              <br />
              <span className="gradient-text">Gómez</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed"
            >
              Desarrollador apasionado por crear soluciones digitales innovadoras.
              Especialista en transformar ideas en realidades funcionales.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-accent text-dark-900 font-semibold rounded-full hover:bg-accent-light transition-colors duration-200"
              >
                Ver proyectos
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-dark-500 text-gray-300 rounded-full hover:border-accent hover:text-white transition-colors duration-200"
              >
                Contactar
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center md:justify-start gap-6"
            >
              <a href="https://github.com/alfgomla" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <Github size={22} />
              </a>
              <a href="https://linkedin.com/in/alfgomla" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="mailto:alfgomla@hotmail.com" className="text-gray-500 hover:text-white transition-colors">
                <Mail size={22} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-gray-600" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}