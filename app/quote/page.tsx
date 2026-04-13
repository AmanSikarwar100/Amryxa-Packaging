'use client'
import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUp } from '@/components/ui/Motion'
import { BtnGold, ProductSVG, FormInput, FormTextarea } from '@/components/ui/Components'

// ── Data ──────────────────────────────────────────────────
const qtyLevels = [
  { v: 500, l: '500' }, { v: 1000, l: '1K' }, { v: 2500, l: '2.5K' },
  { v: 5000, l: '5K' }, { v: 10000, l: '10K' }, { v: 25000, l: '25K' },
  { v: 50000, l: '50K' }, { v: 100000, l: '100K' }, { v: 250000, l: '250K' },
  { v: 500000, l: '500K' }, { v: 1000000, l: '1M+' },
]

const typeOptions = [
  { key: 'rigid', name: 'Rigid Box', sub: 'Luxury & premium', svgType: 'rigid' },
  { key: 'carton', name: 'Folding Carton', sub: 'FMCG & pharma', svgType: 'carton' },
  { key: 'bag', name: 'Carry Bag', sub: 'Retail & gift', svgType: 'bag' },
  { key: 'label', name: 'Label / Sticker', sub: 'Branding & info', svgType: 'label' },
  { key: 'gift', name: 'Gift Box', sub: 'Premium unboxing', svgType: 'gift' },
  { key: 'custom', name: 'Custom', sub: 'Unique solution', svgType: 'custom' },
]

const materials = [
  { key: 'e-flute', name: 'E-Flute', sub: '350–450 gsm' },
  { key: 'sbs', name: 'SBS Board', sub: '300–400 gsm' },
  { key: 'fbb', name: 'FBB Board', sub: '250–350 gsm' },
  { key: 'kraft', name: 'Kraft', sub: 'Eco-friendly' },
  { key: 'duplex', name: 'Duplex', sub: '250–400 gsm' },
  { key: 'chipboard', name: 'Chipboard', sub: '2–3mm rigid' },
  { key: 'art-paper', name: 'Art Paper', sub: '130–170 gsm' },
  { key: 'pe-coated', name: 'PE Coated', sub: 'Food safe' },
]

const printings = [
  { key: '4c', name: '4-Color CMYK', sub: 'Full colour' },
  { key: 'pantone', name: 'Pantone', sub: 'Brand exact' },
  { key: '1c', name: '1-Color', sub: 'Minimal' },
  { key: '2c', name: '2-Color', sub: 'Classic' },
  { key: 'digital', name: 'Digital', sub: 'Short run' },
  { key: 'unprinted', name: 'Unprinted', sub: 'Plain stock' },
]

const finishes = [
  'Matte Lamination', 'Gloss Lamination', 'Soft Touch', 'Gold Foil', 'Silver Foil',
  'Embossing', 'Debossing', 'UV Spot', 'Aqueous Coat', 'Magnetic Closure', 'Ribbon Pull', 'Window Patch',
]

// ── Pricing engine ────────────────────────────────────────
const basePrices: Record<string, Record<number, number>> = {
  rigid: { 500: 18, 1000: 12, 2500: 8, 5000: 5.5, 10000: 4, 25000: 3, 50000: 2.4, 100000: 2, 250000: 1.7, 500000: 1.5, 1000000: 1.3 },
  carton: { 500: 4, 1000: 2.8, 2500: 2, 5000: 1.5, 10000: 1.1, 25000: .85, 50000: .7, 100000: .6, 250000: .5, 500000: .42, 1000000: .35 },
  bag: { 500: 6, 1000: 4.2, 2500: 3, 5000: 2.2, 10000: 1.7, 25000: 1.3, 50000: 1.1, 100000: .9, 250000: .75, 500000: .65, 1000000: .55 },
  label: { 500: 1.2, 1000: .8, 2500: .6, 5000: .45, 10000: .35, 25000: .27, 50000: .22, 100000: .18, 250000: .15, 500000: .13, 1000000: .11 },
  gift: { 500: 28, 1000: 20, 2500: 14, 5000: 10, 10000: 7.5, 25000: 6, 50000: 5, 100000: 4.2, 250000: 3.6, 500000: 3.1, 1000000: 2.8 },
  custom: { 500: 22, 1000: 15, 2500: 10, 5000: 7, 10000: 5, 25000: 4, 50000: 3.2, 100000: 2.6, 250000: 2.2, 500000: 1.9, 1000000: 1.6 },
}
const matMul: Record<string, number> = { 'e-flute': 1, sbs: 1.05, fbb: .95, kraft: .88, duplex: .92, chipboard: 1.4, 'art-paper': .85, 'pe-coated': 1.1 }
const printMul: Record<string, number> = { '4c': 1, pantone: 1.12, '1c': .7, '2c': .8, digital: 1.2, unprinted: .5 }
const finCost: Record<string, number> = { 'Matte Lamination': .4, 'Gloss Lamination': .3, 'Soft Touch': .8, 'Gold Foil': 1.2, 'Silver Foil': .9, Embossing: .8, Debossing: .7, 'UV Spot': .6, 'Aqueous Coat': .25, 'Magnetic Closure': 1.8, 'Ribbon Pull': .6, 'Window Patch': .5 }

