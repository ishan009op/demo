import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-black via-zinc-950 to-orange-950 py-20 px-4 sm:px-6 md:px-10">

      <div className="max-w-7xl mx-auto p-6 md:p-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl">

        {/* Heading */}
        <div className="text-center">

          <p className="text-orange-500 uppercase tracking-[4px] text-sm font-mono">
            Contact
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white lora mt-4">
            Get in Touch
          </h1>

          <p className="text-white/60 max-w-2xl mx-auto mt-5">
            Have a project in mind or need creative design solutions? Let's
            discuss how we can bring your vision to life.
          </p>

        </div>

        {/* Content */}
        <div className="mt-16 flex flex-col lg:flex-row gap-12">

          {/* Left Side - Form */}
          <div className="w-full lg:w-1/2">

            <div className="flex flex-col gap-5">

              <div>
                <p className="text-base md:text-lg ml-2 archivo text-white/95 mb-2">
                  Name
                </p>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500 transition"
                />
              </div>

              <div>
                <p className="text-base md:text-lg ml-2 archivo text-white/95 mb-2">
                  Phone
                </p>

                <input
                  type="text"
                  placeholder="+91 98765 43210"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500 transition"
                />
              </div>

              <div>
                <p className="text-base md:text-lg ml-2 archivo text-white/95 mb-2">
                  Email
                </p>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500 transition"
                />
              </div>

              <div>
                <p className="text-base md:text-lg ml-2 archivo text-white/95 mb-2">
                  Message
                </p>

                <textarea
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 h-36 text-white outline-none focus:border-orange-500 transition resize-none"
                ></textarea>
              </div>

              <button className="w-full sm:w-fit flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full text-white font-medium">

                Send Message

                <Send size={18} />

              </button>

            </div>

          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 lg:pl-12 flex flex-col">

            {/* Image Card */}
            <div className="relative overflow-hidden rounded-3xl h-64 md:h-80 border border-white/10">

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="Creative workspace"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              <div className="absolute bottom-6 left-6">

                <p className="text-orange-500 text-sm font-mono tracking-[3px]">
                  AVAILABLE FOR WORK
                </p>

                <h3 className="text-2xl md:text-3xl text-white font-bold mt-2">
                  Let's Create Something Amazing
                </h3>

              </div>

            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-6">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Mail size={20} className="text-orange-500" />
                </div>

                <div>
                  <p className="text-white/50 text-sm">Email</p>
                  <p className="text-white">
                    hello@example.com
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Phone size={20} className="text-orange-500" />
                </div>

                <div>
                  <p className="text-white/50 text-sm">Phone</p>
                  <p className="text-white">
                    +91 98765 43210
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <MapPin size={20} className="text-orange-500" />
                </div>

                <div>
                  <p className="text-white/50 text-sm">Location</p>
                  <p className="text-white">
                    Punjab, India
                  </p>
                </div>

              </div>

            </div>

            {/* Socials */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
              >
                <FaInstagram />
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;