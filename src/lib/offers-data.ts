export interface OfferData {
  slug: string
  title: string
  subheadline: string
  benefits: string[]
  cta: string
}

export const offersData: Record<string, OfferData> = {
  'free-cost-calculator': {
    slug: 'free-cost-calculator',
    title: 'Free Home Improvement Cost Calculator',
    subheadline: 'Get an instant, personalized cost estimate for your kitchen remodel, bathroom renovation, or deck project — based on your zip code, project size, and finish level.',
    benefits: [
      'Accurate local cost estimates based on real 2026 contractor data in your area',
      'Instant breakdown showing materials vs. labor vs. permits',
      'DIY savings estimate — see exactly how much you can save doing it yourself',
      'Side-by-side comparison of budget, mid-range, and premium finish options',
      'Free contractor quote matching in your area with pre-vetted local pros',
      'No obligation, no credit card, no spam — just the numbers you need',
    ],
    cta: 'Get My Free Estimate Now',
  },
}
