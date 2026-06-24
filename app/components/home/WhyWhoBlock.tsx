"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export default function WhyWhoBlock() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left: WHY WE ARE DIFFERENT */}
          <div data-aos="fade-up">
            <span className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-1 rounded-full mb-6 inline-block ring-2 ring-teal-200 ring-opacity-60">
              WHY WE ARE DIFFERENT
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6 leading-tight">
              What Makes Us Different
            </h2>
            <ul className="text-gray-700 space-y-3 [&_li]:before:content-['→'] [&_li]:before:text-teal-500 [&_li]:before:font-bold [&_li]:before:mr-2 [&_li]:before:inline-block [&_li]:before:text-lg">
              <li>Active on-the-ground support, not just reports.</li>
              <li>A permanent handoff blueprint from day one.</li>
              <li>Complete, transparent program accountability.</li>
            </ul>
          </div>

          {/* Right: WHO WE ARE */}
          <div data-aos="fade-up" data-aos-delay="200">
            <span className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-1 rounded-full mb-6 inline-block ring-2 ring-teal-200 ring-opacity-60">
              WHO WE ARE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6 leading-tight">
              Who We Are
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Helping societies break free from short-term charity by building their own capabilities.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 my-12" />

        {/* Full-width intro paragraph */}
        <div className="max-w-5xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="400">
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            Many traditional consulting groups simply hand over text-heavy strategy slide decks and leave.
            Traditional charity organizations often focus only on short-term relief, which can unintentionally
            trap communities in a cycle of permanent dependency. Impact Delivery Group does things differently.
            We blend big-picture systems strategy with real, daily help on the ground to make sure your
            infrastructure stands on its own two feet.
          </p>
        </div>

        {/* Three feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up" data-aos-delay="600">
            <h3 className="text-xl font-semibold text-navy-800 mb-4">On-The-Ground Support</h3>
            <p className="text-gray-600 leading-relaxed">
              We don&apos;t just write reports and walk away. Our team stays on site to help your team put new plans
              into action, turning big ideas into smooth, successful daily operations across all public and
              social service sectors.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up" data-aos-delay="700">
            <h3 className="text-xl font-semibold text-navy-800 mb-4">A Built-In Handoff Plan</h3>
            <p className="text-gray-600 leading-relaxed">
              Traditional frameworks often rely on permanent donations. We design every community project,
              economic development track, or structural network with a clear, step-by-step plan to hand over
              total ownership to local leaders from day one.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up" data-aos-delay="800">
            <h3 className="text-xl font-semibold text-navy-800 mb-4">Clear, Honest Responsibility</h3>
            <p className="text-gray-600 leading-relaxed">
              We believe in clear responsibility. By pairing data-driven leadership with everyday process
              updates, we make sure your top-level goals match your daily workflows perfectly for total efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}