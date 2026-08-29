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
  Eye,
  QrCode,
  ShieldCheck,
  Zap,
  Activity,
  Wifi,
  Radio,
  Sliders,
  CircuitBoard
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
  hardware?: string[];
  workflow?: { stage: string; desc: string }[];
  simulationUrl?: string;
  team?: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  issuedOnText?: string;
  credentialId?: string;
  verifyUrl?: string;
  type: 'infosys' | 'advitiya';
  category: string;
  themeColor: string;
  description: string;
  skills: string[];
  signatory?: string;
  signatoryRole?: string;
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
    title: 'Real-Time Noise & Air Quality Detection and Hotspot Mapping',
    subtitle: 'IoT Environmental Telemetry & Urban Pollution Tracking System',
    image: '/ece.jpeg',
    tags: ['IoT & Embedded', 'Arduino Uno R3', 'ESP8266 Wi-Fi', 'MQ-2 / MQ-135', 'ThingSpeak'],
    shortDesc: 'A portable IoT environmental station built with Arduino Uno and ESP8266 to monitor air pollution (PPM) and acoustic noise (dB) in real-time with automated cloud hotspot telemetry.',
    fullDesc: 'Rapid urbanization and industrialization have led to significant increases in noise and air pollution, impacting urban health and ecosystems. Traditional monitoring systems are often bulky, stationary, expensive, and rely on delayed batch processing. This project, developed at Lovely Professional University, introduces a low-cost, portable, real-time IoT node capable of detecting hazardous gas pollutants (MQ-2 / MQ-135) and ambient noise levels (KY-037), displaying live metrics on an I2C LCD, and streaming telemetry packets via ESP8266 Wi-Fi to a cloud dashboard (ThingSpeak) for geographic pollution hotspot mapping.',
    team: 'Aman Narnolia, Shriank, Jay, Pritam — Lovely Professional University',
    hardware: [
      'Arduino Uno R3 (Main Controller for ADC signal sampling & processing)',
      'MQ-2 / MQ-135 Gas Sensor (Detects Smoke, LPG, CO, and airborne pollutants)',
      'KY-037 High-Sensitivity Sound Sensor (Acoustic loudness mapped from 30 dB to 120 dB)',
      'ESP8266 Wi-Fi Module / ESP-01 (AT-command HTTP telemetry & Cloud Transmission)',
      'I2C 16x2 LCD Display (Local instant visual readout of AQI ppm & noise dB)',
      'Cirkit Designer Prototyping (Calibrated voltage dividers & schematic verification)'
    ],
    workflow: [
      { stage: '1. Multi-Sensor Sensing Stage', desc: 'Simultaneous analog voltage sampling of airborne gas concentration on pin A0 and acoustic microphone amplitude on pin A1.' },
      { stage: '2. Signal Processing & Mapping', desc: 'Arduino microcontroller maps raw ADC levels (0–1023) into calibrated Air Quality Index (0–500 PPM proxy) and acoustic sound range (30–120 dB).' },
      { stage: '3. Local Real-Time Display', desc: 'I2C 16x2 LCD display provides immediate on-device telemetry (AQ: xxx ppm, Noise: xx dB, WiFi Status).' },
      { stage: '4. ESP8266 Wi-Fi Transmission', desc: 'Arduino communicates via SoftwareSerial (Pins 10/11) to dispatch AT-command HTTP GET telemetry packets to ThingSpeak cloud every 20s.' },
      { stage: '5. Hotspot Visualization & Analytics', desc: 'Cloud dashboard plots live time-series graphs and flags continuous high-exposure zones (>85 dB) for automated urban hotspot mapping.' }
    ],
    features: [
      'Simultaneous dual-parameter environmental sensing (Air Quality PPM & Noise dB)',
      'Wi-Fi-enabled cloud data streaming to ThingSpeak IoT dashboard using AT commands',
      'Automated hotspot identification for chronic urban noise and air pollution zones',
      'Dual-display architecture: local 16x2 I2C LCD plus remote web visualization',
      'Cost-effective, highly portable embedded hardware schematic designed in Cirkit Designer'
    ],
    techStack: [
      'Arduino Uno R3',
      'Embedded C / C++',
      'ESP8266 Wi-Fi (ESP-01)',
      'MQ-2 & MQ-135 Sensors',
      'KY-037 Sound Module',
      'I2C 16x2 LCD',
      'ThingSpeak IoT Cloud',
      'Cirkit Designer'
    ],
    simulationUrl: 'https://app.cirkitdesigner.com/project/63704ef4-e460-44e3-9cec-53fbdcca568c',
    githubUrl: 'https://github.com/aman-narnolia',
    liveUrl: 'https://app.cirkitdesigner.com/project/63704ef4-e460-44e3-9cec-53fbdcca568c'
  }
];

