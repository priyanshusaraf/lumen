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
    <section className="bg-gradient-to-r from-purple-600 to-purple-500 py-20 text-white" id="impact">
      <div className="container mx-auto px-5 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Transforming Grid Economics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-4 text-white">
                {stat.number}
              </div>
              <div className="text-lg md:text-xl opacity-90 leading-relaxed">
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
