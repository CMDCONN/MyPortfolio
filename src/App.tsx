import { useState } from 'react'
import './App.css'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
}

interface WorkExperience {
  id: number
  company: string
  role: string
  duration: string
  description: string
  technologies: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'GitHub Repo Maker',
    description: 'A Python application with a GUI built using Flet that creates GitHub repositories using subprocess and curl commands.',
    technologies: ['Python', 'Flet'],
    githubUrl: 'https://github.com/CMDCONN/GithubRepoMaker'
  },
  {
    id: 2,
    title: 'RepMe',
    description: 'A Project designed for the NHS to give feedback to doctors and nurses alike.',
    technologies: ['C#'],
    githubUrl: 'https://github.com/CMDCONN/RepMe'
  },
  {
    id: 3,
    title: 'Code Cafe Coffee Machine',
    description: 'University of Staffordshire Code Cafe Discord bot for managing the discord server.',
    technologies: ['Python'],
    githubUrl: 'https://github.com/Staffs-Code-Cafe/Code-Cafe-Coffee-Machine'
  },
  {
    id: 4,
    title: 'Bet365 Hackathon - TeamCC',
    description: 'Hackathon project developed for Bet365 competition.',
    technologies: ['Python'],
    githubUrl: 'https://github.com/Staffs-Code-Cafe/Bet365-Hackathon-TeamCC'
  }
]

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    company: 'BoysenB',
    role: 'Software Developer',
    duration: '2024',
    description: 'Worked at a mobile software development and web development company in Birmingham. Developed a comprehensive solution to calculate carbon emissions for a client, built using Python and Django. Later refactored the application into React to improve performance and user experience. Collaborated with the development team to deliver high-quality software solutions for clients.',
    technologies: ['Python', 'Django', 'React', 'Web Development']
  },
  {
    id: 2,
    company: 'NHS',
    role: 'Software Developer',
    duration: '2024',
    description: 'Developed RepMe, a comprehensive feedback system designed for the NHS to facilitate communication and feedback between healthcare professionals. The application enables doctors and nurses to provide structured feedback, improving workplace communication and professional development. Worked closely with healthcare staff to understand their needs and requirements, ensuring the solution addressed real-world challenges in the healthcare environment.',
    technologies: ['C#', '.NET', 'Healthcare Systems']
  }
]

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-card-content">
        <div className="project-number">{String(project.id).padStart(2, '0')}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className={`project-links ${isHovered ? 'visible' : ''}`}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Code
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={() => scrollToSection('home')}>
            Portfolio
          </div>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li>
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                className={activeSection === 'home' ? 'active' : ''}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                className={activeSection === 'projects' ? 'active' : ''}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
                className={activeSection === 'experience' ? 'active' : ''}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#unilife" 
                onClick={(e) => { e.preventDefault(); scrollToSection('unilife'); }}
                className={activeSection === 'unilife' ? 'active' : ''}
              >
                Uni Life
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                className={activeSection === 'about' ? 'active' : ''}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className={activeSection === 'contact' ? 'active' : ''}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Hi, I'm</span>
              <span className="name">Connor Worrall</span>
            </h1>
            <p className="hero-subtitle">
              Software Developer | Python C# C++ HTML JavaScript
            </p>
            <p className="hero-description">
              I'm a Software Developer who builds functional applications and digital experiences
              that make a difference. I'm currently studying at the University of Staffordshire, where I'm studying Computer Science.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card card-1"></div>
            <div className="floating-card card-2"></div>
            <div className="floating-card card-3"></div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">
              A collection of projects I've built. Click on any project to learn more.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Work Experience</h2>
            <p className="section-subtitle">
              Professional experience and contributions to real-world projects.
            </p>
          </div>
          <div className="experience-list">
            {workExperiences.map((experience) => (
              <div key={experience.id} className="experience-card">
                <div className="experience-header">
                  <div className="experience-company">{experience.company}</div>
                  <div className="experience-role">{experience.role}</div>
                  <div className="experience-duration">{experience.duration}</div>
                </div>
                <p className="experience-description">{experience.description}</p>
                <div className="experience-technologies">
                  {experience.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="unilife" className="unilife-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Uni Life</h2>
            <p className="section-subtitle">
              My involvement in university community and activities.
            </p>
          </div>
          <div className="unilife-content">
            <div className="unilife-card">
              <div className="unilife-header">
                <h3 className="unilife-title">Code Cafe</h3>
                <div className="unilife-role">Co-Director</div>
              </div>
              <p className="unilife-description">
                I am the co-director of Code Cafe, a community-centered group at Staffordshire University 
                that brings students together to code, collaborate, and learn. Code Cafe provides a welcoming 
                environment for students of all skill levels to work on projects, share knowledge, and build 
                connections within the developer community. As co-director, I help organize events, facilitate 
                coding sessions, and foster a supportive learning atmosphere where everyone can grow their 
                programming skills together.
              </p>
              <div className="unilife-highlights">
                <div className="highlight-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Community Building</span>
                </div>
                <div className="highlight-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Event Organization</span>
                </div>
                <div className="highlight-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Knowledge Sharing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="section-container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Me</h2>
              <p>
                I'm a passionate developer with a love for creating elegant solutions
                to complex problems. With expertise in modern software technologies, I bring
                ideas to life through clean code and thoughtful design.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, or sharing knowledge with the
                developer community.
              </p>
              <div className="skills">
                <h3>Skills & Technologies</h3>
                <div className="skills-grid">
                  <span className="skill-item">Python</span>
                  <span className="skill-item">C#</span>
                  <span className="skill-item">C++</span>
                  <span className="skill-item">HTML</span>
                  <span className="skill-item">JavaScript</span>
                  <span className="skill-item">TypeScript</span>
                  <span className="skill-item">React</span>
                  <span className="skill-item">CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="contact-content">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your visions.
            </p>
            <div className="contact-links">
              <a href="https://github.com/CMDCONN" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="https://uk.linkedin.com/in/connor-worrall-b5b7b02a0" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Connor Worrall. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
