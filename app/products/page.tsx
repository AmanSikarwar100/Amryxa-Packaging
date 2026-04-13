'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FadeUp, StaggerChildren, staggerItem } from '@/components/ui/Motion'
import { BtnGold, BtnGhost, ProductSVG } from '@/components/ui/Components'
import { products } from '@/lib/data'

const filters = [
  { key: 'all', label: 'All Products' },
  { key: 'rigid', label: 'Rigid Boxes' },
  { key: 'carton', label: 'Folding Cartons' },
  { key: 'bag', label: 'Carry Bags' },
]

const bgMap: Record<string, string> = {
  rigid: 'linear-gradient(145deg,#2A1F0A,#1A1410)',
  carton: 'linear-gradient(145deg,#0A1420,#091018)',
  bag: 'linear-gradient(145deg,#1A0A0A,#120808)',
  label: 'linear-gradient(145deg,#0A1A10,#081210)',
  gift: 'linear-gradient(145deg,#1A0A1A,#110811)',
}

type Product = typeof products[0]

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
    >
      <motion.div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(10px)' }} onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 grid grid-cols-2 max-w-[860px] w-full max-h-[90vh] overflow-y-auto max-md:grid-cols-1"
        style={{ background: 'var(--bg2)', border: '1px solid var(--border2)' }}
      >
        {/* close */}
        <button onClick={onClose}
          className="absolute top-5 right-5 z-20 w-9 h-9 flex items-center justify-center text-base transition-all"
          style={{ border: '1px solid var(--border)', color: 'var(--muted)', background: 'var(--bg2)' }}
          onMouseEnter={e => { (e.currentTarget.style.borderColor = 'var(--gold)'); (e.currentTarget.style.color = 'var(--gold)') }}
          onMouseLeave={e => { (e.currentTarget.style.borderColor = 'var(--border)'); (e.currentTarget.style.color = 'var(--muted)') }}
        >✕</button>

        {/* visual */}
        <div className="min-h-[380px] flex items-center justify-center relative max-md:min-h-[220px]"
          style={{ background: bgMap[product.svgType] || 'var(--bg3)' }}>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%,rgba(201,168,76,.09) 0%,transparent 65%)' }} />
          <div className="relative z-10">
            <ProductSVG type={product.svgType} size={120} />
          </div>
        </div>

        {/* content */}
        <div className="p-11 overflow-y-auto max-md:p-7">
          <div className="text-[10px] tracking-[.2em] uppercase mb-3" style={{ color: 'var(--gold)' }}>{product.cat}</div>
          <h2 className="font-cormorant font-light text-[34px] leading-[1.1] mb-5">{product.name}</h2>
          <p className="text-sm leading-[1.78] mb-7" style={{ color: 'var(--muted)' }}>{product.longDesc}</p>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {product.specs.map(s => (
              <div key={s.l} className="p-4" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                <div className="text-[10px] tracking-[.12em] uppercase mb-1" style={{ color: 'var(--gold)' }}>{s.l}</div>
                <div className="text-[13px]">{s.v}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            <Link href="/quote" onClick={onClose}><BtnGold>Get a Quote</BtnGold></Link>
            <Link href="/contact" onClick={onClose}><BtnGhost>Talk to Expert</BtnGhost></Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ProductsPage() {
  const [active, setActive] = useState('all')
  const [selected, setSelected] = useState<Product | null>(null)

  const filtered = active === 'all' ? products : products.filter(p => p.filter === active)

  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden pt-40 pb-20 px-16 max-md:px-6" style={{ background: 'var(--bg2)' }}>
        <div className="absolute inset-0 section-grid-bg" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%,rgba(201,168,76,.05) 0%,transparent 60%)' }} />
        <div className="relative z-10">
          <FadeUp>
            <div className="flex items-center gap-3 mb-5 text-[10px] tracking-[.24em] uppercase" style={{ color: 'var(--gold)' }}>
              <span className="w-5 h-px" style={{ background: 'var(--gold)' }} /> Our Products
            </div>
            <h1 className="font-cormorant font-light leading-[.96]" style={{ fontSize: 'clamp(44px,7vw,90px)' }}>
              Packaging for<br />every <em className="italic" style={{ color: 'var(--gold)' }}>vision</em>
            </h1>
            <p className="text-[15px] leading-[1.75] max-w-[480px] mt-6" style={{ color: 'var(--muted)' }}>
              From luxury rigid boxes to high-run folding cartons — every product is made-to-order with uncompromising quality and craftsmanship.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filters */}
      <div className="flex gap-2.5 flex-wrap px-16 py-8 max-md:px-6" style={{ background: 'var(--bg)' }}>
        {filters.map(f => (
          <motion.button key={f.key} onClick={() => setActive(f.key)}
            whileTap={{ scale: 0.97 }}
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
              <motion.div key={p.id}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.07 }}
                onClick={() => setSelected(p)}
                className="group cursor-pointer transition-all duration-300"
                style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}
                whileHover={{ y: -4, borderColor: 'rgba(201,168,76,0.28)' }}
              >
                {/* thumb */}
                <div className="h-[220px] flex items-center justify-center relative overflow-hidden"
                  style={{ background: bgMap[p.svgType] || 'var(--bg3)' }}>
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%,rgba(201,168,76,.06) 0%,transparent 70%)' }} />
                  {p.badge && (
                    <div className="absolute top-4 right-4 text-[9px] tracking-[.16em] uppercase px-2.5 py-1.5"
                      style={{ background: 'rgba(201,168,76,.12)', border: '1px solid rgba(201,168,76,.22)', color: 'var(--gold)' }}>
                      {p.badge}
                    </div>
                  )}
                  <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                    <ProductSVG type={p.svgType} size={80} />
                  </div>
                </div>

                {/* body */}
                <div className="p-7">
                  <div className="text-[10px] tracking-[.18em] uppercase mb-2.5" style={{ color: 'var(--gold)' }}>{p.cat}</div>
                  <h3 className="font-cormorant font-light text-[24px] mb-2.5">{p.name}</h3>
                  <p className="text-[13px] leading-[1.7] mb-5" style={{ color: 'var(--muted)' }}>{p.desc.substring(0, 115)}...</p>
                  <div className="flex gap-2 flex-wrap mb-5">
                    {p.tags.slice(0, 3).map(t => (
                      <span key={t} className="text-[10px] px-2.5 py-1 tracking-[.06em]"
                        style={{ background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.12)', color: 'var(--muted)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                    <div className="text-[11px]" style={{ color: 'var(--muted)' }}>
                      MOQ: <span style={{ color: 'var(--gold)', fontWeight: 500 }}>{p.moq} units</span>
                    </div>
                    <motion.button
                      whileHover={{ background: 'var(--gold)', color: 'var(--bg)' }}
                      onClick={e => { e.stopPropagation(); setSelected(p) }}
                      className="text-[10px] tracking-[.14em] uppercase px-5 py-2 transition-all"
                      style={{ border: '1px solid var(--gold)', color: 'var(--gold)', background: 'transparent' }}
                    >View Details</motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  )
}