const certificatesData: CertificateItem[] = [
  {
    id: 'cert-python-1',
    title: 'Programming Fundamentals using Python - Part 1',
    issuer: 'Infosys Springboard',
    date: 'July 18, 2026',
    issuedOnText: 'Saturday, July 18, 2026',
    verifyUrl: 'https://verify.onwingspan.com',
    type: 'infosys',
    category: 'Programming & Logic',
    themeColor: '#007cc3',
    description: 'Awarded by Infosys Springboard for successfully mastering fundamental Python programming, basic syntax, control structures, loops, functions, and core computational problem-solving logic.',
    skills: ['Python Fundamentals', 'Control Flow & Loops', 'Functions & Modularity', 'Problem Solving Logic'],
    signatory: 'Satheesha B. Nanjappa',
    signatoryRole: 'Senior Vice President & Head, Education, Training and Assessment, Infosys Limited'
  },
  {
    id: 'cert-python-2',
    title: 'Programming Fundamentals using Python - Part 2',
    issuer: 'Infosys Springboard',
    date: 'July 19, 2026',
    issuedOnText: 'Sunday, July 19, 2026',
    verifyUrl: 'https://verify.onwingspan.com',
    type: 'infosys',
    category: 'Programming & Logic',
    themeColor: '#007cc3',
    description: 'Advanced Python certification covering Object-Oriented Programming (OOP) paradigms, classes, objects, exception handling, data structures (lists, tuples, sets, dictionaries), and file handling.',
    skills: ['Python OOP', 'Classes & Objects', 'Exception Handling', 'Complex Data Structures', 'File Handling'],
    signatory: 'Satheesha B. Nanjappa',
    signatoryRole: 'Senior Vice President & Head, Education, Training and Assessment, Infosys Limited'
  },
  {
    id: 'cert-ai-intro',
    title: 'Introduction to Artificial Intelligence',
    issuer: 'Infosys Springboard',
    date: 'March 24, 2026',
    issuedOnText: 'Tuesday, March 24, 2026',
    verifyUrl: 'https://verify.onwingspan.com',
    type: 'infosys',
    category: 'Emerging Tech & AI',
    themeColor: '#007cc3',
    description: 'Comprehensive certification by Infosys Springboard exploring the foundations of Artificial Intelligence, search heuristics, knowledge representation, neural network basics, and intelligent agents.',
    skills: ['AI Core Concepts', 'Search Heuristics', 'Neural Network Basics', 'Intelligent Systems', 'ML Foundations'],
    signatory: 'Satheesha B. Nanjappa',
    signatoryRole: 'Senior Vice President & Head, Education, Training and Assessment, Infosys Limited'
  },
  {
    id: 'cert-ai-fusion',
    title: 'AI FUSION — Certificate of Participation',
    issuer: "ADVITIYA'26 (BOST)",
    date: '2026',
    type: 'advitiya',
    category: 'Competitions & Hackathons',
    themeColor: '#00E5FF',
    description: "Awarded in recognition of enthusiastic participation, active involvement, and demonstrating commitment, creativity, and positive spirit of learning in the AI FUSION event held under ADVITIYA'26.",
    skills: ['AI Innovation', 'Competitive Problem Solving', 'Technical Creativity', 'Team Collaboration'],
    signatory: 'Faculty Advisor, BOST & Overall Coordinators'
  },
  {
    id: 'cert-aimagination',
    title: 'AImagination — Certificate of Participation',
    issuer: "ADVITIYA'26 (BOST)",
    date: '2026',
    type: 'advitiya',
    category: 'Competitions & Hackathons',
    themeColor: '#00E5FF',
    description: "Awarded for demonstrating creativity, active involvement, and passionate spirit of exploration in the AImagination event held under the national tech fest ADVITIYA'26.",
    skills: ['Generative AI Concepts', 'Creative Ideation', 'Design Thinking', 'Problem Formulation'],
    signatory: 'Faculty Advisor, BOST & Overall Coordinators'
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
        <button className="md:hidden text-gray-700 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
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
                className="w-full py-2.5 bg-accent text-white rounded-xl text-sm font-bold uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
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

// --- Custom Certificate Graphic Component ---
const CertificateGraphic = ({ cert }: { cert: CertificateItem }) => {
  if (cert.type === 'infosys') {
    return (
      <div className="w-full h-full bg-white flex flex-col justify-between p-4 relative border border-stone-200 select-none overflow-hidden">
        {/* Top Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-1.5">
            <span className="text-[#007cc3] font-black tracking-tight text-lg">Infosys</span>
            <span className="text-[9px] text-stone-500 font-bold tracking-wider">Navigate your next</span>
          </div>
          <span className="text-[8px] uppercase tracking-widest text-[#007cc3] font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
            Course Completion
          </span>
        </div>

        {/* Center Content */}
        <div className="text-center my-auto py-2">
          <p className="text-[9px] uppercase tracking-widest text-stone-400 font-bold mb-1">
            COURSE COMPLETION CERTIFICATE
          </p>
          <p className="text-[10px] text-stone-500">The certificate is awarded to</p>
          <p className="text-sm font-bold text-[#007cc3] tracking-wide my-0.5">
            aman narnolia
          </p>
          <p className="text-[9px] text-stone-500">for successfully completing the course</p>
          <p className="text-xs font-bold text-stone-800 line-clamp-1 mt-0.5">
            {cert.title}
          </p>
          <p className="text-[9px] text-stone-400 mt-1">on {cert.date}</p>
        </div>

        {/* Bottom Banner */}
        <div className="flex justify-between items-end pt-2 border-t border-stone-100">
          <div className="flex items-center space-x-1">
            <span className="text-[10px] font-black text-[#007cc3]">Infosys</span>
            <span className="text-[9px] font-bold text-orange-500">| Springboard</span>
          </div>
          <div className="flex items-center space-x-1 text-[8px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
            <ShieldCheck size={10} />
            <span>Verified Credential</span>
          </div>
        </div>
      </div>
    );
  }

  // ADVITIYA sci-fi graphic
  return (
    <div className="w-full h-full bg-[#050B14] flex flex-col justify-between p-4 relative border border-cyan-500/40 select-none overflow-hidden shadow-inner">
      {/* Sci-Fi glowing accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />

      {/* Header */}
      <div className="text-center pt-1">
        <h5 className="text-sm font-black tracking-widest text-cyan-300 uppercase drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]">
          ADVITIYA'26
        </h5>
        <p className="text-[8px] tracking-widest text-cyan-400/80 font-mono uppercase">
          CERTIFICATE OF PARTICIPATION
        </p>
      </div>

      {/* Center Details */}
      <div className="text-center my-auto py-2">
        <p className="text-[9px] text-cyan-200/60 font-mono">Proudly presented to</p>
        <p className="text-sm font-bold text-white tracking-wide my-0.5 font-serif">
          Aman Narnolia
        </p>
        <p className="text-[9px] text-cyan-200/70">for active participation in the event</p>
        <div className="inline-block px-3 py-1 my-1 bg-cyan-950/80 border border-cyan-400/60 rounded text-xs font-bold text-cyan-300 font-mono">
          {cert.title.split('—')[0].trim()}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[8px] text-cyan-400/70 font-mono pt-2 border-t border-cyan-500/30">
        <span>FACULTY ADVISOR, BOST</span>
        <span>OVERALL COORDINATORS</span>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [activeCertificate, setActiveCertificate] = useState<CertificateItem | null>(null);
  const [certFilter, setCertFilter] = useState<'all' | 'infosys' | 'advitiya'>('all');
  const [isCvOpen, setIsCvOpen] = useState(false);

  const filteredCertificates = certificatesData.filter(cert => {
    if (certFilter === 'all') return true;
    return cert.type === certFilter;
  });

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
                "IoT & Embedded Systems Explorer",
                "Full Stack Web Developer"
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
              Hello! I am a <span className="text-natural font-semibold">Computer Science & Engineering student</span> at Lovely Professional University, originally from Sikar, Rajasthan. Passionate about coding and technology, I focus on building responsive web solutions, engineering IoT environmental prototypes, and solving real-world challenges through continuous learning.
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
                className="px-7 py-3 bg-accent text-white rounded-full font-semibold shadow-sm hover:opacity-90 transition-all flex items-center space-x-2 cursor-pointer"
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
                      {['Git', 'GitHub', 'VS Code', 'Arduino Uno R3', 'ESP8266 IoT', 'Cirkit Designer'].map((skill) => (
                        <span key={skill} className="px-3.5 py-1.5 bg-white border border-stone-200 text-natural text-sm font-semibold rounded-xl shadow-2xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-200/60 text-xs text-stone-400 italic">
                ✓ Built academic IoT prototypes, embedded systems, and full web applications.
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

      {/* 5. CERTIFICATES SECTION (ACCURATE & VERIFIED CREDENTIALS) */}
      <section id="certificates" className="py-24 px-6 bg-stone-50/50">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-stone-400 mb-3">
                Certifications & Achievements
              </h2>
              <p className="text-2xl md:text-3xl font-display font-bold text-natural">
                Verified Credentials & Hackathons
              </p>
            </div>
            
            {/* Category Filter Tabs */}
            <div className="flex items-center space-x-2 mt-4 md:mt-0 bg-stone-200/60 p-1.5 rounded-2xl">
              <button
                onClick={() => setCertFilter('all')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${certFilter === 'all' ? 'bg-white text-natural shadow-xs' : 'text-stone-500 hover:text-natural'}`}
              >
                All ({certificatesData.length})
              </button>
              <button
                onClick={() => setCertFilter('infosys')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${certFilter === 'infosys' ? 'bg-[#007cc3] text-white shadow-xs' : 'text-stone-500 hover:text-[#007cc3]'}`}
              >
                Infosys Springboard (3)
              </button>
              <button
                onClick={() => setCertFilter('advitiya')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${certFilter === 'advitiya' ? 'bg-cyan-900 text-cyan-200 shadow-xs' : 'text-stone-500 hover:text-cyan-700'}`}
              >
                ADVITIYA'26 (2)
              </button>
            </div>
          </div>

          {/* Certificate Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6, boxShadow: "0 16px 32px -12px rgba(0,0,0,0.1)" }}
                onClick={() => setActiveCertificate(cert)}
                className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-2xs cursor-pointer group transition-all flex flex-col"
              >
                {/* Visual Certificate Graphic Preview */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-stone-200">
                  <CertificateGraphic cert={cert} />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-2xs">
                    <span className="bg-white text-natural text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center space-x-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye size={14} className="text-accent" />
                      <span>Click to View Full Certificate</span>
                    </span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-2">
                      <span>{cert.issuer}</span>
                      <span className="text-accent">{cert.date}</span>
                    </div>

                    <h4 className="font-display font-bold text-natural text-base group-hover:text-accent transition-colors mb-2 line-clamp-2">
                      {cert.title}
                    </h4>

                    <p className="text-stone-500 text-xs leading-relaxed line-clamp-2 mb-4">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-accent font-semibold">
                    <span className="flex items-center space-x-1">
                      <ShieldCheck size={14} />
                      <span>Verified Document</span>
                    </span>
                    <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6. PROJECTS (CLICKABLE DETAIL MODALS & FULL SPECS) */}
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
                Real-World Applications & IoT Prototypes
              </p>
            </div>
            <p className="text-xs text-stone-500 font-medium mt-2 md:mt-0">
              Click any project card to view complete specifications, architecture & schematics
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
                      <span>View Specifications</span>
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
                    <span>Click for circuit, workflow & architecture</span>
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

      {/* --- MODAL 1: ENRICHED PROJECT DETAILS MODAL --- */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-stone-900/70 backdrop-blur-xs"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[92vh] flex flex-col"
            >
              {/* Header Image / Banner */}
              <div className="relative aspect-[16/7] bg-stone-100 overflow-hidden shrink-0">
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

              {/* Body Content */}
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
                  <p className="text-stone-500 text-sm font-medium mt-1">
                    {activeProject.subtitle}
                  </p>
                  {activeProject.team && (
                    <div className="mt-2 text-xs font-semibold text-accent flex items-center space-x-1.5">
                      <Users size={14} />
                      <span>{activeProject.team}</span>
                    </div>
                  )}
                </div>

                {/* Full Description & Abstract */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-stone-400 mb-2">
                    Project Overview & Abstract
                  </h4>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                    {activeProject.fullDesc}
                  </p>
                </div>

                {/* 5-Stage System Workflow (if available) */}
                {activeProject.workflow && (
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-stone-400 mb-3 flex items-center space-x-1.5">
                      <Sliders size={14} className="text-accent" />
                      <span>System Architecture & Workflow Pipeline</span>
                    </h4>
                    <div className="space-y-3 bg-stone-50 p-4 rounded-2xl border border-stone-200">
                      {activeProject.workflow.map((item, i) => (
                        <div key={i} className="flex items-start text-xs sm:text-sm">
                          <div className="w-5 h-5 rounded-full bg-accent text-white font-bold flex items-center justify-center shrink-0 mr-3 mt-0.5 text-[10px]">
                            {i + 1}
                          </div>
                          <div>
                            <strong className="text-natural block">{item.stage}</strong>
                            <span className="text-stone-600">{item.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hardware Components / BOM (if available) */}
                {activeProject.hardware && (
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-stone-400 mb-3 flex items-center space-x-1.5">
                      <CircuitBoard size={14} className="text-accent" />
                      <span>Hardware Components & Pinout Connections</span>
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-xs text-stone-600 bg-stone-50 p-4 rounded-2xl border border-stone-200">
                      {activeProject.hardware.map((hw, i) => (
                        <li key={i} className="flex items-start">
                          <Cpu size={13} className="text-accent mr-2 shrink-0 mt-0.5" />
                          <span>{hw}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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
                    Technologies & Tools Used
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
                  {activeProject.simulationUrl && (
                    <a 
                      href={activeProject.simulationUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="px-5 py-2.5 bg-cyan-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-cyan-800 transition-colors inline-flex items-center space-x-2 shadow-xs"
                    >
                      <CircuitBoard size={15} />
                      <span>Cirkit Designer Schematic</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
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
                      <span>Live Simulation / Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- MODAL 2: FULL CERTIFICATE PREVIEW MODAL --- */}
      <AnimatePresence>
        {activeCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCertificate(null)}
              className="fixed inset-0 bg-stone-900/70 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[92vh]"
            >
              {/* Top Bar with Close button */}
              <div className="px-6 py-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award size={18} className="text-accent" />
                  <span className="text-xs font-bold uppercase tracking-wider text-natural">
                    Official Credential Document
                  </span>
                </div>
                <button
                  onClick={() => setActiveCertificate(null)}
                  className="w-8 h-8 bg-stone-200 hover:bg-stone-300 text-stone-700 rounded-full flex items-center justify-center transition-all cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Certificate Canvas / Render Frame */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                
                {/* High Fidelity Certificate Viewer */}
                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-md">
                  <CertificateGraphic cert={activeCertificate} />
                </div>

                {/* Certificate Meta Details */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-100 gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-natural">
                        {activeCertificate.title}
                      </h3>
                      <p className="text-accent text-sm font-semibold mt-0.5">
                        Issued by {activeCertificate.issuer} • {activeCertificate.issuedOnText || activeCertificate.date}
                      </p>
                    </div>

                    {activeCertificate.verifyUrl && (
                      <a
                        href={activeCertificate.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-[#007cc3] text-white text-xs font-bold rounded-xl flex items-center space-x-1.5 hover:bg-[#00629b] transition-colors shrink-0 shadow-xs cursor-pointer"
                      >
                        <QrCode size={14} />
                        <span>Verify Credential</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-stone-400 mb-1.5">
                      Credential Description
                    </h4>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {activeCertificate.description}
                    </p>
                  </div>

                  {/* Skills Validated */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-stone-400 mb-2">
                      Key Competencies & Validated Skills
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeCertificate.skills.map((s) => (
                        <span key={s} className="px-3 py-1 bg-stone-100 text-natural text-xs font-semibold rounded-lg border border-stone-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Signatory */}
                  {activeCertificate.signatory && (
                    <div className="pt-3 border-t border-stone-100 text-xs text-stone-500">
                      <span className="font-bold text-stone-700">Authorized Signatory:</span> {activeCertificate.signatory}
                      {activeCertificate.signatoryRole && <span className="block text-[11px] text-stone-400">{activeCertificate.signatoryRole}</span>}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-stone-100 flex justify-end">
                  <button
                    onClick={() => setActiveCertificate(null)}
                    className="px-6 py-2.5 bg-accent text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:opacity-90 cursor-pointer"
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

              {/* CV Document Body */}
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
                      <p className="text-stone-600">Git, GitHub, VS Code, Arduino Uno R3, ESP8266 IoT, Cirkit Designer</p>
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
                        <h3 className="font-bold text-natural">Real-Time Noise & Air Quality Detection and Hotspot Mapping</h3>
                        <span className="text-xs text-stone-400">Arduino, C++, ESP8266 Wi-Fi, ThingSpeak</span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Engineered a portable IoT environmental station using Arduino Uno, MQ-2 gas sensor, and KY-037 sound sensor. Implemented non-linear ADC calibration, local 16x2 I2C LCD readout, and AT-command Wi-Fi telemetry streaming to ThingSpeak cloud for automated urban pollution hotspot identification.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-natural">NGO Donation Platform (Helping Connect)</h3>
                        <span className="text-xs text-stone-400">React, TypeScript, Tailwind, DBMS</span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Built a full-featured web platform connecting donors with underprivileged communities and NGOs. Features item donation logging, category-based request feeds, and multi-tier user access.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Verified Certifications */}
                <div>
                  <h2 className="text-xs uppercase tracking-widest font-bold text-accent mb-3 pb-1 border-b border-stone-200">
                    Verified Certifications & Competitions
                  </h2>
                  <ul className="list-disc list-inside space-y-1.5 text-xs text-stone-600">
                    <li><strong className="text-natural">Programming Fundamentals using Python - Part 1 & 2</strong> – Infosys Springboard (July 2026)</li>
                    <li><strong className="text-natural">Introduction to Artificial Intelligence</strong> – Infosys Springboard (March 2026)</li>
                    <li><strong className="text-natural">AI FUSION — Certificate of Participation</strong> – ADVITIYA'26 (BOST)</li>
                    <li><strong className="text-natural">AImagination — Certificate of Participation</strong> – ADVITIYA'26 (BOST)</li>
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
