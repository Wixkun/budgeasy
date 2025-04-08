export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-200 dark:bg-white dark:text-gray-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <p className="text-sm">&copy; 2025 BudgEasy. Tous droits réservés.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-blue-400 dark:hover:text-blue-600 transition">À propos</a>
            <a href="#" className="hover:text-blue-400 dark:hover:text-blue-600 transition">Contact</a>
            <a href="#" className="hover:text-blue-400 dark:hover:text-blue-600 transition">Mentions légales</a>
          </div>
        </div>
      </footer>
    );
  }
  