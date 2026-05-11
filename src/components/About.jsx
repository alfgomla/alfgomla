import { motion } from 'framer-motion';
import { MapPin, Mail, Languages, Code2 } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const info = [
  { icon: Mail, label: 'Email', value: 'alfgomla@hotmail.com' },
  { icon: MapPin, label: 'Ubicación', value: 'Querétaro, México' },
  { icon: Languages, label: 'Idiomas', value: 'Español, Inglés, Coreano' },
  { icon: Code2, label: 'Especialidad', value: 'Full Stack & Data Science' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Sobre mí</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Perfil profesional</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 leading-relaxed text-lg mb-6">
              Soy un desarrollador Full Stack con sólida experiencia en frontend y backend.
              Domino lenguajes como Java, Python, HTML, CSS y JavaScript, además de frameworks
              modernos para crear aplicaciones escalables y de alto rendimiento.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Mi enfoque combina habilidades técnicas con visión estratégica para entender
              las necesidades de cada proyecto y traducirlas en soluciones prácticas,
              eficientes y visualmente atractivas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {info.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-5 rounded-2xl bg-dark-800 border border-dark-600 hover:border-accent/30 transition-colors duration-300"
              >
                <item.icon className="text-accent mb-3" size={22} />
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-white font-medium">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}