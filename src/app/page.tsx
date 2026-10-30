'use client';

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());

    const prog = document.getElementById('progress');
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? window.scrollY / total : 0;
      if (prog) {
        prog.style.transform = `scaleX(${pct})`;
      }
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Fade-up on scroll
    const fadeEls = document.querySelectorAll('.fade-up, .hero-visual');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    fadeEls.forEach((el) => observer.observe(el));

    // Trigger hero immediately
    const timer = setTimeout(() => {
      document
        .querySelectorAll('#home .fade-up, #home .hero-visual')
        .forEach((el) => el.classList.add('visible'));
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      {/* Scroll progress */}
      <div id="progress"></div>

      {/* ═══ NAVBAR ═══ */}
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a
            className="nav-logo"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="nav-logo-box">OTHVM</div>
          </a>
          <div className="nav-links">
            <a href="#home" onClick={closeMenu}>
              الرئيسية
            </a>
            <a href="#services" onClick={closeMenu}>
              الخدمات
            </a>
            <a href="#work" onClick={closeMenu}>
              الأعمال
            </a>
            <a href="#products" onClick={closeMenu}>
              المنتجات
            </a>
            <a href="#about" onClick={closeMenu}>
              عن OTHVM
            </a>
            <a href="#contact" onClick={closeMenu}>
              تواصل
            </a>
          </div>
          <a className="btn-primary" href="#contact">
            ناقش مشروعك
          </a>
          <button
            className="hamburger"
            id="hamburger"
            onClick={toggleMenu}
            aria-label="القائمة"
          >
            <svg
              id="ham-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="#F5F3FA"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu">
        <a href="#home" onClick={closeMenu}>
          الرئيسية
        </a>
        <a href="#services" onClick={closeMenu}>
          الخدمات
        </a>
        <a href="#work" onClick={closeMenu}>
          الأعمال
        </a>
        <a href="#products" onClick={closeMenu}>
          المنتجات
        </a>
        <a href="#about" onClick={closeMenu}>
          عن OTHVM
        </a>
        <a href="#contact" onClick={closeMenu}>
          تواصل
        </a>
        <a className="btn-primary" href="#contact" onClick={closeMenu}>
          ناقش مشروعك
        </a>
      </div>

      {/* ═══ HERO ═══ */}
      <section id="home">
        <div
          className="orb"
          style={{
            width: '700px',
            height: '700px',
            background:
              'radial-gradient(circle,rgba(108,59,255,.16) 0%,transparent 70%)',
            bottom: '-200px',
            left: '-120px',
          }}
        ></div>
        <div
          className="orb"
          style={{
            width: '400px',
            height: '400px',
            background:
              'radial-gradient(circle,rgba(155,109,255,.10) 0%,transparent 70%)',
            top: '80px',
            right: '5%',
          }}
        ></div>

        <div className="hero-inner">
          {/* Text */}
          <div className="hero-text">
            <span className="label fade-up" style={{ transitionDelay: '.05s' }}>
              OTHVM — التكنولوجيا في خدمتك
            </span>
            <h1 className="hero-title fade-up" style={{ transitionDelay: '.15s' }}>
              <span className="line1">التكنولوجيا مش مجرد أدوات.</span>
              <span className="line2">دي فرصة تشتغل بقوة أكبر.</span>
            </h1>
            <p className="hero-sub fade-up" style={{ transitionDelay: '.28s' }}>
              نحوّل التكنولوجيا لحلول عملية تساعدك تطوّر شغلك وتوصل لأهدافك بكفاءة أعلى.
            </p>
            <div className="hero-ctas fade-up" style={{ transitionDelay: '.40s' }}>
              <a className="btn-primary" href="#contact">
                ناقش مشروعك
              </a>
              <a className="btn-ghost" href="#services">
                استكشف الخدمات
              </a>
            </div>
          </div>

          {/* 3D Crystal */}
          <div className="crystal-wrap hero-visual">
            <div className="crystal-glow"></div>
            <div className="panels-container">
              <div className="panel p1"></div>
              <div className="panel p2"></div>
              <div className="panel p3"></div>
              <div className="panel p4"></div>
              <div className="panel p5"></div>
            </div>
          </div>
        </div>

        <div className="scroll-hint">↓</div>
      </section>

      {/* ═══ VALUE ═══ */}
      <section id="value">
        <div
          className="orb"
          style={{
            width: '500px',
            height: '500px',
            background:
              'radial-gradient(circle,rgba(108,59,255,.09) 0%,transparent 70%)',
            top: '-80px',
            right: '-100px',
          }}
        ></div>
        <div className="section-inner">
          <span className="label fade-up">02 / القيمة</span>
          <h2 className="section-title fade-up d1">
            مش لازم تشتغل أكتر
            <br />
            <span>عشان تحقق أكتر.</span>
          </h2>
          <div className="value-grid">
            <div className="card fade-up d1">
              <div className="card-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M24 8 L24 36M16 18 L24 8 L32 18"
                    stroke="#9B6DFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 30 L24 18 L36 30"
                    stroke="rgba(155,109,255,.4)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 40 L38 40"
                    stroke="rgba(108,59,255,.3)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '8px',
                }}
              >
                سرعة أكبر
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--muted)',
                  lineHeight: 1.75,
                }}
              >
                أنجز المهام والعمليات بكفاءة أعلى.
              </p>
            </div>

            <div className="card fade-up d2">
              <div className="card-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M38 16 C38 10 32 6 24 6 C16 6 10 10 10 16 C10 22 18 24 24 24 C30 24 38 27 38 33 C38 39 32 42 24 42 C16 42 10 38 10 33"
                    stroke="#9B6DFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M24 4 L24 8M24 42 L24 46"
                    stroke="rgba(155,109,255,.5)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 38 L36 38"
                    stroke="rgba(108,59,255,.3)"
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '8px',
                }}
              >
                تكلفة أقل
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--muted)',
                  lineHeight: 1.75,
                }}
              >
                قلّل الهدر والخطوات غير الضرورية.
              </p>
            </div>

            <div className="card fade-up d3">
              <div className="card-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect
                    x="6"
                    y="6"
                    width="20"
                    height="20"
                    rx="3"
                    stroke="rgba(155,109,255,.25)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <rect
                    x="10"
                    y="10"
                    width="20"
                    height="20"
                    rx="3"
                    stroke="rgba(155,109,255,.5)"
                    strokeWidth="1.5"
                    fill="rgba(108,59,255,.06)"
                  />
                  <rect
                    x="14"
                    y="14"
                    width="20"
                    height="20"
                    rx="3"
                    stroke="#9B6DFF"
                    strokeWidth="2"
                    fill="rgba(108,59,255,.12)"
                  />
                  <path
                    d="M18 24 L22 28 L30 20"
                    stroke="#9B6DFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '8px',
                }}
              >
                قدرة أكبر
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--muted)',
                  lineHeight: 1.75,
                }}
              >
                أنجز شغل أكتر من غير ما تعتمد على مجهودك اليدوي.
              </p>
            </div>

            <div className="card fade-up d4">
              <div className="card-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect
                    x="8"
                    y="30"
                    width="8"
                    height="10"
                    rx="2"
                    fill="rgba(108,59,255,.25)"
                    stroke="#9B6DFF"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="20"
                    y="22"
                    width="8"
                    height="18"
                    rx="2"
                    fill="rgba(108,59,255,.4)"
                    stroke="#9B6DFF"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="32"
                    y="12"
                    width="8"
                    height="28"
                    rx="2"
                    fill="rgba(108,59,255,.6)"
                    stroke="#9B6DFF"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10 28 L22 20 L34 10"
                    stroke="#9B6DFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="34" cy="10" r="3" fill="#9B6DFF" />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '8px',
                }}
              >
                فرص نمو أفضل
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--muted)',
                  lineHeight: 1.75,
                }}
              >
                وجّه وقتك ومواردك للحاجات اللي ممكن تطوّر البيزنس.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services">
        <div
          className="orb"
          style={{
            width: '520px',
            height: '520px',
            background:
              'radial-gradient(circle,rgba(108,59,255,.09) 0%,transparent 70%)',
            bottom: '-100px',
            left: '-80px',
          }}
        ></div>
        <div className="section-inner">
          <span className="label fade-up">03 / الخدمات</span>
          <h2 className="section-title fade-up d1">
            عندك هدف أو مشكلة في شغلك؟
            <br />
            <span>نصمّم حلولاً تناسب احتياجك الفعلي.</span>
          </h2>
          <div className="services-grid">
            <div className="card fade-up d1">
              <div className="card-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M16 24 C16 18 20 14 26 14 C32 14 36 18 36 24"
                    stroke="#9B6DFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M36 24 C36 30 32 34 26 34 C20 34 16 30 16 24"
                    stroke="rgba(155,109,255,.4)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M14 20 L16 24 L20 22"
                    stroke="#9B6DFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M38 28 L36 24 L32 26"
                    stroke="rgba(155,109,255,.6)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="26"
                    cy="24"
                    r="3.5"
                    fill="rgba(108,59,255,.3)"
                    stroke="#9B6DFF"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '8px',
                }}
              >
                أتمتة العمليات
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--muted)',
                  lineHeight: 1.75,
                }}
              >
                تقليل العمل اليدوي وتسريع تنفيذ المهام اليومية في شغلك.
              </p>
              <a className="service-link" href="#contact">
                اعرف أكتر
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="#9B6DFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <div className="card fade-up d2">
              <div className="card-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle
                    cx="12"
                    cy="24"
                    r="6"
                    fill="rgba(108,59,255,.18)"
                    stroke="#9B6DFF"
                    strokeWidth="2"
                  />
                  <circle
                    cx="36"
                    cy="14"
                    r="6"
                    fill="rgba(108,59,255,.18)"
                    stroke="#9B6DFF"
                    strokeWidth="2"
                  />
                  <circle
                    cx="36"
                    cy="34"
                    r="6"
                    fill="rgba(108,59,255,.18)"
                    stroke="#9B6DFF"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 24 L30 16M18 24 L30 32"
                    stroke="rgba(155,109,255,.55)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="24" r="2" fill="#9B6DFF" />
                  <circle cx="36" cy="14" r="2" fill="#9B6DFF" />
                  <circle cx="36" cy="34" r="2" fill="#9B6DFF" />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '8px',
                }}
              >
                ربط الأنظمة والأدوات
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--muted)',
                  lineHeight: 1.75,
                }}
              >
                خلّي بياناتك وعملياتك تشتغل مع بعض بدل التشتت بين أدوات منفصلة.
              </p>
              <a className="service-link" href="#contact">
                اعرف أكتر
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="#9B6DFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <div className="card fade-up d3">
              <div className="card-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect
                    x="10"
                    y="18"
                    width="28"
                    height="18"
                    rx="4"
                    fill="rgba(108,59,255,.1)"
                    stroke="#9B6DFF"
                    strokeWidth="2"
                  />
                  <rect
                    x="10"
                    y="12"
                    width="28"
                    height="8"
                    rx="3"
                    fill="rgba(108,59,255,.14)"
                    stroke="rgba(155,109,255,.5)"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="10"
                    y="6"
                    width="28"
                    height="8"
                    rx="3"
                    fill="rgba(108,59,255,.07)"
                    stroke="rgba(155,109,255,.28)"
                    strokeWidth="1"
                  />
                  <path
                    d="M17 27 L20 32 L23 24 L26 30 L29 24 L31 27"
                    stroke="#9B6DFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '8px',
                }}
              >
                حلول ومساعدات ذكية
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--muted)',
                  lineHeight: 1.75,
                }}
              >
                أنظمة تنفّذ مهام محددة وتساعدك في إدارة الشغل بشكل أذكى.
              </p>
              <a className="service-link" href="#contact">
                اعرف أكتر
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="#9B6DFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <div className="card fade-up d4">
              <div className="card-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M24 8 L38 16 L38 32 L24 40 L10 32 L10 16 Z"
                    fill="rgba(108,59,255,.06)"
                    stroke="rgba(155,109,255,.2)"
                    strokeWidth="1"
                  />
                  <path
                    d="M24 8 L38 16 L24 24 L10 16 Z"
                    fill="rgba(108,59,255,.16)"
                    stroke="#9B6DFF"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M24 24 L10 16 L10 32 L24 40 Z"
                    fill="rgba(108,59,255,.11)"
                    stroke="rgba(155,109,255,.5)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M24 24 L38 16 L38 32 L24 40 Z"
                    fill="rgba(108,59,255,.20)"
                    stroke="#9B6DFF"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M24 8 L24 24"
                    stroke="rgba(255,255,255,.08)"
                    strokeWidth="1"
                  />
                </svg>
              </div>
              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '8px',
                }}
              >
                أدوات مخصصة
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--muted)',
                  lineHeight: 1.75,
                }}
              >
                حلول تُبنى حسب طبيعة مشروعك — مش قالب واحد للجميع.
              </p>
              <a className="service-link" href="#contact">
                اعرف أكتر
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="#9B6DFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="services-cta fade-up">
            <a className="btn-primary" href="#contact">
              ناقش مشروعك معنا
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PROJECTS ═══ */}
      <section id="work">
        <div
          className="orb"
          style={{
            width: '480px',
            height: '480px',
            background:
              'radial-gradient(circle,rgba(108,59,255,.08) 0%,transparent 70%)',
            top: '-60px',
            right: '-60px',
          }}
        ></div>
        <div className="section-inner">
          <span className="label fade-up">04 / الأعمال</span>
          <h2 className="section-title fade-up d1">
            شغل حقيقي.
            <br />
            <span>نتائج ملموسة.</span>
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: 'var(--muted)',
              marginBottom: '28px',
            }}
            className="fade-up d2"
          >
            مجموعة من التجارب العملية والمشاريع اللي اشتغلنا عليها.
          </p>

          <div className="disclaimer fade-up d2">
            <span>⚡</span>
            <span>
              كل المشاريع المعروضة هنا إما تجارب شخصية أو نماذج أولية — مش مشاريع عملاء حقيقيين في هذه المرحلة.
            </span>
          </div>

          <div className="projects-grid">
            <div className="card fade-up d1">
              <span className="badge badge-prototype">نموذج أولي</span>
              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '16px',
                }}
              >
                مساعد المحتوى
              </h3>
              <div className="project-problem">
                <strong>المشكلة</strong>
                <p>إنتاج محتوى باللغة العربية بيأخد وقت كتير.</p>
              </div>
              <div className="project-solution" style={{ marginTop: '10px' }}>
                <strong>الحل</strong>
                <p>نموذج أولي لمساعد يساعد في توليد أفكار وصياغة محتوى عربي بسرعة.</p>
              </div>
              <div className="tags">
                <span className="tag">AI</span>
                <span className="tag">Python</span>
                <span className="tag">Prompt Engineering</span>
              </div>
              <button className="btn-disabled" disabled>
                عرض المشروع — قريباً
              </button>
            </div>

            <div className="card fade-up d2">
              <span className="badge badge-experiment">تجربة شخصية</span>
              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '16px',
                }}
              >
                أتمتة تقرير يومي
              </h3>
              <div className="project-problem">
                <strong>المشكلة</strong>
                <p>إعداد تقارير يدوية يومياً يستهلك وقت من الفريق.</p>
              </div>
              <div className="project-solution" style={{ marginTop: '10px' }}>
                <strong>الحل</strong>
                <p>تجربة لأتمتة سحب البيانات وتوليد تقرير منسّق تلقائياً.</p>
              </div>
              <div className="tags">
                <span className="tag">Automation</span>
                <span className="tag">n8n</span>
                <span className="tag">Google Sheets</span>
              </div>
              <button className="btn-disabled" disabled>
                عرض المشروع — قريباً
              </button>
            </div>

            <div className="card fade-up d3">
              <span className="badge badge-prototype">نموذج أولي</span>
              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '16px',
                }}
              >
                بوت خدمة عملاء
              </h3>
              <div className="project-problem">
                <strong>المشكلة</strong>
                <p>الردود المتكررة على استفسارات العملاء تستنزف الجهد.</p>
              </div>
              <div className="project-solution" style={{ marginTop: '10px' }}>
                <strong>الحل</strong>
                <p>نموذج أولي لبوت واتساب يرد على الأسئلة الشائعة تلقائياً.</p>
              </div>
              <div className="tags">
                <span className="tag">WhatsApp API</span>
                <span className="tag">AI</span>
                <span className="tag">Node.js</span>
              </div>
              <button className="btn-disabled" disabled>
                عرض المشروع — قريباً
              </button>
            </div>
          </div>

          <div className="projects-cta fade-up">
            <h3>عندك مشروع في دماغك؟</h3>
            <p>نتكلم ونشوف إيه الممكن.</p>
            <a className="btn-primary" href="#contact">
              تواصل معنا
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PRODUCTS ═══ */}
      <section id="products">
        <div
          className="orb"
          style={{
            width: '600px',
            height: '600px',
            background:
              'radial-gradient(circle,rgba(108,59,255,.14) 0%,transparent 70%)',
            bottom: '-150px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        ></div>
        <div className="section-inner">
          <span className="label fade-up" style={{ display: 'block', textAlign: 'center' }}>
            05 / المنتجات الرقمية
          </span>
          <h2 className="section-title fade-up d1" style={{ textAlign: 'center' }}>
            عايز تستفيد من <span dir="ltr" style={{ display: 'inline' }}>AI</span> بنفسك؟
            <br />
            <span>مش كل هدف محتاج خدمة مخصصة.</span>
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--muted)',
              textAlign: 'center',
              maxWidth: '580px',
              margin: '0 auto 56px',
              lineHeight: 1.85,
            }}
            className="fade-up d2"
          >
            بنجهّز منتجات رقمية تساعدك تفهم الذكاء الاصطناعي، تستخدمه بوعي، وتستكشف طرق تحويله لأفكار ومشروعات عملية.
          </p>

          <p className="products-tagline fade-up d2">
            تعلّم. جرّب. <span>وابن فرصتك.</span>
          </p>

          <div className="products-grid">
            {/* Book 1 */}
            <div className="card product-card fade-up d2" style={{ padding: '36px 28px' }}>
              <div className="book-cover">
                <div className="book-bg"></div>
                <div className="book-shine"></div>
                <div className="book-spine"></div>
                <div className="book-content">
                  <span className="book-brand">OTHVM EDITION</span>
                  <div>
                    <div className="book-title-ar">
                      AI
                      <br />
                      للمبتدئين
                    </div>
                    <div style={{ height: '8px' }}></div>
                    <div className="book-lines">
                      <div className="book-line"></div>
                      <div className="book-line" style={{ width: '70%', marginRight: 'auto' }}></div>
                      <div className="book-line" style={{ width: '85%', marginRight: 'auto' }}></div>
                    </div>
                  </div>
                  <div className="book-sub-ar">
                    كتاب عربي • دليل عملي
                    <br />
                    إصدار رقمي
                  </div>
                </div>
              </div>
              <div className="product-info">
                <span className="coming-badge">قريباً</span>
                <h3>&quot;AI للمبتدئين&quot;</h3>
                <p>دليل عملي للمبتدئين بالعربي — تفهم AI، تستخدمه في حياتك اليومية، وتبدأ تشوف الفرص حواليك.</p>
                <a className="btn-ghost" href="#contact">
                  سجّل اهتمامك
                </a>
              </div>
            </div>

            {/* Book 2 */}
            <div className="card product-card fade-up d3" style={{ padding: '36px 28px' }}>
              <div className="book-cover">
                <div
                  className="book-bg"
                  style={{
                    background:
                      'linear-gradient(160deg,#1E1069 0%,#0F0A3D 55%,#050218 100%)',
                  }}
                ></div>
                <div className="book-shine"></div>
                <div className="book-spine"></div>
                <div className="book-content">
                  <span className="book-brand">OTHVM EDITION</span>
                  <div>
                    <div className="book-title-ar">
                      AI
                      <br />
                      والفلوس
                    </div>
                    <div style={{ height: '8px' }}></div>
                    <div className="book-lines">
                      <div className="book-line"></div>
                      <div className="book-line" style={{ width: '80%', marginRight: 'auto' }}></div>
                      <div className="book-line" style={{ width: '60%', marginRight: 'auto' }}></div>
                    </div>
                  </div>
                  <div className="book-sub-ar">
                    كيف تبني مصدر دخل
                    <br />
                    بالذكاء الاصطناعي
                  </div>
                </div>
              </div>
              <div className="product-info">
                <span className="coming-badge">قريباً</span>
                <h3>&quot;AI والفلوس&quot;</h3>
                <p>دليل عملي لاستكشاف الفرص الاقتصادية في عصر AI — أفكار، نماذج، وخطوات تنفيذية.</p>
                <a className="btn-ghost" href="#contact">
                  سجّل اهتمامك
                </a>
              </div>
            </div>
          </div>
          <p className="products-note fade-up">
            المنتجات قيد التطوير حالياً. سيتم الإعلان عن تاريخ الإطلاق قريباً.
          </p>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about">
        <div
          className="orb"
          style={{
            width: '450px',
            height: '450px',
            background:
              'radial-gradient(circle,rgba(108,59,255,.09) 0%,transparent 70%)',
            top: '-40px',
            left: '-80px',
          }}
        ></div>
        <div className="section-inner">
          <span className="label fade-up">06 / عن OTHVM</span>
          <h2 className="section-title fade-up d1">
            تكنولوجيا تشتغل ليك.
            <br />
            <span>مش العكس.</span>
          </h2>
          <div className="about-cols">
            <div className="about-text fade-up d2">
              <p>
                <strong>OTHVM</strong> علامة تجارية مستقلة متخصصة في تقديم حلول تكنولوجية عملية للشركات والأفراد.
              </p>
              <p>
                مش بنبيع أدوات. بنحلّ مشاكل. بنفهم احتياجك الحقيقي ونصمم حلاً يناسبه — سواء كان أتمتة، ربط أنظمة، أو بناء أداة مخصصة من الصفر.
              </p>
              <p>
                الهدف دايماً واحد: إنك تشتغل بكفاءة أعلى وتوصل لأهدافك بسرعة أكبر.
              </p>
            </div>
            <div
              className="founder-card card fade-up d3"
              style={{ padding: '36px 28px' }}
            >
              <div className="founder-avatar">ع</div>
              <p className="founder-note" style={{ marginBottom: '12px' }}>
                صورة المؤسس — قريباً
              </p>
              <div className="founder-name">عثمان محمد</div>
              <div className="founder-role">مؤسس OTHVM</div>
              <p className="founder-line">
                بيؤمن إن التكنولوجيا لازم تخدم الناس، مش العكس.
              </p>
              <a
                className="founder-ig"
                href="https://www.instagram.com/othvm_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="#F5F3FA"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4.5"
                    stroke="#F5F3FA"
                    strokeWidth="1.8"
                  />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="#F5F3FA" />
                </svg>
                @othvm_
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact">
        <div
          className="orb"
          style={{
            width: '500px',
            height: '500px',
            background:
              'radial-gradient(circle,rgba(108,59,255,.12) 0%,transparent 70%)',
            top: '-60px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        ></div>
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <span className="label fade-up" style={{ display: 'block' }}>
            07 / تواصل
          </span>
          <h2 className="section-title fade-up d1" style={{ marginBottom: '16px' }}>
            عندك مشروع؟
            <br />
            <span>نتكلم.</span>
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--muted)',
              maxWidth: '500px',
              margin: '0 auto 56px',
              lineHeight: 1.85,
            }}
            className="fade-up d2"
          >
            سواء كان عندك فكرة، مشكلة محددة، أو مجرد سؤال — ابعت لينا وهنرد عليك.
          </p>

          <div className="contact-grid">
            {/* WhatsApp */}
            <div
              className="card contact-card fade-up d1"
              style={{ padding: '32px 24px' }}
            >
              <div className="contact-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="rgba(34,197,94,.1)"
                    stroke="rgba(34,197,94,.35)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M20 10C14.48 10 10 14.48 10 20C10 21.82 10.49 23.53 11.35 25L10 30L15.17 28.67C16.6 29.48 18.24 29.95 20 29.95C25.52 29.95 30 25.47 30 19.95C30 14.43 25.52 10 20 10Z"
                    fill="rgba(34,197,94,.15)"
                    stroke="#22c55e"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16 17.5C16 17 16.5 15.5 17.5 15.5C18 15.5 18.3 15.8 18.5 16.2L19.5 18.5C19.7 18.9 19.5 19.3 19.2 19.6L18.5 20.3C18.8 21 19.8 22.3 21 23C21.7 23.4 22.1 23.1 22.4 22.8L23 22.2C23.3 21.9 23.7 21.7 24.1 22L26 23.2C26.4 23.5 26.5 23.9 26.2 24.3C25.7 25.1 24.6 26 23.5 26C21 26 17 22.5 16.2 19.5C15.9 18.5 15.9 18 16 17.5Z"
                    fill="#22c55e"
                  />
                </svg>
              </div>
              <h3>تواصل على واتساب</h3>
              <p className="contact-val" dir="ltr">
                +20 100 707 8085
              </p>
              <a
                className="btn-primary"
                href="https://wa.me/201007078085"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg,#16a34a,#22c55e)',
                  boxShadow: '0 4px 20px rgba(34,197,94,.3)',
                }}
              >
                ابدأ محادثة
              </a>
            </div>

            {/* Email */}
            <div
              className="card contact-card fade-up d2"
              style={{ padding: '32px 24px' }}
            >
              <div className="contact-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="rgba(108,59,255,.1)"
                    stroke="rgba(108,59,255,.35)"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="10"
                    y="14"
                    width="20"
                    height="14"
                    rx="3"
                    fill="rgba(108,59,255,.15)"
                    stroke="#9B6DFF"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10 17 L20 23 L30 17"
                    stroke="#9B6DFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>راسلنا على الإيميل</h3>
              <p className="contact-val">othvm.me@gmail.com</p>
              <a
                className="btn-primary"
                href="mailto:othvm.me@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ابعت إيميل
              </a>
            </div>

            {/* Instagram */}
            <div
              className="card contact-card fade-up d3"
              style={{ padding: '32px 24px' }}
            >
              <div className="contact-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="rgba(217,70,239,.08)"
                    stroke="rgba(217,70,239,.3)"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="11"
                    y="11"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="#c026d3"
                    strokeWidth="1.5"
                    fill="rgba(217,70,239,.1)"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="4.5"
                    stroke="#c026d3"
                    strokeWidth="1.5"
                  />
                  <circle cx="25.5" cy="14.5" r="1.2" fill="#c026d3" />
                </svg>
              </div>
              <h3>تابع OTHVM</h3>
              <p className="contact-val">@othvmai</p>
              <a
                className="btn-primary"
                href="https://www.instagram.com/othvmai/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg,#9333ea,#c026d3)',
                  boxShadow: '0 4px 20px rgba(192,38,211,.3)',
                }}
              >
                تابعنا
              </a>
            </div>
          </div>
          <p className="contact-note fade-up">بنرد خلال 24 ساعة عادةً.</p>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="nav-logo-box">OTHVM</div>
            </div>
            <p className="footer-tagline">اخلّي التكنولوجيا تشتغل ليك.</p>
          </div>
          <div className="footer-links">
            <h4>روابط سريعة</h4>
            <ul>
              <li>
                <a href="#home">الرئيسية</a>
              </li>
              <li>
                <a href="#services">الخدمات</a>
              </li>
              <li>
                <a href="#work">الأعمال</a>
              </li>
              <li>
                <a href="#products">المنتجات</a>
              </li>
              <li>
                <a href="#about">عن OTHVM</a>
              </li>
              <li>
                <a href="#contact">تواصل</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>تابعنا</h4>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/othvmai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram — @othvmai
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/201007078085"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px' }}>
          <div className="footer-bottom">
            <span>© {year} OTHVM. جميع الحقوق محفوظة.</span>
            <span>صُنع بـ 🤍 في مصر</span>
          </div>
        </div>
      </footer>
    </>
  );
}
