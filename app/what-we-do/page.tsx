"use client"

import Link from "next/link"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import {
  Shield,
  Briefcase,
  Users,
  ArrowRight,

  Mail,
  BarChart2,
  Globe2,
  Wallet
} from "lucide-react"

export default function WhatWeDo() {
  return (
    <div className="who-we-are-container">
      <Navbar />
      
      {/* Hero Section with Parallax Effect */}
      <section 
        className="relative h-[60vh] md:h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/we.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
        <div className="relative z-10 text-center max-w-5xl px-6 md:px-8 py-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-teal-400">Aid-To-Trade: </span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Transforming Assistance into Economic Independence and Sustainable Growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contact Us
            </Link>
            
          </div>
        </div>
      </section>

      {/* What We Do Section - World Class Design */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden" id="what-we-do">
        {/* Animated background shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-100 rounded-full opacity-30 blur-2xl -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-2xl -z-10 animate-pulse-slow"></div>
        <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold text-navy-800 mb-6 tracking-tight drop-shadow-lg leading-tight">
            What We Do
          </h2>
          <div className="flex justify-center mb-8">
            <span className="inline-block w-24 h-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500"></span>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-8 drop-shadow-lg bg-white/70 rounded-xl px-6 py-4 inline-block shadow-lg">
            At Impact Delivery Group , we turn aid into trade by fostering economic independence through personal protection, quality leadership,locally-led initiatives,market-based solutions,access to capital and sustainable growth. We believe development must move beyond short-term assistance, ensuring communities lead, thrive, and build lasting prosperity.
          </p>
        </div>
      </section>

     

      {/* Our Approach: Aid-To-Trade Model Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-10 text-center">
            Our Approach: <span className="text-teal-600">Aid-To-Trade Model</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-xl p-8 border-t-4 border-teal-500">
              <div className="bg-teal-500 text-white p-4 rounded-full mb-4 shadow-lg">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-2">Proper Protection</h3>
              <p className="text-gray-600">
                Safeguarding economic security, healthcare access, and essential resources, ensuring individuals and communities have the foundation to grow and succeed.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-600">
              <div className="bg-blue-600 text-white p-4 rounded-full mb-4 shadow-lg">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-2">Quality Leadership Through Delivery Units</h3>
              <p className="text-gray-600">
                Strengthening governance, institutions, and organizations by embedding highly skilled delivery units that drive mission-critical initiatives, enhance efficiency, and improve impact.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-xl p-8 border-t-4 border-amber-500">
              <div className="bg-amber-500 text-white p-4 rounded-full mb-4 shadow-lg">
                <Globe2 size={32} />
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-2">Locally-Led Development & Ownership</h3>
              <p className="text-gray-600">
                Empowering communities as architects of their own futures, ensuring solutions are tailored to local priorities, shaped by regional expertise, and powered by shared investment.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-xl p-8 border-t-4 border-purple-500">
              <div className="bg-purple-500 text-white p-4 rounded-full mb-4 shadow-lg">
                <Wallet size={32} />
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-2">Access to Capital</h3>
              <p className="text-gray-600">
                Expanding financial access through government grants, private-sector investment and public-private partnerships foster innovation ,job-creation and institutional growth. Strengthening financial inclusion ensures sustainable economic developent and long-term resilience.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-600">
              <div className="bg-green-600 text-white p-4 rounded-full mb-4 shadow-lg">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-2">Market-Based Solutions</h3>
              <p className="text-gray-600">
                Investing in enterprise-driven models, collaborating with national governments, private corporations, and local institutions to create sustainable jobs, trade opportunities, and economic resilience.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-xl p-8 border-t-4 border-indigo-600 md:col-span-2 lg:col-span-1">
              <div className="bg-indigo-600 text-white p-4 rounded-full mb-4 shadow-lg">
                <BarChart2 size={32} />
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-2">Sustainable Growth</h3>
              <p className="text-gray-600">
                Moving beyond aid dependency by building stronger systems, smarter investments, and scalable solutions, ensuring long-term prosperity through trade, innovation, and capital access.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Why It Matters Section - World Class Design */}
       <section className="relative py-20 px-4 bg-gradient-to-br from-teal-50 via-white to-blue-100 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-teal-200 rounded-full opacity-20 blur-2xl -z-10 animate-pulse-slow"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <svg className="w-16 h-16 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6 tracking-tight">Why It Matters</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-6 font-medium">
            The future of development lies in true partnership, where former aid recipient countries lead their own progress. By shifting the narrative from ongoing charity to investing in self-sufficiency, we ensure that aid builds resilience, fosters entrepreneurship, and strengthens local economies.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-6 font-medium">
            We collaborate with governments, businesses, and institutions to transform aid into opportunity, aligning global resources with local leadership to deliver lasting impact. Development must be owned, driven, and sustained by communities—not just received.
          </p>
          <p className="text-2xl font-bold text-teal-700 italic bg-white/80 rounded-xl px-6 py-4 inline-block shadow-md">
            At IDG, Aid-To-Trade is more than a strategy; it&lsquo;s a commitment to lasting change.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <Link
          href="/contact"
          className="bg-teal-500 py-16 md:py-24 flex flex-col items-center justify-center text-white hover:bg-teal-600 transition-colors group"
        >
          <div className="bg-white/20 p-4 rounded-full mb-4 group-hover:bg-white/30 transition-colors">
            <Mail size={32} />
          </div>
          <span className="text-2xl font-bold tracking-wider mb-2">CONTACT US</span>
          <span className="text-white/80">Reach out to our team</span>
          <ArrowRight className="mt-4 group-hover:translate-x-2 transition-transform" size={24} />
        </Link>
        <Link
          href="/careers"
          className="bg-indigo-700 py-16 md:py-24 flex flex-col items-center justify-center text-white hover:bg-indigo-800 transition-colors group"
        >
          <div className="bg-white/20 p-4 rounded-full mb-4 group-hover:bg-white/30 transition-colors">
            <Briefcase size={32} />
          </div>
          <span className="text-2xl font-bold tracking-wider mb-2">JOIN OUR TEAM</span>
          <span className="text-white/80">Explore career opportunities</span>
          <ArrowRight className="mt-4 group-hover:translate-x-2 transition-transform" size={24} />
        </Link>
      </section>

      <Footer />
    </div>
  )
}
