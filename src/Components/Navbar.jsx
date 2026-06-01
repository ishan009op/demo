import React, { useEffect, useRef, useState } from "react";
import { Menu, X, BarChart3 } from "lucide-react";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef(null);

  const links = [
    { title: "Home", href: "#home" },
    { title: "Projects", href: "#projects" },
    { title: "About", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Navbar */}
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <div className="flex items-center gap-3 min-w-0">

            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center">
              <BarChart3
                size={20}
                className="text-orange-500"
              />
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white truncate">
              Irahi Media
            </h2>

          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">

            {links.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className="text-white/75 hover:text-orange-500 transition-colors duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}

          </ul>

          {/* Desktop CTA */}
          <button
            className="hidden lg:block px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 transition-colors text-white"
          >
            Let's Talk
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center text-white p-2 rounded-lg"
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl">

          <ul className="flex flex-col px-6 py-6">

            {links.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 text-white/80 hover:text-orange-500 transition-colors"
                >
                  {link.title}
                </a>
              </li>
            ))}

            <button
              className="mt-4 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 transition-colors text-white"
            >
              Let's Talk
            </button>

          </ul>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;