import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiBriefcaseAlt2 } from 'react-icons/bi';
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi';
import {
  RiCodeSSlashLine,
  RiFlowChart,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMoonClearLine,
  RiShieldCheckLine,
  RiSparklingLine,
  RiSunLine,
  RiTerminalBoxLine,
} from 'react-icons/ri';
import profile from './assets/nam.jpg';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

const strengths = [
  {
    icon: RiCodeSSlashLine,
    title: 'Product Execution',
    text: 'I turn ambiguous product asks into shippable features with clear scope, milestones, and release quality.',
  },
  {
    icon: RiFlowChart,
    title: 'Full-Stack Ownership',
    text: 'From React interfaces to Node APIs and MongoDB schema design, I build systems that stay maintainable under growth.',
  },
  {
    icon: RiShieldCheckLine,
    title: 'Security and Reliability',
    text: 'I ship with safeguards by auditing dependencies, validating inputs, and fixing vulnerabilities before they become incidents.',
  },
];

const projects = [
  {
    name: 'YourCityLives',
    period: 'Client Project',
    category: 'Frontend',
    problem: 'Engagement was low because key pages were slow and not responsive enough on mobile.',
    solution: 'Rebuilt core frontend with React and Tailwind, simplified interactions, and improved component performance.',
    impact: '40% higher engagement, 20% lower drop-off, and 30% increase in positive feedback.',
    stack: ['React', 'Tailwind', 'Vite', 'JavaScript'],
    url: 'https://github.com/Nam485/YourCityLives',
  },
  {
    name: 'HungryHive',
    period: 'MERN Application',
    category: 'Full Stack',
    problem: 'Food ordering flow needed secure role-based access and predictable state handling.',
    solution: 'Built a modular MERN architecture with token auth, role-specific journeys, and clean API boundaries.',
    impact: 'Delivered production-style ordering workflows with secure access and reusable feature modules.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    url: 'https://github.com/Nam485/HungryHIve',
  },
  {
    name: 'Form Builder',
    period: 'Productivity Tool',
    category: 'Frontend',
    problem: 'Form creation was repetitive and difficult to scale for new use cases.',
    solution: 'Created a configurable React form builder with reusable field blocks and predictable UX patterns.',
    impact: 'Reduced setup overhead for new forms and improved iteration speed for future changes.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS'],
    url: 'https://github.com/Nam485/Form-Generator-',
  },
];

