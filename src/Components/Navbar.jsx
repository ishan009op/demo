import React from 'react'

const Navbar = () => {
  const links = [
    { title: "Home", href: "#home" },
    { title: "Projects", href: "#projects" },
    { title: "About", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Contact", href: "#contact" }
  ]

  return (
    <nav className='flex fixed top-0 left-0 w-full z-50 justify-between items-center px-12 py-6 bg-black/10 backdrop-blur-md border-b border-white/5'>
      <div>
       <h2 className='text-3xl font-bold text-white tracking-tight flex items-center gap-2.5 font-lora'> 
  <span className="material-symbols-outlined text-orange-500 text-4xl select-none leading-none">
    bar_chart_4_bars
  </span>
  Irahi Media
</h2>
      </div>
      <div>
        <ul className='flex items-center gap-8'>
          {links.map((link) => (
            <li key={link.title}>
              <a 
                className='text-white/80 hover:text-white transition-colors duration-200 text-base font-semibold tracking-wide' 
                href={link.href}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar