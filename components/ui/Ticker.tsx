'use client'
const items = [
  'Premium Packaging', 'Custom Design', 'Luxury Rigid Boxes',
  'Sustainable Materials', 'B2B Manufacturing', '1,200+ Brands Served',
  '48-Hr Sample Turnaround', 'Pan India Delivery',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden whitespace-nowrap py-3" style={{ background: 'var(--gold)' }}>
      <div className="ticker-wrap inline-flex">
        {doubled.map((item, i) => (
          <span key={i} className="px-12 text-[10px] tracking-[.24em] uppercase font-medium" style={{ color: 'var(--bg)' }}>
            {item} <span style={{ opacity: 0.3 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
