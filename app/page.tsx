'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FadeUp, FadeIn, StaggerChildren, staggerItem, AnimatedCounter, SlideIn } from '@/components/ui/Motion'
import { BtnGold, BtnGhost, SectionHeader, GoldRule, ProductSVG, BadgePill, Stars, GoldRule as Rule } from '@/components/ui/Components'
import { products, testimonials, stats } from '@/lib/data'

// ── 3D Box ────────────────────────────────────────────────
function Box3D() {
  return (
    <div className="relative w-[300px] h-[330px] float-box">
      {/* top face */}
      <div className="pf absolute" style={{ width: 212, height: 44, background: 'linear-gradient(145deg,#2A2A1C,#302E20)', left: 50, top: 40, border: '1px solid rgba(201,168,76,.25)', transform: 'skewX(-30deg) translateX(14px) translateY(-42px)' }} />
      {/* side face */}
      <div className="pf absolute" style={{ width: 56, height: 248, background: 'linear-gradient(to bottom,#141410,#1C1C14)', left: 262, top: 40, border: '1px solid rgba(201,168,76,.25)', transform: 'skewY(-30deg) translateY(22px)' }} />
      {/* front face */}
      <div className="absolute flex flex-col justify-end p-7" style={{ width: 212, height: 248, background: 'linear-gradient(145deg,#1B1B13,#252519)', left: 50, top: 40, border: '1px solid rgba(201,168,76,.25)' }}>
        <div className="font-cormorant font-light tracking-[.2em] text-[22px]" style={{ color: 'var(--gold)' }}>AMRYXA</div>
        <div className="text-[8px] tracking-[.26em] uppercase mt-1" style={{ color: 'var(--gold-d)' }}>Premium Packaging</div>
      </div>
      {/* orbits */}
      <div className="float-alt absolute" style={{ top: -15, right: -25, width: 72, height: 72, border: '1px solid rgba(201,168,76,.1)' }} />
      <div className="float-box absolute" style={{ bottom: 15, left: -18, width: 48, height: 48, border: '1px solid rgba(201,168,76,.08)' }} />
      <div className="float-alt absolute w-[26px] h-[26px]" style={{ top: '40%', right: -55, background: 'rgba(201,168,76,.14)' }} />
    </div>
  )
}

