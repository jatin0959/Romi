import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      // Handle subscription logic here
      console.log('Subscribing with email:', email);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">Laitusneo</h3>
            <p className="text-sm leading-relaxed mb-6">
              Empowering businesses with next-generation financial infrastructure. 
              Secure, scalable, and simple banking solutions for the digital age.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">letstalk@laitusneo.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm">+91 8265915605</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Nh 2, shanti colony, Etawah, Uttar Pradesh - 206001</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-white transition-colors">UPI Collection</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Payout APIs</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Escrow Solutions</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Connected Banking</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">BNPL Infrastructure</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Developer Guide</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Webhooks</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Status Page</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Compliance</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="text-center mb-12">
          <h3 className="text-white text-xl font-semibold mb-2">Stay Updated</h3>
          <p className="text-gray-400 mb-6">
            Get the latest updates on our products, industry insights, and regulatory changes.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <button
              onClick={handleSubscribe}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              <p>© 2024 Laitusneo Technologies Private Limited. All rights reserved.</p>
              <p className="mt-1">
                <a href="#" className="hover:text-white transition-colors">Regulated Financial infrastructure solutions</a> | 
                <a href="#" className="hover:text-white transition-colors ml-1">RBI Compliant</a>
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;