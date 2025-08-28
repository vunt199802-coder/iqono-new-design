import React from 'react';

const Cookie = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-[#423ADC] bg-clip-text">
            Cookies Policy
          </h1>
          <div className="prose prose-invert max-w-none text-white">
            <p className="text-xl text-gray-300 mb-8">Last updated: March 1, 2024</p>

            <div className="space-y-12">
              <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-semibold mb-4">1. What are cookies?</h2>
                <p className="text-gray-300">
                  Cookies are small text files placed on your device to store data that can be recalled by a web server in the domain that placed the cookie. We use cookies and similar technologies to operate our services, provide essential functionality, understand usage, and personalize content.
                </p>
              </section>

              <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-semibold mb-4">2. How we use cookies</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Essential cookies for core site functionality</li>
                  <li>Analytics cookies to measure usage and performance</li>
                  <li>Security cookies to help detect fraud and protect your data</li>
                  <li>Preference cookies to remember your settings</li>
                </ul>
              </section>

              <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-semibold mb-4">3. Managing cookies</h2>
                <p className="text-gray-300 mb-4">
                  You can manage cookies through your browser settings. Additionally, we use Cookiebot to present you with a consent banner and allow you to change your preferences at any time.
                </p>
                <p className="text-gray-300">
                  You can open the cookie settings dialog here:
                  {' '}
                  <button
                    type="button"
                    className="text-purple-400 hover:text-purple-300 underline"
                    onClick={() => {
                      if (window && window.Cookiebot && typeof window.Cookiebot.renew === 'function') {
                        window.Cookiebot.renew();
                      } else if (window && window.location) {
                        // Fallback: reload to trigger banner for users without prior consent
                        window.location.reload();
                      }
                    }}
                  >
                    Cookie Settings
                  </button>
                </p>
              </section>

              <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-semibold mb-4">4. Third-party cookies</h2>
                <p className="text-gray-300">
                  Some cookies are set by third parties that provide services on our site, such as analytics or embedded content. These third parties have their own privacy and cookie policies that we encourage you to review.
                </p>
              </section>

              <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-semibold mb-4">5. Contact</h2>
                <p className="text-gray-300">
                  For questions about this Cookies Policy:
                  <br />
                  Email: sales@iqono.com
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

export default Cookie;


