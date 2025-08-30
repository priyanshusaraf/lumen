import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16" id="contact">
      <div className="container mx-auto px-5 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="footer-section">
            <h3 className="text-2xl font-bold mb-4 text-white">Lumen AI</h3>
            <p className="text-gray-300 leading-relaxed">
              Revolutionizing grid management through intelligent forecasting and optimization.
            </p>
          </div>
          <div className="footer-section">
            <h3 className="text-2xl font-bold mb-4 text-white">Solutions</h3>
            <div className="text-gray-300 leading-relaxed space-y-1">
              <p>• Grid Forecasting</p>
              <p>• Renewable Integration</p>
              <p>• Demand Optimization</p>
              <p>• Real-time Analytics</p>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="text-2xl font-bold mb-4 text-white">Contact</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Ready to transform your grid operations?<br />
              Get in touch for a personalized demo.
            </p>
            <Link 
              href="#demo" 
              className="bg-purple-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors inline-block"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Lumen AI. Powering the future of intelligent grids.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
