export default function TrustBar() {
  const badges = [
    { label: 'CEO Times', subtitle: 'Featured' },
    { label: 'USA News', subtitle: 'As Seen In' },
    { label: 'BizWeekly', subtitle: 'Contributor' },
  ]

  return (
    <div className="bg-white border-y border-border py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
          <p className="text-muted text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
            As Featured In
          </p>
          <div className="flex items-center gap-6 sm:gap-10">
            {badges.map((badge) => (
              <div key={badge.label} className="flex flex-col items-center">
                <span className="text-xs text-muted uppercase tracking-wide">{badge.subtitle}</span>
                <span className="text-primary-dark font-bold text-base sm:text-lg leading-tight">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
