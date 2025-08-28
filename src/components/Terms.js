import React from 'react';

const Terms = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-[#423ADC] bg-clip-text">
            Terms of Service
          </h1>
          <div className="prose prose-invert max-w-none text-white">
            <p className="text-xl text-gray-300 mb-8">Last updated: March 1, 2024</p>

            <div className="space-y-12">
              <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-300">
                  By accessing or using iQono's payment gateway services, offered through
                  Bermudas Media LTD you agree to be bound by these Terms of Service.
                  These terms govern your use of our payment processing services and
                  related features.
                </p>
              </section>

              <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-semibold mb-4">2. Payment Services</h2>
                <p className="text-gray-300 mb-4">
                  Our payment gateway services include:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Payment processing</li>
                  <li>Fraud prevention</li>
                  <li>Transaction management</li>
                  <li>Payment analytics</li>
                  <li>Multi-currency support</li>
                  <li>Integration APIs</li>
                </ul>
              </section>

              <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-semibold mb-4">3. Service Terms</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">3.1 Merchant Requirements</h3>
                    <p className="text-gray-300 mb-4">Merchants must:</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Provide accurate business information</li>
                      <li>Maintain PCI DSS compliance</li>
                      <li>Follow security best practices</li>
                      <li>Comply with card network rules</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">3.2 Prohibited Activities</h3>
                    <p className="text-gray-300 mb-4">The following are prohibited:</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Processing illegal transactions</li>
                      <li>Fraudulent activities</li>
                      <li>Money laundering</li>
                      <li>Processing for prohibited industries</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-semibold mb-4">4. Fees and Payments</h2>
                <div className="space-y-4 text-gray-300">
                  <p>4.1 Processing fees are charged according to your service agreement.</p>
                  <p>4.2 Settlement times vary by payment method and region.</p>
                  <p>4.3 Chargebacks may incur additional fees.</p>
                </div>
              </section>

              <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-semibold mb-4">5. Security</h2>
                <div className="space-y-4 text-gray-300">
                  <p>5.1 We maintain PCI DSS Level 1 compliance.</p>
                  <p>5.2 Merchants must protect access credentials.</p>
                  <p>5.3 Security breaches must be reported immediately.</p>
                </div>
              </section>

              <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-semibold mb-4">6. Liability</h2>
                <div className="space-y-4 text-gray-300">
                  <p>6.1 We are not liable for merchant's products or services.</p>
                  <p>6.2 Merchants indemnify us against claims from their customers.</p>
                </div>
              </section>

              <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-semibold mb-4">7. Term and Termination</h2>
                <div className="space-y-4 text-gray-300">
                  <p>7.1 Services may be terminated with notice per agreement terms.</p>
                  <p>7.2 We may suspend services for violations of these terms.</p>
                </div>
              </section>

              <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
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

export default Terms;


