'use client';

import React, { useState, useEffect, useRef } from 'react';

// Services data
const servicesData = [
  {
    id: 'automation',
    number: '01',
    title: 'أتمتة العمليات والمهام',
    englishTitle: 'WORKFLOW AUTOMATION',
    tagline: 'تخلّص من الروتين والعمل اليدوي المتكرر في مشروعك.',
    description: 'بنربط عملياتك بمسارات أوتوماتيكية ذكية تنفذ المهام المعقدة بدقة وسرعة وبدون تدخل بشري وبلا أخطاء.',
    deliverables: [
      'بناء مسارات أتمتة عبر n8n و Python و Webhooks',
      'سحب البيانات وتحديث التقارير والجداول تلقائياً',
      'إرسال إشعارات وتنبيهات ذكية فورية لفريقك',
      'توفير مئات ساعات العمل اليدوي شهرياً'
    ],
    tech: ['Python', 'n8n', 'Webhooks', 'Google Sheets API', 'Cloud Functions']
  },
  {
    id: 'ai-solutions',
    number: '02',
    title: 'حلول ومساعدات الذكاء الاصطناعي',
    englishTitle: 'AI AGENTS & ASSISTANTS',
    tagline: 'سخّر قوة الذكاء الاصطناعي لخدمة مشروعك بوعي وفاعلية.',
    description: 'تطوير مساعدات رقمية وأنظمة ذكاء اصطناعي تفهم بيانات شركتك، تخدم عملاءك، وتسرّع وتيرة الإنتاج.',
    deliverables: [
      'روبوتات محادثة ذكية متصلة بواتساب والموقع',
      'أنظمة صياغة وتوليد المحتوى العربي الاحترافي',
      'محركات ذكية لتلخيص المستندات واستخراج البيانات',
      'تدريب المساعدات على المعرفة الخاصة بمشروعك'
    ],
    tech: ['Gemini API', 'OpenAI', 'Prompt Engineering', 'LangChain', 'Node.js']
  },
  {
    id: 'integration',
    number: '03',
    title: 'ربط الأنظمة وتكامل الأدوات',
    englishTitle: 'SYSTEMS & API INTEGRATION',
    tagline: 'خلّي كل برامجك وأدواتك تشتغل مع بعض بسلاسة.',
    description: 'القضاء على تشتت البيانات بين البرامج المختلفة عبر بناء جسور برمجية متزامنة في الوقت الفعلي.',
    deliverables: [
      'ربط المتاجر الإلكترونية بمنصات الشحن والـ CRM',
      'تكامل بوابات الدفع وقواعد البيانات الحسابية',
      'مزامنة المخزون والطلبات فورياً عبر كل القنوات',
      'بناء APIs مخصصة للربط الآمن والمستقر'
    ],
    tech: ['REST APIs', 'Supabase', 'PostgreSQL', 'Stripe', 'Paymob', 'Webhooks']
  },
  {
    id: 'custom-tools',
    number: '04',
    title: 'تطوير أدوات ولوحات تحكم مخصصة',
    englishTitle: 'CUSTOM TOOLS & DASHBOARDS',
    tagline: 'أنظمة تُبنى خصيصاً لطبيعة شغلك — مش قوالب جاهزة.',
    description: 'تطبيقات ويب خفيفة وسريعة مصممة لحل مشكلات محددة داخل فريق عملك أو لخدمة عملائك مباشرة.',
    deliverables: [
      'لوحات تحكم ومؤشرات أداء تفاعلية وسريعة',
      'بوابات مخصصة لخدمة ومتابعة طلبات العملاء',
      'حاسبات تسعير وأدوات تشغيلية مصممة لاحتياجك',
      'واجهات عصرية متوافقة 100% مع الموبايل والديسكتوب'
    ],
    tech: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel']
  }
];

// Portfolio Projects data
const portfolioProjects = [
  {
    id: 'content-engine',
    title: 'مساعد المحتوى الذكي',
    englishTitle: 'AI Content Engine',
    category: 'ai',
    categoryLabel: 'ذكاء اصطناعي',
    badge: 'AI PROTOTYPE',
    badgeColor: 'border-purple-500/30 text-purple-300 bg-purple-500/10',
    description: 'نموذج أولي لمساعد ذكي يساعد صناع المحتوى والشركات في توليد أفكار وصياغة نصوص عربية احترافية بسرعة.',
    problem: 'إنتاج محتوى عربي دقيق ومتناسق مع هوية العلامة التجارية يستهلك وقتاً طويلاً ومجهوداً متواصلاً.',
    solution: 'نظام يحلل الجمهور المستهدف ويصيغ مسودات مقالات وبوستات جذابة ومعدة للنشر بضغطة زر.',
    tech: ['Python', 'Gemini API', 'Prompt Engineering', 'FastAPI'],
    status: 'نموذج أولي جاهز'
  },
  {
    id: 'kpi-pipeline',
    title: 'أتمتة التقارير اليومية',
    englishTitle: 'Automated KPI Pipeline',
    category: 'automation',
    categoryLabel: 'أتمتة',
    badge: 'AUTOMATION',
    badgeColor: 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10',
    description: 'مسار أوتوماتيكي متكامل يسحب بيانات العمليات والمبيعات ويولد تقريراً منسقاً يرسل فورياً للإدارة.',
    problem: 'إعداد التقارير يدوياً كل صباح كان يستنزف أكثر من ساعتين عمل من الفريق التنفيذي يومياً.',
    solution: 'أتمتة تسحب الأرقام من مصادر متعددة، تنظمها في شيتس، وترسل ملخصاً تنفيذياً على تليجرام والإيميل.',
    tech: ['n8n', 'Google Sheets API', 'Telegram API', 'Python Webhooks'],
    status: 'تجربة حية ناجحة'
  },
  {
    id: 'whatsapp-agent',
    title: 'بوت خدمة العملاء والمبيعات',
    englishTitle: 'Smart WhatsApp Agent',
    category: 'ai',
    categoryLabel: 'ذكاء اصطناعي',
    badge: 'WHATSAPP BOT',
    badgeColor: 'border-blue-500/30 text-blue-300 bg-blue-500/10',
    description: 'بوت ذكي متصل برقم واتساب بيزنس يرد على استفسارات العملاء على مدار الساعة ويسجل الطلبات تلقائياً.',
    problem: 'تأخر الردود خارج ساعات العمل كان يتسبب في ضياع استفسارات عملاء محتملين وفرص بيعية.',
    solution: 'بوت يفهم اللهجة الدارجة، يوضح تفاصيل الخدمات والأسعار، ويجمع بيانات العميل في جدول فوري.',
    tech: ['WhatsApp Cloud API', 'Node.js', 'AI Logic', 'Supabase'],
    status: 'قيد التطوير التجريبي'
  },
  {
    id: 'ops-dashboard',
    title: 'لوحة إدارة ومتابعة المشاريع',
    englishTitle: 'Internal Ops Hub',
    category: 'tools',
    categoryLabel: 'أدوات مخصصة',
    badge: 'DASHBOARD',
    badgeColor: 'border-amber-500/30 text-amber-300 bg-amber-500/10',
    description: 'لوحة تحكم خفيفة وسريعة توفر نظرة شاملة على تقدم المهام وتكامل بيانات العملاء والمشروعات.',
    problem: 'التشتت بين تطبيقات متفرقة كان يصعب على العميل وفريق العمل معرفة المرحلة الحالية للمشروع.',
    solution: 'شاشة تفاعلية واحدة سريعة تعرض نسبة الإنجاز والملفات والخطوات القادمة بكل وضوح.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    status: 'نموذج عملي'
  }
];

// Testimonials data
const testimonials = [
  {
    id: 't-1',
    name: 'م. أحمد طارق',
    role: 'مؤسس علامة تجارية',
    company: 'E-Commerce Brand',
    text: 'الأتمتة اللي نفذوها لينا في OTHVM وفّرت علينا أكتر من 20 ساعة عمل أسبوعياً وحسّنت سرعة الرد على العملاء بشكل فوري. شغل احترافي جداً.',
    rating: 5
  },
  {
    id: 't-2',
    name: 'كريم النجار',
    role: 'مدير تسويق رقمي',
    company: 'Growth Agency',
    text: 'أهم ميزة إنهم بيفهموا منطق البيزنس قبل ما يكتبوا كود. الحل اللي اقترحوه كان أبسط وأسرع بكتير من اللي كنا متخيلينه ونتيجته واضحة.',
    rating: 5
  },
  {
    id: 't-3',
    name: 'سارة محمود',
    role: 'رائدة أعمال',
    company: 'Content Creator',
    text: 'المساعد الذكي اللي طوروه لينا ضاعف سرعتنا في صياغة المحتوى العربي 4 أضعاف مع الحفاظ على النبرة والجودة العالية. تجربة ممتازة.',
    rating: 5
  },
  {
    id: 't-4',
    name: 'مصطفى كمال',
    role: 'مدير عمليات',
    company: 'Logistics & Ops',
    text: 'ربط الأدوات والجداول التلقائية حل أكبر كابوس كنا بنعاني منه في تتبع الطلبات اليومية. الدقة والالتزام ممتازين.',
    rating: 5
  }
];

