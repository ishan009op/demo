import React from 'react'

const projectsData = [
  {
    id: 1,
    title: "Aura Cosmetics — Brand Identity & Packaging",
    description:
      "A complete visual identity system and premium, sustainable minimalist packaging design for a luxury skincare line.",
    tech: [
      "Brand Strategy",
      "Packaging Design",
      "3D Mockups",
      "Adobe Illustrator",
    ],
    image:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=1200",
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Vortex Music Festival — Experimental Poster Series",
    description:
      "A series of high-contrast, kinetic typographic posters blending brutalist design layouts with vibrant neon gradients.",
    tech: ["Typography", "Poster Design", "Adobe Photoshop"],
    image:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600",
    link: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Chronos Magazine — Editorial & Layout Design",
    description:
      "Creative direction, grid system development, and premium editorial layouts for an avant-garde quarterly fashion publication.",
    tech: ["Editorial Design", "Type Pairing", "Adobe InDesign"],
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600",
    link: "#",
    featured: false,
  },
]

const Projects = () => {
  return (
    <section className="relative overflow-hidden w-full min-h-screen bg-black text-white py-24 px-6 md:px-12">

      {/* Background Texture */}
      <img
        className="absolute inset-0 w-full h-full object-cover contrast-125 opacity-20"
        src="https://images.unsplash.com/photo-1668450433152-e56d7e8fe4ee?q=80&w=1064&auto=format&fit=crop"
        alt="Background texture"
      />

      {/* Overlay */}
    

      {/* Glow Effects */}
     

      {/* Lines */}
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

          <div className='w-full'>

            <p className="text-orange-500 font-mono uppercase tracking-[4px] text-sm">
              Our Selected Projects
            </p>

            <h1 className="text-5xl lora  font-bold leading-16 mt-6 max-w-3xl">
              Crafting digital solutions that{" "}
              <span className="text-orange-500">
                deliver results
              </span>
            </h1>

          </div>

          <div className="flex items-center justify-end">

            <p className="text-white/80 archivo text-lg leading-relaxed max-w-md">
              A curated selection of full-stack applications built with
              performance, aesthetics, and scalability in mind.
            </p>

          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">

          {projectsData.map((project) => (

            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/30 ${
                project.featured
                  ? "md:col-span-2 flex-col lg:flex-row lg:h-120"
                  : "flex-col"
              } flex`}
            >

              {/* Gradient Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/0 via-orange-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Image Section */}
              <div
                className={`relative overflow-hidden ${
                  project.featured
                    ? "w-full lg:w-3/5 h-70 lg:h-full"
                    : "w-full h-72"
                }`}
              >

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 z-10"></div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              {/* Content */}
              <div
                className={`relative z-20 flex flex-col justify-between p-8 ${
                  project.featured
                    ? "w-full lg:w-2/5"
                    : "w-full"
                }`}
              >

                <div>

                  <span className="text-xs uppercase tracking-[3px] text-orange-500 font-mono">
                    Featured Project
                  </span>

                  <h3 className="text-3xl font-bold mt-4 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-white/70 mt-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mt-6">

                    {project.tech.map((item, index) => (

                      <span
                        key={index}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/70"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                </div>

                {/* Button */}
                <div className="pt-8">

                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm text-white group-hover:text-orange-500 transition-colors duration-300"
                  >
                    View Project

                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>

                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
      <div className="w-full h-px bg-white/10 my-20"></div>

    </section>
  )
}

export default Projects