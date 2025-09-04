import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-purple-500 text-white py-20 sm:py-24 md:py-28 lg:py-32 text-center">
      <div className="container mx-auto px-4 sm:px-5 max-w-6xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          Welcome to Lumen
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 max-w-4xl mx-auto">
          World&apos;s First Data-Driven AI Forecasting Engine
        </p>
        <p className="text-base sm:text-lg max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 opacity-80 leading-relaxed px-2">
          Revolutionizing grid management with probabilistic forecasting, prescriptive recommendations, 
          and hyper-local weather modeling for a renewable-powered future.
        </p>
        <Link 
          href="#features" 
          className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors inline-block"
        >
          Explore Our Solution
        </Link>
      </div>
    </section>
  )
}

export default Hero