// ── Hero ──────────────────────────────────────────────────
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingLeft: 64, paddingRight: 64 }}>
      {/* backgrounds */}
      <div className="absolute inset-0 section-grid-bg" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 70% at 75% 50%, rgba(201,168,76,.07) 0%, transparent 60%)' }} />

      {/* content */}
      <motion.div style={{ y }} className="relative z-10 max-w-[680px]">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
          className="flex items-center gap-3 mb-9 text-[10px] tracking-[.24em] uppercase" style={{ color: 'var(--gold)' }}>
          <span className="w-7 h-px" style={{ background: 'var(--gold)' }} />
          Est. 2024 — India's Premium Packaging Partner
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }}
          className="font-cormorant font-light leading-[.92]"
          style={{ fontSize: 'clamp(52px,9vw,118px)', letterSpacing: '-0.01em' }}
        >
          Packaging<br />That Tells<br />Your <em className="italic" style={{ color: 'var(--gold)' }}>Story</em>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }}
          className="text-[15px] leading-[1.78] max-w-[400px] mt-9" style={{ color: 'var(--muted)' }}>
          Amryxa engineers bespoke packaging that transforms brands. From luxury rigid boxes to sustainable wraps — every detail crafted for impact, scale, and delight.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.45 }}
          className="flex gap-4 mt-14 flex-wrap">
          <Link href="/quote"><BtnGold>Start Your Order</BtnGold></Link>
          <Link href="/products"><BtnGhost>Explore Products</BtnGhost></Link>
        </motion.div>
      </motion.div>

      {/* 3D box */}
      <FadeIn delay={0.55} className="absolute right-[7%] top-1/2 -translate-y-1/2 hidden xl:block">
        <Box3D />
      </FadeIn>

      {/* scroll hint */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
        className="absolute bottom-10 left-16 flex items-center gap-4 text-[10px] tracking-[.18em] uppercase z-10"
        style={{ color: 'var(--muted)' }}>
        <motion.span initial={{ width: 0 }} animate={{ width: 52 }} transition={{ delay: 1.3, duration: 0.8 }}
          className="h-px block" style={{ background: 'var(--muted)' }} />
        Scroll to explore
      </motion.div>

      {/* metrics */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
        className="absolute bottom-10 right-16 hidden lg:flex gap-10 z-10">
        {[['1,200+', 'Brands'], ['48hr', 'Samples'], ['99%', 'Satisfied']].map(([n, l], i) => (
          <div key={i} className="flex items-center gap-10">
            {i > 0 && <div className="w-px h-9 my-auto" style={{ background: 'var(--border)' }} />}
            <div>
              <div className="font-cormorant font-light text-[26px]" style={{ color: 'var(--gold)' }}>{n}</div>
              <div className="text-[10px] tracking-[.12em] uppercase" style={{ color: 'var(--muted2)' }}>{l}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

// ── Featured Products ─────────────────────────────────────
function FeaturedProducts() {
  const fp = products.slice(0, 3)
  return (
    <section className="py-32 px-16 max-md:px-6" style={{ background: 'var(--bg2)' }}>
      <FadeUp><SectionHeader tag="Premium Boxes" title={<>Start with one of<br />our <em className="italic" style={{ color: 'var(--gold)' }}>premium</em> packaging solutions</>} /></FadeUp>
      <StaggerChildren className="grid grid-cols-3 gap-0.5 mt-16 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {fp.map((p, i) => (
          <motion.div key={p.id} variants={staggerItem}
            className="group relative overflow-hidden cursor-pointer p-11"
            style={{ background: i === 5 ? 'linear-gradient(145deg,rgba(201,168,76,.07),rgba(201,168,76,.02))' : 'var(--bg2)', border: i === 5 ? '1px solid rgba(201,168,76,.22)' : 'none' }}
            whileHover={{ backgroundColor: i === 5 ? undefined : '#0E0E0E' }}
          >
            {/* gold underline */}
            <motion.div className="absolute bottom-0 left-0 h-0.5" style={{ background: 'var(--gold)', scaleX: 0, transformOrigin: 'left', width: '100%' }}
              initial={false} whileHover={{ scaleX: 1 }} transition={{ duration: 0.4 }} />

            <div className="font-cormorant font-light text-[52px] leading-none" style={{ color: 'rgba(201,168,76,0.09)' }}>0{i + 1}</div>
            <div className="mt-5 mb-6"><ProductSVG type={p.svgType} size={46} /></div>
            <div className="font-cormorant font-light text-[26px] mb-3" style={{ color: i === 5 ? 'var(--gold)' : 'var(--text)' }}>{p.name}</div>
            <div className="text-[13px] leading-[1.72]" style={{ color: 'var(--muted)' }}>{p.desc.substring(0, 110)}...</div>

            {/* arrow */}
            <motion.div className="absolute bottom-9 right-9 w-9 h-9 flex items-center justify-center text-base transition-all"
              style={{ border: i === 5 ? '1px solid var(--gold)' : '1px solid var(--border)', color: 'var(--gold)', background: i === 5 ? 'var(--gold)' : 'transparent' }}
              whileHover={{ background: 'var(--gold)', borderColor: 'var(--gold)', color: 'var(--bg)' }}
            >
              <span style={{ color: i === 5 ? 'var(--bg)' : undefined }}>→</span>
            </motion.div>
          </motion.div>
        ))}
      </StaggerChildren>
      <FadeUp className="text-center mt-12">
        <Link href="/products"><BtnGhost>View All Products</BtnGhost></Link>
      </FadeUp>
    </section>
  )
}

// ── About Teaser ──────────────────────────────────────────
function AboutTeaser() {
  return (
    <section className="py-32 px-16 max-md:px-6" style={{ background: 'var(--bg)' }}>
      <div className="grid grid-cols-2 gap-24 items-center max-lg:grid-cols-1">
        <SlideIn direction="left">
          <SectionHeader tag="Our Story" title={<>Born from a<br />passion for <em className="italic" style={{ color: 'var(--gold)' }}>craft</em></>} />
          <GoldRule />
          <p className="text-[15px] leading-[1.82]" style={{ color: 'var(--muted)' }}>
            Amryxa was founded with one vision: packaging isn't just a container — it's the first physical touchpoint your customer has with your brand. We believe that experience deserves to be extraordinary.
          </p>
          <p className="text-[15px] leading-[1.82] mt-4" style={{ color: 'var(--muted)' }}>
            From D2C startups to enterprise FMCG brands, we've helped 1,200+ businesses transform their packaging into a competitive advantage.
          </p>
          <div className="mt-9">
            <Link href="/about"><BtnGhost>Learn Our Story</BtnGhost></Link>
          </div>
        </SlideIn>
        <SlideIn direction="right" delay={0.15}>
          <div className="grid grid-cols-2 gap-0.5">
            {[
              { label: 'Founded On', content: '"Every box should tell a story worth remembering"', span: true },
              { label: 'Brands Served', counter: 1200 },
              { label: 'Sample Turnaround', fixed: '48hr' },
              { label: 'Commitment', content: 'ISO 9001:2015 certified manufacturing with zero-defect quality protocols.', span: true },
            ].map((item, i) => (
              <div key={i} className={`p-8 ${item.span ? 'col-span-2' : ''}`}
                style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
                <div className="text-[10px] tracking-[.2em] uppercase mb-3" style={{ color: 'var(--gold)' }}>{item.label}</div>
                {item.counter !== undefined
                  ? <div className="font-cormorant font-light text-[46px] leading-none" style={{ color: 'var(--gold)' }}><AnimatedCounter target={item.counter} suffix="+" /></div>
                  : item.fixed
                  ? <div className="font-cormorant font-light text-[46px] leading-none" style={{ color: 'var(--gold)' }}>{item.fixed}</div>
                  : <div className="font-cormorant font-light text-[22px] leading-[1.4]">{item.content}</div>
                }
              </div>
            ))}
          </div>
        </SlideIn>
      </div>
    </section>
  )
}

// ── Stats ─────────────────────────────────────────────────
function StatsSection() {
  return (
    <section className="py-24 px-16 max-md:px-6" style={{ background: 'var(--bg2)' }}>
      <FadeUp className="text-center mb-20">
        <SectionHeader tag="By The Numbers" title={<>Trusted by brands<br />that <em className="italic" style={{ color: 'var(--gold)' }}>demand</em> the best</>} center />
      </FadeUp>
      <StaggerChildren className="grid grid-cols-4 gap-px max-md:grid-cols-2 max-sm:grid-cols-1" style={{ background: 'var(--border)' }}>
        {stats.map((s, i) => (
          <motion.div key={i} variants={staggerItem} className="py-16 px-10 text-center" style={{ background: 'var(--bg)' }}>
            <div className="font-cormorant font-light leading-none mb-3" style={{ fontSize: 66, color: 'var(--gold)' }}>
              <AnimatedCounter target={s.n} suffix={s.suffix} />
            </div>
            <div className="text-[10px] tracking-[.18em] uppercase" style={{ color: 'var(--muted)' }}>{s.label}</div>
          </motion.div>
        ))}
      </StaggerChildren>
    </section>
  )
}

// ── Testimonials ──────────────────────────────────────────
function Testimonials() {
  return (
    <section className="py-32 px-16 max-md:px-6" style={{ background: 'var(--bg)' }}>
      <FadeUp className="mb-16">
        <SectionHeader tag="Client Love" title={<>What brands<br />say about <em className="italic" style={{ color: 'var(--gold)' }}>us</em></>} />
      </FadeUp>
      <div className="flex gap-7 overflow-x-auto no-scrollbar pb-2">
        {testimonials.map((t, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }}
            whileHover={{ borderColor: 'rgba(201,168,76,0.28)' }}
            className="relative flex-shrink-0 p-11"
            style={{ minWidth: 400, maxWidth: 400, background: 'var(--bg2)', border: '1px solid var(--border)', transition: 'border-color .3s' }}
          >
            <div className="absolute top-3 right-7 font-cormorant text-[88px] leading-none pointer-events-none" style={{ color: 'rgba(201,168,76,0.07)' }}>"</div>
            <Stars />
            <p className="font-cormorant font-light italic text-[17px] leading-[1.7] mb-8">{t.body}</p>
            <div className="text-[13px] font-medium">{t.author}</div>
            <div className="text-[11px] tracking-[.12em] uppercase mt-1" style={{ color: 'var(--gold)' }}>{t.company}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ── CTA ───────────────────────────────────────────────────
function CTABand() {
  return (
    <section className="py-32 px-16 text-center relative overflow-hidden max-md:px-6" style={{ background: 'var(--bg2)' }}>
      {[700, 500, 300].map((size, i) => (
        <div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{ width: size, height: size, border: `1px solid rgba(201,168,76,${[.04, .065, .09][i]})` }} />
      ))}
      <FadeUp className="relative z-10">
        <BadgePill>Limited Onboarding Slots This Quarter</BadgePill>
        <div className="font-cormorant font-light leading-[1.03] mb-5" style={{ fontSize: 'clamp(36px,5.5vw,70px)' }}>
          Ready to elevate<br />your <em className="italic" style={{ color: 'var(--gold)' }}>packaging?</em>
        </div>
        <p className="text-[15px] leading-[1.75] max-w-[420px] mx-auto mb-14" style={{ color: 'var(--muted)' }}>
          Join 1,200+ brands who trust Amryxa. Get a free consultation and custom quote within 24 hours.
        </p>
        <div className="flex justify-center gap-5 flex-wrap">
          <Link href="/quote"><BtnGold>Get Free Quote</BtnGold></Link>
          <Link href="/contact"><BtnGhost>Talk to an Expert</BtnGhost></Link>
        </div>
      </FadeUp>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <AboutTeaser />
    </>
  )
}
