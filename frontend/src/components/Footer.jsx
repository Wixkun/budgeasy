export default function Footer() {
    return (
      <footer className="bg-soft-gray text-deep-black dark:bg-deep-black dark:text-gray-300 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <p className="text-sm">&copy; 2025 BudgEasy. Tous droits réservés.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-metallic dark:hover:text-metallic transition">À propos</a>
            <a href="#" className="hover:text-metallic dark:hover:text-metallic transition">Contact</a>
            <a href="#" className="hover:text-metallic dark:hover:text-metallic transition">Mentions légales</a>
          </div>
        </div>
      </footer>
    );
  }
  