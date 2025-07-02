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

// Bank logos as placeholder colored rectangles
const bankLogos = [
  { name: 'Bank 1', color: 'bg-red-500' },
  { name: 'Bank 2', color: 'bg-orange-500' },
  { name: 'Bank 3', color: 'bg-blue-500' },
  { name: 'Bank 4', color: 'bg-purple-500' },
  { name: 'Bank 5', color: 'bg-green-500' },
  { name: 'Bank 6', color: 'bg-indigo-500' },
];

const LaitusneoPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gray-50 px-4 py-20 md:px-10 text-center">
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
      </section>

      {/* Banking Partners Section */}
      <section className="w-full bg-white px-4 py-16 md:px-10">
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
                  className="flex-shrink-0 mx-8 w-24 h-16 rounded-lg shadow-md flex items-center justify-center"
                >
                  <div className={`w-16 h-10 ${bank.color} rounded opacity-80`}></div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {bankLogos.map((bank, idx) => (
                <div
                  key={`second-${idx}`}
                  className="flex-shrink-0 mx-8 w-24 h-16 rounded-lg shadow-md flex items-center justify-center"
                >
                  <div className={`w-16 h-10 ${bank.color} rounded opacity-80`}></div>
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
      `}</style>
    </div>
  );
};

export default LaitusneoPage;