import React from 'react'
import Navbar from "./components/NavBar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import CTA from "./components/CTA"
import Footer from './components/Footer'


const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar/>
      <main>
        <Hero/>
        <Features/>
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer/>
    </div>
  );
}

export default HomePage