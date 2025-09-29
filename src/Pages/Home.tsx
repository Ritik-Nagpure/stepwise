import banner from '../../public/home_banner.jpg';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[rgba(255,255,255,0.5)] px-0 py-0 w-full">
            {/* Banner Section */}
            <section className="w-full relative mb-4 h-140">
                {/* Banner Image */}
                <img
                    src={banner}
                    alt="Stepwise productivity banner"
                    className="w-full h-full object-cover"
                />

                {/* Banner Text Positioned at Bottom */}
                <div className="absolute bottom-0 left-0 w-full backdrop-blur-xs bg-opacity-90 text-white p-6 md:p-10 flex flex-col justify-center rounded-none">
                    <h1 className="text-3xl font-bold mb-2">Welcome to Stepwise</h1>
                    <p className="text-lg">
                        Your personal productivity companion—track goals, plan your day, and monitor progress with clarity and motivation.
                    </p>
                </div>
            </section>


            {/* Product Description Section */}
            <section className="w-full backdrop-blur-sm p-8 md:p-16 text-gray-800">
                <div className="mb-6 text-center">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        <span className="block text-amber-600 font-semibold text-xl mb-2">✨ Your journey, simplified.</span>
                        Stepwise isn’t just another productivity app—it’s your personal compass in a world full of distractions. Whether you're mapping out long-term ambitions or navigating the chaos of daily tasks, Stepwise brings clarity to your path.
                    </p>
                    <p className="mt-4 text-gray-600 italic">
                        With a beautifully clean interface, intelligent reminders, and progress insights that actually motivate, Stepwise transforms your intentions into meaningful achievements—one step at a time.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    {/* Goal Tracking */}
                    <div className="bg-white bg-opacity-70 rounded-lg p-4 shadow-md hover:shadow-lg transition">
                        <img
                            src="https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg"
                            alt="Goal tracking"
                            className="w-full h-60 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold text-amber-600 mb-2">🎯 Goal Tracking</h3>
                        <p className="text-sm">Set clear goals and visualize your progress with milestones and streaks.</p>
                    </div>

                    {/* Daily Planning */}
                    <div className="bg-white bg-opacity-70 rounded-lg p-4 shadow-md hover:shadow-lg transition">
                        <img
                            src="https://images.pexels.com/photos/4968712/pexels-photo-4968712.jpeg"
                            alt="Daily planning"
                            className="w-full h-60 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold text-amber-600 mb-2">🗓️ Daily Planning</h3>
                        <p className="text-sm">Organize your day with a structured planner that adapts to your workflow.</p>
                    </div>

                    {/* Progress Insights */}
                    <div className="bg-white bg-opacity-70 rounded-lg p-4 shadow-md hover:shadow-lg transition">
                        <img
                            src="https://images.pexels.com/photos/9034987/pexels-photo-9034987.jpeg"
                            alt="Progress insights"
                            className="w-full h-60 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold text-amber-600 mb-2">📊 Progress Insights</h3>
                        <p className="text-sm">Review your accomplishments and stay motivated with daily summaries and analytics.</p>
                    </div>
                </div>
            </section>


            {/* Final Thoughts */}
            <section className="w-full backdrop-blur-xs p-8 md:p-16 text-gray-800">
                <h2 className="text-2xl font-bold text-amber-600 mb-4">Final Thoughts</h2>
                <p className="mb-4">
                    Productivity isn’t just about checking boxes—it’s about aligning your actions with your values. Stepwise helps you focus on what truly matters, one step at a time.
                </p>
                <p className="mb-4">
                    Whether you're building habits, chasing goals, or simply trying to stay afloat in a busy world, Stepwise is here to guide your journey. With every completed task and every moment of reflection, you move closer to a life of intention and clarity.
                </p>
            </section>

            {/* Article: The Philosophy of Progress */}
            <section className="w-full  backdrop-blur-xs p-8 md:p-16 text-gray-800">
                <h2 className="text-2xl font-bold text-amber-600 mb-4">📘 The Philosophy of Progress</h2>
                <p className="mb-4">
                    <strong>Progress is not a race—it’s a rhythm.</strong> In a world obsessed with speed, Stepwise invites you to embrace consistency. The most meaningful growth often happens quietly: in the routines we build, the choices we repeat, and the goals we revisit.
                </p>
                <p className="mb-4">
                    Stepwise encourages a mindset of gentle persistence. It’s not about perfection—it’s about showing up. When you track your goals and reflect on your journey, you begin to see that success is not a destination, but a practice.
                </p>
            </section>

            {/* Article: The Art of Intentional Living */}
            <section className="w-full backdrop-blur-xs p-8 md:p-16 text-gray-800">
                <h2 className="text-2xl font-bold text-amber-600 mb-4">🌿 The Art of Intentional Living</h2>
                <p className="mb-4">
                    <strong>To live intentionally is to live awake.</strong> Most days pass in a blur of obligations and distractions. But what if your day began with clarity? What if your tasks were aligned with your purpose?
                </p>
                <p className="mb-4">
                    Stepwise is more than a productivity tool—it’s a mirror. It reflects your priorities back to you, helping you choose what deserves your energy. Intentional living means asking: “Why am I doing this?” It means saying no to noise and yes to meaning.
                </p>
                <p className="text-sm text-gray-600 italic">
                    Stepwise isn’t just about managing time—it’s about designing a life.
                </p>
            </section>

        </div>
    );
};

export default HomePage;
