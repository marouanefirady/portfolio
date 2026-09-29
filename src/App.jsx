import { useEffect, useState } from 'react'
import {
  BarChart3,
  Bot,
  Brain,
  BrainCircuit,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  Code2,
  Cloud,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Network,
  Moon,
  Sun,
  UsersRound,
  Workflow,
  X,
} from 'lucide-react'
import {
  siApacheairflow,
  siApachekafka,
  siApachenifi,
  siApachespark,
  siHtml5,
  siDocker,
  siGithub,
  siHuggingface,
  siJavascript,
  siLaravel,
  siLinux,
  siMinio,
  siMysql,
  siN8n,
  siPostgresql,
  siPython,
  siReact,
  siSnowflake,
} from 'simple-icons'
import './App.css'

const profile = {
  name: 'Firady Marouane',
  firstName: 'Marouane',
  role: 'Ingénieur en Intelligence Artificielle & Data Science',
  location: 'Rabat, Maroc',
  email: 'FiradyMarouaneIT@gmail.com',
  portrait:
    '/+.jpg',
}

const skills = [
  {
    title: 'Data Engineering',
    items: [
      { name: 'MinIO', icon: siMinio },
      { name: 'Apache Airflow', icon: siApacheairflow },
      { name: 'Apache NiFi', icon: siApachenifi },
      { name: 'Apache Kafka', icon: siApachekafka },
      { name: 'Snowflake', icon: siSnowflake },
      { name: 'PySpark', icon: siApachespark },
      { name: 'PostgreSQL', icon: siPostgresql },
      { name: 'NoSQL', icon: Database },
      { name: 'Microsoft SQL Server', icon: Database },
      { name: 'MySQL', icon: siMysql },
      { name: 'Architecture de données', icon: Network },
    ],
  },
  {
    title: 'Intelligence artificielle',
    items: [
      { name: 'Hugging Face', icon: siHuggingface },
      { name: 'Agents d’intelligence artificielle', icon: Bot },
      { name: 'Deep learning', icon: BrainCircuit },
      { name: 'Intelligence artificielle (IA)', icon: Brain },
      { name: 'Microsoft Azure Machine Learning', icon: Cloud },
      { name: 'Machine Learning', icon: BrainCircuit },
      { name: 'LLM', icon: Bot },
    ],
  },
  {
    title: 'Développement & outils',
    items: [
      { name: 'GitHub', icon: siGithub },
      { name: 'Linux', icon: siLinux },
      { name: 'Docker', icon: siDocker },
      { name: 'N8N', icon: siN8n },
      { name: 'JavaScript', icon: siJavascript },
      { name: 'React.js', icon: siReact },
      { name: 'HTML', icon: siHtml5 },
      { name: 'CSS', icon: Code2 },
      { name: 'Python', icon: siPython },
      { name: 'Laravel', icon: siLaravel },
      { name: 'Développement full-stack', icon: Code2 },
      { name: 'Langage de modélisation unifié (UML)', icon: Workflow },
    ],
  },
  {
    title: 'Analyse & collaboration',
    items: [
      { name: 'Microsoft Power BI', icon: BarChart3 },
      { name: 'Analyse des données', icon: BarChart3 },
      { name: 'Travail d’équipe', icon: UsersRound },
    ],
  },
]

const experiences = [
  {
    period: '2024 — 2 Mois',
    role: 'Stagiaire Ingénieur en Développement Web & Bases de Données',
    company: 'Sanlam',
    logo: '/sanlam-logo-png_seeklogo-353774.png',
    description: [
      'Intégration de bases de données MySQL et rédaction du cahier des charges',
      'Développement d’une application web complète avec Laravel et React.js',
      'Conception de diagrammes UML : cas d’utilisation, séquence et classes',
      'Création d’interfaces utilisateurs conviviales et interactives',
    ],
  },
  {
    period: '2025 - 2 Mois',
    role: 'Stage  Ingénieur en IA, Data & Développement Full-Stack',
    company: ' SNRT (THE MOROCCAN PUBLIC BROADCASTING COMPANY)',
    logo: '/R (3).jpeg',
    description: [
      'Implémentation d’une architecture RAG avec LLM, exposition via API FastAPI et interface utilisateur React. ',
      'Pipeline de traitement multimédia : extraction texte/audio, stockage MongoDB et moteur de recherche hybride (full-text + sémantique par embeddings). ',
    ],
  },
]

