import React from 'react';

import errImg from "../assets/err.jpg"
import { Link } from 'react-router';

const Error = () => {
    return (
      <div className="min-h-screen bg-white flex flex-col justify-center items-center text-center p-6">
      <img
        src={errImg}
        alt="404 Not Found"
        className="w-80 h-auto mb-6"
      />
      <h1 className="text-4xl font-bold text-[#493628] mb-2">404 - Events Not Found!</h1>
      <Link
        to="/"
        className="px-6 py-2 border-none font-semibold rounded-md bg-[#AB886D] text-white hover:bg-[#8B6D54] focus:ring-2 focus:ring-[#AB886D]"
      >
        Go Back Home
      </Link>
    </div>
    );
};

export default Error;