'use client'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'

// ── Buttons ──────────────────────────────────────────────
export function BtnGold({ children, onClick, className = '', type = 'button', style }: { children: ReactNode; onClick?: () => void; className?: string; type?: 'button' | 'submit'; style?: React.CSSProperties }) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`px-10 py-4 text-[11px] tracking-[.16em] uppercase font-medium transition-colors ${className}`}
      style={{ background: 'var(--gold)', color: 'var(--bg)', ...style }}
      onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-l)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
    >
      {children}
    </motion.button>
  )
}

export function BtnGhost({ children, onClick, className = '' }: { children: ReactNode; onClick?: () => void; className?: string }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
      whileTap={{ scale: 0.97 }}
      className={`px-10 py-4 text-[11px] tracking-[.16em] uppercase font-medium bg-transparent transition-all ${className}`}
      style={{ border: '1px solid rgba(240,235,225,0.18)', color: 'var(--text)' }}
    >
      {children}
    </motion.button>
  )
}

// ── Section Header ────────────────────────────────────────
export function SectionHeader({ tag, title, center = false, className = '' }: { tag: string; title: ReactNode; center?: boolean; className?: string }) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      <div className={`flex items-center gap-3 mb-5 text-[10px] tracking-[.24em] uppercase ${center ? 'justify-center' : ''}`} style={{ color: 'var(--gold)' }}>
        {!center && <span className="w-6 h-px" style={{ background: 'var(--gold)' }} />}
        {tag}
        {center && <span className="w-6 h-px" style={{ background: 'var(--gold)' }} />}
      </div>
      <h2 className="font-cormorant font-light leading-[1.03]" style={{ fontSize: 'clamp(36px,5.5vw,70px)' }}>
        {title}
      </h2>
    </div>
  )
}

// ── Gold Rule ─────────────────────────────────────────────
export function GoldRule() {
  return <div className="w-10 h-px my-8" style={{ background: 'var(--gold)' }} />
}

// ── Product SVGs ──────────────────────────────────────────
export function ProductSVG({ type, size = 80 }: { type: string; size?: number }) {
  const s = size
  const svgs: Record<string, JSX.Element> = {
    rigid: (
      <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
        <rect x="14" y="24" width="52" height="44" stroke="#C9A84C" strokeWidth="1.2" />
        <path d="M14 24L40 10L66 24" stroke="#C9A84C" strokeWidth="1.2" />
        <line x1="40" y1="10" x2="40" y2="24" stroke="#C9A84C" strokeWidth="1" strokeDasharray="3,3" opacity=".5" />
        <line x1="14" y1="42" x2="66" y2="42" stroke="#C9A84C" strokeWidth=".5" opacity=".3" />
      </svg>
    ),
    carton: (
      <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
        <polygon points="40,8 66,22 66,58 40,72 14,58 14,22" stroke="#C9A84C" strokeWidth="1.2" fill="none" />
        <polygon points="40,22 54,29 54,51 40,58 26,51 26,29" stroke="#C9A84C" strokeWidth=".6" fill="none" opacity=".35" />
      </svg>
    ),
    bag: (
      <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
        <path d="M24 20L56 20L62 32L62 68L18 68L18 32Z" stroke="#C9A84C" strokeWidth="1.2" fill="none" />
        <line x1="30" y1="20" x2="24" y2="10" stroke="#C9A84C" strokeWidth="1.2" />
        <line x1="50" y1="20" x2="56" y2="10" stroke="#C9A84C" strokeWidth="1.2" />
        <line x1="24" y1="10" x2="56" y2="10" stroke="#C9A84C" strokeWidth="1.2" />
        <ellipse cx="40" cy="10" rx="8" ry="3" stroke="#C9A84C" strokeWidth=".6" opacity=".4" />
      </svg>
    ),
    label: (
      <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
        <rect x="14" y="14" width="52" height="36" stroke="#C9A84C" strokeWidth="1.2" rx="2" />
        <rect x="22" y="50" width="36" height="16" stroke="#C9A84C" strokeWidth="1.2" />
        <rect x="22" y="22" width="36" height="20" stroke="#C9A84C" strokeWidth=".6" opacity=".35" rx="1" />
      </svg>
    ),
    gift: (
      <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
        <rect x="14" y="14" width="52" height="52" stroke="#C9A84C" strokeWidth="1.2" />
        <line x1="40" y1="14" x2="40" y2="66" stroke="#C9A84C" strokeWidth=".6" opacity=".4" />
        <line x1="14" y1="40" x2="66" y2="40" stroke="#C9A84C" strokeWidth=".6" opacity=".4" />
        <path d="M34 14 Q40 6 46 14" stroke="#C9A84C" strokeWidth="1" fill="none" />
        <path d="M34 14 Q40 22 46 14" stroke="#C9A84C" strokeWidth="1" fill="none" />
      </svg>
    ),
    custom: (
      <svg width={s} height={s} viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="28" stroke="#C9A84C" strokeWidth="1.2" />
        <circle cx="40" cy="40" r="12" stroke="#C9A84C" strokeWidth="1.2" opacity=".5" />
        <line x1="40" y1="12" x2="40" y2="28" stroke="#C9A84C" strokeWidth="1.2" />
        <line x1="40" y1="52" x2="40" y2="68" stroke="#C9A84C" strokeWidth="1.2" />
        <line x1="12" y1="40" x2="28" y2="40" stroke="#C9A84C" strokeWidth="1.2" />
        <line x1="52" y1="40" x2="68" y2="40" stroke="#C9A84C" strokeWidth="1.2" />
      </svg>
    ),
  }
  return svgs[type] || svgs.custom
}

