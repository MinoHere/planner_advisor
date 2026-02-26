/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useParams
} from 'react-router-dom';
import {
  TrendingUp,
  Users,
  Award,
  Briefcase,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Target,
  Rocket,
  HeartPulse,
  Scale,
  Building2,
  PiggyBank,
  Globe,
  Clock,
  Zap,
  Star,
  Coffee,
  Lightbulb,
  Search,
  LogIn,
  Newspaper,
  FileText,
  ExternalLink,
  Info,
  Quote,
  Accessibility,
  Calendar,
  Mic,
  SunMoon,
  Link2,
  ZoomIn,
  AlignJustify,
  MousePointer,
  Droplet,
  BookOpen,
  RotateCcw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Scroll To Top Component ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Components ---

const TopBar = () => {
  return (
    <div className="bg-slate-900 text-white py-2 text-xs hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-2">
            <Globe size={12} />
            <span>English</span>
            <ChevronDown size={10} />
          </div>
          <Link to="/investor-relations" className="hover:text-red-500 transition-colors">Investor Relations</Link>
          <Link to="/sustainability" className="hover:text-red-500 transition-colors">Sustainability</Link>
          <Link to="/newsroom" className="hover:text-red-500 transition-colors">Newsroom</Link>
          <Link to="/event-calendar" className="hover:text-red-500 transition-colors flex items-center gap-1">
            <Calendar size={11} />Events
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
            <Search size={12} />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      subLinks: [
        { name: 'Unit Trust Funds', href: '/services/unit-trust', desc: 'Diversified investment portfolios' },
        { name: 'Private Retirement Schemes (PRS)', href: '/services/prs', desc: 'Voluntary retirement savings' },
        { name: 'Life Insurance / Takaful', href: '/services/insurance', desc: 'Protection for your family' },
        { name: 'Medical & Health Insurance', href: '/services/medical', desc: 'Premium healthcare coverage' },
        { name: 'Estate Planning', href: '/services/estate', desc: 'Will writing and trust services' },
        { name: 'Corporate Solutions', href: '/services/corporate', desc: 'Employee benefits and insurance' },
      ]
    },
    { name: 'Career', href: '/career' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const navbarBg = isScrolled || !isHome ? 'bg-white shadow-md py-3' : 'bg-transparent py-5';
  const textColor = isScrolled || !isHome ? 'text-slate-700' : 'text-white/90';
  const logoColor = isScrolled || !isHome ? 'text-red-600' : 'text-white';
  const logoSpanColor = isScrolled || !isHome ? 'text-slate-900' : 'text-red-500';

  return (
    <div className="fixed w-full z-50">
      <TopBar />
      <nav className={`transition-all duration-300 ${navbarBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <span className={`text-2xl font-bold tracking-tighter ${logoColor}`}>
                ADVISOR<span className={logoSpanColor}>CONSULTANCY</span>
              </span>
            </Link>
            
            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4 lg:space-x-8">
                {navLinks.map((link) => (
                  <div 
                    key={link.name} 
                    className="relative group"
                    onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={link.href}
                      className={`px-3 py-2 rounded-md text-sm font-bold transition-colors flex items-center gap-1 uppercase tracking-wider ${
                        location.pathname === link.href ? 'text-red-600' : textColor + ' hover:text-red-600'
                      }`}
                    >
                      {link.name}
                      {link.subLinks && <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {link.subLinks && activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden py-4"
                        >
                          <div className="px-6 pb-2 mb-2 border-b border-slate-50">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Our Solutions</span>
                          </div>
                          <div className="grid grid-cols-1">
                            {link.subLinks.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.href}
                                className="px-6 py-3 hover:bg-slate-50 transition-colors group/item"
                              >
                                <div>
                                  <div className="text-sm font-bold text-slate-900 group-hover/item:text-red-600 transition-colors">{sub.name}</div>
                                  <div className="text-[11px] text-slate-500">{sub.desc}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <Link to="/join-us" className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/30 uppercase tracking-wider">
                  Join Us
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md ${isScrolled || !isHome ? 'text-slate-900' : 'text-white'}`}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[80vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.subLinks ? (
                      <div>
                        <button
                          onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                          className="w-full flex justify-between items-center px-3 py-4 text-base font-bold text-slate-700 hover:text-red-600 hover:bg-slate-50 border-b border-slate-50 uppercase tracking-wider"
                        >
                          {link.name}
                          <ChevronDown size={20} className={`transition-transform ${mobileSubmenuOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {mobileSubmenuOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="bg-slate-50 overflow-hidden"
                            >
                              {link.subLinks.map((sub) => (
                                <Link
                                  key={sub.name}
                                  to={sub.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex items-center px-8 py-4 text-sm font-medium text-slate-600 hover:text-red-600 border-b border-slate-100 last:border-0"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-3 py-4 text-base font-bold text-slate-700 hover:text-red-600 hover:bg-slate-50 border-b border-slate-50 last:border-0 uppercase tracking-wider"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="p-3 space-y-3">
                  <Link to="/join-us" onClick={() => setIsMobileMenuOpen(false)} className="w-full block text-center bg-red-600 text-white px-6 py-3 rounded-xl text-base font-bold uppercase tracking-wider">
                    Join Us
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

const heroSlides = [
  {
    image: 'https://picsum.photos/seed/corporate/1920/1080',
    badge: { Icon: ShieldCheck, text: 'Authorized Agency · Investing Agency Investors Berhad' },
    titleLines: [
      { text: 'Master Your ', highlight: false },
      { text: 'Wealth', highlight: true },
      { text: ', Build Your ', highlight: false },
      { text: 'Future', highlight: true },
      { text: '.', highlight: false },
    ],
    desc: "Advisor Consultancy is Malaysia's premier financial agency. We transform individuals into professional consultants while managing wealth with precision and integrity.",
    cta1: { label: 'Get Started', to: '/contact' },
    cta2: { label: 'Our Services', to: '/services' },
  },
  {
    image: 'https://picsum.photos/seed/ourstory2024/1920/1080',
    badge: { Icon: Clock, text: 'Est. 2009 — Klang Valley, Malaysia' },
    titleLines: [
      { text: 'A Legacy ', highlight: false },
      { text: 'Forged', highlight: true },
      { text: ' Through\nTrust & ', highlight: false },
      { text: 'Discipline', highlight: true },
      { text: '.', highlight: false },
    ],
    desc: 'Born from a vision to democratize professional financial guidance in Malaysia, we have grown from a small team of passionate consultants into a high-performing agency trusted by thousands of families and businesses.',
    cta1: { label: 'Our Story', to: '/about' },
    cta2: { label: 'Meet the Team', to: '/about' },
  },
  {
    image: 'https://picsum.photos/seed/visionmission/1920/1080',
    badge: { Icon: Target, text: 'Vision & Mission' },
    titleLines: [
      { text: 'Guided by ', highlight: false },
      { text: 'Purpose', highlight: true },
      { text: ',\nDriven by ', highlight: false },
      { text: 'Excellence', highlight: true },
      { text: '.', highlight: false },
    ],
    desc: "Our vision is to be Malaysia's most trusted financial advisory agency. Our mission is to empower every Malaysian to achieve financial freedom through disciplined wealth planning and professional guidance.",
    cta1: { label: 'About Us', to: '/about' },
    cta2: { label: 'Our Commitment', to: '/sustainability' },
  },
  {
    image: 'https://picsum.photos/seed/awards2024/1920/1080',
    badge: { Icon: Award, text: 'Award-Winning Performance' },
    titleLines: [
      { text: '500+ ', highlight: false },
      { text: 'Consultants', highlight: true },
      { text: '.\nRM 1B+ ', highlight: false },
      { text: 'Assets Managed', highlight: true },
      { text: '.', highlight: false },
    ],
    desc: 'From Refinitiv Lipper Fund Award recognition to topping national performance charts — every milestone reflects our relentless commitment to delivering consistent, risk-adjusted returns for our clients.',
    cta1: { label: 'Our Achievements', to: '/about' },
    cta2: { label: 'Investor Relations', to: '/investor-relations' },
  },
  {
    image: 'https://picsum.photos/seed/jointeam2024/1920/1080',
    badge: { Icon: Rocket, text: 'Join Our Elite Team' },
    titleLines: [
      { text: 'Transform Your ', highlight: false },
      { text: 'Career', highlight: true },
      { text: '\nInto a Professional ', highlight: false },
      { text: 'Legacy', highlight: true },
      { text: '.', highlight: false },
    ],
    desc: "We don't just hire consultants — we build leaders. If you have the ambition and the drive to succeed, our structured mentorship program will take you from ground zero to the pinnacle of the industry.",
    cta1: { label: 'Join Now', to: '/join-us' },
    cta2: { label: 'View Career Paths', to: '/career' },
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent(prev => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNav = (dir: number) => {
    setDirection(dir);
    setCurrent(prev => (prev + dir + heroSlides.length) % heroSlides.length);
  };

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const contentVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 50 : -50 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -50 : 50 }),
  };

  const slide = heroSlides[current];

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">

      {/* Background layers — crossfade with Ken Burns */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1.16 }}
            transition={{ duration: 8, ease: 'linear' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/60 to-slate-900/20" />
        </motion.div>
      </AnimatePresence>

      {/* Slide content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-500/30 px-3 py-1 rounded-full mb-6">
              <slide.badge.Icon className="text-red-500 shrink-0" size={16} />
              <span className="text-red-400 text-xs font-bold uppercase tracking-widest">{slide.badge.text}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              {slide.titleLines.map((part, i) =>
                part.text.includes('\n')
                  ? part.text.split('\n').map((segment, si, arr) => (
                      <React.Fragment key={`${i}-${si}`}>
                        {part.highlight ? <span className="text-red-500">{segment}</span> : segment}
                        {si < arr.length - 1 && <br />}
                      </React.Fragment>
                    ))
                  : part.highlight
                    ? <span key={i} className="text-red-500">{part.text}</span>
                    : <React.Fragment key={i}>{part.text}</React.Fragment>
              )}
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">{slide.desc}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={slide.cta1.to}
                className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-red-700 transition-all flex items-center justify-center group shadow-xl shadow-red-600/20"
              >
                {slide.cta1.label} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={slide.cta2.to}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all flex items-center justify-center"
              >
                {slide.cta2.label}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrow navigation */}
      <button
        onClick={() => handleNav(-1)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => handleNav(1)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === current ? 'w-8 h-2 bg-red-500' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Consultants Trained', value: '500+', icon: Users },
    { label: 'Assets Managed', value: 'RM 1B+', icon: TrendingUp },
    { label: 'Years Excellence', value: '15+', icon: Award },
    { label: 'Success Rate', value: '98%', icon: Target },
  ];

  return (
    <section className="bg-white py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="text-red-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Unit Trust Funds',
      desc: 'Diversified portfolios managed by Kenanga Investors Berhad to maximize your long-term capital growth.',
      icon: TrendingUp
    },
    {
      title: 'Retirement (PRS)',
      desc: 'Private Retirement Schemes designed to help you accumulate savings for a comfortable retirement.',
      icon: PiggyBank
    },
    {
      title: 'Insurance & Takaful',
      desc: 'Comprehensive protection plans for life, health, and critical illness to secure your family\'s future.',
      icon: ShieldCheck
    },
    {
      title: 'Medical Coverage',
      desc: 'Premium medical cards and health insurance to ensure you have access to the best healthcare.',
      icon: HeartPulse
    },
    {
      title: 'Estate Planning',
      desc: 'Professional will writing and trust services to ensure your legacy is preserved and distributed as intended.',
      icon: Scale
    },
    {
      title: 'Corporate Solutions',
      desc: 'Tailored employee benefits and corporate insurance solutions for businesses of all sizes.',
      icon: Building2
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl font-bold text-slate-900">Comprehensive Financial Solutions</h3>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 group"
            >
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-600 transition-colors duration-500">
                <service.icon className="text-red-600 group-hover:text-white transition-colors duration-500" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-8">
                {service.desc}
              </p>
              <Link to="/services" className="inline-flex items-center text-red-600 font-bold group-hover:underline">
                Learn More <ChevronRight size={18} className="ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Career = () => {
  return (
    <section id="career" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/mentorship/800/1000" 
                alt="Mentorship" 
                className="rounded-3xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-red-600 rounded-3xl -z-0"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-red-600 rounded-3xl translate-x-6 translate-y-6 -z-10"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">Career Growth</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
              Transform Your Career Into a Professional Legacy
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We don't just hire consultants; we build leaders. Our mentorship program in Klang Valley is designed to take you from ground zero to a high-performing financial professional.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                'Structured Mentorship Program',
                'High Performance Culture',
                'Unlimited Income Potential',
                'Comprehensive Training & Support',
                'Incentive Trips & Recognition'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-slate-700 font-medium">
                  <CheckCircle2 className="text-red-600 mr-3" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/join-us" className="bg-slate-900 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-slate-800 transition-all flex items-center group w-fit">
              Join Our Agency <Rocket className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-red-600 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white/80 font-bold tracking-widest uppercase text-sm mb-4">About Us</h2>
          <h3 className="text-4xl font-bold mb-8">A Trusted Partner of Investing Agency Investors Berhad</h3>
          <p className="text-xl text-white/90 leading-relaxed mb-12">
            Based in Petaling Jaya and Wangsa Maju, Advisor Consultancy operates as a high-performing agency under the umbrella of Investing Agency Investors Berhad. We leverage decades of institutional expertise to deliver boutique-level service to our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h4 className="text-2xl font-bold mb-2">Integrity</h4>
              <p className="text-sm text-white/70">Always putting client interests first in every decision.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h4 className="text-2xl font-bold mb-2">Excellence</h4>
              <p className="text-sm text-white/70">Striving for the highest standards in financial consulting.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h4 className="text-2xl font-bold mb-2">Growth</h4>
              <p className="text-sm text-white/70">Continuous learning and development for our team.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 bg-slate-900 text-white">
            <h3 className="text-4xl font-bold mb-8">Get In Touch</h3>
            <p className="text-slate-400 mb-12 text-lg">
              Ready to start your investment journey or join our elite team? Contact us today for a consultation.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-6 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-1">Our Offices</h5>
                  <p className="text-slate-400">Petaling Jaya & Wangsa Maju,<br />Klang Valley, Malaysia</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-6 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-1">Call Us</h5>
                  <p className="text-slate-400">+60 3-XXXX XXXX</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-6 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-1">Email Us</h5>
                  <p className="text-slate-400">info@advisorconsultancy.com.my</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 p-12 lg:p-20">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-green-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Received</h3>
                <p className="text-slate-500 mb-8">Thank you for reaching out. One of our consultants will be in touch with you within one business day.</p>
                <button onClick={() => setSubmitted(false)} className="text-red-600 font-bold hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Full Name</label>
                    <input type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Email Address</label>
                    <input type="email" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Subject</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 transition-all appearance-none">
                    <option>Investment Inquiry</option>
                    <option>Career Opportunities</option>
                    <option>Wealth Management</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Message</label>
                  <textarea rows={4} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-red-600 text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-600/20">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <span className="text-2xl font-bold tracking-tighter text-red-600 mb-6 block">
              ADVISOR<span className="text-white">CONSULTANCY</span>
            </span>
            <p className="text-slate-400 leading-relaxed text-sm">
              Advisor Consultancy is a high-performing agency under Investing Agency Investors Berhad. We specialize in unit trust investments, financial planning, and wealth management.
            </p>
            <div className="mt-8 flex space-x-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"><Globe size={16} /></div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"><Users size={16} /></div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"><Mail size={16} /></div>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-lg mb-6 uppercase tracking-widest text-red-500 text-sm">Corporate</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/about" className="hover:text-red-600 transition-colors">About Advisor Consultancy</Link></li>
              <li><Link to="/about" className="hover:text-red-600 transition-colors">Investing Agency Investors Berhad</Link></li>
              <li><Link to="/sustainability" className="hover:text-red-600 transition-colors">Sustainability</Link></li>
              <li><Link to="/career" className="hover:text-red-600 transition-colors">Career Opportunities</Link></li>
              <li><Link to="/newsroom" className="hover:text-red-600 transition-colors">Newsroom</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-lg mb-6 uppercase tracking-widest text-red-500 text-sm">Products</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/services" className="hover:text-red-600 transition-colors">Unit Trust Funds</Link></li>
              <li><Link to="/services" className="hover:text-red-600 transition-colors">Private Retirement Schemes</Link></li>
              <li><Link to="/services" className="hover:text-red-600 transition-colors">Life Insurance & Takaful</Link></li>
              <li><Link to="/services" className="hover:text-red-600 transition-colors">Medical & Health</Link></li>
              <li><Link to="/services" className="hover:text-red-600 transition-colors">Estate Planning</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-lg mb-6 uppercase tracking-widest text-red-500 text-sm">Regulatory</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/contact" className="hover:text-red-600 transition-colors">PDPA Notice</Link></li>
              <li><Link to="/contact" className="hover:text-red-600 transition-colors">Security & Fraud</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-red-600 transition-colors">Terms of Use</Link></li>
              <li><Link to="/contact" className="hover:text-red-600 transition-colors">Disclaimer</Link></li>
              <li><Link to="/contact" className="hover:text-red-600 transition-colors">Client Charter</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Advisor Consultancy. All rights reserved. Advisor Consultancy is an authorized agency of Investing Agency Investors Berhad.
          </p>
          <div className="flex space-x-6 text-slate-500 text-xs">
            <Link to="/" className="hover:text-white transition-colors">Sitemap</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Page Components ---

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Tan Sri Dr. Lim',
      role: 'Business Owner',
      content: 'Advisor Consultancy has been instrumental in managing my corporate wealth. Their association with Investing Agency gives me the confidence that my investments are in safe hands.',
      image: 'https://picsum.photos/seed/client1/100/100'
    },
    {
      name: 'Siti Aminah',
      role: 'Senior Engineer',
      content: 'The PRS and Unit Trust advice I received was top-notch. I finally feel like my retirement is on the right track thanks to their professional guidance.',
      image: 'https://picsum.photos/seed/client2/100/100'
    },
    {
      name: 'David Richardson',
      role: 'Expatriate',
      content: 'As an expat in Malaysia, navigating the local financial landscape was daunting. The team here made it seamless and helped me secure my family\'s future.',
      image: 'https://picsum.photos/seed/client3/100/100'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl font-bold text-slate-900">What Our Clients Say</h3>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Real stories from individuals and businesses who have achieved financial growth with our help.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 p-8 rounded-[2rem] relative group hover:bg-red-600 transition-colors duration-500"
            >
              <Quote className="absolute top-8 right-8 text-red-100 group-hover:text-white/20 transition-colors" size={48} />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-white" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-white transition-colors">{t.name}</h4>
                  <p className="text-xs text-slate-500 group-hover:text-white/70 transition-colors">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed group-hover:text-white/90 transition-colors">
                "{t.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />

      {/* Quick Access Bar */}
      <div className="bg-slate-50 border-b border-slate-100 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-1 h-10 bg-red-600 rounded-full shrink-0" />
            <div>
              <p className="font-bold text-slate-900 leading-tight">Welcome to Advisor Consultancy,</p>
              <div className="flex items-center gap-2 text-slate-600 text-sm mt-0.5">
                <span>Are you looking for</span>
                <div className="relative inline-block">
                  <select className="appearance-none border-b-2 border-red-600 bg-transparent font-semibold pl-1 pr-5 py-0.5 text-slate-900 focus:outline-none cursor-pointer text-sm">
                    <option>Latest Topics</option>
                    <option>Investment Products</option>
                    <option>Career Opportunities</option>
                    <option>Upcoming Events</option>
                    <option>Contact &amp; Support</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600" size={13} />
                </div>
              </div>
            </div>
          </div>
          <Link
            to="/event-calendar"
            className="flex items-center gap-2 bg-red-700 text-white px-5 py-3 rounded-full font-bold text-sm hover:bg-red-800 transition-colors shadow-md shrink-0"
          >
            <Calendar size={15} />
            Event Calendar
          </Link>
        </div>
      </div>

      <Stats />
      
      {/* Featured News / Insights Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">Newsroom</h2>
              <h3 className="text-4xl font-bold text-slate-900">Latest Insights & Updates</h3>
            </div>
            <Link to="/newsroom" className="text-red-600 font-bold flex items-center gap-2 hover:underline">
              View All News <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Investing Agency Investors Wins Multiple Awards at Refinitiv Lipper Fund Awards 2024', 
                date: 'Feb 15, 2024', 
                category: 'Awards',
                img: 'https://picsum.photos/seed/news1/600/400'
              },
              { 
                title: 'Market Outlook: Navigating Global Economic Shifts in Q1 2024', 
                date: 'Jan 28, 2024', 
                category: 'Insights',
                img: 'https://picsum.photos/seed/news2/600/400'
              },
              { 
                title: 'Advisor Consultancy Expands Mentorship Program to Wangsa Maju Hub', 
                date: 'Jan 10, 2024', 
                category: 'Agency',
                img: 'https://picsum.photos/seed/news3/600/400'
              },
            ].map((news, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {news.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-slate-400 text-xs mb-3 font-medium">{news.date}</div>
                  <h4 className="text-lg font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-red-600 transition-colors">
                    {news.title}
                  </h4>
                  <Link to="/newsroom" className="text-sm font-bold text-slate-900 flex items-center gap-2 group/link">
                    Read More <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">Your Financial Success is Our Mission</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At Advisor Consultancy, we combine the institutional strength of Investing Agency Investors with the personalized touch of a boutique agency. We are committed to helping you navigate the complexities of the financial world.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Expert Advice', desc: 'Certified consultants with years of experience.', icon: Award },
                  { title: 'Custom Solutions', desc: 'Tailored plans for your unique goals.', icon: Target },
                  { title: 'Proven Results', desc: 'A track record of consistent growth.', icon: TrendingUp },
                  { title: 'Global Reach', desc: 'Access to international markets.', icon: Globe },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="text-red-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://picsum.photos/seed/success/800/600" 
                alt="Success" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-red-500 font-bold tracking-widest uppercase text-sm mb-4">Recognition</h2>
            <h3 className="text-4xl font-bold">Awards & Accolades</h3>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Our commitment to excellence has been recognized by the industry's most prestigious bodies.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { title: 'Best Fund House', year: '2023', body: 'Refinitiv Lipper' },
              { title: 'Top Agency', year: '2022', body: 'Investing Agency Investors' },
              { title: 'Excellence in PRS', year: '2023', body: 'FIMM' },
              { title: 'Best Wealth Manager', year: '2021', body: 'Alpha Southeast Asia' },
            ].map((award, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors duration-500">
                  <Award size={40} className="text-red-500 group-hover:text-white transition-colors duration-500" />
                </div>
                <h4 className="text-xl font-bold mb-1">{award.title}</h4>
                <p className="text-red-500 font-bold text-sm mb-1">{award.year}</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest">{award.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Sustainability Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src="https://picsum.photos/seed/sustainability/800/600" 
                alt="Sustainability" 
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">Sustainability</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">Investing in a Better Tomorrow</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We believe that sustainable growth is the only way forward. Advisor Consultancy is committed to ESG (Environmental, Social, and Governance) principles, ensuring that our investments contribute positively to society and the environment.
              </p>
              <Link to="/about" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center w-fit gap-2">
                Our ESG Commitment <ExternalLink size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Assessment Teaser */}
      <section className="py-24 bg-red-600 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-2/3">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Not sure where to start?</h3>
              <p className="text-xl text-white/80">Take our 2-minute risk assessment to find the investment strategy that matches your personality and goals.</p>
            </div>
            <div className="lg:w-1/3 flex justify-center lg:justify-end">
              <Link to="/contact" className="bg-white text-red-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-slate-100 transition-all shadow-2xl flex items-center gap-3 group">
                Start Assessment <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <About />
    </>
  );
};

const NewsroomPage = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const news = [
    {
      title: 'Investing Agency Investors Wins Multiple Awards at Refinitiv Lipper Fund Awards 2024',
      date: 'Feb 15, 2024',
      category: 'Awards',
      img: 'https://picsum.photos/seed/news1/800/500',
      preview: 'Investing Agency Investors Berhad has once again demonstrated its investment prowess by securing multiple prestigious awards at the Refinitiv Lipper Fund Awards 2024.',
      fullContent: 'Investing Agency Investors Berhad has once again demonstrated its investment prowess by securing multiple prestigious awards at the Refinitiv Lipper Fund Awards 2024. This recognition underscores our commitment to delivering consistent, risk-adjusted returns for our investors across various asset classes. The awards span equity, fixed income, and mixed asset categories, cementing our position as one of Malaysia\'s most decorated fund managers. Our Chief Investment Officer, in his acceptance remarks, attributed this achievement to the team\'s disciplined investment process, robust risk management framework, and unwavering focus on long-term value creation for clients.'
    },
    {
      title: 'Market Outlook: Navigating Global Economic Shifts in Q1 2024',
      date: 'Jan 28, 2024',
      category: 'Insights',
      img: 'https://picsum.photos/seed/news2/800/500',
      preview: 'As we enter the first quarter of 2024, global markets continue to face a complex landscape of inflationary pressures, shifting interest rate expectations, and geopolitical developments.',
      fullContent: 'As we enter the first quarter of 2024, global markets continue to face a complex landscape of inflationary pressures, shifting interest rate expectations, and geopolitical developments. Our investment team provides an in-depth analysis of these trends and how they impact portfolio strategies. Key themes include the anticipated pivot in US Federal Reserve monetary policy, resilient Asian emerging market fundamentals, and the ongoing structural transformation driven by technology and green energy. Investors are advised to maintain diversified portfolios and consider increasing allocation to defensive assets while preserving exposure to high-growth sectors in the region.'
    },
    {
      title: 'Advisor Consultancy Expands Mentorship Program to Wangsa Maju Hub',
      date: 'Jan 10, 2024',
      category: 'Agency',
      img: 'https://picsum.photos/seed/news3/800/500',
      preview: 'In line with our mission to transform individuals into professional financial consultants, Advisor Consultancy is proud to announce the expansion of our structured mentorship program.',
      fullContent: 'In line with our mission to transform individuals into professional financial consultants, Advisor Consultancy is proud to announce the expansion of our structured mentorship program to our new hub in Wangsa Maju. This move aims to provide better support for our growing team in the region. The Wangsa Maju hub will serve as a dedicated training and collaboration centre, equipped with modern facilities and led by a team of senior managers with over a decade of field experience. New recruits joining through this hub will benefit from an accelerated 90-day onboarding track, weekly performance coaching, and direct access to our nationwide consultant network.'
    },
  ];

  return (
    <div className="pt-24">
      <section className="bg-slate-900 py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-5xl font-bold mb-6"
          >
            Newsroom
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Stay updated with the latest news, market insights, and agency developments from Advisor Consultancy and Investing Agency Investors.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {news.map((item, idx) => {
              const isExpanded = expandedIdx === idx;
              return (
                <div key={idx} className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="lg:w-1/2">
                    <img src={item.img} alt={item.title} className="rounded-3xl shadow-xl w-full" referrerPolicy="no-referrer" />
                  </div>
                  <div className="lg:w-1/2">
                    <div className="text-red-600 font-bold text-sm uppercase tracking-widest mb-2">{item.category} | {item.date}</div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">{item.title}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                      {isExpanded ? item.fullContent : item.preview}
                    </p>
                    <button
                      onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                      className="text-red-600 font-bold flex items-center gap-2 hover:underline"
                    >
                      {isExpanded ? 'Collapse' : 'Read Full Article'} <ArrowRight size={18} className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

const SustainabilityPage = () => {
  return (
    <div className="pt-24">
      <section className="bg-slate-900 py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-5xl font-bold mb-6"
          >
            Sustainability at Advisor Consultancy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Our commitment to Environmental, Social, and Governance (ESG) principles drives our investment philosophy and corporate actions.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-24">
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8">
                <Globe className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Environmental</h3>
              <p className="text-slate-600 leading-relaxed">
                We prioritize investments in companies that demonstrate strong environmental stewardship, focusing on renewable energy, resource efficiency, and climate resilience.
              </p>
            </div>
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Social</h3>
              <p className="text-slate-600 leading-relaxed">
                We believe in supporting businesses that value human capital, promote diversity and inclusion, and contribute positively to the communities they operate in.
              </p>
            </div>
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-8">
                <ShieldCheck className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Governance</h3>
              <p className="text-slate-600 leading-relaxed">
                Strong corporate governance is essential for long-term value creation. We advocate for transparency, accountability, and ethical leadership in all our portfolio companies.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our ESG Integration Process</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                ESG factors are not just an "add-on" to our investment process; they are deeply integrated into our fundamental analysis. We use a combination of proprietary research and third-party data to assess the sustainability profile of every investment opportunity.
              </p>
              <ul className="space-y-4">
                {['Negative Screening', 'Positive Tilting', 'Active Engagement', 'Thematic Investing'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-500" size={20} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img src="https://picsum.photos/seed/esg/800/600" alt="ESG" className="rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const InvestorRelationsPage = () => {
  return (
    <div className="pt-24">
      <section className="bg-slate-900 py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-5xl font-bold mb-6"
          >
            Investor Relations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Providing transparency and value to our stakeholders through timely and accurate information.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Financial Reports</h2>
              <div className="space-y-4">
                {[
                  { title: 'Annual Report 2023', size: '4.5 MB' },
                  { title: 'Interim Report Q3 2023', size: '2.1 MB' },
                  { title: 'Sustainability Report 2023', size: '3.8 MB' },
                  { title: 'Corporate Presentation Dec 2023', size: '5.2 MB' },
                ].map((report, idx) => (
                  <div key={idx} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors">
                        <FileText className="text-red-600 group-hover:text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{report.title}</div>
                        <div className="text-xs text-slate-500">{report.size} | PDF</div>
                      </div>
                    </div>
                    <ArrowRight className="text-slate-300 group-hover:text-red-600 transition-colors" size={20} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Corporate Governance</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We are committed to maintaining the highest standards of corporate governance. Our board of directors and management team work together to ensure that our operations are conducted with integrity and transparency.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {['Board Charter', 'Code of Ethics', 'Whistleblowing Policy', 'Anti-Bribery & Corruption Policy'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <ShieldCheck className="text-red-600" size={20} />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const serviceData: Record<string, any> = {
  'unit-trust': {
    title: 'Unit Trust Funds',
    longDesc: 'Unit trusts are a collective investment scheme that pools money from many investors to invest in a diversified portfolio of assets such as stocks, bonds, and other securities. Our funds are managed by professional fund managers from Investing Agency Investors Berhad, ensuring your investments are in expert hands.',
    benefits: [
      'Professional Fund Management',
      'Diversification Across Asset Classes',
      'Liquidity and Flexibility',
      'Regulated by Securities Commission Malaysia'
    ],
    image: 'https://picsum.photos/seed/unittrust/1200/600',
    gallery: [
      'https://picsum.photos/seed/ut1/800/600',
      'https://picsum.photos/seed/ut2/800/600',
      'https://picsum.photos/seed/ut3/800/600'
    ],
    detailedSections: [
      {
        title: 'Why Invest in Unit Trusts?',
        content: 'Unit trusts offer an accessible way for individual investors to participate in a diversified portfolio that would otherwise be difficult to manage alone. By pooling resources, investors benefit from professional expertise and economies of scale.'
      },
      {
        title: 'Our Investment Philosophy',
        content: 'We focus on long-term value creation through rigorous research and disciplined risk management. Our fund managers actively monitor market conditions to optimize portfolio performance.'
      }
    ]
  },
  'prs': {
    title: 'Private Retirement Schemes (PRS)',
    longDesc: 'PRS is a voluntary long-term investment scheme designed to help individuals accumulate savings for retirement. It complements the mandatory contributions made to the EPF. We offer a range of PRS funds to suit different risk appetites and retirement goals.',
    benefits: [
      'Tax Relief up to RM3,000 per year',
      'Choice of Various Fund Providers',
      'Flexible Contribution Amounts',
      'Complementary to EPF Savings'
    ],
    image: 'https://picsum.photos/seed/retirement/1200/600',
    gallery: [
      'https://picsum.photos/seed/prs1/800/600',
      'https://picsum.photos/seed/prs2/800/600',
      'https://picsum.photos/seed/prs3/800/600'
    ],
    detailedSections: [
      {
        title: 'Securing Your Golden Years',
        content: 'Retirement planning is a marathon, not a sprint. PRS provides a structured way to build a supplementary nest egg, ensuring you can maintain your lifestyle after you stop working.'
      },
      {
        title: 'Tax Incentives',
        content: 'The Malaysian government provides significant tax incentives for PRS contributors, making it one of the most efficient ways to save for the long term.'
      }
    ]
  },
  'insurance': {
    title: 'Life Insurance / Takaful',
    longDesc: 'Life insurance and Takaful provide financial security for your loved ones in the event of unforeseen circumstances. Our plans cover a wide range of needs, including death, total and permanent disability, and critical illness, ensuring your family is protected.',
    benefits: [
      'Financial Protection for Dependents',
      'Critical Illness Coverage',
      'Total and Permanent Disability Benefits',
      'Shariah-Compliant Options (Takaful)'
    ],
    image: 'https://picsum.photos/seed/insurance/1200/600',
    gallery: [
      'https://picsum.photos/seed/ins1/800/600',
      'https://picsum.photos/seed/ins2/800/600',
      'https://picsum.photos/seed/ins3/800/600'
    ],
    detailedSections: [
      {
        title: 'Protection for Every Stage',
        content: 'Whether you are just starting your career or planning for your family\'s future, we have protection plans that grow with you. Our advisors help you identify the right coverage amount based on your liabilities and goals.'
      },
      {
        title: 'Takaful: Ethical Protection',
        content: 'Our Takaful options offer Shariah-compliant protection based on the principles of mutual assistance and risk-sharing, providing peace of mind for all.'
      }
    ]
  },
  'medical': {
    title: 'Medical & Health Insurance',
    longDesc: 'With rising healthcare costs, having a comprehensive medical plan is essential. Our medical cards provide coverage for hospitalization, surgical expenses, and outpatient treatments at a wide network of panel hospitals across Malaysia.',
    benefits: [
      'Cashless Hospital Admission',
      'High Annual and Lifetime Limits',
      'Coverage for Outpatient Cancer & Dialysis',
      '24/7 Emergency Assistance'
    ],
    image: 'https://picsum.photos/seed/medical/1200/600',
    gallery: [
      'https://picsum.photos/seed/med1/800/600',
      'https://picsum.photos/seed/med2/800/600',
      'https://picsum.photos/seed/med3/800/600'
    ],
    detailedSections: [
      {
        title: 'Comprehensive Healthcare Access',
        content: 'Our medical plans are designed to give you access to the best private healthcare facilities without the burden of heavy medical bills. We partner with leading insurers to provide seamless claims experiences.'
      },
      {
        title: 'Wellness and Prevention',
        content: 'Many of our plans include wellness benefits such as health screenings and vaccinations, encouraging a proactive approach to your health.'
      }
    ]
  },
  'estate': {
    title: 'Estate Planning',
    longDesc: 'Estate planning is more than just writing a will. It involves the management and disposal of your estate during your life and at death. We provide professional services to help you create a legacy that reflects your wishes and protects your heirs.',
    benefits: [
      'Professional Will Writing',
      'Trust Creation and Management',
      'Asset Protection and Distribution',
      'Minimizing Probate Delays'
    ],
    image: 'https://picsum.photos/seed/estate/1200/600',
    gallery: [
      'https://picsum.photos/seed/est1/800/600',
      'https://picsum.photos/seed/est2/800/600',
      'https://picsum.photos/seed/est3/800/600'
    ],
    detailedSections: [
      {
        title: 'Legacy Preservation',
        content: 'Ensure that your hard-earned assets are passed on to your loved ones according to your wishes. Proper estate planning prevents family disputes and ensures a smooth transition of wealth.'
      },
      {
        title: 'Trust Services',
        content: 'Trusts can be used to manage assets for minor children, provide for family members with special needs, or protect assets from creditors.'
      }
    ]
  },
  'corporate': {
    title: 'Corporate Solutions',
    longDesc: 'We help businesses attract and retain talent by providing comprehensive employee benefit programs, including group medical insurance, group term life, and retirement schemes. Our solutions are designed to be cost-effective and easy to manage.',
    benefits: [
      'Group Medical & Life Insurance',
      'Employee Retirement Benefits',
      'Keyman Insurance for Business Continuity',
      'Customizable Benefit Packages'
    ],
    image: 'https://picsum.photos/seed/corporate-solutions/1200/600',
    gallery: [
      'https://picsum.photos/seed/corp1/800/600',
      'https://picsum.photos/seed/corp2/800/600',
      'https://picsum.photos/seed/corp3/800/600'
    ],
    detailedSections: [
      {
        title: 'Empowering Your Workforce',
        content: 'A healthy and secure workforce is a productive one. Our corporate solutions help you build a competitive benefits package that demonstrates your commitment to your employees\' well-being.'
      },
      {
        title: 'Business Continuity Planning',
        content: 'Protect your business from the loss of key personnel with Keyman Insurance and partnership protection plans, ensuring the stability of your operations.'
      }
    ]
  }
};

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId || ''];

  if (!service) {
    return <div className="pt-48 text-center">Service not found.</div>;
  }

  return (
    <div className="pt-24">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            {service.title}
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            className="w-24 h-1 bg-red-600 mx-auto origin-left"
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Overview</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-12">
                {service.longDesc}
              </p>
              
              <div className="space-y-12 mb-12">
                {service.detailedSections?.map((section: any, idx: number) => (
                  <div key={idx}>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-8">Key Benefits</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                {service.benefits.map((benefit: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="text-red-600 shrink-0" size={24} />
                    <span className="font-bold text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {service.gallery && (
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">Product Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {service.gallery.map((img: string, idx: number) => (
                      <img 
                        key={idx} 
                        src={img} 
                        alt={`${service.title} gallery ${idx}`} 
                        className="rounded-2xl shadow-lg w-full h-64 object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-slate-900 rounded-[2rem] p-10 text-white sticky top-32">
                <h3 className="text-2xl font-bold mb-6">Interested in {service.title}?</h3>
                <p className="text-slate-400 mb-8">
                  Our certified advisors are ready to help you tailor a plan that fits your specific needs and goals.
                </p>
                <Link to="/contact" className="w-full block text-center bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-600/20">
                  Consult an Expert
                </Link>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <Phone className="text-red-500" size={20} />
                    <span className="text-sm">+60 3-1234 5678</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-red-500" size={20} />
                    <span className="text-sm">info@advisorconsultancy.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      id: 'unit-trust',
      title: 'Unit Trust Funds',
      desc: 'Diversified portfolios managed by Kenanga Investors Berhad to maximize your long-term capital growth.',
      icon: TrendingUp,
      longDesc: 'Unit trusts are a collective investment scheme that pools money from many investors to invest in a diversified portfolio of assets such as stocks, bonds, and other securities. Our funds are managed by professional fund managers from Investing Agency Investors Berhad, ensuring your investments are in expert hands.',
      image: 'https://picsum.photos/seed/unittrust/800/500'
    },
    {
      id: 'prs',
      title: 'Retirement (PRS)',
      desc: 'Private Retirement Schemes designed to help you accumulate savings for a comfortable retirement.',
      icon: PiggyBank,
      longDesc: 'PRS is a voluntary long-term investment scheme designed to help individuals accumulate savings for retirement. It complements the mandatory contributions made to the EPF. We offer a range of PRS funds to suit different risk appetites and retirement goals.',
      image: 'https://picsum.photos/seed/retirement/800/500'
    },
    {
      id: 'insurance',
      title: 'Insurance & Takaful',
      desc: 'Comprehensive protection plans for life, health, and critical illness to secure your family\'s future.',
      icon: ShieldCheck,
      longDesc: 'Life insurance and Takaful provide financial security for your loved ones in the event of unforeseen circumstances. Our plans cover a wide range of needs, including death, total and permanent disability, and critical illness, ensuring your family is protected.',
      image: 'https://picsum.photos/seed/insurance/800/500'
    },
    {
      id: 'medical',
      title: 'Medical Coverage',
      desc: 'Premium medical cards and health insurance to ensure you have access to the best healthcare.',
      icon: HeartPulse,
      longDesc: 'With rising healthcare costs, having a comprehensive medical plan is essential. Our medical cards provide coverage for hospitalization, surgical expenses, and outpatient treatments at a wide network of panel hospitals across Malaysia.',
      image: 'https://picsum.photos/seed/medical/800/500'
    },
    {
      id: 'estate',
      title: 'Estate Planning',
      desc: 'Professional will writing and trust services to ensure your legacy is preserved and distributed as intended.',
      icon: Scale,
      longDesc: 'Estate planning is more than just writing a will. It involves the management and disposal of your estate during your life and at death. We provide professional services to help you create a legacy that reflects your wishes and protects your heirs.',
      image: 'https://picsum.photos/seed/estate/800/500'
    },
    {
      id: 'corporate',
      title: 'Corporate Solutions',
      desc: 'Tailored employee benefits and corporate insurance solutions for businesses of all sizes.',
      icon: Building2,
      longDesc: 'We help businesses attract and retain talent by providing comprehensive employee benefit programs, including group medical insurance, group term life, and retirement schemes. Our solutions are designed to be cost-effective and easy to manage.',
      image: 'https://picsum.photos/seed/corporate-solutions/800/500'
    }
  ];

  return (
    <div className="pt-24">
      <section className="bg-slate-900 py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Financial Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Explore our wide range of financial solutions designed to help you build, protect, and manage your wealth effectively.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
              >
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {service.longDesc}
                  </p>
                  <Link to={`/services/${service.id}`} className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-all">
                    Learn More
                  </Link>
                </div>
                <div className="lg:w-1/2">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-3xl shadow-2xl w-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const CareerPage = () => {
  return (
    <div className="pt-24">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/career-hero/1920/1080" 
            alt="Career Hero" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-6"
          >
            Join the Elite Agency
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="text-xl text-slate-600 max-w-3xl mx-auto mb-10"
          >
            We are looking for ambitious individuals who want to build a rewarding career in financial consulting. Start your journey with Advisor Consultancy today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <Link to="/join-us" className="bg-red-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-600/20">
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">Benefits</h2>
            <h3 className="text-4xl font-bold text-slate-900">Why Join Advisor Consultancy?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Unlimited Income', desc: 'Your earnings are directly tied to your performance. No income ceiling.', icon: PiggyBank },
              { title: 'Flexible Hours', desc: 'Be your own boss and manage your own schedule for a better work-life balance.', icon: Clock },
              { title: 'Mentorship', desc: 'Learn from the best in the industry with our structured training programs.', icon: Users },
              { title: 'Recognition', desc: 'Get rewarded with incentive trips, awards, and public recognition.', icon: Award },
              { title: 'Fast Track', desc: 'Clear path to management and leadership roles within the agency.', icon: Zap },
              { title: 'Impact', desc: 'Help people achieve their financial dreams and secure their futures.', icon: HeartPulse },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="text-red-600" size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
                <p className="text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src="https://picsum.photos/seed/training/800/600" 
                alt="Training" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">Training & Support</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">We Invest in Your Success</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                New consultants undergo a rigorous 90-day onboarding program that covers product knowledge, sales techniques, and financial planning fundamentals. You'll be paired with a senior mentor who will guide you every step of the way.
              </p>
              <div className="space-y-4">
                {[
                  'Weekly training sessions',
                  'Digital sales tools and CRM',
                  'Marketing support and leads',
                  'Professional certification assistance'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-red-600" size={20} />
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-24">
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-5xl font-bold text-slate-900 mb-6"
            >
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Advisor Consultancy was founded with a simple vision: to bridge the gap between institutional financial expertise and everyday Malaysians.
            </motion.p>
          </div>
          <img 
            src="https://picsum.photos/seed/office/1200/500" 
            alt="Office" 
            className="rounded-[3rem] shadow-2xl mb-24 w-full"
            referrerPolicy="no-referrer"
          />
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To empower individuals and families to achieve financial freedom through expert advice, ethical practices, and innovative financial solutions. We strive to be the most trusted financial agency in Malaysia.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To create a legacy of financial literacy and wealth creation across Malaysia, transforming the lives of our clients and our consultants through excellence and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">Our Values</h2>
            <h3 className="text-4xl font-bold text-slate-900">What Drives Us</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', desc: 'We do what is right, even when no one is looking.', icon: ShieldCheck },
              { title: 'Innovation', desc: 'Always seeking better ways to serve our clients.', icon: Lightbulb },
              { title: 'Excellence', desc: 'Striving for perfection in everything we do.', icon: Star },
              { title: 'Teamwork', desc: 'Collaborating to achieve greater success together.', icon: Users },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl text-center shadow-md">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-red-600" size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                <p className="text-slate-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'Dato\' Ahmad Razali', role: 'Agency Manager', img: 'https://picsum.photos/seed/leader1/400/400' },
              { name: 'Sarah Tan', role: 'Senior Unit Manager', img: 'https://picsum.photos/seed/leader2/400/400' },
              { name: 'Michael Wong', role: 'Training Director', img: 'https://picsum.photos/seed/leader3/400/400' },
            ].map((leader, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <img src={leader.img} alt={leader.name} className="w-full transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><Mail size={16} className="text-white" /></div>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><Users size={16} className="text-white" /></div>
                    </div>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-slate-900">{leader.name}</h4>
                <p className="text-red-600 font-medium">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactPage = () => {
  const [advisorSearch, setAdvisorSearch] = useState('');
  const [searchSubmitted, setSearchSubmitted] = useState(false);

  const handleAdvisorSearch = () => {
    if (advisorSearch.trim()) setSearchSubmitted(true);
  };

  return (
    <div className="pt-24">
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-5xl font-bold text-slate-900 mb-6 uppercase tracking-tighter"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
              Have questions or ready to start? Reach out to us through any of the channels below.
            </motion.p>
          </div>
          <Contact />
        </div>
      </section>

      {/* Advisor Finder UI */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-red-500 font-bold tracking-widest uppercase text-sm mb-4">Find an Expert</h2>
              <h3 className="text-4xl font-bold mb-6">Locate an Advisor Near You</h3>
              <p className="text-slate-400">Search for our certified consultants by location or expertise to get personalized financial advice.</p>
            </div>
            
            <div className="max-w-2xl mx-auto relative mb-12">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
              <input
                type="text"
                value={advisorSearch}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setAdvisorSearch(e.target.value); setSearchSubmitted(false); }}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => { if (e.key === 'Enter') handleAdvisorSearch(); }}
                placeholder="Enter your city or area (e.g. Petaling Jaya)"
                className="w-full bg-white/10 border border-white/20 rounded-full py-6 pl-16 pr-8 text-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
              />
              <button onClick={handleAdvisorSearch} className="absolute right-3 top-1/2 -translate-y-1/2 bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-all">
                Search
              </button>
            </div>

            {searchSubmitted && (
              <p className="text-center text-slate-300 mb-8">
                Showing advisors available in <span className="text-white font-bold">{advisorSearch}</span> and surrounding areas.
              </p>
            )}

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'PJ Hub', location: 'Petaling Jaya', type: 'Main Branch' },
                { name: 'Wangsa Maju Center', location: 'Kuala Lumpur', type: 'Regional Office' },
                { name: 'Klang Valley Team', location: 'Selangor', type: 'Mobile Consultants' },
              ].map((loc, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-4">
                    <MapPin className="text-red-500" size={24} />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{loc.type}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-1 group-hover:text-red-500 transition-colors">{loc.name}</h4>
                  <p className="text-slate-400 text-sm">{loc.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  { q: 'How do I start investing in Unit Trusts?', a: 'You can start by scheduling a consultation with one of our certified advisors who will assess your risk profile and goals.' },
                  { q: 'What are the requirements to join as a consultant?', a: 'We look for individuals with a minimum of SPM qualification, a positive attitude, and a strong desire to learn and grow.' },
                  { q: 'Is there a minimum investment amount?', a: 'Minimum investment amounts vary depending on the fund, but some start as low as RM 1,000.' },
                  { q: 'Where are your offices located?', a: 'Our main offices are in Petaling Jaya and Wangsa Maju, but we serve clients throughout the Klang Valley.' },
                ].map((faq, idx) => (
                  <div key={idx} className="border-b border-slate-100 pb-6">
                    <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                    <p className="text-slate-500">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-100 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-8">
                <Coffee size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Visit Our Office</h3>
              <p className="text-slate-600 mb-8">
                We'd love to host you for a coffee and a chat about your financial future.
              </p>
              <div className="space-y-4 text-slate-700 font-medium">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: By Appointment Only</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const JoinUsPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24">
      <section className="bg-slate-900 py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Start Your Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Become a part of Malaysia's fastest-growing financial consultancy agency. We provide the tools, you provide the ambition.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Advisor Consultancy?</h2>
              <div className="space-y-8">
                {[
                  { title: 'Institutional Strength', desc: 'Backed by Investing Agency Investors Berhad, one of Malaysia\'s leading asset management firms.', icon: ShieldCheck },
                  { title: 'Proven Mentorship', desc: 'Learn directly from top-tier managers who have built successful careers from scratch.', icon: Users },
                  { title: 'Digital-First Tools', desc: 'Access to cutting-edge CRM and sales platforms to manage your clients efficiently.', icon: Zap },
                  { title: 'Global Recognition', desc: 'Qualify for international conventions and industry-leading awards.', icon: Globe },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-slate-50 p-8 lg:p-12 rounded-[3rem] border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Application Form</h3>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="text-green-600" size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">Application Submitted</h4>
                  <p className="text-slate-500 mb-8">We have received your application and will reach out within 3 business days to discuss the next steps.</p>
                  <button onClick={() => setSubmitted(false)} className="text-red-600 font-bold hover:underline">Submit another application</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">First Name</label>
                      <input type="text" className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 transition-all" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Last Name</label>
                      <input type="text" className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Email Address</label>
                    <input type="email" className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Phone Number</label>
                    <input type="tel" className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 transition-all" placeholder="+60 12-345 6789" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Highest Qualification</label>
                    <select className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 transition-all appearance-none">
                      <option>SPM / O-Level</option>
                      <option>STPM / A-Level / Diploma</option>
                      <option>Bachelor's Degree</option>
                      <option>Master's Degree / PhD</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Why do you want to join us?</label>
                    <textarea rows={4} className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 transition-all" placeholder="Tell us about your ambitions..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-red-600 text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-600/20">
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PrivacyPolicyPage = () => (
  <div className="pt-24">
    <section className="bg-slate-900 py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">How Advisor Consultancy collects, uses, and protects your personal information.</p>
      </div>
    </section>
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
        <p className="text-slate-500 text-sm mb-10">Last updated: January 2024</p>
        {[
          { title: '1. Information We Collect', body: 'We collect personal information such as your name, email address, phone number, and financial goals when you submit an enquiry, register for our services, or join our team. We also collect non-personal usage data through standard web analytics.' },
          { title: '2. How We Use Your Information', body: 'Your information is used solely to provide and improve our services, respond to enquiries, process applications, and send relevant communications. We do not sell or rent your personal data to third parties.' },
          { title: '3. Data Security', body: 'We implement industry-standard security measures to safeguard your personal data against unauthorised access, alteration, disclosure, or destruction. All data is stored on secure servers within Malaysia.' },
          { title: '4. Your Rights', body: 'Under Malaysia\'s Personal Data Protection Act 2010 (PDPA), you have the right to access, correct, or withdraw consent to the processing of your personal data. To exercise these rights, contact us at info@advisorconsultancy.com.my.' },
          { title: '5. Contact Us', body: 'For any privacy-related concerns, please reach out to our Data Protection Officer at info@advisorconsultancy.com.my or visit our office at Petaling Jaya, Selangor.' },
        ].map((section, idx) => (
          <div key={idx} className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h2>
            <p className="text-slate-600 leading-relaxed">{section.body}</p>
          </div>
        ))}
        <div className="mt-12">
          <Link to="/contact" className="bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all">Contact Us</Link>
        </div>
      </div>
    </section>
  </div>
);

const TermsOfServicePage = () => (
  <div className="pt-24">
    <section className="bg-slate-900 py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">Please read these terms carefully before using our services or website.</p>
      </div>
    </section>
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
        <p className="text-slate-500 text-sm mb-10">Last updated: January 2024</p>
        {[
          { title: '1. Acceptance of Terms', body: 'By accessing and using the Advisor Consultancy website or services, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please discontinue use of our services.' },
          { title: '2. Services Provided', body: 'Advisor Consultancy is an authorised agency under Investing Agency Investors Berhad. We provide financial planning, unit trust investment, insurance, and wealth management advisory services. All advice is provided by licensed consultants and is subject to applicable Malaysian financial regulations.' },
          { title: '3. No Investment Guarantee', body: 'Past performance of any financial product does not guarantee future results. All investments carry risk, and the value of investments may go up or down. You should consider your risk tolerance and financial circumstances before making any investment decision.' },
          { title: '4. Intellectual Property', body: 'All content on this website, including text, graphics, logos, and images, is the property of Advisor Consultancy or its content suppliers. Reproduction or redistribution without written consent is prohibited.' },
          { title: '5. Limitation of Liability', body: 'Advisor Consultancy shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or reliance on information provided therein. All financial decisions remain the sole responsibility of the individual.' },
          { title: '6. Governing Law', body: 'These terms are governed by and construed in accordance with the laws of Malaysia. Any disputes shall be subject to the exclusive jurisdiction of the Malaysian courts.' },
        ].map((section, idx) => (
          <div key={idx} className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h2>
            <p className="text-slate-600 leading-relaxed">{section.body}</p>
          </div>
        ))}
        <div className="mt-12">
          <Link to="/contact" className="bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all">Contact Us</Link>
        </div>
      </div>
    </section>
  </div>
);

// --- Event Calendar ---

const eventData = [
  {
    id: 1,
    title: 'Stock Chat with Kenanga',
    category: 'Webinar',
    image: 'https://picsum.photos/seed/stockchat2026/600/400',
    schedule: 'Every Monday (Except Public Holidays)',
    time: '8:30am – 9:00am',
    recurring: true,
    month: -1,
    year: -1,
  },
  {
    id: 2,
    title: 'Unit Trust Investment Seminar',
    category: 'Seminar',
    image: 'https://picsum.photos/seed/seminar2026a/600/400',
    schedule: '15 February 2026',
    time: '10:00am – 12:00pm',
    recurring: false,
    month: 1,
    year: 2026,
  },
  {
    id: 3,
    title: 'Retirement Planning Workshop',
    category: 'Workshop',
    image: 'https://picsum.photos/seed/retirement2026/600/400',
    schedule: '22 February 2026',
    time: '2:00pm – 4:00pm',
    recurring: false,
    month: 1,
    year: 2026,
  },
  {
    id: 4,
    title: 'Estate Planning Masterclass',
    category: 'Workshop',
    image: 'https://picsum.photos/seed/estate2026/600/400',
    schedule: '8 March 2026',
    time: '9:00am – 11:00am',
    recurring: false,
    month: 2,
    year: 2026,
  },
  {
    id: 5,
    title: 'Private Retirement Scheme (PRS) Workshop',
    category: 'Workshop',
    image: 'https://picsum.photos/seed/prs2026wkshp/600/400',
    schedule: '15 March 2026',
    time: '10:00am – 12:00pm',
    recurring: false,
    month: 2,
    year: 2026,
  },
  {
    id: 6,
    title: 'Corporate Solutions Forum 2026',
    category: 'Forum',
    image: 'https://picsum.photos/seed/corpforum2026/600/400',
    schedule: '22 March 2026',
    time: '2:00pm – 5:00pm',
    recurring: false,
    month: 2,
    year: 2026,
  },
  {
    id: 7,
    title: 'Young Investor Bootcamp',
    category: 'Workshop',
    image: 'https://picsum.photos/seed/youngInv2026/600/400',
    schedule: '12 April 2026',
    time: '9:00am – 5:00pm',
    recurring: false,
    month: 3,
    year: 2026,
  },
  {
    id: 8,
    title: 'Unit Trust Deep Dive Forum',
    category: 'Forum',
    image: 'https://picsum.photos/seed/unitDeep2026/600/400',
    schedule: '19 April 2026',
    time: '10:00am – 1:00pm',
    recurring: false,
    month: 3,
    year: 2026,
  },
  {
    id: 9,
    title: 'Wealth Management Masterclass',
    category: 'Seminar',
    image: 'https://picsum.photos/seed/wealthMgmt2026/600/400',
    schedule: '3 May 2026',
    time: '9:00am – 11:00am',
    recurring: false,
    month: 4,
    year: 2026,
  },
  {
    id: 10,
    title: 'Life Insurance & Takaful Planning',
    category: 'Seminar',
    image: 'https://picsum.photos/seed/takaful2026/600/400',
    schedule: '17 May 2026',
    time: '10:00am – 12:00pm',
    recurring: false,
    month: 4,
    year: 2026,
  },
];

const EventCalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(() => new Date(2026, 1));
  const [filter, setFilter] = useState('All Events');
  const [registered, setRegistered] = useState<Set<number>>(new Set());

  const prevDate = new Date(currentDate);
  prevDate.setMonth(prevDate.getMonth() - 1);

  const formatMonthYear = (d: Date) =>
    d.toLocaleString('en-US', { month: 'long' }).toUpperCase() + ' ' + d.getFullYear();

  const goNext = () =>
    setCurrentDate(prev => { const d = new Date(prev); d.setMonth(d.getMonth() + 1); return d; });

  const goPrev = () =>
    setCurrentDate(prev => { const d = new Date(prev); d.setMonth(d.getMonth() - 1); return d; });

  const categories = ['All Events', 'Webinar', 'Seminar', 'Workshop', 'Forum'];

  const visibleEvents = eventData.filter(e => {
    const inMonth = e.recurring || (e.month === currentDate.getMonth() && e.year === currentDate.getFullYear());
    const inFilter = filter === 'All Events' || e.category === filter;
    return inMonth && inFilter;
  });

  const handleRegister = (id: number) => {
    setRegistered(prev => new Set(prev).add(id));
  };

  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/eventshero2026/1920/600"
            alt=""
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Events Calendar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-slate-300 text-lg max-w-xl leading-relaxed"
          >
            An investment in knowledge pays the best interest.<br />
            Here are our upcoming webinars, workshops, and industry forums.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-slate-50 py-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter */}
          <div className="flex items-center gap-3 mb-10">
            <span className="text-slate-700 font-medium text-lg">I'm looking for</span>
            <div className="relative inline-block">
              <select
                value={filter}
                onChange={e => setFilter(e.target.value)}
                className="appearance-none border-b-2 border-red-600 bg-transparent text-slate-900 font-semibold text-lg pl-1 pr-8 py-1 focus:outline-none cursor-pointer"
              >
                {categories.map(c => <option key={c}>{c}</option>)}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-700" size={20} />
            </div>
          </div>

          {/* Month Navigator */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-8 py-5 flex items-center justify-between mb-10 max-w-2xl">
            <span className="text-slate-400 font-semibold text-sm tracking-wider">
              {formatMonthYear(prevDate)}
            </span>
            <div className="flex items-center gap-5">
              <button
                onClick={goPrev}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-500 hover:text-slate-900"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="font-bold text-slate-900 text-lg tracking-wider">
                {formatMonthYear(currentDate)}
              </span>
              <button
                onClick={goNext}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-500 hover:text-slate-900"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <span className="text-slate-300 font-semibold text-sm tracking-wider hidden md:block">
              {(() => { const d = new Date(currentDate); d.setMonth(d.getMonth() + 1); return formatMonthYear(d); })()}
            </span>
          </div>

          {/* Events Grid */}
          {visibleEvents.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32 text-slate-400"
            >
              <Calendar size={56} className="mx-auto mb-5 opacity-30" />
              <p className="text-xl font-semibold text-slate-500">No events scheduled for this period.</p>
              <p className="text-slate-400 mt-2 mb-6">Try navigating to another month or clearing the filter.</p>
              <button
                onClick={() => setFilter('All Events')}
                className="text-red-600 font-bold hover:underline"
              >
                Clear filter
              </button>
            </motion.div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleEvents.map((event, idx) => {
                const isRegistered = registered.has(event.id);
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl transition-shadow group flex flex-col"
                  >
                    <div className="overflow-hidden relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        {event.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-base font-bold text-slate-900 mb-4 leading-snug flex-1">
                        {event.title}
                      </h3>
                      <div className="space-y-2 text-sm text-slate-500 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="shrink-0 text-slate-400" />
                          <span>{event.schedule}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={14} className="shrink-0 text-slate-400" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      {isRegistered ? (
                        <div className="w-full py-3 rounded-xl bg-green-50 border border-green-200 text-green-700 font-bold text-sm text-center flex items-center justify-center gap-2">
                          <CheckCircle2 size={16} /> Registered
                        </div>
                      ) : (
                        <button
                          onClick={() => handleRegister(event.id)}
                          className="w-full py-3 rounded-xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-colors"
                        >
                          Register Now
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

// --- Accessibility Widget ---

type A11ySettings = {
  textToSpeech: boolean;
  darkContrast: boolean;
  highlightLinks: boolean;
  biggerText: boolean;
  textSpacing: boolean;
  biggerCursor: boolean;
  saturation: boolean;
  readerMode: boolean;
};

const defaultA11ySettings: A11ySettings = {
  textToSpeech: false,
  darkContrast: false,
  highlightLinks: false,
  biggerText: false,
  textSpacing: false,
  biggerCursor: false,
  saturation: false,
  readerMode: false,
};

const A11yToggle = ({ active }: { active: boolean }) => (
  <div className={`w-11 h-6 rounded-full relative transition-colors duration-200 shrink-0 ${active ? 'bg-blue-500' : 'bg-slate-300'}`}>
    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${active ? 'left-6' : 'left-1'}`} />
  </div>
);

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(defaultA11ySettings);

  useEffect(() => {
    const id = 'a11y-overrides';
    let el = document.getElementById(id) as HTMLStyleElement | null;
    if (!el) {
      el = document.createElement('style');
      el.id = id;
      document.head.appendChild(el);
    }

    const filters: string[] = [];
    if (settings.darkContrast) filters.push('invert(1) hue-rotate(180deg)');
    if (settings.saturation) filters.push('saturate(3.5)');

    let css = '';
    if (filters.length > 0) css += `html { filter: ${filters.join(' ')} !important; }`;
    if (settings.highlightLinks) css += ' a { background: #ffff00 !important; color: #000 !important; outline: 2px solid #000 !important; border-radius: 2px; }';
    if (settings.biggerText) css += ' html { font-size: 120% !important; }';
    if (settings.textSpacing) css += ' * { letter-spacing: 0.1em !important; word-spacing: 0.2em !important; line-height: 1.9 !important; }';
    if (settings.biggerCursor) css += " * { cursor: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M8 4 L8 32 L14 24 L20 38 L25 36 L19 22 L28 22 Z' fill='black' stroke='white' stroke-width='2'/></svg>\") 8 4, auto !important; }";
    if (settings.readerMode) css += ' body { font-family: Georgia, serif !important; background: #f9f6ee !important; }';
    el.textContent = css;
  }, [settings]);

  useEffect(() => {
    if (!settings.textToSpeech) {
      window.speechSynthesis?.cancel();
      return;
    }
    const speak = (e: MouseEvent) => {
      const text = (e.target as HTMLElement)?.innerText?.trim();
      if (text && text.length > 1 && text.length < 300) {
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
      }
    };
    document.addEventListener('click', speak);
    return () => document.removeEventListener('click', speak);
  }, [settings.textToSpeech]);

  const toggle = (key: keyof A11ySettings) =>
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));

  const resetAll = () => setSettings(defaultA11ySettings);

  const gridItems: { key: keyof A11ySettings; label: string; Icon: React.ElementType }[] = [
    { key: 'darkContrast',   label: 'Dark Contrast',   Icon: SunMoon      },
    { key: 'highlightLinks', label: 'Highlight Links',  Icon: Link2        },
    { key: 'biggerText',     label: 'Bigger Text',      Icon: ZoomIn       },
    { key: 'textSpacing',    label: 'Text Spacing',     Icon: AlignJustify },
    { key: 'biggerCursor',   label: 'Bigger Cursor',    Icon: MousePointer },
    { key: 'saturation',     label: 'Saturation',       Icon: Droplet      },
    { key: 'readerMode',     label: 'Reader Mode',      Icon: BookOpen     },
  ];

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl hover:bg-blue-700 transition-colors"
        aria-label="Open Accessibility Settings"
      >
        <Accessibility size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 z-50 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 360, damping: 28 }}
              className="fixed bottom-24 left-6 z-50 w-[340px] rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="bg-red-800 px-6 pt-7 pb-9 text-white text-center relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-5 text-white/70 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
                <div className="w-20 h-20 rounded-full bg-blue-600 border-4 border-blue-400 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Accessibility size={36} />
                </div>
                <h2 className="text-xl font-bold tracking-wide">Accessibility &amp; Settings</h2>
              </div>

              {/* Options */}
              <div className="bg-slate-100 p-4 space-y-3 max-h-[65vh] overflow-y-auto">

                {/* Text-to-Speech — full width */}
                <button
                  onClick={() => toggle('textToSpeech')}
                  className={`w-full flex flex-col items-center gap-3 pt-3 pb-4 px-4 rounded-2xl bg-white border-2 transition-all ${settings.textToSpeech ? 'border-blue-400' : 'border-transparent'}`}
                >
                  <div className="w-full flex justify-end">
                    <A11yToggle active={settings.textToSpeech} />
                  </div>
                  <Mic size={30} />
                  <span className="text-sm font-bold">Text-to-Speech</span>
                </button>

                {/* 2-column grid */}
                <div className="grid grid-cols-2 gap-3">
                  {gridItems.map(({ key, label, Icon }) => (
                    <button
                      key={key}
                      onClick={() => toggle(key)}
                      className={`flex flex-col items-center gap-3 pt-3 pb-4 px-3 rounded-2xl bg-white border-2 transition-all ${settings[key] ? 'border-blue-400' : 'border-transparent'}`}
                    >
                      <div className="w-full flex justify-end">
                        <A11yToggle active={settings[key]} />
                      </div>
                      <Icon size={30} />
                      <span className="text-xs font-bold text-center leading-tight">{label}</span>
                    </button>
                  ))}

                  {/* Reset All */}
                  <button
                    onClick={resetAll}
                    className="flex flex-col items-center gap-3 pt-3 pb-4 px-3 rounded-2xl bg-white border-2 border-slate-300 hover:border-red-400 transition-all"
                  >
                    <div className="w-full flex justify-end">
                      <div className="w-11 h-6" />
                    </div>
                    <RotateCcw size={30} />
                    <span className="text-xs font-bold">Reset All</span>
                  </button>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans selection:bg-red-600 selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/join-us" element={<JoinUsPage />} />
            <Route path="/investor-relations" element={<InvestorRelationsPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/newsroom" element={<NewsroomPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/event-calendar" element={<EventCalendarPage />} />
          </Routes>
        </main>
        <Footer />
        <AccessibilityWidget />
      </div>
    </Router>
  );
}
