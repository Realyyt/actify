"use client"

import { useState } from 'react';
import { ChevronRight, Shield, Users, Briefcase, Heart, Globe } from 'lucide-react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function ProgramProductsPage() {
  const [activeSection, setActiveSection] = useState('protection');

  const sections = [
    {
      id: 'protection',
      title: 'Scaling Personal Protection for Economic Resilience',
      icon: <Shield size={48} className="text-blue-600" />,
      content: 'Expanding health and life insurance fosters financial stability, risk mitigation, and sustainable development. Accessible coverage protects individuals and businesses from crises while enhancing market confidence, investment, and workforce productivity. Governments and institutions benefit from reduced reliance on aid, enabling a shift toward self-sufficiency and long-term prosperity. Integrating personal protection into Aid to Trade empowers communities, secures livelihoods, and strengthens economic resilience.'
    },
    {
      id: 'leadership',
      title: 'Quality Leadership Through Delivery Units',
      icon: <Users size={48} className="text-green-600" />,
      content: 'Delivery units are specialized teams that enhance governance, institutional efficiency, and leadership impact across governments, businesses, and organizations. By supporting ministries, corporate boards, and nonprofit management, these units drive accountability, performance, and measurable success in mission-critical initiatives. Their structured approach ensures organizations achieve strategic goals with efficiency and focus.'
    },
    {
      id: 'development',
      title: 'Locally-Led Development: A Shift Toward True Partnership',
      icon: <Globe size={48} className="text-purple-600" />,
      content: 'Sustainable development thrives when countries and communities take ownership of their futures. At IDG, Locally-Led Development is central to Aid to Trade, ensuring decision-making power and resources remain with national governments, community leaders, and local institutions. By fostering market-based solutions, entrepreneurship, and economic opportunity, we transform aid into self-sufficiency, resilience, and long-term growth – making Aid to Trade a reality, not just a concept.'
    },
    {
      id: 'solutions',
      title: 'Market-Based Solutions: Turning Aid into Sustainable Growth',
      icon: <Briefcase size={48} className="text-orange-600" />,
      content: 'At IDG, Market-Based Solutions drive the transition from aid dependency to economic self-sufficiency, empowering former aid recipient countries to lead their own development. By fostering entrepreneurship, creating sustainable jobs, and strengthening healthcare and education, we ensure long-term impact beyond immediate assistance. This approach builds resilience, aligns priorities, and promotes enterprise-driven innovation, allowing communities to thrive through lasting, market-driven growth.'
    },
    {
      id: 'capital',
      title: 'Expanding Access to Capital for Sustainable Growth',
      icon: <Heart size={48} className="text-red-600" />,
      content: 'Providing businesses, startups, government institutions, and non-profits with financial access fuels entrepreneurship, economic mobility, and institutional development. Funding sources like government grants, private investment, and public-private partnerships enable organizations to scale operations, create jobs, and strengthen communities, ensuring self-sufficiency and long-term prosperity beyond aid dependency.'
    },
    {
      id: 'sustainable',
      title: 'Sustainable Growth: Transforming Development Through True Partnership',
      icon: <Globe size={48} className="text-teal-600" />,
      content: 'The future of development depends on empowering former aid recipient countries to lead their own economic growth. IDG\'s Aid to Trade strategy prioritizes community-driven solutions, market-based investments, and shared ownership, ensuring long-term self-sufficiency. By collaborating with governments, local leaders, and institutions, we create sustainable jobs, improve healthcare and education, and build resilient economies. True aid strengthens systems, fosters opportunity, and drives lasting prosperity – making Aid to Trade a necessary shift toward global partnership and economic independence'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Program Products</h1>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Discover our comprehensive range of development programs designed to foster sustainable growth,
            empower communities, and create lasting economic impact through innovative solutions and partnerships.
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {section.title.split(':')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`mb-16 ${activeSection === section.id ? 'block' : 'hidden'}`}
            >
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center mb-8">
                  <div className="mr-6">{section.icon}</div>
                  <h2 className="text-3xl font-bold text-blue-900">{section.title}</h2>
                </div>
                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Ready to Make an Impact?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join us in creating sustainable change and economic growth through our innovative programs.
            Let&lsquo;s work together to build a better future.
          </p>
          <a
            href="#contact"
            className="bg-blue-800 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center"
          >
            Get Started
            <ChevronRight size={20} className="ml-2" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
