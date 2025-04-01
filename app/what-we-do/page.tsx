"use client"
import Image from "next/image"
import Link from "next/link"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import {
  ThumbsUp,
  AtSign,
  Monitor,
  Target,
  BarChart,
  User,
  Search,
  Lightbulb,
  Code,
  Database,
  FileText,
} from "lucide-react"

export default function WhatWeDo() {
  return (
    <div className="who-we-are-container">
      <Navbar/>
      <section 
        className="relative h-[50vh] md:h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/we.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative z-10 text-2xl md:text-5xl font-bold text-white text-center max-w-4xl px-4">
          WE POWER GROWTH FOR LEADING INSURANCE COMPANIES
        </h1>
      </section>

      {/* Testimonial Section */}
      <div className="py-16 md:py-48 flex justify-center bg-gray-50">
        <div className="max-w-4xl flex border-l-4 border-r-4 border-teal-500 px-4 md:px-12 mx-4">
          <div className="text-teal-500 text-4xl md:text-7xl">&quot;</div>
          <div className="px-4 md:px-8 text-center">
            <p className="text-gray-700 text-base md:text-2xl mb-4 md:mb-8 leading-relaxed">
              What makes this role truly fulfilling is witnessing the moment clients understand their coverage is in place and their loved ones are safeguarded.
            </p>
            <p className="font-medium text-base md:text-lg">Sarah Thompson</p>
            <p className="text-xs md:text-sm text-gray-600">Senior Insurance Consultant</p>
          </div>
          <div className="text-teal-500 text-4xl md:text-7xl self-start">&rdquo;</div>
        </div>
      </div>

      {/* Marketing Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-teal-500 opacity-30 rounded-full clip-path-custom"></div>
                <Image
                  src="/res.jpg"
                  alt="Marketing professional pointing at screen"
                  width={600}
                  height={600}
                  className="rounded-full relative z-10"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-16">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mb-4 md:mb-6">MARKETING</h2>
              <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base">
                Our comprehensive marketing services empower insurance providers to outpace their rivals. By collaborating with TRANZACT, you gain access to a full spectrum of marketing resources tailored to your needs. We provide end-to-end solutions spanning search engine optimization, paid advertising, email campaigns, and social media strategies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <ThumbsUp className="text-teal-500 mr-2" size={20} />
                    <h3 className="text-base md:text-lg font-medium text-teal-600">SOCIAL</h3>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Our social media methodology guarantees that partner brands reach their ideal audience with precision timing and appropriate messaging.
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <AtSign className="text-teal-500 mr-2" size={20} />
                    <h3 className="text-base md:text-lg font-medium text-teal-600">EMAIL</h3>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">
                    We craft customized email initiatives to boost engagement metrics and foster stronger brand-consumer relationships.
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <Monitor className="text-teal-500 mr-2" size={20} />
                    <h3 className="text-base md:text-lg font-medium text-teal-600">WEBSITES</h3>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Our design philosophy is rooted in user analytics and experimentation to enhance performance metrics.
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <Target className="text-teal-500 mr-2" size={20} />
                    <h3 className="text-base md:text-lg font-medium text-teal-600">PPC</h3>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Our analytics-based advertising initiatives enable insurance providers to outperform competitors and optimize advertising spend.
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <BarChart className="text-teal-500 mr-2" size={20} />
                    <h3 className="text-base md:text-lg font-medium text-teal-600">SEO</h3>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">
                    We implement natural content approaches to enhance search visibility, drive site visits, and draw in potential clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-teal-500 opacity-30 rounded-full clip-path-custom"></div>
                <Image
                  src="/w2.jpg"
                  alt="Technology professional in pink blazer"
                  width={600}
                  height={600}
                  className="rounded-full relative z-10"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-16">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mb-4 md:mb-6">TECHNOLOGY</h2>
              <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base">
                Our tech offerings are analytics-based and adapt to the evolving requirements of our clients and collaborators. As insurance purchasing evolves, we ensure our partners maintain their competitive edge.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <Code className="text-teal-500 mr-2" size={20} />
                    <h3 className="text-base md:text-lg font-medium text-teal-600">WEBSITE DEVELOPMENT</h3>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">
                    We engineer streamlined, mobile-friendly web platforms designed to boost productivity and generate high-quality prospects.
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <Code className="text-teal-500 mr-2" size={20} />
                    <h3 className="text-base md:text-lg font-medium text-teal-600">PRODUCT DEVELOPMENT</h3>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">
                    We develop and sustain software solutions that interface with partner networks and leverage forecasting models to optimize business processes.
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <Database className="text-teal-500 mr-2" size={20} />
                    <h3 className="text-base md:text-lg font-medium text-teal-600">DATA SCIENCE</h3>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">
                    We create AI models for digital marketing auctions, lead acquisition, and distribution, enhancing the effectiveness of our sales and marketing expenditures.
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <FileText className="text-teal-500 mr-2" size={24} />
                    <h3 className="text-lg font-medium text-teal-600">DIGITAL CONTENT PUBLICATION</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    We develop online platforms that facilitate seamless content distribution across corporate, client, and media sites, driving qualified prospect generation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-16 order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-navy-700 mb-6">SALES</h2>
              <p className="text-gray-700 mb-8">
                Our licensed sales agents do more than just match customers with the right insurance policy, they offer
                specialized support to educate customers and give them back their purchasing power.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <User className="text-teal-500 mr-2" size={24} />
                    <h3 className="text-lg font-medium text-teal-600">LICENSING</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    TZ Insurance Solutions LLC will assist eligible sales professionals in obtaining a Life and/or
                    Health license.
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <Search className="text-teal-500 mr-2" size={24} />
                    <h3 className="text-lg font-medium text-teal-600">CASE MANAGEMENT</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Our Case Management team is dedicated to resolving application processing issues and providing
                    personalized support to the prospective insured client.
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <User className="text-teal-500 mr-2" size={24} />
                    <h3 className="text-lg font-medium text-teal-600">POST-SALES ENGAGEMENT</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    We offer specialized support to ensure applications are completed and policies are issued
                    successfully.
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <Lightbulb className="text-teal-500 mr-2" size={24} />
                    <h3 className="text-lg font-medium text-teal-600">INTEGRATED MEDIA AND SALES STRATEGY</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    We optimize our media action plan based on when and how our agents are most effective.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mb-10 lg:mb-0 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-teal-500 opacity-30 rounded-full clip-path-custom"></div>
                <Image
                  src="/focus.jpg"
                  alt="Sales professional with customer"
                  width={600}
                  height={600}
                  className="rounded-full relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-700 mb-6">PROFESSIONAL SERVICES</h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-10">
            Cignium is our professional services company. Our teams of technology professionals provide the support
            brands need to focus on the strategic efforts of their business and maximize the selling power of their
            agents. Some of our custom applications include product, offer and order management systems and
            customer/agent portals.
          </p>
          <div className="flex justify-center mb-4">
            <Image src="/placeholder.svg" alt="Cignium logo" width={200} height={80} className="mx-auto" />
          </div>
          <Link href="https://cignium.com" className="text-teal-500 hover:underline">
            Go to Cignium.com &gt;
          </Link>
        </div>
      </section>


      <section className="grid grid-cols-1 md:grid-cols-2">
        <Link
          href="/contact"
          className="bg-teal-500 py-12 md:py-20 flex items-center justify-center text-white font-bold tracking-wider text-lg md:text-xl hover:bg-teal-600 transition-colors"
        >
          <span>CONTACT US &gt;</span>
        </Link>
        <Link
          href="/careers"
          className="bg-purple-800 py-12 md:py-20 flex items-center justify-center text-white font-bold tracking-wider text-lg md:text-xl hover:bg-purple-900 transition-colors"
        >
          <span>JOIN OUR TEAM &gt;</span>
        </Link>
      </section>

      <Footer />
    </div>
  )
}

