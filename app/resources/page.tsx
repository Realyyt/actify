"use client"
import Image from "next/image"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { useState } from "react"
import Link from "next/link"

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "ALL RESOURCES" },
    { id: "life_insurance", name: "LIFE INSURANCE" },
    { id: "health", name: "HEALTH INSURANCE" },
    { id: "medicare", name: "MEDICARE" },
    { id: "dental", name: "DENTAL" },
    { id: "vision", name: "VISION" },
    { id: "educational", name: "EDUCATIONAL MATERIALS" },
    { id: "comparison", name: "COMPARISON GUIDES" }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/lead.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-gray-900/30"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-6">RESOURCES</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Digital Resources and Materials
            </h1>
          </div>
        </div>
      </section>

      {/* Resources Description */}
      <div className="py-20 md:py-32 flex justify-center bg-gray-50">
        <div className="max-w-4xl text-center px-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Digital Resource Library</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Access our comprehensive collection of materials, including product guides and educational materials. These resources are designed to help you make informed decisions.
          </p>
        </div>
      </div>

      {/* Resources Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row">
            {/* Category Sidebar */}
            <div className="lg:w-1/4 mb-8 lg:mb-0">
              <ul className="space-y-2 md:space-y-4 text-center md:text-left pr-0 md:pr-8">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      className={`text-xs md:text-sm font-medium ${
                        selectedCategory === cat.id ? "text-gray-900 font-semibold" : "text-gray-600 hover:text-gray-900"
                      }`}
                      onClick={() => setSelectedCategory(cat.id)}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Grid */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                <div className="col-span-full flex flex-col items-center justify-center py-16 px-4 text-center bg-gray-50">
                  <div className="w-24 h-24 mb-6 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-3">Coming Soon</h3>
                  <p className="text-gray-600 max-w-md">
                    We&apos;re working hard to bring you valuable resources and materials. Stay tuned for updates!
                  </p>
                </div>
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
