"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import Footer from "../components/footer"
import { ChevronLeft, ChevronRight, HandMetal, Heart, MessageSquare, PartyPopper, Target } from "lucide-react"
import Navbar from "../components/navbar"
export default function WhoWeAre() {
  const [activeCardIndex, setActiveCardIndex] = React.useState(2) // Start with BE UNSTOPPABLE as active

  const cards = [
    {
      title: "BE RESPONSIBLE",
      description: "Own it all and don't blame others, take initiative and cause results.",
      color: "bg-teal-600",
      hoverColor: "hover:bg-teal-500",
      icon: <Target className="w-12 h-12 text-white" />,
      image: "/res.jpg", // Replace with actual image path
    },
    {
      title: "BE FUN",
      description: "Enjoy your work, enjoy being here, be committed and unattached to the company's success.",
      color: "bg-amber-700",
      hoverColor: "hover:bg-amber-600",
      icon: <PartyPopper className="w-12 h-12 text-white" />,
      image: "/fun.jpg", // Replace with actual image path
    },
    {
      title: "BE UNSTOPPABLE",
      description: "Have edge, make tough decisions, have a make it happen attitude.",
      color: "bg-blue-700",
      hoverColor: "hover:bg-blue-600",
      icon: <HandMetal className="w-12 h-12 text-white" />,
      image: "/un.jpg", // Replace with actual image path
    },
    {
      title: "BE DIRECT",
      description: "Communicate powerfully, be engaged, straightforward and factual, listen and collaborate.",
      color: "bg-purple-700",
      hoverColor: "hover:bg-purple-600",
      icon: <MessageSquare className="w-12 h-12 text-white" />,
      image: "/drive.jpg", // Replace with actual image path
    },
    {
      title: "BE PASSIONATE",
      description: "Care deeply, strive to perform, love to win.",
      color: "bg-green-700",
      hoverColor: "hover:bg-green-600",
      icon: <Heart className="w-12 h-12 text-white" />,
      image: "/focus.jpg", // Replace with actual image path
    },
  ]

  const handlePrev = () => {
    setActiveCardIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveCardIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="who-we-are-container">
       <Navbar/>
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/hmm.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <h1 className="relative z-10 text-5xl font-bold text-white text-center max-w-4xl px-4">
          BIG COMPANY TALENT SMALL COMPANY CULTURE
        </h1>
      </section>

            {/* Testimonial Section */}
            <div className="py-48 flex justify-center bg-gray-50">
        <div className="max-w-4xl flex border-l-4 border-r-4 border-teal-500 px-12 mx-4">
          <div className="text-teal-500 text-7xl">&quot;</div>
          <div className="px-8 text-center">
            <p className="text-gray-700 text-xl md:text-2xl mb-8 leading-relaxed">
              The most rewarding part of this job is seeing the relief on client&rsquo;s faces when they realize they&rsquo;re
              protected and their families are secure.
            </p>
            <p className="font-medium text-lg">Sarah Thompson</p>
            <p className="text-sm text-gray-600">Senior Insurance Advisor</p>
          </div>
          <div className="text-teal-500 text-7xl self-start">&rdquo;</div>
        </div>
      </div>

      {/* Cards Section - Grid layout with all cards visible */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mb-16 text-navy-800">The Actify Ethos: Authenticity in Action</h2>

          {/* Mobile view - Carousel style with navigation */}
          <div className="md:hidden relative">
            <div className="flex items-center justify-center">
              <div className="w-full">
                <div
                  className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
                >
                  {/* Image section */}
                  <div className="relative h-64 w-full">
                    <Image
                      src={cards[activeCardIndex].image || "/placeholder.svg"}
                      alt={cards[activeCardIndex].title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  {/* Icon with creative border */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2 border-2 border-white/50 shadow-lg">
                    <div className="bg-white/20 rounded-full p-3 border border-white/30">
                      {cards[activeCardIndex].icon}
                    </div>
                  </div>
                  {/* Content section */}
                  <div className={`${cards[activeCardIndex].color} p-8 text-white`}>
                    <h3 className="text-2xl font-bold text-center mb-3">{cards[activeCardIndex].title}</h3>
                    <p className="text-center">{cards[activeCardIndex].description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
              aria-label="Next card"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 gap-2 flex-wrap">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCardIndex(index)}
                  className={`h-3 w-3 rounded-full ${index === activeCardIndex ? "bg-navy-800" : "bg-gray-300"}`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop view - Grid layout with all cards visible */}
          <div className="hidden md:grid grid-cols-5 gap-4 overflow-x-auto">
            {cards.slice(0, 5).map((card, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:shadow-xl ${card.hoverColor}`}
              >
                {/* Decorative border */}
                <div className="absolute inset-0 border-4 border-white/20 rounded-2xl pointer-events-none z-10"></div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-10"></div>

                {/* Image section */}
                <div className="relative h-64 w-full">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-90"
                  />
                </div>

                {/* Icon container with creative design */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2 border-2 border-white/50 shadow-lg z-20">
                  <div className="bg-white/20 rounded-full p-3 border border-white/30">{card.icon}</div>
                </div>

                {/* Content section */}
                <div className={`${card.color} p-6 text-white h-56 flex flex-col items-center justify-center`}>
                  <h3 className="text-xl font-bold text-center mb-3">{card.title}</h3>
                  <p className="text-center text-sm leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional cards row (only visible on larger screens) */}
          {cards.length > 5 && (
            <div className="hidden md:grid grid-cols-2 gap-4 mt-4 max-w-3xl mx-auto">
              {cards.slice(5).map((card, index) => (
                <div
                  key={index + 5}
                  className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:shadow-xl ${card.hoverColor}`}
                >
                  {/* Decorative border */}
                  <div className="absolute inset-0 border-4 border-white/20 rounded-2xl pointer-events-none z-10"></div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-10"></div>

                  {/* Image section */}
                  <div className="relative h-64 w-full">
                    <Image
                      src={card.image || "/placeholder.svg"}
                      alt={card.title}
                      layout="fill"
                      objectFit="cover"
                      className="opacity-90"
                    />
                  </div>

                  {/* Icon container with creative design */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2 border-2 border-white/50 shadow-lg z-20">
                    <div className="bg-white/20 rounded-full p-3 border border-white/30">{card.icon}</div>
                  </div>

                  {/* Content section */}
                  <div className={`${card.color} p-6 text-white h-56 flex flex-col items-center justify-center`}>
                    <h3 className="text-xl font-bold text-center mb-3">{card.title}</h3>
                    <p className="text-center text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>



      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-6 p-12">
          <h2 className="text-3xl font-bold text-navy-800 tracking-wide">HEALTH AND WELLNESS</h2>
          <p className="text-gray-600 leading-relaxed">
            We offer a comprehensive benefits package to our employees, including health, dental, vision and short and
            long term disability insurance.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Some of our offices also have on-site gyms to help our employees reduce stress and stay in shape.
          </p>
        </div>
        <div className="relative h-[600px]">
          <Image src="/game.jpg" alt="Employee exercising at on-site gym" layout="fill" objectFit="cover" />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[600px]">
          <Image src="/w2.jpg" alt="Employee working on career development" layout="fill" objectFit="cover" />
        </div>
        <div className="space-y-6 p-12">
          <h2 className="text-3xl font-bold text-navy-800 tracking-wide">CAREER DEVELOPMENT AND FUTURE PLANNING</h2>
          <p className="text-gray-600 leading-relaxed">
            To help ensure our employees are getting the most from their careers at TRANZACT, we offer paid trainings,
            licensing opportunities, 401k, life insurance, and uncapped bonus potential.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-6 p-12">
          <h2 className="text-3xl font-bold text-navy-800 tracking-wide">WORK-LIFE BALANCE</h2>
          <p className="text-gray-600 leading-relaxed">
            We understand the importance of balancing work and personal life. That&apos;s why we offer flexible
            schedules, remote work options, and generous paid time off.
          </p>
        </div>
        <div className="relative h-[600px]">
          <Image src="/wc1.jpg" alt="Employee enjoying work-life balance" layout="fill" objectFit="cover" />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[600px]">
          <Image src="/w.jpg" alt="Team collaborating in a modern office space" layout="fill" objectFit="cover" />
        </div>
        <div className="space-y-6 p-12">
          <h2 className="text-3xl font-bold text-navy-800 tracking-wide">COMPANY CULTURE</h2>
          <p className="text-gray-600 leading-relaxed">
            At TRANZACT, we foster a culture of collaboration, innovation, and mutual respect. Our team-oriented
            environment encourages open communication, continuous learning, and celebrating each other&apos;s successes.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-2">
        <Link
          href="/contact"
          className="bg-teal-500 py-20 flex items-center justify-center text-white font-bold tracking-wider text-xl"
        >
          <span>CONTACT US &gt;</span>
        </Link>
        <Link
          href="/careers"
          className="bg-purple-800 py-20 flex items-center justify-center text-white font-bold tracking-wider text-xl"
        >
          <span>JOIN OUR TEAM &gt;</span>
        </Link>
      </section>

      <Footer />
    </div>
  )
}

