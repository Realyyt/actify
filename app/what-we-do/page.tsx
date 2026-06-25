"use client"
import Link from "next/link"
import Footer from "../components/footer"
import Navbar from "../components/navbar"


export default function WhatWeDo() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/we.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-gray-900/30"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-6">OUR PILLARS & VISIBLE CAPABILITIES</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
              What We Do
            </h1>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-gray-600 text-lg leading-relaxed">
              We design, manage, and fix large-scale social services, utilities, governance programs, and infrastructure in developing markets. Instead of using rigid, one-size-fits-all plans, we build flexible systems designed to outlast short-term grants. Our services include long-term master planning, staff training, coordinating public-private partnerships, and providing strict program management.
            </p>
          </div>

          {/* Our Three Pillars */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-12 text-center">Our Three Pillars</h2>
            <div className="grid md:grid-cols-2 gap-0">
              {/* Pillar 1 */}
              <div className="p-10 md:p-16 bg-gray-50 flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Pillar 01</p>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-6">Leadership & Responsibility (The TQLA Framework)</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We use clear, numbers-based management methods. This means assigning specific jobs to specific owners, cutting out wasted effort, and setting up open tracking systems that local citizens can see and trust.
                </p>
              </div>
              <div className="aspect-[4/3] md:aspect-square overflow-hidden">
                <img src="/boss.jpg" alt="Leadership & Responsibility" className="w-full h-full object-cover" />
              </div>

              {/* Pillar 2 */}
              <div className="aspect-[4/3] md:aspect-square overflow-hidden">
                <img src="/workc.jpg" alt="Aid-to-Trade Model" className="w-full h-full object-cover" />
              </div>
              <div className="p-10 md:p-16 bg-gray-50 flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Pillar 02</p>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-6">The &apos;Aid-to-Trade&apos; Model</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We help systems move away from constant dependence on aid and toward profitable trade and local fund generation. By connecting local services with business opportunities, we give communities the power to use their own talents and achieve real independence.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-10 md:p-16 bg-gray-50 flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Pillar 03</p>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-6">Constant Improvement</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Lasting impact requires constant practice and refinement. We build regular, simple data checks directly into your team&apos;s daily routines. By continually reviewing work habits and fixing gaps, we keep your systems flexible, legal, and highly efficient as things change.
                </p>
              </div>
              <div className="aspect-[4/3] md:aspect-square overflow-hidden">
                <img src="/lead.jpg" alt="Constant Improvement" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* How We Deliver Results */}
          <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-100 -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-12 text-center">How We Deliver Results</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors bg-white">
                  <p className="text-4xl md:text-5xl font-light text-gray-300 mb-4">01</p>
                  <h3 className="text-xl font-light text-gray-900 mb-3">Reviewing Daily Operations</h3>
                  <p className="text-gray-600 leading-relaxed">We perform clear, step-by-step lookovers of how your organization works, ensuring your staff&apos;s daily habits truly line up with your big-picture goals.</p>
                </div>

                <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors bg-white">
                  <p className="text-4xl md:text-5xl font-light text-gray-300 mb-4">02</p>
                  <h3 className="text-xl font-light text-gray-900 mb-3">Finding Risks and Gaps</h3>
                  <p className="text-gray-600 leading-relaxed">Our teams are highly skilled at finding hidden risks, costly delays, and confusing rules that slow your staff down or cause compliance errors.</p>
                </div>

                <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors bg-white">
                  <p className="text-4xl md:text-5xl font-light text-gray-300 mb-4">03</p>
                  <h3 className="text-xl font-light text-gray-900 mb-3">Designing Practical Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">We create practical, evidence-backed roadmaps that fit your team&apos;s budget and daily reality, completely focused on making things better.</p>
                </div>

                <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors bg-white">
                  <p className="text-4xl md:text-5xl font-light text-gray-300 mb-4">04</p>
                  <h3 className="text-xl font-light text-gray-900 mb-3">Step-by-Step Help</h3>
                  <p className="text-gray-600 leading-relaxed">We do not just drop off advice; we work side by side with your team as they learn new ways of working, ensuring the shift is easy and permanent.</p>
                </div>

                <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors bg-white">
                  <p className="text-4xl md:text-5xl font-light text-gray-300 mb-4">05</p>
                  <h3 className="text-xl font-light text-gray-900 mb-3">Tracking Progress</h3>
                  <p className="text-gray-600 leading-relaxed">We track real-time progress, evaluate whether changes are genuinely helping, and show your team how to make quick, ongoing adjustments to stay on track.</p>
                </div>
              </div>
            </div>
          </section>
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
