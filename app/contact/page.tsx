"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { ChevronDown, MapPin, Loader2 } from "lucide-react"
import { submitContactForm } from "../actions/contact-form"

// Form field type
type FormField = {
  value: string
  error?: string
}

// Initial form state
const initialFormState = {
  fullName: { value: "" },
  email: { value: "" },
  phone: { value: "" },
  topic: { value: "" },
  message: { value: "" },
}

export default function Contact() {
  // Form state
  const [formState, setFormState] = useState<Record<string, FormField>>(initialFormState)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formResponse, setFormResponse] = useState<{ success?: boolean; message?: string } | null>(null)

  // Update form field
  const updateField = (field: string, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: { value, error: undefined },
    }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Reset form response
    setFormResponse(null)

    // Set submitting state
    setIsSubmitting(true)

    // Prepare form data
    const formData = {
      fullName: formState.fullName.value,
      email: formState.email.value,
      phone: formState.phone.value,
      topic: formState.topic.value,
      message: formState.message.value,
    }

    try {
      // Submit form
      const response = await submitContactForm(formData)

      if (response.success) {
        // Success
        setFormResponse({ success: true, message: response.message })
        // Reset form
        setFormState(initialFormState)
      } else if (response.fieldErrors) {
        // Field validation errors
        const newFormState = { ...formState }

        for (const [field, error] of Object.entries(response.fieldErrors)) {
          newFormState[field] = {
            value: formState[field]?.value || "",
            error,
          }
        }

        setFormState(newFormState)
      } else {
        // General error
        setFormResponse({ success: false, message: response.message })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setFormResponse({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="who-we-are-container">
      <Navbar />
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/we.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative z-10 text-5xl font-bold text-white text-center max-w-4xl px-4">
          WE POWER GROWTH FOR LEADING INSURANCE COMPANIES
        </h1>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Contact Info */}
            <div className="lg:w-1/3">
              <div className="mb-8">
                <p className="text-gray-700 mb-4">Learn more about how TRANZACT can partner with your business.</p>
                <p className="mb-2">
                  Call{" "}
                  <a href="tel:201.461.5665" className="text-teal-500 hover:underline">
                    201.461.5665
                  </a>{" "}
                  or complete this form.
                </p>
              </div>

              <div>
                <p className="text-gray-700 mb-2">
                  For media inquiries, email us at{" "}
                  <a href="mailto:press@tranzact.net" className="text-teal-500 hover:underline">
                    press@tranzact.net
                  </a>{" "}
                  or call us at{" "}
                  <a href="tel:201.242.3702" className="text-teal-500 hover:underline">
                    201.242.3702
                  </a>
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:w-2/3">
              {formResponse?.success ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded">
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p>{formResponse.message}</p>
                  <button className="mt-4 text-teal-600 hover:underline" onClick={() => setFormResponse(null)}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Show general error message if any */}
                  {formResponse?.success === false && formResponse.message && (
                    <div className="mb-6 bg-red-50 border border-red-200 text-red-800 p-4 rounded">
                      {formResponse.message}
                    </div>
                  )}

                  <div className="mb-6">
                    <label htmlFor="fullName" className="block text-gray-600 uppercase text-sm mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className={`w-full border ${formState.fullName.error ? "border-red-500" : "border-gray-300"} p-3 focus:outline-none focus:border-teal-500`}
                      value={formState.fullName.value}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      required
                    />
                    {formState.fullName.error && (
                      <p className="text-red-500 text-sm mt-1">{formState.fullName.error}</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-600 uppercase text-sm mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full border ${formState.email.error ? "border-red-500" : "border-gray-300"} p-3 focus:outline-none focus:border-teal-500`}
                      value={formState.email.value}
                      onChange={(e) => updateField("email", e.target.value)}
                      required
                    />
                    {formState.email.error && <p className="text-red-500 text-sm mt-1">{formState.email.error}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-600 uppercase text-sm mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className={`w-full border ${formState.phone.error ? "border-red-500" : "border-gray-300"} p-3 focus:outline-none focus:border-teal-500`}
                      value={formState.phone.value}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                    {formState.phone.error && <p className="text-red-500 text-sm mt-1">{formState.phone.error}</p>}
                  </div>

                  <div className="mb-6 relative">
                    <label htmlFor="topic" className="block text-gray-600 uppercase text-sm mb-2">
                      Topic
                    </label>
                    <div className="relative">
                      <div
                        className={`w-full border ${formState.topic.error ? "border-red-500" : "border-gray-300"} p-3 flex justify-between items-center cursor-pointer`}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        <span>{formState.topic.value || "Select a topic"}</span>
                        <ChevronDown size={20} />
                      </div>

                      {isDropdownOpen && (
                        <div className="absolute z-10 w-full bg-white border border-gray-300 mt-1">
                          {["General Inquiry", "Sales", "Marketing", "Careers", "Media", "Other"].map((item) => (
                            <div
                              key={item}
                              className="p-3 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                updateField("topic", item)
                                setIsDropdownOpen(false)
                              }}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {formState.topic.error && <p className="text-red-500 text-sm mt-1">{formState.topic.error}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-600 uppercase text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className={`w-full border ${formState.message.error ? "border-red-500" : "border-gray-300"} p-3 focus:outline-none focus:border-teal-500`}
                      value={formState.message.value}
                      onChange={(e) => updateField("message", e.target.value)}
                      required
                    ></textarea>
                    {formState.message.error && <p className="text-red-500 text-sm mt-1">{formState.message.error}</p>}
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="bg-orange-500 text-white px-8 py-3 uppercase font-medium hover:bg-orange-600 transition-colors flex items-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin mr-2" size={18} />
                          Submitting...
                        </>
                      ) : (
                        <>Submit &gt;</>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Our Offices Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-navy-800 uppercase mb-12">Our Offices</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fort Lee Office */}
            <div className="bg-white border border-gray-200">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Fort Lee Office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-navy-800 uppercase">Fort Lee</h3>
                <p className="text-gray-600 uppercase mb-4">New Jersey</p>

                <a href="tel:201.461.5665" className="text-teal-500 hover:underline block mb-2">
                  201.461.5665
                </a>
                <p className="mb-1">2200 Fletcher Avenue, 4th Floor</p>
                <p className="mb-4">Fort Lee, NJ 07024</p>

                <div className="flex justify-end">
                  <MapPin className="text-orange-500" size={24} />
                </div>
              </div>
            </div>

            {/* Charlotte South Office */}
            <div className="bg-white border border-gray-200">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Charlotte South Office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-navy-800 uppercase">Charlotte South</h3>
                <p className="text-gray-600 uppercase mb-4">North Carolina</p>

                <a href="tel:866.807.9175" className="text-teal-500 hover:underline block mb-2">
                  866.807.9175
                </a>
                <p className="mb-1">600 Forest Point Circle, Suite 175</p>
                <p className="mb-2">Charlotte, NC 28273</p>
                <a
                  href="mailto:southclt.recruitment@tzinsurance.com"
                  className="text-teal-500 hover:underline block mb-2"
                >
                  southclt.recruitment@tzinsurance.com
                </a>

                <div className="flex justify-end">
                  <MapPin className="text-orange-500" size={24} />
                </div>
              </div>
            </div>

            {/* Charlotte North Office */}
            <div className="bg-white border border-gray-200">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Charlotte North Office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-navy-800 uppercase">Charlotte North</h3>
                <p className="text-gray-600 uppercase mb-4">North Carolina</p>

                <a href="tel:866.807.9175" className="text-teal-500 hover:underline block mb-2">
                  866.807.9175
                </a>
                <p className="mb-1">8711 University East Drive, Suite 200</p>
                <p className="mb-2">Charlotte, NC 28213</p>
                <a href="mailto:CLT_Recruitment@tzinsurance.com" className="text-teal-500 hover:underline block mb-2">
                  CLT_Recruitment@tzinsurance.com
                </a>

                <div className="flex justify-end">
                  <MapPin className="text-orange-500" size={24} />
                </div>
              </div>
            </div>

            {/* Beckley Office */}
            <div className="bg-white border border-gray-200">
              <div className="h-48 relative">
                <Image src="/placeholder.svg?height=200&width=400" alt="Beckley Office" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-navy-800 uppercase">Beckley</h3>
                <p className="text-gray-600 uppercase mb-4">West Virginia</p>

                <a href="tel:201.461.5665" className="text-teal-500 hover:underline block mb-2">
                  201.461.5665
                </a>
                <p className="mb-1">221-B Business Street</p>
                <p className="mb-4">Beckley, WV 25801</p>

                <div className="flex justify-end">
                  <MapPin className="text-orange-500" size={24} />
                </div>
              </div>
            </div>

            {/* Canton Office */}
            <div className="bg-white border border-gray-200">
              <div className="h-48 relative">
                <Image src="/placeholder.svg?height=200&width=400" alt="Canton Office" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-navy-800 uppercase">Canton</h3>
                <p className="text-gray-600 uppercase mb-4">Ohio</p>

                <a href="tel:866.807.9175" className="text-teal-500 hover:underline block mb-2">
                  866.807.9175
                </a>
                <p className="mb-1">219 E Maple Street, Suite 2000</p>
                <p className="mb-2">North Canton, OH 44720</p>
                <a href="mailto:CAKrecruiting@tzinsurance.com" className="text-teal-500 hover:underline block mb-2">
                  CAKrecruiting@tzinsurance.com
                </a>

                <div className="flex justify-end">
                  <MapPin className="text-orange-500" size={24} />
                </div>
              </div>
            </div>

            {/* Lima Office */}
            <div className="bg-white border border-gray-200">
              <div className="h-48 relative">
                <Image src="/placeholder.svg?height=200&width=400" alt="Lima Office" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-navy-800 uppercase">Lima</h3>
                <p className="text-gray-600 uppercase mb-4">Peru</p>

                <a href="tel:+51914360838" className="text-teal-500 hover:underline block mb-2">
                  +51 914 360 838
                </a>
                <p className="mb-1">Las Orquídeas 675, Floor 10 - 11</p>
                <p className="mb-2">San Isidro, Lima, Perú - 15046</p>
                <a href="mailto:LIMA_recruitment@tranzact.net" className="text-teal-500 hover:underline block mb-2">
                  LIMA_recruitment@tranzact.net
                </a>

                <div className="flex justify-end">
                  <MapPin className="text-orange-500" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <Link
          href="/contact"
          className="bg-teal-500 py-20 flex items-center justify-center text-white font-bold tracking-wider text-xl"
        >
          <span>CONTACT US &gt;</span>
        </Link>
        <Link
          href="/careers"
          className="bg-purple-800 py-20 flex items-center justify-center text-white font-bold tracking-wider text-xl"
        >
          <span>JOIN OUR TEAM &gt;</span>
        </Link>
      </section>

      <Footer />
    </div>
  )
}

