'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FadeUp, SlideIn, StaggerChildren, staggerItem, AnimatedCounter } from '@/components/ui/Motion'
import { BtnGold, BtnGhost, SectionHeader, GoldRule } from '@/components/ui/Components'
import { teamMembers } from '@/lib/data'

const values = [
  { icon: '◇', title: 'Craft Over Commodity', desc: 'Every project starts with intention. We don\'t produce generic packaging — we engineer experiences, one brief at a time.' },
  { icon: '⊕', title: 'Radical Transparency', desc: 'No hidden costs, no surprise delays. Clear timelines, clear pricing, and a dedicated project manager for every order.' },
  { icon: '❋', title: 'Sustainable by Design', desc: 'FSC-certified materials, water-based inks, and zero-waste manufacturing processes across all our production facilities.' },
  { icon: '△', title: 'Obsessive Quality', desc: '12-point quality check on every batch. If it doesn\'t meet our standards, it doesn\'t leave our factory. Simple as that.' },
]

const certs = [
  { icon: '◎', name: 'ISO 9001:2015', desc: 'Quality Management System certified for all manufacturing processes' },
  { icon: '❋', name: 'FSC Certified', desc: 'Forest Stewardship Council certified for responsible material sourcing' },
  { icon: '◇', name: 'Food Grade', desc: 'FDA-compliant food-safe materials for edibles and beverage packaging' },
  { icon: '△', name: 'ROHS Compliant', desc: 'Restriction of Hazardous Substances directive compliance across all inks and materials' },
]

