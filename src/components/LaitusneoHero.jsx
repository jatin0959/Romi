import React, { useState } from 'react';
import { Menu, X, CheckCircle } from 'lucide-react';

const features = [
  'Bank-grade Security',
  '99.9% Uptime Guarantee',
  '24/7 Support',
  'Instant Settlement',
];

const stats = [
  { value: '₹1000Cr+', label: 'Processed', color: 'text-blue-600' },
  { value: '500+', label: 'Businesses', color: 'text-green-600' },
  { value: '99.9%', label: 'Uptime', color: 'text-purple-600' },
];

// Bank logos from public folder
const bankLogos = [
  { 
    name: 'Bandhan Bank', 
    logo: '/logos/bandhan-bank.png',
  },
  { 
    name: 'Bank of Baroda', 
    logo: '/logos/bank-of-baroda.png',
  },
  { 
    name: 'Fino Payments Bank', 
    logo: '/logos/fino-payments-bank.png',
  },
  { 
    name: 'IDFC First Bank', 
    logo: '/logos/idfc-first-bank.png',
  },
  { 
    name: 'ICICI Bank', 
    logo: '/logos/icici-bank.png',
  },

];

const LaitusneoPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating Bokeh Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="bokeh-circle bokeh-1"></div>
        <div className="bokeh-circle bokeh-2"></div>
      </div>

      {/* Hero Section */}
      <section className="w-full bg-gray-50 px-4 py-20 md:px-10 text-center relative z-10 overflow-hidden">
        {/* Hero Glowing Lights */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="glow-light glow-1"></div>
          <div className="glow-light glow-2"></div>
        </div>
        
        <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Simplify Your Business <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
            Payments with Laitusneo
          </span>
        </h1>
        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
          Transform your financial operations with our comprehensive B2B banking infrastructure.
          Escrow, Payouts, UPI Collection & Connected Banking – all in one secure platform.
        </p>

        {/* Feature Pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-white shadow-sm border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700"
            >
              <CheckCircle className="w-4 h-4 text-green-500" />
              {item}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold shadow-md transition-colors duration-200 flex items-center gap-2">
            Get Started Today →
          </button>
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-semibold shadow-sm transition-colors duration-200">
            Book a Demo
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 mb-6">Trusted by 500+ businesses across India</p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <p className={`text-2xl md:text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Banking Partners Section */}
      <section className="w-full bg-white px-4 py-16 md:px-10 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Trusted Banking Partners
          </h2>
          <p className="text-gray-600 mb-12">
            Connected with India's leading banks for seamless transactions
          </p>
          
          {/* Moving Logos Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {bankLogos.map((bank, idx) => (
                <div
                  key={`first-${idx}`}
                  className="flex-shrink-0 mx-8 w-32 h-20 bg-white rounded-lg shadow-md flex items-center justify-center p-4 border border-gray-100"
                >
                  <img 
                    src={bank.logo} 
                    alt={`${bank.name} logo`}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                    onError={(e) => {
                      // Fallback to text if image fails
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-500 to-green-500 rounded items-center justify-center text-white font-bold text-xs">
                    {bank.name.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {bankLogos.map((bank, idx) => (
                <div
                  key={`second-${idx}`}
                  className="flex-shrink-0 mx-8 w-32 h-20 bg-white rounded-lg shadow-md flex items-center justify-center p-4 border border-gray-100"
                >
                  <img 
                    src={bank.logo} 
                    alt={`${bank.name} logo`}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                    onError={(e) => {
                      // Fallback to text if image fails
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-500 to-green-500 rounded items-center justify-center text-white font-bold text-xs">
                    {bank.name.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
          }
          75% {
            transform: translateY(-15px) translateX(8px);
          }
        }
        
        @keyframes floatAlt {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(15px) translateX(-8px);
          }
          50% {
            transform: translateY(25px) translateX(12px);
          }
          75% {
            transform: translateY(5px) translateX(-3px);
          }
        }
        
        .bokeh-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1));
          backdrop-filter: blur(1px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .bokeh-1 {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 15%;
          animation: float 8s ease-in-out infinite;
        }
        
        .bokeh-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 10%;
          animation: floatAlt 12s ease-in-out infinite;
        }
        
        @keyframes glowFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-15px) translateX(8px) scale(1.1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-8px) translateX(-3px) scale(0.9);
            opacity: 0.3;
          }
          75% {
            transform: translateY(-12px) translateX(5px) scale(1.05);
            opacity: 0.5;
          }
        }
        
        @keyframes glowFloatAlt {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translateY(12px) translateX(-6px) scale(1.15);
            opacity: 0.5;
          }
          50% {
            transform: translateY(18px) translateX(10px) scale(0.85);
            opacity: 0.4;
          }
          75% {
            transform: translateY(6px) translateX(-2px) scale(1.1);
            opacity: 0.6;
          }
        }
        
        .glow-light {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(16, 185, 129, 0.2) 30%, rgba(147, 51, 234, 0.1) 60%, transparent 100%);
          filter: blur(2px);
          box-shadow: 
            0 0 20px rgba(59, 130, 246, 0.3),
            0 0 40px rgba(16, 185, 129, 0.2),
            0 0 60px rgba(147, 51, 234, 0.1);
        }
        
        .glow-1 {
          width: 180px;
          height: 180px;
          top: 15%;
          left: 20%;
          animation: glowFloat 10s ease-in-out infinite;
        }
        
        .glow-2 {
          width: 120px;
          height: 120px;
          top: 70%;
          right: 15%;
          animation: glowFloatAlt 14s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LaitusneoPage;