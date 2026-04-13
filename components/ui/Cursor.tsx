'use client'
import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const curRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState(false)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const raf = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (curRef.current) {
        curRef.current.style.left = e.clientX + 'px'
        curRef.current.style.top = e.clientY + 'px'
      }
    }
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top = ring.current.y + 'px'
      }
      raf.current = requestAnimationFrame(animate)
    }
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.matches('a,button,input,textarea,select,[data-cursor]')) setExpanded(true)
    }
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.matches('a,button,input,textarea,select,[data-cursor]')) setExpanded(false)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mouseout', onOut)
    raf.current = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={curRef} className={`cursor ${expanded ? 'expanded' : ''}`} />
      <div ref={ringRef} className={`cursor-ring ${expanded ? 'expanded' : ''}`} />
    </>
  )
}