// ── Floating Box Visual ───────────────────────────────────
function AboutVisual() {
  return (
    <div className="relative h-[520px] max-md:hidden">
      {/* main box */}
      <div className="float-box absolute" style={{ width: 268, height: 336, background: 'linear-gradient(145deg,#1C1C14,#252519)', border: '1px solid var(--border)', left: 0, top: 0 }}>
        <div className="flex flex-col justify-between h-full p-8">
          <div className="font-cormorant text-[13px] tracking-[.2em] uppercase" style={{ color: 'var(--gold)' }}>Amryxa</div>
          <div>
            <div className="w-8 h-px mb-4" style={{ background: 'var(--gold)' }} />
            <div className="font-cormorant font-light text-[20px] leading-[1.4]">Where craft<br />meets commerce</div>
          </div>
        </div>
      </div>
      {/* small box */}
      <div className="float-alt absolute" style={{ width: 180, height: 225, background: 'linear-gradient(145deg,#141410,#1C1C14)', border: '1px solid var(--border)', right: 10, bottom: 50 }}>
        <div className="flex flex-col justify-end h-full p-6">
          <div className="text-[10px] tracking-[.2em] uppercase mb-2" style={{ color: 'var(--gold)' }}>Certified</div>
          <div className="font-cormorant font-light text-[16px] leading-[1.4]">ISO 9001:2015<br />Compliant</div>
        </div>
      </div>
      {/* frame */}
      <div className="float-slow absolute" style={{ width: 96, height: 96, border: '1px solid rgba(201,168,76,.16)', right: 50, top: 30 }} />
      {/* badge */}
      <div className="absolute" style={{ bottom: 18, left: 8, background: 'var(--bg)', border: '1px solid var(--border)', padding: '22px 26px' }}>
        <div className="font-cormorant font-light leading-none mb-1" style={{ fontSize: 46, color: 'var(--gold)' }}>
          <AnimatedCounter target={1200} suffix="+" />
        </div>
        <div className="text-[10px] tracking-[.12em] uppercase mt-1" style={{ color: 'var(--muted)' }}>Brands Served</div>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-20 px-16 max-md:px-6" style={{ background: 'var(--bg2)' }}>
        <div className="absolute inset-0 section-grid-bg" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%,rgba(201,168,76,.05) 0%,transparent 60%)' }} />
        <div className="relative z-10">
          <FadeUp>
            <div className="flex items-center gap-3 mb-5 text-[10px] tracking-[.24em] uppercase" style={{ color: 'var(--gold)' }}>
              <span className="w-5 h-px" style={{ background: 'var(--gold)' }} />Our Story
            </div>
            <h1 className="font-cormorant font-light leading-[.96]" style={{ fontSize: 'clamp(44px,7vw,90px)' }}>
              Born to make<br />brands <em className="italic" style={{ color: 'var(--gold)' }}>unforgettable</em>
            </h1>
            <p className="text-[15px] leading-[1.75] max-w-[520px] mt-6" style={{ color: 'var(--muted)' }}>
              Amryxa was founded on a single belief — that great packaging isn't overhead, it's one of the most powerful marketing tools your brand has.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 px-16 max-md:px-6" style={{ background: 'var(--bg)' }}>
        <div className="grid grid-cols-2 gap-28 items-center max-lg:grid-cols-1">
          <SlideIn direction="left"><AboutVisual /></SlideIn>
          <SlideIn direction="right" delay={0.15}>
            <SectionHeader tag="Our Mission" title={<>Packaging is your<br />brand's first <em className="italic" style={{ color: 'var(--gold)' }}>handshake</em></>} />
            <GoldRule />
            <p className="text-[15px] leading-[1.82]" style={{ color: 'var(--muted)' }}>
              Amryxa was founded in 2024 by a team of packaging engineers, brand strategists, and manufacturing veterans who believed the Indian packaging industry was ready for a luxury-grade disruption.
            </p>
            <p className="text-[15px] leading-[1.82] mt-5" style={{ color: 'var(--muted)' }}>
              We saw brands spending crores on advertising while shipping their products in forgettable boxes. We set out to change that — making premium, custom packaging accessible at every scale.
            </p>
            <p className="text-[15px] leading-[1.82] mt-5" style={{ color: 'var(--muted)' }}>
              Today, Amryxa is the packaging partner of choice for over 1,200 brands across beauty, food, electronics, jewellery, and luxury goods.
            </p>
            <div className="flex gap-11 mt-12 flex-wrap">
              {[{ n: '₹50Cr+', l: 'Revenue Enabled' }, { n: '48hr', l: 'Sample TAT' }, { n: '100%', l: 'Custom Made' }].map((s, i) => (
                <div key={i}>
                  <div className="font-cormorant font-light text-[38px]" style={{ color: 'var(--gold)' }}>{s.n}</div>
                  <div className="text-[10px] tracking-[.12em] uppercase mt-1" style={{ color: 'var(--muted)' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-16 max-md:px-6" style={{ background: 'var(--bg2)' }}>
        <FadeUp className="mb-16">
          <SectionHeader tag="Our Values" title={<>What we <em className="italic" style={{ color: 'var(--gold)' }}>stand for</em></>} />
        </FadeUp>
        <StaggerChildren className="grid grid-cols-4 gap-0.5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {values.map((v, i) => (
            <motion.div key={i} variants={staggerItem} className="p-11" style={{ background: 'var(--bg3)' }}>
              <div className="w-11 h-11 flex items-center justify-center text-lg mb-7" style={{ border: '1px solid var(--border)', color: 'var(--gold)' }}>
                {v.icon}
              </div>
              <h3 className="font-cormorant font-light text-[22px] mb-3">{v.title}</h3>
              <p className="text-[13px] leading-[1.72]" style={{ color: 'var(--muted)' }}>{v.desc}</p>
            </motion.div>
          ))}
        </StaggerChildren>
      </section>

      {/* Team */}
      <section className="py-32 px-16 max-md:px-6" style={{ background: 'var(--bg)' }}>
        <FadeUp className="mb-16">
          <SectionHeader tag="Our Team" title={<>The people behind<br />every <em className="italic" style={{ color: 'var(--gold)' }}>box</em></>} />
        </FadeUp>
        <StaggerChildren className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {teamMembers.map((m, i) => (
            <motion.div key={i} variants={staggerItem}
              className="overflow-hidden transition-all duration-300"
              style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}
              whileHover={{ borderColor: 'rgba(201,168,76,.28)' }}
            >
              <div className="h-[200px] flex items-center justify-center" style={{ background: 'var(--bg3)' }}>
                <span className="font-cormorant font-light text-[52px]" style={{ color: 'var(--gold-d)', opacity: 0.6 }}>{m.initials}</span>
              </div>
              <div className="p-6">
                <h3 className="font-cormorant font-light text-[22px] mb-1">{m.name}</h3>
                <div className="text-[11px] tracking-[.12em] uppercase mb-3" style={{ color: 'var(--gold)' }}>{m.role}</div>
                <p className="text-[13px] leading-[1.65]" style={{ color: 'var(--muted)' }}>{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </section>

      {/* Certifications */}
      <section className="py-32 px-16 max-md:px-6" style={{ background: 'var(--bg2)' }}>
        <FadeUp className="mb-16 text-center">
          <SectionHeader tag="Certifications" title={<>Built on <em className="italic" style={{ color: 'var(--gold)' }}>standards</em></>} center />
        </FadeUp>
        <StaggerChildren className="flex gap-6 flex-wrap">
          {certs.map((c, i) => (
            <motion.div key={i} variants={staggerItem}
              className="flex-1 min-w-[200px] text-center p-8 transition-all"
              style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
              whileHover={{ borderColor: 'rgba(201,168,76,.28)' }}
            >
              <span className="text-[28px] mb-4 block" style={{ color: 'var(--gold)' }}>{c.icon}</span>
              <h4 className="font-cormorant font-light text-[18px] mb-2">{c.name}</h4>
              <p className="text-[12px] leading-[1.6]" style={{ color: 'var(--muted)' }}>{c.desc}</p>
            </motion.div>
          ))}
        </StaggerChildren>
      </section>

      {/* CTA */}
      <section className="py-24 px-16 text-center max-md:px-6" style={{ background: 'var(--bg)' }}>
        <FadeUp>
          <h2 className="font-cormorant font-light text-[52px] mb-5">Ready to work <em className="italic" style={{ color: 'var(--gold)' }}>together?</em></h2>
          <div className="flex justify-center gap-5 flex-wrap">
            <Link href="/quote"><BtnGold>Get a Quote</BtnGold></Link>
            <Link href="/contact"><BtnGhost>Contact Us</BtnGhost></Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
