import Link from 'next/link'
import DemoForm from './DemoForm'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 sm:py-16" id="contact">
      <div className="container mx-auto px-4 sm:px-5 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-8">
          <div className="footer-section lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">Lumen AI</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Revolutionizing grid management through intelligent forecasting and optimization.
            </p>
          </div>
          <div className="footer-section">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">Solutions</h3>
            <div className="text-gray-300 leading-relaxed space-y-2 text-sm sm:text-base">
              <p>• Grid Forecasting</p>
              <p>• Renewable Integration</p>
              <p>• Demand Optimization</p>
              <p>• Real-time Analytics</p>
            </div>
          </div>
          <div className="footer-section sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">Contact</h3>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
              Ready to transform your grid operations?<br />
              Get in touch for a personalized demo.
            </p>
            <DemoForm 
              triggerText="Schedule Demo"
              className="w-full sm:w-auto bg-purple-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors inline-block text-center"
            />
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            &copy; 2025 Lumen AI. Powering the future of intelligent grids.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
