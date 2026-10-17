import { useState } from 'react'
import { socials } from '../../data/socialLinks'
import './Hero.css'
import ResumeButton from '../ResumeButton/ResumeButton'

const HERO_IMG = '/images/hero-placeholder.png' // single place to swap in your own image
const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

function Fallback() {
  return (
    <svg viewBox="0 0 400 460" className="hero-svg" role="img" aria-label="Illustration of a developer at a laptop">
      <circle cx="210" cy="140" r="62" fill="#E9B48E"/><path d="M140 118c0-52 32-88 70-88s70 36 70 88z" fill="#F05A3C"/><rect x="146" y="104" width="128" height="24" rx="10" fill="#C9432A"/>
      <circle cx="190" cy="152" r="5" fill="#0B2638"/><circle cx="232" cy="152" r="5" fill="#0B2638"/>
      <path d="M190 174q20 16 42 0" stroke="#0B2638" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M40 460c0-120 70-190 170-190s170 70 170 190z" fill="#F4B735"/>
      <rect x="90" y="330" width="240" height="130" rx="14" fill="#0B2638"/>
      <text x="210" y="415" textAnchor="middle" fontSize="48" fontWeight="700" fill="#F4B735" fontFamily="monospace">&lt;/&gt;</text>
    </svg>
  )
}

export default function Hero() {
  const [ok, setOk] = useState(true)
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="badge">MERN STACK DEVELOPER</span>
          <h1>Hey There,<br />I’m Aditya Kourav</h1>
          <p className="tag">Building modern web experiences that turn ideas into scalable digital products.</p>
          <p className="intro">Hi, I'm Aditya. I build responsive websites and full-stack applications with login, APIs and databases. Tell me what you need, and I'll build it.</p>
          <div className="cta-row">
            <button className="btn btn-dark" onClick={() => go('projects')}>View My Work</button>
            <ResumeButton variant="outline" size="md" />
          </div>
          <div className="soc">{socials.map((s) => <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}>{s.name}</a>)}</div>
        </div>
        <div className="hero-visual">
          <svg className="brush" viewBox="0 0 400 420" aria-hidden="true"><path d="M60 90c60-50 200-90 300-60 40 40-20 70-60 90 60 20 70 70 20 90 40 30 10 70-40 80-80 20-160 40-230 10-40-40 0-80 30-90-50-30-70-80-20-120z" fill="var(--color-teal)"/></svg>
          <div className="figure">{ok ? <img src={HERO_IMG} alt="Aditya Kourav developer illustration" onError={() => setOk(false)} /> : <Fallback />}</div>
          <div className="stat s1"><b>6+</b>Projects Built</div>
          <div className="stat s2"><b>3rd Year</b>B.Sc. Student</div>
          <div className="stat s3"><b>MERN</b>Stack Developer</div>
        </div>
      </div>
    </section>
  )
}