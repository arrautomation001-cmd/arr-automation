'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const USD_TO_INR = 83

const plans = [
  {
    service: 'QA Auditing',
    description: 'Find and fix what is quietly killing your website.',
    tiers: [
      {
        name: 'Basic',
        usd: 199,
        deliverables: [
          'Full UI bug report',
          'Broken link scan',
          'Mobile responsiveness check',
          'Delivered in 72 hours',
          'PDF report included',
        ],
        cta: 'Get Basic Audit',
        highlighted: false,
      },
      {
        name: 'Pro',
        usd: 399,
        deliverables: [
          'Everything in Basic',
          'SEO error audit',
          'Page speed analysis',
          'Competitor comparison',
          'Fix recommendations',
          'Delivered in 48 hours',
        ],
        cta: 'Get Pro Audit',
        highlighted: true,
      },
      {
        name: 'Enterprise',
        usd: 799,
        deliverables: [
          'Everything in Pro',
          'Full code review',
          'Security vulnerability scan',
          'Database query audit',
          'Live walkthrough call',
          'Priority 24hr delivery',
        ],
        cta: 'Get Enterprise Audit',
        highlighted: false,
      },
    ],
  },
  {
    service: 'Web Development',
    description: 'Clean, fast, conversion-focused websites built for growth.',
    tiers: [
      {
        name: 'Basic',
        usd: 499,
        deliverables: [
          'Up to 5 pages',
          'Mobile responsive',
          'Contact form',
          'Basic SEO setup',
          '7 day delivery',
          '1 round of revisions',
        ],
        cta: 'Start Basic',
        highlighted: false,
      },
      {
        name: 'Pro',
        usd: 999,
        deliverables: [
          'Up to 10 pages',
          'Custom animations',
          'Blog setup',
          'Full SEO optimization',
          'Google Analytics setup',
          '14 day delivery',
          '3 rounds of revisions',
        ],
        cta: 'Start Pro',
        highlighted: true,
      },
      {
        name: 'Enterprise',
        usd: 2499,
        deliverables: [
          'Unlimited pages',
          'Custom web application',
          'Backend + database',
          'Admin dashboard',
          'Payment integration',
          'Priority support',
          '30 day delivery',
        ],
        cta: 'Start Enterprise',
        highlighted: false,
      },
    ],
  },
  {
    service: 'AI & Automation',
    description: 'Stop doing manually what AI can handle in seconds.',
    tiers: [
      {
        name: 'Basic',
        usd: 299,
        deliverables: [
          'AI chatbot setup',
          'Website integration',
          'FAQ training',
          'Lead capture flow',
          '5 day delivery',
          '1 week support',
        ],
        cta: 'Start Basic',
        highlighted: false,
      },
      {
        name: 'Pro',
        usd: 699,
        deliverables: [
          'Everything in Basic',
          'Custom AI personality',
          'CRM integration',
          'Email automation',
          'Workflow setup',
          '2 weeks support',
        ],
        cta: 'Start Pro',
        highlighted: true,
      },
      {
        name: 'Enterprise',
        usd: 1499,
        deliverables: [
          'Everything in Pro',
          'Full AI workflow audit',
          'Multi-platform automation',
          'Custom AI model training',
          'Slack + Notion integration',
          '1 month support',
        ],
        cta: 'Start Enterprise',
        highlighted: false,
      },
    ],
  },
  {
    service: 'Email Marketing',
    description: 'Turn your email list into a revenue machine.',
    tiers: [
      {
        name: 'Basic',
        usd: 249,
        deliverables: [
          'Email platform setup',
          '3 email templates',
          'Welcome sequence',
          'List segmentation',
          '5 day delivery',
        ],
        cta: 'Start Basic',
        highlighted: false,
      },
      {
        name: 'Pro',
        usd: 549,
        deliverables: [
          'Everything in Basic',
          '7 email templates',
          'Full nurture sequence',
          'A/B testing setup',
          'Analytics dashboard',
          'Monthly performance report',
        ],
        cta: 'Start Pro',
        highlighted: true,
      },
      {
        name: 'Enterprise',
        usd: 1199,
        deliverables: [
          'Everything in Pro',
          'Unlimited templates',
          'Full campaign management',
          'Copywriting included',
          'Weekly reporting',
          'Dedicated account manager',
        ],
        cta: 'Start Enterprise',
        highlighted: false,
      },
    ],
  },
]

