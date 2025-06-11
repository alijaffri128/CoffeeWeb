import { useState, useEffect } from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const LoginForm = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleForm = () => {
    setIsActive(!isActive);
  };

  return (
    <section id="contactus" className="px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold uppercase">Our Contact Us</h2>
      </div>
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-50 bg-gray-70 p-2 md:p-4">
      <div className="relative w-full max-w-[400px] md:max-w-[850px] min-h-screen md:min-h-[550px] md:h-[550px] bg-white rounded-[30px] shadow-lg overflow-hidden flex flex-col md:block">
        {/* MOBILE VIEW: Toggle Panel on Top, Form Below */}
        {isMobile && (
          <div className="w-full flex flex-col items-center bg-[#BC9667] rounded-t-[30px] py-8 px-4 text-white transition-all duration-500">
            {isActive ? (
              <>
                <h1 className="text-3xl font-bold mb-2 text-center">Welcome Back!</h1>
                <p className="mb-4 text-center">Already have an account?</p>
                <button
                  onClick={toggleForm}
                  className="w-32 h-10 bg-white text-[#BC9667] font-semibold rounded-lg border-2 border-white hover:bg-[#f5f5f5] hover:text-[#9c7d56] transition-all duration-300 mb-2"
                >
                  Login
                </button>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-2 text-center">Hello, Welcome!</h1>
                <p className="mb-4 text-center">Don't have an account?</p>
                <button
                  onClick={toggleForm}
                  className="w-32 h-10 bg-white text-[#BC9667] font-semibold rounded-lg border-2 border-white hover:bg-[#f5f5f5] hover:text-[#9c7d56] transition-all duration-300 mb-2"
                >
                  Register
                </button>
              </>
            )}
          </div>
        )}

        {/* MOBILE VIEW: Only one form visible at a time, with animation */}
        {isMobile && (
          <div className="w-full flex-1 flex items-center justify-center bg-white text-gray-800 text-center p-4 transition-all duration-500 relative overflow-hidden min-h-0" style={{minHeight: 'calc(100vh - 200px)'}}>
            {/* Login Form Animation */}
            <div
              className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out
                ${!isActive ? 'opacity-100 translate-x-0 scale-100 z-10' : 'opacity-0 -translate-x-full scale-95 z-0'}
              `}
            >
              <form className="w-full">
                <h1 className="text-2xl font-semibold mb-5">Login</h1>
                <div className="relative my-4">
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    className="w-full py-3 px-4 pr-12 bg-gray-100 rounded-lg border-none outline-none text-base text-gray-800 font-medium"
                  />
                  <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-600" />
                </div>
                <div className="relative my-4">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    className="w-full py-3 px-4 pr-12 bg-gray-100 rounded-lg border-none outline-none text-base text-gray-800 font-medium"
                  />
                  <FaLock className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-600" />
                </div>
                <div className="mb-2">
                  <a href="#" className="text-sm text-gray-800 hover:text-[#9c7d56]">Forgot Password?</a>
                </div>
                <button type="submit" className="w-full h-12 bg-[#BC9667] rounded-lg shadow-md border-none cursor-pointer text-base text-white font-semibold hover:bg-[#9c7d56] transition-colors mb-2">
                  Login
                </button>
                <p className="my-2 text-sm">or login with social platforms</p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="p-2 border-2 border-gray-300 rounded-lg text-xl text-gray-800 hover:border-[#BC9667] hover:text-[#9c7d56] transition-colors">
                    <FcGoogle />
                  </a>
                  <a href="#" className="p-2 border-2 border-gray-300 rounded-lg text-xl text-gray-800 hover:border-[#BC9667] hover:text-[#9c7d56] transition-colors">
                    <FaFacebook className="text-[#BC9667]" />
                  </a>
                  <a href="#" className="p-2 border-2 border-gray-300 rounded-lg text-xl text-gray-800 hover:border-[#BC9667] hover:text-[#9c7d56] transition-colors">
                    <FaGithub />
                  </a>
                  <a href="#" className="p-2 border-2 border-gray-300 rounded-lg text-xl text-gray-800 hover:border-[#BC9667] hover:text-[#9c7d56] transition-colors">
                    <FaLinkedin className="text-[#BC9667]" />
                  </a>
                </div>
              </form>
            </div>
            {/* Register Form Animation */}
            <div
              className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out
                ${isActive ? 'opacity-100 translate-x-0 scale-100 z-10' : 'opacity-0 translate-x-full scale-95 z-0'}
              `}
            >
              <form className="w-full">
                <h1 className="text-2xl font-semibold mb-5">Registration</h1>
                <div className="relative my-4">
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    className="w-full py-3 px-4 pr-12 bg-gray-100 rounded-lg border-none outline-none text-base text-gray-800 font-medium"
                  />
                  <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-600" />
                </div>
                <div className="relative my-4">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full py-3 px-4 pr-12 bg-gray-100 rounded-lg border-none outline-none text-base text-gray-800 font-medium"
                  />
                  <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-600" />
                </div>
                <div className="relative my-4">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    className="w-full py-3 px-4 pr-12 bg-gray-100 rounded-lg border-none outline-none text-base text-gray-800 font-medium"
                  />
                  <FaLock className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-600" />
                </div>
                <button type="submit" className="w-full h-12 bg-[#BC9667] rounded-lg shadow-md border-none cursor-pointer text-base text-white font-semibold hover:bg-[#9c7d56] transition-colors mb-2">
                  Register
                </button>
                <p className="my-2 text-sm">or register with social platforms</p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="p-2 border-2 border-gray-300 rounded-lg text-xl text-gray-800 hover:border-[#BC9667] hover:text-[#9c7d56] transition-colors">
                    <FcGoogle />
                  </a>
                  <a href="#" className="p-2 border-2 border-gray-300 rounded-lg text-xl text-gray-800 hover:border-[#BC9667] hover:text-[#9c7d56] transition-colors">
                    <FaFacebook className="text-[#BC9667]" />
                  </a>
                  <a href="#" className="p-2 border-2 border-gray-300 rounded-lg text-xl text-gray-800 hover:border-[#BC9667] hover:text-[#9c7d56] transition-colors">
                    <FaGithub />
                  </a>
                  <a href="#" className="p-2 border-2 border-gray-300 rounded-lg text-xl text-gray-800 hover:border-[#BC9667] hover:text-[#9c7d56] transition-colors">
                    <FaLinkedin className="text-[#BC9667]" />
                  </a>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* DESKTOP VIEW: Sliding Forms and Toggle Panels */}
        {!isMobile && (
          <>
        {/* Login Form */}
            <div className={`absolute right-0 w-1/2 h-full bg-white flex items-center text-gray-800 text-center p-10 z-10 transition-all duration-700 ease-in-out
              ${isActive ? 'translate-x-full opacity-0 pointer-events-none' : 'translate-x-0 opacity-100'}
            `}>
          <form className="w-full">
            <h1 className="text-4xl font-semibold -mt-2.5 mb-5">Login</h1>
            <div className="relative my-8">
              <input
                type="text"
                placeholder="Username"
                required
                className="w-full py-3.5 px-5 pr-12 bg-gray-100 rounded-lg border-none outline-none text-base text-gray-800 font-medium"
              />
              <FaUser className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-gray-600" />
            </div>
            <div className="relative my-8">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full py-3.5 px-5 pr-12 bg-gray-100 rounded-lg border-none outline-none text-base text-gray-800 font-medium"
              />
              <FaLock className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-gray-600" />
            </div>
            <div className="-mt-4 mb-4">
              <a href="#" className="text-sm text-gray-800 hover:text-[#9c7d56]">Forgot Password?</a>
            </div>
            <button type="submit" className="w-full h-12 bg-[#BC9667]  rounded-lg shadow-md border-none cursor-pointer text-base text-white font-semibold hover:bg-[#9c7d56] transition-colors">
              Login
            </button>
            <p className="my-4 text-sm">or login with social platforms</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="p-2.5 border-2 border-gray-300 rounded-lg text-2xl text-gray-800 hover:border-[#BC9667] hover:text-[#9c7d56] transition-colors">
                <FcGoogle />
              </a>
              <a href="#" className="p-2.5 border-2 border-gray-300 rounded-lg text-2xl text-gray-800 hover:border-[#BC9667] hover:text-[#9c7d56] transition-colors">
                <FaFacebook className="text-[#BC9667]" />
              </a>
              <a href="#" className="p-2.5 border-2 border-gray-300 rounded-lg text-2xl text-gray-800 hover:border-[#BC9667] hover:text-[#9c7d56] transition-colors">
                <FaGithub />
              </a>
              <a href="#" className="p-2.5 border-2 border-gray-300 rounded-lg text-2xl text-gray-800 hover:border-[#BC9667] hover:text-[#9c7d56] transition-colors">
                <FaLinkedin className="text-[#BC9667]" />
              </a>
            </div>
          </form>
        </div>

        {/* Register Form */}
            <div className={`absolute left-0 w-1/2 h-full bg-white flex items-center text-gray-800 text-center p-10 z-10 transition-all duration-700 ease-in-out
              ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}
            `}>
          <form className="w-full">
            <h1 className="text-4xl font-semibold -mt-2.5 mb-5">Registration</h1>
            <div className="relative my-8">
              <input
                type="text"
                placeholder="Username"
                required
                className="w-full py-3.5 px-5 pr-12 bg-gray-100 rounded-lg border-none outline-none text-base text-gray-800 font-medium"
              />
              <FaUser className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-gray-600" />
            </div>
            <div className="relative my-8">
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full py-3.5 px-5 pr-12 bg-gray-100 rounded-lg border-none outline-none text-base text-gray-800 font-medium"
              />
              <FaEnvelope className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-gray-600" />
            </div>
            <div className="relative my-8">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full py-3.5 px-5 pr-12 bg-gray-100 rounded-lg border-none outline-none text-base text-gray-800 font-medium"
              />
              <FaLock className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-gray-600" />
            </div>
            <button type="submit" className="w-full h-12 bg-[#BC9667] rounded-lg shadow-md border-none cursor-pointer text-base text-white font-semibold hover:bg-[#9c7d56] transition-colors">
              Register
            </button>
            <p className="my-4 text-sm">or register with social platforms</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="p-2.5 border-2 border-gray-300 rounded-lg text-2xl text-gray-800 hover:border-[#BC9667] hover:text-[#9c7d56] transition-colors">
                <FcGoogle />
              </a>
              <a href="#" className="p-2.5 border-2 border-gray-300 rounded-lg text-2xl text-gray-800 hover:border-[#BC9667] hover:text-[#9c7d56] transition-colors">
                <FaFacebook className="text-[#BC9667]" />
              </a>
              <a href="#" className="p-2.5 border-2 border-gray-300 rounded-lg text-2xl text-gray-800 hover:border-[#BC9667] hover:text-[#9c7d56] transition-colors">
                <FaGithub />
              </a>
              <a href="#" className="p-2.5 border-2 border-gray-300 rounded-lg text-2xl text-gray-800 hover:border-[#BC9667] hover:text-[#9c7d56] transition-colors">
                <FaLinkedin className="text-[#BC9667]" />
              </a>
            </div>
          </form>
        </div>

        {/* Toggle Box */}
        <div className="absolute w-full h-full">
          <div className="absolute left-[-250%] w-[300%] h-full bg-[#BC9667] rounded-[150px] z-20 transition-all duration-1800 ease-in-out transform" 
               style={{ left: isActive ? '50%' : '-250%' }}></div>
          {/* Left Toggle Panel */}
              <div className={`absolute w-1/2 h-full text-white flex flex-col justify-center items-center z-20 transition-all duration-500 ease-in-out ${isActive ? '-left-1/2' : 'left-0'}`}
                   style={{ transitionDelay: isActive ? '0.3s' : '0.6s' }}>
            <h1 className="text-4xl font-semibold mb-4">Hello, Welcome!</h1>
            <p className="mb-5">Don't have an account?</p>
            <button
              onClick={toggleForm}
                  className="w-40 h-12 bg-transparent border-2 border-white rounded-lg cursor-pointer text-base text-white font-semibold hover:bg-white hover:text-[#BC9667] transition-all duration-300"
            >
              Register
            </button>
          </div>
          {/* Right Toggle Panel */}
              <div className={`absolute w-1/2 h-full text-white flex flex-col justify-center items-center z-20 transition-all duration-500 ease-in-out ${isActive ? 'right-0' : '-right-1/2'}`}
                   style={{ transitionDelay: isActive ? '0.6s' : '0.3s' }}>
            <h1 className="text-4xl font-semibold mb-4">Welcome Back!</h1>
            <p className="mb-5">Already have an account?</p>
            <button
              onClick={toggleForm}
                  className="w-40 h-12 bg-transparent border-2 border-white rounded-lg cursor-pointer text-base text-white font-semibold hover:bg-white hover:text-[#BC9667] transition-all duration-300"
            >
              Login
            </button>
          </div>
        </div>
          </>
        )}
      </div>
    </div>
    </section>
  );
};

export default LoginForm; 