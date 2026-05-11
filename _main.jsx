// 54Vie — Homepage main components (standalone copy for /homepage deploy)
// Phụ thuộc: BRAND (homepage/_brand.jsx)
// Cung cấp: HomeContainer, HomeHeader, HomeFooter, Homepage

// ────────────── Container ──────────────
function HomeContainer({ children, style, className }) {
  return (
    <div className={'hp-container' + (className ? ' ' + className : '')} style={{
      maxWidth: 1200, margin: '0 auto',
      padding: '0 32px',
      ...style,
    }}>{children}</div>
  );
}
window.HomeContainer = HomeContainer;

// ────────────── Header ──────────────
function HomeHeader() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const NAV = [
    { label: 'Dịch vụ',       href: '/#services' },
    { label: 'Tài xế',        href: '/#driver' },
    { label: 'Vì sao 54Vie',  href: '/#why' },
    { label: 'Tải app',       href: '/#download' },
    { label: 'Hỗ trợ',        href: '/help/' },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'saturate(180%) blur(14px)',
      WebkitBackdropFilter: 'saturate(180%) blur(14px)',
      borderBottom: `1px solid ${BRAND.line}`,
    }}>
      <HomeContainer style={{
        height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/images/logo_54vie_2025.png" alt="54Vie" style={{
            width: 36, height: 36, objectFit: 'contain',
            border: `1.5px solid ${BRAND.ink}`, borderRadius: 8, padding: 2, background: BRAND.white,
          }}/>
          <span style={{
            fontSize: 20, fontWeight: 800, color: BRAND.ink, letterSpacing: -0.5,
            fontFamily: 'Inter, -apple-system, system-ui',
          }}>54<span style={{ color: BRAND.green }}>Vie</span></span>
        </a>

        <nav className="hp-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {NAV.map(n => (
            <a key={n.label} href={n.href} style={{
              padding: '8px 14px', borderRadius: 8,
              fontSize: 14, fontWeight: 600,
              color: BRAND.ink2,
              textDecoration: 'none',
            }}>{n.label}</a>
          ))}
        </nav>

        {/* Hamburger — mobile only */}
        <button
          className="hp-burger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
          style={{
            display: 'none',
            width: 42, height: 42, borderRadius: 10,
            border: `1px solid ${BRAND.line}`,
            background: BRAND.white, cursor: 'pointer',
            alignItems: 'center', justifyContent: 'center',
            padding: 0, fontFamily: 'inherit',
          }}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M6 18L18 6" stroke={BRAND.ink} strokeWidth="2.2" strokeLinecap="round"/></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke={BRAND.ink} strokeWidth="2.2" strokeLinecap="round"/></svg>
          )}
        </button>
      </HomeContainer>

      {/* Mobile dropdown panel */}
      {menuOpen && (
        <div className="hp-mobile-menu" style={{
          display: 'none',
          borderTop: `1px solid ${BRAND.line}`,
          background: BRAND.white,
          padding: '8px 16px 16px',
        }}>
          {NAV.map(n => (
            <a key={n.label} href={n.href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', padding: '14px 8px',
              borderBottom: `1px solid ${BRAND.line}`,
              fontSize: 15, fontWeight: 700, color: BRAND.ink, textDecoration: 'none',
            }}>{n.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}
window.HomeHeader = HomeHeader;

// ────────────── Footer ──────────────
function HomeFooter() {
  const COL = [
    {
      title: 'Sản phẩm',
      items: [
        { label: 'Đặt xe', href: '/#services' },
        { label: 'Gửi hàng', href: '/#services' },
        { label: 'Tài xế đối tác', href: '/#driver' },
      ],
    },
    {
      title: 'Công ty',
      items: [
        { label: 'Về 54Vie', href: '#' },
        { label: 'Tuyển dụng', href: '#' },
        { label: 'Đối tác', href: '#' },
      ],
    },
    {
      title: 'Hỗ trợ',
      items: [
        { label: 'Trung tâm trợ giúp', href: '/help/' },
        { label: 'An toàn', href: '/safety/' },
        { label: 'Điều khoản', href: '/terms/' },
        { label: 'Chính sách bảo mật', href: '/privacy/' },
      ],
    },
  ];
  return (
    <footer id="download" style={{
      background: BRAND.bg, color: BRAND.ink, marginTop: 80,
      borderTop: `1px solid ${BRAND.line}`,
    }}>
      <HomeContainer style={{ padding: '64px 32px 32px' }}>
        <div className="hp-grid-footer" style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40,
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <img src="/images/logo_54vie_2025.png" alt="54Vie" style={{
                width: 40, height: 40, objectFit: 'contain',
                border: `1.5px solid ${BRAND.ink}`, borderRadius: 8, padding: 2, background: BRAND.white,
              }}/>
              <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.5, color: BRAND.ink }}>
                54<span style={{ color: BRAND.green }}>Vie</span>
              </span>
            </div>
            <p style={{
              fontSize: 14, lineHeight: 1.7, color: BRAND.ink2,
              maxWidth: 320, margin: 0,
            }}>
              Nền tảng đặt xe & gửi hàng. Minh bạch giá, giữ trọn thu nhập cho tài xế.
            </p>

            {/* Store badges */}
            <div style={{ display: 'flex', gap: 10, marginTop: 22, flexWrap: 'wrap' }}>
              <a href="#" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '10px 16px', borderRadius: 12,
                background: BRAND.ink, color: '#fff', textDecoration: 'none',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
                  <path d="M17.05 12.04c-.03-2.9 2.37-4.3 2.48-4.37-1.36-1.98-3.47-2.25-4.21-2.28-1.78-.18-3.49 1.05-4.39 1.05-.92 0-2.32-1.03-3.81-1-1.96.03-3.77 1.14-4.78 2.89-2.04 3.54-.52 8.77 1.45 11.65.97 1.41 2.12 2.99 3.63 2.93 1.46-.06 2.01-.94 3.77-.94 1.74 0 2.25.94 3.79.91 1.57-.03 2.56-1.43 3.51-2.85 1.11-1.63 1.57-3.22 1.59-3.3-.04-.02-3.05-1.17-3.08-4.65zM14.16 3.5c.81-.99 1.36-2.36 1.21-3.74-1.17.05-2.59.78-3.43 1.76-.75.87-1.41 2.27-1.23 3.61 1.31.1 2.64-.66 3.45-1.63z"/>
                </svg>
                <div style={{ textAlign: 'left', lineHeight: 1.1 }}>
                  <div style={{ fontSize: 9, fontWeight: 500, opacity: 0.7 }}>Tải về trên</div>
                  <div style={{ fontSize: 14, fontWeight: 800 }}>App Store</div>
                </div>
              </a>

              <a href="#" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '10px 16px', borderRadius: 12,
                background: BRAND.ink, color: '#fff', textDecoration: 'none',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M3.6 2.3c-.4.4-.6 1-.6 1.7v16c0 .7.2 1.3.6 1.7l8.4-9.7-8.4-9.7z" fill="#34A853"/>
                  <path d="M16.8 9l-4.8 2.8 8.4 4.9c.4-.4.6-.9.6-1.3v-.8c0-.4-.2-.9-.6-1.3l-3.6-4.3z" fill="#FBBC04"/>
                  <path d="M3.6 21.7c.7.7 1.7.7 2.5.2l10.5-6 -4.6-2.8-8.4 8.6z" fill="#EA4335"/>
                  <path d="M3.6 2.3l8.4 8.6 4.6-2.6L6.1 2.1c-.8-.4-1.8-.4-2.5.2z" fill="#4285F4"/>
                </svg>
                <div style={{ textAlign: 'left', lineHeight: 1.1 }}>
                  <div style={{ fontSize: 9, fontWeight: 500, opacity: 0.7 }}>Tải về trên</div>
                  <div style={{ fontSize: 14, fontWeight: 800 }}>Google Play</div>
                </div>
              </a>
            </div>
          </div>
          {COL.map(c => (
            <div key={c.title}>
              <div style={{
                fontSize: 11, fontWeight: 800, color: BRAND.mute,
                textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 16,
              }}>{c.title}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {c.items.map(it => (
                  <li key={it.label}>
                    <a href={it.href} style={{ fontSize: 14, fontWeight: 500, color: BRAND.ink2, textDecoration: 'none' }}>{it.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 56, paddingTop: 24,
          borderTop: `1px solid ${BRAND.line}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 12, color: BRAND.mute, fontWeight: 600,
        }}>
          <span>© 2026 54Vie</span>
          <span>developer@54vie.vn - 0326 110 792</span>
        </div>
      </HomeContainer>
    </footer>
  );
}
window.HomeFooter = HomeFooter;

// ────────────── Page root ──────────────
function Homepage() {
  return (
    <HomePageShell>
      <HomeHero/>
      <HomeServices/>
      <HomeWhy/>
      <HomeDriver/>
    </HomePageShell>
  );
}
window.Homepage = Homepage;
