import { GraduationCap } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6" />
            <span className="text-lg">Formatura Mauá 2027</span>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-neutral-400">
              Instituto Mauá de Tecnologia
            </p>
            <p className="text-sm text-neutral-500">
              Comissão de Formatura - Turma 2027
            </p>
          </div>

          <div className="border-t border-neutral-800 w-full max-w-md pt-6 mt-6">
            <p className="text-center text-sm text-neutral-500">
              © {currentYear} Formatura Mauá. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
