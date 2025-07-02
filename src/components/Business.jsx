import { Phone, Mail, ArrowRight, Check } from 'lucide-react';

export default function BusinessBankingLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Digitize Your Business Banking?
          </h1>
          <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            Join hundreds of businesses already transforming their financial operations with Laituseneo. Get 
            started today with our expert consultation and customized solution design.
          </p>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
              <span className="text-left">Free consultation & requirement analysis</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
              <span className="text-left">Custom solution design for your business</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
              <span className="text-left">Dedicated implementation support</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
              <span className="text-left">30-day money-back guarantee</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
              <span className="text-left">No setup fees for first 1000 transactions</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 min-w-[200px] justify-center">
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 min-w-[200px]">
              Learn More
            </button>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 border border-white/20">
            <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-white/80 mb-4">Speak with our experts</p>
            <p className="text-lg font-semibold">+91 9876543210</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 border border-white/20">
            <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-white/80 mb-4">Get detailed information</p>
            <p className="text-lg font-semibold">info@laituseneo.com</p>
          </div>
        </div>

        {/* Why Act Now Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
          <h2 className="text-2xl font-bold text-center mb-8">Why Act Now?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">5-7 Days</div>
              <p className="text-white/80">Quick implementation</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">₹0</div>
              <p className="text-white/80">Setup fees waived</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <p className="text-white/80">Support included</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}