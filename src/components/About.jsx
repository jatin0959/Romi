import React from 'react';
import { Users, TrendingUp, Shield, Zap } from 'lucide-react';

const AboutComponent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            About Laitusnao Technologies
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Empowering Digital Payments
            <span className="block text-blue-600">for the Future</span>
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              At Laitusnao Technologies Private Limited, we're revolutionizing B2B financial infrastructure by 
              making complex banking operations simple, secure, and scalable.
            </p>
            <p>
              Our cutting-edge APIs and automation solutions empower businesses to focus on growth while we handle the 
              financial complexity with full RBI compliance and bank-grade security.
            </p>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Businesses Served */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Businesses Served</div>
              <div className="text-gray-600">Growing network of satisfied clients</div>
            </div>

            {/* Transactions Processed */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">₹1000Cr+</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Transactions Processed</div>
              <div className="text-gray-600">Secure and reliable processing</div>
            </div>

            {/* Uptime Guarantee */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Uptime Guarantee</div>
              <div className="text-gray-600">Always available when you need us</div>
            </div>

            {/* Support Available */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Support Available</div>
              <div className="text-gray-600">Round-the-clock assistance</div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bank-Grade Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Full RBI compliance with enterprise-level security measures to protect your financial data and transactions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalable Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Our APIs grow with your business, handling everything from startup transactions to enterprise-level volumes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time processing and instant settlements to keep your business operations running smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;