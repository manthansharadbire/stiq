import React from "react";

const TermsAndConditions = () => {
  return (
    <div className=" h-full bg-gradient-to-br from-black via-[#0D0D0D] to-[#1a1a1a] transition-all duration-700">
    <div className="max-w-5xl mx-auto p-6 text-white ">
      <h1 className="text-4xl text-lime-400 font-bold mb-8 text-center">
        Terms and Conditions
      </h1>

      <p className="text-sm text-white mb-8 text-center"></p>

      <section className="space-y-6">
        <p>
          Welcome to <strong className="text-lime-400">STIQ</strong>! These
          Terms and Conditions ("Terms") govern your use of the STIQ app (the
          "App"), operated by STIQ ("we," "our," or "us"). By
          accessing or using STIQ, you agree to be bound by these Terms. If you
          do not agree with any part of these Terms, please do not use the App.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">1. Use of the App</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
            STIQ is intended for personal habit tracking and goal-setting
              purposes.
            </li>
            <li>
              You must be at least 13 years old to use STIQ. If you are under
              18, you must have parental consent.
            </li>
            <li>
              You agree to use the App in compliance with all applicable laws
              and regulations.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">2. User Accounts</h2>
          <p>
            You may be required to create an account to access certain features.
            You are responsible for maintaining the confidentiality of your
            account credentials. You agree to provide accurate, current, and
            complete information during registration and to update it as needed.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">3. Privacy</h2>
          <p>
            Your privacy is important to us. Please read our{" "}
            <a href="/privacy-policy" className="text-lime-400 ">
              Privacy Policy
            </a>{" "}
            to understand how we collect, use, and safeguard your information.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">4. Content and Data</h2>
          <p>
            You retain ownership of the data you input into STIQ. By using the
            App, you grant us permission to process and store your data to
            provide the service. We may use anonymized, aggregated data for
            research and improvements.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">5. Prohibited Conduct</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Use the App for any unlawful purpose.</li>
            <li>
              Attempt to hack, disrupt, or gain unauthorized access to any part
              of the App.
            </li>
            <li>Post or transmit malicious content or spam.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to the App
            at any time without notice if you violate these Terms or misuse the
            App.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">7. Disclaimers</h2>
          <p>
          STIQ is provided "as is" without warranties of any kind. We do not
            guarantee that the App will be error-free or uninterrupted. We are
            not responsible for any consequences resulting from your use of the
            App.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            8. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, STIQ shall
            not be liable for any indirect, incidental, special, or
            consequential damages arising out of or in connection with your use
            of STIQ.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">9. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. If we make changes, we
            will notify you by updating the date at the top of this page or
            through the App. Continued use of the App after any changes means
            you accept the new Terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact me at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong>manthansharadbire@gmail.com
            <br />
            <strong>Address:</strong> Malda,441805,Bhandara
          </p>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full animate-particles"></div>
        </div>
      </section>

      <style>
        {`
          /* Background particles animation */
          .animate-particles {
            background: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px),
                        radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px);
            background-size: 20px 20px;
            animation: backgroundMove 60s linear infinite;
          }

          @keyframes backgroundMove {
            0% { background-position: 0 0, 0 0; }
            100% { background-position: 1000px 500px, 800px 400px; }
          }
        `}
      </style>
    </div>
    </div>
  );
};

export default TermsAndConditions;
