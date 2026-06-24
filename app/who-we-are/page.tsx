"use client"
import Link from "next/link"
import React from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

export default function WhoWeAre() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/hmm.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-gray-900/30"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-6">Who We Are</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
              Innovation and empowerment take center stage.
            </h1>
          </div>
        </div>
      </section>

      {/* Aid to Trade Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">Our Approach</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                Aid-To-Trade: Advancing Proper Protection, Quality Leadership, Locally-led initiatives, Access to Capital, Market-Based Solutions and Sustainable Growth
              </h2>
            </div>
            
            <div className="mb-16">
              <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-3xl mx-auto text-center">
                At Impact Delivery Group, Aid-To-Trade is more than a model—it's a strategy for long-term economic independence. By integrating proper protection, quality leadership, market-driven solutions, and sustainable development, we ensure aid transitions into lasting trade opportunities.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors">
                  <p className="text-5xl font-light text-gray-300 mb-4">01</p>
                  <h3 className="text-xl font-light text-gray-900 mb-3">Proper Protection</h3>
                  <p className="text-gray-600">Safeguarding communities by ensuring equitable access to economic security, healthcare, and essential resources.</p>
                </div>

                <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors">
                  <p className="text-5xl font-light text-gray-300 mb-4">02</p>
                  <h3 className="text-xl font-light text-gray-900 mb-3">Quality Leadership</h3>
                  <p className="text-gray-600">Strengthening governance and institutional efficiency by embedding delivery units within organizations, governments, and institutions to drive high-impact initiatives.</p>
                </div>

                <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors">
                  <p className="text-5xl font-light text-gray-300 mb-4">03</p>
                  <h3 className="text-xl font-light text-gray-900 mb-3">Local Ownership</h3>
                  <p className="text-gray-600">Empowering communities as architects of their development futures – ensuring solutions reflect local needs, priorities, and expertise.</p>
                </div>

                <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors">
                  <p className="text-5xl font-light text-gray-300 mb-4">04</p>
                  <h3 className="text-xl font-light text-gray-900 mb-3">Access to Capital</h3>
                  <p className="text-gray-600">Expanding financial access through government support, private investment and partnerships foster innovation, job creation and sustainable economic growth.</p>
                </div>

                <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors">
                  <p className="text-5xl font-light text-gray-300 mb-4">05</p>
                  <h3 className="text-xl font-light text-gray-900 mb-3">Market-Based Solutions</h3>
                  <p className="text-gray-600">Investing in enterprise-driven models that foster self-sufficiency, private-sector growth, and economic resilience.</p>
                </div>

                <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors">
                  <p className="text-5xl font-light text-gray-300 mb-4">06</p>
                  <h3 className="text-xl font-light text-gray-900 mb-3">Sustainable Growth</h3>
                  <p className="text-gray-600">Moving beyond short-term aid by building stronger systems that enable leading prosperity through trade investment and innovation.</p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 text-lg italic">
                  True development requires bold leadership, local engagement, and systems that sustain impact beyond aid dependency. Aid-To-Trade is how we turn assistance into opportunity—ensuring communities lead, markets thrive, and solutions endure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <Link
          href="/contact"
          className="bg-gray-900 py-16 md:py-24 flex items-center justify-center text-white hover:bg-gray-800 transition-colors group"
        >
          <span className="text-xl font-light tracking-wider">CONTACT US</span>
        </Link>
        <Link
          href="/careers"
          className="bg-gray-800 py-16 md:py-24 flex items-center justify-center text-white hover:bg-gray-700 transition-colors group"
        >
          <span className="text-xl font-light tracking-wider">JOIN OUR TEAM</span>
        </Link>
      </section>

      <Footer />
    </div>
  )
}
