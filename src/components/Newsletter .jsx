import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    axios
      .post("http://localhost:3000/newsletter", { email })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you for subscribing!",
            showConfirmButton: false,
            timer: 1500,
          });

          setEmail("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="bg-[#F5EFE6] py-16 px-6 relative">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-10 text-center relative -mt-50 z-10">
        <p className="text-sm uppercase tracking-wider text-[#AB886D] font-medium mb-2">
          Join Our Community
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#493628] mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-[#7a6651] mb-8 text-base leading-relaxed">
          Get the latest updates, event announcements, and exclusive content
          delivered straight to your inbox. Be the first to know and stay
          connected with our impactful community efforts.
        </p>

        <form
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
          onSubmit={handleSubscribe}
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full sm:w-2/3 px-4 py-3 rounded-md border-2 border-[#AB886D] bg-[#FDFBF9] text-[#493628] placeholder-[#AB886D] focus:outline-none focus:ring-2 focus:ring-[#AB886D] transition"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#AB886D] hover:bg-[#493628] text-white font-semibold rounded-md transition duration-300"
          >
            Subscribe
          </button>
        </form>

        <p className="text-xs text-[#a28b74] mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
