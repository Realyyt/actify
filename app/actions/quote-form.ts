'use server'

import { z } from 'zod'

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phoneNumber: z.string().optional(),
  insuranceType: z.string().min(1, { message: "Please select an insurance type" }),
})

type FormData = z.infer<typeof formSchema>

export async function submitQuoteForm(formData: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)
    
    // Prepare the API request to Brevo (or any other service)
    const url = 'https://api.brevo.com/v3/smtp/email'
    
    const data = {
      sender: {
        name: "actify Website",
        email: "farm360ng@gmail.com"
      },
      to: [
        {
          email: "farm360ng@gmail.com", // Replace with your recipient email
          name: "actify Quote"
        }
      ],
      replyTo: {
        email: validatedData.email,
        name: validatedData.fullName
      },
      subject: `Quote Request: ${validatedData.insuranceType}`,
      htmlContent: `
        <html>
          <body>
            <h2>New Quote Request</h2>
            <p><strong>Name:</strong> ${validatedData.fullName}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Phone:</strong> ${validatedData.phoneNumber || 'Not provided'}</p>
            <p><strong>Insurance Type:</strong> ${validatedData.insuranceType}</p>
          </body>
        </html>
      `
    }
    
    // Send the email using Brevo API
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY || '',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    
    if (!response.ok) {
      const errorData = await response.json()
      console.error('Brevo API error:', errorData)
      return { success: false, message: 'Failed to send quote request. Please try again later.' }
    }
    
    return { success: true, message: 'Your quote request has been sent successfully! We will get back to you soon.' }
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Return validation errors
      const fieldErrors = error.errors.reduce((acc, curr) => {
        const field = curr.path[0]
        acc[field as string] = curr.message
        return acc
      }, {} as Record<string, string>)
      
      return { success: false, fieldErrors }
    }
    
    console.error('Form submission error:', error)
    return { success: false, message: 'An unexpected error occurred. Please try again later.' }
  }
} 