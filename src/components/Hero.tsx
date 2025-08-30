import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-purple-500 text-white py-32 text-center">
      <div className="container mx-auto px-5 max-w-6xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Lumen</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          World's First Data-Driven AI Forecasting Engine
        </p>
        <p className="text-lg max-w-3xl mx-auto mb-8 opacity-80 leading-relaxed">
          Revolutionizing grid management with probabilistic forecasting, prescriptive recommendations, 
          and hyper-local weather modeling for a renewable-powered future.
        </p>
        <Link 
          href="#features" 
          className="bg-white text-purple-600 px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
        >
          Explore Our Solution
        </Link>
      </div>
    </section>
  )
}

export default Hero
