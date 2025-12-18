import { Button } from './ui/button';
import logo from 'figma:asset/ee0d936d010e937bbab551ee5bcd470fadc95893.png';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src={logo} alt="TrendIT" className="h-8" />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#soluciones" className="text-gray-600 hover:text-gray-900 transition-colors">
              Soluciones
            </a>
            <a href="#nosotros" className="text-gray-600 hover:text-gray-900 transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contacto
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Iniciar sesión
            </Button>
            <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
              Comenzar
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
