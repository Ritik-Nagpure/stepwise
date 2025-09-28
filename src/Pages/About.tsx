import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] text-gray-900 min-h-screen px-8 py-10">
      {/* Header */}
      <h1 className="text-4xl font-bold text-amber-600 mb-4">About Stepwise</h1>
      <p className="text-lg mb-8">
        In a world overflowing with distractions and endless to-do lists, staying productive can feel like chasing a moving target. That’s where Stepwise steps in—not just as another app, but as a personal productivity companion. Designed with intention, Stepwise helps users break down their ambitions into manageable goals, organize their daily tasks, and maintain a clear view of their progress. Whether you're planning a major project or simply trying to build better habits, Stepwise offers the structure and support to keep you focused.
      </p>
      <p className="text-lg mb-8">
        At the heart of Stepwise is a philosophy of clarity and motivation. The app’s intuitive interface encourages users to set realistic goals, prioritize their day, and reflect on what they’ve accomplished. With features like daily check-ins, progress tracking, and visual summaries, Stepwise transforms productivity from a pressure-filled grind into a rewarding journey. It’s not about doing more—it’s about doing what matters, with purpose and consistency.
      </p>
      <p className="text-lg mb-8">
        Stepwise is more than a tool—it’s a mindset. By helping users align their actions with their aspirations, it fosters a sense of ownership and momentum. Whether you're a student, a professional, or someone simply striving to be more intentional with your time, Stepwise adapts to your rhythm. With every completed task and every tracked milestone, it reminds you that progress isn’t measured in leaps—it’s built step by step.
      </p>
      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-amber-600 mb-4">🌟 What Stepwise Offers</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Goal Tracking:</strong> Set long-term and short-term goals, and visualize your progress over time.</li>
          <li><strong>Daily Planning:</strong> Organize your tasks and todos with a clean, intuitive layout.</li>
          <li><strong>Completion Insights:</strong> Get daily summaries of what you’ve accomplished and what’s pending.</li>
          <li><strong>Smart Sidebar Navigation:</strong> Quickly switch between plans, goals, and settings.</li>
          <li><strong>Dark Mode Support:</strong> Stay focused in any lighting condition.</li>
        </ul>
      </section>

      {/* Motivational Paragraph */}
      <div className="bg-amber-100 border-l-4 border-amber-600 p-4 rounded-md shadow-md mb-12">
        <p className="text-md italic text-gray-800">
          Every goal begins with a single step. Stepwise helps you take that step with intention, clarity, and consistency—
          because progress isn’t just about speed, it’s about direction.
        </p>
      </div>

      {/* Visual Inspiration Section */}
      <section>
        <h2 className="text-2xl font-semibold text-amber-600 mb-4">🖼️ Visual Inspiration</h2>
        <p className="mb-6 text-gray-700">
          These visuals reflect the design philosophy and functionality of Stepwise. They showcase how simplicity and structure
          can empower productivity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              src: 'https://cdn.dribbble.com/userupload/41960034/file/original-fcd0d2f2bfa8c93e36bac5de0b7c6633.png?resize=400x300',
              alt: 'Goal tracking interface',
              caption: 'Minimalist Goal Tracker UI',
            },
            {
              src: 'https://cdn-icons-png.flaticon.com/512/6367/6367748.png',
              alt: 'Daily planner app',
              caption: 'Daily Planner App Layout',
            },
            {
              src: 'https://www.sourcecodester.com/sites/default/files/images/rems/tdle1.jpg',
              alt: 'Todo list productivity',
              caption: 'Todo List Productivity Interface',
            },
          ].map((img, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl bg-white"
            >
              <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" />
              <p className="p-4 text-sm text-gray-700">{img.caption}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
