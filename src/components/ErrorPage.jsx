import React from 'react';
import { Link } from 'react-router-dom'; // Optional: only if you're using React Router

const ErrorPage = () => {
  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center bg-center bg-no-repeat font-sans relative"
      style={{ backgroundImage: "url('https://i.postimg.cc/GtJD49LW/gifs.gif')" }}
    >
      <p className="absolute top-12 text-[7rem] text-black/40">404</p>
      <h2 className="absolute bottom-32 text-[34px] text-black text-center">Looks like you're lost!</h2>
      <h5 className="absolute bottom-24 text-gray-500 text-center">The page you are looking is not available!</h5>
      
      {/* Use <Link> for routing or <a> if you just need anchor */}
      <Link
        to="/"
        className="absolute bottom-4 bg-gradient-to-r from-[#BC9667] to-[#5c3f2c] hover:text-white text-white text-[23px] px-6 py-3 rounded-[13px] font-semibold no-underline"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
