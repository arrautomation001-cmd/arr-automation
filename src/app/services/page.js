'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    number: '01',
    title: 'QA Auditing',
    slug: 'audit',
    tagline: 'Find what is silently killing your website.',
    description:
      'Most startups lose customers because of bugs they never knew existed. Slow load times, broken forms, mobile layout issues, SEO errors — we find every single one and give you a clear fix plan.',
    features: [
      'Full UI and UX bug report',
      'Broken link and 404 scan',
      'Mobile responsiveness audit',
      'Page speed and Core Web Vitals',
      'SEO technical error report',
      'Security vulnerability check',
      'Delivered as PDF + live walkthrough',
    ],
    who: 'Startups with an existing website that is underperforming or losing leads.',
    turnaround: '24 to 72 hours',
    startingAt: 199,
  },
  {
    number: '02',
    title: 'Web Development',
    slug: 'web-development',
    tagline: 'Build a website your startup is proud to share.',
    description:
      'From a single landing page to a full multi-page website — we build fast, clean, SEO-optimised sites that convert visitors into leads. Every pixel is intentional. Every page has a purpose.',
    features: [
      'Custom design — no templates',
      'Next.js for speed and SEO',
      'Mobile first and fully responsive',
      'Contact forms and lead capture',
      'Google Analytics integration',
      'Blog and CMS setup',
      'Hosting and deployment included',
    ],
    who: 'Startups who need a website built from scratch or their current one completely rebuilt.',
    turnaround: '7 to 30 days depending on scope',
    startingAt: 499,
  },
  {
    number: '03',
    title: 'AI & Workflow Automation',
    slug: 'automation',
    tagline: 'Stop doing manually what AI can handle in seconds.',
    description:
      'We identify where your team is wasting time and replace that with smart automation. Custom AI chatbots, automated email sequences, workflow tools — all integrated directly into how your startup already works.',
    features: [
      'Custom AI chatbot for your website',
      'Lead capture and qualification bot',
      'Email workflow automation',
      'Slack and Notion integrations',
      'CRM automation setup',
      'AI tool implementation and training',
      'Ongoing support and optimisation',
    ],
    who: 'Startups drowning in repetitive tasks and manual processes that slow down the team.',
    turnaround: '5 to 14 days',
    startingAt: 299,
  },
  {
    number: '04',
    title: 'Email Marketing',
    slug: 'email-marketing',
    tagline: 'Turn your email list into a consistent revenue stream.',
    description:
      'Email is still the highest ROI marketing channel — but only when done right. We set up your platform, design your templates, write your sequences, and build the automation that keeps leads warm without you lifting a finger.',
    features: [
      'Email platform setup and migration',
      'Custom branded templates',
      'Welcome and onboarding sequences',
      'Lead nurture automation',
      'List segmentation strategy',
      'A/B testing setup',
      'Monthly analytics reporting',
    ],
    who: 'Startups with a growing audience who are not consistently converting through email.',
    turnaround: '5 to 10 days',
    startingAt: 249,
  },
]

