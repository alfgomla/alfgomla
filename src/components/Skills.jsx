import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    title: 'Backend',
    skills: ['Java', 'Python', 'Node.js', 'APIs REST', 'Bases de Datos'],
  },
  {
    title: 'Data Science',
    skills: ['Análisis de Datos', 'Python', 'Visualización', 'Automatización'],
  },
  {
    title: 'Herramientas',
    skills: ['Git', 'GitHub', 'Vite', 'Vercel', 'Figma', 'VS Code'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Competencias</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Habilidades técnicas</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-dark-800 border border-dark-600"
            >
              <h3 className="font-display text-lg font-bold text-white mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-dark-700 text-gray-300 border border-dark-600 hover:border-accent/40 hover:text-accent transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}