import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

export const metadata = {
  title: 'ARR Automation — Fix. Build. Automate.',
  description: 'We help early-stage startups fix their tech, build what they need, and automate what slows them down.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Inter, sans-serif' }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}