import Navbar from './components/navbar';
import Footer from './components/footer';
import PathwayCards from './components/home/PathwayCards';
import PromiseStrip from './components/home/PromiseStrip';
import BottomNavStrip from './components/home/BottomNavStrip';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/11.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-gray-900/30"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-6">Impact Delivery Group</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-8">
              Beyond Aid. Beyond Relief.<br/>
              <span className="font-semibold">Building Self-Reliant Systems.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl">
             We build strong, locally run public services, infrastructure networks, and economic frameworks in emerging communities. By focusing on smart institutional planning, everyday process updates, and long-term business growth, we transform temporary charity projects into permanent, self-sufficient local systems.
             </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/what-we-do" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-sm font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors duration-300"
              >
                What We Do
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm uppercase tracking-[0.2em] text-gray-500 mb-12">Trusted by leaders worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            <div className="text-xl font-light text-gray-600">140+ Countries</div>
            <div className="text-xl font-light text-gray-600">1000+ Engagements</div>
            <div className="text-xl font-light text-gray-600">25+ Years Experience</div>
          </div>
        </div>
      </section>

      {/* Pathway Cards */}
      <PathwayCards />

      {/* Promise Strip */}
      <PromiseStrip />

      {/* Bottom Navigation Strip */}
      <BottomNavStrip />

      {/* Footer */}
      <Footer />
    </div>
  );
}