const projects = [
  {
    number: '01',
    title: 'Une marque, une nouvelle histoire',
    type: 'Identité visuelle · Concept',
    description: 'Un concept de marque chaleureux et contemporain, du premier croquis aux déclinaisons digitales.',
    image:
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=85',
    alt: 'Bouteille design posée sur une surface colorée',
    color: 'coral',
  },
  {
    number: '02',
    title: 'Le plaisir de choisir simplement',
    type: 'E-commerce · UX / UI',
    description: 'Une expérience d’achat imaginée pour rendre la découverte et la sélection des produits plus intuitives.',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85',
    alt: 'Montre au cadran épuré photographiée sur fond clair',
    color: 'lime',
  },
  {
    number: '03',
    title: 'Un espace pour faire ensemble',
    type: 'Site web · Développement',
    description: 'Une piste de plateforme accessible pour aider une communauté à partager ses idées et ses projets.',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85',
    alt: 'Équipe en réunion autour d’une table de travail',
    color: 'green',
  },
]

const formations = [
  {
    icon: GraduationCap,
    logo: '/EMSI-Emploi-Recrutement-750x393.png',
    title: 'Diplôme d’Ingénieur d’État en Intelligence Artificielle & Data Science',
    place: 'EMSI',
    date: '2026',
  },
]

const certificates = [
  {
    icon: Award,
    image: '/hong%20kong.png',
    title: 'Software Engineering: Software Design and Project Management',
    place: 'The Hong Kong University of Science and Technology (Coursera)',
    date: '2025',
    courseraUrl: 'https://coursera.org/share/e09591d149f300c73bf76b2ad48ff646',
  },
  {
    icon: Award,
    image: '/Paris.png',
    title: 'La recherche documentaire',
    place: 'Instutu polytechnique de Paris (Coursera)',
    date: '2025',
    courseraUrl: 'https://coursera.org/share/17da2e9614eeb6b092be30509d1d5e37',
  },
  {
    icon: Award,
    image: '/C.png',
    title: 'Interactivity with JavaScript',
    place: 'University of Michigan (Coursera)',
    date: '2024',
    courseraUrl: 'https://coursera.org/share/651b4554a2dffc252a8eb3363535ddf3',
  },
   {
    icon: Award,
    image: '/gg.png',
    title: 'Oracle Cloud Infrastructure Certified AI Foundations Associate',
    place: 'ORACLE',
    date: '2026',
    courseraUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=08EB6FD33052AA0EF074BA8B0819DF8664F6F7A91C46BF0E066738031BA96C7B',
  },
]

const navigation = [
  ['À propos', '#about'],
  ['Compétences', '#skills'],
  ['Parcours', '#experience'],
  ['Projets', '#projects'],
  ['Formation', '#education'],
]

