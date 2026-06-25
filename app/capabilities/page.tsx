"use client"
import Link from "next/link"
import React from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

export default function Capabilities() {
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
            <source src="/home.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-gray-900/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-6">Why This Matters</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
              Why This Matters
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              When public services and utilities rely on permanent charity, they become incredibly fragile to sudden budget cuts, changing global rules, or unexpected crises. Lasting social safety and financial health cannot be bought with short-term grants—it must be grown from within using smart planning and honest daily habits.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              By shifting our focus from quick relief to permanent strength, we protect communities from system breakdowns, maximize every dollar you spend, and make sure families have access to a thriving, local ecosystem that lasts for generations.
            </p>
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
