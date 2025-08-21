import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Ensure this route runs on the Node.js runtime (not Edge)
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  topic: z.string().min(1, { message: "Please select a topic" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

function getEnv(name: string, fallback?: string): string | undefined {
  const val = process.env[name]
  if (val && val.length > 0) return val
  return fallback
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate form data
    const validatedData = formSchema.parse(body)

    const apiKey = getEnv('BREVO_API_KEY')
    // Fallbacks to the values that worked locally
    const senderEmail = getEnv('BREVO_SENDER_EMAIL', 'farm360ng@gmail.com')
    const senderName = getEnv('BREVO_SENDER_NAME', 'actify Website')
    const toEmail = getEnv('BREVO_TO_EMAIL', 'farm360ng@gmail.com')

    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: 'Email service not configured. Missing BREVO_API_KEY.' },
        { status: 500 }
      )
    }

    // Prepare the API request to Brevo
    const url = 'https://api.brevo.com/v3/smtp/email'

    const data = {
      sender: {
        name: senderName,
        email: senderEmail,
      },
      to: [
        {
          email: toEmail,
          name: 'actify Contact',
        },
      ],
      replyTo: {
        email: validatedData.email,
        name: validatedData.fullName,
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
      `,
    }

    // Send the email using Brevo API
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      // Brevo sometimes returns non-JSON error bodies; fall back to text
      let errorBody: unknown
      try {
        errorBody = await response.json()
      } catch {
        errorBody = await response.text()
      }

      return NextResponse.json(
        {
          success: false,
          message:
            'Email sending failed. Verify API key, and that the sender email is verified in Brevo.',
          details: typeof errorBody === 'string' ? errorBody : (errorBody as Record<string, unknown>),
        },
        { status: 502 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully! We will get back to you soon.',
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors = error.errors.reduce((acc, curr) => {
        const field = curr.path[0]
        acc[field as string] = curr.message
        return acc
      }, {} as Record<string, string>)

      return NextResponse.json({ success: false, fieldErrors }, { status: 400 })
    }

    return NextResponse.json(
      { success: false, message: 'Server error handling your request.' },
      { status: 500 }
    )
  }
}
