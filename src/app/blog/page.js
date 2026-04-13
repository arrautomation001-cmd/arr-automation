'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const posts = []

const categories = [
  'All',
  'AI & Automation',
  'Web Development',
  'QA & Testing',
  'Email Marketing',
  'Startup Growth',
]

const comingSoonTopics = [
  {
    icon: '⚡',
    category: 'AI & Automation',
    title: '5 workflows every early-stage startup should automate in 2025',
    description:
      'The repetitive tasks quietly draining your team every single day — and the exact AI tools that eliminate them.',
    readTime: '6 min read',
  },
  {
    icon: '◎',
    category: 'QA & Testing',
    title: 'Why your website is losing customers and you have no idea',
    description:
      'The most common silent bugs we find in startup websites — and how each one is costing you real money.',
    readTime: '5 min read',
  },
  {
    icon: '◇',
    category: 'Web Development',
    title: 'Next.js vs plain React for your startup website — the honest answer',
    description:
      'Not a feature comparison. A practical guide for founders who just want to make the right call fast.',
    readTime: '7 min read',
  },
  {
    icon: '✉',
    category: 'Email Marketing',
    title: 'The 3-email welcome sequence that converts cold leads into paying clients',
    description:
      'Exactly what to say, when to say it, and how to set it up in under a day — with templates included.',
    readTime: '8 min read',
  },
  {
    icon: '◈',
    category: 'Startup Growth',
    title: 'How to look like a $1M startup on a $5K budget',
    description:
      'The tech stack, tools, and design decisions that make early-stage startups look enterprise-level.',
    readTime: '6 min read',
  },
  {
    icon: '◉',
    category: 'AI & Automation',
    title: 'Building a custom AI chatbot for your startup — what nobody tells you',
    description:
      'The real process, real costs, and real results from building chatbots for early-stage startups.',
    readTime: '9 min read',
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredTopics = activeCategory === 'All'
    ? comingSoonTopics
    : comingSoonTopics.filter(t => t.category === activeCategory)

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
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }} className="blog-hero-grid">
          <div>
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
              The ARR Blog
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: 'clamp(32px, 5vw, 50px)',
                fontWeight: '700',
                color: '#FDF8F2',
                letterSpacing: '-1.5px',
                margin: '0 0 20px',
                lineHeight: '1.15',
              }}
            >
              Practical tech advice for startups that move fast
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '16px',
                color: 'rgba(253,248,242,0.6)',
                lineHeight: '1.7',
                margin: 0,
              }}
            >
              No fluff. No theory. Just real insights on web development,
              AI automation, and startup tech — written by people who
              actually build this stuff.
            </motion.p>
          </div>

          {/* Newsletter signup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              backgroundColor: 'rgba(200,132,74,0.08)',
              border: '1px solid rgba(200,132,74,0.2)',
              borderRadius: '20px',
              padding: '32px',
            }}
            className="newsletter-card"
          >
            <p style={{
              fontSize: '12px',
              fontWeight: '700',
              color: '#C8844A',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              margin: '0 0 12px',
            }}>
              Get notified first
            </p>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#FDF8F2',
              margin: '0 0 10px',
              letterSpacing: '-0.3px',
            }}>
              New articles every week
            </h3>
            <p style={{
              fontSize: '14px',
              color: 'rgba(253,248,242,0.55)',
              lineHeight: '1.6',
              margin: '0 0 24px',
            }}>
              Join startup founders getting practical tech insights
              delivered straight to their inbox.
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: '1px solid rgba(200,132,74,0.25)',
                  backgroundColor: 'rgba(253,248,242,0.06)',
                  color: '#FDF8F2',
                  fontSize: '14px',
                  outline: 'none',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              />
              <button style={{
                padding: '12px 20px',
                borderRadius: '10px',
                backgroundColor: '#C8844A',
                color: '#FDF8F2',
                fontSize: '14px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                width: '100%',
              }}
                onMouseEnter={e => e.target.style.backgroundColor = '#A0622E'}
                onMouseLeave={e => e.target.style.backgroundColor = '#C8844A'}
              >
                Notify me when articles drop
              </button>
            </div>
            <p style={{
              fontSize: '12px',
              color: 'rgba(253,248,242,0.3)',
              margin: '10px 0 0',
              textAlign: 'center',
            }}>
              No spam. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category filter */}
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
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '18px 20px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                border: 'none',
                borderBottom: activeCategory === cat
                  ? '2px solid #C8844A'
                  : '2px solid transparent',
                backgroundColor: 'transparent',
                color: activeCategory === cat ? '#C8844A' : '#6b5a52',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts section */}
      <section style={{
        padding: '72px 24px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>

        {posts.length === 0 ? (
          <>
            {/* Coming soon banner */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e8ddd4',
                borderLeft: '4px solid #C8844A',
                borderRadius: '12px',
                padding: '20px 24px',
                marginBottom: '48px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#C8844A',
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
              <p style={{
                fontSize: '14px',
                color: '#3D1F1A',
                fontWeight: '500',
                margin: 0,
                flex: 1,
              }}>
                Articles are being written right now.
                Subscribe above to get notified the moment the first one drops.
              </p>
              <span style={{
                fontSize: '12px',
                backgroundColor: '#f0e4d6',
                color: '#A0622E',
                padding: '4px 12px',
                borderRadius: '100px',
                fontWeight: '600',
                whiteSpace: 'nowrap',
              }}>
                Coming this month
              </span>
            </motion.div>

            {/* Upcoming topics preview */}
            <div style={{ marginBottom: '16px' }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#3D1F1A',
                margin: '0 0 6px',
                letterSpacing: '-0.3px',
              }}>
                Topics dropping soon
              </h2>
              <p style={{
                fontSize: '14px',
                color: '#6b5a52',
                margin: '0 0 32px',
              }}>
                A preview of what we are writing. Each one solves
                a real problem startup founders face.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
            }} className="blog-grid">
              {filteredTopics.map((topic, i) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e8ddd4',
                    borderRadius: '16px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
                    cursor: 'default',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  whileHover={{ y: -4 }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#C8844A'
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(61,31,26,0.08)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#e8ddd4'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {/* Soon badge */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    fontSize: '11px',
                    backgroundColor: '#f0e4d6',
                    color: '#A0622E',
                    padding: '3px 10px',
                    borderRadius: '100px',
                    fontWeight: '600',
                  }}>
                    Soon
                  </div>

                  {/* Icon */}
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: '#f0e4d6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    marginBottom: '20px',
                    flexShrink: 0,
                  }}>
                    {topic.icon}
                  </div>

                  {/* Category */}
                  <span style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#C8844A',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                    display: 'block',
                  }}>
                    {topic.category}
                  </span>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: '#3D1F1A',
                    margin: '0 0 12px',
                    lineHeight: '1.4',
                    letterSpacing: '-0.2px',
                  }}>
                    {topic.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '14px',
                    color: '#6b5a52',
                    lineHeight: '1.65',
                    margin: '0 0 20px',
                    flex: 1,
                  }}>
                    {topic.description}
                  </p>

                  {/* Footer */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid #f0e8e0',
                  }}>
                    <span style={{
                      fontSize: '12px',
                      color: '#6b5a52',
                    }}>
                      {topic.readTime}
                    </span>
                    <span style={{
                      fontSize: '12px',
                      color: '#C8844A',
                      fontWeight: '600',
                    }}>
                      Notify me →
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }} className="blog-grid">
            {posts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
              </motion.div>
            ))}
          </div>
        )}
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
            Want answers now?
          </h2>
          <p style={{
            fontSize: '16px',
            color: 'rgba(253,248,242,0.6)',
            lineHeight: '1.7',
            margin: '0 0 36px',
          }}>
            Don't wait for the articles. Book a free 30-minute call
            and get direct answers to your startup's tech questions.
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
        @media (max-width: 900px) {
          .blog-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .newsletter-card {
            display: none;
          }
          .blog-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}