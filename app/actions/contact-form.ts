'use server'

import { z } from 'zod'

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  topic: z.string().min(1, { message: "Please select a topic" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type FormData = z.infer<typeof formSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)
    
    // Prepare the API request to Brevo
    const url = 'https://api.brevo.com/v3/smtp/email'
    
    const data = {
      sender: {
        name: "actify Website",
        email: "farm360ng@gmail.com"
      },
      to: [
        {
          email: "farm360ng@gmail.com", // Replace with your recipient email
          name: "actify Contact"
        }
      ],
      replyTo: {
        email: validatedData.email,
        name: validatedData.fullName
      },
      subject: `Contact Form: ${validatedData.topic}`,
      htmlContent: `
        <html>
          <body>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${validatedData.fullName}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
            <p><strong>Topic:</strong> ${validatedData.topic}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
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
      return { success: false, message: 'Failed to send message. Please try again later.' }
    }
    
    return { success: true, message: 'Your message has been sent successfully! We will get back to you soon.' }
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