export default function ServicesPage() {
  return (
    <main style={{ backgroundColor: '#FDF8F2' }}>

      {/* Hero */}
      <section style={{
        backgroundColor: '#3D1F1A',
        padding: '90px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 7, repeat: Infinity }}
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            backgroundColor: '#C8844A',
            top: '-200px',
            right: '-100px',
          }}
        />
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: '13px',
              fontWeight: '600',
              color: '#C8844A',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            What we offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(32px, 5vw, 54px)',
              fontWeight: '700',
              color: '#FDF8F2',
              letterSpacing: '-1.5px',
              margin: '0 0 20px',
              lineHeight: '1.15',
            }}
          >
            Every service your<br />startup actually needs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '17px',
              color: 'rgba(253,248,242,0.6)',
              maxWidth: '500px',
              lineHeight: '1.7',
              margin: '0 0 36px',
            }}
          >
            Four focused services. Each one built to remove a specific
            technical blocker that is slowing your startup down.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}
          >
            <Link href="/pricing" style={{
              backgroundColor: '#C8844A',
              color: '#FDF8F2',
              padding: '13px 28px',
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
              See Pricing →
            </Link>
            <Link href="https://calendly.com/arrautomation001/30min" target="_blank" rel="noopener noreferrer" style={{
              backgroundColor: 'transparent',
              color: '#FDF8F2',
              padding: '13px 28px',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: '600',
              textDecoration: 'none',
              border: '1.5px solid rgba(200,132,74,0.4)',
              display: 'inline-block',
              transition: 'border-color 0.2s ease, transform 0.2s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#C8844A'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(200,132,74,0.4)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Book a Free Call
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        {services.map((service, i) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'start',
              paddingBottom: '80px',
              marginBottom: '80px',
              borderBottom: i < services.length - 1
                ? '1px solid #e8ddd4'
                : 'none',
            }}
            className="service-row"
          >
            {/* Left */}
            <div style={{
              order: i % 2 === 0 ? 0 : 1,
            }} className="service-left">
              <span style={{
                fontSize: '13px',
                fontWeight: '700',
                color: '#C8844A',
                letterSpacing: '0.1em',
                display: 'block',
                marginBottom: '16px',
              }}>
                {service.number}
              </span>
              <h2 style={{
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                fontWeight: '700',
                color: '#3D1F1A',
                letterSpacing: '-0.8px',
                margin: '0 0 10px',
                lineHeight: '1.2',
              }}>
                {service.title}
              </h2>
              <p style={{
                fontSize: '16px',
                color: '#C8844A',
                fontWeight: '500',
                margin: '0 0 20px',
              }}>
                {service.tagline}
              </p>
              <p style={{
                fontSize: '16px',
                color: '#6b5a52',
                lineHeight: '1.8',
                margin: '0 0 32px',
              }}>
                {service.description}
              </p>

              {/* Meta info */}
              <div style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                marginBottom: '32px',
              }}>
                <div style={{
                  backgroundColor: '#f0e4d6',
                  borderRadius: '10px',
                  padding: '12px 16px',
                }}>
                  <p style={{
                    fontSize: '11px',
                    color: '#A0622E',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    margin: '0 0 4px',
                  }}>
                    Turnaround
                  </p>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#3D1F1A',
                    margin: 0,
                  }}>
                    {service.turnaround}
                  </p>
                </div>
                <div style={{
                  backgroundColor: '#f0e4d6',
                  borderRadius: '10px',
                  padding: '12px 16px',
                }}>
                  <p style={{
                    fontSize: '11px',
                    color: '#A0622E',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    margin: '0 0 4px',
                  }}>
                    Starting at
                  </p>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#3D1F1A',
                    margin: 0,
                  }}>
                    ${service.startingAt.toLocaleString()}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/pricing" style={{
                  backgroundColor: '#C8844A',
                  color: '#FDF8F2',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'background-color 0.2s ease',
                }}
                  onMouseEnter={e => e.target.style.backgroundColor = '#A0622E'}
                  onMouseLeave={e => e.target.style.backgroundColor = '#C8844A'}
                >
                  See Pricing →
                </Link>
                <Link href="https://calendly.com/arrautomation001/30min" target="_blank" rel="noopener noreferrer" style={{
                  backgroundColor: 'transparent',
                  color: '#3D1F1A',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  border: '1.5px solid #C8844A',
                  display: 'inline-block',
                  transition: 'background-color 0.2s ease',
                }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f0e4d6'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  Book a Call
                </Link>
              </div>
            </div>

            {/* Right — features card */}
            <div style={{
              order: i % 2 === 0 ? 1 : 0,
            }} className="service-right">
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e8ddd4',
                borderRadius: '20px',
                padding: '32px',
              }}>
                <p style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  color: '#C8844A',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  margin: '0 0 20px',
                }}>
                  What is included
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}>
                  {service.features.map(f => (
                    <li key={f} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontSize: '15px',
                      color: '#3D1F1A',
                    }}>
                      <span style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#f0e4d6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontSize: '10px',
                        color: '#C8844A',
                        fontWeight: '700',
                        marginTop: '2px',
                      }}>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Who is this for */}
                <div style={{
                  backgroundColor: '#FDF8F2',
                  borderRadius: '12px',
                  padding: '16px',
                  borderLeft: '3px solid #C8844A',
                }}>
                  <p style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#C8844A',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    margin: '0 0 6px',
                  }}>
                    Who this is for
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b5a52',
                    lineHeight: '1.6',
                    margin: 0,
                  }}>
                    {service.who}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section style={{
        backgroundColor: '#3D1F1A',
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '560px', margin: '0 auto' }}
        >
          <h2 style={{
            fontSize: 'clamp(26px, 4vw, 40px)',
            fontWeight: '700',
            color: '#FDF8F2',
            letterSpacing: '-1px',
            margin: '0 0 16px',
          }}>
            Not sure where to start?
          </h2>
          <p style={{
            fontSize: '16px',
            color: 'rgba(253,248,242,0.6)',
            lineHeight: '1.7',
            margin: '0 0 36px',
          }}>
            Book a free 30-minute call. We will look at your startup
            and tell you exactly which service you need first.
          </p>
          <Link href="https://calendly.com/arrautomation001/30min" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block',
            backgroundColor: '#C8844A',
            color: '#FDF8F2',
            padding: '14px 32px',
            borderRadius: '10px',
            fontSize: '15px',
            fontWeight: '600',
            textDecoration: 'none',
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
            Book a Free Call →
          </Link>
        </motion.div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .service-row {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .service-left {
            order: 0 !important;
          }
          .service-right {
            order: 1 !important;
          }
        }
      `}</style>
    </main>
  )
}