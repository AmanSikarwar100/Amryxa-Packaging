'use client'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FadeUp, StaggerChildren, staggerItem } from '@/components/ui/Motion'
import { BtnGold, SectionHeader } from '@/components/ui/Components'
import { processSteps } from '@/lib/data'

const qualityItems = [
  { title: 'Material Inspection', desc: 'All incoming substrates tested for caliper, brightness, moisture content, and surface smoothness before any order enters production.' },
  { title: 'Inline QC Cameras', desc: '100% digital inspection of every sheet as it exits the press. AI-powered defect detection catches colour shifts, misregistration, and hickeys in real-time.' },
  { title: 'Adhesion Testing', desc: 'All laminated and coated products undergo cross-hatch adhesion tests and accelerated aging to ensure finishes hold through transport and retail.' },
  { title: 'Dimensional Accuracy', desc: 'Die-cutting precision within ±0.3mm tolerance. All boxes assembled and gap-tested before approval to ensure perfect fit with your product.' },
  { title: 'Colour Consistency', desc: 'Pantone-matched printing with spectrophotometer validation at every 500-sheet interval. Delta-E < 2 guaranteed across the full run.' },
  { title: 'Final Audit Report', desc: 'Every order ships with a full batch quality report including colour readings, defect rates, and inspector sign-offs for your supply chain documentation.' },
]

