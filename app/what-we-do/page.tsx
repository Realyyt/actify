"use client"
import Image from "next/image"
import Link from "next/link"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import {
  ThumbsUp,
  AtSign,
  Monitor,
  Target,
  BarChart,
  User,

  Lightbulb,

  Heart,
  Shield,
  Clock,
  Briefcase,
  Award,
  Users,
  ArrowRight,
  CheckCircle,
  Phone,

  Mail
} from "lucide-react"

export default function WhatWeDo() {
  return (
    <div className="who-we-are-container">
      <Navbar />
      
      {/* Hero Section with Parallax Effect */}
      <section 
        className="relative h-[60vh] md:h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/we.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
        <div className="relative z-10 text-center max-w-5xl px-6 md:px-8 py-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-teal-400">POWERING GROWTH</span> FOR LEADING INSURANCE COMPANIES
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Empowering insurance providers with innovative solutions that drive success and deliver exceptional value to clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contact Us
            </Link>
            <Link href="/learn-more" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 border border-white/30">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <div className="py-16 md:py-28 flex justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl flex border-l-4 border-r-4 border-teal-500 px-6 md:px-12 mx-4 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white rounded-full p-2 ">
            <Users size={24} />
          </div>
          <div className="text-teal-500 text-5xl md:text-7xl font-serif">&ldquo;</div>
          <div className="px-4 md:px-8 text-center">
            <p className="text-gray-700 text-lg md:text-2xl mb-6 md:mb-8 leading-relaxed italic">
              What makes this role truly fulfilling is witnessing the moment clients understand their coverage is in place and their loved ones are safeguarded.
            </p>
          </div>
          <div className="text-teal-500 text-5xl md:text-7xl font-serif self-start">&rdquo;</div>
        </div>
      </div>

      {/* Client Services Section - NEW */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-1 rounded-full">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-4 mb-6">WHAT WE DO: FOR CLIENTS</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg mb-6 max-w-4xl mx-auto">
              Securing Policies, Protecting Clients: We provide dedicated support to ensure the successful completion of insurance applications and the issuance of policies. 
              By actively identifying individuals, families, and communities in need, we expand our client base while delivering exceptional value.
            </p>
            
            <p className="text-gray-800 font-medium text-lg text-center mb-8">
              Protect your future today—choose personalized health and life insurance plans designed to secure what matters most.
            </p>
            
            <div className="flex justify-center mb-16">
              <Link href="/learn-more" className="group bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-md transition-colors flex items-center">
                Learn More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>

          {/* Health Insurance Section */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 mb-20 shadow-xl border border-gray-100">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-teal-100 p-3 rounded-full">
                <Heart className="text-teal-600" size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-navy-700 ml-4">HEALTH INSURANCE</h3>
            </div>
            
            <p className="text-gray-700 text-lg mb-8 max-w-4xl mx-auto text-center">
              Health insurance offers financial protection against medical expenses, ensuring access to quality healthcare when you need it most. From doctor visits to hospital stays, our comprehensive plans help manage the costs of staying healthy.
            </p>
            
            <p className="text-gray-800 font-medium text-center mb-8 text-lg">
              Take charge of your health and safeguard your loved ones—select the plan that delivers the care and protection you deserve.
            </p>
            
            <div className="flex justify-center mb-12">
              <Link href="/get-licensed-help" className="group bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                Get Help from a Licensed Insurance Provider
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
            
            <h4 className="text-xl font-semibold text-navy-700 mb-8 text-center">View Product Resources to Learn More:</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Accident Insurance",
                  description: "Provides cash benefits for injuries or illnesses.",
                  icon: Shield
                },
                {
                  title: "Affordable Care Act (ACA) Plans",
                  description: "Essential health benefits, including preventive care and prescription drugs.",
                  icon: Heart
                },
                {
                  title: "Critical Illness Insurance",
                  description: "Offers financial relief for covered critical illnesses.",
                  icon: Briefcase
                },
                {
                  title: "Dental & Vision",
                  description: "Covers routine and comprehensive dental care.",
                  icon: Monitor
                },
                {
                  title: "Group Health Plans",
                  description: "Includes self-funded and fully insured plans for businesses.",
                  icon: Users
                },
                {
                  title: "Individual & Family Health Plans",
                  description: "Comprehensive Health Insurance.",
                  icon: Heart
                },
                {
                  title: "Short-Term Medical Plans",
                  description: "Temporary coverage for gaps in comprehensive insurance",
                  icon: Clock
                },
                {
                  title: "Supplemental Health Plans",
                  description: "Options like cancer, disability, hospital indemnity, and vision coverage.",
                  icon: Shield
                },
                {
                  title: "Medicare Supplement/Medigap Plan",
                  description: "Cover gaps in Original Medicare, such as copayments and deductibles.",
                  icon: Award
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="flex items-center mb-4">
                    <div className="bg-teal-100 p-2 rounded-lg group-hover:bg-teal-200 transition-colors">
                      <item.icon className="text-teal-600" size={22} />
                    </div>
                    <h5 className="font-semibold text-navy-700 ml-3">{item.title}</h5>
                  </div>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <div className="flex space-x-4">
                    <Link href={`/learn-more/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-teal-500 hover:text-teal-700 font-medium text-sm flex items-center">
                      Learn More <ArrowRight size={14} className="ml-1" />
                    </Link>
                    <Link href={`/get-quote/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-indigo-500 hover:text-indigo-700 font-medium text-sm flex items-center">
                      Get a Quote <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Life Insurance Section */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 mb-20 shadow-xl border border-gray-100">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-indigo-100 p-3 rounded-full">
                <Shield className="text-indigo-600" size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-navy-700 ml-4">LIFE INSURANCE</h3>
            </div>
            
            <h4 className="text-xl font-semibold text-navy-700 mb-6 text-center">Term or permanent life insurance?</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 p-2 rounded-lg">
                    <Clock className="text-teal-600" size={22} />
                  </div>
                  <h5 className="font-semibold text-navy-700 ml-3">Term Life Insurance Coverage</h5>
                </div>
                <p className="text-gray-700">
                  This type of life insurance offers protection for a predetermined period, commonly 10, 15, 20, or 30 years. 
                  If the insured passes away within this time frame, a federal income tax-free death benefit is paid to the designated beneficiaries.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <Shield className="text-indigo-600" size={22} />
                  </div>
                  <h5 className="font-semibold text-navy-700 ml-3">Permanent Life Insurance Coverage</h5>
                </div>
                <p className="text-gray-700">
                  These policies offer lifelong protection, ensuring life insurance coverage for your entire lifetime. 
                  Like other life insurance products, they provide a federal income tax-free death benefit to beneficiaries 
                  if the insured passes away while the policy remains active.
                </p>
              </div>
            </div>
            
            <p className="text-gray-800 font-medium text-center mb-8 text-lg">
              Take the first step in securing your future—choose between term or permanent life insurance,
              tailored to meet your unique needs and priorities.
            </p>
            
            <div className="flex justify-center mb-12">
              <Link href="/get-licensed-help" className="group bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                Get Help from a Licensed Insurance Provider
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
            
            <h4 className="text-xl font-semibold text-navy-700 mb-8 text-center">View Product Resources to Learn More:</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Term Life Insurance",
                  description: "Provides coverage for a specific period, with a death benefit paid if the insured passes away during the term.",
                  icon: Clock
                },
                {
                  title: "Whole Life Insurance",
                  description: "A type of permanent life insurance offering lifelong coverage and a cash value component that grows over time.",
                  icon: Shield
                },
                {
                  title: "Universal Life Insurance",
                  description: "Another form of permanent insurance with flexible premiums and death benefits, along with a cash value that earns interest.",
                  icon: Target
                },
                {
                  title: "Indexed Universal Life Insurance",
                  description: "Links the cash value growth to a stock market index, offering potential for higher returns.",
                  icon: BarChart
                },
                {
                  title: "Final Expense Insurance",
                  description: "Designed to cover end-of-life costs, such as funeral expenses and medical bills.",
                  icon: Briefcase
                },
                {
                  title: "Group Life Insurance",
                  description: "Often provided by employers, offering basic coverage for employees at a lower cost.",
                  icon: Users
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 p-2 rounded-lg group-hover:bg-indigo-200 transition-colors">
                      <item.icon className="text-indigo-600" size={22} />
                    </div>
                    <h5 className="font-semibold text-navy-700 ml-3">{item.title}</h5>
                  </div>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <div className="flex space-x-4">
                    <Link href={`/learn-more/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-indigo-500 hover:text-indigo-700 font-medium text-sm flex items-center">
                      Learn More <ArrowRight size={14} className="ml-1" />
                    </Link>
                    <Link href={`/get-quote/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-teal-500 hover:text-teal-700 font-medium text-sm flex items-center">
                      Get a Quote <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-teal-50 to-indigo-50 p-8 rounded-xl border border-gray-200 mb-16 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <Heart className="text-teal-600" size={28} />
              </div>
              <h4 className="text-xl font-semibold text-navy-700 ml-4">Continuous Client Engagement and Experience</h4>
            </div>
            <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              Our Client Experience team ensures a seamless process by addressing all application challenges promptly and offering tailored support 
              to prospective insured clients, prioritizing their engagement, retention and satisfaction throughout.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/get-licensed-help" className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                Get Help from a Licensed Provider
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link href="/view-resources" className="bg-white text-teal-600 border border-teal-200 hover:border-teal-300 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center">
                Learn More
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Agents Section - NEW */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-1 rounded-full">AGENT RESOURCES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-4 mb-6">WHAT WE DO: FOR AGENTS</h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-100 rounded-full -mr-20 -mt-20 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-teal-100 rounded-full -ml-20 -mb-20 opacity-50"></div>
            
            <div className="flex flex-col md:flex-row items-center relative z-10">
              <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Award className="text-indigo-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-700 ml-4">Licensing and Professional Development</h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="text-teal-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700">Advanced coaching in insurance sales strategies</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-teal-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700">Expert guidance in obtaining Life and Health licenses</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-teal-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700">Ongoing professional development programs</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-teal-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700">Personalized mentorship from industry leaders</p>
                  </div>
                </div>
                
                <p className="text-indigo-800 font-medium mb-8 text-lg">
                  Launch your career in the insurance industry as a licensed Insurance Producer!
                </p>
                
                <div className="flex">
                  <Link href="/get-prequalified" className="group bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                    Get Pre-qualified
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <h4 className="font-semibold text-navy-700 mb-6 text-xl flex items-center">
                    <User className="text-indigo-500 mr-2" size={22} />
                    Pre-qualification Form
                  </h4>
                  
                  <div className="space-y-5">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" placeholder="Your full name" />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                      <div className="flex items-center">
                        <div className="bg-gray-100 p-3 rounded-l-lg border border-r-0 border-gray-300">
                          <AtSign size={18} className="text-gray-500" />
                        </div>
                        <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" placeholder="Your email" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                      <div className="flex items-center">
                        <div className="bg-gray-100 p-3 rounded-l-lg border border-r-0 border-gray-300">
                          <Phone size={18} className="text-gray-500" />
                        </div>
                        <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" placeholder="Your phone number" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-3">Area(s) of Interest</label>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <input type="checkbox" id="health" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                          <label htmlFor="health" className="ml-2 text-gray-700">Health Insurance</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="life" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                          <label htmlFor="life" className="ml-2 text-gray-700">Life Insurance</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="both" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                          <label htmlFor="both" className="ml-2 text-gray-700">Both Health and Life Insurance</label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-3">Do you have an active insurance license?</label>
                      <div className="flex space-x-6">
                        <div className="flex items-center">
                          <input type="radio" id="yes" name="license" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                          <label htmlFor="yes" className="ml-2 text-gray-700">Yes</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="no" name="license" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                          <label htmlFor="no" className="ml-2 text-gray-700">No</label>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center">
                      Submit Application
                      <ArrowRight className="ml-2" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-50 to-teal-50 rounded-2xl shadow-xl p-8 md:p-10">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <Lightbulb className="text-indigo-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-navy-700 ml-4">Impact-Focused Media and Sales Approach</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="bg-indigo-100 p-3 rounded-lg inline-block mb-4">
                  <Target className="text-indigo-600" size={24} />
                </div>
                <h4 className="font-semibold text-navy-700 mb-3">Tailored Media Strategy</h4>
                <p className="text-gray-700">
                  We align our media approach with the optimal timing and methods to empower our agents with qualified leads.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="bg-indigo-100 p-3 rounded-lg inline-block mb-4">
                  <Lightbulb className="text-indigo-600" size={24} />
                </div>
                <h4 className="font-semibold text-navy-700 mb-3">Innovative Tools</h4>
                <p className="text-gray-700">
                  Access cutting-edge resources designed to streamline your workflow and enhance client interactions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="bg-indigo-100 p-3 rounded-lg inline-block mb-4">
                  <Heart className="text-indigo-600" size={24} />
                </div>
                <h4 className="font-semibold text-navy-700 mb-3">Client Experience Focus</h4>
                <p className="text-gray-700">
                  Create meaningful connections with clients through our relationship-centered approach to insurance sales.
                </p>
              </div>
            </div>
            
            <p className="text-indigo-800 font-medium mb-8 text-lg text-center">
              Already an Insurance Agent? Transform your career—harness our cutting-edge tools and resources to 
              elevate client experiences and become the agent who truly makes a difference.            </p>
            
            <div className="flex justify-center">
              <Link href="/join-us" className="group bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                Join Us Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-navy-700 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">500+</div>
              <div className="text-lg font-medium">Licensed Agents</div>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">50K+</div>
              <div className="text-lg font-medium">Policies Issued</div>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">98%</div>
              <div className="text-lg font-medium">Client Satisfaction</div>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">24/7</div>
              <div className="text-lg font-medium">Client Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-teal-500 opacity-30 rounded-full clip-path-custom"></div>
                <Image
                  src="/res.jpg"
                  alt="Marketing professional pointing at screen"
                  width={600}
                  height={600}
                  className="rounded-full relative z-10"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-16">
              <div className="text-center lg:text-left mb-8">
                <span className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-1 rounded-full">OUR APPROACH</span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-4">MARKETING</h2>
                <div className="w-24 h-1 bg-teal-500 mx-auto lg:mx-0 mt-4"></div>
              </div>
              
              <p className="text-gray-700 mb-8 text-lg">
                Our comprehensive marketing services empower insurance providers to outpace their rivals. By collaborating with us, you gain access to a full spectrum of marketing resources tailored to your needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                  <div className="flex items-center mb-3">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <ThumbsUp className="text-teal-600" size={22} />
                    </div>
                    <h3 className="text-lg font-medium text-navy-700 ml-3">SOCIAL</h3>
                  </div>
                  <p className="text-gray-600">
                    Our social media methodology guarantees that partner brands reach their ideal audience with precision timing.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                  <div className="flex items-center mb-3">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <AtSign className="text-teal-600" size={22} />
                    </div>
                    <h3 className="text-lg font-medium text-navy-700 ml-3">EMAIL</h3>
                  </div>
                  <p className="text-gray-600">
                    We craft customized email initiatives to boost engagement metrics and foster stronger brand-consumer relationships.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                  <div className="flex items-center mb-3">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <Monitor className="text-teal-600" size={22} />
                    </div>
                    <h3 className="text-lg font-medium text-navy-700 ml-3">WEBSITES</h3>
                  </div>
                  <p className="text-gray-600">
                    Our design philosophy is rooted in user analytics and experimentation to enhance performance metrics.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                  <div className="flex items-center mb-3">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <Target className="text-teal-600" size={22} />
                    </div>
                    <h3 className="text-lg font-medium text-navy-700 ml-3">PPC</h3>
                  </div>
                  <p className="text-gray-600">
                    Our analytics-based advertising initiatives enable insurance providers to outperform competitors and optimize advertising spend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-1 rounded-full">FREQUENTLY ASKED</span>
            <h2 className="text-3xl font-bold text-navy-700 mt-4">Common Questions</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How do I know which insurance plan is right for me?",
                answer: "Our licensed insurance providers conduct a thorough assessment of your needs, budget, and goals to recommend the most suitable plans. We consider factors like your health status, family situation, and financial objectives to ensure you get the right coverage."
              },
              {
                question: "What qualifications do I need to become an insurance agent?",
                answer: "To become an insurance agent, you typically need a high school diploma or equivalent, though many successful agents have bachelor's degrees. You'll need to obtain the appropriate state licenses for the insurance products you wish to sell. We provide guidance and support throughout the licensing process."
              },
              {
                question: "How long does it take to get insurance coverage?",
                answer: "The timeline varies depending on the type of insurance. Health insurance can be effective within days of application, while life insurance may take several weeks if medical underwriting is required. Our team works diligently to expedite the process while ensuring you get the best possible coverage."
              },
              {
                question: "Can I modify my insurance coverage after purchase?",
                answer: "Yes, most insurance policies can be modified after purchase. Life events such as marriage, having children, or buying a home often necessitate changes to your coverage. Our agents can help you review and adjust your policies to ensure they continue to meet your evolving needs."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-navy-700 mb-3">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/faq" className="text-teal-600 hover:text-teal-700 font-medium flex items-center justify-center">
              View all FAQs
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Future?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Whether you&apos;re looking for insurance coverage or a rewarding career, we&apos;re here to help you take the next step.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote" className="bg-white text-indigo-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get a Quote
            </Link>
            <Link href="/careers" className="bg-transparent hover:bg-white/20 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 border-2 border-white">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <Link
          href="/contact"
          className="bg-teal-500 py-16 md:py-24 flex flex-col items-center justify-center text-white hover:bg-teal-600 transition-colors group"
        >
          <div className="bg-white/20 p-4 rounded-full mb-4 group-hover:bg-white/30 transition-colors">
            <Mail size={32} />
          </div>
          <span className="text-2xl font-bold tracking-wider mb-2">CONTACT US</span>
          <span className="text-white/80">Reach out to our team</span>
          <ArrowRight className="mt-4 group-hover:translate-x-2 transition-transform" size={24} />
        </Link>
        <Link
          href="/careers"
          className="bg-indigo-700 py-16 md:py-24 flex flex-col items-center justify-center text-white hover:bg-indigo-800 transition-colors group"
        >
          <div className="bg-white/20 p-4 rounded-full mb-4 group-hover:bg-white/30 transition-colors">
            <Briefcase size={32} />
          </div>
          <span className="text-2xl font-bold tracking-wider mb-2">JOIN OUR TEAM</span>
          <span className="text-white/80">Explore career opportunities</span>
          <ArrowRight className="mt-4 group-hover:translate-x-2 transition-transform" size={24} />
        </Link>
      </section>

      <Footer />
    </div>
  )
}
