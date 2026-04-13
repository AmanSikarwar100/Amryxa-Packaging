'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/process', label: 'Process' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <>
      <motion.nav
        className="relative flex justify-between items-center"
        animate={{ paddingTop: scrolled ? '14px' : '28px', paddingBottom: scrolled ? '14px' : '28px' }}
        transition={{ duration: 0.4 }}
        style={{
          paddingLeft: '64px', paddingRight: '64px',
          background: scrolled ? 'rgba(9,9,10,0.95)' : 'rgba(9,9,10,0.92)',
          backdropFilter: 'blur(28px)',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <Link href="/" className="font-cormorant font-light tracking-[.2em] uppercase text-[25px] transition-opacity hover:opacity-75" style={{ color: 'var(--gold)' }}>
          Amryxa
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-9 items-center list-none">
          {links.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-[11px] tracking-[.16em] uppercase transition-colors group"
                style={{ color: pathname === link.href ? 'var(--gold)' : 'var(--muted)' }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                  style={{ background: 'var(--gold)', width: pathname === link.href ? '100%' : '0' }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/quote"
            className="text-[11px] tracking-[.16em] uppercase px-6 py-[10px] transition-all"
            style={{ border: '1px solid var(--gold)', color: 'var(--gold)' }}
            onMouseEnter={e => { (e.target as HTMLElement).style.background = 'var(--gold)'; (e.target as HTMLElement).style.color = 'var(--bg)' }}
            onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = 'var(--gold)' }}
          >
            Get a Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-[5px] p-1 z-50" onClick={() => setMobileOpen(o => !o)}>
          <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0 }} className="block w-6 h-px" style={{ background: 'var(--text)' }} />
          <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="block w-6 h-px" style={{ background: 'var(--text)' }} />
          <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }} className="block w-6 h-px" style={{ background: 'var(--text)' }} />
        </button>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[998]" style={{ background: 'rgba(0,0,0,0.6)' }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="fixed right-0 top-0 bottom-0 w-72 z-[999] flex flex-col gap-7 pt-20 px-10"
              style={{ background: 'var(--bg2)', borderLeft: '1px solid var(--border)' }}
            >
              {links.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-[.1em] uppercase transition-colors"
                  style={{ color: pathname === link.href ? 'var(--gold)' : 'var(--muted)' }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/quote"
                className="mt-4 text-center text-[11px] tracking-[.16em] uppercase py-4 transition-all"
                style={{ border: '1px solid var(--gold)', color: 'var(--gold)' }}
              >
                Get a Quote
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
