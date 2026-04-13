'use client'
import Link from 'next/link'

const cols = [
  {
    title: 'Products',
    links: [
      { label: 'Rigid Boxes', href: '/products' },
      { label: 'Folding Cartons', href: '/products' },
      { label: 'Carry Bags', href: '/products' },
      { label: 'Labels & Stickers', href: '/products' },
      { label: 'Gift Packaging', href: '/products' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Amryxa', href: '/about' },
      { label: 'Our Process', href: '/process' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Sustainability', href: '/' },
      { label: 'Careers', href: '/' },
    ],
  },
  {
    title: 'Get Started',
    links: [
      { label: 'Get a Quote', href: '/quote' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Download Catalogue', href: '/' },
      { label: 'FAQ', href: '/' },
      { label: 'Support', href: '/' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }} className="pt-16 pb-10 px-16 max-md:px-6">
      <div className="grid grid-cols-[2.2fr_1fr_1fr_1fr] gap-16 pb-12 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1" style={{ borderBottom: '1px solid var(--border)' }}>
        <div>
          <div className="font-cormorant font-light text-[26px] tracking-[.2em] uppercase mb-4" style={{ color: 'var(--gold)' }}>Amryxa</div>
          <p className="text-sm leading-[1.75] max-w-[270px]" style={{ color: 'var(--muted)' }}>
            Premium custom packaging for brands that believe first impressions matter. From concept to creation — we make every box count.
          </p>
          <div className="flex gap-3 mt-7">
            {['in', 'ig', 'yt'].map(s => (
              <div key={s} className="w-9 h-9 flex items-center justify-center text-xs transition-all cursor-pointer"
                style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
                onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = 'var(--gold)'; (e.target as HTMLElement).style.color = 'var(--gold)' }}
                onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = 'var(--border)'; (e.target as HTMLElement).style.color = 'var(--muted)' }}
              >{s}</div>
            ))}
          </div>
        </div>
        {cols.map(col => (
          <div key={col.title}>
            <h4 className="text-[10px] tracking-[.18em] uppercase mb-5" style={{ color: 'var(--gold)' }}>{col.title}</h4>
            {col.links.map(l => (
              <Link key={l.label} href={l.href} className="block text-sm mb-3 transition-colors" style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--text)'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--muted)'}
              >{l.label}</Link>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center pt-8 flex-wrap gap-4">
        <div className="text-xs" style={{ color: 'var(--muted2)' }}>© 2024 Amryxa Packaging Pvt. Ltd. All rights reserved.</div>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
            <span key={l} className="text-xs cursor-pointer transition-colors" style={{ color: 'var(--muted2)' }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--muted)'}
              onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--muted2)'}
            >{l}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}
