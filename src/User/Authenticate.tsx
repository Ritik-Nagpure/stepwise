import { useState } from 'react';

const AuthPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 transition-all duration-500 ease-in-out  jsut">
                {/* Toggle Slider */}
                <div className='flex justify-center'>
                    <div className="relative mb-8 w-44 h-12 bg-amber-100 rounded-full flex items-center justify-between px-6 shadow-inner">
                        {/* Labels */}
                        <span className={`text-sm font-semibold transition-colors duration-300 ${isLogin ? 'text-amber-600' : 'text-gray-500'}`}>
                            Login
                        </span>
                        <span className={`text-sm font-semibold transition-colors duration-300 ${!isLogin ? 'text-amber-600' : 'text-gray-500'}`}>
                            Signup
                        </span>

                        {/* Slider Knob */}
                        <div
                            className={`mx-1 absolute top-1 left-1 w-16 h-10 bg-amber-600 rounded-full shadow-md transition-all duration-300 ${isLogin ? 'translate-x-0' : 'translate-x-22'}`}
                            onClick={toggleForm}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </div>



                {/* Heading */}
                <h2 className="text-2xl font-bold text-amber-600 mb-6 text-center">
                    {isLogin ? 'Login to Stepwise' : 'Create Your Stepwise Account'}
                </h2>

                {/* Form Fields */}
                <form className="space-y-4 flex flex-col justify-center items-center gap-2">
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-amber-600"
                        />
                    )}
                    {!isLogin && (
                        <input
                            type="Email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-amber-600"
                        />
                    )}
                    <input
                        type="username"
                        placeholder="Username"
                        className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-amber-600"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-amber-600"
                    />

                    <button
                        type="submit"
                        className="w-60 bg-amber-600 text-white py-2 rounded-full hover:bg-amber-700 transition"
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AuthPage;
