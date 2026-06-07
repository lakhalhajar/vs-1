import Hero from '../components/Hero';
import Stats from '../components/Stats';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />

      <section className="container mx-auto py-20">
        <header className="text-center">
          <h1 className="text-4xl md:text-6xl font-display mb-4">Super Construction Company</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Building iconic, luxurious developments across Navi Mumbai and beyond.</p>
        </header>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow rounded">Premium Projects</div>
          <div className="p-6 bg-white shadow rounded">Bespoke Services</div>
          <div className="p-6 bg-white shadow rounded">Sustainable Design</div>
        </div>
      </section>
    </main>
  )
}
