import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  Terminal, 
  BookOpen, 
  Target, 
  Award, 
  Send, 
  ChevronRight,
  Menu,
  X,
  User,
  Heart,
  Palette,
  Briefcase,
  MapPin,
  Users,
  Lightbulb,
  Search,
  FileText,
  Download,
  CheckCircle2,
  Sparkles,
  Layers,
  Network,
  Server,
  Database,
  Eye
} from 'lucide-react';

// --- Types ---
interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  shortDesc: string;
  fullDesc: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  category: string;
  image: string;
  description: string;
  skills: string[];
}

// --- Data ---
const projectsData: ProjectItem[] = [
  {
    id: 'ngo-platform',
    title: 'NGO Donation Platform',
    subtitle: 'Full-Stack Community Support System',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'DBMS'],
    shortDesc: 'A web platform designed to bridge the gap between donors and underprivileged communities with transparent item donation tracking.',
    fullDesc: 'The NGO Donation Platform (Helping Hands / Helping Connect) connects donors directly with verified NGOs and needy individuals. The platform enables multi-role access (Donors, NGOs, Needy, and Administrators) to request essentials, track fulfillment in real-time, and eliminate intermediaries for maximum social impact.',
    features: [
      'Multi-role authentication for Donors, NGOs, Needy individuals, and Admins',
      'Real-time item donation tracking from pledge to delivery',
      'Interactive request feed with categories for food, clothing, and books',
      'Responsive dashboard interface built with React & Tailwind CSS',
      'Structured relational database schema for transparent logging'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js / Express (Planned)', 'DBMS'],
    githubUrl: 'https://github.com/aman-narnolia/Portfolio',
    liveUrl: '#'
  },
  {
    id: 'pollution-monitor',
    title: 'Smart Pollution Detection System',
    subtitle: 'IoT Environmental Monitoring Solution',
    image: '/ece.jpeg',
    tags: ['IoT', 'Arduino', 'C/C++', 'Hardware Sensors'],
    shortDesc: 'An IoT-based environmental monitor built with Arduino, MQ-135 gas sensor, and high-sensitivity noise detection modules.',
    fullDesc: 'An embedded hardware-software prototype engineered to measure real-time environmental pollutants and noise levels. It utilizes microcontrollers coupled with MQ-135 air quality gas sensors and sound detection modules to provide instant telemetry and alert triggers when safety thresholds are breached.',
    features: [
      'Real-time air pollution sensing (CO2, Smoke, Ammonia, Benzene) via MQ-135',
      'Acoustic noise monitoring using high-sensitivity sound microphone module',
      'Microcontroller firmware coded in C/C++ for Arduino architecture',
      'Automated visual/sound threshold alert system for hazardous conditions',
      'Serial data output capability for environmental metric logging'
    ],
    techStack: ['Arduino', 'C / C++', 'MQ-135 Gas Sensor', 'Sound Sensor Module', 'Embedded Electronics'],
    githubUrl: 'https://github.com/aman-narnolia',
    liveUrl: '#'
  }
];

