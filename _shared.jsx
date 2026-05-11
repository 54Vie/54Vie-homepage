// 54Vie — Homepage shared components (page shell + sub-page hero)
// Phụ thuộc: BRAND (app.jsx), HomeContainer/HomeHeader/HomeFooter (homepage.jsx)

function HomePageShell({ children }) {
  return (
    <div style={{
      minHeight: '100vh', background: BRAND.white,
      fontFamily: 'Inter, -apple-system, "Segoe UI", system-ui, sans-serif',
      color: BRAND.ink, WebkitFontSmoothing: 'antialiased',
    }}>
      <style>{`
        /* Tablet ≤ 980px */
        @media (max-width: 980px) {
          .hp-container { padding: 0 20px !important; }
          .hp-grid-hero {
            grid-template-columns: 1fr !important;
            grid-template-areas: "text" "phone" "cta" !important;
            gap: 32px !important;
          }
          .hp-hero-text { grid-area: text; }
          .hp-hero-phone { grid-area: phone; }
          .hp-hero-cta { grid-area: cta; }
          .hp-grid-3 { grid-template-columns: 1fr 1fr !important; }
          .hp-grid-2 { grid-template-columns: 1fr !important; }
          .hp-grid-footer { grid-template-columns: 1fr 1fr !important; }
          .hp-longform-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .hp-longform-toc { position: static !important; }
          .hp-sticky-off { position: static !important; top: auto !important; }
          .hp-h-xl { font-size: 48px !important; letter-spacing: -1.4px !important; }
          .hp-h-lg { font-size: 36px !important; letter-spacing: -1px !important; }
          .hp-h-md { font-size: 28px !important; letter-spacing: -0.6px !important; }
          .hp-section-pad { padding: 64px 0 !important; }
          .hp-card-tilt { transform: none !important; animation: none !important; }
          .hp-phone-frame { transform: rotate(0deg) !important; animation: none !important; width: 280px !important; height: 500px !important; }
          .hp-hero-section { padding: 32px 0 80px !important; }
        }

        /* Mobile ≤ 640px */
        @media (max-width: 640px) {
          .hp-container { padding: 0 16px !important; }
          .hp-nav-links { display: none !important; }
          .hp-burger { display: inline-flex !important; }
          .hp-mobile-menu { display: block !important; }
          .hp-grid-3 { grid-template-columns: 1fr !important; }
          .hp-grid-footer { grid-template-columns: 1fr !important; gap: 28px !important; }
          .hp-h-xl { font-size: 38px !important; letter-spacing: -1px !important; line-height: 1.05 !important; }
          .hp-h-lg { font-size: 28px !important; letter-spacing: -0.6px !important; }
          .hp-h-md { font-size: 22px !important; letter-spacing: -0.4px !important; }
          .hp-section-pad { padding: 48px 0 !important; }
          .hp-card-pad { padding: 32px 20px !important; }
          .hp-sticker-bid, .hp-sticker-driver { display: none !important; }
          .hp-phone-frame { width: 240px !important; height: 420px !important; }
          .hp-bg-54 { font-size: 180px !important; }
          .hp-cta-row { flex-direction: column !important; align-items: stretch !important; }
          .hp-cta-row > a { text-align: center; justify-content: center; }
        }
      `}</style>
      <HomeHeader/>
      <main>{children}</main>
      <HomeFooter/>
    </div>
  );
}
window.HomePageShell = HomePageShell;

function SubPageHero({ kicker, title, subtitle }) {
  return (
    <section style={{
      padding: '80px 0 56px',
      background: BRAND.bg,
      borderBottom: `1px solid ${BRAND.line}`,
    }}>
      <HomeContainer>
        <a href="./" style={{
          fontSize: 13, fontWeight: 700, color: BRAND.green, textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 16,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 5l-7 7 7 7" stroke={BRAND.green} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Trang chủ
        </a>
        {kicker && (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 12px', borderRadius: 999,
            background: BRAND.greenSoft, color: BRAND.green,
            fontSize: 12, fontWeight: 800, letterSpacing: 1.2,
            marginBottom: 16,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.green }}/>
            {kicker}
          </div>
        )}
        <h1 className="hp-h-lg" style={{
          margin: 0, fontSize: 56, fontWeight: 900, letterSpacing: -1.8, color: BRAND.ink,
          lineHeight: 1.02,
        }}>{title}</h1>
        {subtitle && (
          <p style={{
            margin: '20px 0 0', fontSize: 17, color: BRAND.ink2, lineHeight: 1.6, maxWidth: 660,
          }}>{subtitle}</p>
        )}
      </HomeContainer>
    </section>
  );
}
window.SubPageHero = SubPageHero;

// Long-form text page wrapper (Terms, Privacy)
function LongFormPage({ kicker, title, subtitle, updatedAt, sections }) {
  return (
    <HomePageShell>
      <SubPageHero kicker={kicker} title={title} subtitle={subtitle}/>
      <section style={{ padding: '64px 0 80px' }}>
        <HomeContainer>
          <div className="hp-longform-grid" style={{
            display: 'grid', gridTemplateColumns: '240px 1fr', gap: 48,
            alignItems: 'flex-start',
          }}>
            {/* TOC sidebar */}
            <nav className="hp-longform-toc" style={{ position: 'sticky', top: 100 }}>
              <div style={{
                fontSize: 11, fontWeight: 800, color: BRAND.mute,
                textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 12,
              }}>Mục lục</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {sections.map((s, i) => (
                  <li key={s.title}>
                    <a href={`#s-${i}`} style={{
                      fontSize: 13, fontWeight: 600, color: BRAND.ink2, textDecoration: 'none',
                      display: 'flex', gap: 8,
                    }}>
                      <span style={{ color: BRAND.mute, fontWeight: 800, minWidth: 22 }}>{String(i + 1).padStart(2, '0')}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
              {updatedAt && (
                <div style={{
                  marginTop: 24, padding: 14, borderRadius: 10,
                  background: BRAND.bg, border: `1px solid ${BRAND.line}`,
                  fontSize: 12, color: BRAND.mute, fontWeight: 600,
                }}>Cập nhật: {updatedAt}</div>
              )}
            </nav>

            {/* Article */}
            <article style={{ maxWidth: 720 }}>
              {sections.map((s, i) => (
                <div key={s.title} id={`s-${i}`} style={{ marginBottom: 48, scrollMarginTop: 100 }}>
                  <h2 style={{
                    margin: 0, fontSize: 26, fontWeight: 900, color: BRAND.ink, letterSpacing: -0.6,
                    display: 'flex', alignItems: 'baseline', gap: 12,
                  }}>
                    <span style={{ color: BRAND.green, fontSize: 18 }}>{String(i + 1).padStart(2, '0')}</span>
                    {s.title}
                  </h2>
                  {s.body.map((para, j) => (
                    <p key={j} style={{
                      margin: '16px 0 0', fontSize: 15, color: BRAND.ink2, lineHeight: 1.7,
                    }}>{para}</p>
                  ))}
                </div>
              ))}
            </article>
          </div>
        </HomeContainer>
      </section>
    </HomePageShell>
  );
}
window.LongFormPage = LongFormPage;
