import React from 'react';

const PrivacyPolicy: React.FC = () => { 
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto font-sans bg-[rgba(255,255,255,0.5)] text-gray-900">
      <h1 className="text-3xl font-bold text-amber-600 mb-6">Privacy Policy</h1>

      {/* Introductory Paragraphs */}
      <section className="space-y-6 mb-10">
        <p>
          At Stepwise, your privacy is our priority. We are committed to protecting your personal data and ensuring transparency in how your information is collected, used, and safeguarded.
        </p>
        <p>
          By using the Stepwise platform, you agree to the terms outlined in this Privacy Policy. We encourage you to review this policy regularly to stay informed about how your data is handled.
        </p>
        <p>
          Stepwise collects only the information necessary to help you track goals, manage tasks, and monitor your productivity. We do not sell your data, and we use strict security protocols to keep your information safe.
        </p>
        <p>
          This policy applies to all users of Stepwise, whether you access our services via desktop, mobile, or integrated platforms.
        </p>
      </section>

      {/* Data Usage Details */}
      <section>
        <h2 className="text-2xl font-bold text-amber-600 mb-4">Information We Collect & How It's Used</h2>
        <ul className="list-decimal list-inside space-y-4">
          <li>Full name and email address for account creation and personalized dashboard access.</li>
          <li>Task and goal data entered by you to enable tracking, reminders, and progress visualization.</li>
          <li>Daily completion logs and productivity metrics to generate insights and summaries.</li>
          <li>Device and browser information to ensure compatibility and optimize performance.</li>
          <li>Cookies and usage analytics to improve user experience and feature relevance.</li>
          <li>IP address for session security, fraud prevention, and geolocation-based customization.</li>
          <li>Optional profile details such as avatar, bio, or preferences to enhance personalization.</li>
          <li>Third-party login credentials (e.g., Google or Microsoft) if you choose to sign in via external platforms.</li>
          <li>Marketing preferences to tailor updates, newsletters, and feature announcements.</li>
          <li>Support interactions including feedback, bug reports, and help requests.</li>
          <li>Data retention is limited to what is necessary for functionality and legal compliance.</li>
          <li>We may share limited data with analytics and infrastructure partners to maintain and improve the platform.</li>
          <li>You can request access, correction, or deletion of your personal data at any time.</li>
          <li>Stepwise is not intended for children under 13. Parental consent is required for minors.</li>
          <li>This policy is governed by Indian law and adheres to applicable data protection regulations.</li>
        </ul>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
