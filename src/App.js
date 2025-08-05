import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import CardAcquiring from './components/products/CardAcquiring';
import PayoutSolutions from './components/products/PayoutSolutions';
import APMs from './components/products/APMs';
import OpenBanking from './components/products/OpenBanking';
import PaymentGateway from './components/products/PaymentGateway';

import FraudRisk from './components/boosters/FraudRisk';
import ChargebackResolution from './components/boosters/ChargebackResolution';
import SmartRouting from './components/boosters/SmartRouting';
import GlobalExpansion from './components/boosters/GlobalExpansion';
import Analytics from './components/boosters/Analytics';
import Support from './components/boosters/Support';

import AboutUs from './components/company/AboutUs';
import Blog from './components/company/Blog';

import ReferralProgram from './components/partners/ReferralProgram';
import PartnerWithUs from './components/partners/PartnerWithUs';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <div className="flex-grow pt-[72px]">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/products/card-acquiring" element={<CardAcquiring />} />
            <Route path="/products/payouts" element={<PayoutSolutions />} />
            <Route path="/products/apms" element={<APMs />} />
            <Route path="/products/open-banking" element={<OpenBanking />} />
            <Route path="/products/payment-gateway" element={<PaymentGateway />} />

            <Route path="/boosters/fraud-risk" element={<FraudRisk />} />
            <Route path="/boosters/chargeback" element={<ChargebackResolution />} />
            <Route path="/boosters/smart-routing" element={<SmartRouting />} />
            <Route path="/boosters/global-expansion" element={<GlobalExpansion />} />
            <Route path="/boosters/analytics" element={<Analytics />} />
            <Route path="/boosters/support" element={<Support />} />

            <Route path="/company/about" element={<AboutUs />} />
            <Route path="/company/blog" element={<Blog />} />

            <Route path="/partners/referral" element={<ReferralProgram />} />
            <Route path="/partners/join" element={<PartnerWithUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
