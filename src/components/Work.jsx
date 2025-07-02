import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Users, Headphones, Building, Shield, Rocket, Wrench, FileCheck, Award } from 'lucide-react';

const FinancialServicesLanding = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [activeTab, setActiveTab] = useState('business');

  const processSteps = [
    {
      number: '01',
      title: 'Understand Your Business',
      description: 'We analyze your requirements and design a comprehensive solution using our proven methodology and industry best practices.',
      features: [
        'Custom solution design',
        'Requirements analysis',
        'Comprehensive assessment'
      ],
      companies: '1,240+'
    },
    {
      number: '02', 
      title: 'Setup Banking Infrastructure',
      description: 'Our team configures all systems, servers, and compliance frameworks tailored to your needs and regulatory requirements.',
      features: [
        'API Integration',
        'Security protocols',
        'Compliance framework',
        'Testing environment'
      ],
      companies: '2,560+'
    },
    {
      number: '03',
      title: 'Go Live & Scale Seamlessly',
      description: 'Launch with confidence and grow without limits. Our automated scaling and dedicated support team ensure success.',
      features: [
        'Go-live support',
        'Performance monitoring',
        'Automated scaling',
        'Training'
      ],
      companies: '1,890+'
    }
  ];

  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Rapid Deployment',
      description: 'Get live in 2 weeks with our streamlined implementation process'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical assistance and customer support'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Scalable Architecture',
      description: 'Built to handle millions of transactions with enterprise-grade reliability'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Compliance First',
      description: 'Fully compliant with global financial regulations and security standards'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-green-500">
      {/* Success Stories Section */}
      <div className="relative px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-green-500/90"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              See how businesses across industries have transformed their financial operations with 
              LalBank's tailored solutions, international policies, and advisory services.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                View Case Studies
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
              Download Success Guide
            </button>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative px-6 py-20 bg-gradient-to-br from-blue-800 via-blue-700 to-teal-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get started with LalBank in three simple steps. Our proven process ensures smooth 
              implementation and quick time-to-market for your financial infrastructure needs.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  hoveredStep === index ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/20 hover:border-white/40 transition-all duration-300">
                  {/* Step Number */}
                  <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 mx-auto group-hover:bg-white/30 transition-all duration-300">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-blue-100 text-sm mb-6 leading-relaxed">{step.description}</p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-2 text-sm text-blue-200">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    {/* Companies Count */}
                    <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white">{step.companies}</div>
                      <div className="text-xs text-blue-200">Companies</div>
                    </div>
                  </div>
                </div>
                
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-white/30 transform translate-x-4 translate-y-8"></div>
                )}
              </div>
            ))}
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
                  <div className="flex justify-center mb-4 text-blue-200 group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-blue-200 group-hover:text-blue-100 transition-colors">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our experts to discuss your specific requirements and get a 
              customized solution.
            </p>
            <button className="group px-10 py-4 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
              <span className="flex items-center justify-center gap-2">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialServicesLanding;