import projects from '../../data/projects'
import './Projects.css'
const Mock = ({ p }) => {
  if (p.image) return <img src={p.image} alt={`${p.title} preview`} loading="lazy" />
  const m = p.mock
  return (<div className="win"><div className="bar"><i /><i /><i /></div><div className={`scr ${m}`} aria-hidden="true">
    {(m === 'shop' || m === 'grocery') && <><div className="nv" /><div className="pg">{[0, 1, 2, 3].map((i) => <div key={i} className="pc"><div className="pi" /><b /><em>{m === 'shop' ? '₹ 1,299' : '₹ 49'}</em></div>)}</div><div className="cart">Cart · Checkout</div></>}
    {m === 'expense' && <><div className="bal">Balance ₹24,500</div><div className="chart">{[40, 70, 50, 90, 60, 80].map((h, i) => <span key={i} style={{ height: h + '%' }} />)}</div><div className="tx" /><div className="tx" /></>}
    {m === 'ttt' && <div className="board">{['X', 'O', 'X', '', 'X', 'O', 'O', '', 'X'].map((c, i) => <span key={i}>{c}</span>)}</div>}
    {m === 'pass' && <><div className="pw">k7#Qx!9mRz2&</div><div className="meter"><span /></div><div className="gen">Generate</div></>}
  </div></div>)
}
export default function Projects() {
  return (<section id="projects" className="sec"><div className="container">
    <div className="ph reveal"><div><h2>My Latest Works</h2><p>A selection of projects I've built while exploring full-stack development, modern frontend experiences and real-world functionality.</p></div><a className="link" href="https://github.com/code-aadi" target="_blank" rel="noreferrer">Explore My Work</a></div>
    <div className="pgrid">{projects.map((p, i) => (<article key={p.title} className={`pcard reveal v${i % 3} ${p.featured ? 'feat' : ''}`}>
      <div className="pv"><Mock p={p} />{p.featured && <span className="ftag">Featured</span>}</div>
      <div className="pb"><small>{p.category}</small><h3>{p.title}</h3><p>{p.description}</p>
        <ul>{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
        <div className="acts"><a className="btn btn-dark" href={p.liveUrl} target="_blank" rel="noreferrer">Live Demo</a><a className="btn btn-outline" href={p.githubUrl} target="_blank" rel="noreferrer">GitHub</a></div></div>
    </article>))}</div></div></section>)
}
