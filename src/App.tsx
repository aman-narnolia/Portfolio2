import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
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
  ChevronUp,
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
  CircuitBoard,
  Flame,
  Binary
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
  type: 'infosys' | 'advitiya' | 'arena';
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
    title: 'Helping Hands — Direct Community Aid & NGO Donation Platform',
    subtitle: 'Full-Stack Multi-Role Donation & Real-Time Logistics Tracking System',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'DBMS', 'Node.js', 'REST API'],
    shortDesc: 'A web platform bridging the gap between donors, verified NGOs, and underprivileged communities with transparent item donation matching and delivery tracking.',
    fullDesc: 'Traditional charitable donation workflows frequently suffer from a lack of transparency, high administrative friction, and the presence of unverified intermediaries that diminish donor trust. Helping Hands is a centralized full-stack donation management web platform engineered to connect donors directly with verified grassroots NGOs and individuals in need. The system implements multi-role RBAC (Role-Based Access Control) for Donors, NGOs, Beneficiaries, and Administrators, enabling real-time essential item requests (food grains, clothes, educational stationery, medical supplies), direct item pledging, logistics milestone tracking, and transparent DBMS ledger logging.',
    workflow: [
      { stage: '1. Multi-Tier Role Authentication', desc: 'Secure sign-in with distinct role portals: Donors, Verified NGOs, Needy Individuals, and System Administrators.' },
      { stage: '2. Needs Requirement Posting', desc: 'Beneficiaries and local NGOs publish structured requirement listings with item categories, urgency levels (Urgent / Standard), and geographic location.' },
      { stage: '3. Direct Donor Matching & Pledging', desc: 'Donors browse live request feeds, filter by category/location, and pledge items directly without financial cuts or middlemen.' },
      { stage: '4. Real-Time Logistics & Fulfillment Status', desc: 'Step-by-step milestone progression tracking from "Pledged" ➔ "Collected by NGO" ➔ "In Transit" ➔ "Delivered to Beneficiary".' },
      { stage: '5. Transparent DBMS Audit Logging', desc: 'Immutable transaction logs, verification proofs, and donor impact badges recorded to maintain 100% community trust.' }
    ],
    features: [
      'Multi-role Role-Based Access Control (RBAC) for Donors, NGOs, Beneficiaries, and Admins',
      'Real-time essential item request feed with categorical filters (Food, Clothing, Books, Health)',
      'End-to-end logistics fulfillment tracker with milestone timestamps',
      'Normalized relational database schema (Users, Requests, Pledges, FulfillmentLogs)',
      'Responsive, high-performance user interface built with React 19, TypeScript, and Tailwind CSS',
      'Verification workflow for NGO credibility to prevent fraudulent requests'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js / Express', 'DBMS (Relational SQL)', 'Lucide Icons'],
    githubUrl: 'https://github.com/aman-narnolia/Portfolio2',
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
      'I2C 16x2 LCD Display (Local instant visual readout of AQI ppm & noise dB)'
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
      'Cost-effective, highly portable embedded hardware schematic'
    ],
    techStack: [
      'Arduino Uno R3',
      'Embedded C / C++',
      'ESP8266 Wi-Fi (ESP-01)',
      'MQ-2 & MQ-135 Sensors',
      'KY-037 Sound Module',
      'I2C 16x2 LCD',
      'ThingSpeak IoT Cloud'
    ],
    githubUrl: 'https://github.com/aman-narnolia',
    liveUrl: '#'
  }
];

const certificatesData: CertificateItem[] = [
  {
    id: 'cert-webathon',
    title: 'WEB-A-THON 2.0 — Certificate of Participation',
    issuer: 'ARENA (Lovely Professional University)',
    date: 'February 13–14, 2026',
    issuedOnText: 'February 13th to 14th, 2026',
    credentialId: '8955ff95-6e99-4ca9-97ff-6dbdbc912917',
    type: 'arena',
    category: 'Hackathons & Competitions',
    themeColor: '#0066FF',
    description: 'Awarded for participating in "WEB-A-THON 2.0", a University-Level Hackathon organised by Student Organisation ARENA at Lovely Professional University Punjab, exhibiting outstanding performance in design, development, and strategic thinking.',
    skills: ['Full-Stack Web Development', 'Hackathon Prototyping', 'UI/UX Design', 'Strategic Thinking', 'Team Collaboration'],
    signatory: 'Shilpa Sharma (Faculty Facilitator) & Lakshya Agarwal (CEO ARENA)',
    signatoryRole: 'Student Organisation ARENA, Lovely Professional University Punjab'
  },
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
    category: 'Hackathons & Competitions',
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
    category: 'Hackathons & Competitions',
    themeColor: '#00E5FF',
    description: "Awarded for demonstrating creativity, active involvement, and passionate spirit of exploration in the AImagination event held under the national tech fest ADVITIYA'26.",
    skills: ['Generative AI Concepts', 'Creative Ideation', 'Design Thinking', 'Problem Formulation'],
    signatory: 'Faculty Advisor, BOST & Overall Coordinators'
  }
];

