import Lottie from "lottie-react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import registerlottie from "../assets/lottie/register.json";

const Register = () => {
  return (
    <div>
      <div
        style={{ minHeight: "calc(100vh - 250px)" }}
        className="min-h-screen flex items-center justify-center bg-[#E4E0E1] p-4"
      >
        <div className="flex flex-col-reverse md:flex-row justify-center gap-2 items-center">
          <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-[#FCF7F8] text-[#493628]">
            <h2 className="mb-3 text-3xl font-semibold text-center text-[#493628]">
              Register your account
            </h2>
            <p className="text-sm text-center font-medium text-gray-600 mb-6">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#AB886D] font-semibold hover:underline focus:underline"
              >
                Sign in here
              </Link>
            </p>

            <div className="my-6 space-y-4">
              <button
                //   onClick={handleGoogleSignUp}
                className="btn w-full border border-[#D6C0B3] bg-white text-[#493628] hover:bg-[#D6C0B3]/20"
              >
                <FcGoogle size={24}></FcGoogle> Sign up With Google
              </button>
            </div>

            <div className="flex items-center w-full my-4">
              <hr className="w-full border-gray-400" />
              <p className="px-2 text-gray-600 text-sm">OR</p>
              <hr className="w-full border-gray-400" />
            </div>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm font-medium text-[#493628]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border rounded-md border-[#D6C0B3] bg-white text-[#493628] placeholder-[#AB886D] focus:outline-none focus:ring-2 focus:ring-[#AB886D]"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-[#493628]">
                  Photo URL
                </label>
                <input
                  type="text"
                  id="photo"
                  name="photo"
                  placeholder="Your Photo URL"
                  className="w-full px-3 py-2 border rounded-md border-[#D6C0B3] bg-white text-[#493628] placeholder-[#AB886D] focus:outline-none focus:ring-2 focus:ring-[#AB886D]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-[#493628]"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 border rounded-md border-[#D6C0B3] bg-white text-[#493628] placeholder-[#AB886D] focus:outline-none focus:ring-2 focus:ring-[#AB886D]"
                  required
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-[#493628]"
                  >
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••"
                  className="w-full px-3 py-2 border rounded-md border-[#D6C0B3] bg-white text-[#493628] placeholder-[#AB886D] focus:outline-none focus:ring-2 focus:ring-[#AB886D]"
                  required
                />
                {/* {error && (
                <p className="text-red-400 text-xs font-medium mt-1">{error}</p>
              )} */}
              </div>

              <button
                type="submit"
                className="w-full py-2 font-semibold rounded-md bg-[#AB886D] text-white hover:bg-[#8B6D54] focus:outline-none focus:ring-2 focus:ring-[#AB886D]"
              >
                Sign up
              </button>
            </form>
          </div>

          <div>
            <Lottie
              style={{ width: "400px" }}
              animationData={registerlottie}
              loop={true}
            ></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
