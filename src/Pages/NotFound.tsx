import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="bg-[#dddddd] min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Animated 404 */}
      <h1 className="text-6xl font-extrabold text-amber-600 mb-4 animate-bounce">
        404
      </h1>

      {/* Optional: Add pulsing glow effect */}
      <style>
        {`
          .glow {
            animation: glowPulse 2s infinite;
          }

          @keyframes glowPulse {
            0% { text-shadow: 0 0 5px #f59e0b, 0 0 10px #f59e0b; }
            50% { text-shadow: 0 0 20px #f59e0b, 0 0 30px #f59e0b; }
            100% { text-shadow: 0 0 5px #f59e0b, 0 0 10px #f59e0b; }
          }
        `}
      </style>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2 glow">
        Page Not Found
      </h2>
      <p className="text-gray-700 mb-6">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/stepwise/"
        className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
