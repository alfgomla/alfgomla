import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-dark-900 border-t border-dark-600">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Alfonso Gómez. Todos los derechos reservados.
        </p>
        <p className="text-gray-600 text-sm flex items-center gap-1">
          Hecho con <Heart size={14} className="text-accent" /> en Querétaro, México
        </p>
      </div>
    </footer>
  );
}