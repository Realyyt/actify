"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

export default function WhoWeAre() {
  const heroTexts = [
    "At Impact Delivery Group,innovation and empowerment take center stage.",
  ];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 3000); // show for 3s
    return () => clearTimeout(timeout);
  }, [currentIdx]);

  useEffect(() => {
    if (!show) {
      const timeout = setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % heroTexts.length);
        setShow(true);
      }, 500); // fade out for 0.5s
      return () => clearTimeout(timeout);
    }
  }, [show, heroTexts.length]);

  return (
    <div className="who-we-are-container">
      <Navbar/>
      <section className="relative h-[50vh] md:h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/hmm.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1
            className={`
              text-white text-2xl md:text-5xl font-bold text-center max-w-4xl px-4 drop-shadow-lg transition-all duration-500
              ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
            `}
          >
            {heroTexts[currentIdx]}
          </h1>
        </div>
      </section>

    

           {/* Aid to Trade Section */}
           <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-1 rounded-full">OUR APPROACH</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mt-4 mb-6">
              Aid-To-Trade: Advancing Proper Protection, Quality Leadership, Locally-led initiatives,Access to capital, Market-Based Solutions and Sustainable Growth
              </h2>
              <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-teal-100 rounded-full -mr-20 -mt-20 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-100 rounded-full -ml-20 -mb-20 opacity-50"></div>
              
              <p className="text-gray-700 text-lg mb-8 relative z-10">
                At Impact Delivery Group , Aid-To-Trade is more than a model—it&lsquo;s a strategy for long-term economic independence. By integrating personal protection, quality leadership, market-driven solutions, and sustainable development, we ensure aid transitions into lasting trade opportunities.
              </p>

              <div className="grid md:grid-cols-2 gap-6 relative z-10">
                <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl shadow-sm border border-teal-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-navy-800 mb-3 flex items-center">
                    <span className="bg-teal-500 text-white p-2 rounded-lg mr-3">1</span>
                    Proper Protection
                  </h3>
                  <p className="text-gray-600">Safeguarding communities by ensuring equitable access to economic security, healthcare, and essential resources.</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-navy-800 mb-3 flex items-center">
                    <span className="bg-blue-500 text-white p-2 rounded-lg mr-3">2</span>
                    Quality Leadership
                  </h3>
                  <p className="text-gray-600">Strengthening governance and institutional efficiency by embedding delivery units within organizations, governments, and institutions to drive high-impact initiatives.</p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl shadow-sm border border-teal-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-navy-800 mb-3 flex items-center">
                    <span className="bg-teal-500 text-white p-2 rounded-lg mr-3">3</span>
                    Local Ownership
                  </h3>
                  <p className="text-gray-600">Empowering communities as architects of their development futures – ensuring solutions reflect local needs, priorities, and expertise.</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-navy-800 mb-3 flex items-center">
                    <span className="bg-blue-500 text-white p-2 rounded-lg mr-3">4</span>
                    Access to Capital
                  </h3>
                  <p className="text-gray-600">Expanding financial access through government support, private investment and partnerships foster innovation, job creation and sustainable economic growth.</p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl shadow-sm border border-teal-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-navy-800 mb-3 flex items-center">
                    <span className="bg-teal-500 text-white p-2 rounded-lg mr-3">5</span>
                    Market-Based Solutions
                  </h3>
                  <p className="text-gray-600">Investing in enterprise-driven approaches that foster self-sufficiency, private-sector growth, and economic resilience.</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-navy-800 mb-3 flex items-center">
                    <span className="bg-blue-500 text-white p-2 rounded-lg mr-3">6</span>
                    Sustainable Growth
                  </h3>
                  <p className="text-gray-600">Moving beyond short-term aid by building stronger systems that enable leading prosperity through trade investment and innovation.</p>
                </div>
              </div>

              <div className="mt-8 text-center relative z-10">
                <p className="text-gray-700 text-lg italic">
                  True development requires bold leadership, local engagement, and systems that sustain impact beyond aid dependency.Aid-To-Trade is how we turn assistance into opportunity—ensuring communities lead, markets thrive, and solutions endure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Aid to Trade Section
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl md:text-4xl font-bold mb-8 md:mb-16 text-navy-800">Empowering Agents, Transforming Insurance</h2>

          <div className="md:hidden relative">
            <div className="flex items-center justify-center">
              <div className="w-full">
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 md:h-64 w-full">
                    <Image
                      src={cards[activeCardIndex].image || "/placeholder.svg"}
                      alt={cards[activeCardIndex].title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-sm rounded-full p-1 md:p-2 border-2 border-white/50 shadow-lg">
                    <div className="bg-white/20 rounded-full p-2 md:p-3 border border-white/30">
                      {cards[activeCardIndex].icon}
                    </div>
                  </div>
                  <div className={`${cards[activeCardIndex].color} p-4 md:p-8 text-white`}>
                    <h3 className="text-xl md:text-2xl font-bold text-center mb-2 md:mb-3">{cards[activeCardIndex].title}</h3>
                    <p className="text-center text-sm md:text-base">{cards[activeCardIndex].description}</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 md:p-2 shadow-lg z-10"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 md:p-2 shadow-lg z-10"
              aria-label="Next card"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>

            <div className="flex justify-center mt-4 gap-2 flex-wrap">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCardIndex(index)}
                  className={`h-2 w-2 md:h-3 md:w-3 rounded-full ${index === activeCardIndex ? "bg-navy-800" : "bg-gray-300"}`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:shadow-xl ${card.hoverColor}`}
              >
                <div className="absolute inset-0 border-4 border-white/20 rounded-2xl pointer-events-none z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-10"></div>
                <div className="relative h-48 md:h-64 w-full">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-90"
                  />
                </div>
                <div className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-sm rounded-full p-1 md:p-2 border-2 border-white/50 shadow-lg z-20">
                  <div className="bg-white/20 rounded-full p-2 md:p-3 border border-white/30">{card.icon}</div>
                </div>
                <div className={`${card.color} p-4 md:p-6 text-white h-40 md:h-56 flex flex-col items-center justify-center`}>
                  <h3 className="text-lg md:text-xl font-bold text-center mb-2 md:mb-3">{card.title}</h3>
                  <p className="text-center text-xs md:text-sm leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center m-12">
            <p className="text-2xl font-bold text-indigo-500">
              Are you ready to make a difference with IDG? Let&lsquo;s lead the way!
            </p>
          </div>

          <div className="text-center">
            <a href="/contact" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-lg shadow-md">
              Get Help from a Licensed Insurance Provider
            </a>
          </div>

        </div>
      </section> */}



      {/* Health and Wellness Section 
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-4 p-6 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-800 tracking-wide">HEALTH AND WELLNESS</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We offer a comprehensive benefits package to our employees, including health, dental, vision and short and
            long term disability insurance.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Some of our offices also have on-site gyms to help our employees reduce stress and stay in shape.
          </p>
        </div>
        <div className="relative h-[300px] md:h-[600px]">
          <Image src="/game.jpg" alt="Employee exercising at on-site gym" layout="fill" objectFit="cover" />
        </div>
      </section>

     
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[300px] md:h-[600px]">
          <Image src="/w2.jpg" alt="Employee working on career development" layout="fill" objectFit="cover" />
        </div>
        <div className="space-y-4 p-6 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-800 tracking-wide">CAREER DEVELOPMENT AND FUTURE PLANNING</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            To help ensure our employees are getting the most from their careers at TRANZACT, we offer paid trainings,
            licensing opportunities, 401k, life insurance, and uncapped bonus potential.
          </p>
        </div>
      </section>

    
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-4 p-6 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-800 tracking-wide">WORK-LIFE BALANCE</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We understand the importance of balancing work and personal life. That&apos;s why we offer flexible
            schedules, remote work options, and generous paid time off.
          </p>
        </div>
        <div className="relative h-[300px] md:h-[600px]">
          <Image src="/wc1.jpg" alt="Employee enjoying work-life balance" layout="fill" objectFit="cover" />
        </div>
      </section>

     
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[300px] md:h-[600px]">
          <Image src="/w.jpg" alt="Team collaborating in a modern office space" layout="fill" objectFit="cover" />
        </div>
        <div className="space-y-4 p-6 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-800 tracking-wide">COMPANY CULTURE</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            At TRANZACT, we foster a culture of collaboration, innovation, and mutual respect. Our team-oriented
            environment encourages open communication, continuous learning, and celebrating each other&apos;s successes.
          </p>
        </div>
      </section>*/}

        {/* Solution Section (added based on provided image) */}
        <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left: Text */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">Solution</h2>
            <p className="text-gray-700 text-lg">
              Our product – <span className="font-semibold text-teal-600">Aid to Trade</span> – shifts traditional aid into market-driven solutions, empowering communities and businesses to achieve economic independence and sustainable growth beyond external assistance.
            </p>
          </div>
          {/* Right: Hexagon Diagram */}
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="relative w-[440px] h-[440px] md:w-[520px] md:h-[520px]">
              {/* Center Hexagon */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-48 h-48 md:w-56 md:h-56 bg-teal-400 text-white flex items-center justify-center font-bold text-xl md:text-2xl rounded-[18%] shadow-lg border-4 border-white z-10 text-center px-2" style={{clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)'}}>
                  Aid-To-Trade
                </div>
              </div>
              {/* Surrounding Hexagons */}
              {/* Top */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0">
                <div className="w-36 h-36 md:w-40 md:h-40 bg-rose-200 text-navy-800 flex items-center justify-center text-center font-medium rounded-[18%] shadow border border-rose-100 text-base md:text-lg px-2" style={{clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)'}}>
                  Proper Protection
                </div>
              </div>
              {/* Top Right */}
              <div className="absolute right-0 top-[14%]">
                <div className="w-36 h-36 md:w-40 md:h-40 bg-rose-200 text-navy-800 flex items-center justify-center text-center font-medium rounded-[18%] shadow border border-rose-100 text-base md:text-lg px-2" style={{clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)'}}>
                  Quality Leadership
                </div>
              </div>
              {/* Bottom Right */}
              <div className="absolute right-0 bottom-[14%]">
                <div className="w-36 h-36 md:w-40 md:h-40 bg-rose-200 text-navy-800 flex items-center justify-center text-center font-medium rounded-[18%] shadow border border-rose-100 text-base md:text-lg px-2" style={{clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)'}}>
                  Locally-Led Initiatives
                </div>
              </div>
              {/* Bottom */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0">
                <div className="w-36 h-36 md:w-40 md:h-40 bg-rose-200 text-navy-800 flex items-center justify-center text-center font-medium rounded-[18%] shadow border border-rose-100 text-base md:text-lg px-2" style={{clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)'}}>
                  Access to Capital
                </div>
              </div>
              {/* Bottom Left */}
              <div className="absolute left-0 bottom-[14%]">
                <div className="w-36 h-36 md:w-40 md:h-40 bg-rose-200 text-navy-800 flex items-center justify-center text-center font-medium rounded-[18%] shadow border border-rose-100 text-base md:text-lg px-2" style={{clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)'}}>
                  Market-Based Solutions
                </div>
              </div>
              {/* Top Left corner*/}
              <div className="absolute left-0 top-[14%]">
                <div className="w-36 h-36 md:w-40 md:h-40 bg-rose-200 text-navy-800 flex items-center justify-center text-center font-medium rounded-[18%] shadow border border-rose-100 text-base md:text-lg px-2" style={{clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)'}}>
                  Sustainable Growth
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
      <section className="grid grid-cols-1 md:grid-cols-2">
        <Link
          href="/contact"
          className="bg-teal-500 py-10 md:py-20 flex items-center justify-center text-white font-bold tracking-wider text-lg md:text-xl"
        >
          <span>CONTACT US &gt;</span>
        </Link>
        <Link
          href="/careers"
          className="bg-purple-800 py-10 md:py-20 flex items-center justify-center text-white font-bold tracking-wider text-lg md:text-xl"
        >
          <span>JOIN OUR TEAM &gt;</span>
        </Link>
      </section>

      <Footer />
    </div>
  )
}

