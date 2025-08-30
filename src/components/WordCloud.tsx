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
        return 'text-2xl md:text-3xl font-bold text-purple-600'
      case 'medium':
        return 'text-lg md:text-xl font-semibold text-purple-500'
      default:
        return 'text-base md:text-lg font-medium text-gray-600'
    }
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-5 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Powering the Future of Grid Intelligence
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {words.map((word, index) => (
            <span 
              key={index} 
              className={`${getSizeClasses(word.size)} transition-all duration-300 hover:scale-110 cursor-default`}
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
