'use client';
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { useState } from "react"

export default function About() {
  const [showMorePhilosophy, setShowMorePhilosophy] = useState(false);
  const [showMoreOperate, setShowMoreOperate] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/22.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-gray-900/30"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-6">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Moving Beyond Relief. Building For Resilience.
            </h1>
          </div>
        </div>
      </section>

      {/* Alternating Image/Text Sections */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image Left, Text Right */}
            <div className="aspect-square overflow-hidden group">
              <img 
                src="/we.jpg" 
                alt="Our Approach" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div className="aspect-square bg-gray-50 p-8 md:p-16 flex flex-col justify-center relative group hover:bg-gray-100 transition-all duration-500">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Our Philosophy</p>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">Our Philosophy</h2>
              <div className="text-gray-600 text-lg leading-relaxed">
                <p>At Impact Delivery Group (IDG), we believe the true success of any social or infrastructure development project is measured by what happens after the funding stops.</p>
                {showMorePhilosophy && (
                  <>
                    <p className="mt-4">Traditional aid models often keep vulnerable communities dependent on donations. We are here to change that.</p>
                    <p className="mt-4">We are an expert consulting and implementation team that partners with governments, donors, and businesses to build strong, self-reliant communities.</p>
                  </>
                )}
                <button 
                  onClick={() => setShowMorePhilosophy(!showMorePhilosophy)}
                  className="text-gray-900 hover:text-gray-600 underline mt-4 text-sm font-medium"
                >
                  {showMorePhilosophy ? 'Show Less' : 'Read More'}
                </button>
              </div>
            </div>

            {/* Text Left, Image Right */}
            <div className="aspect-square bg-gray-50 p-8 md:p-16 flex flex-col justify-center relative group hover:bg-gray-100 transition-all duration-500">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">How We Operate</p>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">How We Operate</h2>
              <div className="text-gray-600 text-lg leading-relaxed">
                <p>Led by experienced professionals and driven by clear, honest metrics, we turn temporary aid projects into permanent pathways for local growth and financial freedom.</p>
                {showMoreOperate && (
                  <p className="mt-4">We don&apos;t just hand out relief; we build systems that stay strong for good.</p>
                )}
                <button 
                  onClick={() => setShowMoreOperate(!showMoreOperate)}
                  className="text-gray-900 hover:text-gray-600 underline mt-4 text-sm font-medium"
                >
                  {showMoreOperate ? 'Show Less' : 'Read More'}
                </button>
              </div>
            </div>
            <div className="aspect-square overflow-hidden group">
              <img 
                src="/work.jpg" 
                alt="Our Team in Action" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Feature Cards */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">What Makes Us Different</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900">What Sets Us Apart</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200 hover:border-gray-400 transition-colors">
              <div className="text-5xl font-light text-gray-300 mb-4">01</div>
              <h3 className="text-xl font-light text-gray-900 mb-4">On-The-Ground Support</h3>
              <p className="text-gray-600 leading-relaxed">
                We don&apos;t just write reports and walk away. Our team stays on site to help your team put new plans into action.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 hover:border-gray-400 transition-colors">
              <div className="text-5xl font-light text-gray-300 mb-4">02</div>
              <h3 className="text-xl font-light text-gray-900 mb-4">A Built-In Handoff Plan</h3>
              <p className="text-gray-600 leading-relaxed">
                We design every project with a clear, step-by-step plan to hand over total ownership to local leaders from day one.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 hover:border-gray-400 transition-colors">
              <div className="text-5xl font-light text-gray-300 mb-4">03</div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Clear, Honest Responsibility</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in clear responsibility, pairing data-driven leadership with everyday process updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <Link
          href="/contact"
          className="bg-gray-900 py-16 md:py-24 flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-300 group hover:scale-105"
        >
          <span className="text-xl font-bold tracking-widest uppercase">CONTACT US</span>
        </Link>
        <Link
          href="/careers"
          className="bg-gray-800 py-16 md:py-24 flex items-center justify-center text-white hover:bg-gray-700 transition-all duration-300 group hover:scale-105"
        >
          <span className="text-xl font-bold tracking-widest uppercase">JOIN OUR TEAM</span>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
