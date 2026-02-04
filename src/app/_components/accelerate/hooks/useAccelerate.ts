// hooks/useAccelerate.ts

const useAccelerate = (slug?: string) => {
  const isSaasPage = slug === 'b2b-digital-marketing-agency';
  return {
    heading: isSaasPage
      ? "B2B digital marketing agency focused on lead quality, pipeline growth, and conversion efficiency through performance marketing, SEO, and CRO."
      : "B2B Lead Generation Company Focused on Qualified Demand, Not Lead Volume",
    description:
      "We help B2B companies generate high intent, sales ready leads through performance driven lead generation strategies. Built for long sales cycles, complex buying journeys, and revenue focused outcomes, not vanity lead numbers.",

descriptionBullets: [
  "Designed specifically for B2B buying behaviour and multi stakeholder decision making",
  "Focus on SQL quality, cost efficiency, and pipeline impact",
  "Lead generation strategy aligned tightly with your sales process and qualification criteria",
],

    bullets: [
      "Designed specifically for B2B buying behaviour and multi stakeholder decision making",
      "Focus on SQL quality, cost efficiency, and pipeline impact",
      "BLead generation strategy aligned tightly with your sales process and qualification criteria",
    ],
    stats: [
      { label: "demo bookings", value: "+72%" },
      { label: "bounce rate", value: "-42%" },
      { label: "sign-up rate", value: "+3.4×" },
    ],
    formTitle: "Tell us about your SaaS",
    formSubtitle: "Get a free marketing audit tailored to your funnel and growth goals.",
    formFields: [
      { label: "Full Name", placeholder: "e.g. Sarah Johnson", required: true },
      { label: "Business Email", placeholder: "e.g. you@company.com", required: true },
      { label: "Company Website URL", placeholder: "e.g. https://yourcompany.com", required: true },
      { label: "Services You’re Interested In", placeholder: "e.g. B2B Lead Generation (Paid Ads),B2B SEO, Conversion Rate Optimisation,Not sure yet", required: true },
      { label: "What’s blocking growth right now?", placeholder: "e.g. “Low quality leads, high CAC, long sales cycles, poor website conversions”", required: false },
    ],
    cta: "Submit",
  }
}

export default useAccelerate
