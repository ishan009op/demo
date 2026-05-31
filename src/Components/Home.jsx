import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Home = () => {
  const comp = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a seamless timeline for the hero reveal
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } })

      // 1. Fade in the background texture and overlay subtly
      tl.fromTo('.bg-asset', { opacity: 0 }, { opacity: 1, duration: 1.5 }, 0)
        .fromTo('.bg-vignette', { opacity: 0 }, { opacity: 1, duration: 1.5 }, 0.2)

      // 2. Animate the typography column elements sequentially
      tl.fromTo('.hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, 0.4)
        .fromTo('.hero-desc', { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, 0.6)
        .fromTo('.hero-ctas', { y: 15, opacity: 0 }, { y: 0, opacity: 1 }, 0.75)

      // 3. Reveal the premium mockup window frame
      tl.fromTo('.mockup-window', { y: 60, scale: 0.98, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: 1.4 }, 0.5)

      // 4. Stagger the growth of the chart bars on load
      tl.fromTo('.chart-bar', 
        { scaleY: 0, transformOrigin: 'bottom' }, 
        { scaleY: 1, opacity: 1, minHeight: 'auto', stagger: 0.08, ease: 'elastic.out(1, 0.75)', duration: 1.5 }, 
        0.8
      )
    }, comp)

    return () => ctx.revert() // Cleanup to prevent memory leaks/double-triggers
  }, [])

  return (
    <section id="home" ref={comp} className="relative w-full min-h-screen overflow-hidden bg-black flex items-center">
      {/* Background Image Asset */}
      <img
        className="bg-asset absolute inset-0 w-full h-full object-cover brightness-[0.35] rotate-180 contrast-125 saturate-150"
        src="https://img.magnific.com/premium-vector/abstract-orange-white-geometric-pattern_1251355-3319.jpg?w=1480"
        alt="Background texture"
      />

      {/* Deep Dark Vignette Overlay */}
      <div className="bg-vignette absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-black/80"></div>

      {/* Hero Layout Grid Container */}
      <div className='relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24'>
        
        {/* Left Column: Hero Typography */}
        <div className='flex flex-col gap-8 text-left max-w-xl'>
          <h1 className='hero-title text-5xl lg:text-6xl lora leading-[1.15] text-white tracking-tight'>
            Turning Ideas Into Modern Digital{" "}
            <span className='text-orange-500 font-bold tracking-normal block lg:inline'>
              Products
            </span>
          </h1>
          <p className='hero-desc text-lg lg:text-xl text-white/70 archivo leading-relaxed'>
            Beautiful interfaces, seamless interactions, and scalable development tailored for modern businesses.
          </p>

          <div className='hero-ctas flex items-center gap-4 mt-4'>
            <button className='bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-orange-500/20 cursor-pointer'>
              View Projects
            </button>
            <button className='border-2 border-orange-500/50 hover:border-orange-500 text-orange-400 hover:text-white hover:bg-orange-500/10 font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer'>
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Column: Premium Dashboard Mockup */}
        <div className='flex items-center justify-center lg:justify-end'>
          <div className='mockup-window relative w-full max-w-125 aspect-5/4 bg-white/2 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden hover:scale-[1.01] transition-transform duration-500 group'>
            
            {/* Window Top Controls */}
            <div className='w-full h-12 border-b border-white/5 flex items-center px-5 gap-3 bg-black/40'>
              <div className='w-3 h-3 rounded-full bg-red-500/80'></div>
              <div className='w-3 h-3 rounded-full bg-yellow-500/80'></div>
              <div className='w-3 h-3 rounded-full bg-green-500/80'></div>
            </div>

            {/* Dashboard Workspace */}
            <div className='p-6 flex flex-col justify-between h-[calc(100%-48px)] gap-6'>
              
              {/* Stat Metric Cards */}
              <div className='grid grid-cols-2 gap-4'>
                <div className='bg-white/4 border border-white/5 rounded-2xl p-4 transition-colors group-hover:bg-white/6'>
                  <p className='text-white/40 text-xs font-medium uppercase tracking-wider mb-1'>Projects</p>
                  <h3 className='text-3xl text-white font-bold tracking-tight'>12+</h3>
                </div>
                <div className='bg-orange-500/1 border border-orange-500/10 rounded-2xl p-4'>
                  <p className='text-orange-400/80 text-xs font-medium uppercase tracking-wider mb-1'>Experience</p>
                  <h3 className='text-3xl text-orange-400 font-bold tracking-tight'>MERN</h3>
                </div>
              </div>

              {/* Centered, Clean Visual Metric Chart */}
              <div className='w-full flex-1 min-h-30 rounded-2xl bg-white/2 border border-white/5 flex items-end justify-center gap-4 '>
                <div className='chart-bar w-9 h-12 bg-orange-500/80 rounded-t-lg transition-all duration-500 group-hover:h-16'></div>
                <div className='chart-bar w-9 h-20 bg-orange-500/60 rounded-t-lg transition-all duration-500 group-hover:h-24'></div>
                <div className='chart-bar w-9 h-28 bg-orange-500 rounded-t-lg transition-all duration-500 group-hover:h-20'></div>
                <div className='chart-bar w-9 h-16 bg-orange-500/50 rounded-t-lg transition-all duration-500 group-hover:h-28'></div>
                <div className='chart-bar w-9 h-24 bg-orange-500/90 rounded-t-lg transition-all duration-500 group-hover:h-14'></div>
              </div>

              {/* Status Footer */}
              <div className='flex justify-between items-center pt-2 border-t border-white/5'>
                <p className='text-white/50 text-sm font-light'>
                  Building modern web experiences
                </p>
                <button className='bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2.5 rounded-xl transition-colors duration-300 shadow-md shadow-orange-500/10 cursor-pointer'>
                  Explore
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home