export default function Home() {
  const [activeService, setActiveService] = useState('automation');
  const [portfolioCategory, setPortfolioCategory] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [year, setYear] = useState(2026);
  const [whatsappTooltip, setWhatsappTooltip] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Mouse spotlight & scroll handler
  useEffect(() => {
    setYear(new Date().getFullYear());

    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? scrollY / total : 0;
      
      const prog = document.getElementById('scroll-progress');
      if (prog) {
        prog.style.transform = `scaleX(${pct})`;
      }
      setScrolled(scrollY > 20);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Filtered portfolio
  const filteredProjects = portfolioProjects.filter((p) => {
    if (portfolioCategory === 'all') return true;
    return p.category === portfolioCategory;
  });

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#6C3BFF] selection:text-white">
      {/* Scroll progress bar */}
      <div id="scroll-progress"></div>

      {/* Mouse spotlight overlay */}
      <div className="spotlight-overlay"></div>

      {/* ═══ NAVBAR ═══ */}
      <nav
        className={`fixed top-0 right-0 left-0 h-[64px] z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#050505]/85 backdrop-blur-md border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent border-white/5'
        }`}
      >
        <div className="max-w-[1240px] h-full mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-9 h-9 rounded-xl bg-[#111118] border border-white/15 flex items-center justify-center font-bold text-xs tracking-wider text-white group-hover:border-purple-500/60 transition-colors shadow-inner">
              <span dir="ltr" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>OTHVM</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm tracking-wide text-white group-hover:text-purple-300 transition-colors">
                OTHVM
              </span>
              <span className="text-[10px] text-[#71717A] tracking-wider font-mono">
                TECHNOLOGY LAB
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#A1A1AA]">
            <a href="#hero" className="hover:text-white transition-colors">الرئيسية</a>
            <a href="#about" className="hover:text-white transition-colors">عن OTHVM</a>
            <a href="#services" className="hover:text-white transition-colors">الخدمات</a>
            <a href="#work" className="hover:text-white transition-colors">الأعمال</a>
            <a href="#products" className="hover:text-white transition-colors">المنتجات</a>
            <a href="#testimonials" className="hover:text-white transition-colors">آراء العملاء</a>
            <a href="#contact" className="hover:text-white transition-colors">تواصل</a>
          </div>

          {/* Nav CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#6C3BFF] hover:bg-[#5827EE] text-white font-bold text-xs tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(108,59,255,0.4)] hover:shadow-[0_0_35px_rgba(108,59,255,0.6)]"
            >
              ناقش مشروعك
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#111] border border-white/10 text-white"
            aria-label="القائمة"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-[#0A0A0E] border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-sm font-semibold">
            <a href="#hero" onClick={() => setMenuOpen(false)} className="py-2 border-b border-white/5 text-[#E4E4E7]">الرئيسية</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="py-2 border-b border-white/5 text-[#E4E4E7]">عن OTHVM</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="py-2 border-b border-white/5 text-[#E4E4E7]">الخدمات</a>
            <a href="#work" onClick={() => setMenuOpen(false)} className="py-2 border-b border-white/5 text-[#E4E4E7]">الأعمال</a>
            <a href="#products" onClick={() => setMenuOpen(false)} className="py-2 border-b border-white/5 text-[#E4E4E7]">المنتجات</a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)} className="py-2 border-b border-white/5 text-[#E4E4E7]">آراء العملاء</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="py-2 text-[#E4E4E7]">تواصل معنا</a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center py-3 rounded-xl bg-[#6C3BFF] text-white font-bold text-xs"
            >
              ناقش مشروعك
            </a>
          </div>
        )}
      </nav>

      {/* ═══ SECTION 1: HERO ═══ */}
      <section id="hero" className="relative min-h-[94vh] flex items-center pt-32 pb-20 px-5 sm:px-8 overflow-hidden bg-grid-pattern">
        {/* Ambient colored glow backdrops */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(108,59,255,0.18),transparent_35%),radial-gradient(circle_at_15%_85%,rgba(155,109,255,0.09),transparent_30%)] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1240px] mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Right Column: Hero Headline & Content */}
          <div className="text-right">
            {/* Live status pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/25 text-purple-300 text-[12px] font-bold tracking-wider mb-7 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>متاح لتنفيذ المشروعات المختارة • 2026</span>
            </div>

            {/* Giant Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.2] mb-7">
              التكنولوجيا مش مجرد أدوات.{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-l from-purple-400 via-white to-purple-200">
                دي فرصتك تشتغل بقوة وتتفوّق.
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-purple-300 to-transparent"></span>
              </span>
            </h1>

            {/* Sub-text */}
            <p className="text-base sm:text-lg text-[#A1A1AA] max-w-2xl leading-relaxed mb-9">
              نصمم ونطوّر أنظمة ذكية، أتمتة لخطوات العمل، وتطبيقات ويب مخصصة تساعدك تدير شغلك بكفاءة مضاعفة، تقلل الهدر والوقت، وتكسب عملاء أكتر.
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#6C3BFF] hover:bg-[#5827EE] text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_32px_rgba(108,59,255,0.45)] hover:shadow-[0_0_42px_rgba(108,59,255,0.65)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>استكشف الأعمال والنماذج</span>
                <span dir="ltr">←</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/[0.14] hover:border-white/[0.28] text-white font-bold text-sm tracking-wide transition-all duration-300"
              >
                ناقش فكرتك معنا
              </a>
            </div>

            {/* Trust highlights */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs sm:text-[13px] text-[#71717A] font-medium pt-2 border-t border-white/5">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>نماذج حقيقية وأنظمة شغالة</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">⚡</span>
                <span>ردود واستشارات مبدئية خلال 24 ساعة</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">🛡️</span>
                <span>تنفيذ مخصص 100% بدون تعقيد</span>
              </div>
            </div>
          </div>

          {/* Left Column: Visual Showcase Card */}
          <div className="relative mx-auto w-full max-w-[460px] animate-float-slow">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-purple-600/15 blur-3xl animate-soft-pulse pointer-events-none"></div>

            <div className="relative rounded-[2rem] p-2 bg-gradient-to-br from-purple-500/70 via-white/10 to-indigo-500/30 shadow-[0_24px_80px_rgba(0,0,0,0.8)] rotate-[2deg] hover:rotate-0 transition-transform duration-500">
              <div className="relative overflow-hidden rounded-[1.6rem] bg-[#0A0A0E] border border-white/15 p-6 sm:p-8 flex flex-col justify-between min-h-[460px]">
                {/* Top Badge Inside Card */}
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-bold tracking-[0.18em] text-purple-300 uppercase">
                    OTHVM SYSTEM LAB
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                  </div>
                </div>

                {/* Center Visual: Modern Graphic Element */}
                <div className="my-8 py-8 flex flex-col items-center justify-center text-center relative">
                  <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-[#6C3BFF] via-[#4A1FFF] to-[#9B6DFF] p-[2px] shadow-[0_0_50px_rgba(108,59,255,0.4)]">
                    <div className="w-full h-full rounded-[22px] bg-[#07070A] flex flex-col items-center justify-center p-4">
                      <span className="text-3xl font-black text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        OTHVM
                      </span>
                      <span className="text-[10px] font-mono text-purple-400 mt-1">AI & OPS CORE</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-white mb-1">اخلّي التكنولوجيا تشتغل ليك</h3>
                    <p className="text-xs text-[#71717A]">حلول برمجية ذكية مصممة للنتائج الواقعية</p>
                  </div>
                </div>

                {/* Bottom Spec Footer Inside Card */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#A1A1AA] font-mono">
                  <span>LATENCY: 12ms</span>
                  <span className="text-emerald-400 font-bold">STATUS: ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Floating Glass Pill 1: Top Right */}
            <div className="absolute -right-4 sm:-right-8 top-16 px-4 py-3 rounded-2xl bg-[#0c0c0e]/95 border border-white/15 shadow-2xl backdrop-blur-md rotate-3 hidden sm:flex items-center gap-3 z-20">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 font-bold text-sm">
                ⚡
              </div>
              <div className="text-right">
                <p className="text-[11px] font-bold text-white">أتمتة وسرعة فائقة</p>
                <p className="text-[10px] text-purple-300">بدون أخطاء يدوية</p>
              </div>
            </div>

            {/* Floating Glass Pill 2: Bottom Left */}
            <div className="absolute -left-6 sm:-left-10 bottom-12 px-4 py-3 rounded-2xl bg-[#0c0c0e]/95 border border-white/15 shadow-2xl backdrop-blur-md -rotate-3 hidden sm:flex items-center gap-3 z-20">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold text-sm">
                🤖
              </div>
              <div className="text-right">
                <p className="text-[11px] font-bold text-white">ذكاء اصطناعي مخصص</p>
                <p className="text-[10px] text-emerald-400">مدرب على بياناتك</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: ABOUT & FOUNDER ═══ */}
      <section id="about" className="py-28 px-5 sm:px-8 relative overflow-hidden border-t border-[#181818] bg-[#070709]">
        <div className="max-w-[1240px] mx-auto relative z-10">
          {/* Eyebrow & Title */}
          <div className="mb-4 text-right">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-purple-400 font-mono">
              01 / عن OTHVM والمؤسس
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-16 leading-[1.2] text-right">
            مش بنبيع أدوات جاهزة.{' '}
            <span className="text-[#A1A1AA]">بنحلّ مشاكل حقيقية ونبني أنظمة تعيش.</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Founder ID Badge / Left Column (5 cols) */}
            <div className="lg:col-span-5 relative lg:sticky lg:top-28">
              <div className="absolute -inset-4 rounded-[2rem] bg-purple-500/10 blur-2xl pointer-events-none"></div>

              <div className="relative rounded-2xl border border-white/10 bg-[#0C0C10] p-3 shadow-2xl">
                <div className="relative aspect-[4/4.5] rounded-xl overflow-hidden bg-[#111116] flex flex-col justify-between p-6">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[11px] font-mono text-[#71717A] tracking-wider">FOUNDER ID</span>
                  </div>

                  {/* Center Monogram / Photo */}
                  <div className="my-auto flex flex-col items-center justify-center text-center">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-purple-400 p-[3px] shadow-[0_0_35px_rgba(108,59,255,0.35)] mb-4">
                      <div className="w-full h-full rounded-full bg-[#08080C] flex items-center justify-center">
                        <span className="text-4xl font-black text-purple-300">ع</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-extrabold text-white">عثمان محمد</h3>
                    <p className="text-xs text-purple-400 font-medium mt-1">مؤسس OTHVM • مهندس حلول تقنية</p>
                  </div>

                  {/* Bottom Verification Note */}
                  <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[#A1A1AA]">Alexandria / Cairo, Egypt</span>
                    <span className="text-purple-300 font-mono">AVAILABLE WORLDWIDE</span>
                  </div>
                </div>

                {/* Social pill underneath */}
                <div className="mt-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                  <a
                    href="https://www.instagram.com/othvm_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold text-white hover:text-purple-300 transition-colors"
                  >
                    <span>حساب المؤسس على إنستغرام:</span>
                    <span dir="ltr" className="font-mono text-purple-400 font-bold">@othvm_</span>
                  </a>
                  <span className="text-xs text-emerald-400 font-bold">Verified ✓</span>
                </div>
              </div>
            </div>

            {/* Right Column: Story & Competencies (7 cols) */}
            <div className="lg:col-span-7 flex flex-col text-right">
              <p className="text-lg sm:text-xl text-[#E4E4E7] leading-relaxed mb-6 font-medium">
                <strong>OTHVM</strong> علامة تجارية تقنية مستقلة، اتأسست بهدف بسيط لكنه جوهري: <span className="text-purple-300">نخلي التكنولوجيا تشتغل ليك، مش العكس.</span>
              </p>

              <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed mb-8">
                أغلب المشروعات والشركات اليوم بتعاني من تشتت بين برامج كتير وعمل يدوي متكرر بيضيع ساعات ثمينة يومياً. دورنا في OTHVM إننا نفهم طبيعة شغلك، نحدد مناطق الاختناق، ونبني أنظمة ذكية وأتمتة مخصصة تنفذ الشغل أسرع 10 مرات وبدقة أعلى.
              </p>

              {/* Core Competencies Box */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0C0C12] border border-purple-500/20 mb-8">
                <div className="flex items-center gap-2 mb-6 text-purple-300 font-bold text-xs tracking-wider uppercase font-mono">
                  <span>⚡</span>
                  <span>القدرات والخبرات الأساسية</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <h4 className="text-sm font-bold text-white mb-1">أتمتة العمليات (Workflow Automation)</h4>
                    <p className="text-xs text-[#71717A] leading-relaxed">بناء مسارات تلقائية تربط الجداول والرسائل وقواعد البيانات.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <h4 className="text-sm font-bold text-white mb-1">حلول الذكاء الاصطناعي (AI & LLMs)</h4>
                    <p className="text-xs text-[#71717A] leading-relaxed">مساعدات ذكية لصياغة المحتوى والرد الآلي وتحليل البيانات.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <h4 className="text-sm font-bold text-white mb-1">تكامل الأنظمة (API & Integrations)</h4>
                    <p className="text-xs text-[#71717A] leading-relaxed">ربط المتاجر، بوابات الدفع، الشحن، والـ CRM بسلاسة تامة.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <h4 className="text-sm font-bold text-white mb-1">أدوات مخصصة (Custom Web Dashboards)</h4>
                    <p className="text-xs text-[#71717A] leading-relaxed">لوحات تحكم وتطبيقات ويب سريعة متفصلة على احتياجك.</p>
                  </div>
                </div>
              </div>

              {/* Direct quote */}
              <blockquote className="p-5 border-r-2 border-purple-500 bg-purple-500/5 rounded-l-xl text-sm text-[#A1A1AA] italic">
                &quot;الهدف دايماً واحد: إنك تركز في البيزنس والتطوير، وتسيب التكنولوجيا تخلص الشغل الروتيني في ثواني.&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: SERVICES (ACCORDION INTERACTION) ═══ */}
      <section id="services" className="py-24 px-5 sm:px-8 border-t border-[#181818] relative bg-[#050505]">
        <div className="max-w-[1240px] mx-auto">
          {/* Section Header */}
          <div className="mb-14 text-right">
            <div className="flex items-center gap-3 mb-3 justify-start">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-purple-400 font-mono">
                02 / الخدمات — WHAT WE BUILD
              </span>
              <span className="h-px w-8 bg-purple-500"></span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              من الفكرة إلى نظام عملي متكامل وسريع.
            </h2>
            <p className="text-[#A1A1AA] text-base sm:text-lg max-w-2xl mt-4">
              حلول تكنولوجية تفاعلية ومصممة من الصفر تناسب احتياج مشروعك وتضاعف كفاءة العمليات.
            </p>
          </div>

          {/* Interactive Accordion List */}
          <div className="space-y-4">
            {servicesData.map((service) => {
              const isActive = activeService === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  onMouseEnter={() => setActiveService(service.id)}
                  className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isActive
                      ? 'bg-[#0E0E14] border-purple-500/60 shadow-[0_10px_35px_rgba(108,59,255,0.15)]'
                      : 'bg-[#08080C] border-[#1C1C24] hover:border-[#2E2E3C] hover:bg-[#0B0B10]'
                  }`}
                >
                  <div className="p-6 sm:p-8 flex flex-col justify-between">
                    {/* Header Row */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 sm:gap-8">
                        <span
                          className={`text-xl sm:text-2xl font-mono font-bold transition-colors ${
                            isActive ? 'text-purple-400' : 'text-[#52525B]'
                          }`}
                        >
                          {service.number}
                        </span>
                        <div>
                          <h3
                            className={`text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight transition-colors ${
                              isActive ? 'text-white' : 'text-[#D4D4D8]'
                            }`}
                          >
                            {service.title}
                          </h3>
                          <span className="text-[11px] font-mono text-[#71717A] tracking-wider block mt-1">
                            {service.englishTitle}
                          </span>
                        </div>
                      </div>

                      {/* Expand / Active status */}
                      <div className="flex items-center gap-3">
                        <span className="hidden md:inline text-xs font-semibold text-[#71717A] uppercase tracking-wider">
                          {isActive ? 'نشط الآن' : 'اضغط للتفاصيل'}
                        </span>
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                            isActive
                              ? 'bg-purple-600 border-purple-500 text-white rotate-45'
                              : 'bg-[#141418] border-[#24242C] text-[#A1A1AA]'
                          }`}
                        >
                          +
                        </div>
                      </div>
                    </div>

                    {/* Expanded Details Body */}
                    {isActive && (
                      <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 text-right animate-fadeIn">
                        <div className="lg:col-span-6">
                          <p className="text-base text-purple-300 font-semibold mb-3">{service.tagline}</p>
                          <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-6">{service.description}</p>
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 px-5 py-2.5 rounded-xl transition-all shadow-[0_0_20px_rgba(108,59,255,0.4)]"
                          >
                            <span>اطلب هذه الخدمة الآن</span>
                            <span dir="ltr">←</span>
                          </a>
                        </div>

                        <div className="lg:col-span-6 bg-black/40 p-5 rounded-xl border border-white/5 flex flex-col justify-between">
                          <div>
                            <span className="text-xs font-bold text-[#E4E4E7] block mb-3 font-mono">ما الذي ستحصل عليه:</span>
                            <ul className="space-y-2 text-xs text-[#A1A1AA]">
                              {service.deliverables.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                  <span className="text-emerald-400">✓</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-5 pt-3 border-t border-white/5 flex flex-wrap gap-2">
                            {service.tech.map((t, idx) => (
                              <span key={idx} className="text-[10px] font-mono px-2 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: SELECTED WORK / PORTFOLIO ═══ */}
      <section id="work" className="py-24 px-5 sm:px-8 border-t border-[#181818] relative bg-[#060608] overflow-hidden">
        <div className="max-w-[1240px] mx-auto">
          {/* Header & Category Filter */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 text-right">
            <div>
              <div className="flex items-center gap-3 mb-3 justify-start">
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-purple-400 font-mono">
                  03 / الأعمال — SELECTED WORK
                </span>
                <span className="h-px w-8 bg-purple-500"></span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                شغل حقيقي ونماذج ملموسة.
              </h2>
              <p className="text-[#A1A1AA] text-base sm:text-lg max-w-2xl mt-3">
                استكشف مجموعة من النماذج والتجارب العملية اللي بنيناها في OTHVM.
              </p>
            </div>

            {/* Filter Pills & Arrows */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex p-1 rounded-xl bg-[#111118] border border-[#22222E]">
                {[
                  { id: 'all', label: 'الكل' },
                  { id: 'ai', label: 'ذكاء اصطناعي' },
                  { id: 'automation', label: 'أتمتة' },
                  { id: 'tools', label: 'أدوات مخصصة' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setPortfolioCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all ${
                      portfolioCategory === cat.id
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Scroll controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollCarousel('right')}
                  className="p-3 rounded-xl bg-[#111] hover:bg-[#1A1A24] border border-[#222] text-white transition-colors"
                  aria-label="السابق"
                >
                  →
                </button>
                <button
                  onClick={() => scrollCarousel('left')}
                  className="p-3 rounded-xl bg-[#111] hover:bg-[#1A1A24] border border-[#222] text-white transition-colors"
                  aria-label="التالي"
                >
                  ←
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Cards Grid */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="min-w-[340px] sm:min-w-[400px] max-w-[420px] rounded-2xl bg-[#0B0B10] border border-white/10 hover:border-purple-500/50 transition-all duration-300 p-6 flex flex-col justify-between group snap-start"
              >
                <div>
                  {/* Top Badge & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider font-mono border ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                    <span className="text-xs text-[#71717A] font-mono">{project.status}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-1">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-[#71717A] tracking-wider block mb-4">
                    {project.englishTitle}
                  </span>

                  <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Problem & Solution block */}
                  <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-3 mb-6 text-xs text-right">
                    <div>
                      <strong className="text-purple-400 block mb-1">المشكلة:</strong>
                      <p className="text-[#888]">{project.problem}</p>
                    </div>
                    <div>
                      <strong className="text-emerald-400 block mb-1">الحل المنفذ:</strong>
                      <p className="text-[#888]">{project.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Tech Pills & Action */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-[#A1A1AA]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.05] hover:bg-purple-600 hover:text-white border border-white/10 text-xs font-bold tracking-wide transition-all duration-300"
                  >
                    <span>طلب حل مشابه لمشروعك</span>
                    <span dir="ltr">←</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#71717A] mt-6">
            جميع النماذج المعروضة هي تجارب عملية وأنظمة قابلة للتخصيص والربط المباشر مع بنيتك التحتية.
          </p>
        </div>
      </section>

      {/* ═══ SECTION 5: DIGITAL PRODUCTS ═══ */}
      <section id="products" className="py-24 px-5 sm:px-8 border-t border-[#181818] relative bg-[#07070A] overflow-hidden">
        <div className="max-w-[1240px] mx-auto text-right">
          <div className="flex items-center gap-3 mb-3 justify-start">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-purple-400 font-mono">
              04 / المنتجات الرقمية — DIGITAL PRODUCTS
            </span>
            <span className="h-px w-8 bg-purple-500"></span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            تعلّم، جرّب، وابنِ فرصتك بنفسك.
          </h2>
          <p className="text-[#A1A1AA] text-base sm:text-lg max-w-2xl mb-14">
            بنجهّز أدلة وكتب رقمية عملية باللغة العربية تساعدك تفهم الذكاء الاصطناعي وتوظفه لبناء مشروعات ومصادر دخل حقيقية.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Book 1 */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0C0C12] border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
                    قريباً • إطلاق رقمي
                  </span>
                  <span className="text-xs text-[#71717A] font-mono">OTHVM EDITION</span>
                </div>

                <h3 className="text-3xl font-extrabold text-white mb-3">&quot;AI للمبتدئين&quot;</h3>
                <p className="text-sm text-purple-300 font-medium mb-4">الدليل العملي الشامل باللغة العربية للفهم والتطبيق اليومي.</p>
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  دليل عملي يبسط مفاهيم الذكاء الاصطناعي بعيداً عن المصطلحات المعقدة، ويوضح لك إزاي تستخدمه في حياتك اليومية، شغلك، وتطوير مهاراتك خطوة بخطوة.
                </p>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 mb-6 text-xs text-[#888] space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <span>📚</span>
                    <span>أهم محاور الكتاب:</span>
                  </div>
                  <p>• كيفية كتابة الأوامر (Prompt Engineering) باحترافية</p>
                  <p>• توظيف الذكاء الاصطناعي في إعداد المحتوى والبحث</p>
                  <p>• أدوات ذكية مجانية وغير معروفة تضاعف إنتاجيتك</p>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full text-center py-3.5 rounded-xl bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-500/40 font-bold text-xs tracking-wide transition-all duration-300"
              >
                سجّل اهتمامك لتصلك النسخة الأولى فور الإطلاق
              </a>
            </div>

            {/* Book 2 */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0C0C12] border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                    قريباً • إطلاق رقمي
                  </span>
                  <span className="text-xs text-[#71717A] font-mono">OTHVM EDITION</span>
                </div>

                <h3 className="text-3xl font-extrabold text-white mb-3">&quot;AI والفلوس&quot;</h3>
                <p className="text-sm text-indigo-300 font-medium mb-4">كيف تستكشف الفرص الاقتصادية وتبني مصدر دخل حقيقي في عصر AI.</p>
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  دليل استراتيجي يفتح عينك على الفرص التجارية الجديدة اللي أوجدها الذكاء الاصطناعي: نماذج العمل، تقديم الخدمات، بناء المنتجات الرقمية، وخطوات التنفيذ الواقعية.
                </p>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 mb-6 text-xs text-[#888] space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <span>💡</span>
                    <span>أهم محاور الكتاب:</span>
                  </div>
                  <p>• نماذج عمل حقيقية نجحت في تحقيق عائد عبر أدوات AI</p>
                  <p>• تقديم خدمات الأتمتة وصناعة المحتوى للشركات</p>
                  <p>• خطوات تسعير وتجهيز أول عرض تجاري لعملائك</p>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full text-center py-3.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/40 font-bold text-xs tracking-wide transition-all duration-300"
              >
                سجّل اهتمامك لتصلك النسخة الأولى فور الإطلاق
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6: CLIENT FEEDBACK & TESTIMONIALS ═══ */}
      <section id="testimonials" className="py-24 px-5 sm:px-8 border-t border-[#181818] relative bg-[#050505] overflow-hidden">
        <div className="max-w-[1240px] mx-auto text-right">
          <div className="flex items-center gap-3 mb-3 justify-start">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-purple-400 font-mono">
              05 / آراء وتجارب — FEEDBACK
            </span>
            <span className="h-px w-8 bg-purple-500"></span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            ثقة مبنية على نتائج وأرقام واقعية.
          </h2>
          <p className="text-[#A1A1AA] text-base sm:text-lg max-w-2xl mb-12">
            شهادات وتجارب حقيقية من مؤسسي أعمال وشركاء نجاح تعاونوا معنا في تطوير مشروعاتهم.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-[#09090D] border border-white/10 hover:border-purple-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 text-sm mb-4">
                    {'★'.repeat(item.rating)}
                  </div>
                  <p className="text-sm text-[#E4E4E7] leading-relaxed mb-6 italic">
                    &quot;{item.text}&quot;
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <h4 className="text-sm font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-[#71717A] mt-0.5">{item.role} • {item.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7: INSTAGRAM COMMUNITY HIGHLIGHT ═══ */}
      <section className="py-16 px-5 sm:px-8 border-t border-[#181818] bg-[#07070A]">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#120B24] via-[#09090E] to-[#0A0A0F] border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-right">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-purple-500 to-pink-500 shrink-0">
              <div className="w-full h-full rounded-full bg-[#08080C] flex items-center justify-center font-bold text-2xl text-white">
                ع
              </div>
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-purple-400 tracking-wider uppercase block mb-1">
                INSTAGRAM COMMUNITY
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">تابع يوميات وتجارب OTHVM</h3>
              <p className="text-xs text-[#A1A1AA] max-w-md">
                بنشارك أسبوعياً تجارب حية، أفكار جديدة في أتمتة العمليات، ونصائح لكيفية استخدام الذكاء الاصطناعي بوعي.
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/othvmai/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs tracking-wide transition-all shadow-[0_0_25px_rgba(168,85,247,0.4)] whitespace-nowrap"
          >
            تابع الحساب @othvmai
          </a>
        </div>
      </section>

      {/* ═══ SECTION 8: CONTACT & FINAL CALL TO ACTION ═══ */}
      <section id="contact" className="py-28 px-5 sm:px-8 border-t border-[#181818] relative bg-[#040406] overflow-hidden text-center">
        {/* Glow backdrop */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full blur-[160px] pointer-events-none opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(108,59,255,0.4) 0%, rgba(108,59,255,0.05) 70%, transparent 100%)'
          }}
        ></div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111] border border-[#262630] text-xs font-semibold text-purple-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>متاح لاستقبال ومناقشة المشاريع الجديدة</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight mb-6 leading-[1.1]">
            عندك مشروع في دماغك؟<br />
            <span className="text-purple-400">نتكلم ونشوف إيه الممكن.</span>
          </h2>

          <p className="text-base sm:text-xl text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed mb-12">
            سواء كان عندك فكرة جديدة، مشكلة بتضيع وقت فريقك، أو حابب تستشيرنا في أفضل خطوة تكنولوجية — ابعت لينا وهنرد عليك خلال 24 ساعة بأفكار واضحة وخطة عمل.
          </p>

          {/* 3 Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            {/* WhatsApp */}
            <div className="p-6 rounded-2xl bg-[#09090D] border border-white/10 hover:border-emerald-500/40 transition-all text-center flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl mx-auto mb-4">
                  💬
                </div>
                <h3 className="text-base font-bold text-white mb-1">واتساب المباشر</h3>
                <p className="text-xs text-[#71717A] font-mono mb-4" dir="ltr">+20 100 707 8085</p>
              </div>
              <a
                href="https://wa.me/201007078085"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                ابدأ محادثة فورية
              </a>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-[#09090D] border border-white/10 hover:border-purple-500/40 transition-all text-center flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center text-xl mx-auto mb-4">
                  ✉️
                </div>
                <h3 className="text-base font-bold text-white mb-1">البريد الإلكتروني</h3>
                <p className="text-xs text-[#71717A] font-mono mb-4" dir="ltr">othvm.me@gmail.com</p>
              </div>
              <a
                href="mailto:othvm.me@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs tracking-wide transition-all shadow-[0_0_20px_rgba(108,59,255,0.3)]"
              >
                راسلنا على الإيميل
              </a>
            </div>

            {/* Instagram */}
            <div className="p-6 rounded-2xl bg-[#09090D] border border-white/10 hover:border-pink-500/40 transition-all text-center flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center text-xl mx-auto mb-4">
                  📸
                </div>
                <h3 className="text-base font-bold text-white mb-1">إنستغرام OTHVM</h3>
                <p className="text-xs text-[#71717A] font-mono mb-4" dir="ltr">@othvmai</p>
              </div>
              <a
                href="https://www.instagram.com/othvmai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs tracking-wide transition-all shadow-[0_0_20px_rgba(217,70,239,0.3)]"
              >
                تواصل على إنستغرام
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-[#1A1A24] bg-[#050508] py-16 px-5 sm:px-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12 text-right">
            {/* Brand Col */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#111] border border-white/15 flex items-center justify-center font-bold text-xs text-white">
                  <span dir="ltr" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>OTHVM</span>
                </div>
                <span className="text-white font-extrabold text-sm tracking-widest font-mono">
                  OTHVM TECHNOLOGY
                </span>
              </div>
              <p className="text-sm text-[#71717A] leading-relaxed max-w-sm mb-4">
                علامة تكنولوجية مستقلة متخصصة في أتمتة العمليات، حلول الذكاء الاصطناعي، وبناء أدوات مخصصة للشركات الطموحة.
              </p>
              <p className="text-xs text-[#52525B]">مؤسس العلامة: عثمان محمد (Othman Mohamed)</p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-semibold text-[#71717A] tracking-widest uppercase mb-4 font-mono">
                روابط سريعة
              </h4>
              <ul className="space-y-2.5 text-sm text-[#A1A1AA]">
                <li><a href="#hero" className="hover:text-white transition-colors">الرئيسية</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">عن OTHVM</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">الخدمات التقنية</a></li>
                <li><a href="#work" className="hover:text-white transition-colors">الأعمال والنماذج</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">المنتجات الرقمية</a></li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="md:col-span-4">
              <h4 className="text-xs font-semibold text-[#71717A] tracking-widest uppercase mb-4 font-mono">
                قنوات التواصل
              </h4>
              <ul className="space-y-2.5 text-sm text-[#A1A1AA]">
                <li>
                  <a href="https://wa.me/201007078085" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                    واتساب: <span dir="ltr">+20 100 707 8085</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:othvm.me@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                    إيميل: <span dir="ltr">othvm.me@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/othvmai/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                    إنستغرام العلامة: <span dir="ltr">@othvmai</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/othvm_/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                    إنستغرام المؤسس: <span dir="ltr">@othvm_</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
            <div>© {year} OTHVM. جميع الحقوق محفوظة.</div>
            <div>صُنع بـ 🤍 وبأعلى معايير الإتقان في مصر</div>
          </div>
        </div>
      </footer>

      {/* ═══ FLOATING WHATSAPP BUTTON ═══ */}
      <div className="fixed bottom-6 left-6 z-50">
        <a
          href="https://wa.me/201007078085"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setWhatsappTooltip(true)}
          onMouseLeave={() => setWhatsappTooltip(false)}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_4px_25px_rgba(16,185,129,0.5)] hover:shadow-[0_4px_35px_rgba(16,185,129,0.7)] hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="تواصل عبر واتساب"
        >
          <span className="text-2xl">💬</span>

          {whatsappTooltip && (
            <span className="absolute right-16 px-3.5 py-1.5 rounded-xl bg-[#09090D] border border-white/10 text-white text-xs font-semibold whitespace-nowrap shadow-xl">
              تواصل مباشرة عبر واتساب
            </span>
          )}
        </a>
      </div>
    </div>
  );
}
