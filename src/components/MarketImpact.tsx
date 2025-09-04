const MarketImpact = () => {
  const stats = [
    {
      number: "20%+",
      label: "Reduction in DSM Penalties"
    },
    {
      number: "30%",
      label: "Higher Grid Utilization"
    },
    {
      number: "50%",
      label: "Less Renewable Curtailment"
    },
    {
      number: "15%",
      label: "More Renewable Integration"
    }
  ]

  return (
    <section className="bg-gradient-to-r from-purple-600 to-purple-500 py-12 sm:py-16 lg:py-20 text-white" id="impact">
      <div className="container mx-auto px-4 sm:px-5 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 px-2">
          Transforming Grid Economics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 sm:p-6 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white">
                {stat.number}
              </div>
              <div className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed px-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarketImpact

