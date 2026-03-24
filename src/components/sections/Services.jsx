'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    number: '01',
    title: 'Fix It',
    subtitle: 'QA Auditing & Bug Fixing',
    description:
      'Your website has issues costing you customers. We audit every layer — performance, broken links, UI bugs, SEO errors — and fix them fast.',
    points: ['Full website audit report', 'Bug fixing & cleanup', 'Performance optimization', 'SEO error fixes'],
    cta: 'Get an Audit',
    href: '/services',
  },
  {
    number: '02',
    title: 'Build It',
    subtitle: 'Web Development & Design',
    description:
      'From landing pages to full websites — we build clean, fast, conversion-focused sites that make your startup look like it means business.',
    points: ['Landing pages', 'Full website builds', 'Web app UI', 'Mobile responsive'],
    cta: 'Start a Project',
    href: '/services',
  },
  {
    number: '03',
    title: 'Automate It',
    subtitle: 'AI & Workflow Automation',
    description:
      'Stop doing manually what AI can handle in seconds. We integrate chatbots, automate workflows, and implement AI tools inside your startup.',
    points: ['Custom AI chatbots', 'Workflow automation', 'Email marketing setup', 'AI tool integration'],
    cta: 'Automate My Work',
    href: '/services',
  },
]

export default function Services() {
  return (
    <section style={{
      backgroundColor: '#ffffff',
      padding: '100px 24px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
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
            What we do
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: '700',
            color: '#3D1F1A',
            letterSpacing: '-1px',
            margin: '0 0 16px',
            lineHeight: '1.2',
          }}>
            Three ways we help<br />your startup win
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#6b5a52',
            maxWidth: '480px',
            lineHeight: '1.7',
            margin: 0,
          }}>
            Every service is built around one goal — removing technical
            blockers so your team moves faster.
          </p>
        </motion.div>

        {/* Service cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }} className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              style={{
                backgroundColor: '#FDF8F2',
                borderRadius: '16px',
                border: '1px solid #e8ddd4',
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'default',
                transition: 'box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(61,31,26,0.1)'
                e.currentTarget.style.borderColor = '#C8844A'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = '#e8ddd4'
              }}
            >
              {/* Number */}
              <span style={{
                fontSize: '13px',
                fontWeight: '700',
                color: '#C8844A',
                letterSpacing: '0.08em',
                marginBottom: '20px',
                display: 'block',
              }}>
                {service.number}
              </span>

              {/* Title */}
              <h3 style={{
                fontSize: '26px',
                fontWeight: '700',
                color: '#3D1F1A',
                margin: '0 0 4px',
                letterSpacing: '-0.5px',
              }}>
                {service.title}
              </h3>
              <p style={{
                fontSize: '13px',
                color: '#C8844A',
                fontWeight: '500',
                margin: '0 0 20px',
              }}>
                {service.subtitle}
              </p>

              {/* Description */}
              <p style={{
                fontSize: '15px',
                color: '#6b5a52',
                lineHeight: '1.7',
                margin: '0 0 28px',
                flex: 1,
              }}>
                {service.description}
              </p>

              {/* Points */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}>
                {service.points.map(point => (
                  <li key={point} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '14px',
                    color: '#3D1F1A',
                  }}>
                    <span style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: '#f0e4d6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: '10px',
                      color: '#C8844A',
                      fontWeight: '700',
                    }}>
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link href={service.href} style={{
                display: 'block',
                textAlign: 'center',
                backgroundColor: '#3D1F1A',
                color: '#FDF8F2',
                padding: '12px 20px',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'background-color 0.2s ease',
              }}
                onMouseEnter={e => e.target.style.backgroundColor = '#C8844A'}
                onMouseLeave={e => e.target.style.backgroundColor = '#3D1F1A'}
              >
                {service.cta} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}