function calcPrice(type: string, qty: number, mat: string, print: string, fins: string[]) {
  const typeKey = type in basePrices ? type : 'rigid'
  const qtyKey = Object.keys(basePrices[typeKey]).map(Number).reduce((p, c) => Math.abs(c - qty) < Math.abs(p - qty) ? c : p)
  let base = basePrices[typeKey][qtyKey]
  base *= (matMul[mat] || 1) * (printMul[print] || 1)
  const finTotal = fins.reduce((s, f) => s + (finCost[f] || 0), 0)
  const lo = (base + finTotal * .7).toFixed(2)
  const hi = (base + finTotal * 1.2).toFixed(2)
  const totalLo = (qty * parseFloat(lo)).toLocaleString('en-IN')
  const totalHi = (qty * parseFloat(hi)).toLocaleString('en-IN')
  return { lo, hi, totalLo, totalHi }
}

// ── Step Wrapper ──────────────────────────────────────────
function Step({ num, title, children }: { num: number; title: string; children: React.ReactNode }) {
  return (
    <FadeUp delay={num * 0.08}>
      <div className="p-9" style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-9 h-9 flex items-center justify-center text-sm flex-shrink-0"
            style={{ border: '1px solid var(--gold)', color: 'var(--gold)' }}>{num}</div>
          <h3 className="font-cormorant font-light text-[24px]">{title}</h3>
        </div>
        {children}
      </div>
    </FadeUp>
  )
}

// ── Option button ─────────────────────────────────────────
function Opt({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <motion.div onClick={onClick} whileTap={{ scale: 0.97 }} className="text-center p-4 cursor-pointer transition-all"
      style={{ background: selected ? 'rgba(201,168,76,.07)' : 'var(--bg)', border: `1px solid ${selected ? 'var(--gold)' : 'var(--border)'}` }}>
      {children}
    </motion.div>
  )
}

// ── Toast ──────────────────────────────────────────────────
function Toast({ msg, ok }: { msg: string; ok: boolean }) {
  return (
    <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }}
      className="fixed bottom-10 right-10 z-[9999] px-7 py-4 text-[13px]"
      style={{ background: ok ? 'var(--gold)' : '#E04B4B', color: ok ? 'var(--bg)' : 'white' }}>
      {msg}
    </motion.div>
  )
}

