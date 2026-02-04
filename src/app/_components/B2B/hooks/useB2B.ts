// hooks/useSaas.ts

const useSaas = () => {
  return {
    heading: 'Why B2B Companies Partner With Me',
    subheading:
      'B2B teams work with me because growth decisions are grounded in data, context, and execution discipline. No fluff. Just focused strategy, clear communication, and results that tie directly to revenue and pipeline impact.',
    cta: {
      text: 'Book a Call',
      link: '/book-a-call', // replace with actual URL
    },
    pillars: [
      {
        icon: '/assets/Svg/award.svg',
        title: 'Dedicated B2B Expertise',
        color: 'text-yellow-400',
        description:
          'Deep experience working with B2B businesses that operate with longer sales cycles, multiple stakeholders, and high value deals. \n\n Every strategy is designed around real B2B growth metrics such as lead quality, cost per qualified opportunity, pipeline contribution, and alignment with sales teams.',
      },
      {
        icon: '/assets/Svg//coins.svg',
        title: 'Transparency and Accountability',
        color: 'text-sky-400',
        description:
          'Clear reporting, consistent communication, and complete visibility into performance.\n\n You always know where budget is being spent, what is working, what is not, and why decisions are being made, with all actions tied back to your business goals.',
      },
      {
        icon: '/assets/Svg/graph.svg',
        title: 'Proven, Impactful Results',
        color: 'text-emerald-400',
        description:
          'Hands-on experience executing and scaling performance driven lead generation programs for B2B companies. \n\n Every outcome is backed by measurable improvements and real results, not vanity metrics, inflated lead counts, or surface level wins..',
      },
    ],
  }
}

export default useSaas
