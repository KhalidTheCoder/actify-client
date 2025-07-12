import Lottie from "lottie-react";
import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import signInlottie from "../assets/lottie/Login.json";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const SignIn = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Signed in Successful");
        navigate(location.state?.from?.pathname || "/", { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        toast.success("Signed in with Google!");
        navigate(location.state?.from?.pathname || "/", {
          replace: true,
        });
      })
      .catch((error) => {
        toast.error("Google sign in failed!");
        console.error(error);
      });
  };

  return (
    <div
      style={{ minHeight: "calc(100vh - 250px)" }}
      className="min-h-screen flex items-center justify-center bg-[#E4E0E1] p-4"
    >
      <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
        <div>
          <Lottie
            style={{ width: "400px" }}
            animationData={signInlottie}
            loop={true}
          ></Lottie>
        </div>

        <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-[#FCF7F8] text-[#493628]">
          <h2 className="mb-3 text-3xl font-semibold text-center text-[#493628]">
            Login to your account
          </h2>
          <p className="text-sm text-center font-medium text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              state={location.state}
              className="text-[#AB886D] font-semibold hover:underline focus:underline"
            >
              Sign up here
            </Link>
          </p>

          <div className="my-6 space-y-4">
            <button
              onClick={handleGoogleSignIn}
              className="btn w-full border border-[#D6C0B3] bg-white text-[#493628] hover:bg-[#D6C0B3]/20"
            >
              <FcGoogle size={24}></FcGoogle> Login With Google
            </button>
          </div>

          <div className="flex items-center w-full my-4">
            <hr className="w-full border-gray-400" />
            <p className="px-2 text-gray-600 text-sm">OR</p>
            <hr className="w-full border-gray-400" />
          </div>

          <form onSubmit={handleSignIn} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm text-[#493628] font-medium"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                // onChange={(e)=>setUserEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-3 py-2 border border-[#D6C0B3] rounded-md bg-white text-[#493628] placeholder-[#AB886D] focus:ring-2 focus:ring-[#AB886D]"
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label
                  htmlFor="password"
                  className="text-sm text-[#493628] font-medium"
                >
                  Password
                </label>
                <div
                  onClick={() => {
                    //   handleForgetPassword(userEmail);
                  }}
                  className="text-xs cursor-pointer text-black font-semibold hover:underline"
                >
                  Forgot password?
                </div>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••"
                className="w-full px-3 py-2 border border-[#D6C0B3] rounded-md bg-white text-[#493628] placeholder-[#AB886D] focus:ring-2 focus:ring-[#AB886D]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 font-semibold rounded-md bg-[#AB886D] text-white hover:bg-[#8B6D54] focus:ring-2 focus:ring-[#AB886D]"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
