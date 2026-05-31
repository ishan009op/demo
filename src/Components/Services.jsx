import React from 'react'

const services = [
  {
    number: "01",
    title: "UI/UX Design",
    desc: "Modern and user-focused interfaces designed for clarity and seamless interaction.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "02",
    title: "Web Development",
    desc: "Fast, scalable, and responsive websites built with modern technologies.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "03",
    title: "Brand Identity",
    desc: "Strong visual systems that help brands feel memorable and professional.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "04",
    title: "Creative Direction",
    desc: "Combining visuals, layout, typography, and motion into cohesive experiences.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
  },
]

const Services = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white py-28 px-6 md:px-12">

      {/* ✨ Cinematic Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1616366071248-7ce95824d3c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsYWNrJTIwYW5kJTIwb3JhbmdlfGVufDB8fDB8fHww"
          alt=""
          className="w-full h-full object-cover opacity-65 blur-sm  scale-110"
        />

        {/* Dark Layer */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Soft Gradient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.08),transparent_60%)]"></div>
      </div>

      {/* Container */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="mb-20 text-center md:text-left">

          <p className="text-orange-500 uppercase tracking-[5px] text-sm font-mono">
            Services
          </p>

          <h1 className="text-5xl md:text-6xl lora leading-[1.2] mt-6 max-w-4xl">
            Elevating brands through{" "}
            <span className="text-orange-500">design</span>{" "}
            &{" "}
            <span className="text-orange-500">development</span>
          </h1>

          <p className="text-white/50 archivo mt-6 max-w-xl">
            Crafting digital experiences that feel modern, clean, and emotionally engaging.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/2 backdrop-blur-xl transition-all duration-500 hover:border-orange-500/30 hover:-translate-y-2"
            >

              {/* Image */}
              <div className="relative h-56 overflow-hidden">

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-10"></div>

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Number */}
                <span className="absolute top-5 left-5 z-20 text-5xl group-hover:text-white/60 font-bold text-white/45">
                  {service.number}
                </span>

                {/* Floating Tag */}
                <div className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-orange-500 transition-all duration-500">

                  <span className="text-white group-hover:text-black text-lg">
                    ↗
                  </span>

                </div>

              </div>

              {/* Content */}
              <div className="p-8">

                <h2 className="text-3xl font-bold group-hover:text-orange-500 transition-colors duration-500">
                  {service.title}
                </h2>

                <p className="text-white/60 leading-relaxed mt-4">
                  {service.desc}
                </p>

                {/* Line */}
                <div className="mt-8 w-0 h-px bg-orange-500 group-hover:w-full transition-all duration-700"></div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  )
}

export default Services