// --- Staggered Skill Animation Variants ---
const skillContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const skillPopVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.3, 
    y: 24,
    rotate: -4
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    rotate: 0,
    transition: { 
      type: "spring", 
      stiffness: 420, 
      damping: 18, 
      mass: 0.6 
    }
  }
};

// --- Navbar Component ---
const Navbar = ({ onOpenCv }: { onOpenCv: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

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
    <>
      {/* Top Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-emerald-600 to-accent z-50 origin-left"
        style={{ scaleX }}
      />

      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-stone-200/50' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a 
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            whileHover={{ scale: 1.08, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm cursor-pointer"
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
                whileHover={{ y: -2 }}
                className="text-xs uppercase tracking-widest font-bold text-stone-500 hover:text-accent transition-colors relative py-1 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full" />
              </motion.a>
            ))}
            
            <motion.button
              onClick={onOpenCv}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px -6px rgba(90,90,64,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-1.5 bg-accent text-white hover:bg-stone-800 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center space-x-1.5 shadow-2xs"
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
    </>
  );
};

const SectionHeading = ({ children, subtitle, center = false }: { children: React.ReactNode, subtitle?: string, center?: boolean }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold text-accent mb-3 bg-accent/10 px-3.5 py-1 rounded-full border border-accent/20"
    >
      <Sparkles size={12} />
      <span>{children}</span>
    </motion.div>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`text-2xl md:text-3xl lg:text-4xl font-display font-bold text-natural ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
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
      <div className="w-full h-full bg-white flex flex-col justify-between p-4 relative border border-stone-200 select-none overflow-hidden group">
        {/* Shimmer sweep animation */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent pointer-events-none" />

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

  if (cert.type === 'arena') {
    return (
      <div className="w-full h-full bg-[#07132B] flex flex-col justify-between p-4 relative border border-blue-500/40 select-none overflow-hidden shadow-inner group">
        {/* Shimmer sweep */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-blue-400/15 to-transparent pointer-events-none" />

        {/* Top Header with ARENA logo */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <span className="text-base font-black tracking-wider text-pink-500">A</span>
            <span className="text-base font-black tracking-wider text-cyan-400">RENA</span>
          </div>
          <div className="w-6 h-6 rounded-full bg-amber-400/20 border border-amber-400 flex items-center justify-center text-amber-300 text-[10px] font-bold">
            ★
          </div>
        </div>

        {/* Center Details */}
        <div className="text-center my-auto py-2">
          <h5 className="text-xs font-bold tracking-widest text-white uppercase">
            CERTIFICATE
          </h5>
          <p className="text-[7px] text-blue-200/80 tracking-widest uppercase mb-1">
            OF PARTICIPATION
          </p>
          <p className="text-sm font-bold text-white tracking-wide my-0.5">
            Aman Narnolia
          </p>
          <p className="text-[8px] text-blue-200/70 line-clamp-1">
            For participating in <strong className="text-cyan-300">"WEB-A-THON 2.0"</strong>
          </p>
          <p className="text-[7px] text-blue-300/60 mt-0.5">
            Organised by Student Organisation ARENA @ LPU
          </p>
        </div>

        {/* Footer with Credential ID & Signatures */}
        <div className="flex justify-between items-end text-[7px] text-blue-200/70 border-t border-blue-500/30 pt-1.5">
          <div>
            <p className="font-bold text-white">SHILPA SHARMA</p>
            <p className="text-[6px] text-blue-300/60">FACULTY FACILITATOR</p>
          </div>
          <div className="text-[7px] font-mono text-cyan-300/80">
            ID: 8955ff95...
          </div>
          <div className="text-right">
            <p className="font-bold text-white">LAKSHYA AGARWAL</p>
            <p className="text-[6px] text-blue-300/60">CEO ARENA</p>
          </div>
        </div>
      </div>
    );
  }

  // ADVITIYA sci-fi graphic
  return (
    <div className="w-full h-full bg-[#050B14] flex flex-col justify-between p-4 relative border border-cyan-500/40 select-none overflow-hidden shadow-inner group">
      {/* Sci-Fi glowing accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 group-hover:border-cyan-300 transition-colors" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400 group-hover:border-cyan-300 transition-colors" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400 group-hover:border-cyan-300 transition-colors" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 group-hover:border-cyan-300 transition-colors" />

      {/* Shimmer sweep */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent pointer-events-none" />

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

// --- Animated Skill Item Pill ---
const AnimatedSkillBadge = ({ name, icon }: { name: string; icon?: React.ReactNode }) => (
  <motion.div
    variants={skillPopVariants}
    whileHover={{ 
      scale: 1.1, 
      y: -3, 
      rotate: [-1, 1, 0],
      boxShadow: "0 10px 20px -5px rgba(90,90,64,0.18)"
    }}
    whileTap={{ scale: 0.96 }}
    className="inline-flex items-center space-x-1.5 px-4 py-2 bg-white border border-stone-200 hover:border-accent text-natural hover:text-accent text-sm font-semibold rounded-2xl shadow-2xs transition-colors cursor-default select-none group"
  >
    {icon && <span className="text-accent group-hover:rotate-12 transition-transform">{icon}</span>}
    <span>{name}</span>
  </motion.div>
);

// --- Main App Component ---
export default function App() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [activeCertificate, setActiveCertificate] = useState<CertificateItem | null>(null);
  const [certFilter, setCertFilter] = useState<'all' | 'infosys' | 'competitions'>('all');
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [cvViewMode, setCvViewMode] = useState<'interactive' | 'pdf'>('interactive');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredCertificates = certificatesData.filter(cert => {
    if (certFilter === 'all') return true;
    if (certFilter === 'infosys') return cert.type === 'infosys';
    if (certFilter === 'competitions') return cert.type === 'advitiya' || cert.type === 'arena';
    return true;
  });

  return (
    <div className="font-sans text-natural bg-background-natural min-h-screen selection:bg-accent/20 selection:text-accent relative">
      <Navbar onOpenCv={() => setIsCvOpen(true)} />

      {/* 1. HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden">
        
        {/* Animated Ambient Glowing Gradient Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-accent/15 via-emerald-200/20 to-transparent rounded-full blur-3xl -z-10" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-accent/10 via-stone-300/20 to-transparent rounded-full blur-3xl -z-10" 
        />

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center">
          
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
                  staggerChildren: 0.12
                }
              }
            }}
          >
            {/* Live Pulsing Status Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-6 shadow-2xs"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span>Available for Internships & Collaborations</span>
            </motion.div>

            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-natural leading-tight mb-4 tracking-tight"
            >
              Aman <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#737352] to-accent">
                Narnolia
              </span>
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
              className="text-stone-600 text-base md:text-lg mb-8 max-w-xl leading-relaxed font-normal"
            >
              Hello! I am a <span className="text-natural font-semibold underline decoration-accent/40 decoration-2 underline-offset-4">Computer Science & Engineering undergraduate</span> at Lovely Professional University, originally from Sikar, Rajasthan. Passionate about coding and technology, I focus on building responsive web solutions, engineering IoT environmental prototypes, and solving real-world challenges through continuous learning.
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
                whileHover={{ scale: 1.05, boxShadow: "0 12px 25px -8px rgba(90,90,64,0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="px-7 py-3.5 bg-accent text-white rounded-full font-semibold shadow-sm hover:bg-stone-800 transition-all flex items-center space-x-2 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ChevronRight size={18} />
              </motion.a>
              
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#fbfbfa", borderColor: "#5A5A40" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsCvOpen(true)}
                className="px-7 py-3.5 bg-white text-natural border border-stone-300 rounded-full font-semibold transition-all flex items-center space-x-2 shadow-xs cursor-pointer"
              >
                <FileText size={18} className="text-accent" />
                <span>View CV</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image Column - Clean and Elegant Profile Presentation */}
          <motion.div
            className="md:col-span-5 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 sm:w-72 md:w-80">
              
              {/* Main Photo Card */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-white p-2.5 border border-stone-200">
                <div className="aspect-[3/4] bg-stone-100 rounded-2xl overflow-hidden relative">
                  <img 
                    src="/aman.png" 
                    alt="Aman Narnolia" 
                    className="w-full h-full object-cover object-top" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                    }}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              {/* Subtle Decorative Accents */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-accent/40 rounded-tl-2xl -z-10" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-accent/40 rounded-br-2xl -z-10" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. TECHNICAL SKILLS SECTION (WITH STAGGERED "POP OUT" ANIMATION) */}
      <section id="skills" className="py-24 px-6 bg-white border-y border-stone-200/50 relative overflow-hidden">
        
        {/* Subtle Background Deco Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-stone-50/80 rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center space-x-3.5 mb-8 pb-5 border-b border-stone-200">
                  <div className="w-11 h-11 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center font-bold shadow-2xs">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-natural">Skills Learned</h3>
                    <p className="text-xs text-stone-500 font-medium">Foundations & practical proficiencies</p>
                  </div>
                </div>

                <div className="space-y-7">
                  
                  {/* Languages */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                      <Code2 size={15} className="text-accent" />
                      <span>Languages</span>
                    </div>
                    <motion.div 
                      variants={skillContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2.5"
                    >
                      {['Python', 'C', 'JavaScript'].map((skill) => (
                        <AnimatedSkillBadge key={skill} name={skill} />
                      ))}
                    </motion.div>
                  </div>

                  {/* Frontend */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                      <Palette size={15} className="text-accent" />
                      <span>Frontend</span>
                    </div>
                    <motion.div 
                      variants={skillContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2.5"
                    >
                      {['HTML5', 'CSS3'].map((skill) => (
                        <AnimatedSkillBadge key={skill} name={skill} />
                      ))}
                    </motion.div>
                  </div>

                  {/* Backend & Databases */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                      <Database size={15} className="text-accent" />
                      <span>Backend & Databases</span>
                    </div>
                    <motion.div 
                      variants={skillContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2.5"
                    >
                      {['DBMS (Database Management Systems)'].map((skill) => (
                        <AnimatedSkillBadge key={skill} name={skill} />
                      ))}
                    </motion.div>
                  </div>

                  {/* Developer Tools & Hardware */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                      <Cpu size={15} className="text-accent" />
                      <span>Developer Tools & Hardware</span>
                    </div>
                    <motion.div 
                      variants={skillContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2.5"
                    >
                      {['Git', 'GitHub', 'VS Code', 'Arduino Uno R3', 'ESP8266 IoT'].map((skill) => (
                        <AnimatedSkillBadge key={skill} name={skill} />
                      ))}
                    </motion.div>
                  </div>

                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-stone-200 text-xs text-stone-400 italic flex items-center space-x-1.5">
                <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                <span>Applied in real-world course projects, labs, and IoT prototypes.</span>
              </div>
            </motion.div>

            {/* Column 2: Currently Learning */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-accent/5 rounded-3xl p-8 sm:p-10 border border-accent/25 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center space-x-3.5 mb-8 pb-5 border-b border-accent/20">
                  <div className="w-11 h-11 bg-accent text-white rounded-2xl flex items-center justify-center font-bold shadow-2xs">
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-natural">Currently Learning</h3>
                    <p className="text-xs text-accent font-semibold">Active focus & university coursework</p>
                  </div>
                </div>

                <div className="space-y-7">
                  
                  {/* Advanced Languages & OOP */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-accent mb-3">
                      <Terminal size={15} />
                      <span>Advanced Languages & OOP</span>
                    </div>
                    <motion.div 
                      variants={skillContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2.5"
                    >
                      {['C++', 'OOPs (Object Oriented Programming)'].map((skill) => (
                        <AnimatedSkillBadge key={skill} name={skill} />
                      ))}
                    </motion.div>
                  </div>

                  {/* Data Structures & Algorithms */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-accent mb-3">
                      <Layers size={15} />
                      <span>Data Structures & Problem Solving</span>
                    </div>
                    <motion.div 
                      variants={skillContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2.5"
                    >
                      {['DSA (Data Structures & Algorithms)'].map((skill) => (
                        <AnimatedSkillBadge key={skill} name={skill} />
                      ))}
                    </motion.div>
                  </div>

                  {/* Systems & Virtualization */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-accent mb-3">
                      <Server size={15} />
                      <span>Virtualization & Cloud Foundations</span>
                    </div>
                    <motion.div 
                      variants={skillContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2.5"
                    >
                      {['Virtualization'].map((skill) => (
                        <AnimatedSkillBadge key={skill} name={skill} />
                      ))}
                    </motion.div>
                  </div>

                  {/* Networking */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-accent mb-3">
                      <Network size={15} />
                      <span>Networks & Protocols</span>
                    </div>
                    <motion.div 
                      variants={skillContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2.5"
                    >
                      {['Basics of Computer Networks'].map((skill) => (
                        <AnimatedSkillBadge key={skill} name={skill} />
                      ))}
                    </motion.div>
                  </div>

                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-accent/20 text-xs text-accent font-medium italic flex items-center space-x-1.5">
                <Zap size={13} className="text-amber-600 shrink-0" />
                <span>Continuously expanding engineering depth through university lectures and coding practices.</span>
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
              duration="Ongoing - 2029"
              location="Phagwara, Punjab"
              icon={<Briefcase className="text-accent" />}
              status="Ongoing - 2029"
            />
            {/* School */}
            <EducationCard 
              institution="Vinayak Convent Senior Secondary School"
              degree="Senior Secondary Schooling"
              duration="2024"
              location="Sikar, Rajasthan"
              icon={<BookOpen className="text-accent" />}
              status="2024"
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
                className={`px-4 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${certFilter === 'all' ? 'bg-white text-natural shadow-xs' : 'text-stone-500 hover:text-natural'}`}
              >
                All ({certificatesData.length})
              </button>
              <button
                onClick={() => setCertFilter('infosys')}
                className={`px-4 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${certFilter === 'infosys' ? 'bg-[#007cc3] text-white shadow-xs' : 'text-stone-500 hover:text-[#007cc3]'}`}
              >
                Infosys Springboard (3)
              </button>
              <button
                onClick={() => setCertFilter('competitions')}
                className={`px-4 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${certFilter === 'competitions' ? 'bg-blue-900 text-blue-200 shadow-xs' : 'text-stone-500 hover:text-blue-700'}`}
              >
                Hackathons & Tech Fests (3)
              </button>
            </div>
          </div>

          {/* Certificate Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.12)" }}
                onClick={() => setActiveCertificate(cert)}
                className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-2xs cursor-pointer group transition-all flex flex-col relative"
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
                whileHover={{ y: -8, boxShadow: "0 24px 48px -15px rgba(0,0,0,0.12)" }}
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

      {/* 7. CONTACT SECTION (With Phone Number: 9653874118) */}
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
                value="+91 96538 74118" 
                href="tel:+919653874118" 
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

      {/* Floating Scroll To Top Action Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 bg-accent text-white rounded-full shadow-lg hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

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
                      <span>Live Demo / Details</span>
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
                      {activeCertificate.credentialId && (
                        <p className="text-xs text-stone-400 font-mono mt-1">
                          Certificate ID: {activeCertificate.credentialId}
                        </p>
                      )}
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

      {/* --- MODAL 3: EXACT CV / RESUME VIEWER MODAL (MATCHING NEW RESUME FORMAT) --- */}
      <AnimatePresence>
        {isCvOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCvOpen(false)}
              className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-4 max-h-[94vh] flex flex-col"
            >
              {/* CV Modal Top Navigation & Download Bar */}
              <div className="px-6 py-4 bg-stone-900 text-white flex items-center justify-between shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent/20 text-accent rounded-xl">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base sm:text-lg">
                      Curriculum Vitae (CV)
                    </h3>
                    <p className="text-[11px] text-stone-400">Aman Narnolia • CSE Student</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-3">
                  {/* Toggle between Clean Resume View and Direct PDF view */}
                  <div className="hidden sm:flex bg-stone-800 p-1 rounded-xl text-xs font-semibold">
                    <button
                      onClick={() => setCvViewMode('interactive')}
                      className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${cvViewMode === 'interactive' ? 'bg-accent text-white' : 'text-stone-400 hover:text-white'}`}
                    >
                      Document View
                    </button>
                    <button
                      onClick={() => setCvViewMode('pdf')}
                      className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${cvViewMode === 'pdf' ? 'bg-accent text-white' : 'text-stone-400 hover:text-white'}`}
                    >
                      PDF File
                    </button>
                  </div>

                  {/* Direct PDF Download Button */}
                  <a
                    href="/cv.pdf"
                    download="Aman_Narnolia_CV.pdf"
                    className="px-4 py-2 bg-accent hover:bg-stone-800 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-all cursor-pointer shadow-xs"
                  >
                    <Download size={14} />
                    <span>Download PDF</span>
                  </a>

                  <button
                    onClick={() => setIsCvOpen(false)}
                    className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* CV Body Frame */}
              <div className="p-4 sm:p-8 overflow-y-auto bg-stone-100 flex-1">
                {cvViewMode === 'pdf' ? (
                  <div className="w-full h-[72vh] bg-white rounded-2xl overflow-hidden shadow-inner border border-stone-300">
                    <iframe
                      src="/cv.pdf#toolbar=1"
                      title="Aman Narnolia CV PDF"
                      className="w-full h-full border-0"
                    />
                  </div>
                ) : (
                  /* Exact 2-Column High Fidelity Layout of the Uploaded Resume */
                  <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 shadow-xl rounded-2xl border border-stone-200/80 font-sans text-stone-800">
                    
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10">
                      
                      {/* LEFT COLUMN: Photo, Contact, Skills, MOOC Certificates */}
                      <div className="md:col-span-4 flex flex-col space-y-7 md:border-r md:border-stone-200 md:pr-6">
                        
                        {/* Circular Headshot Photo */}
                        <div className="flex justify-center md:justify-start">
                          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-stone-100 shadow-md bg-stone-50">
                            <img 
                              src="/aman.png" 
                              alt="Aman Narnolia" 
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        </div>

                        {/* Contact Section */}
                        <div>
                          <h3 className="text-lg font-bold font-display text-black mb-3 tracking-tight">
                            Contact
                          </h3>
                          <div className="space-y-2.5 text-xs text-stone-700">
                            <div className="flex items-start space-x-2">
                              <Mail size={14} className="text-stone-800 mt-0.5 shrink-0" />
                              <a href="mailto:narnoliaaman07@gmail.com" className="hover:underline break-all">
                                narnoliaaman07@gmail.com
                              </a>
                            </div>
                            <div className="flex items-start space-x-2">
                              <Linkedin size={14} className="text-stone-800 mt-0.5 shrink-0" />
                              <a href="https://www.linkedin.com/in/aman-narnolia-07aug06/" target="_blank" rel="noreferrer" className="hover:underline break-all">
                                linkedin.com/in/aman-narnolia-07aug06/
                              </a>
                            </div>
                            <div className="flex items-start space-x-2">
                              <Github size={14} className="text-stone-800 mt-0.5 shrink-0" />
                              <a href="https://github.com/aman-narnolia" target="_blank" rel="noreferrer" className="hover:underline break-all">
                                github.com/aman-narnolia
                              </a>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Phone size={14} className="text-stone-800 shrink-0" />
                              <a href="tel:+919653874118" className="hover:underline font-semibold">
                                9653874118
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Skills Section */}
                        <div>
                          <h3 className="text-lg font-bold font-display text-black mb-3 tracking-tight">
                            Skills
                          </h3>
                          <ul className="space-y-1.5 text-xs text-stone-700">
                            <li className="font-semibold text-stone-900">Python, C, C++</li>
                            <li className="font-semibold text-stone-900">DSA</li>
                            <li className="font-semibold text-stone-900">HTML, CSS, Javascript</li>
                            <li className="font-semibold text-stone-900">DBMS, Virtualization</li>
                            <li>Analytical Thinking</li>
                            <li>Adaptability</li>
                            <li>Team Collaboration</li>
                          </ul>
                        </div>

                        {/* MOOC Certificates Section */}
                        <div>
                          <h3 className="text-lg font-bold font-display text-black mb-2 tracking-tight leading-snug">
                            MOOC Certificates
                          </h3>
                          <ul className="space-y-2 text-xs text-stone-700 list-disc list-inside">
                            <li>Introduction to Python 1, 2</li>
                            <li>Introduction to Artificial Intelligence</li>
                            <li>Healthy Habits for Healthy Life</li>
                          </ul>
                        </div>

                      </div>

                      {/* RIGHT COLUMN: Header, About Me, Experience, Career Objective, Education */}
                      <div className="md:col-span-8 space-y-6">
                        
                        {/* Main Title Banner */}
                        <div className="pb-4 border-b-2 border-black">
                          <h1 className="text-3xl sm:text-4xl font-bold font-display text-black tracking-tight uppercase">
                            Aman Narnolia
                          </h1>
                          <p className="text-base sm:text-lg text-stone-800 font-semibold tracking-wider uppercase mt-1">
                            CSE STUDENT
                          </p>
                        </div>

                        {/* About me */}
                        <div>
                          <h3 className="text-lg font-bold font-display text-black mb-2 tracking-tight">
                            About me
                          </h3>
                          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                            Aspiring CSE student with experience in hackathons, and self-driven projects. Passionate about learning new things and building efficient, user-focused solutions.
                          </p>
                        </div>

                        {/* Experience */}
                        <div>
                          <h3 className="text-lg font-bold font-display text-black mb-2 tracking-tight">
                            Experience
                          </h3>
                          <div className="space-y-1.5">
                            <h4 className="text-xs sm:text-sm font-bold text-stone-900">
                              Project-Based Experience
                            </h4>
                            <ul className="space-y-1.5 text-xs text-stone-700 list-disc list-outside ml-4 leading-relaxed">
                              <li>Designed and developed responsive web applications using HTML, CSS, and JavaScript</li>
                              <li>Built intuitive, user-centric interfaces with a focus on usability and cross-device compatibility</li>
                              <li>Participated in multiple hackathons, demonstrating strong problem-solving, teamwork, and rapid prototyping skills.</li>
                              <li>Applied structured problem-solving and debugging techniques to optimize performance and functionality</li>
                            </ul>
                          </div>
                        </div>

                        {/* CAREER OBJECTIVE */}
                        <div>
                          <h3 className="text-lg font-bold font-display text-black mb-2 tracking-tight uppercase">
                            CAREER OBJECTIVE
                          </h3>
                          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed pl-3 border-l-2 border-stone-300 italic">
                            To build a career as a Software Developer by leveraging my knowledge of web technologies and problem-solving skills to develop scalable, high-quality applications, while growing into a proficient and impactful engineer.
                          </p>
                        </div>

                        {/* Education */}
                        <div>
                          <h3 className="text-lg font-bold font-display text-black mb-3 tracking-tight">
                            Education
                          </h3>
                          <div className="space-y-4 text-xs sm:text-sm text-stone-700">
                            {/* University */}
                            <div>
                              <p className="font-bold text-stone-900">• Lovely Professional University</p>
                              <p className="pl-3 text-xs text-stone-600">• Bachelor Of Technology</p>
                              <p className="pl-3 text-xs text-stone-600">• Computer Science & Engineering</p>
                            </div>

                            {/* School */}
                            <div>
                              <p className="font-bold text-stone-900">• Vinayak Convent Sr. Sec. School</p>
                              <p className="pl-3 text-xs text-stone-600 leading-relaxed">
                                • Completed schooling in 2024 Strong academic performance with consistent participation in school activities.
                              </p>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>
                )}
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
    whileHover={{ y: -8, boxShadow: "0 14px 30px -10px rgba(90,90,64,0.15)" }}
    className="p-6 bg-white border border-stone-200/80 rounded-2xl shadow-2xs transition-all flex flex-col items-center text-center group cursor-default"
  >
    <div className="mb-4 p-3.5 bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white rounded-2xl transition-colors shadow-2xs">
      {icon}
    </div>
    <h4 className="font-display font-bold text-natural text-base mb-2 group-hover:text-accent transition-colors">{title}</h4>
    <p className="text-stone-500 text-xs leading-relaxed">{desc}</p>
  </motion.div>
);

const EducationCard = ({ institution, degree, duration, location, icon, status }: { institution: string, degree: string, duration: string, location: string, icon: React.ReactNode, status: string }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    whileHover={{ y: -6, boxShadow: "0 16px 36px -15px rgba(0,0,0,0.1)" }}
    className="p-8 bg-white border border-stone-200/80 rounded-3xl shadow-2xs transition-all relative overflow-hidden flex flex-col justify-between"
  >
    <div className="absolute top-0 right-0 px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-bl-2xl">
      {status}
    </div>
    
    <div>
      <div className="mb-6 p-3.5 bg-stone-50 rounded-2xl w-fit">{icon}</div>
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
      <div className="p-3.5 bg-stone-50 rounded-2xl mb-3 text-accent group-hover:bg-accent group-hover:text-white transition-colors shadow-2xs">
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