function ProcessStep({ step, index }: { step: typeof processSteps[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.85, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="grid gap-16 py-16 relative"
      style={{ gridTemplateColumns: '80px 1fr', borderBottom: index < processSteps.length - 1 ? '1px solid var(--border)' : 'none' }}
    >
      {/* connecting line */}
      {index < processSteps.length - 1 && (
        <motion.div
          initial={{ height: 0 }} animate={inView ? { height: '100%' } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute left-[39px] top-[80px] w-px"
          style={{ background: 'var(--border)', transformOrigin: 'top' }}
        />
      )}
      {/* number */}
      <div className="w-[80px] h-[80px] flex items-center justify-center font-cormorant text-[24px] flex-shrink-0 relative z-10"
        style={{ border: '1px solid var(--gold)', color: 'var(--gold)', background: 'var(--bg)' }}>
        {step.num}
      </div>
      {/* body */}
      <div className="pt-4">
        <h3 className="font-cormorant font-light text-[32px] mb-4">{step.title}</h3>
        <p className="text-[15px] leading-[1.78] mb-6 max-w-[600px]" style={{ color: 'var(--muted)' }}>{step.desc}</p>
        <div className="flex flex-wrap gap-2.5">
          {step.deliverables.map(d => (
            <span key={d} className="text-[11px] px-3.5 py-1.5 tracking-[.06em]"
              style={{ background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.14)', color: 'var(--muted)' }}>
              {d}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-20 px-16 max-md:px-6" style={{ background: 'var(--bg2)' }}>
        <div className="absolute inset-0 section-grid-bg" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%,rgba(201,168,76,.05) 0%,transparent 60%)' }} />
        <div className="relative z-10">
          <FadeUp>
            <div className="flex items-center gap-3 mb-5 text-[10px] tracking-[.24em] uppercase" style={{ color: 'var(--gold)' }}>
              <span className="w-5 h-px" style={{ background: 'var(--gold)' }} />How It Works
            </div>
            <h1 className="font-cormorant font-light leading-[.96]" style={{ fontSize: 'clamp(44px,7vw,90px)' }}>
              From brief to<br />doorstep in <em className="italic" style={{ color: 'var(--gold)' }}>days</em>
            </h1>
            <p className="text-[15px] leading-[1.75] max-w-[520px] mt-6" style={{ color: 'var(--muted)' }}>
              A transparent, collaborative process designed to deliver perfect packaging — on time, every time, with zero surprises.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-16 max-md:px-6" style={{ background: 'var(--bg)' }}>
        <FadeUp className="mb-20">
          <SectionHeader tag="The Process" title={<>Six steps to<br /><em className="italic" style={{ color: 'var(--gold)' }}>extraordinary</em></>} />
        </FadeUp>
        <div className="relative">
          {processSteps.map((step, i) => (
            <ProcessStep key={step.num} step={step} index={i} />
          ))}
        </div>
      </section>

      {/* Quick facts strip */}
      <section style={{ background: 'var(--gold)' }} className="py-12 px-16 max-md:px-6">
        <div className="grid grid-cols-4 gap-px max-md:grid-cols-2" style={{ background: 'rgba(0,0,0,0.1)' }}>
          {[
            { n: '48hr', l: 'Sample Dispatch' },
            { n: '±0.3mm', l: 'Die-Cut Tolerance' },
            { n: '<0.01%', l: 'Defect Rate' },
            { n: '3–5 day', l: 'Pan India Delivery' },
          ].map((f, i) => (
            <div key={i} className="text-center py-8 px-6" style={{ background: 'var(--gold)' }}>
              <div className="font-cormorant font-light text-[40px] leading-none mb-1" style={{ color: 'var(--bg)' }}>{f.n}</div>
              <div className="text-[10px] tracking-[.16em] uppercase" style={{ color: 'rgba(9,9,10,0.6)' }}>{f.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality */}
      <section className="py-32 px-16 max-md:px-6" style={{ background: 'var(--bg2)' }}>
        <FadeUp className="mb-16 text-center">
          <SectionHeader tag="Quality Standards" title={<>Our commitment to<br /><em className="italic" style={{ color: 'var(--gold)' }}>zero defects</em></>} center />
        </FadeUp>
        <StaggerChildren className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {qualityItems.map((q, i) => (
            <motion.div key={i} variants={staggerItem}
              className="p-9 transition-all"
              style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
              whileHover={{ borderColor: 'rgba(201,168,76,.28)' }}
            >
              <h4 className="font-cormorant font-light text-[22px] mb-3" style={{ color: 'var(--gold)' }}>{q.title}</h4>
              <p className="text-[13px] leading-[1.72]" style={{ color: 'var(--muted)' }}>{q.desc}</p>
            </motion.div>
          ))}
        </StaggerChildren>
      </section>

      {/* FAQ strip */}
      <section className="py-24 px-16 max-md:px-6" style={{ background: 'var(--bg)' }}>
        <FadeUp className="mb-14">
          <SectionHeader tag="Common Questions" title={<>Frequently <em className="italic" style={{ color: 'var(--gold)' }}>asked</em></>} />
        </FadeUp>
        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          {[
            { q: 'What is the minimum order quantity?', a: 'MOQ varies by product — rigid boxes start at 300 units, folding cartons at 1,000 units, and labels at 1,000 units. For rush or sample orders we can accommodate lower quantities.' },
            { q: 'How long does production take?', a: 'After sample approval, bulk production typically takes 12–18 working days. Rush production is available with a 30% surcharge for 7–10 day turnarounds on select products.' },
            { q: 'Do you offer custom sizes and shapes?', a: 'Yes — 100% of our products are custom-made to your exact dimensions. Our structural designers will create a custom dieline for every project at no additional cost.' },
            { q: 'What finishing options are available?', a: 'We offer matte lamination, gloss lamination, soft-touch, UV spot, foil stamping (gold, silver, rose gold), embossing, debossing, aqueous coat, and holographic effects.' },
            { q: 'Can I get physical samples before bulk production?', a: 'Absolutely — physical samples are a mandatory step in our process. We dispatch 3–5 samples within 48 hours of design approval, printed on final substrates.' },
            { q: 'Do you ship outside India?', a: 'Yes, we ship to the UAE, Singapore, UK, and USA regularly. International orders require a minimum 4-week lead time and have different freight terms. Contact us for a quote.' },
          ].map((faq, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className="p-7" style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
                <h4 className="font-medium mb-3 text-[15px]">{faq.q}</h4>
                <p className="text-[13px] leading-[1.72]" style={{ color: 'var(--muted)' }}>{faq.a}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-16 text-center max-md:px-6" style={{ background: 'var(--bg2)' }}>
        <FadeUp>
          <h2 className="font-cormorant font-light text-[52px] mb-5">
            Ready to <em className="italic" style={{ color: 'var(--gold)' }}>start?</em>
          </h2>
          <p className="text-[15px] leading-[1.75] max-w-[420px] mx-auto mb-10" style={{ color: 'var(--muted)' }}>
            Book a free 30-minute discovery call and let's map the perfect packaging strategy for your brand.
          </p>
          <div className="flex justify-center gap-5 flex-wrap">
            <Link href="/quote"><BtnGold>Get a Quote</BtnGold></Link>
            <Link href="/contact"><BtnGold className="!bg-transparent !text-[var(--gold)]" style={{ border: '1px solid var(--gold)' } as React.CSSProperties}>Book a Call</BtnGold></Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
