import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

// Ensure this route runs on the Node.js runtime (not Edge)
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface InquiryRequestBody {
  fullName: string
  jobTitle: string
  workEmail: string
  organizationName: string
  sectorType: string
  countryOfImplementation: string
  pathway: string
  pathwayName: string
  programSize?: string
  mainChallenge?: string
  bottleneck?: string
  trainingNeeded?: string
  assetClass?: string
  partnershipModel?: string
}

// Form validation schema
const baseFormSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters" }),
  jobTitle: z.string().min(2, { message: "Job title is required" }),
  workEmail: z.string().email({ message: "Please enter a valid email address" }),
  organizationName: z.string().min(2, { message: "Organization name is required" }),
  sectorType: z.string().min(1, { message: "Please select a sector type" }),
  countryOfImplementation: z.string().min(2, { message: "Country is required" }),
  pathway: z.string().min(1, { message: "Pathway is required" }),
  pathwayName: z.string().min(1, { message: "Pathway name is required" }),
})

const pathway1Schema = z.object({
  programSize: z.string().min(10, { message: "Please describe your program or investment size (at least 10 characters)" }),
  mainChallenge: z.string().min(10, { message: "Please describe the main challenge preventing self-sustaining outcomes (at least 10 characters)" }),
})

const pathway2Schema = z.object({
  bottleneck: z.string().min(10, { message: "Please describe your primary operational bottleneck or daily workflow friction point (at least 10 characters)" }),
  trainingNeeded: z.string().min(10, { message: "Please describe the type of hands-on training or technical support needed (at least 10 characters)" }),
})

const pathway3Schema = z.object({
  assetClass: z.string().min(10, { message: "Please describe the specific asset class, industry, or public utility you are seeking to enter or co-finance (at least 10 characters)" }),
  partnershipModel: z.enum(['Yes', 'No'], { message: "Please select Yes or No for partnership model preference" }),
})

function getEnv(name: string, fallback?: string): string | undefined {
  const val = process.env[name]
  if (val && val.length > 0) return val
  return fallback
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate base form data
    const baseValidated = baseFormSchema.parse(body)

    // Validate pathway-specific fields
    if (baseValidated.pathway === '1') {
      pathway1Schema.parse(body)
    } else if (baseValidated.pathway === '2') {
      pathway2Schema.parse(body)
    } else if (baseValidated.pathway === '3') {
      pathway3Schema.parse(body)
    }

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

    // Format pathway-specific data for email
    let pathwayDetails = ''
    if (baseValidated.pathway === '1') {
      const typedBody = body as InquiryRequestBody
      pathwayDetails = `
        <p><strong>Program/Investment Size:</strong> ${typedBody.programSize}</p>
        <p><strong>Main Challenge to Self-Sustainability:</strong> ${typedBody.mainChallenge}</p>
      `
    } else if (baseValidated.pathway === '2') {
      const typedBody = body as InquiryRequestBody
      pathwayDetails = `
        <p><strong>Primary Operational Bottleneck:</strong> ${typedBody.bottleneck}</p>
        <p><strong>Training/Support Needed:</strong> ${typedBody.trainingNeeded}</p>
      `
    } else if (baseValidated.pathway === '3') {
      const typedBody = body as InquiryRequestBody
      pathwayDetails = `
        <p><strong>Asset Class/Industry/Utility:</strong> ${typedBody.assetClass}</p>
        <p><strong>Preferred Partnership Model:</strong> ${typedBody.partnershipModel}</p>
      `
    }

    const html = `
      <html>
        <body>
          <h2>New IDG Inquiry</h2>
          <p><strong>Pathway:</strong> ${baseValidated.pathwayName}</p>
          <p><strong>Name:</strong> ${baseValidated.fullName}</p>
          <p><strong>Job Title:</strong> ${baseValidated.jobTitle}</p>
          <p><strong>Email:</strong> ${baseValidated.workEmail}</p>
          <p><strong>Organization:</strong> ${baseValidated.organizationName}</p>
          <p><strong>Sector Type:</strong> ${baseValidated.sectorType}</p>
          <p><strong>Country of Implementation:</strong> ${baseValidated.countryOfImplementation}</p>
          ${pathwayDetails}
        </body>
      </html>
    `

    const fromAddress: string = from || 'Impact Delivery Group <onboarding@resend.dev>'
    const toAddress: string = to || 'wecanhelp@impactdeliverygroup.com'

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      subject: `New IDG Inquiry — ${baseValidated.pathwayName} — ${baseValidated.organizationName}`,
      html,
      replyTo: baseValidated.workEmail,
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
      message: 'Your inquiry has been submitted successfully! We will get back to you shortly.',
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