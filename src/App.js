import React from 'react';
import LaitusneoHero from './components/LaitusneoHero';
import Navbar from './components/Navbar';
import AboutComponent from './components/About';
import ProductSuite from './components/Products';
import IndustriesWeServe from './components/Industry';
import FinancialServicesLanding from './components/Work';
import LaitusneaLanding from './Choose';
import BusinessBankingLanding from './components/Business';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <LaitusneoHero />
      <AboutComponent/>
      <ProductSuite/>
      <IndustriesWeServe/>
      <FinancialServicesLanding/>
      <LaitusneaLanding/>
      <BusinessBankingLanding/>
      <Footer/>
    </div>
  );
}

export default App;
