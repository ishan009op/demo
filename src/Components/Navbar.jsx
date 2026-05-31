import React, { useEffect, useRef, useState } from "react";
import { Menu, X, BarChart3 } from "lucide-react";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef(null);
  const mobileRef = useRef(null);

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

  useEffect(() => {
    if (!mobileRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        mobileRef.current,
        {
          height: 0,
          opacity: 0,
        },
        {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        }
      );
    }
  }, [isOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50
        border-b border-white/10
        bg-black/30 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center">
                <BarChart3
                  size={22}
                  className="text-orange-500"
                />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                Irahi Media
              </h2>
            </div>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-white/75 hover:text-orange-500 transition-all duration-300 font-medium"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <button
              className="hidden md:block
              px-5 py-2.5
              rounded-xl
              bg-orange-500
              hover:bg-orange-600
              text-white
              font-medium
              transition-all duration-300"
            >
              Let's Talk
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X size={30} />
              ) : (
                <Menu size={30} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            ref={mobileRef}
            className="md:hidden overflow-hidden border-t border-white/10 bg-black/95"
          >
            <ul className="flex flex-col px-5 py-6 gap-6">
              {links.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-orange-500 text-lg font-medium transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}

              <button
                className="w-full mt-2
                py-3
                rounded-xl
                bg-orange-500
                hover:bg-orange-600
                text-white
                font-medium"
              >
                Let's Talk
              </button>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;