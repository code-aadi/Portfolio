import { services } from '../data/services'
import { skills } from '../data/skills'
import { socials } from '../data/socialLinks'
import ResumeButton from './ResumeButton/ResumeButton'

const About = () => (<>
  <section id="about" className="sec white"><div className="container two">
    <div className="svc-list">{services.map((s) => (<article key={s.title} className="svc reveal"><span className={`ico ${s.color}`}>{s.icon}</span><div><h3>{s.title}</h3><small>{s.count}</small><p>{s.text}</p></div></article>))}</div>
    <div className="reveal"><h2>About Me</h2>
      <p>I’m Aditya Kourav, a MERN Stack Developer and B.Sc. student currently in my 3rd year at Rani Durgavati Vishwavidyalaya.</p>
      <p>I enjoy turning ideas into practical web applications and continuously improving my skills by building real-world projects.</p>
      <p>My focus is on creating responsive interfaces, functional backend systems, authentication, REST APIs and complete full-stack experiences.</p>
      <h3 className="mt">What I Build</h3><p>From polished interfaces to complete full-stack applications, I build web experiences with a focus on usability, functionality and clean development.</p>
      <div style={{ marginTop: '24px' }}>
        <ResumeButton variant="filled" size="md" />
      </div>
    </div></div></section></>)

const Skills = () => (
  <section id="skills" className="sec"><div className="container"><h2 className="reveal">Tools I Work With</h2>
    <div className="skill-grid">{skills.map((g, i) => (<div key={g.group} className={`skill-card reveal c${i % 3}`}><h3>{g.group}</h3><ul>{g.items.map((t) => <li key={t}><i>{t.slice(0, 2)}</i>{t}</li>)}</ul></div>))}</div></div></section>)

const Journey = () => (
  <section id="journey" className="sec white"><div className="container"><h2 className="reveal">My Journey</h2>
    <ol className="timeline">
      <li className="reveal"><time>2026 / Present</time><h3>Building & Learning</h3><p>Developing full-stack applications with React, Node.js, Express, MongoDB and related technologies while continuously improving through real-world projects.</p></li>
      <li className="reveal"><time>2026 / Present</time><h3>B.Sc. Student</h3><p>Rani Durgavati Vishwavidyalaya — Currently in 3rd Year</p></li>
    </ol></div></section>)

const Social = () => (
  <section className="sec"><div className="container"><div className="follow reveal"><div><h2>Building in Public</h2><p>I share coding, development and project-building content on Instagram.</p></div>
    <a className="btn btn-yellow" href={socials[2].url} target="_blank" rel="noreferrer">Follow @code_aadi</a></div></div></section>)

export default { About, Skills, Journey, Social }