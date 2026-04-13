'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUp } from '@/components/ui/Motion'
import { BtnGold, BtnGhost } from '@/components/ui/Components'
import { portfolioItems } from '@/lib/data'

const filters = [
  { key: 'all', label: 'All' },
  { key: 'beauty', label: 'Beauty' },
  { key: 'food', label: 'Food & Bev' },
  { key: 'luxury', label: 'Luxury' },
  { key: 'tech', label: 'Tech' },
  { key: 'fmcg', label: 'FMCG' },
]

export default function PortfolioPage() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? portfolioItems : portfolioItems.filter(p => p.filter === active)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-20 px-16 max-md:px-6" style={{ background: 'var(--bg2)' }}>
        <div className="absolute inset-0 section-grid-bg" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%,rgba(201,168,76,.05) 0%,transparent 60%)' }} />
        <div className="relative z-10">
          <FadeUp>
            <div className="flex items-center gap-3 mb-5 text-[10px] tracking-[.24em] uppercase" style={{ color: 'var(--gold)' }}>
              <span className="w-5 h-px" style={{ background: 'var(--gold)' }} />Our Work
            </div>
            <h1 className="font-cormorant font-light leading-[.96]" style={{ fontSize: 'clamp(44px,7vw,90px)' }}>
              Brands we've<br />helped <em className="italic" style={{ color: 'var(--gold)' }}>transform</em>
            </h1>
            <p className="text-[15px] leading-[1.75] max-w-[520px] mt-6" style={{ color: 'var(--muted)' }}>
              Real projects, real results. Explore how Amryxa has elevated packaging for brands across beauty, food, electronics, and luxury goods.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Stats bar */}
      <div className="grid grid-cols-4 gap-px max-md:grid-cols-2" style={{ background: 'var(--border)' }}>
        {[['9+', 'Industries'], ['1,200+', 'Projects'], ['99%', 'Satisfaction'], ['₹50Cr+', 'Value Created']].map(([n, l], i) => (
          <div key={i} className="py-8 text-center" style={{ background: 'var(--bg3)' }}>
            <div className="font-cormorant font-light text-[32px]" style={{ color: 'var(--gold)' }}>{n}</div>
            <div className="text-[10px] tracking-[.14em] uppercase mt-1" style={{ color: 'var(--muted)' }}>{l}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-2.5 flex-wrap px-16 py-8 max-md:px-6" style={{ background: 'var(--bg)' }}>
        {filters.map(f => (
          <motion.button key={f.key} onClick={() => setActive(f.key)} whileTap={{ scale: 0.97 }}
            className="text-[11px] tracking-[.12em] uppercase px-5 py-2.5 transition-all"
            style={{
              background: active === f.key ? 'var(--gold)' : 'transparent',
              border: `1px solid ${active === f.key ? 'var(--gold)' : 'var(--border)'}`,
              color: active === f.key ? 'var(--bg)' : 'var(--muted)',
            }}
          >{f.label}</motion.button>
        ))}
      </div>

      {/* Grid */}
      <div className="px-16 pb-16 max-md:px-6" style={{ background: 'var(--bg)' }}>
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {filtered.map((p, i) => (
              <motion.div key={p.title}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group overflow-hidden transition-all duration-300 cursor-pointer"
                style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}
                whileHover={{ y: -4, borderColor: 'rgba(201,168,76,.28)' }}
              >
                {/* thumb */}
                <div className="h-[260px] flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(145deg,${p.col1},${p.col2})` }}>
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%,rgba(201,168,76,.07),transparent 65%)' }} />
                  <div className="relative z-10 text-center px-8">
                    <div className="font-cormorant font-light text-[20px] leading-[1.3]" style={{ color: 'var(--gold)' }}>{p.title}</div>
                    <div className="text-[10px] tracking-[.14em] uppercase mt-3" style={{ color: 'var(--gold-d)' }}>{p.year}</div>
                  </div>
                  {/* overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: 'rgba(9,9,10,.72)' }}
                  >
                    <span className="text-[11px] tracking-[.18em] uppercase px-6 py-3" style={{ border: '1px solid var(--gold)', color: 'var(--gold)' }}>
                      View Case Study
                    </span>
                  </motion.div>
                </div>

                {/* body */}
                <div className="p-7">
                  <div className="text-[10px] tracking-[.18em] uppercase mb-2" style={{ color: 'var(--gold)' }}>{p.industry}</div>
                  <h3 className="font-cormorant font-light text-[22px] mb-3">{p.title}</h3>
                  <p className="text-[13px] leading-[1.7] mb-4" style={{ color: 'var(--muted)' }}>{p.desc}</p>
                  <div className="flex gap-6 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                    {p.metrics.map(m => (
                      <div key={m.l}>
                        <div className="font-cormorant font-light text-[22px]" style={{ color: 'var(--gold)' }}>{m.n}</div>
                        <div className="text-[10px] tracking-[.1em] uppercase" style={{ color: 'var(--muted)' }}>{m.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Testimonial highlight */}
      <section className="py-24 px-16 max-md:px-6" style={{ background: 'var(--bg2)' }}>
        <FadeUp>
          <div className="max-w-[780px] mx-auto text-center">
            <div className="font-cormorant italic font-light text-[28px] leading-[1.5] mb-8" style={{ color: 'var(--text)' }}>
              "Amryxa doesn't just make boxes. They build brand experiences. Our packaging became our best-performing marketing channel."
            </div>
            <div className="text-[13px] font-medium">Priya Mehta</div>
            <div className="text-[11px] tracking-[.12em] uppercase mt-1" style={{ color: 'var(--gold)' }}>Founder, Lumara Skincare</div>
          </div>
        </FadeUp>
      </section>

      {/* CTA */}
      <section className="py-24 px-16 text-center max-md:px-6" style={{ background: 'var(--bg)' }}>
        <FadeUp>
          <h2 className="font-cormorant font-light text-[52px] mb-5">
            Your brand, <em className="italic" style={{ color: 'var(--gold)' }}>next.</em>
          </h2>
          <p className="text-[15px] max-w-[380px] mx-auto mb-10" style={{ color: 'var(--muted)' }}>
            Let's build packaging that makes your brand impossible to forget.
          </p>
          <div className="flex justify-center gap-5 flex-wrap">
            <Link href="/quote"><BtnGold>Start a Project</BtnGold></Link>
            <Link href="/contact"><BtnGhost>Talk to Us</BtnGhost></Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
