'use client';

import Image from 'next/image';

export default function FooterSection() {
  const navLinks = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'الخدمات', href: '#services' },
    { label: 'الأعمال', href: '#work' },
    { label: 'المنتجات', href: '#products' },
    { label: 'عن OTHVM', href: '#about' },
    { label: 'تواصل', href: '#contact' },
  ];

  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      background: '#09090D',
      position: 'relative',
      zIndex: 1,
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '60px 24px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 40,
      }}>
        {/* Brand */}
        <div>
          <a href="#home" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <Image src="/logo/OTHVM.png" alt="OTHVM" width={40} height={40} style={{ borderRadius: 8, marginBottom: 16 }} />
          </a>
          <p style={{ color: 'rgba(245,243,250,0.6)', fontSize: 14, margin: 0 }}>
            اخلّي التكنولوجيا تشتغل ليك.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ fontSize: 15, fontWeight: 700, color: '#FFFFFF', marginBottom: 16 }}>روابط سريعة</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {navLinks.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={e => {
                    if (l.href === '#home') {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  style={{
                    color: 'rgba(245,243,250,0.5)',
                    textDecoration: 'none',
                    fontSize: 14,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#9B6DFF')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,243,250,0.5)')}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 style={{ fontSize: 15, fontWeight: 700, color: '#FFFFFF', marginBottom: 16 }}>تابعنا</h4>
          <a
            href="https://www.instagram.com/othvmai/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: 'rgba(245,243,250,0.6)',
              textDecoration: 'none',
              fontSize: 14,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#9B6DFF')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,243,250,0.6)')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <span className="ltr-text">@othvmai</span>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.04)',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12,
        color: 'rgba(245,243,250,0.4)',
        fontSize: 13,
      }}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} OTHVM. جميع الحقوق محفوظة.</p>
        <p style={{ margin: 0 }}>صُنع بـ 🤍 في مصر</p>
      </div>
    </footer>
  );
}
