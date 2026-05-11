import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projectsData = [
  {
    title: 'PakalPets',
    description: 'Plataforma completa de servicios para mascotas en Querétaro. Guardería, paseos, estética, adiestramiento, alojamiento, veterinario y cremación. Diseño cálido orientado a la experiencia del usuario.',
    tags: ['React', 'Tailwind CSS', 'Responsive'],
    url: 'https://www.pakalpets.com/',
    gradient: 'from-emerald-900/40 to-teal-900/40',
    accent: 'emerald',
  },
  {
    title: 'Logexa',
    description: 'Sitio corporativo para servicios logísticos y aduanales. Especialistas en importación, exportación y soluciones de comercio internacional. Diseño profesional con identidad corporativa sólida.',
    tags: ['React', 'Diseño Corporativo', 'SEO'],
    url: 'https://www.logexa.com.mx/',
    gradient: 'from-orange-900/40 to-amber-900/40',
    accent: 'orange',
  },
  {
    title: 'Asesoría Sanpé',
    description: 'Sitio moderno para gestoría legal y administrativa en Querétaro. Proceso de 4 pasos claro, diseño minimalista y enfoque en conversión. Más de 5 años de experiencia respaldando empresas y personas.',
    tags: ['React', 'Vercel', 'UI/UX'],
    url: 'https://asesoriasanpe-modern.vercel.app/',
    gradient: 'from-blue-900/40 to-indigo-900/40',
    accent: 'blue',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Portafolio</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Proyectos destacados</h2>
          <p className="text-gray-400 max-w-xl">Algunos de los sitios que he desarrollado y mantengo en producción.</p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8">
          {projectsData.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative block rounded-2xl overflow-hidden border border-dark-600 hover:border-dark-500 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-dark-900/40 group-hover:bg-dark-900/20 transition-colors duration-500" />

              <div className="relative p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="text-gray-500 group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-gray-300 border border-dark-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full border border-dark-500 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                    <ExternalLink className="text-gray-400 group-hover:text-accent transition-colors" size={20} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}