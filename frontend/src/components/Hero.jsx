import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-white text-deep-black dark:bg-deep-black dark:text-white transition-colors duration-300">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold tracking-tight leading-tight">
          Gérez vos <span className="text-metallic">finances</span> intelligemment
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Une application claire, simple et puissante pour suivre votre budget.
        </p>
        <Link to="/signup">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
            Commencer maintenant
          </button>
        </Link>
      </div>
    </section>
  )
}
