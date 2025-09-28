import React from 'react';

const TermsOfUse: React.FC = () => {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto font-sans bg-[rgba(255,255,255,0.5)] text-gray-900">
      <h1 className="text-3xl font-bold text-amber-600 mb-6">Terms of Use</h1>

      <section className="space-y-6 mb-10">
        <p>
          Welcome to Stepwise, your personal productivity companion. By accessing and using our platform, you agree to comply with the terms outlined below. These terms govern your use of our services, features, and digital tools.
        </p>
        <p>
          Our goal is to provide a secure, focused, and empowering environment for tracking goals, managing tasks, and monitoring progress. These Terms of Use clarify your rights and responsibilities, outline acceptable practices, and protect both you and Stepwise.
        </p>
        <p>
          Please review these terms carefully before creating an account or engaging with our services. Your continued use of the Stepwise platform signifies your acceptance of these terms.
        </p>
        <p>
          Stepwise reserves the right to update or modify these Terms of Use at any time. Changes will take effect immediately upon posting. It is your responsibility to periodically review this page for updates.
        </p>
        <p>
          If you do not agree to any part of these Terms, we recommend discontinuing use of our platform. For questions or concerns, please contact us at <a href="mailto:support@stepwise.app" className="text-blue-600 hover:underline">support@stepwise.app</a>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-amber-600 mb-4">User Responsibilities & Conditions</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>You must be at least 13 years old to create an account. Users under 18 may require parental consent.</li>
          <li>All account information must be accurate and kept up to date.</li>
          <li>You may not use Stepwise for fraudulent, abusive, or unlawful purposes.</li>
          <li>Content on Stepwise, including interface and features, is protected by copyright and may not be reproduced without permission.</li>
          <li>Feature availability and platform updates may change without prior notice.</li>
          <li>Promotional content and announcements are subject to specific terms and expiration dates.</li>
          <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
          <li>Unauthorized access to other accounts is strictly prohibited.</li>
          <li>All user-generated content must comply with community guidelines and legal standards.</li>
          <li>Stepwise is not liable for third-party links or integrations accessed through our platform.</li>
          <li>Platform performance may vary based on browser, device, and internet connection.</li>
          <li>We reserve the right to suspend or terminate accounts violating these terms or engaging in harmful behavior.</li>
          <li>Users may not upload harmful, defamatory, or illegal content.</li>
          <li>Limitation of liability applies for any damages resulting from use of the platform.</li>
          <li>These terms are governed by and interpreted under the laws of India.</li>
        </ul>
      </section>
    </main>
  );
};

export default TermsOfUse;
