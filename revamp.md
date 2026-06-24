# IDG Website Revamp — Cursor Agent Prompt
# Loop-Verify-Correct Protocol · Next.js 15 App Router

---

## BEFORE YOU WRITE A SINGLE LINE OF CODE

Run the following audit commands and read every file they surface. Do not skip this step.

```bash
ls -la
cat package.json
cat tailwind.config.ts
cat app/globals.css
cat app/layout.tsx
cat app/page.tsx
cat app/components/navbar.tsx
cat app/components/footer.tsx
cat app/contact/page.tsx
cat app/api/contact/route.ts
cat app/actions/contact-form.ts
```

You are working in the **tranzact** repository — an existing Next.js 15 (App Router) + React 19 + Tailwind CSS v4 codebase. Key facts you must respect before touching anything:

- **DO NOT change any colours.** The site has an established colour palette via CSS variables in `tailwind.config.ts` and `globals.css`. Use every existing colour token as-is. If the current navbar is `bg-blue-900`, keep it `bg-blue-900`. All card, background, border, and text colours stay exactly as they are today.
- **DO NOT change the font.** The project uses Geist via `next/font`. Do not introduce Inter or any other typeface.
- **DO NOT rewrite the email system.** `/api/contact/route.ts` (Resend) and `/app/actions/contact-form.ts` (Brevo fallback) are already wired. Only the new `/api/inquiry/route.ts` route needs to be created, using the same Resend pattern already in the codebase.
- **DO NOT change `tailwind.config.ts`, `globals.css`, `next.config.ts`, `netlify.toml`, or `tsconfig.json`** unless a checklist item explicitly requires it.
- **DO NOT delete any existing pages** (who-we-are, what-we-do, our-program-products, resources, careers, terms-of-use, privacy-policy, disclaimer). They may become unreachable from the new nav but they must not be deleted.
- **The existing sidebar drawer pattern in `navbar.tsx` is correct.** Adapt it — do not rebuild it from zero.
- **Zod is already installed.** Use it for all new form validation.
- **Swiper v11 is installed.** Don't remove it even if the new homepage doesn't use it.

---

## ⚙️ AGENT LOOP PROTOCOL

```
FOR EACH SECTION (1 through 9):
  STEP 1 — AUDIT   Read the existing file(s) for this section. List what currently exists.
  STEP 2 — DELTA   List exactly what needs to change vs. what should stay the same.
  STEP 3 — IMPLEMENT   Make only the changes from the delta list.
  STEP 4 — VERIFY  Run every checklist item. Mark [PASS] or [FAIL — reason].
  STEP 5 — CORRECT Fix every [FAIL].
  STEP 6 — RE-VERIFY  Confirm all items now [PASS].
  STEP 7 — LOG     Print "SECTION [N] — ALL PASS" then move to next section.

Never proceed with any [FAIL] outstanding.
Never touch files outside a section's scope while working that section.
```

---

## SECTION 1 — NAVIGATION (`app/components/navbar.tsx`)

### What changes
The existing navbar already has the right structure (logo left, hamburger mobile drawer). Update **only**:

1. **Nav link labels and routes** — replace whatever links currently exist with exactly these 4:

| Label | Route |
|---|---|
| Home | `/` |
| Our Strategy | `/about` |
| Capabilities | `/capabilities` |
| Contact Us | `/contact` |

2. **Remove all other nav links.** The links to Who We Are, What We Do, Our Insurance Products (external), Digital Resource Library, Careers, and any others must be removed from the primary navigation. They may still exist as pages but should not appear in the nav.

3. **Active link state** — whichever of the 4 links matches `usePathname()` gets the existing active/highlight style (whatever the codebase currently uses — keep that exact style, just apply it to the right links).

### What does NOT change
- Navbar background colour (`bg-blue-900` or whatever is currently set)
- Logo asset or text
- Sticky/scroll behaviour
- Hamburger icon and drawer animation
- Any CSS, Tailwind classes, or transitions on the nav container itself
- Font or text size

### ✅ Verification Checklist — Section 1
- [ ] Navbar file compiles with no TypeScript errors
- [ ] Exactly 4 links in nav: **Home, Our Strategy, Capabilities, Contact Us** — no others
- [ ] "Home" routes to `/`
- [ ] "Our Strategy" routes to `/about`
- [ ] "Capabilities" routes to `/capabilities`
- [ ] "Contact Us" routes to `/contact`
- [ ] Active link styling applies correctly based on current route
- [ ] Mobile drawer shows same 4 links only
- [ ] Mobile drawer open/close still works
- [ ] Logo unchanged
- [ ] Nav colours unchanged (no new hex values introduced)

**→ Fix every FAIL before proceeding to Section 2.**

---

## SECTION 2 — HOMEPAGE HERO (`app/page.tsx` — Hero block)

### Context
The current homepage has a full-screen video hero (`/11.mp4`) with an overlay and a tagline. The video background and overlay treatment can stay — or be replaced with a static dark background matching the existing colour palette — your choice based on what integrates cleanest. The **only mandatory changes** are the headline and sub-copy.

### What changes

**Replace the current tagline/headline with:**
```
Beyond Aid. Beyond Relief.
Building Self-Reliant Systems.
```
- Use the existing H1 styling class(es) already defined in the project (same size, same weight). Do not introduce new font sizes.
- Line break between "Beyond Relief." and "Building Self-Reliant Systems."

**Replace the current sub-copy with:**
```
We build strong, locally run public services, infrastructure networks, and economic frameworks
in emerging communities. By focusing on smart institutional planning, everyday process updates,
and long-term business growth, we transform temporary charity projects into permanent,
self-sufficient local systems.
```
- Use the existing paragraph/sub-text styling already in the project.

**Remove:** The current testimonial carousel section (Swiper component) from the homepage. Remove it from `app/page.tsx` only — do not uninstall Swiper from `package.json`.

**Remove:** The tabbed services section (Customers / Providers / Technology tabs with video background) from the homepage.

**Remove:** Any existing "Contact CTA" section at the bottom of the homepage.

**Keep:** The video background and overlay if they exist in the hero — just swap the text content.

### What does NOT change
- Hero section min-height, background treatment, or overlay opacity
- Any animation on the hero text if it exists
- All other visual styling

### ✅ Verification Checklist — Section 2
- [ ] H1 reads exactly: **"Beyond Aid. Beyond Relief. Building Self-Reliant Systems."** (line break after "Beyond Relief.")
- [ ] Sub-copy matches spec exactly, word-for-word
- [ ] Hero section height and background treatment unchanged from what existed
- [ ] Testimonial carousel is gone from homepage (Swiper package still in node_modules)
- [ ] Tabbed services section is gone from homepage
- [ ] Old contact CTA section is gone from homepage
- [ ] No TypeScript errors in `app/page.tsx`
- [ ] No new colours or fonts introduced

**→ Fix every FAIL before proceeding to Section 3.**

---

## SECTION 3 — PATHWAY CARDS (`app/page.tsx` — new section below hero)

### What to build
A new section rendered immediately below the hero in `app/page.tsx`. Create the component at `app/components/home/PathwayCards.tsx` and import it into `app/page.tsx`.

### Card Layout
Three equal-width cards in a horizontal row on desktop, stacked vertically on mobile (`grid grid-cols-1 md:grid-cols-3`). Use the existing card background, border, and spacing styles already present in the codebase — look at how existing cards are styled elsewhere in the site (e.g. program product cards, resource cards) and apply the same treatment.

### Card Content (exact)

**Card 1:**
```
PATHWAY 1
Donors & Governments

Value Focus
• Maximize program results with measurable outcomes
• Clear transparency and reporting at every stage
• Built-in handoff plans from day one

[Button: Improve Our Program →]
```

**Card 2:**
```
PATHWAY 2
Local Operators & Providers

Value Focus
• Fix daily operational friction points fast
• Clear bottlenecks holding your team back
• Build local skills for permanent independence

[Button: Submit Inquiry →]
```

**Card 3:**
```
PATHWAY 3
Businesses & Investors

Value Focus
• High-yield public-private joint ventures
• Secure, de-risked market entries in emerging zones
• Partner with locally embedded implementation teams

[Button: Partner With Us →]
```

### Styling rules
- "PATHWAY N" label: use the site's existing eyebrow/label text style (small, uppercase, accented — find the pattern in existing pages)
- Audience heading below it: use existing card heading style
- "Value Focus" sub-label: use existing muted label style
- Bullet text: use existing body/muted text style
- CTA buttons: use the **existing primary button class** already defined in the project. Do not define new button styles.
- Card hover: use whatever hover treatment existing cards have

### ✅ Verification Checklist — Section 3
- [ ] `app/components/home/PathwayCards.tsx` created
- [ ] Component imported and rendered in `app/page.tsx` directly below hero
- [ ] 3 cards in a row on desktop (≥768px)
- [ ] Cards stack to 1 column on mobile (<768px)
- [ ] Card 1: label "PATHWAY 1", heading "Donors & Governments", 3 bullets correct, button "Improve Our Program →"
- [ ] Card 2: label "PATHWAY 2", heading "Local Operators & Providers", 3 bullets correct, button "Submit Inquiry →"
- [ ] Card 3: label "PATHWAY 3", heading "Businesses & Investors", 3 bullets correct, button "Partner With Us →"
- [ ] All card styling uses existing project style classes (no new hex values)
- [ ] Buttons use existing primary button class
- [ ] No TypeScript errors

**→ Fix every FAIL before proceeding to Section 4.**

---

## SECTION 4 — INQUIRY MODAL SYSTEM

### What to build
Create `app/components/shared/InquiryModal.tsx`. Each of the 3 pathway CTA buttons (from Section 3) opens this modal, passing a `pathway` prop (`1 | 2 | 3`) to conditionally render extra fields.

### Modal shell behaviour
- Renders as a full-screen overlay above all content (`position: fixed`, `inset-0`, `z-50`)
- Overlay backdrop: semi-transparent dark — use the existing overlay/backdrop pattern from the codebase (check if `navbar.tsx` drawer uses one; copy that pattern)
- Modal panel: centred, scrollable if content overflows viewport height
- **3 ways to close:** × button (top-right of panel), click on backdrop, Escape key
- Modal panel background: use existing card/panel background colour from the project

### Modal title
```
Submit Inquiry — [Pathway Name]
```
Where Pathway Name = "Donors & Governments" | "Local Operators & Providers" | "Businesses & Investors"

### Form: Baseline Fields (ALL 3 pathways — render first, in this order)

| # | Label | Input Type | Required |
|---|---|---|---|
| 1 | Full Name | text | yes |
| 2 | Job Title | text | yes |
| 3 | Work Email | email | yes |
| 4 | Organization Name | text | yes |
| 5 | Sector Type | select | yes |
| 6 | Country of Implementation | text | yes |

**Sector Type dropdown options (in this order):**
```
Public/Government
Donor Agency
Corporate Investor
Local Operator/NGO
Other
```

### Form: Pathway-Specific Extra Fields (render after baseline)

**Pathway 1 only:**
```
7. What is your current program or investment size?   [textarea, required]
8. What is the main challenge preventing this initiative from becoming self-sustaining?  [textarea, required]
```

**Pathway 2 only:**
```
7. Describe your primary operational bottleneck or daily workflow friction point.   [textarea, required]
8. What type of hands-on training or technical support do you need?  [textarea, required]
```

**Pathway 3 only:**
```
7. What specific asset class, industry, or public utility are you seeking to enter or co-finance?  [textarea, required]
8. Are you looking for a direct public-private partnership (PPP) model?  [radio: Yes / No, required]
```

### Form submission
- **Validate** all required fields with Zod before submitting. Show inline error messages using the same pattern as the existing `/contact` form validation.
- **On valid submit:** POST to `/api/inquiry` (create this route in Section 5).
- **On success:** Replace form content with: `"Thank you. We'll be in touch shortly."`
- **On error:** Show error message using the same pattern as existing contact form.

### Form input styling
Use the **exact same input, label, textarea, select, and button classes** already used in `app/contact/page.tsx` and the existing contact form. Do not define new styles.

### ✅ Verification Checklist — Section 4
- [ ] `app/components/shared/InquiryModal.tsx` created
- [ ] Clicking "Improve Our Program →" opens modal with pathway 1 context
- [ ] Clicking "Submit Inquiry →" opens modal with pathway 2 context
- [ ] Clicking "Partner With Us →" opens modal with pathway 3 context
- [ ] Overlay backdrop renders behind modal panel
- [ ] × button closes modal
- [ ] Clicking backdrop closes modal
- [ ] Escape key closes modal
- [ ] Modal title shows correct pathway name
- [ ] All 6 baseline fields present in every modal
- [ ] Sector Type dropdown has exactly 5 options in exact order
- [ ] Pathway 1: questions 7 and 8 visible (two textareas)
- [ ] Pathway 2: questions 7 and 8 visible (two textareas)
- [ ] Pathway 3: question 7 visible (textarea), question 8 visible (radio Yes/No)
- [ ] Submitting with any required field empty: validation fires, form does not submit
- [ ] Zod schema validates the payload
- [ ] Valid submit: POSTs to `/api/inquiry`
- [ ] Success state renders confirmation text
- [ ] All input styling matches existing contact form inputs exactly
- [ ] No TypeScript errors
- [ ] Modal scrollable on mobile when content exceeds viewport

**→ Fix every FAIL before proceeding to Section 5.**

---

## SECTION 5 — INQUIRY API ROUTE (`app/api/inquiry/route.ts`)

### What to build
Model this **exactly** on the existing `app/api/contact/route.ts`. Read that file first, then replicate its structure for the inquiry form.

```
AUDIT: cat app/api/contact/route.ts
```

Use the same:
- Resend SDK import and instantiation
- `RESEND_API_KEY`, `RESEND_FROM`, `RESEND_TO` environment variables
- Zod validation pattern
- Error handling and response shape
- HTML email format

**Email subject line:** `New IDG Inquiry — [Pathway Name] — [Organization Name]`

**Email body:** Include all submitted field values clearly labelled. Include the pathway name at the top.

**Recipient:** Same `RESEND_TO` env var as the contact form (sends to `wecanhelp@impactdeliverygroup.com`).

### ✅ Verification Checklist — Section 5
- [ ] `app/api/inquiry/route.ts` created
- [ ] Uses same Resend SDK pattern as existing contact route
- [ ] Uses same env vars (no new vars introduced unless strictly necessary)
- [ ] Zod validates incoming payload (all baseline + pathway-specific fields)
- [ ] Returns `{ success: true }` on success
- [ ] Returns structured error on Zod or Resend failure
- [ ] Email subject includes pathway name and org name
- [ ] Email body includes all submitted fields labelled clearly
- [ ] No TypeScript errors

**→ Fix every FAIL before proceeding to Section 6.**

---

## SECTION 6 — PROMISE STRIP + WHY/WHO BLOCK + BOTTOM NAV STRIP (`app/page.tsx`)

### What to build
Three new sections appended to `app/page.tsx` after the PathwayCards section, in this order:

---

### 6A — Promise Strip
Create `app/components/home/PromiseStrip.tsx` and render it below PathwayCards.

**Content (exact):**
```
OUR PROMISE STRIP:  Honest Reporting  |  Clear Responsibility  |  Lasting Results
```

Layout:
- Full-width band
- "OUR PROMISE STRIP:" renders as a small eyebrow label (use existing label/eyebrow style)
- 3 items side by side with `|` separators on desktop
- On mobile: items stack vertically, separators hidden
- Background: use existing section divider or alternate section background already in the project
- Text: bold, centred

---

### 6B — Why We Are Different + Who We Are
Create `app/components/home/WhyWhoBlock.tsx` and render it below the Promise Strip.

**Two-column layout** (stacks to 1 column on mobile):

**Left column:**
```
[eyebrow: WHY WE ARE DIFFERENT]

What Makes Us Different

• Active on-the-ground support, not just reports.
• A permanent handoff blueprint from day one.
• Complete, transparent program accountability.
```
Bullets use `→` as the bullet character (use existing list/bullet style from the project).

**Right column:**
```
[eyebrow: WHO WE ARE]

Helping societies break free from short-term charity by building their own capabilities.
```

**Below the two-column block** — full-width intro paragraph:
```
Many traditional consulting groups simply hand over text-heavy strategy slide decks and leave.
Traditional charity organizations often focus only on short-term relief, which can unintentionally
trap communities in a cycle of permanent dependency. Impact Delivery Group does things differently.
We blend big-picture systems strategy with real, daily help on the ground to make sure your
infrastructure stands on its own two feet.
```

**Below that** — three feature cards in a row (same card treatment as PathwayCards):

**Card 1:**
```
On-The-Ground Support
We don't just write reports and walk away. Our team stays on site to help your team put new plans
into action, turning big ideas into smooth, successful daily operations across all public and
social service sectors.
```

**Card 2:**
```
A Built-In Handoff Plan
Traditional frameworks often rely on permanent donations. We design every community project,
economic development track, or structural network with a clear, step-by-step plan to hand over
total ownership to local leaders from day one.
```

**Card 3:**
```
Clear, Honest Responsibility
We believe in clear responsibility. By pairing data-driven leadership with everyday process
updates, we make sure your top-level goals match your daily workflows perfectly for total efficiency.
```

---

### 6C — Bottom Navigation Strip
Create `app/components/home/BottomNavStrip.tsx` and render it at the very bottom of the homepage content (above the global footer).

**Content (exact):**
```
1. Leadership & Responsibility (TQLA)  |  2. Aid-to-Trade Paradigm  |  3. Constant Optimization
```

Each item is a `<Link>` that navigates to:
```
Item 1 → /capabilities#tqla
Item 2 → /capabilities#aid-to-trade
Item 3 → /capabilities#constant-optimization
```

Styling:
- Full-width band
- Numbers use the existing accent colour (whatever `primary` or `accent` CSS variable is)
- Label text uses existing muted text style
- Hover: text brightens to main text colour
- `|` separators between items (hide on mobile)
- Items wrap cleanly on mobile

---

### Final homepage section order in `app/page.tsx`
After this section, `app/page.tsx` must render in this exact order:
```
<Hero />              ← existing, text updated in Section 2
<PathwayCards />      ← new, Section 3
<PromiseStrip />      ← new, Section 6A
<WhyWhoBlock />       ← new, Section 6B
<BottomNavStrip />    ← new, Section 6C
```
Nothing else. No testimonials, no tab sections, no old CTAs.

### ✅ Verification Checklist — Section 6
- [ ] `PromiseStrip.tsx` created and imported
- [ ] Promise Strip: eyebrow label "OUR PROMISE STRIP:" present
- [ ] Promise Strip: exactly 3 items with correct labels and `|` separators on desktop
- [ ] Promise Strip: items stack on mobile, separators hidden
- [ ] `WhyWhoBlock.tsx` created and imported
- [ ] Left column: eyebrow "WHY WE ARE DIFFERENT", H2, 3 bullets with `→` prefix and exact text
- [ ] Right column: eyebrow "WHO WE ARE", exact body text
- [ ] Full-width intro paragraph present — exact copy
- [ ] 3 feature cards below intro: correct headings and exact body copy
- [ ] Feature cards use same card style as PathwayCards
- [ ] `BottomNavStrip.tsx` created and imported
- [ ] 3 items with exact labels and numbers
- [ ] Items link to `/capabilities#tqla`, `/capabilities#aid-to-trade`, `/capabilities#constant-optimization`
- [ ] Accent colour on numbers, muted on labels, hover brightens
- [ ] Homepage section order is: Hero → PathwayCards → PromiseStrip → WhyWhoBlock → BottomNavStrip
- [ ] Old homepage sections (testimonials, tabs, contact CTA) are absent
- [ ] No TypeScript errors in `app/page.tsx`
- [ ] No new colours introduced — all styling uses existing tokens

**→ Fix every FAIL before proceeding to Section 7.**

---

## SECTION 7 — ABOUT PAGE (`app/about/page.tsx`)

### Context
This is a **new page**. The existing `/who-we-are` page is NOT deleted — just leave it. Create a new `app/about/` directory and `page.tsx` inside it.

### Page structure
Use the same page shell pattern (hero + content sections) that exists in `app/who-we-are/page.tsx` or `app/what-we-do/page.tsx` — read one of those first and model the layout scaffold after it.

**Hero section:**

H1 (exact):
```
Moving Beyond Relief. Building For Resilience.
```

**Body section — two paragraphs (exact copy):**

Paragraph 1:
```
At Impact Delivery Group (IDG), we believe the true success of any social or infrastructure
development project is measured by what happens after the funding stops. Traditional aid models
often keep vulnerable communities dependent on donations. We are here to change that.
```

Paragraph 2:
```
We are an expert consulting and implementation team that partners with governments, donors, and
businesses to build strong, self-reliant communities. Led by experienced professionals and driven
by clear, honest metrics, we turn temporary aid projects into permanent pathways for local growth
and financial freedom. We don't just hand out relief; we build systems that stay strong for good.
```

**Below the two paragraphs:** Import and render `<WhyWhoBlock />` (already created in Section 6) — the feature cards serve as supporting content here too.

### ✅ Verification Checklist — Section 7
- [ ] `app/about/page.tsx` exists
- [ ] Page renders at `/about`
- [ ] H1 exactly: **"Moving Beyond Relief. Building For Resilience."**
- [ ] Paragraph 1 exact copy
- [ ] Paragraph 2 exact copy
- [ ] WhyWhoBlock feature cards rendered below paragraphs
- [ ] Page layout matches existing page patterns (same header/footer, same section padding)
- [ ] `/who-we-are` page still exists and renders (not deleted)
- [ ] "Our Strategy" nav link routes here
- [ ] No TypeScript errors

**→ Fix every FAIL before proceeding to Section 8.**

---

## SECTION 8 — CAPABILITIES PAGE (`app/capabilities/page.tsx`)

### Context
New page. Model the scaffold on an existing content page. Read `app/what-we-do/page.tsx` first.

### Page intro section

Page title: `Our Capabilities`

Intro paragraph (exact):
```
We design, manage, and fix large-scale social services, utilities, governance programs, and
infrastructure in developing markets. Instead of using rigid, one-size-fits-all plans, we build
flexible systems designed to outlast short-term grants. Our services include long-term master
planning, staff training, coordinating public-private partnerships, and providing strict
program management.
```

---

### Three Pillar Cards

Render as a 3-column card grid (same card treatment as PathwayCards). Each card must have an `id` attribute for anchor linking.

**Card 1** — `id="tqla"`:
```
Heading: Leadership & Responsibility (The TQLA Framework)
Body: We use clear, numbers-based management methods. This means assigning specific jobs to
specific owners, cutting out wasted effort, and setting up open tracking systems that local
citizens can see and trust.
```

**Card 2** — `id="aid-to-trade"`:
```
Heading: The 'Aid-to-Trade' Model
Body: We help systems move away from constant dependence on aid and toward profitable trade and
local fund generation. By connecting local services with business opportunities, we give
communities the power to use their own talents and achieve real independence.
```

**Card 3** — `id="constant-optimization"`:
```
Heading: Constant Improvement
Body: Lasting impact requires constant practice and refinement. We build regular, simple data
checks directly into your team's daily routines. By continually reviewing work habits and fixing
gaps, we keep your systems flexible, legal, and highly efficient as things change.
```

---

### "How We Deliver Results" — 5 Steps

Section heading: `How We Deliver Results`

Render as a numbered card grid (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`). Same card treatment.

**Step 1 — Reviewing Daily Operations**
```
We perform clear, step-by-step lookovers of how your organization works, ensuring your staff's
daily habits truly line up with your big-picture goals.
```

**Step 2 — Finding Risks and Gaps**
```
Our teams are highly skilled at finding hidden risks, costly delays, and confusing rules that slow
your staff down or cause compliance errors.
```

**Step 3 — Designing Practical Solutions**
```
We create practical, evidence-backed roadmaps that fit your team's budget and daily reality,
completely focused on making things better.
```

**Step 4 — Step-by-Step Help**
```
We do not just drop off advice; we work side by side with your team as they learn new ways of
working, ensuring the shift is easy and permanent.
```

**Step 5 — Tracking Progress**
```
We track real-time progress, evaluate whether changes are genuinely helping, and show your team
how to make quick, ongoing adjustments to stay on track.
```

Step number styling: use the existing accent colour variable for the step number digit.

---

### "Why This Matters" — Closing Section

Section heading: `Why This Matters`

Paragraph 1 (exact):
```
When public services and utilities rely on permanent charity, they become incredibly fragile to
sudden budget cuts, changing global rules, or unexpected crises. Lasting social safety and
financial health cannot be bought with short-term grants — it must be grown from within using
smart planning and honest daily habits.
```

Paragraph 2 (exact):
```
By shifting our focus from quick relief to permanent strength, we protect communities from system
breakdowns, maximize every dollar you spend, and make sure families have access to a thriving,
local ecosystem that lasts for generations.
```

### ✅ Verification Checklist — Section 8
- [ ] `app/capabilities/page.tsx` exists, renders at `/capabilities`
- [ ] Page title "Our Capabilities" and intro paragraph match spec exactly
- [ ] Pillar card 1: `id="tqla"`, heading and body exact
- [ ] Pillar card 2: `id="aid-to-trade"`, heading and body exact
- [ ] Pillar card 3: `id="constant-optimization"`, heading and body exact
- [ ] Anchor links from homepage BottomNavStrip resolve correctly (browser scrolls to each pillar)
- [ ] All 5 "How We Deliver" steps present — headings and body copy exact
- [ ] "Why This Matters" section: heading + both paragraphs exact
- [ ] All card styling uses existing project classes (no new hex values)
- [ ] "Capabilities" nav link routes here
- [ ] No TypeScript errors

**→ Fix every FAIL before proceeding to Section 9.**

---

## SECTION 9 — CONTACT PAGE (`app/contact/page.tsx`)

### Context
This page **already exists**. Read it fully before touching it.

```
AUDIT: cat app/contact/page.tsx
```

### What changes

1. **Update the page heading to:** `Get In Touch`
2. **Add sub-copy below heading:**
   ```
   Reach out to the Impact Delivery Group team. We'll respond within 2 business days.
   ```
3. **Keep the existing form** — it already posts to `/api/contact` with Resend + Zod. Do not break this.
4. **Keep all existing form fields** if they are: Name, Email, Message (+ any topic dropdown). If the current field set differs from what the blueprint specifies, keep the existing fields — do not remove working form fields.
5. **If a Subject field is missing:** add it between Email and Message. Use the same input styling.
6. **Submit button label:** confirm it reads "Send Message" — if it reads something else, update the label only.
7. **Success/error messaging:** keep existing behaviour. If it already shows a success state, leave it.

### What does NOT change
- Form submission logic (API route, Brevo fallback, Zod schema)
- Existing env var references
- Any existing field that already works
- Page background, layout structure, or spacing

### ✅ Verification Checklist — Section 9
- [ ] Page heading reads: **"Get In Touch"**
- [ ] Sub-copy present: "Reach out to the Impact Delivery Group team. We'll respond within 2 business days."
- [ ] Existing form still present and functional
- [ ] Form still posts to `/api/contact`
- [ ] Submit button label: "Send Message"
- [ ] Success state still shows after valid submission
- [ ] No TypeScript errors
- [ ] "Contact Us" nav link routes here

**→ Fix every FAIL before proceeding to Final Verification.**

---

## 🏁 FINAL GLOBAL VERIFICATION

Run this after all 9 sections log ALL PASS.

### Navigation
- [ ] All 4 nav links present with exact labels, route to correct pages
- [ ] No extra links in primary nav
- [ ] Mobile drawer: 4 links only, opens/closes correctly
- [ ] Active link state works on all 4 routes

### Homepage (`/`)
- [ ] Section order: Hero → PathwayCards → PromiseStrip → WhyWhoBlock → BottomNavStrip
- [ ] No old sections present (testimonials, tabs, old CTA)
- [ ] All text content matches spec exactly (headlines, bullets, body copy)
- [ ] Pathway card buttons open correct modals
- [ ] Bottom nav strip links navigate to correct capability anchors

### Modal System
- [ ] Opens on all 3 pathway buttons
- [ ] Correct pathway name in modal title
- [ ] Correct extra fields per pathway
- [ ] Closes via ×, backdrop click, Escape key
- [ ] Validates before submit
- [ ] Posts to `/api/inquiry` on valid submit
- [ ] Shows success message on response
- [ ] Scrollable on mobile

### Other Pages
- [ ] `/about` renders — heading and copy exact
- [ ] `/capabilities` renders — all sections and copy exact, anchor IDs present
- [ ] `/contact` renders — heading updated, form functional
- [ ] `/who-we-are`, `/what-we-do`, `/resources`, `/careers` still render (not broken)

### Code Quality
- [ ] `npx tsc --noEmit` — zero errors
- [ ] `npm run build` — succeeds
- [ ] No console errors in browser on any page
- [ ] No broken imports
- [ ] No new hex colour values introduced anywhere — only existing CSS variables and Tailwind classes used

---

## ✅ DONE CONDITION

The revamp is complete only when:
1. All 9 sections are logged **"SECTION [N] — ALL PASS"**
2. Every item in Final Global Verification = **[PASS]**
3. `npm run build` exits with code 0
4. The site's visual identity (colours, fonts, spacing system) is **identical to before the revamp** — only structure, content, and routing have changed

If any item is FAIL after corrections — loop back, fix, re-verify. Do not declare done early.

---

*Blueprint: Impact Delivery Group Website Specification (REV 20-01 / SPEC 214)*
*Codebase: tranzact · Next.js 15 App Router · React 19 · Tailwind CSS v4 · Geist font*