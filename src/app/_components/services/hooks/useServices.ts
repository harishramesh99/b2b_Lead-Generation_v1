// hooks/useServices.ts

const useServices = () => {
  return {
    heading: 'Services Engineered for B2B Growth',
    services: [
      {
        title: 'Performance Marketing',
        color: 'text-yellow-400',
        description:
          'Drive consistent, high intent demand from the right decision makers.\n\We design and manage performance marketing programs focused on generating sales ready leads through platforms like Google, LinkedIn, and Meta. Campaigns are built around buyer intent, targeting precision, and qualification logic to support pipeline growth rather than lead volume.',
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
          'Turn ad traffic into qualified leads and sales conversations.\n\nnWe optimise landing pages, forms, and user journeys to reduce friction and improve lead quality. Every improvement is driven by behavioural data and real conversion insights, ensuring traffic converts into meaningful enquiries, not wasted clicks.',
        tools: [
          { name: 'Figma', logo: '/assets/Svg/figma.svg' },
          { name: 'Hotjar', logo: '/assets/Svg/hotjar.svg' },
          { name: 'HubSpot', logo: '/assets/Svg/hubspot.svg' },
        ],
      },
      {
        title: 'Lead Qualification & Funnel Design',
        color: 'text-sky-400',
        description:
          'Ensure only the right leads reach your sales team.\n\nLead generation does not end at form fills. We design qualification layers, messaging flows, and funnel structures that filter out low-intent traffic and surface serious prospects. This helps sales teams focus on conversations that have a higher likelihood of closing.',
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
