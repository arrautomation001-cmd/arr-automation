'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Free discovery call',
    description:
      'We start with a 30-minute call — no pitch, no pressure. Just us understanding your startup, your tech problems, and what you actually need.',
    duration: '30 minutes',
    icon: '◎',
  },
  {
    number: '02',
    title: 'Audit & scope',
    description:
      'Within 48 hours we send you a clear breakdown — what needs fixing, what needs building, timeline, and exact cost. No surprises.',
    duration: '48 hours',
    icon: '◈',
  },
  {
    number: '03',
    title: 'We build & deliver',
    description:
      'You approve, we execute. You get regular updates via Slack or email. No ghosting, no delays without communication.',
    duration: 'Agreed timeline',
    icon: '◇',
  },
  {
    number: '04',
    title: 'Handover & support',
    description:
      'Full handover with documentation. Plus 2 weeks of free support after delivery — because launching is just the beginning.',
    duration: '2 weeks support',
    icon: '◉',
  },
]

export default function Process() {
  return (
    <section style={{
      backgroundColor: '#3D1F1A',
      padding: '100px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background decoration */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          border: '1px solid rgba(200,132,74,0.1)',
          top: '-200px',
          right: '-100px',
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          border: '1px solid rgba(200,132,74,0.08)',
          bottom: '-100px',
          left: '-50px',
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '72px' }}
        >
          <span style={{
            fontSize: '13px',
            fontWeight: '600',
            color: '#C8844A',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '12px',
          }}>
            How it works
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: '700',
            color: '#FDF8F2',
            letterSpacing: '-1px',
            margin: '0 0 16px',
            lineHeight: '1.2',
          }}>
            From first message<br />to live product
          </h2>
          <p style={{
            fontSize: '17px',
            color: 'rgba(253,248,242,0.6)',
            maxWidth: '440px',
            lineHeight: '1.7',
            margin: 0,
          }}>
            A simple, transparent process — so you always know
            what's happening and what comes next.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          position: 'relative',
        }} className="process-grid">

          {/* Connecting line */}
          <div style={{
            position: 'absolute',
            top: '36px',
            left: '10%',
            width: '80%',
            height: '1px',
            backgroundColor: 'rgba(200,132,74,0.2)',
            zIndex: 0,
          }} className="connector-line" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{
                position: 'relative',
                zIndex: 1,
              }}
            >
              {/* Circle icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(200,132,74,0.12)',
                  border: '1px solid rgba(200,132,74,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  fontSize: '24px',
                  color: '#C8844A',
                }}
              >
                {step.icon}
              </motion.div>

              {/* Number */}
              <span style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#C8844A',
                letterSpacing: '0.1em',
                display: 'block',
                marginBottom: '10px',
              }}>
                {step.number}
              </span>

              {/* Title */}
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#FDF8F2',
                margin: '0 0 12px',
                lineHeight: '1.3',
              }}>
                {step.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '14px',
                color: 'rgba(253,248,242,0.6)',
                lineHeight: '1.7',
                margin: '0 0 16px',
              }}>
                {step.description}
              </p>

              {/* Duration badge */}
              <span style={{
                fontSize: '12px',
                backgroundColor: 'rgba(200,132,74,0.12)',
                color: '#C8844A',
                border: '1px solid rgba(200,132,74,0.25)',
                padding: '4px 12px',
                borderRadius: '100px',
                fontWeight: '500',
              }}>
                {step.duration}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            marginTop: '72px',
            padding: '40px',
            backgroundColor: 'rgba(200,132,74,0.08)',
            border: '1px solid rgba(200,132,74,0.2)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <h3 style={{
              fontSize: '22px',
              fontWeight: '700',
              color: '#FDF8F2',
              margin: '0 0 8px',
            }}>
              Ready to stop firefighting your tech?
            </h3>
            <p style={{
              fontSize: '15px',
              color: 'rgba(253,248,242,0.6)',
              margin: 0,
            }}>
              Book a free 30-minute call. No pitch, just clarity.
            </p>
          </div>
          <a href="https://calendly.com/arrautomation001/30min" target="_blank" rel="noopener noreferrer" style={{
            backgroundColor: '#C8844A',
            color: '#FDF8F2',
            padding: '14px 28px',
            borderRadius: '10px',
            fontSize: '15px',
            fontWeight: '600',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            transition: 'background-color 0.2s ease, transform 0.2s ease',
            display: 'inline-block',
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
            Book a Free Call →
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .connector-line {
            display: none;
          }
        }
        @media (max-width: 540px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}