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
            <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-6">ABOUT US</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
              Moving Beyond Relief. Building For Resilience.
            </h1>
          </div>
        </div>
      </section>

      {/* About Us Content Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At Impact Delivery Group (IDG), we believe the true success of any social or infrastructure development project is measured by what happens after the funding stops. Traditional aid models often keep vulnerable communities dependent on donations. We are here to change that.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are an expert consulting and implementation team that partners with governments, donors, and businesses to build strong, self-reliant communities. Led by experienced professionals and driven by clear, honest metrics, we turn temporary aid projects into permanent pathways for local growth and financial freedom. We don&apos;t just hand out relief; we build systems that stay strong for good.
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
