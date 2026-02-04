// hooks/useHello.ts

const useHello = (slug?: string) => {
  const isB2BPage = slug === 'b2b-digital-marketing';
  return {
    name: 'Shitanshu Kumar',
    title: isB2BPage
      ? "A Digital marketing strategist helping | B2B brands scale with precision."
      : "A performance marketing strategist helping B2B companies build predictable, scalable growth.",
    description: isB2BPage
      ? "I work with B2B and digital-first businesses to design and execute growth strategies grounded in data, intent, and execution discipline. With a strategy-first approach and deep campaign analysis, I help teams improve ROI, increase pipeline efficiency, and scale with clarity while staying aligned with real business goals."
      : "I work with B2B and digital-first businesses to design and execute growth strategies grounded in data, intent, and execution discipline. With a strategy-first approach and deep campaign analysis, I help teams improve ROI, increase pipeline efficiency, and scale with clarity while staying aligned with real business goals.",

    stats: [
      { value: '7+', label: 'Years of Experience' },
      { value: '$20M+', label: 'Ad Spend Managed' },
      { value: '100+', label: 'Ads Accounts' },
      { value: 'ROI', label: 'Focused Strategies' },
    ],
    profileImage: '/assets/Images/Profile.png', // must be inside /public/images/
    linkedin: 'https://www.linkedin.com/in/shitanshu-kumar1/', // replace with actual URL
  }
}

export default useHello
