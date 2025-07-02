import React from 'react';
import { Shield, Users, TrendingUp, Lock, Headphones, Building, Star, CheckCircle } from 'lucide-react';

const LaitusneaLanding = () => {
  const features = [
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: "Regulatory and Infrastructure",
      description: "Fully compliant with IRS guidelines and regulations, ensuring your business operates within legal frameworks with proper infrastructure.",
      items: ["IRS compliant", "Proper audits", "Business licensing", "Infrastructure"]
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Partnered with Leading Banks",
      description: "Strategic partnerships with top-tier banks provide stability, security, and competitive rates to enhance your business financial outlook.",
      items: ["Top tier banks", "Competitive rates", "Stability guarantee", "Security protocols"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Transparent Pricing Dashboard",
      description: "Clear, competitive pricing with real-time dashboard access for complete transaction visibility and control over your financial operations.",
      items: ["Competitive pricing", "Real time dashboard", "Transaction visibility", "Complete control"]
    },
    {
      icon: <Headphones className="w-8 h-8 text-orange-600" />,
      title: "Dedicated Onboarding Support",
      description: "Expert guidance from day one with 24/7 support, ensuring smooth transitions and maximum efficiency at every step of your journey.",
      items: ["Expert guidance", "Smooth transitions", "Remote operations", "Maximum efficiency"]
    },
    {
      icon: <Lock className="w-8 h-8 text-red-600" />,
      title: "Enterprise Grade Security",
      description: "Bank-level security protocols with end-to-end encryption, fraud detection, and multi-layer protection for complete peace of mind.",
      items: ["Bank level security", "End-to-end encryption", "Fraud detection", "Multi-layer protection"]
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: "Scalable Architecture",
      description: "Built to handle millions of transactions with cloud-native infrastructure that grows with your business needs and requirements.",
      items: ["Million transactions", "Cloud-native infrastructure", "Business growth", "High performance"]
    }
  ];

  const testimonials = [
    {
      name: "TechCorp Solutions",
      location: "California",
      rating: 5,
      text: "Outstanding service and payment infrastructure. We reduced processing time by 75% and increased our cash flow significantly.",
      company: "Tech Company"
    },
    {
      name: "RetailMax",
      location: "Texas",
      rating: 5,
      text: "The banking partnerships helped us build trust with customers and vendors. Our transaction volume has grown tremendously.",
      company: "Retail Chain"
    },
    {
      name: "CloudVenture",
      location: "New York",
      rating: 5,
      text: "Exceptional customer experience with over 20% APIs. We saw over 50% reduction in payment delays.",
      company: "Software Company"
    }
  ];

  const stats = [
    { number: "500+", label: "Active Clients", color: "text-blue-600" },
    { number: "£1000Cr+", label: "Processed", color: "text-green-600" },
    { number: "99.9%", label: "Uptime", color: "text-purple-600" },
    { number: "24/7", label: "Support", color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Why Choose Laitusneo
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          The trusted choice for businesses looking to scale their financial operations. Join hundreds of 
          companies that rely on our robust infrastructure for their growth.
        </p>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-3">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`text-5xl font-bold mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful companies using Laitusneo's infrastructure to scale their operations.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaitusneaLanding;