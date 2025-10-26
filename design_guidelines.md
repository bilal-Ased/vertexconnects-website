# Property Management SaaS Platform - Design Guidelines

## Design Philosophy
Ultra-modern SaaS aesthetic inspired by Linear, Framer, and Stripe. Clean, fast, professional, and automated feel. Trustworthy, tech-savvy, and premium tone throughout.

## Color Palette
- Primary: Cool gradient tones with light blue and slate as foundation
- Accents: Subtle purple and teal
- Backgrounds: Off-white base with generous white space
- Avoid explicit color definitions - focus on modern gradient applications

## Typography
- Font Family: Inter or Manrope via Google Fonts CDN
- Hierarchy: Bold headlines, clean body text with strong visual contrast
- Spacing: Generous line-height for readability

## Layout System
- Tailwind spacing units: Primarily 4, 8, 12, 16, 20, 24, and 32
- Container: max-w-7xl for main content areas
- Full-width responsive design with strategic use of white space
- Two-column layouts for major sections (hero, analytics)

## Component Library

### Navigation
- Sticky top navigation with light transparency effect
- Minimal height with clean alignment
- Links: About, Contact, Privacy Policy, Terms
- CTA button in navigation

### Hero Section (Two-Column)
**Left Column:**
- Headline: "Modern Property Management, Simplified."
- Subtext: "Automate rent reminders via WhatsApp, send invoices instantly, and manage everything from one powerful dashboard."
- Two CTA buttons stacked or inline:
  - Primary: "Start Free Trial" (gradient with glowing hover effect)
  - Secondary: "Watch Demo" (outlined with icon)

**Right Column:**
- Large app screenshot in sleek laptop/phone mockup
- Subtle floating/slide-in animation on load
- Prominent visual presence

**Background:** Gradient with abstract geometric or soft wave shapes for depth

### Feature Highlights (4-Card Grid)
Cards with rounded corners, glassmorphism effects, subtle shadows:

1. **Property & Tenant Management**
   - Icon: Dashboard/property icon
   - Title + description
   - "All property and tenant data in one intuitive dashboard. Track leases, maintenance, and documents with ease."

2. **WhatsApp Payment Reminders**
   - Icon: WhatsApp/message icon
   - "Automated, branded payment messages directly on WhatsApp."

3. **Automated Invoice Delivery**
   - Icon: Document/invoice icon
   - "Generate and send invoices instantly once payments are confirmed—via email or WhatsApp."

4. **Insightful Analytics**
   - Icon: Chart/analytics icon
   - "Real-time dashboards with metrics like revenue, occupancy, and payment trends."

**Layout:** Grid (2x2 on desktop, single column on mobile) with light background contrast and hover lift effects

### Analytics Section (Split Layout)
**Left Side:**
- Headline: "Smarter Decisions Through Data."
- Supporting text about analytics capabilities

**Right Side:**
- Dashboard preview mockup
- Animated bar and line charts showing revenue graphs, occupancy trends
- Visual representation of platform's data capabilities

### Testimonials Section
- Clean slider/carousel layout
- Profile avatars with testimonials
- Example: "Since using this platform, rent collection is smoother and communication is effortless." — Property Manager, Silver Fox Estates
- Minimal design with emphasis on credibility

### Pricing Section (Three-Tier Cards)
**Tiers:** Starter, Pro, Enterprise

**Pro (Middle) Highlighted:**
- Gradient background treatment
- Slight elevation above other cards

**Each Card Includes:**
- Plan name
- Price point
- Feature list
- "Get Started" button
- Smooth hover animation (slight lift + glow effect)

### Pre-Footer CTA Banner
- Simple full-width section
- Headline: "Ready to simplify property management?"
- Primary CTA: "Start Free Trial"
- Subtle gradient background with rounded edges

### Footer
- Dark background with light text
- Three-column layout: Company links, Legal, Social
- Links: About • Contact • Privacy Policy • Terms
- Social icons: LinkedIn, X (Twitter), Facebook
- Copyright: "© 2025 Vertex Property Cloud. All rights reserved."

## UI Elements & Styling
- Rounded corners on all cards and buttons (border-radius: 8-16px)
- Glassmorphism cards with backdrop blur
- Minimalist icons from Heroicons
- Subtle shadows for depth (not heavy drop shadows)
- Soft gradients for accents and CTAs

## Animations & Interactions
- Smooth fade-ins on scroll for section reveals
- Micro-interactions on CTA hover states
- Floating mockup effect in hero
- Chart animations in analytics section
- Card lift on hover (pricing and features)
- Smooth scroll behavior
- All animations should be subtle and professional

## Responsive Behavior
- Desktop: Full two-column layouts, 4-card grids
- Tablet: 2-column grids, maintained hierarchy
- Mobile: Single column stack, full-width cards
- Navigation collapses to hamburger menu on mobile

## Images

### Hero Section Image
**Type:** App dashboard screenshot in device mockup
**Placement:** Right column of hero, takes up 50% width on desktop
**Style:** Laptop or phone mockup with subtle shadow/floating effect
**Purpose:** Showcase the platform's interface and capabilities

### Analytics Section Image
**Type:** Dashboard preview with charts and graphs
**Placement:** Right side of analytics split layout
**Style:** Animated/interactive looking charts showing revenue, occupancy trends
**Purpose:** Demonstrate data visualization capabilities

### Testimonial Images
**Type:** Profile avatars
**Placement:** Next to testimonial text
**Style:** Circular avatars, professional headshots
**Purpose:** Add credibility and human element

**Note:** Large hero image with device mockup is central to the design, establishing immediate visual impact and product understanding.