// ── Badge Pill ────────────────────────────────────────────
export function BadgePill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-[10px] tracking-[.2em] uppercase px-4 py-[7px] mb-7"
      style={{ background: 'rgba(201,168,76,.09)', border: '1px solid rgba(201,168,76,.22)', color: 'var(--gold)' }}>
      {children}
    </span>
  )
}

// ── Stars ─────────────────────────────────────────────────
export function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1 mb-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="w-[10px] h-[10px]" style={{ background: 'var(--gold)', clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)' }} />
      ))}
    </div>
  )
}

// ── Form Input ────────────────────────────────────────────
export function FormInput({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] tracking-[.16em] uppercase" style={{ color: 'var(--gold)' }}>{label}</label>
      <input className="form-input" {...props} />
    </div>
  )
}

export function FormTextarea({ label, ...props }: { label: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] tracking-[.16em] uppercase" style={{ color: 'var(--gold)' }}>{label}</label>
      <textarea className="form-input resize-none" {...props} />
    </div>
  )
}

export function FormSelect({ label, children, ...props }: { label: string; children: ReactNode } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] tracking-[.16em] uppercase" style={{ color: 'var(--gold)' }}>{label}</label>
      <select className="form-input" style={{ appearance: 'none' }} {...props}>{children}</select>
    </div>
  )
}

// ── Toast ─────────────────────────────────────────────────
import { useState, createContext, useContext, useCallback } from 'react'

type ToastType = { message: string; type?: 'success' | 'error' } | null
const ToastCtx = createContext<(msg: string, type?: 'success' | 'error') => void>(() => {})

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastType>(null)
  const show = useCallback((message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 4000)
  }, [])
  return (
    <ToastCtx.Provider value={show}>
      {children}
      {toast && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          className="fixed bottom-10 right-10 px-7 py-4 text-[13px] tracking-[.06em] z-[9999] max-w-xs"
          style={{ background: toast.type === 'error' ? '#E04B4B' : 'var(--gold)', color: toast.type === 'error' ? 'white' : 'var(--bg)' }}
        >
          {toast.message}
        </motion.div>
      )}
    </ToastCtx.Provider>
  )
}

export const useToast = () => useContext(ToastCtx)