function EducationGroup({ title, items }) {
  return (
    <div className={`education-group${title === 'Certifications' ? ' certificate-group' : ''}`}>
      <h3 className="education-group-title">{title}</h3>
      <div className={`education-list${title === 'Certifications' ? ' certificate-list' : ''}`}>
        {items.map((item) => {
          const Icon = item.icon
          if (title === 'Certifications') {
            return (
              <article className="certificate-card" key={item.title}>
                <div className="certificate-visual">
                  {item.image ? (
                    <img src={item.image} alt={`Certificat : ${item.title}`} />
                  ) : (
                    <div className="certificate-placeholder">
                      <Icon size={25} strokeWidth={1.5} />
                      <span>Photo du certificat</span>
                    </div>
                  )}
                </div>
                <div className="certificate-details">
                  <div>
                    <h4>{item.title}</h4>
                    <p className="certificate-place">{item.place} · {item.date}</p>
                  </div>
                  <p className="certificate-description">{item.description}</p>
                  {item.courseraUrl && (
                    <a
                      className="certificate-verify"
                      href={item.courseraUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Vérifier sur Coursera <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </article>
            )
          }

          return (
            <article className={`education-item${item.logo ? ' has-logo' : ''}`} key={item.title}>
              <div className={`education-icon${item.logo ? ' has-logo' : ''}`}>
                {item.logo ? <img src={item.logo} alt={`Logo ${item.place}`} /> : <Icon size={20} strokeWidth={1.7} />}
              </div>
              <div><h4>{item.title}</h4><p>{item.place}</p></div>
              <span className="education-date">{item.date}</span>
            </article>
          )
        })}
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(
    () => window.localStorage.getItem('portfolio-theme') === 'dark',
  )

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light'
    window.localStorage.setItem('portfolio-theme', theme)
    document.documentElement.style.colorScheme = theme
  }, [darkMode])

  function handleContactSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const senderName = formData.get('name')
    const senderEmail = formData.get('email')
    const message = formData.get('message')
    const subject = `Message de ${senderName}`
    const body = `Nom : ${senderName}\nE-mail : ${senderEmail}\n\n${message}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  function SkillIcon({ icon: Icon }) {
    if (Icon.path) {
      return (
        <svg viewBox="0 0 24 24" fill={`#${Icon.hex}`} aria-hidden="true">
          <path d={Icon.path} />
        </svg>
      )
    }

    return <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
  }

  return (
    <div className={`site-shell${darkMode ? ' dark-theme' : ''}`}>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label={`${profile.name}, accueil`}>
          <span className="wordmark-mark">{profile.firstName.slice(0, 1)}.</span>
          <span>{profile.name}</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Navigation principale">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            Me contacter <ArrowUpRight size={15} />
          </a>
          <button
            className="theme-toggle"
            type="button"
            aria-label={darkMode ? 'Activer le thème clair' : 'Activer le thème sombre'}
            aria-pressed={darkMode}
            title={darkMode ? 'Passer au thème clair' : 'Passer au thème sombre'}
            onClick={() => setDarkMode((currentMode) => !currentMode)}
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Disponible pour de nouvelles opportunités</p>
            <h1>Des idées claires.<br /><span>Un impact</span> durable.</h1>
            <p className="hero-intro">
              En 5ème année du cycle d’ingénieur en <strong>Intelligence Artificielle &amp; Data Science à l’EMSI</strong>,
              je construis mon expertise autour de la <strong>Data et de l’IA</strong>. Je travaille sur des projets de
              <strong> Data Science, Data Engineering, Machine Learning, NLP et LLM</strong>, avec l’objectif de développer
              des solutions fiables, utiles et orientées métier.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Découvrir mes projets <ArrowRight size={17} /></a>
              <a className="text-link" href="#contact">Parlons de votre projet <ArrowDownRight size={17} /></a>
              <a className="button button-dark" href="/CV-Firady-Marouane.pdf" download="CV-Firady-Marouane.pdf">
                Télécharger mon CV <Download size={16} />
              </a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> {profile.location}</span>
              <span className="meta-divider" />
              <span>Portfolio professionnel · 2025</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img src={profile.portrait} alt="Portrait professionnel de remplacement" />
              <div className="portrait-label"><span>01 / 06</span><span>Un peu de moi</span></div>
            </div>
            <div className="orbit-note"><span>Créativité</span><span className="orbit-star">✳</span><span>Curiosité</span></div>
            <div className="hero-stamp" aria-hidden="true">PORTFOLIO<br />20—25</div>
          </div>
          <a className="scroll-cue" href="#about"><span>Défiler pour découvrir</span><ArrowDownRight size={16} /></a>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-kicker"><span>01</span> À propos</div>
          <div className="about-content">
            <h2>Faire simple.<br /><span>Faire juste.</span></h2>
            <div className="about-text">
              <p className="lead"><strong>Je crois que la technologie prend tout son sens lorsqu’elle permet de transformer une idée en quelque chose de concret.</strong></p>
              <p>Je suis <strong>FIRADY MAROUANE</strong>, étudiant en 5ᵉ année d’Ingénierie d’État en Intelligence Artificielle &amp; Data à l’EMSI. Passionné par l’IA, la Data Science et la Data Engineering, j’aime explorer, apprendre et construire des solutions qui répondent à de vrais besoins.</p>
              <p>Curieux, analytique et orienté projet, je cherche constamment à développer mes compétences et à transformer les données en idées utiles.</p>
              <a className="text-link about-link" href="#contact">En savoir plus sur mon parcours <ArrowRight size={16} /></a>
            </div>
          </div>
          <div className="values-strip">
            <span>Curiosité avant tout</span><span className="value-star">✳</span>
            <span>Du sens dans chaque détail</span><span className="value-star">✳</span>
            <span>Avancer ensemble</span>
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <div className="section-kicker light-kicker"><span>02</span> Savoir-faire</div>
          <div className="skills-heading">
            <h2>Des outils,<br />et surtout <span>des idées.</span></h2>
            <p>Un ensemble de compétences complémentaires au service de projets soignés et bien pensés.</p>
          </div>
          <div className="skills-grid">
            {skills.map((group, index) => (
              <article className="skill-group" key={group.title}>
                <div className="skill-number">0{index + 1}</div>
                <h3>{group.title}</h3>
                <ul>{group.items.map((item) => (
                  <li key={item.name}>
                    <span className="skill-mark"><SkillIcon icon={item.icon} /></span>
                    <span>{item.name}</span>
                  </li>
                ))}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-wrap" id="experience">
          <div className="section-kicker"><span>03</span> Expérience</div>
          <div className="section-title-row">
            <h2>Un parcours<br /><span>en mouvement.</span></h2>
            <p>Les rencontres, les projets et les défis qui ont façonné ma façon de travailler.</p>
          </div>
          <div className="timeline">
            {experiences.map((item) => (
              <article className="timeline-item" key={item.period}>
                <div className="timeline-date">{item.period}</div>
                <div className="timeline-main">
                  <h3>{item.role}</h3>
                  <div className="timeline-company">
                    {!item.logo && (
                      <span className="timeline-company-logo" aria-hidden="true">
                        {item.company.trim().split(/\s+/).filter(Boolean).slice(0, 2).map((word) => word[0]).join('').toUpperCase()}
                      </span>
                    )}
                    <span>{item.company}</span>
                  </div>
                  <ul className="timeline-description">
                    {item.description.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
                {item.logo ? (
                  <div className="timeline-logo-feature">
                    <img src={item.logo} alt={`Logo ${item.company}`} />
                  </div>
                ) : (
                  <ArrowUpRight className="timeline-arrow" size={21} />
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="section-kicker"><span>04</span> Sélection de projets</div>
          <div className="section-title-row projects-title-row">
            <h2>Du travail<br /><span>qui me ressemble.</span></h2>
            <a className="text-link" href="#contact">Un projet en tête ? <ArrowUpRight size={16} /></a>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card project-${project.color}`} key={project.number}>
                <a className="project-image" href="#contact" aria-label={`Discuter du projet ${project.title}`}>
                  <img src={project.image} alt={project.alt} loading="lazy" />
                  <span className="project-open"><ArrowUpRight size={20} /></span>
                  <span className="project-count">{project.number}</span>
                </a>
                <div className="project-info">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="project-note">Les projets présentés sont des exemples de présentation, à remplacer par vos réalisations.</p>
        </section>

        <section className="education section-wrap" id="education">
          <div className="section-kicker"><span>05</span> Formation & certifications</div>
          <div className="education-layout">
            <div className="education-intro">
              <h2>Apprendre<br /><span>sans s’arrêter.</span></h2>
              <p>Mon parcours académique et les certifications qui nourrissent ma pratique.</p>
            </div>
            <EducationGroup title="Formations" items={formations} />
          </div>
          <EducationGroup title="Certifications" items={certificates} />
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-topline"><span>06 / Et maintenant ?</span><span>La suite s’écrit ensemble.</span></div>
          <div className="contact-layout">
            <div className="contact-copy">
              <h2>Une idée ?<br /><span>On en parle.</span></h2>
              <p>Une collaboration, une opportunité ou simplement envie d’échanger ? Ma boîte mail est ouverte.</p>
              <div className="contact-socials">
                <a className="contact-email" href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email} <ArrowUpRight size={17} /></a>
                <a
                  className="button-linkedin"
                  href="https://www.linkedin.com/in/marouane-firady-8924a8337/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Mon profil LinkedIn"
                  title="Mon profil LinkedIn"
                >
                  <span className="linkedin-mark" aria-hidden="true">in</span>
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label htmlFor="name">Votre nom</label>
              <input id="name" name="name" placeholder="Prénom et nom" autoComplete="name" required />
              <label htmlFor="email">Votre e-mail</label>
              <input id="email" name="email" type="email" placeholder="nom@exemple.com" autoComplete="email" required />
              <label htmlFor="message">Votre message</label>
              <textarea id="message" name="message" placeholder="Bonjour, parlons de…" rows="4" required />
              <button className="button button-lime" type="submit">Préparer mon e-mail <ArrowUpRight size={17} /></button>
              <span className="form-note">Votre application e-mail s’ouvrira avec le message prérempli.</span>
            </form>
          </div>
          <footer className="site-footer">
            <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-mark">{profile.firstName.slice(0, 1)}.</span><span>{profile.name}</span></a>
            <span>Fait avec soin · 2025</span>
            <a href="#home">Retour en haut <ArrowUpRight size={14} /></a>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App
