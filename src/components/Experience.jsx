import { motion } from 'framer-motion';

const jobs = [
  {
    period: 'Mar 2016 – Presente',
    company: 'CreativeM',
    role: 'Front End Developer',
    description: 'Desarrollo de interfaces visuales e interactivas. Traducción de diseños en experiencias de usuario funcionales y atractivas, combinando habilidades técnicas y creativas.',
  },
  {
    period: 'Abr 2014 – Mar 2016',
    company: 'WebNote',
    role: 'Web Developer',
    description: 'Creación y mantenimiento de sitios y aplicaciones web. Trabajo en frontend y backend, gestionando lógica de servidor, bases de datos y arquitectura completa.',
  },
  {
    period: 'Abr 2013 – Feb 2014',
    company: 'WEBM',
    role: 'Back-End Developer',
    description: 'Diseño y construcción de la lógica del servidor, bases de datos e infraestructura. Arquitectura de sistemas eficientes, seguros y escalables.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Trayectoria</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Experiencia laboral</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-dark-600 md:-translate-x-px" />

          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 top-2 w-3 h-3 rounded-full bg-accent border-4 border-dark-900 md:-translate-x-1.5" />

              <div className="md:w-1/2 pl-8 md:pl-0 md:px-12">
                <span className="text-accent text-sm font-medium">{job.period}</span>
              </div>
              <div className="md:w-1/2 pl-8 md:pl-0 md:px-12">
                <h3 className="font-display text-xl font-bold text-white mb-1">{job.role}</h3>
                <p className="text-gray-500 text-sm mb-3">{job.company}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{job.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}