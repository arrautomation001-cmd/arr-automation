'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const links = {
  Services: [
    { label: 'QA Auditing', href: '/services/audit' },
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'AI Automation', href: '/services/automation' },
    { label: 'Email Marketing', href: '/services/email-marketing' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ],
  Connect: [
    { label: 'Book a Free Call', href: 'https://calendly.com/arrautomation001/30min' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Twitter / X', href: 'https://twitter.com' },
    { label: 'hello@arrautomation.com', href: 'mailto:hello@arrautomation.com' },
  ],
}

const markets = ['India', 'United States', 'Australia', 'Germany', 'France']

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#2a1410',
      borderTop: '1px solid rgba(200,132,74,0.15)',
      padding: '80px 24px 32px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
          gap: '48px',
          marginBottom: '64px',
        }} className="footer-grid">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" style={{
              fontSize: '22px',
              fontWeight: '700',
              color: '#FDF8F2',
              textDecoration: 'none',
              letterSpacing: '-0.5px',
              display: 'block',
              marginBottom: '16px',
            }}>
              ARR <span style={{ color: '#C8844A' }}>Automation</span>
            </Link>
            <p style={{
              fontSize: '14px',
              color: 'rgba(253,248,242,0.5)',
              lineHeight: '1.7',
              margin: '0 0 24px',
              maxWidth: '260px',
            }}>
              Helping early-stage startups fix, build, and automate
              their tech — so they focus on growth.
            </p>

            {/* Market tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {markets.map(m => (
                <span key={m} style={{
                  fontSize: '11px',
                  color: '#C8844A',
                  backgroundColor: 'rgba(200,132,74,0.1)',
                  border: '1px solid rgba(200,132,74,0.2)',
                  padding: '3px 10px',
                  borderRadius: '100px',
                  fontWeight: '500',
                }}>
                  {m}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#C8844A',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                margin: '0 0 20px',
              }}>
                {title}
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                {items.map(item => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      target={item.label === 'Book a Free Call' ? '_blank' : undefined}
                      rel={item.label === 'Book a Free Call' ? 'noopener noreferrer' : undefined}
                      style={{
                        fontSize: '14px',
                        color: 'rgba(253,248,242,0.55)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={e => e.target.style.color = '#C8844A'}
                      onMouseLeave={e => e.target.style.color = 'rgba(253,248,242,0.55)'}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          backgroundColor: 'rgba(200,132,74,0.12)',
          marginBottom: '32px',
        }} />

        {/* Bottom row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{
            fontSize: '13px',
            color: 'rgba(253,248,242,0.35)',
            margin: 0,
          }}>
            © {new Date().getFullYear()} ARR Automation. All rights reserved.
          </p>

          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                style={{
                  fontSize: '13px',
                  color: 'rgba(253,248,242,0.35)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => e.target.style.color = '#C8844A'}
                onMouseLeave={e => e.target.style.color = 'rgba(253,248,242,0.35)'}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Availability dot */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#4ade80',
                display: 'inline-block',
              }}
            />
            <span style={{
              fontSize: '13px',
              color: 'rgba(253,248,242,0.45)',
            }}>
              Available for new projects
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}