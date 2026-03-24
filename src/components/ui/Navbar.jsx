'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: '#FDF8F2',
        borderBottom: '1px solid #e8ddd4',
      }}
    >
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 24px',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <Link href="/" style={{
          fontSize: '20px',
          fontWeight: '700',
          color: '#3D1F1A',
          textDecoration: 'none',
          letterSpacing: '-0.5px',
        }}>
          ARR <span style={{ color: '#C8844A' }}>Automation</span>
        </Link>

        {/* Desktop links */}
        <div style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
        }} className="desktop-nav">
          {['Services', 'Pricing', 'Our Work', 'Blog'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/ /g, '-')}`}
              style={linkStyle}
              onMouseEnter={e => e.target.style.color = '#C8844A'}
              onMouseLeave={e => e.target.style.color = '#6b5a52'}
            >
              {item}
            </Link>
          ))}
          <Link href="/contact" style={{
            backgroundColor: '#C8844A',
            color: '#FDF8F2',
            padding: '10px 22px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'background-color 0.2s ease',
          }}
            onMouseEnter={e => e.target.style.backgroundColor = '#A0622E'}
            onMouseLeave={e => e.target.style.backgroundColor = '#C8844A'}
          >
            Book a Free Call
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          {[0, 1, 2].map(i => (
            <motion.span
              key={i}
              animate={menuOpen ? {
                rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
                y: i === 0 ? 7 : i === 2 ? -7 : 0,
                opacity: i === 1 ? 0 : 1,
              } : { rotate: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              style={{
                width: '24px',
                height: '2px',
                backgroundColor: '#3D1F1A',
                display: 'block',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{
              overflow: 'hidden',
              backgroundColor: '#FDF8F2',
              borderTop: '1px solid #e8ddd4',
            }}
          >
            <div style={{
              padding: '16px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              {['Services', 'Our Work', 'Blog'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  style={linkStyle}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link href="/contact" style={{
                backgroundColor: '#C8844A',
                color: '#FDF8F2',
                padding: '10px 22px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                textDecoration: 'none',
                textAlign: 'center',
              }} onClick={() => setMenuOpen(false)}>
                Book a Free Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}

const linkStyle = {
  fontSize: '14px',
  color: '#6b5a52',
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'color 0.2s ease',
}