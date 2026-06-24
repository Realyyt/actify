import Footer from "../components/footer"
import Navbar from "../components/navbar"

export default function About() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-screen flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/22.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-3xl md:text-5xl font-bold text-white px-4 drop-shadow-lg">
            Moving Beyond Relief. Building For Resilience.
          </h1>
        </div>
      </div>

      {/* Alternating Image/Text Sections */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image Left, Text Right */}
            <div className="aspect-square overflow-hidden group">
              <img 
                src="/we.jpg" 
                alt="Our Approach" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div className="aspect-square bg-gradient-to-br from-teal-500/10 to-cyan-500/10 p-8 md:p-16 flex flex-col justify-center relative group hover:from-teal-500/20 hover:to-cyan-500/20 transition-all duration-500">
              <h2 className="text-2xl md:text-4xl font-bold text-navy-800 mb-6">Our Philosophy</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                At Impact Delivery Group (IDG), we believe the true success of any social or infrastructure
                development project is measured by what happens after the funding stops. Traditional aid models
                often keep vulnerable communities dependent on donations. We are here to change that.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We are an expert consulting and implementation team that partners with governments, donors, and
                businesses to build strong, self-reliant communities.
              </p>
            </div>

            {/* Text Left, Image Right */}
            <div className="aspect-square bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-8 md:p-16 flex flex-col justify-center relative group hover:from-blue-500/20 hover:to-indigo-500/20 transition-all duration-500">
              <h2 className="text-2xl md:text-4xl font-bold text-navy-800 mb-6">How We Operate</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Led by experienced professionals and driven by clear, honest metrics, we turn temporary aid projects
                into permanent pathways for local growth and financial freedom.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We don&apos;t just hand out relief; we build systems that stay strong for good.
              </p>
            </div>
            <div className="aspect-square overflow-hidden group">
              <img 
                src="/work.jpg" 
                alt="Our Team in Action" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Feature Cards */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-3">What Makes Us Different</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-teal-500">
              <h3 className="text-xl font-semibold text-navy-800 mb-4">On-The-Ground Support</h3>
              <p className="text-gray-600 leading-relaxed">
                We don&apos;t just write reports and walk away. Our team stays on site to help your team put new plans
                into action, turning big ideas into smooth, successful daily operations.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-600">
              <h3 className="text-xl font-semibold text-navy-800 mb-4">A Built-In Handoff Plan</h3>
              <p className="text-gray-600 leading-relaxed">
                We design every project with a clear, step-by-step plan to hand over total ownership to local leaders
                from day one, ensuring long-term self-reliance.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-amber-500">
              <h3 className="text-xl font-semibold text-navy-800 mb-4">Clear, Honest Responsibility</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in clear responsibility, pairing data-driven leadership with everyday process updates for
                total efficiency and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
