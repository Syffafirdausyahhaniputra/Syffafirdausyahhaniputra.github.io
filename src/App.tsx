import { useState } from 'react'
import {
  contact,
  education,
  experience,
  focusAreas,
  profile,
  projects,
  skills,
  socialLinks,
} from './data/portfolio'
import './App.css'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Focus', href: '#focus' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const cvHref =
    profile.cvLink.startsWith('http') || profile.cvLink.startsWith('/') ? profile.cvLink : '#'
  const emailHref = contact.email.includes('[') ? '#' : `mailto:${contact.email}`

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container nav-bar">
          <a className="brand" href="#home" aria-label="Syffa homepage">
            <span className="brand-mark">SF</span>
            <span className="brand-text">Syffa</span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} id="mobile-menu" aria-label="Main navigation">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="section hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{profile.label}</p>
              <h1>{profile.headline}</h1>
              <p className="lead">{profile.summary}</p>

              <div className="cta-row">
                <a href="#projects" className="btn btn-primary">
                  View Projects
                </a>
                <a
                  href={cvHref}
                  className="btn btn-secondary"
                  target={cvHref.startsWith('http') ? '_blank' : undefined}
                  rel={cvHref.startsWith('http') ? 'noreferrer' : undefined}
                >
                  Download CV
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Contact Me
                </a>
              </div>

              <div className="tag-row" aria-label="Core technical focus">
                {profile.emphasis.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-panel" aria-label="Professional profile summary">
              <div className="profile-card">
                <div className="card-topline">
                  <span className="online-dot" aria-hidden="true" />
                  Open to IT opportunities
                </div>
                <h2>{profile.name}</h2>
                <p className="role">{profile.label}</p>
                <ul className="mini-list">
                  <li>Desktop Development</li>
                  <li>Web Development</li>
                  <li>Database &amp; REST API</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-header narrow">
              <p className="kicker">About</p>
              <h2>Fresh graduate developer focused on practical software solutions.</h2>
            </div>

            <div className="about-grid">
              <div className="about-copy">
                <p>
                  I am a fresh graduate in Business Information Systems from Politeknik Negeri
                  Malang with an interest in software development, particularly desktop and web
                  application development.
                </p>
                <p>
                  Through academic and project-based experience, I have worked with technologies
                  such as C#, .NET, WPF, PHP, Laravel, MySQL, REST API, Flutter, HTML, CSS,
                  JavaScript, and related development tools.
                </p>
                <p>
                  I enjoy turning requirements into practical software solutions while considering
                  application structure, database integration, usability, and system behavior.
                </p>
              </div>

              <div className="about-panel">
                <p className="panel-label">Core focus</p>
                <ul>
                  <li>Desktop application development</li>
                  <li>Web application development</li>
                  <li>Database and API integration</li>
                  <li>System-oriented problem solving</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="focus" className="section alt-section">
          <div className="container">
            <div className="section-header">
              <p className="kicker">Core Focus</p>
              <h2>Focused on building useful software across desktop and web systems.</h2>
            </div>

            <div className="focus-grid">
              {focusAreas.map((area) => (
                <article key={area.title} className="focus-card">
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <div className="stack-row">
                    {area.stack.map((item) => (
                      <span key={item} className="pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="section-header">
              <p className="kicker">Skills</p>
              <h2>Technical capabilities aligned with desktop, web, and integration work.</h2>
            </div>

            <div className="skills-grid">
              {skills.map((group) => (
                <div key={group.title} className="skill-group">
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section alt-section">
          <div className="container">
            <div className="section-header wide">
              <p className="kicker">Projects</p>
              <h2>Selected work that demonstrates desktop, web, API, and system development.</h2>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article key={project.title} className="project-card">
                  <div className="project-body">
                    <div className="project-meta">
                      <span className="project-category">{project.category}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>

                    <div className="project-detail-block">
                      <span>Purpose</span>
                      <p>{project.purpose}</p>
                    </div>

                    <div className="project-detail-block">
                      <span>My contribution</span>
                      <p>{project.contribution}</p>
                    </div>

                    <div className="project-detail-block">
                      <span>Technology</span>
                      <div className="stack-row">
                        {project.stack.map((item) => (
                          <span key={item} className="pill small-pill">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="project-detail-block">
                      <span>Platform</span>
                      <p>{project.platform}</p>
                    </div>

                    <div className="project-detail-block">
                      <span>Key features</span>
                      <ul className="feature-list">
                        {project.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="action-row">
                      {project.links.map((link) =>
                        link.isDisabled ? (
                          <span key={link.label} className="placeholder-link">
                            {link.label}
                          </span>
                        ) : (
                          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                            {link.label}
                          </a>
                        ),
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <div className="section-header narrow">
              <p className="kicker">Experience</p>
              <h2>Relevant experience in coordination, administration, and project support.</h2>
            </div>

            <div className="timeline">
              {experience.map((item) => (
                <article key={`${item.organization}-${item.title}`} className="timeline-item">
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-content">
                    <span className="timeline-role">{item.title}</span>
                    <h3>{item.organization}</h3>
                    {item.period && <p>{item.period}</p>}
                    {item.description && <p>{item.description}</p>}
                    {item.responsibilities && (
                      <ul>
                        {item.responsibilities.map((responsibility) => (
                          <li key={responsibility}>{responsibility}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section alt-section">
          <div className="container">
            <div className="section-header narrow">
              <p className="kicker">Education</p>
              <h2>Academic foundation in Information Technology and business-oriented development.</h2>
            </div>

            <div className="education-grid">
              {education.map((item) => (
                <article key={item.institution} className="education-card">
                  <p className="education-status">{item.status}</p>
                  <h3>{item.institution}</h3>
                  <p>{item.program}</p>
                  <span>{item.graduationYear}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="kicker">Contact</p>
              <h2>Let's Build Something Useful</h2>
              <p>
                Interested in working together or discussing an opportunity? Feel free to reach out.
              </p>
            </div>

            <div className="contact-panel">
              <a href={emailHref} className="contact-link">
                <span className="label">Email</span>
                <strong>{contact.email}</strong>
              </a>

              <div className="social-row">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="social-badge">
                    <span>{link.icon}</span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>Fresh Graduate · Information Technology Developer</p>
        </div>
      </footer>
    </div>
  )
}

export default App