const certificatesData: CertificateItem[] = [
  {
    id: 'cert-python',
    title: 'Certification in Python',
    issuer: 'Professional Training & Academic Certification',
    date: 'February 2026',
    credentialId: 'PY-2026-8849',
    category: 'Programming & Logic',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1000&auto=format&fit=crop',
    description: 'Comprehensive certification covering Python core fundamentals, object-oriented programming, data structures, algorithms, and file handling.',
    skills: ['Python 3', 'Data Structures', 'OOP', 'Algorithm Design', 'Scripting']
  },
  {
    id: 'cert-ai',
    title: 'Certification in Artificial Intelligence',
    issuer: 'Advanced Tech Program',
    date: 'March 2026',
    credentialId: 'AI-2026-4102',
    category: 'Emerging Tech',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
    description: 'Focused training on the foundations of artificial intelligence, search algorithms, problem-solving heuristics, neural networks, and modern AI paradigms.',
    skills: ['AI Concepts', 'Search Algorithms', 'Foundations of ML', 'Logic & Reasoning']
  },
  {
    id: 'cert-web',
    title: 'Web Technologies & Frontend',
    issuer: 'Academic Course Certification',
    date: 'December 2025',
    credentialId: 'WEB-2025-9321',
    category: 'Frontend Engineering',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
    description: 'Mastery in building responsive, accessible web layouts using modern semantic HTML5, CSS3, DOM manipulation, and responsive web principles.',
    skills: ['HTML5', 'CSS3', 'JavaScript DOM', 'Responsive Design', 'Web Standards']
  },
  {
    id: 'cert-iot',
    title: 'Basic Electronics & IoT Workshop',
    issuer: 'Hardware & Systems Practical Lab',
    date: 'November 2025',
    credentialId: 'IOT-2025-1044',
    category: 'Hardware & IoT',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    description: 'Hands-on hardware certification covering electronic components, circuit design, sensor interfacing, microcontrollers, and IoT architectures.',
    skills: ['Arduino', 'Circuit Design', 'Sensor Interfacing', 'Digital Logic', 'Microcontrollers']
  }
];

