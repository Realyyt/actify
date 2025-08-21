import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

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

    // Resend configuration
    const apiKey = getEnv('RESEND_API_KEY')
    const from = getEnv('RESEND_FROM', 'Impact Delivery Group <onboarding@resend.dev>')
    const to = getEnv('RESEND_TO', 'wecanhelp@impactdeliverygroup.com')

    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: 'Email service not configured. Missing RESEND_API_KEY.' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    const html = `
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

    const fromAddress: string = from || 'Impact Delivery Group <onboarding@resend.dev>'
    const toAddress: string = to || 'wecanhelp@impactdeliverygroup.com'

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      subject: `Contact Form: ${validatedData.topic}`,
      html,
      replyTo: validatedData.email,
    })

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message:
            'Email sending failed. Verify your Resend API key, from address, and domain verification.',
          details: error,
        },
        { status: 502 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully! We will get back to you soon.',
      // optionally include id: data?.id
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
