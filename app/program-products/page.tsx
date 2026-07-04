"use client"

import { useState } from 'react';
import { ChevronRight, Shield, Users, Briefcase, Heart, Globe } from 'lucide-react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Link from 'next/link';

export default function ProgramProductsPage() {
  const [activeSection, setActiveSection] = useState('protection');
  const [showMoreSection, setShowMoreSection] = useState<Record<string, boolean>>({});

  const sections = [
    {
      id: 'protection',
      title: 'Scaling Personal Protection for Economic Resilience',
      icon: <Shield size={48} className="text-gray-900" />,
      content: 'Expanding health and life insurance fosters financial stability, risk mitigation, and sustainable development. Accessible coverage protects individuals and businesses from crises while enhancing market confidence, investment, and workforce productivity. Governments and institutions benefit from reduced reliance on aid, enabling a shift toward self-sufficiency and long-term prosperity. Integrating personal protection into Aid to Trade empowers communities, secures livelihoods, and strengthens economic resilience.'
    },
    {
      id: 'leadership',
      title: 'Quality Leadership Through Delivery Units',
      icon: <Users size={48} className="text-gray-900" />,
      content: 'Delivery units are specialized teams that enhance governance, institutional efficiency, and leadership impact across governments, businesses, and organizations. By supporting ministries, corporate boards, and nonprofit management, these units drive accountability, performance, and measurable success in mission-critical initiatives. Their structured approach ensures organizations achieve strategic goals with efficiency and focus.'
    },
    {
      id: 'development',
      title: 'Locally-Led Development: A Shift Toward True Partnership',
      icon: <Globe size={48} className="text-gray-900" />,
      content: 'Sustainable development thrives when countries and communities take ownership of their futures. At IDG, Locally-Led Development is central to Aid to Trade, ensuring decision-making power and resources remain with national governments, community leaders, and local institutions. By fostering market-based solutions, entrepreneurship, and economic opportunity, we transform aid into self-sufficiency, resilience, and long-term growth — making Aid to Trade a reality, not just a concept.'
    },
    {
      id: 'solutions',
      title: 'Market-Based Solutions: Turning Aid into Sustainable Growth',
      icon: <Briefcase size={48} className="text-gray-900" />,
      content: 'At IDG, Market-Based Solutions drive the transition from aid dependence to economic self-sufficiency, empowering former aid recipient countries to lead their own development. By fostering entrepreneurship, creating sustainable jobs, and strengthening healthcare and education, we ensure long-term impact beyond immediate assistance. This approach builds resilience, aligns priorities, and promotes enterprise-driven innovation, allowing communities to thrive through lasting, market-driven growth.'
    },
    {
      id: 'capital',
      title: 'Expanding Access to Capital for Sustainable Growth',
      icon: <Heart size={48} className="text-gray-900" />,
      content: 'Providing businesses, startups, government institutions, and non-profits with financial access fuels entrepreneurship, economic mobility, and institutional development. Funding sources like government grants, private investment, and public-private partnerships enable organizations to scale operations, create jobs, and strengthen communities, ensuring self-sufficiency and long-term prosperity beyond aid dependence.'
    },
    {
      id: 'sustainable',
      title: 'Sustainable Growth: Transforming Development Through True Partnership',
      icon: <Globe size={48} className="text-gray-900" />,
      content: 'The future of development depends on empowering former aid recipient countries to lead their own economic growth. IDG\'s Aid to Trade strategy prioritizes community-driven solutions, market-based investments, and shared ownership, ensuring long-term self-sufficiency. By collaborating with governments, local leaders, and institutions, we create sustainable jobs, improve healthcare and education, and build resilient economies. True aid strengthens systems, fosters opportunity, and drives lasting prosperity — making Aid to Trade a necessary shift toward global partnership and economic independence.'
    }
  ];

  const toggleShowMore = (sectionId: string) => {
    setShowMoreSection(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const getTruncatedContent = (content: string, sectionId: string) => {
    if (showMoreSection[sectionId]) return content;
    const firstPeriod = content.indexOf('.');
    if (firstPeriod === -1) return content;
    return content.substring(0, firstPeriod + 1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/boss.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-gray-900/30"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-6">OUR PROGRAM PRODUCTS</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Our Program Products
            </h1>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeSection === section.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {section.title.split(':')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`mb-16 ${activeSection === section.id ? 'block' : 'hidden'}`}
            >
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center mb-8">
                  <div className="mr-6">{section.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-light text-gray-900">{section.title}</h2>
                </div>
                <div className="text-gray-600 text-lg leading-relaxed">
                  <p>{getTruncatedContent(section.content, section.id)}</p>
                  <button 
                    onClick={() => toggleShowMore(section.id)}
                    className="text-gray-900 hover:text-gray-600 underline mt-4 text-sm font-medium"
                  >
                    {showMoreSection[section.id] ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <Link
          href="/contact"
          className="bg-gray-900 py-16 md:py-24 flex items-center justify-center text-white hover:bg-gray-800 transition-colors group"
        >
          <span className="text-xl font-light tracking-wider">CONTACT US</span>
        </Link>
        <Link
          href="/careers"
          className="bg-gray-800 py-16 md:py-24 flex items-center justify-center text-white hover:bg-gray-700 transition-colors group"
        >
          <span className="text-xl font-light tracking-wider">JOIN OUR TEAM</span>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
