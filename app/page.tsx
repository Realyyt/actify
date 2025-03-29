"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { 
  Phone, 
  Megaphone, 
  Handshake, 
  Cpu, 
  ArrowRight, 
  Facebook, 
  Linkedin, 
  Instagram, 
  ShieldCheck 
} from 'lucide-react';
import Navbar from './components/navbar';
export default function Home() {
  const [activeSection, setActiveSection] = useState('marketing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-teal-500 text-white py-3 px-4 flex justify-center items-center flex-wrap gap-2">
        <p className="mr-2 text-sm md:text-base">If you are already a SecureShield Insurance customer</p>
        <Link href="/customer-login" className="bg-blue-900 text-white px-4 py-1 mx-2 rounded hover:bg-blue-800 transition-colors">
          CLICK HERE
        </Link>
        <p className="mx-2 text-sm md:text-base">or call</p>
        <Link href="tel:1-888-555-1234" className="bg-blue-900 text-white px-4 py-1 rounded hover:bg-blue-800 transition-colors">
          1-888-555-1234
        </Link>
      </div>

      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[800px] flex items-center justify-center text-center">
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
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white z-10 px-4 tracking-wide">
          AUTHENTIC OUTCOMES FROM<br />AUTHENTIC INDIVIDUALS
        </h1>
      </div>

      {/* Testimonial Section */}
      <div className="py-48 flex justify-center bg-gray-50">
        <div className="max-w-4xl flex border-l-4 border-r-4 border-teal-500 px-12 mx-4">
          <div className="text-teal-500 text-7xl">"</div>
          <div className="px-8 text-center">
            <p className="text-gray-700 text-xl md:text-2xl mb-8 leading-relaxed">
              You never truly understand how significant of an impact you are making in people's lives until you get to speak with them and hear their stories.
            </p>
            <p className="font-medium text-lg">Michael Preston</p>
            <p className="text-sm text-gray-600">Licensed Insurance Sales Professional</p>
          </div>
          <div className="text-teal-500 text-7xl self-start">"</div>
        </div>
      </div>

      {/* Services Tabs with Video Background */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/home2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        <div className="relative z-10">
          {/* Tabs */}
          <div className="flex text-center ">
            <div 
              className={`w-1/3 py-10 px-4 cursor-pointer transition-colors ${activeSection === 'marketing' ? 'bg-white/90 text-blue-900 font-bold' : 'bg-black/30 text-white hover:bg-black/40'}`}
              onClick={() => setActiveSection('marketing')}
            >
              <h2 className="text-2xl">MARKETING</h2>
            </div>
            <div 
              className={`w-1/3 py-10 px-4 cursor-pointer transition-colors ${activeSection === 'sales' ? 'bg-white/90 text-blue-900 font-bold' : 'bg-black/30 text-white hover:bg-black/40'}`}
              onClick={() => setActiveSection('sales')}
            >
              <h2 className="text-2xl">SALES</h2>
            </div>
            <div 
              className={`w-1/3 py-10 px-4 cursor-pointer transition-colors ${activeSection === 'technology' ? 'bg-white/90 text-blue-900 font-bold' : 'bg-black/30 text-white hover:bg-black/40'}`}
              onClick={() => setActiveSection('technology')}
            >
              <h2 className="text-2xl">TECHNOLOGY</h2>
            </div>
          </div>

          {/* Content based on active section */}
          {activeSection === 'marketing' && (
            <div className="relative py-32 text-white">
              <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <div className="mb-8">
                  <Megaphone className="w-16 h-16 mx-auto" />
                </div>
                <h2 className="text-5xl mb-10 font-bold tracking-wide">MARKETING</h2>
                <p className="max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed">
                  We work across multiple marketing channels to <strong>generate leads</strong> for our partners and <strong>enhance brand recognition</strong> in the marketplace.
                </p>
                <div className="mt-12">
                  <Link href="/marketing" className="bg-orange-500 text-white px-10 py-4 inline-block text-lg font-medium hover:bg-orange-600 transition-colors">
                    LEARN MORE <ArrowRight className="inline-block ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'sales' && (
            <div className="relative py-32 text-white">
              <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <div className="mb-8">
                  <Handshake className="w-16 h-16 mx-auto" />
                </div>
                <h2 className="text-5xl mb-10 font-bold tracking-wide">SALES</h2>
                <p className="max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed">
                  Our sales professionals are dedicated to <strong>delivering exceptional results</strong> and building <strong>lasting relationships</strong> with our clients.
                </p>
                <div className="mt-12">
                  <Link href="/sales" className="bg-orange-500 text-white px-10 py-4 inline-block text-lg font-medium hover:bg-orange-600 transition-colors">
                    LEARN MORE <ArrowRight className="inline-block ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'technology' && (
            <div className="relative py-32 text-white">
              <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <div className="mb-8">
                  <Cpu className="w-16 h-16 mx-auto" />
                </div>
                <h2 className="text-5xl mb-10 font-bold tracking-wide">TECHNOLOGY</h2>
                <p className="max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed">
                  We leverage cutting-edge technology to <strong>streamline processes</strong> and <strong>drive innovation</strong> across all aspects of our business.
                </p>
                <div className="mt-12">
                  <Link href="/technology" className="bg-orange-500 text-white px-10 py-4 inline-block text-lg font-medium hover:bg-orange-600 transition-colors">
                    LEARN MORE <ArrowRight className="inline-block ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-32 text-center bg-gray-50">
        <h2 className="text-blue-900 text-3xl mb-16 font-bold">OTHER COMPANIES WE WORK WITH</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto px-8">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="flex justify-center items-center">
              <Image 
                src={`/partner-${index}.svg`} 
                alt={`Insurance Partner ${index}`} 
                width={180} 
                height={80} 
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        <div className="mt-16">
          <h3 className="text-blue-900 text-2xl mb-8 font-bold">NAMED</h3>
          <div className="flex justify-center items-center flex-wrap gap-4">
            <Image src="/partner-logo.svg" alt="Partner Logo" width={150} height={80} className="mx-4" />
            <p className="text-blue-900 text-xl font-medium">PARTNER OF THE YEAR</p>
          </div>
          <div className="mt-10">
            <Link href="/press-release" className="bg-blue-400 text-white px-8 py-3 inline-block hover:bg-blue-500 transition-colors">
              PRESS RELEASE
            </Link>
          </div>
        </div>
      </div>

      {/* Three-column section with team members */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        <div className="relative group overflow-hidden">
          <Image 
            src="/boss.jpg" 
            alt="Team member" 
            width={600} 
            height={600} 
            className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-teal-500 text-white p-5 text-center">
            <Link href="/our-work" className="flex items-center justify-center text-lg font-medium">
              OUR WORK <ArrowRight className="inline-block ml-2" />
            </Link>
          </div>
        </div>
        <div className="relative group overflow-hidden">
          <Image 
            src="/boss2.jpg" 
            alt="Team leader" 
            width={600} 
            height={600} 
            className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-lime-500 text-white p-5 text-center">
            <Link href="/our-leadership" className="flex items-center justify-center text-lg font-medium">
              OUR LEADERSHIP <ArrowRight className="inline-block ml-2" />
            </Link>
          </div>
        </div>
        <div className="relative group overflow-hidden">
          <Image 
            src="/work.jpg" 
            alt="Team member playing ping pong" 
            width={600} 
            height={600} 
            className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-purple-700 text-white p-5 text-center">
            <Link href="/our-culture" className="flex items-center justify-center text-lg font-medium">
              OUR CULTURE <ArrowRight className="inline-block ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* By the Numbers Section */}
      <div className="py-32 text-center bg-white">
        <h2 className="text-blue-900 text-3xl mb-16 font-bold tracking-wide">TRANZACT BY THE NUMBERS</h2>
        <div className="flex justify-center items-center max-w-4xl mx-auto px-4">
          <div className="relative">
            <Phone className="w-[250px] h-[450px]" />
          </div>
          <div className="text-purple-700 ml-8">
            <div className="text-7xl font-bold">350,000+</div>
            <div className="text-4xl mt-2">SALES</div>
          </div>
        </div>
      </div>

      {/* Contact and Join Team Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-teal-500 text-white p-12 flex justify-center items-center group">
          <Link href="/contact-us" className="text-xl font-bold flex items-center">
            CONTACT US <ArrowRight className="inline-block ml-2" />
          </Link>
        </div>
        <div className="bg-purple-700 text-white p-12 flex justify-center items-center group">
          <Link href="/join-our-team" className="text-xl font-bold flex items-center">
            JOIN OUR TEAM <ArrowRight className="inline-block ml-2" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-white mx-auto">actify</h1>
          </div>
          <div className="flex justify-center space-x-6 mb-10">
            <Link href="https://facebook.com" aria-label="Facebook">
              <div className="p-3 rounded-full transition-colors">
                <Facebook className="w-6 h-6" />
              </div>
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <div className="p-3 rounded-full transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              <div className="p-3 rounded-full transition-colors">
                <Instagram className="w-6 h-6" />
              </div>
            </Link>
          </div>
          <p className="mb-8 text-gray-400">© 2025 MG LLC D/B/A TRANZACT. ALL RIGHTS RESERVED.</p>
          <div className="flex justify-center flex-wrap gap-x-8 gap-y-4 text-sm">
            <Link href="/privacy-notice" className="hover:underline">Privacy Notice</Link>
            <div className="flex items-center">
              <Link href="/your-privacy-choices" className="hover:underline">Your Privacy Choices</Link>
              <ShieldCheck className="w-4 h-4 ml-1" />
            </div>
            <Link href="/consumer-health-data-privacy-notice" className="hover:underline">Tranzact Consumer Health Data Privacy Notice</Link>
            <Link href="/site-map" className="hover:underline">Site Map</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
