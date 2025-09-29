import React from 'react';

const UserPage: React.FC = () => {
  const user = {
    name: 'Aarav Mehta',
    email: 'aarav.mehta@example.com',
    joined: 'March 2024',
    goalsCompleted: 42,
    currentStreak: 7,
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-[rgba(214,214,214,0.9)] rounded-xl shadow-xl p-8">
        {/* Header */}
        <h2 className="text-2xl font-bold text-amber-600 mb-4 text-center">User Profile</h2>

        {/* User Info */}
        <div className="space-y-4 text-gray-800">
          <div>
            <label className="block text-sm font-semibold">Name</label>
            <p className="bg-amber-50 px-4 py-2 rounded-full">{user.name}</p>
          </div>
          <div>
            <label className="block text-sm font-semibold">Email</label>
            <p className="bg-amber-50 px-4 py-2 rounded-full">{user.email}</p>
          </div>
          <div>
            <label className="block text-sm font-semibold">Member Since</label>
            <p className="bg-amber-50 px-4 py-2 rounded-full">{user.joined}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-center">
          <div className="bg-amber-100 rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-600">Goals Completed</p>
            <p className="text-xl font-bold text-amber-600">{user.goalsCompleted}</p>
          </div>
          <div className="bg-amber-100 rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-600">Current Streak</p>
            <p className="text-xl font-bold text-amber-600">{user.currentStreak} days</p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex justify-between">
          <button className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition">
            Edit Profile
          </button>
          <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400 transition">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
