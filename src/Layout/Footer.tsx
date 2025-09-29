import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#fdfdfd] text-gray-700 border-2 border-gray-300 py-4 px-6 rounded-xl shadow-xl shadow-gray-500">
      <div className="flex flex-col md:flex-row justify-between items-center text-sm">

        {/* Branding */}
        <div className="mb-2 md:mb-0">
          <span className="font-semibold text-lg text-indigo-600">Stepwise</span> &copy; {new Date().getFullYear()}
        </div>

        {/* Mission Statement */}
        <div className="text-center md:text-left mb-2 md:mb-0">
          Track your goals, plan your day, and monitor progress—one step at a time.
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <Link to="/stepwise/about" className="hover:underline">About</Link>
          <Link to="/stepwise/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link to="/stepwise/terms-of-use" className="hover:underline">Terms of Use</Link>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
