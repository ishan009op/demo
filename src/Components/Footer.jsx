import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-white">

      {/* Top Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10">

        {/* CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

          <div>

            <p className="text-orange-500 uppercase tracking-[4px] text-sm font-mono">
              Let's Connect
            </p>

            <h2 className="text-5xl md:text-6xl lora mt-5 leading-tight max-w-3xl">
              Ready to build something{" "}
              <span className="text-orange-500">
                exceptional?
              </span>
            </h2>

          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full text-white font-medium w-fit"
          >
            Start a Project
            <ArrowUpRight size={18} />
          </a>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-16"></div>

        {/* Main Footer */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>

            <h3 className="text-3xl font-bold lora">
              Irahi Media<span className="text-orange-500">.</span>
            </h3>

            <p className="text-white/60 mt-5 leading-relaxed max-w-sm">
             Creative graphic designer focused on crafting impactful visual identities, engaging brand experiences, and modern designs that leave a lasting impression.
            </p>

          </div>

          {/* Navigation */}
          <div>

            <h4 className="text-lg font-semibold mb-5">
              Navigation
            </h4>

            <div className="flex flex-col gap-3 text-white/60">

              <a href="#home" className="hover:text-orange-500 transition">
                Home
              </a>

              <a href="#about" className="hover:text-orange-500 transition">
                About
              </a>

              <a href="#projects" className="hover:text-orange-500 transition">
                Projects
              </a>

              <a href="#services" className="hover:text-orange-500 transition">
                Services
              </a>

              <a href="#contact" className="hover:text-orange-500 transition">
                Contact
              </a>

            </div>

          </div>

          {/* Socials */}
          <div>

            <h4 className="text-lg font-semibold mb-5">
              Socials
            </h4>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition"
              >
                <FaXTwitter />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-white/40 text-sm">
            © 2026 Irahi media All rights reserved.
          </p>

          <p className="text-white/40 text-sm">
            Designed & Developed with React + Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;