const experience = [
  {
    role: 'SDE 1 - Cloud Applications',
    company: 'Schneider Electric Pvt Ltd',
    period: 'Jun 2025 - Present',
    points: [
      'Built scalable frontend modules with ShadCN UI and Zustand to improve maintainability.',
      'Owned critical features end-to-end across design, implementation, and release validation.',
      'Performed security remediation using SonarQube reports and dependency hardening.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Zenatix by Schneider Electric',
    period: 'Dec 2024 - Jun 2025',
    points: [
      'Improved data fetch efficiency and state persistence with Redux integration.',
      'Delivered Preferred Customer and Bulk Alarm flows used in business-critical modules.',
      'Led multilingual PoC using react-i18next and clear translation strategy for static content.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'MetaFox Technologies',
    period: 'Jun 2024 - Sep 2024',
    points: [
      'Delivered 6+ web applications across frontend and backend systems.',
      'Refactored older codebases to improve maintainability and reduce delivery friction.',
      'Worked directly with clients during reviews, demos, and feedback loops.',
    ],
  },
];

const skills = {
  frontend: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Zustand', 'React Query', 'Vitest'],
  backend: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs', 'JWT Auth'],
  tooling: ['GitHub', 'CI/CD', 'Docker', 'Vercel', 'Postman', 'SonarQube'],
};

const projectFilters = [
  { label: 'All', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Full Stack', value: 'full-stack' },
];

const floatingDots = [
  { id: 1, x: '8%', y: '20%', size: 'h-2.5 w-2.5', delay: 0 },
  { id: 2, x: '18%', y: '72%', size: 'h-2 w-2', delay: 0.2 },
  { id: 3, x: '38%', y: '16%', size: 'h-3 w-3', delay: 0.35 },
  { id: 4, x: '54%', y: '82%', size: 'h-2 w-2', delay: 0.5 },
  { id: 5, x: '72%', y: '24%', size: 'h-2.5 w-2.5', delay: 0.65 },
  { id: 6, x: '86%', y: '68%', size: 'h-3 w-3', delay: 0.8 },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const ChipGroup = ({ title, items, isDark }) => (
  <div className={`space-y-3 rounded-2xl p-6 shadow-sm ${isDark ? 'border border-slate-700 bg-slate-900/80' : 'border border-slate-200 bg-white'}`}>
    <h4 className={`text-sm font-semibold uppercase tracking-[0.16em] ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>{title}</h4>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={`rounded-full px-3 py-1 text-sm font-medium ${isDark ? 'border border-slate-700 bg-slate-800 text-slate-200' : 'border border-slate-200 bg-slate-50 text-slate-700'}`}
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const App = () => {
  const [imageError, setImageError] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return 'dark';
  });
  const isDark = theme === 'dark';

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') {
      return true;
    }
    const normalizedCategory = String(project.category || '').toLowerCase().replace(/\s+/g, '-');
    return normalizedCategory === activeFilter;
  });

  const visibleProjects = activeFilter === 'all' ? projects : filteredProjects;

  useEffect(() => {
    const isValidFilter = projectFilters.some((filter) => filter.value === activeFilter);
    if (!isValidFilter) {
      setActiveFilter('all');
    }
  }, [activeFilter]);

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const emailSubject = encodeURIComponent("Let's Connect");
  const emailBody = encodeURIComponent('Hi Namit,\n\nI want to connect with you.\n\n');
  const mailtoTemplate = `mailto:namitgoyal485@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  const gmailTemplate = `https://mail.google.com/mail/?view=cm&fs=1&to=namitgoyal485@gmail.com&su=${emailSubject}&body=${emailBody}`;

  const handleEmailClick = (event) => {
    event.preventDefault();
    // Gmail compose is more reliable in browsers where mailto handlers are not configured.
    window.open(gmailTemplate, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`min-h-screen font-['Sora',sans-serif] transition-colors duration-300 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-[#f8f7f4] text-slate-900'}`}
    >
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className={`absolute h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${isDark ? 'bg-cyan-400/10' : 'bg-cyan-500/15'}`}
          animate={{ x: mousePosition.x, y: mousePosition.y }}
          transition={{ type: 'spring', stiffness: 50, damping: 20, mass: 0.3 }}
        />
        <motion.div
          className={`absolute -left-24 top-16 h-96 w-96 rounded-full blur-3xl ${isDark ? 'bg-cyan-500/20' : 'bg-cyan-200/70'}`}
          animate={{ x: [0, 60, -20, 0], y: [0, -10, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full blur-3xl ${isDark ? 'bg-fuchsia-500/20' : 'bg-orange-200/70'}`}
          animate={{ x: [0, -50, 20, 0], y: [0, 40, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`absolute bottom-16 left-1/3 h-72 w-72 rounded-full blur-3xl ${isDark ? 'bg-emerald-500/20' : 'bg-emerald-200/60'}`}
          animate={{ x: [0, 40, -35, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div
          className={`absolute inset-0 ${isDark ? 'opacity-[0.12]' : 'opacity-[0.16]'}`}
          style={{
            backgroundImage:
              isDark
                ? 'linear-gradient(to right, rgba(125,211,252,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(125,211,252,0.22) 1px, transparent 1px)'
                : 'linear-gradient(to right, rgba(2,132,199,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,132,199,0.25) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <header className={`sticky top-0 z-30 border-b backdrop-blur-xl ${isDark ? 'border-slate-800 bg-slate-950/80' : 'border-slate-200/70 bg-white/80'}`}>
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className={`inline-flex items-center gap-2 text-base font-semibold tracking-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
            <span className={`rounded-md px-2 py-1 text-xs uppercase tracking-widest ${isDark ? 'bg-cyan-400 text-slate-950' : 'bg-slate-900 text-white'}`}>NG</span>
            Namit Goyal
          </a>
          <ul className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`text-sm font-medium transition ${isDark ? 'text-slate-300 hover:text-cyan-300' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition ${isDark ? 'border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800' : 'border-slate-300 bg-white text-slate-800 hover:border-slate-500'}`}
            >
              {isDark ? <RiSunLine size={16} /> : <RiMoonClearLine size={16} />}
              {isDark ? 'Light' : 'Dark'}
            </button>
            <a
              href="/Namit_Resume_updated.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${isDark ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300' : 'bg-slate-900 text-white hover:bg-slate-700'}`}
            >
              Resume
              <FiArrowUpRight size={16} />
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-6xl px-6 pb-20 pt-14 lg:px-8 lg:pt-20">
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative grid items-center gap-10 overflow-hidden rounded-3xl px-2 py-4 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div
            className="pointer-events-none absolute -left-10 bottom-8 h-44 w-44 opacity-40"
            style={{
              backgroundImage: isDark
                ? 'radial-gradient(circle, rgba(45,212,191,0.95) 1.2px, transparent 1.2px)'
                : 'radial-gradient(circle, rgba(14,116,144,0.65) 1.2px, transparent 1.2px)',
              backgroundSize: '12px 12px',
            }}
          />
          <div
            className="pointer-events-none absolute right-6 top-10 h-36 w-36 opacity-45"
            style={{
              backgroundImage: isDark
                ? 'radial-gradient(circle, rgba(125,211,252,0.9) 1px, transparent 1px)'
                : 'radial-gradient(circle, rgba(8,145,178,0.7) 1px, transparent 1px)',
              backgroundSize: '10px 10px',
            }}
          />
          {floatingDots.map((dot) => (
            <motion.span
              key={dot.id}
              className={`pointer-events-none absolute ${dot.size} rounded-full ${isDark ? 'bg-cyan-300/70' : 'bg-cyan-600/55'}`}
              style={{ left: dot.x, top: dot.y }}
              animate={{ y: [0, -8, 0], opacity: [0.35, 0.95, 0.35], scale: [1, 1.08, 1] }}
              transition={{ duration: 3.2, delay: dot.delay, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}

          <motion.div variants={fadeUp} className="space-y-7">
            <p className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] ${isDark ? 'border-slate-700 bg-slate-900 text-slate-300' : 'border-slate-200 bg-white text-slate-600'}`}>
              <RiSparklingLine size={14} className={isDark ? 'text-cyan-300' : 'text-cyan-600'} />
              Software Engineer | React + Node
            </p>
            <h1 className={`text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
              I design and ship software that solves real business bottlenecks.
            </h1>
            <p className={`max-w-2xl text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Full-stack engineer with production experience across frontend architecture, API design, and secure feature delivery.
              I focus on systems that are fast, maintainable, and measurable.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${isDark ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300' : 'bg-cyan-600 text-white hover:bg-cyan-500'}`}
              >
                Discuss a role
                <FiArrowUpRight size={16} />
              </a>
              <a
                href="#work"
                className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition ${isDark ? 'border-slate-700 bg-slate-900 text-slate-200 hover:border-cyan-400' : 'border-slate-300 bg-white text-slate-800 hover:border-slate-500'}`}
              >
                View case studies
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className={`rounded-2xl border px-4 py-3 shadow-sm ${isDark ? 'border-slate-700 bg-slate-900/90' : 'border-slate-200 bg-white/90'}`}>
                <p className={`text-xs uppercase tracking-[0.16em] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Mode</p>
                <p className={`mt-1 text-sm font-semibold ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>Build Fast. Refactor Hard.</p>
              </div>
              <div className={`rounded-2xl border px-4 py-3 shadow-sm ${isDark ? 'border-slate-700 bg-slate-900/90' : 'border-slate-200 bg-white/90'}`}>
                <p className={`text-xs uppercase tracking-[0.16em] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Favorite Stack</p>
                <p className={`mt-1 text-sm font-semibold ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>React + TS + Node</p>
              </div>
              <div className={`rounded-2xl border px-4 py-3 shadow-sm ${isDark ? 'border-slate-700 bg-slate-900/90' : 'border-slate-200 bg-white/90'}`}>
                <p className={`text-xs uppercase tracking-[0.16em] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Delivery Style</p>
                <p className={`mt-1 text-sm font-semibold ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>Product-First Engineering</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative mx-auto w-full max-w-sm">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-2xl bg-orange-300/80 blur-xl" />
            <div className="absolute -bottom-8 right-0 h-24 w-24 rounded-full bg-cyan-300/80 blur-xl" />
            <div className={`relative rounded-[2rem] border p-5 shadow-xl ${isDark ? 'border-slate-700 bg-slate-900 shadow-black/30' : 'border-slate-200 bg-white shadow-slate-300/40'}`}>
              <div
                className="pointer-events-none absolute right-6 top-6 h-20 w-20 rounded-full opacity-40"
                style={{
                  backgroundImage: isDark
                    ? 'radial-gradient(circle, rgba(125,211,252,0.9) 1px, transparent 1px)'
                    : 'radial-gradient(circle, rgba(8,145,178,0.9) 1px, transparent 1px)',
                  backgroundSize: '8px 8px',
                }}
              />
              {!imageError ? (
                <img
                  src={profile}
                  alt="Namit Goyal"
                  onError={() => setImageError(true)}
                  className="h-[420px] w-full rounded-[1.5rem] object-cover object-top brightness-[0.95] contrast-110 saturate-110"
                />
              ) : (
                <div className="flex h-[420px] w-full items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-800">
                  <span className="rounded-full border border-white/30 bg-white/10 px-8 py-6 text-5xl font-semibold text-white">
                    NG
                  </span>
                </div>
              )}
              <div className={`absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold shadow-md ${isDark ? 'border-slate-700 bg-slate-900 text-slate-200' : 'border-slate-200 bg-white text-slate-700'}`}>
                <RiTerminalBoxLine className={isDark ? 'text-cyan-300' : 'text-cyan-700'} />
                Shipping polished UI with robust architecture
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          id="about"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className={`relative mt-24 grid gap-8 overflow-hidden rounded-3xl border p-8 shadow-sm lg:grid-cols-2 ${isDark ? 'border-slate-700 bg-slate-900/80' : 'border-slate-200 bg-white'}`}
        >
          <div
            className="pointer-events-none absolute -left-8 -top-8 h-36 w-36 rounded-full opacity-60"
            style={{
              backgroundImage: isDark
                ? 'radial-gradient(circle, rgba(34,211,238,0.7) 1px, transparent 1px)'
                : 'radial-gradient(circle, rgba(8,145,178,0.7) 1px, transparent 1px)',
              backgroundSize: '9px 9px',
            }}
          />
          <motion.div variants={fadeUp} className="space-y-4">
            <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>About</p>
            <h2 className={`text-3xl font-semibold tracking-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>I care about outcomes, not just output.</h2>
            <p className={isDark ? 'text-slate-300' : 'text-slate-600'}>
              My work style is simple: understand the business goal, map the technical constraints, and ship software that survives scale.
              I work comfortably across frontend and backend, and I prefer owning complete feature lifecycles over isolated ticket execution.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-3">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className={`rounded-2xl border p-4 ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}>
                  <Icon className={isDark ? 'text-cyan-300' : 'text-cyan-700'} size={20} />
                  <h3 className={`mt-3 text-base font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{item.title}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{item.text}</p>
                </article>
              );
            })}
          </motion.div>
        </motion.section>

        <motion.section
          id="work"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-24"
        >
          <motion.div variants={fadeUp} className="mb-8 space-y-3">
            <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>Work</p>
            <h2 className={`text-3xl font-semibold tracking-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Selected case studies</h2>
            <div className="flex flex-wrap gap-2 pt-2">
              {projectFilters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition ${
                    activeFilter === filter.value
                      ? isDark
                        ? 'bg-cyan-400 text-slate-950'
                        : 'bg-slate-900 text-white'
                      : isDark
                        ? 'border border-slate-700 bg-slate-900 text-slate-300 hover:border-cyan-400'
                        : 'border border-slate-300 bg-white text-slate-700 hover:border-slate-500'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </motion.div>
          <div key={`projects-${activeFilter}`} className="grid gap-5 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <motion.article
                key={`${activeFilter}-${project.name}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className={`flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm ${isDark ? 'border-slate-700 bg-[#0b1220]' : 'border-slate-200 bg-[#f9fafb]'}`}
              >
                <div className={`flex items-center justify-between border-b px-4 py-3 ${isDark ? 'border-slate-700 bg-slate-900/70' : 'border-slate-200 bg-white/90'}`}>
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className={`rounded-md px-2 py-1 font-mono text-[11px] ${isDark ? 'bg-slate-800 text-cyan-300' : 'bg-slate-100 text-slate-700'}`}>
                    {project.name.toLowerCase().replace(/\s+/g, '-')}.tsx
                  </span>
                </div>

                <div className={`px-4 py-4 font-mono text-[12px] leading-6 sm:text-[13px] ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  <div className="grid grid-cols-[28px_1fr] gap-3">
                    <span className={`select-none text-right ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>1</span>
                    <span>
                      <span className={isDark ? 'text-cyan-300' : 'text-cyan-700'}>const</span> project = <span className={isDark ? 'text-emerald-300' : 'text-emerald-700'}>'{project.name}'</span>;
                    </span>
                  </div>
                  <div className="grid grid-cols-[28px_1fr] gap-3">
                    <span className={`select-none text-right ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>2</span>
                    <span>
                      <span className={isDark ? 'text-cyan-300' : 'text-cyan-700'}>const</span> type = <span className={isDark ? 'text-emerald-300' : 'text-emerald-700'}>'{project.period}'</span>;
                    </span>
                  </div>
                  <div className="grid grid-cols-[28px_1fr] gap-3">
                    <span className={`select-none text-right ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>3</span>
                    <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>// Problem</span>
                  </div>
                  <div className="grid grid-cols-[28px_1fr] gap-3">
                    <span className={`select-none text-right ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>4</span>
                    <span>{project.problem}</span>
                  </div>
                  <div className="grid grid-cols-[28px_1fr] gap-3">
                    <span className={`select-none text-right ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>5</span>
                    <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>// Solution</span>
                  </div>
                  <div className="grid grid-cols-[28px_1fr] gap-3">
                    <span className={`select-none text-right ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>6</span>
                    <span>{project.solution}</span>
                  </div>
                  <div className="grid grid-cols-[28px_1fr] gap-3">
                    <span className={`select-none text-right ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>7</span>
                    <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>// Impact</span>
                  </div>
                  <div className="grid grid-cols-[28px_1fr] gap-3">
                    <span className={`select-none text-right ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>8</span>
                    <span>{project.impact}</span>
                  </div>
                </div>

                <div className={`border-t px-4 py-3 ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                  <div className="mb-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className={`rounded-full border px-3 py-1 text-xs font-semibold ${isDark ? 'border-slate-700 bg-slate-800 text-slate-200' : 'border-slate-200 bg-slate-50 text-slate-700'}`}>
                      {tech}
                    </span>
                  ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${isDark ? 'text-cyan-300 hover:text-cyan-200' : 'text-cyan-700 hover:text-cyan-600'}`}
                  >
                    View repository
                    <FiArrowUpRight size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
          {activeFilter !== 'all' && visibleProjects.length === 0 && (
            <div className={`mt-5 rounded-2xl border p-6 text-center ${isDark ? 'border-slate-700 bg-slate-900/70 text-slate-300' : 'border-slate-200 bg-white text-slate-600'}`}>
              <p className="text-sm">No case studies in this filter yet.</p>
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`mt-3 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition ${isDark ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300' : 'bg-slate-900 text-white hover:bg-slate-700'}`}
              >
                Show all projects
              </button>
            </div>
          )}
        </motion.section>

        <motion.section
          id="experience"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-24"
        >
          <motion.div variants={fadeUp} className="mb-8 space-y-3">
            <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>Experience</p>
            <h2 className={`text-3xl font-semibold tracking-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Professional journey</h2>
          </motion.div>
          <div className="space-y-4">
            {experience.map((item) => (
              <motion.article key={item.role} variants={fadeUp} className={`rounded-2xl border p-6 shadow-sm ${isDark ? 'border-slate-700 bg-slate-900/80' : 'border-slate-200 bg-white'}`}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{item.role}</h3>
                    <p className={isDark ? 'text-slate-300' : 'text-slate-600'}>{item.company}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>{item.period}</span>
                </div>
                <ul className={`mt-4 space-y-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <BiBriefcaseAlt2 size={16} className={`mt-0.5 shrink-0 ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-24"
        >
          <motion.div variants={fadeUp} className="mb-8 space-y-3">
            <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>Stack</p>
            <h2 className={`text-3xl font-semibold tracking-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Technologies I use in production</h2>
          </motion.div>
          <motion.div variants={fadeUp} className="grid gap-4 lg:grid-cols-3">
            <ChipGroup title="Frontend" items={skills.frontend} isDark={isDark} />
            <ChipGroup title="Backend" items={skills.backend} isDark={isDark} />
            <ChipGroup title="Cloud and Tooling" items={skills.tooling} isDark={isDark} />
          </motion.div>
        </motion.section>

        <motion.section
          id="contact"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-24 rounded-3xl border border-slate-200 bg-slate-900 p-8 text-slate-100 shadow-xl shadow-slate-400/20"
        >
          <motion.div variants={fadeUp} className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">Contact</p>
              <h2 className="text-3xl font-semibold tracking-tight">Open to software engineering roles and high-impact freelance work.</h2>
              <p className="max-w-2xl text-slate-300">
                Share your role description, product roadmap, or current engineering bottleneck.
                I will respond with a focused plan for next steps.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={mailtoTemplate}
                  onClick={handleEmailClick}
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  <FiMail size={16} />
                  Email me
                </a>
                <a
                  href="https://www.linkedin.com/in/namit-goyal-743315227/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
                >
                  <RiLinkedinBoxLine size={16} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Nam485"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
                >
                  <RiGithubLine size={16} />
                  GitHub
                </a>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-700 bg-slate-800 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Direct</p>
              <a href={mailtoTemplate} onClick={handleEmailClick} className="flex items-center gap-2 text-sm text-slate-200 hover:text-cyan-300">
                <FiMail size={16} />
                namitgoyal485@gmail.com
              </a>
              <a href="tel:+917023735485" className="flex items-center gap-2 text-sm text-slate-200 hover:text-cyan-300">
                <FiPhone size={16} />
                +91 7023735485
              </a>
              <p className="flex items-center gap-2 text-sm text-slate-200">
                <FiMapPin size={16} />
                Gurugram, India
              </p>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <footer className={`border-t py-6 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-white'}`}>
        <div className={`mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-6 text-sm sm:flex-row sm:items-center lg:px-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          <p>© 2026 Namit Goyal. Designed and engineered with React, Tailwind, and Framer Motion.</p>
          <p>Built for clarity, speed, and impact.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
