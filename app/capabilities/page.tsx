import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Link from "next/link"

export default function Capabilities() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/home.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-gray-900/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-6">Our Approach</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
              Our Capabilities
            </h1>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6">Our Core Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* TQLA Framework: Image Left, Text Right */}
            <div className="aspect-[4/3] md:aspect-square overflow-hidden group" id="tqla">
              <img 
                src="/boss.jpg" 
                alt="Leadership & Responsibility" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div className="aspect-[4/3] md:aspect-square bg-gray-50 p-10 md:p-16 flex flex-col justify-center relative group">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">Leadership & Responsibility (The TQLA Framework)</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We use clear, numbers-based management methods. This means assigning specific jobs to specific owners,
                cutting out wasted effort, and setting up open tracking systems that local citizens can see and trust.
              </p>
            </div>

            {/* Aid-to-Trade: Text Left, Image Right */}
            <div className="aspect-[4/3] md:aspect-square bg-gray-50 p-10 md:p-16 flex flex-col justify-center relative group" id="aid-to-trade">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">The 'Aid-to-Trade' Model</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We help systems move away from constant dependence on aid and toward profitable trade and local fund
                generation. By connecting local services with business opportunities, we give communities the power to
                use their own talents and achieve real independence.
              </p>
            </div>
            <div className="aspect-[4/3] md:aspect-square overflow-hidden group">
              <img 
                src="/workc.jpg" 
                alt="Aid-to-Trade Model" 
                className="w-full h-full object-cover transition-transform duration-700" 
              />
            </div>

            {/* Constant Improvement: Image Left, Text Right */}
            <div className="aspect-[4/3] md:aspect-square overflow-hidden group" id="constant-optimization">
              <img 
                src="/lead.jpg" 
                alt="Constant Improvement" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div className="aspect-[4/3] md:aspect-square bg-gray-50 p-10 md:p-16 flex flex-col justify-center relative group">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">Constant Improvement</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Lasting impact requires constant practice and refinement. We build regular, simple data checks directly
                into your team's daily routines, keeping your systems flexible, legal, and highly efficient as things change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver Results — 5 Steps */}
      <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">How We Work</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6">How We Deliver Results</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors">
              <span className="text-4xl md:text-5xl font-light text-gray-300 mb-4 block">01</span>
              <h3 className="text-xl font-light text-gray-900 mb-3">Reviewing Daily Operations</h3>
              <p className="text-gray-600 leading-relaxed">
                We perform clear, step-by-step lookovers of how your organization works, ensuring your staff's daily habits
                truly line up with your big-picture goals.
              </p>
            </div>

            <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors">
              <span className="text-4xl md:text-5xl font-light text-gray-300 mb-4 block">02</span>
              <h3 className="text-xl font-light text-gray-900 mb-3">Finding Risks and Gaps</h3>
              <p className="text-gray-600 leading-relaxed">
                Our teams are highly skilled at finding hidden risks, costly delays, and confusing rules that slow your staff
                down or cause compliance errors.
              </p>
            </div>

            <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors">
              <span className="text-4xl md:text-5xl font-light text-gray-300 mb-4 block">03</span>
              <h3 className="text-xl font-light text-gray-900 mb-3">Designing Practical Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                We create practical, evidence-backed roadmaps that fit your team's budget and daily reality, completely
                focused on making things better.
              </p>
            </div>

            <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors">
              <span className="text-4xl md:text-5xl font-light text-gray-300 mb-4 block">04</span>
              <h3 className="text-xl font-light text-gray-900 mb-3">Step-by-Step Help</h3>
              <p className="text-gray-600 leading-relaxed">
                We do not just drop off advice; we work side by side with your team as they learn new ways of working,
                ensuring the shift is easy and permanent.
              </p>
            </div>

            <div className="p-8 border border-gray-200 hover:border-gray-400 transition-colors lg:col-start-2">
              <span className="text-4xl md:text-5xl font-light text-gray-300 mb-4 block">05</span>
              <h3 className="text-xl font-light text-gray-900 mb-3">Tracking Progress</h3>
              <p className="text-gray-600 leading-relaxed">
                We track real-time progress, evaluate whether changes are genuinely helping, and show your team how to
                make quick, ongoing adjustments to stay on track.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">Our Impact</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6">Why This Matters</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              When public services and utilities rely on permanent charity, they become incredibly fragile to sudden
              budget cuts, changing global rules, or unexpected crises. Lasting social safety and financial health cannot
              be bought with short-term grants — it must be grown from within using smart planning and honest daily habits.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              By shifting our focus from quick relief to permanent strength, we protect communities from system breakdowns,
              maximize every dollar you spend, and make sure families have access to a thriving, local ecosystem that lasts
              for generations.
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
          <span className="text-xl font-light tracking-wider">Contact Us</span>
        </Link>
        <Link
          href="/careers"
          className="bg-gray-800 py-16 md:py-24 flex items-center justify-center text-white hover:bg-gray-700 transition-colors group"
        >
          <span className="text-xl font-light tracking-wider">Join Our Team</span>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
