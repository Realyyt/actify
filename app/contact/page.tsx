"use client"
import type React from "react"
import { useState } from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { ChevronDown, Loader2 } from "lucide-react"

type FormField = {
  value: string
  error?: string
}

type ContactAPIResult = {
  success?: boolean
  message?: string
  fieldErrors?: Record<string, string>
  details?: unknown
}

const initialFormState = {
  fullName: { value: "" },
  email: { value: "" },
  phone: { value: "" },
  topic: { value: "" },
  subject: { value: "" },
  message: { value: "" },
}

export default function Contact() {
  const [formState, setFormState] = useState<Record<string, FormField>>(initialFormState)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formResponse, setFormResponse] = useState<{ success?: boolean; message?: string } | null>(null)

  const updateField = (field: string, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: { value, error: undefined },
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormResponse(null)
    setIsSubmitting(true)

    const formData = {
      fullName: formState.fullName.value,
      email: formState.email.value,
      phone: formState.phone.value,
      topic: formState.topic.value,
      subject: formState.subject?.value || "",
      message: formState.message.value,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const rawBody = await response.text()
      let result: ContactAPIResult
      try {
        result = rawBody ? JSON.parse(rawBody) : {}
      } catch {
        result = { success: false, message: rawBody }
      }

      if (result.success) {
        setFormResponse({ success: true, message: result.message })
        setFormState(initialFormState)
      } else if (result.fieldErrors) {
        const newFormState = { ...formState }
        for (const [field, error] of Object.entries(result.fieldErrors)) {
          newFormState[field] = {
            value: formState[field]?.value || "",
            error: error as string,
          }
        }
        setFormState(newFormState)
      } else {
        const details = typeof result?.details === 'string' ? `\nDetails: ${result.details}` : ''
        setFormResponse({ success: false, message: (result?.message || 'Failed to send message.') + details })
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
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/we.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-gray-900/30"></div>
        </div>
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-4">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Reach out to the Impact Delivery Group team. We&apos;ll respond within 2 business days.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Contact Info */}
            <div className="w-full lg:w-1/3">
              <div className="mb-8">
                <h2 className="text-2xl font-light text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  To learn more about Impact Delivery Group, LLC and explore partnership opportunities, call{" "}
                  <a href="tel:910.418.0181" className="text-gray-900 hover:underline">
                    910.418.0181
                  </a>{" "}
                  or complete the form below.
                </p>
                <p className="mb-2 text-sm md:text-base text-gray-600">
                  For media inquiries, email us at{" "}
                  <a href="mailto:wecanhelp@impactdeliverygroup.com" className="text-gray-900 hover:underline">
                    wecanhelp@impactdeliverygroup.com
                  </a>{" "}
                  or call us at{" "}
                  <a href="tel:910.418.0181" className="text-gray-900 hover:underline">
                    910.418.0181
                  </a>
                </p>
              </div>

              <div className="bg-gray-50 p-6 border border-gray-100">
                <h3 className="font-medium text-gray-900 mb-2">Impact Delivery Group, LLC</h3>
                <p className="text-gray-600">1457 Kelly Road, #245</p>
                <p className="text-gray-600">Apex, NC 27502 USA</p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="w-full lg:w-2/3">
              {formResponse?.success ? (
                <div className="bg-gray-50 border border-gray-100 text-gray-900 p-8">
                  <h3 className="text-lg md:text-xl font-light mb-4">Thank You!</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4">{formResponse.message}</p>
                  <button 
                    className="text-gray-900 hover:text-gray-600 underline text-sm md:text-base"
                    onClick={() => setFormResponse(null)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Show general error message if any */}
                  {formResponse?.success === false && formResponse.message && (
                    <div className="mb-6 p-4 bg-gray-50 border border-gray-100 text-gray-900 text-sm md:text-base">
                      {formResponse.message}
                    </div>
                  )}

                  <div className="mb-6">
                    <label htmlFor="fullName" className="block text-gray-600 uppercase text-xs md:text-sm mb-2 tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className={`w-full border ${formState.fullName.error ? "border-red-500" : "border-gray-200"} p-3 focus:outline-none focus:border-gray-400 text-sm md:text-base transition-colors`}
                      value={formState.fullName.value}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      required
                    />
                    {formState.fullName.error && (
                      <p className="text-red-500 text-xs md:text-sm mt-1">{formState.fullName.error}</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-600 uppercase text-xs md:text-sm mb-2 tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full border ${formState.email.error ? "border-red-500" : "border-gray-200"} p-3 focus:outline-none focus:border-gray-400 text-sm md:text-base transition-colors`}
                      value={formState.email.value}
                      onChange={(e) => updateField("email", e.target.value)}
                      required
                    />
                    {formState.email.error && <p className="text-red-500 text-xs md:text-sm mt-1">{formState.email.error}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-600 uppercase text-xs md:text-sm mb-2 tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className={`w-full border ${formState.phone.error ? "border-red-500" : "border-gray-200"} p-3 focus:outline-none focus:border-gray-400 text-sm md:text-base transition-colors`}
                      value={formState.phone.value}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                    {formState.phone.error && <p className="text-red-500 text-xs md:text-sm mt-1">{formState.phone.error}</p>}
                  </div>

                  <div className="mb-6 relative">
                    <label htmlFor="topic" className="block text-gray-600 uppercase text-xs md:text-sm mb-2 tracking-wider">
                      Topic
                    </label>
                    <div className="relative">
                      <div
                        className={`w-full border ${formState.topic.error ? "border-red-500" : "border-gray-200"} p-3 flex justify-between items-center cursor-pointer text-sm md:text-base transition-colors`}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        <span>{formState.topic.value || "Select a topic"}</span>
                        <ChevronDown size={18} className="shrink-0" />
                      </div>

                      {isDropdownOpen && (
                        <div className="absolute z-10 w-full bg-white border border-gray-200 mt-1">
                          {["General Inquiry", "Personal Protection Products", "Aid-To-Trade Products", "Careers", "Media", "Other"].map((item) => (
                            <div
                              key={item}
                              className="p-3 hover:bg-gray-50 cursor-pointer text-sm md:text-base"
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
                    <label htmlFor="subject" className="block text-gray-600 uppercase text-xs md:text-sm mb-2 tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className={`w-full border ${formState.subject?.error ? "border-red-500" : "border-gray-200"} p-3 focus:outline-none focus:border-gray-400 text-sm md:text-base transition-colors`}
                      value={formState.subject?.value || ""}
                      onChange={(e) => updateField("subject", e.target.value)}
                      required
                    />
                    {formState.subject?.error && <p className="text-red-500 text-xs md:text-sm mt-1">{formState.subject.error}</p>}
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-gray-600 uppercase text-xs md:text-sm mb-2 tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className={`w-full border ${formState.message.error ? "border-red-500" : "border-gray-200"} p-3 focus:outline-none focus:border-gray-400 text-sm md:text-base transition-colors`}
                      value={formState.message.value}
                      onChange={(e) => updateField("message", e.target.value)}
                      required
                    ></textarea>
                    {formState.message.error && <p className="text-red-500 text-sm mt-1">{formState.message.error}</p>}
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="bg-gray-900 text-white px-8 py-3 uppercase text-sm font-medium tracking-wider hover:bg-gray-800 transition-colors flex items-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin mr-2" size={18} />
                          Submitting...
                        </>
                      ) : (
                        <>Send Message</>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
