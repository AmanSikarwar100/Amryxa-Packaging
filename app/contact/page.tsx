'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeUp, SlideIn } from '@/components/ui/Motion'
import { BtnGold, FormInput, FormTextarea, FormSelect } from '@/components/ui/Components'

function Toast({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }}
      className="fixed bottom-10 right-10 z-[9999] px-7 py-4 text-[13px] tracking-[.06em] max-w-xs"
      style={{ background: type === 'error' ? '#E04B4B' : 'var(--gold)', color: type === 'error' ? 'white' : 'var(--bg)' }}
    >
      {message}
    </motion.div>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState({ fname: '', lname: '', email: '', company: '', phone: '', ptype: '', qty: '500 – 1,000 units', brief: '' })
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
  const [loading, setLoading] = useState(false)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 4000)
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.fname.trim()) return showToast('Please enter your name.', 'error')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return showToast('Please enter a valid email address.', 'error')
    if (!form.ptype) return showToast('Please select a packaging type.', 'error')
    setLoading(true)
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result?.error || 'Failed to submit the form.')
      showToast('✓ Enquiry sent! We’ll reply within 4 hours.')
      setForm({ fname: '', lname: '', email: '', company: '', phone: '', ptype: '', qty: '500 – 1,000 units', brief: '' })
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Submission failed. Please try again later.', 'error')
    } finally {
      setLoading(false)
    }
  }

  const contacts = [
    { icon: '✉', label: 'Email', value: 'hello@amryxa.com\nsales@amryxa.com' },
    { icon: '✆', label: 'Phone', value: '+91 98765 43210\n+91 11 4567 8900' },
    { icon: '◎', label: 'Offices', value: 'Mumbai (HQ) · Delhi · Bangalore\nFactories in Bhiwandi & Noida' },
    { icon: '⊙', label: 'Hours', value: 'Monday – Saturday\n9:00 AM – 7:00 PM IST' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-20 px-16 max-md:px-6" style={{ background: 'var(--bg2)' }}>
        <div className="absolute inset-0 section-grid-bg" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%,rgba(201,168,76,.05) 0%,transparent 60%)' }} />
        <div className="relative z-10">
          <FadeUp>
            <div className="flex items-center gap-3 mb-5 text-[10px] tracking-[.24em] uppercase" style={{ color: 'var(--gold)' }}>
              <span className="w-5 h-px" style={{ background: 'var(--gold)' }} />Get In Touch
            </div>
            <h1 className="font-cormorant font-light leading-[.96]" style={{ fontSize: 'clamp(44px,7vw,90px)' }}>
              Let's create<br />something <em className="italic" style={{ color: 'var(--gold)' }}>exceptional</em>
            </h1>
            <p className="text-[15px] leading-[1.75] max-w-[520px] mt-6" style={{ color: 'var(--muted)' }}>
              Tell us about your project. Our packaging consultants will reach out within 4 business hours with a tailored proposal and transparent pricing.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 px-16 max-md:px-6" style={{ background: 'var(--bg)' }}>
        <div className="grid grid-cols-2 gap-24 max-lg:grid-cols-1">

          {/* Left — info */}
          <SlideIn direction="left">
            <div className="flex items-center gap-3 mb-4 text-[10px] tracking-[.24em] uppercase" style={{ color: 'var(--gold)' }}>
              <span className="w-5 h-px" style={{ background: 'var(--gold)' }} />Contact Information
            </div>
            <h3 className="font-cormorant font-light text-[30px] leading-[1.2] mb-5">
              We're here to help<br />you succeed
            </h3>
            <p className="text-sm leading-[1.8] mb-10" style={{ color: 'var(--muted)' }}>
              Every enquiry is handled personally by our packaging consultants — no bots, no templates, no auto-replies. Just real people who understand packaging.
            </p>

            <div className="flex flex-col gap-7">
              {contacts.map(c => (
                <div key={c.label} className="flex gap-5 items-start">
                  <div className="w-[42px] h-[42px] flex items-center justify-center flex-shrink-0 text-[15px]"
                    style={{ border: '1px solid var(--border)', color: 'var(--gold)' }}>{c.icon}</div>
                  <div>
                    <div className="text-[10px] tracking-[.14em] uppercase mb-1.5" style={{ color: 'var(--gold)' }}>{c.label}</div>
                    <div className="text-sm leading-[1.5] whitespace-pre-line" style={{ color: 'var(--muted)' }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Response card */}
            <div className="mt-10 p-7" style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
              <div className="text-[10px] tracking-[.14em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Average Response Time</div>
              <div className="font-cormorant font-light text-[30px] mb-1">Within 4 Hours</div>
              <div className="text-xs" style={{ color: 'var(--muted)' }}>We reply to every enquiry personally — no bots, no templates.</div>
            </div>

            {/* Map placeholder */}
            <div className="mt-6 h-[180px] flex items-center justify-center relative overflow-hidden"
              style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
              <div className="absolute inset-0 section-grid-bg opacity-50" />
              <div className="relative z-10 text-center">
                <div className="text-[28px] mb-2" style={{ color: 'var(--gold)' }}>◎</div>
                <div className="text-[12px] tracking-[.12em] uppercase" style={{ color: 'var(--muted)' }}>Mumbai · Delhi · Bangalore</div>
              </div>
            </div>
          </SlideIn>

          {/* Right — form */}
          <SlideIn direction="right" delay={0.15}>
            <div className="flex items-center gap-3 mb-4 text-[10px] tracking-[.24em] uppercase" style={{ color: 'var(--gold)' }}>
              <span className="w-5 h-px" style={{ background: 'var(--gold)' }} />Send an Enquiry
            </div>
            <form onSubmit={submit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                <FormInput label="First Name" value={form.fname} onChange={set('fname')} placeholder="Rahul" />
                <FormInput label="Last Name" value={form.lname} onChange={set('lname')} placeholder="Sharma" />
              </div>
              <FormInput label="Business Email" type="email" value={form.email} onChange={set('email')} placeholder="rahul@yourbrand.com" />
              <FormInput label="Company / Brand Name" value={form.company} onChange={set('company')} placeholder="Your Company" />
              <FormInput label="Phone Number" type="tel" value={form.phone} onChange={set('phone')} placeholder="+91 98765 43210" />
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                <FormSelect label="Packaging Type" value={form.ptype} onChange={set('ptype')}>
                  <option value="">Select category</option>
                  {['Rigid Boxes','Folding Cartons','Carry Bags','Labels & Stickers','Gift Packaging','Custom Solution'].map(o => <option key={o}>{o}</option>)}
                </FormSelect>
                <FormSelect label="Order Quantity" value={form.qty} onChange={set('qty')}>
                  {['500 – 1,000 units','1,000 – 5,000 units','5,000 – 25,000 units','25,000+ units'].map(o => <option key={o}>{o}</option>)}
                </FormSelect>
              </div>
              <FormTextarea label="Project Brief" value={form.brief} onChange={set('brief')} rows={5}
                placeholder="Describe your packaging vision, product dimensions, timeline, and any reference brands or inspirations..." />

              <motion.button type="submit" disabled={loading}
                whileHover={{ backgroundColor: 'var(--gold-l)' }} whileTap={{ scale: 0.98 }}
                className="w-full py-[18px] text-[11px] tracking-[.18em] uppercase transition-colors disabled:opacity-60"
                style={{ background: 'var(--gold)', color: 'var(--bg)', border: 'none', cursor: loading ? 'not-allowed' : 'pointer' }}>
                {loading ? 'Sending...' : 'Send Enquiry →'}
              </motion.button>
              <p className="text-center text-[11px]" style={{ color: 'var(--muted2)' }}>Free consultation · No commitment · Personal reply within 4 hours</p>
            </form>
          </SlideIn>
        </div>
      </section>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </>
  )
}
