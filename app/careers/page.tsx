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

      {/* Careers Content Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join Our Mission
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              To fulfill IDG&apos;s mission of transitioning aid into trade and fostering sustainable economic independence, consultants will play key roles in strategy, implementation, and capacity-building. Here are some key positions that align with IDG&apos;s objectives:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Position Cards */}
            {[
              {
                title: "Aid to Trade Strategy Consultant",
                responsibilities: [
                  "Develop and refine strategies to transition aid programs into long-term trade and economic initiatives.",
                  "Conduct research on global trade frameworks and economic resilience models.",
                  "Advise governments, institutions, and organizations on policy reforms and market-driven development."
                ]
              },
              {
                title: "Market-Based Solutions Specialist",
                responsibilities: [
                  "Design and implement enterprise-driven solutions for local economic growth.",
                  "Strengthen partnerships between private sector actors and development agencies.",
                  "Provide technical guidance on sustainable business models that foster self-sufficiency."
                ]
              },
              {
                title: "Locally-Led Development Consultant",
                responsibilities: [
                  "Support national governments and community organizations in creating locally-owned initiatives.",
                  "Ensure policies and programs align with local priorities, cultural contexts, and long-term sustainability.",
                  "Facilitate collaboration between stakeholders to enhance effectiveness and impact."
                ]
              },
              {
                title: "Delivery Unit Advisor",
                responsibilities: [
                  "Assist in setting up and managing delivery units within government agencies and organizations.",
                  "Provide expertise in governance efficiency, institutional reform, and leadership support.",
                  "Implement data-driven decision-making models to improve development impact."
                ]
              },
              {
                title: "Trade and Investment Consultant",
                responsibilities: [
                  "Guide private and public sector entities in identifying trade opportunities and investment pathways.",
                  "Analyze market trends to optimize supply chains and business growth.",
                  "Support businesses in navigating trade agreements and global market integration."
                ]
              },
              {
                title: "Sustainability and Impact Analyst",
                responsibilities: [
                  "Measure the effectiveness of Aid to Trade programs and market-based initiatives.",
                  "Ensure projects align with sustainable development goals and long-term economic resilience.",
                  "Conduct impact assessments and data-driven evaluations for continuous improvement."
                ]
              },
              {
                title: "Policy Advocacy and Communications Consultant",
                responsibilities: [
                  "Develop messaging to shift the global narrative from charity-based aid to economic self-sufficiency.",
                  "Engage with policymakers, business leaders, and development organizations to drive strategic dialogues.",
                  "Lead public awareness campaigns on the benefits of Aid to Trade and locally-led development."
                ]
              },
              {
                title: "Health/Life Insurance Provider",
                responsibilities: [
                  "Expand access to sustainable health and life insurance by collaborating with governments, private sector partners, and financial institutions.",
                  "Develop locally-driven insurance frameworks that ensure financial protection, risk management, and long-term economic stability.",
                  "Strengthen public-private partnerships to create scalable, market-based solutions for community financial security and resilience."
                ]
              }
            ].map((position, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:border-teal-500 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{position.title}</h3>
                <ul className="space-y-2 mb-6">
                  {position.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <Link href="/contact" className="text-teal-500 hover:text-teal-600 font-medium">
                    Learn More
                  </Link>
                  <Link href="/contact" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors">
                    APPLY HERE
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-700 mb-8">
              Each of these positions ensures IDG&apos;s mission translates into actionable change, fostering economic resilience, market-led growth, and locally-driven success.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Important Note</h4>
              <p className="text-gray-700">
                Please note that all positions posted on this site are subject to funding availability. While we strive to ensure long-term sustainability for our roles, final hiring decisions may be contingent on funding approvals, grant allocations, and evolving project needs.
              </p>
              <p className="text-gray-700 mt-4">
                Thank you for your interest in joining IDG—we value your passion, expertise, and commitment to shaping a more resilient and equitable future.
              </p>
            </div>
          </div>
        </div>
      </section>

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