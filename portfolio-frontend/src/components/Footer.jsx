import { socials, EMAIL, navItems } from '../data/socialLinks'
import ResumeButton from './ResumeButton/ResumeButton'

export default function Footer() {
  const WHATSAPP_MESSAGE = "Hi Aditya, I saw your portfolio and wanted to connect.";

  return (
    <footer className="footer">
      <div className="container foot-grid">
        <div>
          <h3>Aditya Kourav</h3>
          <p>MERN Stack Developer</p>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <div style={{ marginTop: '20px' }}>
            <ResumeButton variant="yellow" size="xs" />
          </div>
        </div>
        <nav aria-label="Quick links">
          <h4>Quick Links</h4>
          {navItems.map((n) => <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}
        </nav>
        <nav aria-label="Social">
          <h4>Social</h4>
          {socials.map((s) => <a key={s.name} href={s.url} target="_blank" rel="noreferrer">{s.name}</a>)}
          <a href={`https://wa.me/917828053425?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noreferrer">WhatsApp</a>
        </nav>
      </div>
      <div className="container foot-bot">
        <span>© 2026 Aditya Kourav. All rights reserved.</span>
        <span>Designed & built with React.</span>
      </div>
    </footer>
  )
}