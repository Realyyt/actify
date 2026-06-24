"use client"
import Link from "next/link"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { Shield, Users, Globe2, Wallet, Briefcase, BarChart2 } from "lucide-react"

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
            <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-6">What We Do</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
              Aid-To-Trade: Transforming assistance into economic independence and sustainable growth.
            </h1>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Our Approach: Aid-To-Trade Model
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Impact Delivery Group, we turn aid into trade by fostering economic independence through proper protection, quality leadership, locally-led initiatives, market-based solutions, access to capital and sustainable growth. We believe development must move beyond short-term assistance, ensuring communities lead, thrive, and build lasting prosperity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors">
              <div className="text-gray-900 mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3">Proper Protection</h3>
              <p className="text-gray-600">
                Safeguarding economic security, healthcare access, and essential resources, ensuring individuals and communities have the foundation to grow and succeed.
              </p>
            </div>

            <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors">
              <div className="text-gray-900 mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3">Quality Leadership Through Delivery Units</h3>
              <p className="text-gray-600">
                Strengthening governance, institutions, and organizations by embedding highly skilled delivery units that drive mission-critical initiatives, enhance efficiency, and improve impact.
              </p>
            </div>

            <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors">
              <div className="text-gray-900 mb-4">
                <Globe2 size={32} />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3">Locally-Led Development & Ownership</h3>
              <p className="text-gray-600">
                Empowering communities as architects of their own futures, ensuring solutions are tailored to local priorities, shaped by regional expertise, and powered by shared investment.
              </p>
            </div>

            <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors">
              <div className="text-gray-900 mb-4">
                <Wallet size={32} />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3">Access to Capital</h3>
              <p className="text-gray-600">
                Expanding financial access through government grants, private-sector investment and public-private partnerships foster innovation, job-creation and institutional growth.
              </p>
            </div>

            <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors">
              <div className="text-gray-900 mb-4">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3">Market-Based Solutions</h3>
              <p className="text-gray-600">
                Investing in enterprise-driven models, collaborating with national governments, private corporations, and local institutions to create sustainable jobs, trade opportunities, and economic resilience.
              </p>
            </div>

            <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors">
              <div className="text-gray-900 mb-4">
                <BarChart2 size={32} />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3">Sustainable Growth</h3>
              <p className="text-gray-600">
                Moving beyond aid dependency by building stronger systems, smarter investments, and scalable solutions, ensuring long-term prosperity through trade, innovation, and capital access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-8">
              Why It Matters
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The future of development lies in true partnership, where former aid recipient countries lead their own progress. By shifting the narrative from ongoing charity to investing in self-sufficiency, we ensure that aid builds resilience, fosters entrepreneurship, and strengthens local economies.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We collaborate with governments, businesses, and institutions to transform aid into opportunity, aligning global resources with local leadership to deliver lasting impact. Development must be owned, driven, and sustained by communities—not just received.
            </p>
            <p className="text-gray-900 text-xl font-light italic">
              At IDG, Aid-To-Trade is more than a strategy; it's a commitment to lasting change.
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
