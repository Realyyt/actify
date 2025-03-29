import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function WhoWeAre() {
  return (
    <div className="who-we-are-container">
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative z-10 text-5xl font-bold text-white text-center max-w-4xl px-4">
          BIG COMPANY TALENT SMALL COMPANY CULTURE
        </h1>
      </section>

      <section className="max-w-7xl mx-auto py-32 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch h-[600px]">
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
          <div className="relative h-full">
            <Image 
              src="/images/wellness.jpg" 
              alt="Employee exercising at on-site gym" 
              layout="fill"
              objectFit="cover"
              className="rounded-none"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-32 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch h-[600px]">
          <div className="relative h-full">
            <Image 
              src="/images/career.jpg" 
              alt="Employee working on career development" 
              layout="fill"
              objectFit="cover"
              className="rounded-none"
            />
          </div>
          <div className="space-y-6 p-12">
            <h2 className="text-3xl font-bold text-navy-800 tracking-wide">CAREER DEVELOPMENT AND FUTURE PLANNING</h2>
            <p className="text-gray-600 leading-relaxed">
              To help ensure our employees are getting the most from their careers at TRANZACT, we offer paid trainings,
              licensing opportunities, 401k, life insurance, and uncapped bonus potential.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-32 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch h-[600px]">
          <div className="space-y-6 p-12">
            <h2 className="text-3xl font-bold text-navy-800 tracking-wide">WORK-LIFE BALANCE</h2>
            <p className="text-gray-600 leading-relaxed">
              We understand the importance of balancing work and personal life. That&apos;s why we offer flexible schedules,
              remote work options, and generous paid time off.
            </p>
          </div>
          <div className="relative h-full">
            <Image 
              src="/images/work-life.jpg" 
              alt="Employee enjoying work-life balance" 
              layout="fill"
              objectFit="cover"
              className="rounded-none"
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2">
        <Link href="/contact" className="bg-teal-500 py-20 flex items-center justify-center text-white font-bold tracking-wider text-xl">
          <span>CONTACT US &gt;</span>
        </Link>
        <Link href="/careers" className="bg-purple-800 py-20 flex items-center justify-center text-white font-bold tracking-wider text-xl">
          <span>JOIN OUR TEAM &gt;</span>
        </Link>
      </section>

      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="mb-8">
            <Image 
              src="/images/tranzact-logo-white.svg" 
              alt="TRANZACT" 
              width={180} 
              height={60} 
            />
          </div>
          
          <div className="flex space-x-4 mb-8">
            <Link href="https://facebook.com" className="bg-white p-2 rounded-sm" aria-label="Facebook">
              <Image src="/images/facebook-icon.svg" alt="Facebook" width={20} height={20} />
            </Link>
            <Link href="https://linkedin.com" className="bg-white p-2 rounded-sm" aria-label="LinkedIn">
              <Image src="/images/linkedin-icon.svg" alt="LinkedIn" width={20} height={20} />
            </Link>
            <Link href="https://instagram.com" className="bg-white p-2 rounded-sm" aria-label="Instagram">
              <Image src="/images/instagram-icon.svg" alt="Instagram" width={20} height={20} />
            </Link>
          </div>
          
          <div className="text-center mb-6">
            © 2025 MG LLC D/B/A TRANZACT. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/privacy-notice" className="hover:underline">Privacy Notice</Link>
            <div className="flex items-center">
              <span>Your Privacy Choices</span>
              <span className="ml-2 w-10 h-5 bg-blue-500 rounded-full relative">
                <span className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></span>
              </span>
            </div>
            <Link href="/health-data-privacy" className="hover:underline">Tranzact Consumer Health Data Privacy Notice</Link>
            <Link href="/site-map" className="hover:underline">Site Map</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
