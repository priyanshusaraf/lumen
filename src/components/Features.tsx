const Features = () => {
  const features = [
    {
      icon: "🔮",
      title: "Probabilistic Forecasting",
      description: "Advanced AI algorithms predict renewable energy variability with confidence intervals, enabling better grid planning and reducing forecast errors by >15%."
    },
    {
      icon: "⚡",
      title: "Prescriptive Recommendations",
      description: "Real-time dispatch optimization and load-shifting suggestions that help operators make data-driven decisions and avoid costly DSM penalties."
    },
    {
      icon: "🌦️",
      title: "Hyper-Local Weather Modeling",
      description: "Granular weather predictions at the feeder level enable precise solar and wind generation forecasts, maximizing renewable energy utilization."
    },
    {
      icon: "📊",
      title: "SCADA Integration",
      description: "Seamless integration with existing grid infrastructure provides real-time visibility and enables immediate response to changing grid conditions."
    },
    {
      icon: "☁️",
      title: "Cloud-Native Architecture",
      description: "Scalable, secure cloud deployment ensures rapid rollout across utilities with minimal infrastructure investment."
    },
    {
      icon: "🎯",
      title: "Anomaly Detection",
      description: "Advanced pattern recognition identifies grid anomalies and potential failures before they impact operations, preventing costly outages."
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" id="features">
      <div className="container mx-auto px-4 sm:px-5 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 text-gray-800 px-2">
          Core Capabilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-200 hover:scale-105"
            >
              <div className="text-3xl sm:text-4xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 text-center leading-tight">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

