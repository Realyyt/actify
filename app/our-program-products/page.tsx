"use client"

import { useState } from 'react';
import { Phone, Shield, Users, Building2, Lightbulb, Wallet, TrendingUp } from 'lucide-react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';


export default function OurProgramProductsPage() {
  const [activeTab, setActiveTab] = useState('protection');

  const programSections = [
    {
      id: 'protection',
      title: 'Scaling Proper Protection for Economic Resilience',
      content: 'Expanding health and life insurance fosters financial stability, risk mitigation, and sustainable development. Accessible coverage protects individuals and businesses from crises while enhancing market confidence, investment, and workforce productivity. Governments and institutions benefit from reduced reliance on aid, enabling a shift toward self-sufficiency and long-term prosperity. Integrating proper protection into Aid-To-Trade empowers communities, secures livelihoods, and strengthens economic resilience.',
      icon: Shield
    },
    {
      id: 'leadership',
      title: 'Quality Leadership Through Delivery Units',
      content: 'Delivery units are specialized teams that enhance governance, institutional efficiency, and leadership impact across governments, businesses, and organizations. By supporting ministries, corporate boards, and nonprofit management, these units drive accountability, performance, and measurable success in mission-critical initiatives. Their structured approach ensures organizations achieve strategic goals with efficiency and focus.',
      icon: Users
    },
    {
      id: 'development',
      title: 'Locally-Led Development: A Shift Toward True Partnership',
      content: 'Sustainable development thrives when countries and communities take ownership of their futures. At IDG, Locally-Led Development is central to Aid-To-Trade, ensuring decision-making power and resources remain with national governments, community leaders, and local institutions. By fostering market-based solutions, entrepreneurship, and economic opportunity, we transform aid into self-sufficiency, resilience, and long-term growth – making Aid-To-Trade a reality, not just a concept.',
      icon: Building2
    },
    {
      id: 'capital',
      title: 'Expanding Access to Capital for Sustainable Growth',
      content: 'Providing businesses, startups, government institutions, and non-profits with financial access fuels entrepreneurship, economic mobility, and institutional development. Funding sources like government grants, private investment, and public-private partnerships enable organizations to scale operations, create jobs, and strengthen communities, ensuring self-sufficiency and long-term prosperity beyond aid dependency.',
      icon: Wallet
    },
    {
      id: 'solutions',
      title: 'Market-Based Solutions: Turning Aid into Sustainable Growth',
      content: 'At IDG, Market-Based Solutions drive the transition from aid dependency to economic self-sufficiency, empowering former aid recipient countries to lead their own development. By fostering entrepreneurship, creating sustainable jobs, and strengthening healthcare and education, we ensure long-term impact beyond immediate assistance. This approach builds resilience, aligns priorities, and promotes enterprise-driven innovation, allowing communities to thrive through lasting, market-driven growth.',
      icon: Lightbulb
    },
    {
      id: 'growth',
      title: 'Sustainable Growth: Transforming Development Through True Partnership',
      content: 'The future of development depends on empowering former aid recipient countries to lead their own economic growth. IDG\'s Aid to Trade strategy prioritizes community-driven solutions, market-based investments, and shared ownership, ensuring long-term self-sufficiency. By collaborating with governments, local leaders, and institutions, we create sustainable jobs, improve healthcare and education, and build resilient economies. True aid strengthens systems, fosters opportunity, and drives lasting prosperity – making Aid to Trade a necessary shift toward global partnership and economic independence.',
      icon: TrendingUp
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar/>

      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Program Products</h1>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Explore our comprehensive programs designed to foster economic resilience, sustainable growth, and true partnership.
          </p>
          <a href="/contact" className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center">
            <Phone size={20} className="mr-2" />
            Get Help from a Program Expert
          </a>
        </div>
      </section>

      {/* Program Buttons Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programSections.map((section) => (
              <div
                key={section.id}
                className={`p-6 rounded-lg shadow-md transition-all ${
                  activeTab === section.id
                    ? 'bg-blue-800 text-white transform scale-105'
                    : 'bg-white hover:shadow-lg'
                }`}
                onClick={() => setActiveTab(section.id)}
              >
                <div className="flex items-center mb-4">
                  <section.icon size={24} className={`mr-3 ${activeTab === section.id ? 'text-white' : 'text-blue-800'}`} />
                  <h3 className={`text-xl font-bold ${activeTab === section.id ? 'text-white' : 'text-gray-600'}`}>{section.title}</h3>
                </div>
                <p className={`text-sm line-clamp-3 ${activeTab === section.id ? 'text-white' : 'text-gray-600'}`}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">
            {programSections.find(section => section.id === activeTab)?.title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {programSections.find(section => section.id === activeTab)?.content}
          </p>
        </div>
      </section>

      {/* Help Section */}
      <section id="help" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Need Help Choosing?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Our providers are ready to help you find the right program for your needs.
            Get personalized advice and quotes today.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center"
              >
                <Phone size={20} className="mr-2" />
                Schedule a Call
              </a>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
} 