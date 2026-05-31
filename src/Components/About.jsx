import React from 'react'

const About = () => {
  return (
    <section className="relative overflow-hidden w-full min-h-screen bg-black text-white px-6 md:px-16 py-20">

      {/* Background Bars */}
      <div className="absolute top-0 left-20 w-[2px] h-full bg-white/5"></div>

      <div className="absolute top-0 right-32 w-[2px] h-full bg-orange-500/10"></div>

      <div className="absolute top-40 left-0 w-40 h-[2px] bg-white/10"></div>

      <div className="absolute bottom-32 right-0 w-52 h-[2px] bg-orange-500/20"></div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-red-500/10 blur-3xl"></div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto relative z-10">

        <p className="text-orange-500 font-mono uppercase tracking-[4px] text-sm">
          About Me
        </p>

        <h1 className="text-4xl lora md:text-6xl font-bold mt-4 leading-tight">
          Building modern and creative web <span className='text-orange-500'> experiences</span>
        </h1>

      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Side */}
        <div className="space-y-6">

          <p className="text-white/90 text-2xl archivo leading-relaxed">
            I’m a creative graphic designer focused on building clean,
            modern, and visually engaging designs. I enjoy transforming
            ideas into meaningful visuals that combine creativity,
            simplicity, and strong visual communication.
          </p>

          <p className="text-white/70 text-lg archivo leading-relaxed">
            My skills include branding, social media design, poster
            creation, UI inspiration, typography, and digital content
            design. I’m always exploring new design trends and improving
            my creative process to deliver impactful and professional
            visuals.
          </p>

          {/* Stats */}
        <div className="grid grid-cols-2 gap-4 pt-8">

  <div className="col-span-2 rounded-3xl border border-white/10 p-8 bg-white/[0.03]">
    <h2 className="text-6xl font-bold text-orange-500">
      10+
    </h2>

    <p className="text-white/70 mt-2">
      Projects Completed Successfully
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 p-6 bg-white/[0.03]">
    <h2 className="text-4xl font-bold text-orange-500">
      4+
    </h2>

    <p className="text-white/70 mt-2 text-sm">
      Years Learning
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 p-6 bg-white/3">
    <h2 className="text-4xl font-bold text-orange-500">
      24/7
    </h2>

    <p className="text-white/70 mt-2 text-sm">
      Creative Passion
    </p>
  </div>

</div>

        </div>

        {/* Right Side */}
        <div className="relative flex justify-center">

          <div className="w-full max-w-md h-125 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">

            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default About