// --- Navbar Component ---
const Navbar = ({ onOpenCv }: { onOpenCv: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Technical Skills', href: '#skills' },
    { name: 'Soft Skills', href: '#soft-skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg cursor-pointer"
        >
          AN
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="text-xs uppercase tracking-widest font-bold text-stone-400 hover:text-accent transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          
          <motion.button
            onClick={onOpenCv}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-4 py-1.5 bg-accent/10 text-accent hover:bg-accent hover:text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center space-x-1.5"
          >
            <FileText size={13} />
            <span>CV</span>
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden shadow-lg"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-medium text-gray-700 hover:text-accent"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => { setIsOpen(false); onOpenCv(); }}
                className="w-full py-2.5 bg-accent text-white rounded-xl text-sm font-bold uppercase tracking-wider flex items-center justify-center space-x-2"
              >
                <FileText size={16} />
                <span>View Full CV</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle, center = false }: { children: React.ReactNode, subtitle?: string, center?: boolean }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-xs uppercase tracking-[0.2em] font-bold text-stone-400 mb-3"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`text-2xl md:text-3xl font-display font-bold text-natural ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const TypingEffect = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length && !reverse) {
      const stayTimeout = setTimeout(() => setReverse(true), 3500);
      return () => clearTimeout(stayTimeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 35 : 70);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <span className="text-accent font-semibold uppercase tracking-tight">
      {texts[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// --- Main App Component ---
export default function App() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [activeCertificate, setActiveCertificate] = useState<CertificateItem | null>(null);
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <div className="font-sans text-natural bg-background-natural min-h-screen selection:bg-accent/20 selection:text-accent">
      <Navbar onOpenCv={() => setIsCvOpen(true)} />

      {/* 1. HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">
        {/* Ambient subtle background glow */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Column */}
          <motion.div
            className="md:col-span-7"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6,
                  staggerChildren: 0.15
                }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Sparkles size={14} />
              <span>Welcome to my portfolio</span>
            </motion.div>

            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-natural leading-tight mb-4"
            >
              Aman <br className="hidden sm:inline" />
              <span className="text-accent">Narnolia</span>
            </motion.h1>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-lg md:text-xl text-stone-500 font-medium mb-6 min-h-[32px] flex items-center"
            >
              <TypingEffect texts={[
                "An Aspiring Software Engineer",
                "Computer Science Undergraduate @ LPU",
                "Web Developer & IoT Explorer"
              ]} />
            </motion.div>

            {/* Detailed Description replacing 'About Me' */}
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-stone-600 text-base md:text-lg mb-8 max-w-xl leading-relaxed"
            >
              Hello! I am a <span className="text-natural font-semibold">Computer Science & Engineering student</span> at Lovely Professional University, originally from Sikar, Rajasthan. Passionate about coding and technology, I focus on building responsive web solutions, exploring IoT integrations, and solving real-world challenges through continuous learning.
            </motion.p>

            {/* Action Buttons: Explore Work & CV Modal */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects" 
                className="px-7 py-3 bg-accent text-white rounded-full font-semibold shadow-sm hover:opacity-90 transition-all flex items-center space-x-2"
              >
                <span>Explore My Work</span>
                <ChevronRight size={18} />
              </motion.a>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsCvOpen(true)}
                className="px-7 py-3 bg-white text-natural border border-stone-300 rounded-full font-semibold hover:bg-stone-50 transition-all flex items-center space-x-2 shadow-xs cursor-pointer"
              >
                <FileText size={18} className="text-accent" />
                <span>View CV</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image Column - Smaller Size with elegant styling */}
          <motion.div
            className="md:col-span-5 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 sm:w-72 md:w-80">
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-xl bg-white p-2 border border-stone-200"
              >
                <div className="aspect-[4/5] bg-stone-100 rounded-xl overflow-hidden">
                  <img 
                    src="/aman.png" 
                    alt="Aman Narnolia" 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                      (e.target as HTMLImageElement).classList.add('grayscale');
                    }}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              
              {/* Subtle Decorative Accents */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-accent/40 rounded-tl-xl -z-10" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-accent/40 rounded-br-xl -z-10" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. TECHNICAL SKILLS (Replaces old About section with two columns) */}
      <section id="skills" className="py-24 px-6 bg-white border-y border-stone-200/50">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading subtitle="Technologies I work with and concepts I am actively mastering.">
            Technical Skills
          </SectionHeading>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Column 1: Skills Learned */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-stone-50/70 rounded-3xl p-8 border border-stone-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-stone-200">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center font-bold">
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-natural">Skills Learned</h3>
                    <p className="text-xs text-stone-500 font-medium">Foundations & practical proficiencies</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Languages */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-stone-400 mb-2.5">
                      <Code2 size={14} className="text-accent" />
                      <span>Languages</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'C', 'JavaScript'].map((skill) => (
                        <span key={skill} className="px-3.5 py-1.5 bg-white border border-stone-200 text-natural text-sm font-semibold rounded-xl shadow-2xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Frontend */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-stone-400 mb-2.5">
                      <Palette size={14} className="text-accent" />
                      <span>Frontend</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['HTML5', 'CSS3'].map((skill) => (
                        <span key={skill} className="px-3.5 py-1.5 bg-white border border-stone-200 text-natural text-sm font-semibold rounded-xl shadow-2xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Backend & Databases */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-stone-400 mb-2.5">
                      <Database size={14} className="text-accent" />
                      <span>Backend & Databases</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['DBMS (Database Management Systems)'].map((skill) => (
                        <span key={skill} className="px-3.5 py-1.5 bg-white border border-stone-200 text-natural text-sm font-semibold rounded-xl shadow-2xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Developer Tools & Hardware */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-stone-400 mb-2.5">
                      <Cpu size={14} className="text-accent" />
                      <span>Developer Tools & Hardware</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Git', 'GitHub', 'VS Code', 'Arduino / IoT Sensors'].map((skill) => (
                        <span key={skill} className="px-3.5 py-1.5 bg-white border border-stone-200 text-natural text-sm font-semibold rounded-xl shadow-2xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-200/60 text-xs text-stone-400 italic">
                ✓ Built course projects, labs, and academic assignments with these tools.
              </div>
            </motion.div>

            {/* Column 2: Currently Learning */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-accent/5 rounded-3xl p-8 border border-accent/20 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-accent/15">
                  <div className="w-10 h-10 bg-accent text-white rounded-xl flex items-center justify-center font-bold">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-natural">Currently Learning</h3>
                    <p className="text-xs text-accent font-semibold">Active focus & coursework</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Languages & Core Systems */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-accent mb-2.5">
                      <Terminal size={14} />
                      <span>Advanced Languages & OOP</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['C++', 'OOPs (Object Oriented Programming)'].map((skill) => (
                        <span key={skill} className="px-3.5 py-1.5 bg-white border border-accent/30 text-natural text-sm font-semibold rounded-xl shadow-2xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Data Structures & Algorithms */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-accent mb-2.5">
                      <Layers size={14} />
                      <span>Data Structures & Problem Solving</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['DSA (Data Structures & Algorithms)'].map((skill) => (
                        <span key={skill} className="px-3.5 py-1.5 bg-white border border-accent/30 text-natural text-sm font-semibold rounded-xl shadow-2xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Systems & Infrastructure */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-accent mb-2.5">
                      <Server size={14} />
                      <span>Virtualization & Cloud Foundations</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Virtualization'].map((skill) => (
                        <span key={skill} className="px-3.5 py-1.5 bg-white border border-accent/30 text-natural text-sm font-semibold rounded-xl shadow-2xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Networking */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-accent mb-2.5">
                      <Network size={14} />
                      <span>Networks & Protocols</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Basics of Computer Networks'].map((skill) => (
                        <span key={skill} className="px-3.5 py-1.5 bg-white border border-accent/30 text-natural text-sm font-semibold rounded-xl shadow-2xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-accent/15 text-xs text-accent font-medium italic">
                ⚡ Continuously expanding engineering depth through university lectures and coding practices.
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* 3. SOFT SKILLS (STRENGTHS) */}
      <section id="soft-skills" className="py-24 px-6 bg-stone-50/50">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading center subtitle="Interpersonal strengths and core mindset I bring to engineering projects.">
            Soft Skills & Strengths
          </SectionHeading>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { staggerChildren: 0.1 } 
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            <SoftSkillCard 
              title="Problem Solving" 
              desc="Approaching complex challenges with structured logic and persistent debugging."
              icon={<Target size={22} />}
            />
            <SoftSkillCard 
              title="Teamwork" 
              desc="Collaborating smoothly with peers, sharing feedback, and aligning on common goals."
              icon={<Users size={22} />}
            />
            <SoftSkillCard 
              title="Analytical Thinking" 
              desc="Deconstructing broad engineering requirements into clean, manageable components."
              icon={<Lightbulb size={22} />}
            />
            <SoftSkillCard 
              title="Discipline" 
              desc="Consistent daily coding habits, rigorous coursework focus, and reliable execution."
              icon={<Award size={22} />}
            />
            <SoftSkillCard 
              title="Curiosity" 
              desc="Eager to explore new technologies, asking 'how' and 'why' to expand knowledge."
              icon={<Search size={22} />}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* 4. EDUCATION */}
      <section id="education" className="py-24 px-6 bg-white border-y border-stone-200/50">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading subtitle="Academic background and educational journey.">
            Education
          </SectionHeading>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* College */}
            <EducationCard 
              institution="Lovely Professional University"
              degree="Bachelor's in Computer Science and Engineering"
              duration="2025 - Ongoing"
              location="Phagwara, Punjab"
              icon={<Briefcase className="text-accent" />}
              status="2025 - Ongoing"
            />
            {/* School */}
            <EducationCard 
              institution="Vinayak Convent Senior Secondary School"
              degree="Senior Secondary Schooling"
              duration="2023"
              location="Sikar, Rajasthan"
              icon={<BookOpen className="text-accent" />}
              status="2023"
            />
          </div>
        </motion.div>
      </section>

      {/* 5. CERTIFICATES SECTION (4 IN A ROW) */}
      <section id="certificates" className="py-24 px-6 bg-stone-50/50">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-stone-400 mb-3">
                Certifications
              </h2>
              <p className="text-2xl md:text-3xl font-display font-bold text-natural">
                Verified Credentials & Learning Badges
              </p>
            </div>
            <p className="text-xs text-stone-500 font-medium mt-2 md:mt-0">
              Click any certificate card to preview full document
            </p>
          </div>

          {/* 4 in a row desktop grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificatesData.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -6, boxShadow: "0 12px 30px -10px rgba(0,0,0,0.08)" }}
                onClick={() => setActiveCertificate(cert)}
                className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-2xs cursor-pointer group transition-all flex flex-col"
              >
                {/* Thumbnail Preview Banner */}
                <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden border-b border-stone-100">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-natural text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center space-x-1">
                      <Eye size={13} />
                      <span>Preview</span>
                    </span>
                  </div>
                  <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 bg-white/90 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-accent rounded-md shadow-2xs">
                    {cert.date}
                  </span>
                </div>

                {/* Card Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-bold text-natural text-base group-hover:text-accent transition-colors line-clamp-2 mb-1.5">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-stone-500 font-medium mb-3">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-accent font-semibold">
                    <span>View Certificate</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6. PROJECTS (CLICKABLE DETAIL MODALS) */}
      <section id="projects" className="py-24 px-6 bg-white border-y border-stone-200/50">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-stone-400 mb-3">
                Featured Projects
              </h2>
              <p className="text-2xl md:text-3xl font-display font-bold text-natural">
                Real-World Applications & Prototypes
              </p>
            </div>
            <p className="text-xs text-stone-500 font-medium mt-2 md:mt-0">
              Click any project to view architecture, features & links
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
                onClick={() => setActiveProject(project)}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-2xs cursor-pointer group transition-all flex flex-col"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 border-b border-stone-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-accent/15 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-natural text-xs font-bold px-4 py-2 rounded-full shadow-md flex items-center space-x-1.5">
                      <Eye size={14} />
                      <span>View Details</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 bg-stone-100 text-stone-600 text-[10px] font-bold uppercase rounded-md tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-display font-bold text-natural mb-2 group-hover:text-accent transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ChevronRight size={18} className="text-accent group-hover:translate-x-1.5 transition-transform" />
                    </h3>
                    
                    <p className="text-stone-500 text-sm leading-relaxed mb-4">
                      {project.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-accent font-bold uppercase tracking-wider">
                    <span>Click for full specifications</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 7. CONTACT SECTION (With Phone Number Added) */}
      <section id="contact" className="py-24 px-6 bg-stone-50/50">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionHeading center subtitle="Feel free to connect for internships, collaboration, or queries.">
              Contact & Connect
            </SectionHeading>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Phone Number */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
              <ContactInfo 
                icon={<Phone className="text-accent" />} 
                label="Contact No." 
                value="+91 98765 43210" 
                href="tel:+919876543210" 
              />
            </motion.div>

            {/* Email */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <ContactInfo 
                icon={<Mail className="text-accent" />} 
                label="Email" 
                value="narnoliaaman07@gmail.com" 
                href="mailto:narnoliaaman07@gmail.com" 
              />
            </motion.div>

            {/* LinkedIn */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <ContactInfo 
                icon={<Linkedin className="text-accent" />} 
                label="LinkedIn" 
                value="aman-narnolia-07aug06" 
                href="https://www.linkedin.com/in/aman-narnolia-07aug06/" 
              />
            </motion.div>

            {/* GitHub */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <ContactInfo 
                icon={<Github className="text-accent" />} 
                label="GitHub" 
                value="aman-narnolia" 
                href="https://github.com/aman-narnolia" 
              />
            </motion.div>

            {/* Location */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
              <ContactInfo 
                icon={<MapPin className="text-accent" />} 
                label="Location" 
                value="Jalandhar / Sikar, India" 
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-14 border-t border-stone-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
              AN
            </div>
            <p className="text-stone-500 text-xs font-semibold">
              © {new Date().getFullYear()} Aman Narnolia. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6 text-stone-400">
            <a href="https://github.com/aman-narnolia" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/aman-narnolia-07aug06/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><Linkedin size={18} /></a>
            <a href="mailto:narnoliaaman07@gmail.com" className="hover:text-accent transition-colors"><Mail size={18} /></a>
          </div>
        </div>
      </footer>

      {/* --- MODAL 1: PROJECT DETAILS MODAL --- */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
            >
              {/* Header Image */}
              <div className="relative aspect-[16/8] bg-stone-100 overflow-hidden shrink-0">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-stone-900/70 hover:bg-stone-900 text-white rounded-full flex items-center justify-center transition-all cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {activeProject.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-bold uppercase rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-natural">
                    {activeProject.title}
                  </h3>
                  <p className="text-stone-500 text-sm font-medium">
                    {activeProject.subtitle}
                  </p>
                </div>

                {/* Full Description */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-stone-400 mb-2">
                    Project Overview
                  </h4>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                    {activeProject.fullDesc}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-stone-400 mb-3">
                    Key Features & Implementations
                  </h4>
                  <ul className="space-y-2">
                    {activeProject.features.map((feat, i) => (
                      <li key={i} className="flex items-start text-sm text-stone-600">
                        <CheckCircle2 size={16} className="text-accent mr-2.5 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-stone-400 mb-3">
                    Technologies & Architecture
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-stone-100 text-natural text-xs font-semibold rounded-lg border border-stone-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-stone-100 flex flex-wrap gap-3">
                  {activeProject.githubUrl && (
                    <a 
                      href={activeProject.githubUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="px-5 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors inline-flex items-center space-x-2"
                    >
                      <Github size={15} />
                      <span>View Source Code</span>
                    </a>
                  )}
                  {activeProject.liveUrl && activeProject.liveUrl !== '#' && (
                    <a 
                      href={activeProject.liveUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="px-5 py-2.5 bg-accent text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-colors inline-flex items-center space-x-2"
                    >
                      <ExternalLink size={15} />
                      <span>Live Preview</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- MODAL 2: CERTIFICATE PREVIEW MODAL --- */}
      <AnimatePresence>
        {activeCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCertificate(null)}
              className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col"
            >
              {/* Certificate Image / Skeleton Preview */}
              <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden border-b border-stone-200">
                <img 
                  src={activeCertificate.image} 
                  alt={activeCertificate.title} 
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveCertificate(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-stone-900/70 hover:bg-stone-900 text-white rounded-full flex items-center justify-center transition-all cursor-pointer"
                >
                  <X size={18} />
                </button>
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-stone-900/80 backdrop-blur-xs text-white text-xs font-semibold rounded-lg">
                  {activeCertificate.category}
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-natural mb-1">
                    {activeCertificate.title}
                  </h3>
                  <p className="text-accent text-sm font-semibold">
                    {activeCertificate.issuer} • {activeCertificate.date}
                  </p>
                  {activeCertificate.credentialId && (
                    <p className="text-xs text-stone-400 font-mono mt-1">
                      Credential ID: {activeCertificate.credentialId}
                    </p>
                  )}
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-stone-400 mb-2">
                    Credential Scope
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {activeCertificate.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-stone-400 mb-2.5">
                    Skills Validated
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCertificate.skills.map((s) => (
                      <span key={s} className="px-2.5 py-1 bg-stone-100 text-natural text-xs font-semibold rounded-md border border-stone-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex justify-end">
                  <button
                    onClick={() => setActiveCertificate(null)}
                    className="px-6 py-2 bg-accent text-white rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- MODAL 3: CV / RESUME VIEWER MODAL --- */}
      <AnimatePresence>
        {isCvOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCvOpen(false)}
              className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-6 max-h-[90vh] flex flex-col"
            >
              {/* CV Modal Header */}
              <div className="px-8 py-5 bg-stone-50 border-b border-stone-200 flex items-center justify-between shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent/10 text-accent rounded-xl">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-natural text-lg">
                      Curriculum Vitae (CV)
                    </h3>
                    <p className="text-xs text-stone-500">Aman Narnolia • B.Tech CSE</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2 bg-accent text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 hover:opacity-90 transition-all cursor-pointer shadow-xs"
                  >
                    <Download size={14} />
                    <span>Download / Print</span>
                  </button>
                  <button
                    onClick={() => setIsCvOpen(false)}
                    className="w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* CV Document Skeleton Body */}
              <div className="p-8 overflow-y-auto space-y-8 text-stone-700 bg-white font-sans text-sm">
                
                {/* CV Header */}
                <div className="text-center pb-6 border-b border-stone-200">
                  <h1 className="text-3xl font-display font-bold text-natural mb-1">
                    AMAN NARNOLIA
                  </h1>
                  <p className="text-accent font-semibold text-sm mb-3">
                    Computer Science Undergraduate | Software Engineering Enthusiast
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-xs text-stone-500">
                    <span>📍 Jalandhar, Punjab / Sikar, Rajasthan</span>
                    <span>✉️ narnoliaaman07@gmail.com</span>
                    <span>📞 +91 98765 43210</span>
                    <span>🔗 linkedin.com/in/aman-narnolia-07aug06</span>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h2 className="text-xs uppercase tracking-widest font-bold text-accent mb-2 pb-1 border-b border-stone-200">
                    Professional Summary
                  </h2>
                  <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
                    First-year Computer Science and Engineering undergraduate at Lovely Professional University with strong foundations in Python, C, JavaScript, and Web Development. Passionate about building impactful software, exploring IoT solutions, and applying structured problem-solving skills to real-world engineering projects.
                  </p>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-xs uppercase tracking-widest font-bold text-accent mb-3 pb-1 border-b border-stone-200">
                    Education
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-natural">Lovely Professional University</h3>
                        <p className="text-xs text-stone-600">Bachelor of Technology (B.Tech) - Computer Science & Engineering</p>
                        <p className="text-xs text-stone-400">Phagwara, Punjab</p>
                      </div>
                      <span className="text-xs font-bold text-accent bg-accent/10 px-2.5 py-0.5 rounded-md">
                        2025 - Ongoing
                      </span>
                    </div>

                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-natural">Vinayak Convent Senior Secondary School</h3>
                        <p className="text-xs text-stone-600">Senior Secondary Education</p>
                        <p className="text-xs text-stone-400">Sikar, Rajasthan</p>
                      </div>
                      <span className="text-xs font-bold text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded-md">
                        2023
                      </span>
                    </div>
                  </div>
                </div>

                {/* Technical Skills */}
                <div>
                  <h2 className="text-xs uppercase tracking-widest font-bold text-accent mb-3 pb-1 border-b border-stone-200">
                    Technical Skills
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-bold text-natural block mb-1">Languages:</span>
                      <p className="text-stone-600">Python, C, JavaScript, C++ (Learning)</p>
                    </div>
                    <div>
                      <span className="font-bold text-natural block mb-1">Frontend & Web:</span>
                      <p className="text-stone-600">HTML5, CSS3, JavaScript DOM, React</p>
                    </div>
                    <div>
                      <span className="font-bold text-natural block mb-1">Databases & Systems:</span>
                      <p className="text-stone-600">DBMS (Relational Databases), Virtualization (Learning)</p>
                    </div>
                    <div>
                      <span className="font-bold text-natural block mb-1">Developer Tools & Hardware:</span>
                      <p className="text-stone-600">Git, GitHub, VS Code, Arduino, IoT Sensors</p>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h2 className="text-xs uppercase tracking-widest font-bold text-accent mb-3 pb-1 border-b border-stone-200">
                    Key Projects
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-natural">NGO Donation Platform (Helping Connect)</h3>
                        <span className="text-xs text-stone-400">React, TypeScript, Tailwind</span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Built a full-featured web platform connecting donors with underprivileged communities and NGOs. Features item donation logging, category-based request feeds, and multi-tier user access.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-natural">Smart Pollution Detection System</h3>
                        <span className="text-xs text-stone-400">Arduino, C++, IoT Sensors</span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Engineered an IoT prototype using Arduino, MQ-135 air quality sensor, and microphone sound sensors to monitor environmental metrics and sound alarms during hazardous conditions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h2 className="text-xs uppercase tracking-widest font-bold text-accent mb-3 pb-1 border-b border-stone-200">
                    Certifications & Achievements
                  </h2>
                  <ul className="list-disc list-inside space-y-1 text-xs text-stone-600">
                    <li><strong className="text-natural">Certification in Python</strong> – Feb 2026</li>
                    <li><strong className="text-natural">Certification in Artificial Intelligence</strong> – Mar 2026</li>
                    <li><strong className="text-natural">Web Technologies & Frontend Development</strong> – Dec 2025</li>
                    <li><strong className="text-natural">Basic Electronics & IoT Systems Workshop</strong> – Nov 2025</li>
                  </ul>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

// --- Helper Components ---

const SoftSkillCard = ({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    whileHover={{ y: -5, boxShadow: "0 10px 25px -10px rgba(0,0,0,0.06)" }}
    className="p-6 bg-white border border-stone-200/80 rounded-2xl shadow-2xs transition-all flex flex-col items-center text-center"
  >
    <div className="mb-4 p-3 bg-accent/10 text-accent rounded-2xl">{icon}</div>
    <h4 className="font-display font-bold text-natural text-base mb-2">{title}</h4>
    <p className="text-stone-500 text-xs leading-relaxed">{desc}</p>
  </motion.div>
);

const EducationCard = ({ institution, degree, duration, location, icon, status }: { institution: string, degree: string, duration: string, location: string, icon: React.ReactNode, status: string }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    whileHover={{ y: -4, boxShadow: "0 12px 30px -15px rgba(0,0,0,0.08)" }}
    className="p-8 bg-white border border-stone-200/80 rounded-3xl shadow-2xs transition-all relative overflow-hidden flex flex-col justify-between"
  >
    <div className="absolute top-0 right-0 px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-bl-2xl">
      {status}
    </div>
    
    <div>
      <div className="mb-6 p-3 bg-stone-50 rounded-2xl w-fit">{icon}</div>
      <h4 className="font-display font-bold text-natural text-xl mb-1.5">{institution}</h4>
      <p className="text-accent font-semibold text-sm mb-6">{degree}</p>
    </div>

    <div className="space-y-2 pt-4 border-t border-stone-100">
      <div className="flex items-center text-stone-500 text-xs font-medium">
        <Briefcase size={14} className="mr-2 text-stone-400" />
        {duration}
      </div>
      <div className="flex items-center text-stone-500 text-xs font-medium">
        <MapPin size={14} className="mr-2 text-stone-400" />
        {location}
      </div>
    </div>
  </motion.div>
);

const ContactInfo = ({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) => {
  const content = (
    <div className={`p-6 bg-white border border-stone-200/80 rounded-2xl shadow-2xs transition-all flex flex-col items-center text-center h-full ${href ? 'group cursor-pointer hover:border-accent/40 hover:bg-accent/5' : ''}`}>
      <div className="p-3 bg-stone-50 rounded-2xl mb-3 text-accent group-hover:bg-white transition-colors">
        {icon}
      </div>
      <p className="text-[11px] text-stone-400 uppercase tracking-widest font-bold mb-1">{label}</p>
      <p className={`text-sm font-bold text-natural transition-colors break-words ${href ? 'group-hover:text-accent' : ''}`}>{value}</p>
    </div>
  );

  if (href) {
    return <a href={href} target={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : "_blank"} rel="noreferrer" className="block h-full">{content}</a>;
  }
  return content;
};
