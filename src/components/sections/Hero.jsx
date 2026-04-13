'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' }
  })
}

export default function Hero() {
  return (
    <section style={{
      backgroundColor: '#FDF8F2',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      padding: '80px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background decorative circles */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.07, 0.12, 0.07] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          backgroundColor: '#C8844A',
          top: '-200px',
          right: '-150px',
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.09, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          backgroundColor: '#A0622E',
          bottom: '-100px',
          left: '-100px',
          zIndex: 0,
        }}
      />

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%',
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
      }} className="hero-grid">

        {/* Left — text content */}
        <div>
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#f0e4d6',
              border: '1px solid #d4a882',
              borderRadius: '100px',
              padding: '6px 14px',
              marginBottom: '28px',
            }}
          >
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#C8844A',
              display: 'inline-block',
            }} />
            <span style={{
              fontSize: '13px',
              color: '#A0622E',
              fontWeight: '500',
            }}>
              Built for early-stage startups
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            style={{
              fontSize: 'clamp(36px, 5vw, 58px)',
              fontWeight: '700',
              color: '#3D1F1A',
              lineHeight: '1.15',
              letterSpacing: '-1.5px',
              margin: '0 0 24px',
            }}
          >
            Fix. Build.{' '}
            <span style={{
              color: '#C8844A',
              position: 'relative',
              display: 'inline-block',
            }}>
              Automate.
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '100%',
                  height: '3px',
                  backgroundColor: '#C8844A',
                  borderRadius: '2px',
                  transformOrigin: 'left',
                  display: 'block',
                }}
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            style={{
              fontSize: '18px',
              color: '#6b5a52',
              lineHeight: '1.7',
              margin: '0 0 36px',
              maxWidth: '480px',
            }}
          >
            Your startup deserves better than technical chaos.
            We handle your tech from <b>"Broken Websites"</b> to
            <b>"AI-Powered Workflows"</b> so your <b>"Team Focuses"</b> on <b>"growth."</b>
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}
          >
            <Link href="https://calendly.com/arrautomation001/30min" target="_blank" rel="noopener noreferrer" style={{
              backgroundColor: '#C8844A',
              color: '#FDF8F2',
              padding: '14px 28px',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
            }}
              onMouseEnter={e => {
                e.target.style.backgroundColor = '#A0622E'
                e.target.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.target.style.backgroundColor = '#C8844A'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              Book a Free Call
            </Link>

            <Link href="/services" style={{
              backgroundColor: 'transparent',
              color: '#3D1F1A',
              padding: '14px 28px',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: '600',
              textDecoration: 'none',
              border: '1.5px solid #C8844A',
              display: 'inline-block',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#f0e4d6'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              See Our Services
            </Link>
          </motion.div>

        </div>

        {/* Right — visual card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          style={{ position: 'relative' }}
          className="hero-visual"
        >
          {/* Main card */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #e8ddd4',
            padding: '32px',
            boxShadow: '0 20px 60px rgba(61,31,26,0.08)',
          }}>
            <p style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#C8844A',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              margin: '0 0 20px',
            }}>
              What we handle for you
            </p>

            {[
              { icon: '⚙', label: 'Fix It', desc: 'Bugs, audits, performance', color: '#f0e4d6' },
              { icon: '◻', label: 'Build It', desc: 'Websites, landing pages', color: '#f0e4d6' },
              { icon: '⚡', label: 'Automate It', desc: 'AI workflows, chatbots', color: '#f0e4d6' },
              { icon: '✉', label: 'Market It', desc: 'Email campaigns', color: '#f0e4d6' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '12px 0',
                  borderBottom: i < 3 ? '1px solid #f5ede5' : 'none',
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: item.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ margin: 0, fontWeight: '600', fontSize: '14px', color: '#3D1F1A' }}>
                    {item.label}
                  </p>
                  <p style={{ margin: 0, fontSize: '12px', color: '#6b5a52' }}>
                    {item.desc}
                  </p>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <span style={{
                    fontSize: '11px',
                    backgroundColor: '#f0e4d6',
                    color: '#A0622E',
                    padding: '3px 10px',
                    borderRadius: '100px',
                    fontWeight: '500',
                  }}>
                    Active
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              bottom: '-20px',
              left: '-20px',
              backgroundColor: '#3D1F1A',
              color: '#FDF8F2',
              borderRadius: '14px',
              padding: '12px 18px',
              boxShadow: '0 8px 24px rgba(61,31,26,0.2)',
            }}
          >
            <p style={{ margin: 0, fontSize: '13px', fontWeight: '600' }}>
              Response in 4hrs
            </p>
            <p style={{ margin: 0, fontSize: '11px', opacity: 0.7 }}>
              IST · EST · AEST
            </p>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-visual {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}