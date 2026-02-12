// hooks/usePerformance.ts
const BASE_PATH = '/b2b-lead-generation-company';

const usePerformance = () => {
  return {
    title: 'Performance–Led Growth Pillars',
    subtitle:
      'A structured, data-first approach to building and scaling B2B growth with clarity, focus, and accountability.',
    pillars: [
      {
        icon: `${BASE_PATH}/assets/Svg/icon1.svg`,
        textcolor: 'text-[#FDE68A]',
        title: 'Strategic Bottleneck Diagnosis',
        description:
          'Before any lead generation execution begins, we focus on understanding how your B2B business actually creates qualified leads and revenue.\n\n  We analyse acquisition channels, targeting logic, messaging, buyer intent, funnel flow, and sales handoffs to identify where lead quality drops, friction exists, or momentum slows. Decisions are driven by real performance data and sales context, not assumptions or generic lead gen tactics.',
      },
      {
        icon: `${BASE_PATH}/assets/Svg/icon2.svg`,
        textcolor: 'text-[#F59E0B]',
        title: 'Contextual Playbooks by Growth Stage',
        description:
          'Every B2B company operates with different constraints, deal sizes, and sales cycles.\n\nLead generation strategies are designed around your current stage, whether the priority is creating initial demand, improving lead quality and consistency, or scaling an already working channel. The approach evolves as your business grows instead of forcing the same lead gen playbook at every stage.',
      },
      {
        icon: `${BASE_PATH}/assets/Svg/icon4.svg`,
        textcolor: 'text-[#60A5FA]',
        title: 'Fast, Focused Execution',
        description:
          'Lead generation only works when execution is intentional and controlled.\n\nCampaigns are launched with clear qualification criteria, precise targeting, and defined success metrics. Every initiative is built to attract relevant decision makers, capture intent, and support your sales process rather than chasing volume or surface level activity.',
      },
      {
        icon: `${BASE_PATH}/assets/Svg/icon3.svg`,
        textcolor: 'text-[#6EE7B7]',
        title: 'Compounding Optimization',
        description:
          'Lead generation is treated as a system, not isolated campaigns.\n\nInsights from performance data, buyer behaviour, and conversion quality are continuously fed back into targeting, messaging, and funnel design. Over time, these improvements compound, resulting in higher quality leads, better efficiency, and a more predictable pipeline.',
      },
    ],
  }
}

export default usePerformance
