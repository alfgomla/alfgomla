import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const studies = [
  {
    period: '2023 – 2025',
    school: 'Universidad en Movimiento',
    degree: 'Lic. en Ingeniería en Sistemas Computacionales',
    details: 'Diseño, implementación y monitoreo de sistemas de alto nivel. Diplomados en Seguridad Informática, Administración de Proyectos Tecnológicos y Transformación Digital.',
  },
  {
    period: '2015 – 2019',
    school: 'Universidad Pedagógica Nacional',
    degree: 'Licenciado en Educación',
    details: 'Planificación de estrategias pedagógicas, innovación en métodos de aprendizaje y aprovechamiento de las Tecnologías de la Información para facilitar la educación.',
  },
  {
    period: '1989 – 1993',
    school: 'Instituto Tecnológico de Pachuca',
    degree: 'Ingeniero en Sistemas Computacionales',
    details: 'Diseño, desarrollo e implementación de soluciones tecnológicas. Especialidad en automatización, seguridad informática y optimización de procesos.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Formación</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Educación</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {studies.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-dark-700 border border-dark-600 hover:border-accent/30 transition-colors duration-300 group"
            >
              <GraduationCap className="text-accent mb-4 group-hover:scale-110 transition-transform" size={28} />
              <span className="text-accent text-sm font-medium">{edu.period}</span>
              <h3 className="font-display text-lg font-bold text-white mt-2 mb-1">{edu.degree}</h3>
              <p className="text-gray-500 text-sm mb-4">{edu.school}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}