export default function PricingPage() {
  const [currency, setCurrency] = useState('USD')
  const [activeService, setActiveService] = useState(0)

  const formatPrice = (usd) => {
    if (currency === 'USD') return `$${usd.toLocaleString()}`
    return `₹${(usd * USD_TO_INR).toLocaleString()}`
  }

  const activePlan = plans[activeService]

  return (
    <main style={{ backgroundColor: '#FDF8F2', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{
        backgroundColor: '#3D1F1A',
        padding: '80px 24px 64px',
        textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span style={{
            fontSize: '13px',
            fontWeight: '600',
            color: '#C8844A',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '16px',
          }}>
            Transparent pricing
          </span>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 54px)',
            fontWeight: '700',
            color: '#FDF8F2',
            letterSpacing: '-1.5px',
            margin: '0 0 20px',
            lineHeight: '1.15',
          }}>
            No surprises.<br />No hidden fees.
          </h1>
          <p style={{
            fontSize: '17px',
            color: 'rgba(253,248,242,0.6)',
            maxWidth: '460px',
            margin: '0 auto 36px',
            lineHeight: '1.7',
          }}>
            Fixed packages with everything included.
            Pick your service, pick your tier, let's get started.
          </p>

          {/* Currency toggle */}
          <div style={{
            display: 'inline-flex',
            backgroundColor: 'rgba(253,248,242,0.08)',
            border: '1px solid rgba(200,132,74,0.2)',
            borderRadius: '100px',
            padding: '4px',
            gap: '4px',
          }}>
            {['USD', 'INR'].map(c => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                style={{
                  padding: '8px 24px',
                  borderRadius: '100px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'all 0.2s ease',
                  backgroundColor: currency === c ? '#C8844A' : 'transparent',
                  color: currency === c ? '#FDF8F2' : 'rgba(253,248,242,0.5)',
                }}
              >
                {c === 'USD' ? '$ USD' : '₹ INR'}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Service tabs */}
      <div style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e8ddd4',
        padding: '0 24px',
        position: 'sticky',
        top: '68px',
        zIndex: 40,
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          gap: '0',
          overflowX: 'auto',
        }}>
          {plans.map((plan, i) => (
            <button
              key={plan.service}
              onClick={() => setActiveService(i)}
              style={{
                padding: '18px 24px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                border: 'none',
                borderBottom: activeService === i
                  ? '2px solid #C8844A'
                  : '2px solid transparent',
                backgroundColor: 'transparent',
                color: activeService === i ? '#C8844A' : '#6b5a52',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
              }}
            >
              {plan.service}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing cards */}
      <section style={{ padding: '64px 24px', maxWidth: '1100px', margin: '0 auto' }}>

        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#3D1F1A',
              margin: '0 0 8px',
              letterSpacing: '-0.5px',
            }}>
              {activePlan.service}
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#6b5a52',
              margin: 0,
            }}>
              {activePlan.description}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }} className="pricing-grid">
            {activePlan.tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{
                  backgroundColor: tier.highlighted ? '#3D1F1A' : '#ffffff',
                  border: tier.highlighted
                    ? '2px solid #C8844A'
                    : '1px solid #e8ddd4',
                  borderRadius: '20px',
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(61,31,26,0.12)' }}
              >
                {/* Popular badge */}
                {tier.highlighted && (
                  <div style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#C8844A',
                    color: '#FDF8F2',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '4px 16px',
                    borderRadius: '100px',
                    whiteSpace: 'nowrap',
                  }}>
                    Most Popular
                  </div>
                )}

                {/* Tier name */}
                <span style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  color: '#C8844A',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  display: 'block',
                }}>
                  {tier.name}
                </span>

                {/* Price */}
                <div style={{ marginBottom: '8px' }}>
                  <span style={{
                    fontSize: '42px',
                    fontWeight: '700',
                    color: tier.highlighted ? '#FDF8F2' : '#3D1F1A',
                    letterSpacing: '-1px',
                    lineHeight: '1',
                  }}>
                    {formatPrice(tier.usd)}
                  </span>
                </div>

                {/* Secondary currency */}
                <p style={{
                  fontSize: '13px',
                  color: tier.highlighted
                    ? 'rgba(253,248,242,0.45)'
                    : '#6b5a52',
                  margin: '0 0 28px',
                }}>
                  {currency === 'USD'
                    ? `≈ ₹${(tier.usd * USD_TO_INR).toLocaleString()}`
                    : `≈ $${tier.usd.toLocaleString()}`}
                </p>

                {/* Divider */}
                <div style={{
                  height: '1px',
                  backgroundColor: tier.highlighted
                    ? 'rgba(200,132,74,0.2)'
                    : '#f0e8e0',
                  marginBottom: '24px',
                }} />

                {/* Deliverables */}
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  flex: 1,
                }}>
                  {tier.deliverables.map(d => (
                    <li key={d} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontSize: '14px',
                      color: tier.highlighted
                        ? 'rgba(253,248,242,0.8)'
                        : '#3D1F1A',
                    }}>
                      <span style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        backgroundColor: tier.highlighted
                          ? 'rgba(200,132,74,0.2)'
                          : '#f0e4d6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontSize: '10px',
                        color: '#C8844A',
                        fontWeight: '700',
                        marginTop: '1px',
                      }}>
                        ✓
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/contact" style={{
                  display: 'block',
                  textAlign: 'center',
                  backgroundColor: tier.highlighted ? '#C8844A' : '#3D1F1A',
                  color: '#FDF8F2',
                  padding: '13px 20px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s ease',
                }}
                  onMouseEnter={e => e.target.style.backgroundColor = '#A0622E'}
                  onMouseLeave={e => e.target.style.backgroundColor = tier.highlighted ? '#C8844A' : '#3D1F1A'}
                >
                  {tier.cta} →
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ strip */}
      <section style={{
        backgroundColor: '#ffffff',
        padding: '64px 24px',
        borderTop: '1px solid #e8ddd4',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '26px',
            fontWeight: '700',
            color: '#3D1F1A',
            margin: '0 0 12px',
            letterSpacing: '-0.5px',
          }}>
            Not sure which plan fits?
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#6b5a52',
            margin: '0 0 32px',
            lineHeight: '1.7',
          }}>
            Book a free 30-minute call. We will look at your startup,
            understand exactly what you need, and recommend the right plan —
            or build you a custom one.
          </p>
          <Link href="/contact" style={{
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
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}