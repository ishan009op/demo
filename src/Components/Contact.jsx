import React from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
    
    <section className='bg-linear-to-br from-black via-zinc-950 to-orange-950 p-10'>

<div className='p-10 bg-white/20  border border-white/90 rounded-2xl'>
<h1 className='text-5xl text-white text-center lora'>Get in Touch</h1>
<div className="m-10 flex">
<div className='w-1/2 flex flex-col justify-around gap-5'>
<p className="text-xl ml-3 archivo text-white/95">name</p>
<input className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500 transition" type="text" />
<p className="text-xl ml-3 archivo text-white/95">Phone</p>
<input className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500 transition" type="text" />
<p className="text-xl ml-3 archivo text-white/95">Email</p>
<input className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500 transition" type="text" />
<p className="text-xl ml-3 archivo text-white/95">Mesaage</p>
<textarea className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 h-36 text-white outline-none focus:border-orange-500 transition resize-none" name="" id=""></textarea>
<button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full text-white font-medium">
  Send Message
  <Send size={18} />
</button>
</div>
<div className="w-1/2 pl-12 flex flex-col justify-between">

  {/* Image Card */}
  <div className="relative overflow-hidden rounded-3xl h-72 border border-white/10">

    <img
      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
      alt=""
      className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

    <div className="absolute bottom-6 left-6">

      <p className="text-orange-500 text-sm font-mono tracking-[3px]">
        AVAILABLE FOR WORK
      </p>

      <h3 className="text-3xl text-white font-bold mt-2">
        Let's Build Something Amazing
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
        <p className="text-white">hello@example.com</p>
      </div>

    </div>

    <div className="flex items-center gap-4">

      <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
        <Phone size={20} className="text-orange-500" />
      </div>

      <div>
        <p className="text-white/50 text-sm">Phone</p>
        <p className="text-white">+91 98765 43210</p>
      </div>

    </div>

    <div className="flex items-center gap-4">

      <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
        <MapPin size={20} className="text-orange-500" />
      </div>

      <div>
        <p className="text-white/50 text-sm">Location</p>
        <p className="text-white">Punjab, India</p>
      </div>

    </div>

  </div>

  {/* Socials */}
  <div className="flex gap-4 mt-8">

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

  </div>

</div>
</div>
</div>
    </section>
    
    </>
  )
}

export default Contact