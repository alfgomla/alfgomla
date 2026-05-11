import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';


// 🔧 REEMPLAZA ESTO con tu endpoint de Formspree
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnjwwqap';




export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-dark-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Contacto</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Trabajemos juntos</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            ¿Tienes un proyecto en mente? Estoy disponible para nuevas oportunidades y colaboraciones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-xl font-bold text-white mb-6">Información de contacto</h3>
            <div className="space-y-5">
              <a href="mailto:alfgomla@hotmail.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-dark-700 border border-dark-600 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
                  <Mail size={18} className="group-hover:text-accent transition-colors" />
                </div>
                <span>alfgomla@hotmail.com</span>
              </a>
              <a href="https://github.com/alfgomla" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-dark-700 border border-dark-600 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
                  <Github size={18} className="group-hover:text-accent transition-colors" />
                </div>
                <span>github.com/alfgomla</span>
              </a>
              <a href="https://linkedin.com/in/alfgomla" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-dark-700 border border-dark-600 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
                  <Linkedin size={18} className="group-hover:text-accent transition-colors" />
                </div>
                <span>linkedin.com/in/alfgomla</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                disabled={status === 'submitting'}
                className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                disabled={status === 'submitting'}
                className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Mensaje"
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                disabled={status === 'submitting'}
                className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none disabled:opacity-50"
              />
            </div>

            {/* Success message */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-emerald-400 text-sm"
              >
                <CheckCircle size={18} />
                ¡Mensaje enviado correctamente! Te responderé pronto.
              </motion.div>
            )}

            {/* Error message */}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm"
              >
                Hubo un error al enviar. Intenta de nuevo o escríbeme directamente por email.
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full px-6 py-3 bg-accent text-dark-900 font-semibold rounded-xl hover:bg-accent-light transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <span className="w-4 h-4 border-2 border-dark-900/30 border-t-dark-900 rounded-full animate-spin" />
                  Enviando...
                </>
              ) : status === 'success' ? (
                <>
                  Enviado <CheckCircle size={18} />
                </>
              ) : (
                <>
                  Enviar mensaje <Send size={18} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}