const WordCloud = () => {
  const words = [
    { text: "AI Forecasting", size: "large" },
    { text: "Grid Optimization", size: "medium" },
    { text: "Renewable Integration", size: "small" },
    { text: "Smart Analytics", size: "medium" },
    { text: "Demand Response", size: "small" },
    { text: "Predictive Intelligence", size: "large" },
    { text: "Real-time Monitoring", size: "small" },
    { text: "Energy Efficiency", size: "medium" },
    { text: "Load Balancing", size: "small" },
    { text: "Cost Reduction", size: "small" },
    { text: "Sustainability", size: "medium" },
    { text: "Grid Stability", size: "small" }
  ]

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'text-xl sm:text-2xl md:text-3xl font-bold text-purple-600'
      case 'medium':
        return 'text-base sm:text-lg md:text-xl font-semibold text-purple-500'
      default:
        return 'text-sm sm:text-base md:text-lg font-medium text-purple-400'
    }
  }

  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-5 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800 px-2">
          Powering the Future of Grid Intelligence
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2">
          {words.map((word, index) => (
            <span 
              key={index} 
              className={`${getSizeClasses(word.size)} transition-all duration-300 hover:scale-110 cursor-default text-center`}
            >
              {word.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WordCloud

