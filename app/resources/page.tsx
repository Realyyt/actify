"use client"
import Image from "next/image"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { useState } from "react"
import Link from "next/link"

// Define the resource type
// type Resource = {
//   id: number
//   title: string
//   type: string
//   category: string[]
//   thumbnail: string
//   downloadUrl?: string
//   videoUrl?: string
// }

export default function Resources() {
  // State for the selected category
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Resource categories
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
    <div className="resources-container">
      <Navbar />
      <section className="relative h-[50vh] md:h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/lead.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold text-white text-center max-w-4xl px-4">
          Digital Resources and Materials
        </h1>
      </section>

      {/* Resources Description */}
      <div className="py-24 md:py-48 flex justify-center bg-gray-50">
        <div className="max-w-4xl text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Digital Resource Library</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Access our comprehensive collection of materials, including product guides, and 
            educational materials. These resources are designed to help you 
            make informed decisions regarding any product of your choice.
          </p>
        </div>
      </div>

      {/* Resources Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* Category Sidebar */}
            <div className="lg:w-1/4 mb-8 lg:mb-0">
              <ul className="space-y-2 md:space-y-4 text-center md:text-right pr-0 md:pr-8">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      className={`text-xs md:text-sm font-medium ${
                        selectedCategory === cat.id ? "text-teal-500 font-bold" : "text-gray-700 hover:text-teal-500"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="col-span-full flex flex-col items-center justify-center py-16 px-4 text-center">
                  <div className="w-24 h-24 mb-6 rounded-full bg-teal-100 flex items-center justify-center">
                    <svg className="w-12 h-12 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Coming Soon</h3>
                  <p className="text-gray-600 max-w-md">
                    We&apos;re working hard to bring you valuable resources and materials. Stay tuned for updates!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2">
        <Link
          href="/contact"
          className="bg-teal-500 py-12 md:py-20 flex items-center justify-center text-white font-bold tracking-wider text-lg md:text-xl"
        >
          <span>CONTACT US &gt;</span>
        </Link>
        <Link
          href="/careers"
          className="bg-purple-800 py-12 md:py-20 flex items-center justify-center text-white font-bold tracking-wider text-lg md:text-xl"
        >
          <span>JOIN OUR TEAM &gt;</span>
        </Link>
      </section>

      <Footer />
    </div>
  )
}
