"use client"
import Link from "next/link"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { useState } from "react"


export default function WhatWeDo() {
  const [showMoreIntro, setShowMoreIntro] = useState(false);
  const [showMorePillar1, setShowMorePillar1] = useState(false);
  const [showMorePillar2, setShowMorePillar2] = useState(false);
  const [showMorePillar3, setShowMorePillar3] = useState(false);

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
            <div className="text-gray-600 text-lg leading-relaxed">
              <p>We design, manage, and fix large-scale social services, utilities, governance programs, and infrastructure in developing markets.</p>
              {showMoreIntro && (
                <p className="mt-4">Instead of using rigid, one-size-fits-all plans, we build flexible systems designed to outlast short-term grants. Our services include long-term master planning, staff training, coordinating public-private partnerships, and providing strict program management.</p>
              )}
              <button 
                onClick={() => setShowMoreIntro(!showMoreIntro)}
                className="text-gray-900 hover:text-gray-600 underline mt-4 text-sm font-medium"
              >
                {showMoreIntro ? 'Show Less' : 'Read More'}
              </button>
            </div>
          </div>

          {/* Our Three Pillars */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-12 text-center">Our Three Pillars</h2>
            <div className="grid md:grid-cols-2 gap-0">
              {/* Pillar 1 */}
              <div className="p-10 md:p-16 bg-gray-50 flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Pillar 01</p>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-6">Leadership & Responsibility</h3>
                <div className="text-gray-600 text-lg leading-relaxed">
                  <p>We use clear, numbers-based management methods.</p>
                  {showMorePillar1 && (
                    <p className="mt-4">This means assigning specific jobs to specific owners, cutting out wasted effort, and setting up open tracking systems that local citizens can see and trust.</p>
                  )}
                  <button 
                    onClick={() => setShowMorePillar1(!showMorePillar1)}
                    className="text-gray-900 hover:text-gray-600 underline mt-4 text-sm font-medium"
                  >
                    {showMorePillar1 ? 'Show Less' : 'Read More'}
                  </button>
                </div>
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
                <div className="text-gray-600 text-lg leading-relaxed">
                  <p>We help systems move away from constant dependence on aid and toward profitable trade and local fund generation.</p>
                  {showMorePillar2 && (
                    <p className="mt-4">By connecting local services with business opportunities, we give communities the power to use their own talents and achieve real independence.</p>
                  )}
                  <button 
                    onClick={() => setShowMorePillar2(!showMorePillar2)}
                    className="text-gray-900 hover:text-gray-600 underline mt-4 text-sm font-medium"
                  >
                    {showMorePillar2 ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-10 md:p-16 bg-gray-50 flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Pillar 03</p>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-6">Constant Improvement</h3>
                <div className="text-gray-600 text-lg leading-relaxed">
                  <p>Lasting impact requires constant practice and refinement.</p>
                  {showMorePillar3 && (
                    <p className="mt-4">We build regular, simple data checks directly into your team&apos;s daily routines. By continually reviewing work habits and fixing gaps, we keep your systems flexible, legal, and highly efficient as things change.</p>
                  )}
                  <button 
                    onClick={() => setShowMorePillar3(!showMorePillar3)}
                    className="text-gray-900 hover:text-gray-600 underline mt-4 text-sm font-medium"
                  >
                    {showMorePillar3 ? 'Show Less' : 'Read More'}
                  </button>
                </div>
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
                  <p className="text-gray-600 leading-relaxed">We perform clear, step-by-step lookovers of how your organization works.</p>
                </div>

                <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors bg-white">
                  <p className="text-4xl md:text-5xl font-light text-gray-300 mb-4">02</p>
                  <h3 className="text-xl font-light text-gray-900 mb-3">Finding Risks and Gaps</h3>
                  <p className="text-gray-600 leading-relaxed">Our teams are highly skilled at finding hidden risks and costly delays.</p>
                </div>

                <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors bg-white">
                  <p className="text-4xl md:text-5xl font-light text-gray-300 mb-4">03</p>
                  <h3 className="text-xl font-light text-gray-900 mb-3">Designing Practical Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">We create practical, evidence-backed roadmaps that fit your team.</p>
                </div>

                <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors bg-white">
                  <p className="text-4xl md:text-5xl font-light text-gray-300 mb-4">04</p>
                  <h3 className="text-xl font-light text-gray-900 mb-3">Step-by-Step Help</h3>
                  <p className="text-gray-600 leading-relaxed">We work side by side with your team as they learn new ways.</p>
                </div>

                <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors bg-white">
                  <p className="text-4xl md:text-5xl font-light text-gray-300 mb-4">05</p>
                  <h3 className="text-xl font-light text-gray-900 mb-3">Tracking Progress</h3>
                  <p className="text-gray-600 leading-relaxed">We track real-time progress and show your team how to stay on track.</p>
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
  )
}
