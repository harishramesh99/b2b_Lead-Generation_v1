// hooks/useServices.ts

const useServices = () => {
  return {
    heading: 'Services Engineered for B2B Growth',
    services: [
      {
        title: 'Performance Marketing',
        color: 'text-yellow-400',
        description:
          'Drive consistent, high-intent demand through precision-led paid acquisition.\n\nWe design and manage performance marketing programs that align with B2B buying behaviour, longer sales cycles, and revenue-focused outcomes. Campaigns are built around intent, account quality, and pipeline contribution rather than volume alone.',
        tools: [
          { name: 'LinkedIn Ads', logo: '/assets/Svg/linkedin.svg' },
          { name: 'Google Ads', logo: '/assets/Svg/googleads.svg' },
          { name: 'Meta Ads', logo: '/assets/Svg/meta.svg' },
        ],
      },
      {
        title: 'Conversion Rate Optimisation (CRO)',
        color: 'text-green-400',
        description:
          'Turn existing traffic into qualified enquiries and sales conversations.\n\nnWe optimise key conversion points across your website and landing pages to reduce friction, improve clarity, and increase conversion efficiency. Every change is informed by user behaviour, data insights, and business objectives.',
        tools: [
          { name: 'Figma', logo: '/assets/Svg/figma.svg' },
          { name: 'Hotjar', logo: '/assets/Svg/hotjar.svg' },
          { name: 'HubSpot', logo: '/assets/Svg/hubspot.svg' },
        ],
      },
      {
        title: 'SEO for B2B',
        color: 'text-sky-400',
        description:
          'Build long-term inbound demand from high-intent B2B search.\n\nOur SEO approach focuses on commercial, decision-stage keywords that attract qualified buyers, not just traffic. From technical foundations to content and conversion alignment, SEO is treated as a pipeline-building channel, not a visibility exercise.',
        tools: [
          { name: 'SEMRUSH', logo: '/assets/Svg/semrush.svg' },
          { name: 'Google Analytics', logo: '/assets/Svg/googleana.svg' },
          { name: 'Screaming Frog', logo: '/assets/Svg/frog.svg' },
        ],
      },
    ],
  }
}

export default useServices
