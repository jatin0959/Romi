import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ProductSuite = () => {
  const products = [
    {
      title: "UPI Collection APIs",
      description: "Seamless UPI payments with real-time settlement and comprehensive dashboard analytics",
      pricing: "Starting from ₹2 per transaction",
      features: [
        "Real-time notifications",
        "Auto-reconciliation", 
        "Multiple payment modes",
        "Instant settlements",
        "QR code generation"
      ],
      popular: false
    },
    {
      title: "Payout APIs",
      description: "Instant and scheduled payouts to bank accounts, UPI IDs, and digital wallets",
      pricing: "Starting from ₹3 per transaction",
      features: [
        "Instant transfers",
        "Bulk payouts",
        "Transaction tracking",
        "Scheduled disbursements",
        "Multi-bank support"
      ],
      popular: true
    },
    {
      title: "Escrow Account Solutions",
      description: "Secure transaction management with automated release mechanisms",
      pricing: "Custom pricing available",
      features: [
        "Multi-party escrow",
        "Conditional releases",
        "Dispute resolution",
        "Smart contracts",
        "Automated settlements"
      ],
      popular: false
    },
    {
      title: "Connected Banking",
      description: "Integrated banking services with our partner banks for seamless operations",
      pricing: "₹500 per month per account",
      features: [
        "Virtual accounts",
        "Account management",
        "Banking APIs",
        "Real-time balance",
        "Transaction history"
      ],
      popular: false
    },
    {
      title: "BNPL Infrastructure",
      description: "Buy Now Pay Later solutions designed specifically for B2B transactions",
      pricing: "Revenue sharing model",
      features: [
        "Credit assessment",
        "Flexible terms",
        "Automated collections",
        "Risk management",
        "Integration ready"
      ],
      popular: false
    },
    {
      title: "Vendor Payment Solutions",
      description: "Streamlined vendor payment processing with automated approval workflows",
      pricing: "₹10 per vendor per month",
      features: [
        "Approval workflows",
        "Vendor onboarding",
        "Payment scheduling",
        "Compliance checks",
        "Reporting dashboard"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Product Suite
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive financial infrastructure solutions designed to power your business growth. From 
            payment collection to disbursements, we've got all your B2B financial needs covered.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 text-center">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Pricing */}
                <div className="mb-6">
                  <span className="text-2xl font-bold text-blue-600">
                    {product.pricing}
                  </span>
                </div>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group-hover:shadow-lg">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Integrate?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Get started with our developer-friendly APIs. Complete documentation, SDKs, and sandbox environment available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                View API Docs
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                Try Sandbox
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSuite;