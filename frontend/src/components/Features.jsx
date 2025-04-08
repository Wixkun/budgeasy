export default function Features() {
    return (
        <section className="bg-deep-black text-gray-100 dark:bg-soft-gray dark:text-deep-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Fonctionnalités</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow-md bg-gray-900 dark:bg-white dark:text-deep-black">
                <h3 className="text-xl font-semibold mb-2">Analyse en temps réel</h3>
                <p>Suivez vos dépenses au jour le jour avec précision et clarté.</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gray-900 dark:bg-white dark:text-deep-black">
                <h3 className="text-xl font-semibold mb-2">Catégorisation intelligente</h3>
                <p>Vos transactions sont automatiquement triées pour une meilleure visibilité.</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gray-900 dark:bg-white dark:text-deep-black">
                <h3 className="text-xl font-semibold mb-2">Objectifs budgétaires</h3>
                <p>Fixez-vous des limites et suivez vos progrès sans effort.</p>
            </div>
            </div>
        </div>
        </section>
    )
  }
  