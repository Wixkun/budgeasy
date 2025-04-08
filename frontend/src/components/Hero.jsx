import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6 transition-colors duration-500">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Bienvenue sur <span className="text-blue-600 dark:text-blue-400">Budgeasy</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          L'application intuitive pour gérer votre budget, suivre vos dépenses et atteindre vos objectifs financiers sans stress.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/signup">
            <button className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
              Commencer maintenant
            </button>
          </Link>
          <a href="#features" className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  )
}
