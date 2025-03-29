import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Footer from '../components/footer';
export default function WhoWeAre() {
  return (
    <div className="who-we-are-container">
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hmm.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <h1 className="relative z-10 text-5xl font-bold text-white text-center max-w-4xl px-4">
          BIG COMPANY TALENT SMALL COMPANY CULTURE
        </h1>
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
          <Image 
            src="/game.jpg" 
            alt="Employee exercising at on-site gym" 
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[600px]">
          <Image 
            src="/w2.jpg" 
            alt="Employee working on career development" 
            layout="fill"
            objectFit="cover"
          />
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
            We understand the importance of balancing work and personal life. That&apos;s why we offer flexible schedules,
            remote work options, and generous paid time off.
          </p>
        </div>
        <div className="relative h-[600px]">
          <Image 
            src="/wc1.jpg" 
            alt="Employee enjoying work-life balance" 
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        
        <div className="relative h-[600px]">
          <Image 
            src="/w.jpg" 
            alt="Team collaborating in a modern office space" 
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="space-y-6 p-12">
          <h2 className="text-3xl font-bold text-navy-800 tracking-wide">COMPANY CULTURE</h2>
          <p className="text-gray-600 leading-relaxed">
            At TRANZACT, we foster a culture of collaboration, innovation, and mutual respect. Our team-oriented environment encourages open communication, continuous learning, and celebrating each other&apos;s successes.
          </p>
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

      <Footer />
    </div>
  );
}
