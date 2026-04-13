'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = []

const categories = ['All', 'QA Auditing', 'Web Development', 'AI Automation', 'Email Marketing']

export default function OurWorkPage() {
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
            Our portfolio
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
            Work that speaks<br />for itself
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
              margin: 0,
            }}
          >
            Real projects. Real results. Every case study shows
            exactly what we did, how we did it, and what changed
            for the startup.
          </motion.p>
        </div>
      </section>

      {/* Intro line */}
      <section style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e8ddd4',
        padding: '48px 24px',
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '16px',
            color: '#6b5a52',
            lineHeight: '1.7',
            maxWidth: '680px',
            margin: '0 auto 24px',
          }}>
            We're just getting started — be our first case study. Book a free call and we'll walk you through our work directly.
          </p>
          <Link href="https://calendly.com/arrautomation001/30min" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block',
            backgroundColor: '#C8844A',
            color: '#FDF8F2',
            padding: '12px 28px',
            borderRadius: '10px',
            fontSize: '14px',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'background-color 0.2s ease, transform 0.2s ease',
          }}>
            Book a Free Call
          </Link>
        </div>
      </section>

      {/* Filter tabs */}
      <div style={{
        backgroundColor: '#FDF8F2',
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
              style={{
                padding: '18px 20px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                border: 'none',
                borderBottom: cat === 'All'
                  ? '2px solid #C8844A'
                  : '2px solid transparent',
                backgroundColor: 'transparent',
                color: cat === 'All' ? '#C8844A' : '#6b5a52',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects grid or empty state */}
      <section style={{
        padding: '80px 24px',
        maxWidth: '1100px',
        margin: '0 auto',
        minHeight: '400px',
      }}>
        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: 'center',
              padding: '80px 24px',
            }}
          >
            {/* Animated icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '20px',
                backgroundColor: '#f0e4d6',
                border: '1px solid #e8ddd4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 32px',
                fontSize: '32px',
              }}
            >
              ◎
            </motion.div>

            <h2 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#3D1F1A',
              margin: '0 0 16px',
              letterSpacing: '-0.5px',
            }}>
              Case studies loading up
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#6b5a52',
              lineHeight: '1.7',
              maxWidth: '440px',
              margin: '0 auto 40px',
            }}>
              We are currently documenting our recent projects.
              Check back soon — or book a call and we will walk
              you through our work directly.
            </p>

            {/* CTA cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
              maxWidth: '560px',
              margin: '0 auto',
            }} className="cta-grid">
              <Link href="/contact" style={{
                backgroundColor: '#3D1F1A',
                borderRadius: '16px',
                padding: '28px 24px',
                textDecoration: 'none',
                textAlign: 'left',
                display: 'block',
                transition: 'transform 0.2s ease',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <p style={{
                  fontSize: '22px',
                  marginBottom: '8px',
                }}>
                  ◎
                </p>
                <p style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#FDF8F2',
                  margin: '0 0 6px',
                }}>
                  See our work live
                </p>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(253,248,242,0.55)',
                  margin: 0,
                  lineHeight: '1.5',
                }}>
                  Book a free call and we walk you through everything we have built
                </p>
              </Link>

              <Link href="/services" style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e8ddd4',
                borderRadius: '16px',
                padding: '28px 24px',
                textDecoration: 'none',
                textAlign: 'left',
                display: 'block',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = '#C8844A'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = '#e8ddd4'
                }}
              >
                <p style={{
                  fontSize: '22px',
                  marginBottom: '8px',
                }}>
                  ◇
                </p>
                <p style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#3D1F1A',
                  margin: '0 0 6px',
                }}>
                  Explore services
                </p>
                <p style={{
                  fontSize: '13px',
                  color: '#6b5a52',
                  margin: 0,
                  lineHeight: '1.5',
                }}>
                  See exactly what we offer and what each service includes
                </p>
              </Link>
            </div>
          </motion.div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '28px',
          }} className="projects-grid">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
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
            Want to be our next case study?
          </h2>
          <p style={{
            fontSize: '16px',
            color: 'rgba(253,248,242,0.6)',
            lineHeight: '1.7',
            margin: '0 0 36px',
          }}>
            We are actively taking on new projects. Book a free call
            and let us fix, build, or automate something for your startup.
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
            Start a Project →
          </Link>
        </motion.div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
          .cta-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}