// ── Main Page ─────────────────────────────────────────────
export default function QuotePage() {
  const [type, setType] = useState('rigid')
  const [qtyIdx, setQtyIdx] = useState(2)           // 2500
  const [mat, setMat] = useState('e-flute')
  const [print, setPrint] = useState('4c')
  const [fins, setFins] = useState<string[]>(['Gloss Lamination'])
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', notes: '' })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const qty = qtyLevels[qtyIdx].v
  const price = calcPrice(type, qty, mat, print, fins)
  const selectedType = typeOptions.find(t => t.key === type)

  const toggleFin = useCallback((fin: string) => {
    setFins(f => f.includes(fin) ? f.filter(x => x !== fin) : [...f, fin])
  }, [])

  const showToast = (msg: string, ok = true) => {
    setToast({ msg, ok })
    setTimeout(() => setToast(null), 4000)
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim()) return showToast('Please enter your name.', false)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return showToast('Please enter a valid email.', false)
    setLoading(true)
    await new Promise(r => setTimeout(r, 900))
    setLoading(false)
    showToast(`✓ Quote request for ${selectedType?.name} (${qtyLevels[qtyIdx].l} units) submitted!`)
    setForm({ name: '', company: '', email: '', phone: '', notes: '' })
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-20 px-16 max-md:px-6" style={{ background: 'var(--bg2)' }}>
        <div className="absolute inset-0 section-grid-bg" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%,rgba(201,168,76,.05) 0%,transparent 60%)' }} />
        <div className="relative z-10">
          <FadeUp>
            <div className="flex items-center gap-3 mb-5 text-[10px] tracking-[.24em] uppercase" style={{ color: 'var(--gold)' }}>
              <span className="w-5 h-px" style={{ background: 'var(--gold)' }} />Quote Builder
            </div>
            <h1 className="font-cormorant font-light leading-[.96]" style={{ fontSize: 'clamp(44px,7vw,90px)' }}>
              Build your<br />custom <em className="italic" style={{ color: 'var(--gold)' }}>quote</em>
            </h1>
            <p className="text-[15px] leading-[1.75] max-w-[520px] mt-6" style={{ color: 'var(--muted)' }}>
              Configure your packaging and get an instant estimated price. Our team confirms the final quote within 4 hours.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-16 px-16 max-md:px-6" style={{ background: 'var(--bg)' }}>
        <div className="grid grid-cols-[1fr_380px] gap-14 items-start max-lg:grid-cols-1">

          {/* Steps */}
          <div className="flex flex-col gap-6">

            {/* 1. Type */}
            <Step num={1} title="Packaging Type">
              <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-2">
                {typeOptions.map(t => (
                  <Opt key={t.key} selected={type === t.key} onClick={() => setType(t.key)}>
                    <div className="flex justify-center mb-2"><ProductSVG type={t.svgType} size={36} /></div>
                    <div className="text-[13px] font-medium mb-1">{t.name}</div>
                    <div className="text-[11px]" style={{ color: 'var(--muted)' }}>{t.sub}</div>
                  </Opt>
                ))}
              </div>
            </Step>

            {/* 2. Quantity */}
            <Step num={2} title="Order Quantity">
              <div className="font-cormorant font-light text-[28px] mb-5" style={{ color: 'var(--gold)' }}>
                {qtyLevels[qtyIdx].l} units
              </div>
              <input type="range" min={0} max={10} value={qtyIdx} onChange={e => setQtyIdx(Number(e.target.value))} />
              <div className="flex justify-between mt-3 text-[10px]" style={{ color: 'var(--muted)' }}>
                {qtyLevels.filter((_, i) => i % 2 === 0 || i === qtyLevels.length - 1).map(l => <span key={l.l}>{l.l}</span>)}
              </div>
            </Step>

            {/* 3. Material */}
            <Step num={3} title="Material & Board">
              <div className="grid grid-cols-4 gap-2.5 max-sm:grid-cols-2">
                {materials.map(m => (
                  <Opt key={m.key} selected={mat === m.key} onClick={() => setMat(m.key)}>
                    <div className="text-[12px] font-medium mb-1">{m.name}</div>
                    <div className="text-[10px]" style={{ color: 'var(--muted)' }}>{m.sub}</div>
                  </Opt>
                ))}
              </div>
            </Step>

            {/* 4. Printing */}
            <Step num={4} title="Printing & Colours">
              <div className="grid grid-cols-3 gap-2.5 max-sm:grid-cols-2">
                {printings.map(p => (
                  <Opt key={p.key} selected={print === p.key} onClick={() => setPrint(p.key)}>
                    <div className="text-[12px] font-medium mb-1">{p.name}</div>
                    <div className="text-[10px]" style={{ color: 'var(--muted)' }}>{p.sub}</div>
                  </Opt>
                ))}
              </div>
            </Step>

            {/* 5. Finishes */}
            <Step num={5} title="Finishing & Effects">
              <div className="flex flex-wrap gap-2.5">
                {finishes.map(f => (
                  <motion.button key={f} onClick={() => toggleFin(f)} whileTap={{ scale: 0.95 }}
                    className="text-[12px] px-4 py-2.5 transition-all"
                    style={{
                      background: fins.includes(f) ? 'rgba(201,168,76,.07)' : 'var(--bg)',
                      border: `1px solid ${fins.includes(f) ? 'var(--gold)' : 'var(--border)'}`,
                      color: fins.includes(f) ? 'var(--gold)' : 'var(--muted)',
                    }}>
                    {f}
                  </motion.button>
                ))}
              </div>
            </Step>

            {/* 6. Details */}
            <Step num={6} title="Your Details">
              <form onSubmit={submit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  <FormInput label="Your Name" value={form.name} onChange={set('name')} placeholder="Rahul Sharma" />
                  <FormInput label="Company" value={form.company} onChange={set('company')} placeholder="Your Brand" />
                </div>
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  <FormInput label="Email" type="email" value={form.email} onChange={set('email')} placeholder="you@brand.com" />
                  <FormInput label="Phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="+91 98765 43210" />
                </div>
                <FormTextarea label="Additional Notes" value={form.notes} onChange={set('notes')} rows={3}
                  placeholder="Dimensions, special requirements, reference brands, timeline..." />
                <motion.button type="submit" disabled={loading}
                  whileHover={{ backgroundColor: 'var(--gold-l)' }} whileTap={{ scale: 0.98 }}
                  className="w-full py-[18px] text-[11px] tracking-[.18em] uppercase"
                  style={{ background: 'var(--gold)', color: 'var(--bg)', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Submitting...' : 'Submit Quote Request →'}
                </motion.button>
                <p className="text-center text-[11px]" style={{ color: 'var(--muted2)' }}>
                  Confirmed quote within 4 hours · Free samples available · No minimum commitment
                </p>
              </form>
            </Step>
          </div>

          {/* Summary sidebar */}
          <div className="sticky top-24">
            <FadeUp delay={0.3}>
              <div className="p-9" style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-3 mb-7 font-cormorant font-light text-[22px]">
                  <span className="w-5 h-px" style={{ background: 'var(--gold)' }} />Quote Summary
                </div>

                {/* Visual */}
                <div className="flex justify-center mb-6 py-4" style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}>
                  <ProductSVG type={selectedType?.svgType || 'rigid'} size={80} />
                </div>

                {/* Rows */}
                <div className="flex flex-col gap-4 mb-6">
                  {[
                    { l: 'Product Type', v: selectedType?.name || 'Rigid Box' },
                    { l: 'Quantity', v: `${qtyLevels[qtyIdx].l} units` },
                    { l: 'Material', v: materials.find(m => m.key === mat)?.name || '' },
                    { l: 'Printing', v: printings.find(p => p.key === print)?.name || '' },
                    { l: 'Finishes', v: fins.length ? `${fins.length} selected` : 'None' },
                  ].map(row => (
                    <div key={row.l} className="flex justify-between items-center text-[13px]">
                      <span style={{ color: 'var(--muted)' }}>{row.l}</span>
                      <span className="font-medium">{row.v}</span>
                    </div>
                  ))}
                </div>

                <div className="h-px mb-6" style={{ background: 'var(--border)' }} />

                {/* Price estimate */}
                <div className="p-5 mb-6" style={{ background: 'var(--bg3)', border: '1px solid var(--border2)' }}>
                  <div className="text-[10px] tracking-[.14em] uppercase mb-2" style={{ color: 'var(--gold)' }}>Estimated Price Range</div>
                  <div className="font-cormorant font-light text-[28px]" style={{ color: 'var(--gold)' }}>
                    ₹{price.lo} – ₹{price.hi} /pc
                  </div>
                  <div className="text-[11px] mt-1.5" style={{ color: 'var(--muted)' }}>
                    ~₹{price.totalLo} – ₹{price.totalHi} total
                  </div>
                </div>

                <p className="text-[11px] leading-[1.6] mb-6" style={{ color: 'var(--muted2)' }}>
                  *Estimate only. Final pricing confirmed after design review and material spec. Includes printing, lamination, and delivery.
                </p>

                <motion.button
                  onClick={() => document.getElementById('form-name')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ backgroundColor: 'var(--gold-l)' }} whileTap={{ scale: 0.97 }}
                  className="w-full py-4 text-[11px] tracking-[.18em] uppercase"
                  style={{ background: 'var(--gold)', color: 'var(--bg)', border: 'none', cursor: 'pointer' }}>
                  Proceed to Details →
                </motion.button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {toast && <Toast msg={toast.msg} ok={toast.ok} />}
      </AnimatePresence>
    </>
  )
}
