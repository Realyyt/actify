"use client"
import Image from "next/image"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { useState } from "react"
import Link from "next/link"

// Define the leader type
type Leader = {
  id: number
  name: string
  title: string
  department: string[]
  image: string
}

export default function Leadership() {
  // Define all leaders
  const leaders: Leader[] = [
    {
      id: 1,
      name: "ANDY NELSON",
      title: "Chief Executive Officer",
      department: ["leadership", "account_management"],
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 2,
      name: "MITCH GINZBURG",
      title: "President",
      department: ["leadership", "operations"],
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 3,
      name: "COREY KAYLOR",
      title: "Chief Operating Officer",
      department: ["leadership", "operations"],
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 4,
      name: "JAKE DAVIDOW",
      title: "Chief Marketing Officer",
      department: ["leadership", "marketing_media_analytics"],
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 5,
      name: "BRIAN LUSK",
      title: "Chief Sales Officer",
      department: ["leadership", "sales"],
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 6,
      name: "AMY ARIANO",
      title: "Chief Technology Officer",
      department: ["leadership", "technology"],
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 7,
      name: "MICHELE GARCIA",
      title: "Chief Financial Officer",
      department: ["leadership", "finance_legal_compliance"],
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 8,
      name: "SARAH SHERMAN",
      title: "VP of Human Resources",
      department: ["leadership", "human_resources_licensing"],
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 9,
      name: "TATSIANA PISARENKA",
      title: "VP of Professional Services",
      department: ["leadership", "professional_services"],
      image: "/placeholder.svg?height=400&width=300",
    },
  ]

  // State for the selected department
  const [selectedDepartment, setSelectedDepartment] = useState("leadership")

  // Filter leaders based on selected department
  const filteredLeaders = leaders.filter((leader) => leader.department.includes(selectedDepartment))

  // Department options
  const departments = [
    { id: "leadership", name: "LEADERSHIP" },
    { id: "account_management", name: "ACCOUNT MANAGEMENT" },
    { id: "finance_legal_compliance", name: "FINANCE, LEGAL AND COMPLIANCE" },
    { id: "human_resources_licensing", name: "HUMAN RESOURCES & LICENSING" },
    { id: "marketing_media_analytics", name: "MARKETING, MEDIA & ANALYTICS" },
    { id: "operations", name: "OPERATIONS" },
    { id: "professional_services", name: "PROFESSIONAL SERVICES" },
    { id: "sales", name: "SALES" },
    { id: "technology", name: "TECHNOLOGY" },
  ]

  return (
    <div className="who-we-are-container">
      <Navbar />
      <section className="relative h-[50vh] md:h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/lead.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold text-white text-center max-w-4xl px-4">
          DRIVING EXCEPTIONAL PERFORMANCE
        </h1>
      </section>

      {/* Testimonial Section */}
      <div className="py-24 md:py-48 flex justify-center bg-gray-50">
        <div className="max-w-4xl flex border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-teal-500 px-4 md:px-12 mx-4">
          <div className="text-teal-500 text-4xl md:text-7xl">&quot;</div>
          <div className="px-4 md:px-8 text-center">
            <p className="text-gray-700 text-lg md:text-2xl mb-4 md:mb-8 leading-relaxed">
              What makes this role truly fulfilling is witnessing the moment clients understand their coverage is in
              place and their loved ones are safeguarded.
            </p>
            <p className="font-medium text-base md:text-lg">Sarah Thompson</p>
            <p className="text-xs md:text-sm text-gray-600">Senior Insurance Consultant</p>
          </div>
          <div className="text-teal-500 text-4xl md:text-7xl self-start">&rdquo;</div>
        </div>
      </div>

      {/* Leadership Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* Department Sidebar */}
            <div className="lg:w-1/4 mb-8 lg:mb-0">
              <ul className="space-y-2 md:space-y-4 text-center md:text-right pr-0 md:pr-8">
                {departments.map((dept) => (
                  <li key={dept.id}>
                    <button
                      className={`text-xs md:text-sm font-medium ${
                        selectedDepartment === dept.id ? "text-teal-500 font-bold" : "text-gray-700 hover:text-teal-500"
                      }`}
                      onClick={() => setSelectedDepartment(dept.id)}
                    >
                      {dept.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Leaders Grid */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredLeaders.map((leader) => (
                  <div key={leader.id} className="flex flex-col">
                    <div className="relative aspect-[3/4] mb-2 overflow-hidden">
                      <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                    </div>
                    <div className="bg-teal-500 text-white p-2 md:p-3 text-center">
                      <h3 className="font-medium text-sm md:text-base">{leader.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2">
        <Link
          href="/contact"
          className="bg-teal-500 py-12 md:py-20 flex items-center justify-center text-white font-bold tracking-wider text-lg md:text-xl"
        >
          <span>CONTACT US &gt;</span>
        </Link>
        <Link
          href="/careers"
          className="bg-purple-800 py-12 md:py-20 flex items-center justify-center text-white font-bold tracking-wider text-lg md:text-xl"
        >
          <span>JOIN OUR TEAM &gt;</span>
        </Link>
      </section>

      <Footer />
    </div>
  )
}
