"use client";
import InquiryModal from '../shared/InquiryModal';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

export default function PathwayCards() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const imagePaths = ['/work.jpg', '/we.jpg', '/boss.jpg', '/career.jpg', '/lead.jpg'];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">Our Approach</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900">Our Impact Ecosystem</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Pathway 1 */}
          <div className="aspect-[4/3 md:aspect-square overflow-hidden group relative" data-aos="fade-up">
            <img 
              src={imagePaths[0]} 
              alt="Donors & Governments" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
          <div className="aspect-[4/3 md:aspect-square bg-gray-50 p-10 md:p-16 flex flex-col justify-center group" data-aos="fade-up" data-aos-delay="100">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Pathway 01</p>
            <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">Donors & Governments</h3>
            <ul className="text-gray-600 space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></span>
                Maximize program results with measurable outcomes
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></span>
                Clear transparency and reporting at every stage
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></span>
                Built-in handoff plans from day one
              </li>
            </ul>
            <InquiryModal pathway={1}>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-900 hover:text-gray-600 transition-colors cursor-pointer">
                        Improve Our Program
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </InquiryModal>
          </div>

          {/* Pathway 2 */}
          <div className="aspect-[4/3 md:aspect-square bg-gray-50 p-10 md:p-16 flex flex-col justify-center group" data-aos="fade-up" data-aos-delay="200">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Pathway 02</p>
            <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">Local Operators & Providers</h3>
            <ul className="text-gray-600 space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></span>
                Fix daily operational friction points fast
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></span>
                Clear bottlenecks holding your team back
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></span>
                Build local skills for permanent independence
              </li>
            </ul>
            <InquiryModal pathway={2}>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-900 hover:text-gray-600 transition-colors cursor-pointer">
                        Submit Inquiry
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </InquiryModal>
          </div>
          <div className="aspect-[4/3 md:aspect-square overflow-hidden group" data-aos="fade-up" data-aos-delay="200">
            <img 
              src={imagePaths[1]} 
              alt="Local Operators & Providers" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>

          {/* Pathway 3 */}
          <div className="aspect-[4/3 md:aspect-square overflow-hidden group" data-aos="fade-up" data-aos-delay="300">
            <img 
              src={imagePaths[2]} 
              alt="Businesses & Investors" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
          <div className="aspect-[4/3 md:aspect-square bg-gray-50 p-10 md:p-16 flex flex-col justify-center group" data-aos="fade-up" data-aos-delay="300">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Pathway 03</p>
            <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">Businesses & Investors</h3>
            <ul className="text-gray-600 space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></span>
                High-yield public-private joint ventures
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></span>
                Secure, de-risked market entries in emerging zones
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></span>
                Partner with locally embedded implementation teams
              </li>
            </ul>
            <InquiryModal pathway={3}>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-900 hover:text-gray-600 transition-colors cursor-pointer">
                        Partner With Us
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </InquiryModal>
          </div>

          {/* Who We Are */}
          <div className="aspect-[4/3 md:aspect-square bg-gray-900 p-10 md:p-16 flex flex-col justify-center group" data-aos="fade-up" data-aos-delay="400">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Who We Are</p>
            <h3 className="text-2xl md:text-3xl font-light text-white mb-6">Helping societies break free</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Helping societies break free from short-term charity by building their own capabilities.
            </p>
            <Link 
              href="/who-we-are" 
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white hover:text-gray-300 transition-colors"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="aspect-[4/3 md:aspect-square overflow-hidden group" data-aos="fade-up" data-aos-delay="400">
            <img 
              src={imagePaths[3]} 
              alt="Who We Are" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
