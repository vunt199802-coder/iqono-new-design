import React from 'react';

const Privacy = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-[#423ADC] bg-clip-text">
            Privacy Policy
          </h1>
          <div className="prose prose-invert max-w-none text-white">
            <p className="text-xl text-gray-300 mb-8">Last updated: March 1, 2024</p>

            <div className="space-y-12">
              <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-gray-300">
                  At iQono, we take the privacy and security of your payment data seriously. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you use our payment gateway services.
                </p>
              </section>

              <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">2.1 Transaction Information</h3>
                    <p className="text-gray-300 mb-4">When processing payments through our gateway, we collect:</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Transaction amounts and currencies</li>
                      <li>Payment method details</li>
                      <li>Transaction timestamps</li>
                      <li>Merchant identification information</li>
                      <li>Order details and references</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">2.2 Customer Information</h3>
                    <p className="text-gray-300 mb-4">To process payments, we may collect:</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Name and billing address</li>
                      <li>Email address</li>
                      <li>Payment card information (processed securely)</li>
                      <li>IP address and device information</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
                <p className="text-gray-300 mb-4">We maintain strict security measures including:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>PCI DSS Level 1 compliance</li>
                  <li>End-to-end encryption</li>
                  <li>Tokenization of sensitive data</li>
                  <li>Regular security audits</li>
                  <li>24/7 fraud monitoring</li>
                </ul>
              </section>

              <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-semibold mb-4">4. Data Usage</h2>
                <p className="text-gray-300 mb-4">We use collected information to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Process payment transactions</li>
                  <li>Prevent fraud and unauthorized access</li>
                  <li>Provide transaction analytics to merchants</li>
                  <li>Comply with legal requirements</li>
                  <li>Improve our services</li>
                </ul>
              </section>

              <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-semibold mb-4">5. Data Sharing</h2>
                <p className="text-gray-300 mb-4">We share data only with:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Payment networks and card issuers</li>
                  <li>Banking partners</li>
                  <li>Fraud prevention services</li>
                  <li>Regulatory authorities</li>
                </ul>
              </section>

              <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
                <p className="text-gray-300 mb-4">Under applicable data protection laws, you have the right to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Access your transaction data</li>
                  <li>Request data correction</li>
                  <li>Data portability</li>
                  <li>Lodge complaints with supervisory authorities</li>
                </ul>
              </section>

              <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
                <p className="text-gray-300">
                  For any inquiry:
                  <br />
                  Email: sales@iqono.com
                  <br />
                  Phone: +357 99168745
                  <br />
                  Address: Dimostheni Severi & Katsoni, 2, 1082, Nicosia, Cyprus
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;


