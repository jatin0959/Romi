import React from 'react';
import { 
  ShoppingBag, 
  Monitor, 
  ShoppingCart, 
  GraduationCap, 
  CreditCard, 
  Package,
  Plane,
  Zap
} from 'lucide-react';

const IndustriesWeServe = () => {
  const industries = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-emerald-500" />,
      title: "Retail",
      description: "Point-of-sale integration, inventory financing, and supplier payments",
      useCases: ["Supplier payments", "Inventory financing", "Customer refunds"]
    },
    {
      icon: <Monitor className="w-8 h-8 text-gray-600" />,
      title: "SaaS",
      description: "Subscription billing, global payouts, and revenue optimization",
      useCases: ["Subscription billing", "Global payouts", "Revenue sharing"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-blue-500" />,
      title: "Marketplaces",
      description: "Escrow services, seller payouts, and transaction management",
      useCases: ["Escrow services", "Seller payouts", "Transaction splits"]
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      title: "EdTech",
      description: "Fee collection, instructor payouts, and student refunds",
      useCases: ["Fee collection", "Instructor payouts", "Refund processing"]
    },
    {
      icon: <CreditCard className="w-8 h-8 text-yellow-500" />,
      title: "Fintech",
      description: "White-label solutions, compliance support, and API integration",
      useCases: ["White-label APIs", "Compliance tools", "Risk management"]
    },
    {
      icon: <Package className="w-8 h-8 text-orange-500" />,
      title: "D2C",
      description: "Payment processing, COD management, and customer analytics",
      useCases: ["Payment processing", "COD management", "Customer insights"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-indigo-500" />,
      title: "eCommerce",
      description: "Multi-channel payments, inventory financing, and order management",
      useCases: ["Multi-channel payments", "Inventory loans", "Order management"]
    },
    {
      icon: <Plane className="w-8 h-8 text-cyan-500" />,
      title: "Travel",
      description: "Booking payments, cancellation processing, and vendor settlements",
      useCases: ["Booking payments", "Cancellations", "Vendor settlements"]
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Utilities",
      description: "Bill payments, service deposits, and automated collections",
      useCases: ["Bill payments", "Service deposits", "Automated collections"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Industries We Serve
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our flexible platform adapts to diverse business models across industries. From startups to 
          enterprises, we provide tailored financial infrastructure solutions.
        </p>
      </div>

      {/* Industries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
          >
            {/* Icon and Title */}
            <div className="flex items-center mb-4">
              <div className="mr-4">
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {industry.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {industry.description}
            </p>

            {/* Key Use Cases */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">
                Key Use Cases:
              </h4>
              <ul className="space-y-2">
                {industry.useCases.map((useCase, caseIndex) => (
                  <li 
                    key={caseIndex}
                    className="flex items-center text-sm text-blue-600"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeServe;