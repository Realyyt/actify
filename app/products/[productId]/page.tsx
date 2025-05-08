"use client"

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Shield, Heart, Briefcase, Users, Calendar, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import QuoteForm from '../../components/QuoteForm';

// Product data mapping with flyers added
const productDetails = {
  'accident-insurance': {
    name: 'Accident Insurance',
    icon: <Shield size={48} className="text-blue-600" />,
    description: 'Provides cash benefits for injuries or illnesses.',
    about: 'Accident Insurance helps you cover unexpected medical costs and lost income due to accidental injuries. It is designed to supplement your primary health insurance and provide peace of mind in case of unforeseen events. This plan is ideal for individuals and families seeking extra protection against the financial impact of accidents.',
    features: [
      '24/7 coverage for accidents',
      'Cash benefits for medical expenses',
      'No health questions required',
      'Flexible coverage options'
    ],
    benefits: [
      'Immediate financial support after accidents',
      'Supplemental coverage to your existing insurance',
      'Easy claims process',
      'Affordable premiums'
    ],
    flyers: [
      { title: 'Accident Coverage Overview', description: 'A comprehensive guide to our accident insurance plans' },
      { title: 'Family Protection Plan', description: 'How accident insurance protects your entire family' },
      { title: 'Claim Process Guide', description: 'Step-by-step guide to filing an accident claim' },
      { title: 'Sports Injury Coverage', description: 'Special coverage details for sports-related injuries' },
      { title: 'Workplace Accident Protection', description: 'Coverage for accidents that happen at work' },
      { title: 'Travel Protection', description: 'Accident coverage while traveling domestically and internationally' },
      { title: 'Recovery Benefits', description: 'Financial support during your recovery period' },
      { title: 'Hospital Stay Coverage', description: 'Benefits for hospital stays due to accidents' },
      { title: '24/7 Coverage Explained', description: 'How our policy protects you around the clock' },
      { title: 'Emergency Transport Benefits', description: 'Coverage for ambulance and emergency transportation' },
      { title: 'Physical Therapy Benefits', description: 'Support for rehabilitation after an accident' },
      { title: 'Coverage Levels Comparison', description: 'Different tiers of accident insurance compared' },
      { title: 'Kid-Friendly Coverage', description: 'Special protections for children' },
      { title: 'Senior Accident Protection', description: 'Tailored coverage for seniors' },
      { title: 'Accident Prevention Tips', description: 'How to reduce your risk of common accidents' },
      { title: 'Premium Payment Options', description: 'Flexible ways to pay for your coverage' },
      { title: 'Common Exclusions', description: 'Understanding what isn\'t covered' },
      { title: 'Supplemental Coverage Guide', description: 'How accident insurance works with your primary health plan' },
      { title: 'Benefit Usage Examples', description: 'Real scenarios showing how benefits are paid' },
      { title: 'Coverage Upgrade Options', description: 'Ways to enhance your basic coverage' },
      { title: 'Quick Start Guide', description: 'Getting started with your new policy' },
      { title: 'Digital Claim Filing', description: 'Using our app to file and track claims' },
      { title: 'Policy Renewal Information', description: 'What to expect when renewing your coverage' },
      { title: 'Coverage Calculator', description: 'Determine how much coverage you need' },
      { title: 'Accident Statistics', description: 'Why accident insurance matters' },
      { title: 'Direct Deposit Setup', description: 'Get your benefits faster with direct deposit' },
      { title: 'Coverage During Pregnancy', description: 'Special considerations for expectant mothers' },
      { title: 'Sports League Discounts', description: 'Special rates for organized sports participants' },
      { title: 'Educational Materials', description: 'Resources to understand your coverage better' },
      { title: 'Customer Testimonials', description: 'Stories from policyholders who benefited from coverage' }
    ]
  },
  'aca-marketplace': {
    name: 'ACA Marketplace Plans',
    icon: <Heart size={48} className="text-blue-600" />,
    description: 'Comprehensive health coverage through the Affordable Care Act marketplace.',
    about: 'ACA Marketplace Plans are designed to provide individuals and families with access to affordable, comprehensive health insurance. These plans cover essential health benefits, including preventive care, emergency services, and prescription drugs. With subsidies available for those who qualify, ACA Marketplace Plans help reduce the cost of coverage and ensure that everyone has access to the care they need. Open enrollment periods and special enrollment options make it easy to sign up for coverage that fits your needs and budget.',
    features: [
      'Essential health benefits coverage',
      'Preventive care at no cost',
      'No pre-existing condition exclusions',
      'Subsidies available for qualifying individuals'
    ],
    benefits: [
      'Comprehensive coverage for medical needs',
      'Access to a wide network of healthcare providers',
      'Financial assistance options',
      'Guaranteed coverage regardless of health status'
    ],
    flyers: [
      { title: 'ACA Enrollment Guide', description: 'Step-by-step instructions for marketplace enrollment' },
      { title: 'Subsidy Qualification', description: 'Find out if you qualify for financial assistance' },
      { title: 'Plan Comparison Chart', description: 'Compare different ACA plan tiers' },
      { title: 'Essential Health Benefits', description: 'What all marketplace plans must cover' },
      { title: 'Special Enrollment Periods', description: 'How to enroll outside open enrollment' },
      { title: 'Premium Tax Credits', description: 'Understanding how tax credits reduce your premiums' },
      { title: 'Cost-Sharing Reductions', description: 'How to lower your out-of-pocket costs' },
      { title: 'Metal Tier Explanations', description: 'Understanding Bronze, Silver, Gold, and Platinum plans' },
      { title: 'Network Provider Directory', description: 'Finding in-network doctors and facilities' },
      { title: 'Preventive Services List', description: 'Services covered at no cost to you' },
      { title: 'Prescription Formulary', description: 'Covered medications and pricing tiers' },
      { title: 'Family Coverage Options', description: 'Plans that work for your entire family' },
      { title: 'Young Adult Coverage', description: 'Options for those under 30' },
      { title: 'Catastrophic Plan Details', description: 'High-deductible, low-premium options' },
      { title: 'Income Verification Guide', description: 'Documents needed to verify your income' },
      { title: 'Plan Renewal Information', description: 'What happens when your plan year ends' },
      { title: 'Coverage Appeals Process', description: 'What to do if coverage is denied' },
      { title: 'Healthcare Rights', description: 'Your protections under the ACA' },
      { title: 'Marketplace vs. Employer Coverage', description: 'Comparing your options' },
      { title: 'Changing Plans Mid-Year', description: 'When and how you can switch plans' },
      { title: 'COBRA vs. Marketplace', description: 'Options after losing employer coverage' },
      { title: 'Self-Employed Coverage Guide', description: 'Options for freelancers and business owners' },
      { title: 'Immigration Status and Eligibility', description: 'Who qualifies for marketplace coverage' },
      { title: 'Tax Penalty Information', description: 'Understanding tax implications' },
      { title: 'Out-of-Pocket Maximum Guide', description: 'The most youll pay in a plan year' },
      { title: 'Wellness Program Benefits', description: 'Extra perks included with your plan' },
      { title: 'Telehealth Services', description: 'Virtual care options with your coverage' },
      { title: 'State-Specific Programs', description: 'Additional options in your state' },
      { title: 'Family Glitch Fix', description: 'New rules for family eligibility' },
      { title: 'Marketplace Mobile App Guide', description: 'Managing your coverage on your phone' }
    ]
  },
  // I'll add just two more examples and abbreviate the rest for readability
  'critical-illness': {
    name: 'Critical Illness Insurance',
    icon: <Heart size={48} className="text-blue-600" />,
    description: 'Provides financial protection against major illnesses.',
    about: 'Critical Illness Insurance offers a lump-sum payment if you are diagnosed with a covered serious illness, such as cancer, heart attack, or stroke. This benefit can be used for any purpose, including medical bills, travel for treatment, or everyday living expenses. It is designed to ease the financial burden during a difficult time, allowing you to focus on recovery rather than costs. This coverage is ideal for those who want extra security in the face of life-changing health events.',
    features: [
      'Lump-sum benefit payment',
      'Coverage for major illnesses',
      'No restrictions on benefit usage',
      'Flexible coverage amounts'
    ],
    benefits: [
      'Financial support during treatment',
      'Helps cover non-medical expenses',
      'Peace of mind during recovery',
      'Supplemental to existing health coverage'
    ],
    flyers: [
      { title: 'Critical Illness Overview', description: 'Understanding critical illness insurance' },
      { title: 'Covered Conditions List', description: 'Illnesses covered by your policy' },
      { title: 'Benefit Distribution Guide', description: 'How and when benefits are paid' },
      { title: 'Cancer Coverage Details', description: 'Specific benefits for cancer diagnosis' },
      { title: 'Heart Attack & Stroke Benefits', description: 'Coverage for cardiovascular events' },
      { title: 'Organ Failure Protection', description: 'Benefits for major organ issues' },
      { title: 'Claim Filing Process', description: 'Steps to file a critical illness claim' },
      { title: 'Family Coverage Options', description: 'Protecting your loved ones' },
      { title: 'Benefit Usage Ideas', description: 'How to utilize your lump-sum payment' },
      { title: 'Recovery Support Services', description: 'Additional resources for recovery' },
      // Abbreviated for readability - in real implementation, add all 30
      { title: 'Coverage Amounts Guide', description: 'Selecting the right benefit amount' },
      { title: 'Critical Illness Statistics', description: 'Understanding your risk factors' },
      { title: 'Premium Calculation', description: 'How your rate is determined' },
      { title: 'Pre-Existing Conditions', description: 'What to know about coverage limitations' },
      { title: 'Wellness Benefit Rider', description: 'Additional preventive care benefits' },
      { title: 'Recurrence Benefits', description: 'Coverage for multiple diagnoses' },
      { title: 'Critical Illness vs. Disability', description: 'Understanding different coverages' },
      { title: 'Tax Implications Guide', description: 'How benefits affect your taxes' },
      { title: 'Employer vs. Individual Policies', description: 'Comparing coverage options' },
      { title: 'Early Detection Benefits', description: 'Coverage for early-stage diagnoses' },
      { title: 'Children\'s Critical Illness', description: 'Coverage options for minors' },
      { title: 'Senior Protection Plans', description: 'Options for those over 65' },
      { title: 'Policy Portability', description: 'Taking coverage with you when changing jobs' },
      { title: 'Guaranteed Renewability', description: 'Understanding your long-term coverage' },
      { title: 'International Coverage', description: 'Protection while traveling abroad' },
      { title: 'Complementary Coverage Guide', description: 'Pairing with other insurance types' },
      { title: 'Specialist Network Access', description: 'Finding top medical care' },
      { title: 'Hereditary Condition Coverage', description: 'Protection for genetic predispositions' },
      { title: 'Recovery Timeline Resources', description: 'What to expect after diagnosis' },
      { title: 'Caregiver Support', description: 'Resources for family caregivers' }
    ]
  },
  'dental-vision': {
    name: 'Dental & Vision',
    icon: <Users size={48} className="text-blue-600" />,
    description: 'Comprehensive dental and vision coverage for individuals and families.',
    about: 'Dental & Vision plans help you maintain your oral and eye health with coverage for routine exams, cleanings, and corrective lenses. These plans often include benefits for major dental procedures, orthodontics, and a wide selection of eyewear. Regular dental and vision care is essential for overall health, and these plans make it affordable and convenient for you and your family to access quality care.',
    features: [
      'Preventive care coverage',
      'Major dental procedures included',
      'Vision exams and eyewear benefits',
      'Family coverage options'
    ],
    benefits: [
      'Maintain oral and eye health',
      'Save on routine check-ups',
      'Coverage for unexpected dental issues',
      'Access to quality vision care'
    ],
    flyers: Array(30).fill(null).map((_, i) => ({
      title: `Dental & Vision Flyer ${i+1}`,
      description: `Information about dental and vision coverage, benefit ${i+1}`
    }))
  },
  // For the rest of the products, I'm using a more programmatic approach for brevity
  'group-health': {
    name: 'Group Health Plans',
    icon: <Briefcase size={48} className="text-blue-600" />,
    description: 'Comprehensive health coverage for businesses and organizations.',
    about: 'Group Health Plans are tailored for businesses and organizations that want to provide health insurance to their employees. These plans can be customized to fit the size and needs of your workforce, offering a range of coverage options and wellness programs. Group plans help attract and retain top talent, improve employee satisfaction, and may offer tax advantages for employers. Administrative support and cost-sharing options make managing employee benefits easier and more efficient.',
    features: [
      'Customizable plan options',
      'Employee wellness programs',
      'Administrative support',
      'Cost-sharing options'
    ],
    benefits: [
      'Attract and retain top talent',
      'Tax advantages for businesses',
      'Comprehensive coverage for employees',
      'Simplified administration'
    ],
    flyers: Array(30).fill(null).map((_, i) => ({
      title: `Group Health Flyer ${i+1}`,
      description: `Information about group health plans, benefit ${i+1}`
    }))
  },
  'individual-family': {
    name: 'Individual & Family Health Plans',
    icon: <Users size={48} className="text-blue-600" />,
    description: 'Personalized health coverage for individuals and families.',
    about: 'Individual & Family Health Plans are designed for people who do not have access to employer-sponsored insurance. These plans offer a variety of coverage options, including preventive care, prescription drugs, and specialist visits. You can tailor your plan to fit your health needs and budget, ensuring peace of mind for you and your loved ones. Flexible enrollment options and a wide provider network make these plans a great choice for many households.',
    features: [
      'Customizable coverage options',
      'Network of healthcare providers',
      'Prescription drug coverage',
      'Preventive care benefits'
    ],
    benefits: [
      'Tailored coverage for your needs',
      'Access to quality healthcare',
      'Financial protection',
      'Family coverage options'
    ],
    flyers: Array(30).fill(null).map((_, i) => ({
      title: `Individual & Family Flyer ${i+1}`,
      description: `Information about individual and family plans, benefit ${i+1}`
    }))
  },
  'short-term-medical': {
    name: 'Short-Term Medical Plans',
    icon: <Calendar size={48} className="text-blue-600" />,
    description: 'Temporary health coverage for specific time periods.',
    about: 'Short-Term Medical Plans provide temporary health insurance for individuals who are between jobs, waiting for other coverage to begin, or need a flexible, budget-friendly option. These plans offer basic coverage for a limited period, helping you bridge gaps in your health insurance. They are ideal for those in transition or who need immediate coverage for unexpected situations.',
    features: [
      'Flexible coverage duration',
      'Quick approval process',
      'Basic medical coverage',
      'Affordable premiums'
    ],
    benefits: [
      'Immediate coverage availability',
      'Bridge coverage gaps',
      'Budget-friendly option',
      'Flexible terms'
    ],
    flyers: Array(30).fill(null).map((_, i) => ({
      title: `Short-Term Medical Flyer ${i+1}`,
      description: `Information about short-term medical plans, benefit ${i+1}`
    }))
  },
  'supplemental-health': {
    name: 'Supplemental Health Plans',
    icon: <Users size={48} className="text-blue-600" />,
    description: 'Additional coverage for specific health needs.',
    about: 'Supplemental Health Plans are designed to complement your primary health insurance, offering additional coverage for specific health needs. These plans can include benefits for dental, vision, and other specialized services, providing a more comprehensive approach to your health care.',
    features: [
      'Customizable coverage options',
      'Network of healthcare providers',
      'Prescription drug coverage',
      'Preventive care benefits'
    ],
    benefits: [
      'Tailored coverage for your needs',
      'Access to quality healthcare',
      'Financial protection',
      'Family coverage options'
    ],
    flyers: Array(30).fill(null).map((_, i) => ({
      title: `Supplemental Health Flyer ${i+1}`,
      description: `Information about supplemental health plans, benefit ${i+1}`
    }))
  },
  'medicare-supplement': {
    name: 'Medicare Supplement',
    icon: <Heart size={48} className="text-blue-600" />,
    description: 'Additional coverage to complement Original Medicare.',
    about: 'Medicare Supplement (Medigap) plans help pay for out-of-pocket costs not covered by Original Medicare, such as copayments, coinsurance, and deductibles. These plans offer peace of mind and financial protection for seniors, allowing you to see any doctor that accepts Medicare. Standardized plan options make it easy to compare and choose the right coverage for your needs.',
    features: [
      'Coverage for Medicare gaps',
      'Standardized plan options',
      'Guaranteed renewable',
      'Nationwide coverage'
    ],
    benefits: [
      'Reduced out-of-pocket costs',
      'Freedom to choose providers',
      'Comprehensive coverage',
      'Peace of mind'
    ],
    flyers: Array(30).fill(null).map((_, i) => ({
      title: `Medicare Supplement Flyer ${i+1}`,
      description: `Information about Medicare supplement plans, benefit ${i+1}`
    }))
  },
  'medicare-advantage': {
    name: 'Medicare Advantage',
    icon: <Heart size={48} className="text-blue-600" />,
    description: 'All-in-one alternative to Original Medicare.',
    about: 'Medicare Advantage plans (Part C) combine hospital, medical, and often prescription drug coverage into a single plan. These plans may offer additional benefits such as dental, vision, hearing, and wellness programs, providing a comprehensive solution for seniors. Medicare Advantage plans are offered by private insurers and may include extra perks like fitness memberships and care coordination services.',
    features: [
      'Combined Part A and B coverage',
      'Additional benefits included',
      'Prescription drug coverage',
      'Network-based plans'
    ],
    benefits: [
      'Comprehensive coverage',
      'Additional benefits',
      'Cost-effective option',
      'Coordinated care'
    ],
    flyers: Array(30).fill(null).map((_, i) => ({
      title: `Medicare Advantage Flyer ${i+1}`,
      description: `Information about Medicare Advantage plans, benefit ${i+1}`
    }))
  }
};

// Component for Flyers Grid with Pagination
function FlyersSection({ flyers }: { flyers: { title: string, description: string }[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const flyersPerPage = 6;
  
  // Calculate total pages
  const totalPages = Math.ceil(flyers.length / flyersPerPage);
  
  // Get current flyers
  const indexOfLastFlyer = currentPage * flyersPerPage;
  const indexOfFirstFlyer = indexOfLastFlyer - flyersPerPage;
  const currentFlyers = flyers.slice(indexOfFirstFlyer, indexOfLastFlyer);
  
  // Page navigation
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Product Flyers & Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentFlyers.map((flyer: { title: string, description: string }, index: number) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              {/* Placeholder image - replace with actual image links */}
              <div className="bg-gray-200 w-full h-48 mb-4 rounded flex items-center justify-center">
                <img src={`/api/placeholder/400/300`} alt={flyer.title} className="max-h-full" />
              </div>
              
              <h3 className="text-lg font-semibold text-blue-800 mb-2">{flyer.title}</h3>
              <p className="text-gray-600 mb-4">{flyer.description}</p>
              
              <div className="flex justify-between items-center">
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  View Details
                </a>
                <button 
                  className="flex items-center gap-1 bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm transition-colors"
                >
                  <Download size={16} /> Download
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-10">
            <button 
              onClick={prevPage} 
              disabled={currentPage === 1}
              className={`flex items-center gap-1 px-3 py-2 rounded ${
                currentPage === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
            >
              <ChevronLeft size={18} /> Previous
            </button>
            
            <div className="text-gray-700">
              Page {currentPage} of {totalPages}
            </div>
            
            <button 
              onClick={nextPage} 
              disabled={currentPage === totalPages}
              className={`flex items-center gap-1 px-3 py-2 rounded ${
                currentPage === totalPages 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
            >
              Next <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const params = useParams();
  const productId = params.productId as string;
  const product = productDetails[productId as keyof typeof productDetails];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold text-red-600">Product not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            {product.icon}
            <h1 className="text-4xl font-bold">{product.name}</h1>
          </div>
          <p className="text-xl max-w-3xl">{product.description}</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">About this product</h2>
          <p className="text-lg text-gray-700">{product.about}</p>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Key Features</h2>
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="text-green-500 mt-1">•</div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Benefits</h2>
              <ul className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="text-green-500 mt-1">•</div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Flyers Section - This is the new section */}
      <FlyersSection flyers={product.flyers} />

      {/* Quote Form */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
              Get a Quote for {product.name}
            </h2>
            <QuoteForm insuranceType={product.name} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}