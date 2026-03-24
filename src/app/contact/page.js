'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const services = [
  'QA Auditing',
  'Web Development',
  'AI & Automation',
  'Email Marketing',
  'Not sure yet',
]

const budgets = [
  'Under $500',
  '$500 — $1,000',
  '$1,000 — $3,000',
  '$3,000+',
]

const faqs = [
  {
    q: 'How fast do you respond?',
    a: 'Within 4 hours during business hours IST. For urgent projects we are often faster.',
  },
  {
    q: 'Do you work with clients outside India?',
    a: 'Yes — most of our clients are in the US, Australia, Germany and France. We work async and are available across timezones.',
  },
  {
    q: 'What happens on the free call?',
    a: 'We spend 30 minutes understanding your startup and your problem. No pitch, no pressure. You leave with clarity on what you need.',
  },
  {
    q: 'Do you offer custom pricing?',
    a: 'Yes. Our packages are a starting point. If your project is unique we will scope it and give you a fixed custom quote within 48 hours.',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const isValid = formData.name && formData.email && formData.message && formData.service

  return (
    <main style={{ backgroundColor: '#FDF8F2' }}>

      {/* Hero */}
      <section style={{
        backgroundColor: '#3D1F1A',
        padding: '80px 24px 72px',
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
          maxWidth: '700px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
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
            Get in touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: '700',
              color: '#FDF8F2',
              letterSpacing: '-1.5px',
              margin: '0 0 20px',
              lineHeight: '1.15',
            }}
          >
            Let's talk about<br />your startup
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '17px',
              color: 'rgba(253,248,242,0.6)',
              lineHeight: '1.7',
              margin: '0 0 36px',
            }}
          >
            Fill in the form below or book a free 30-minute call.
            We respond within 4 hours — no pitch, just clarity.
          </motion.p>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            {[
              '4hr response time',
              'Free 30min call',
              'No commitment',
              'IN · US · AU · DE · FR',
            ].map(tag => (
              <span key={tag} style={{
                fontSize: '12px',
                color: '#C8844A',
                backgroundColor: 'rgba(200,132,74,0.1)',
                border: '1px solid rgba(200,132,74,0.25)',
                padding: '5px 14px',
                borderRadius: '100px',
                fontWeight: '500',
              }}>
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section style={{
        padding: '72px 24px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '56px',
          alignItems: 'start',
        }} className="contact-grid">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e8ddd4',
                  borderRadius: '20px',
                  padding: '56px 40px',
                  textAlign: 'center',
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    backgroundColor: '#f0e4d6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                    fontSize: '28px',
                  }}
                >
                  ✓
                </motion.div>
                <h2 style={{
                  fontSize: '26px',
                  fontWeight: '700',
                  color: '#3D1F1A',
                  margin: '0 0 12px',
                  letterSpacing: '-0.5px',
                }}>
                  Message received
                </h2>
                <p style={{
                  fontSize: '16px',
                  color: '#6b5a52',
                  lineHeight: '1.7',
                  margin: '0 0 8px',
                }}>
                  Thanks {formData.name.split(' ')[0]}. We will be back
                  within 4 hours.
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#6b5a52',
                  lineHeight: '1.7',
                  margin: '0 0 32px',
                }}>
                  Keep an eye on {formData.email} — we will send
                  you a confirmation shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({
                      name: '', email: '', company: '',
                      service: '', budget: '', message: '',
                    })
                  }}
                  style={{
                    backgroundColor: 'transparent',
                    border: '1.5px solid #C8844A',
                    color: '#3D1F1A',
                    padding: '11px 24px',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e8ddd4',
                borderRadius: '20px',
                padding: '40px',
              }}>
                <h2 style={{
                  fontSize: '22px',
                  fontWeight: '700',
                  color: '#3D1F1A',
                  margin: '0 0 6px',
                  letterSpacing: '-0.3px',
                }}>
                  Tell us about your project
                </h2>
                <p style={{
                  fontSize: '14px',
                  color: '#6b5a52',
                  margin: '0 0 32px',
                }}>
                  Takes 2 minutes. We read every message personally.
                </p>

                <form onSubmit={handleSubmit}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                    marginBottom: '16px',
                  }} className="form-row">

                    {/* Name */}
                    <div>
                      <label style={labelStyle}>
                        Full name <span style={{ color: '#C8844A' }}>*</span>
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Johnson"
                        required
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#C8844A'}
                        onBlur={e => e.target.style.borderColor = '#e8ddd4'}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label style={labelStyle}>
                        Email <span style={{ color: '#C8844A' }}>*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@startup.com"
                        required
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#C8844A'}
                        onBlur={e => e.target.style.borderColor = '#e8ddd4'}
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={labelStyle}>Company / Startup name</label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#C8844A'}
                      onBlur={e => e.target.style.borderColor = '#e8ddd4'}
                    />
                  </div>

                  {/* Service */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={labelStyle}>
                      Which service do you need?{' '}
                      <span style={{ color: '#C8844A' }}>*</span>
                    </label>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginTop: '8px',
                    }}>
                      {services.map(s => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: s })}
                          style={{
                            padding: '8px 16px',
                            borderRadius: '100px',
                            fontSize: '13px',
                            fontWeight: '500',
                            cursor: 'pointer',
                            border: '1.5px solid',
                            borderColor: formData.service === s
                              ? '#C8844A'
                              : '#e8ddd4',
                            backgroundColor: formData.service === s
                              ? '#f0e4d6'
                              : '#ffffff',
                            color: formData.service === s
                              ? '#A0622E'
                              : '#6b5a52',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={labelStyle}>Budget range</label>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginTop: '8px',
                    }}>
                      {budgets.map(b => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          style={{
                            padding: '8px 16px',
                            borderRadius: '100px',
                            fontSize: '13px',
                            fontWeight: '500',
                            cursor: 'pointer',
                            border: '1.5px solid',
                            borderColor: formData.budget === b
                              ? '#C8844A'
                              : '#e8ddd4',
                            backgroundColor: formData.budget === b
                              ? '#f0e4d6'
                              : '#ffffff',
                            color: formData.budget === b
                              ? '#A0622E'
                              : '#6b5a52',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '28px' }}>
                    <label style={labelStyle}>
                      Tell us about your project{' '}
                      <span style={{ color: '#C8844A' }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your startup, what you need help with, and any deadline you have in mind..."
                      required
                      rows={5}
                      style={{
                        ...inputStyle,
                        resize: 'vertical',
                        minHeight: '120px',
                      }}
                      onFocus={e => e.target.style.borderColor = '#C8844A'}
                      onBlur={e => e.target.style.borderColor = '#e8ddd4'}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={!isValid || loading}
                    style={{
                      width: '100%',
                      padding: '14px 24px',
                      borderRadius: '10px',
                      backgroundColor: isValid ? '#C8844A' : '#e8ddd4',
                      color: isValid ? '#FDF8F2' : '#a09088',
                      fontSize: '15px',
                      fontWeight: '600',
                      border: 'none',
                      cursor: isValid ? 'pointer' : 'not-allowed',
                      transition: 'background-color 0.2s ease, transform 0.15s ease',
                    }}
                    onMouseEnter={e => {
                      if (isValid) e.target.style.backgroundColor = '#A0622E'
                    }}
                    onMouseLeave={e => {
                      if (isValid) e.target.style.backgroundColor = '#C8844A'
                    }}
                  >
                    {loading ? 'Sending...' : 'Send message →'}
                  </button>

                  <p style={{
                    fontSize: '12px',
                    color: '#6b5a52',
                    margin: '12px 0 0',
                    textAlign: 'center',
                  }}>
                    We respond within 4 hours. No spam, ever.
                  </p>
                </form>
              </div>
            )}
          </motion.div>

          {/* Right sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* Direct contact */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                backgroundColor: '#3D1F1A',
                borderRadius: '20px',
                padding: '32px',
              }}
            >
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#FDF8F2',
                margin: '0 0 20px',
                letterSpacing: '-0.3px',
              }}>
                Prefer direct contact?
              </h3>
              {[
                {
                  label: 'Email us',
                  value: 'hello@arrautomation.com',
                  href: 'mailto:hello@arrautomation.com',
                  icon: '✉',
                },
                {
                  label: 'LinkedIn',
                  value: 'ARR Automation',
                  href: 'https://linkedin.com',
                  icon: '◈',
                },
                {
                  label: 'Response time',
                  value: 'Within 4 hours',
                  href: null,
                  icon: '◎',
                },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '14px 0',
                  borderBottom: '1px solid rgba(200,132,74,0.12)',
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(200,132,74,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    color: '#C8844A',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{
                      fontSize: '11px',
                      color: 'rgba(253,248,242,0.4)',
                      margin: '0 0 2px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      fontWeight: '600',
                    }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} style={{
                        fontSize: '14px',
                        color: '#C8844A',
                        textDecoration: 'none',
                        fontWeight: '500',
                      }}>
                        {item.value}
                      </a>
                    ) : (
                      <p style={{
                        fontSize: '14px',
                        color: '#FDF8F2',
                        margin: 0,
                        fontWeight: '500',
                      }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Availability */}
              <div style={{
                marginTop: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#4ade80',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                />
                <span style={{
                  fontSize: '13px',
                  color: 'rgba(253,248,242,0.55)',
                }}>
                  Currently available for new projects
                </span>
              </div>
            </motion.div>

            {/* Timezones */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e8ddd4',
                borderRadius: '20px',
                padding: '28px',
              }}
            >
              <h3 style={{
                fontSize: '15px',
                fontWeight: '700',
                color: '#3D1F1A',
                margin: '0 0 16px',
              }}>
                We work your timezone
              </h3>
              {[
                { zone: 'IST', label: 'India', hours: '9am — 10pm' },
                { zone: 'EST', label: 'US East', hours: '9am — 6pm' },
                { zone: 'AEST', label: 'Australia', hours: '9am — 6pm' },
                { zone: 'CET', label: 'Europe', hours: '9am — 6pm' },
              ].map(tz => (
                <div key={tz.zone} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 0',
                  borderBottom: '1px solid #f0e8e0',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      backgroundColor: '#f0e4d6',
                      color: '#A0622E',
                      padding: '2px 8px',
                      borderRadius: '6px',
                    }}>
                      {tz.zone}
                    </span>
                    <span style={{ fontSize: '13px', color: '#3D1F1A' }}>
                      {tz.label}
                    </span>
                  </div>
                  <span style={{ fontSize: '13px', color: '#6b5a52' }}>
                    {tz.hours}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e8ddd4',
                borderRadius: '20px',
                padding: '28px',
              }}
            >
              <h3 style={{
                fontSize: '15px',
                fontWeight: '700',
                color: '#3D1F1A',
                margin: '0 0 16px',
              }}>
                Quick answers
              </h3>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    borderBottom: i < faqs.length - 1
                      ? '1px solid #f0e8e0'
                      : 'none',
                    paddingBottom: '12px',
                    marginBottom: '12px',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '4px 0',
                    }}
                  >
                    <span style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#3D1F1A',
                      lineHeight: '1.4',
                    }}>
                      {faq.q}
                    </span>
                    <span style={{
                      fontSize: '16px',
                      color: '#C8844A',
                      flexShrink: 0,
                      transition: 'transform 0.2s ease',
                      transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)',
                      display: 'inline-block',
                    }}>
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      style={{
                        fontSize: '13px',
                        color: '#6b5a52',
                        lineHeight: '1.6',
                        margin: '8px 0 0',
                      }}
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}

const labelStyle = {
  fontSize: '13px',
  fontWeight: '600',
  color: '#3D1F1A',
  display: 'block',
  marginBottom: '8px',
}

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: '10px',
  border: '1.5px solid #e8ddd4',
  backgroundColor: '#FDF8F2',
  fontSize: '14px',
  color: '#3D1F1A',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s ease',
  fontFamily: 'inherit',
}