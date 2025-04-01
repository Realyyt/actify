"use client"
import Image from "next/image"
import Link from "next/link"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

export default function WhatWeDo() {
  return (
    <div className="who-we-are-container">
      <Navbar/>
      <section className="relative h-[50vh] md:h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/career.jpg"
            alt="Careers Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-4 space-y-4 md:space-y-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            YOU&apos;LL LOVE IT HERE
          </h1>
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-purple-600 blur opacity-75 animate-glow"></div>
            <p className="relative text-lg md:text-2xl lg:text-3xl font-medium text-white bg-black/50 px-4 py-2 md:px-6 md:py-3 rounded-lg backdrop-blur-sm animate-fade-in-up delay-100">
              Let&apos;s build something meaningful together.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <div className="py-16 md:py-32 lg:py-48 flex justify-center bg-gray-50">
        <div className="max-w-4xl flex border-l-4 border-r-4 border-teal-500 px-4 md:px-8 lg:px-12 mx-4">
          <div className="text-teal-500 text-4xl md:text-5xl lg:text-7xl">&quot;</div>
          <div className="px-4 md:px-6 lg:px-8 text-center">
            <p className="text-gray-700 text-base md:text-lg lg:text-xl xl:text-2xl mb-4 md:mb-6 lg:mb-8 leading-relaxed">
              What makes this role truly fulfilling is witnessing the moment clients understand their coverage is in place and their loved ones are safeguarded.
            </p>
            <p className="font-medium text-base md:text-lg">Sarah Thompson</p>
            <p className="text-xs md:text-sm text-gray-600">Senior Insurance Consultant</p>
          </div>
          <div className="text-teal-500 text-4xl md:text-5xl lg:text-7xl self-start">&rdquo;</div>
        </div>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2">
        <Link
          href="/contact"
          className="bg-teal-500 py-12 sm:py-16 md:py-20 flex items-center justify-center text-white font-bold tracking-wider text-lg sm:text-xl"
        >
          <span>CONTACT US &gt;</span>
        </Link>
        <Link
          href="/careers"
          className="bg-purple-800 py-12 sm:py-16 md:py-20 flex items-center justify-center text-white font-bold tracking-wider text-lg sm:text-xl"
        >
          <span>JOIN OUR TEAM &gt;</span>
        </Link>
      </section>

      <Footer />
    </div>
  )
}