// 54Vie — Homepage Download CTA section
// Phụ thuộc: BRAND (app.jsx), HomeContainer (homepage.jsx)

function HomeDownload() {
  return (
    <section id="download" style={{ padding: '80px 0' }}>
      <HomeContainer>
        <div style={{
          background: BRAND.white, border: `1px solid ${BRAND.line}`,
          borderRadius: 32, padding: '56px 56px',
          display: 'grid', gridTemplateColumns: '1fr 0.6fr', gap: 48, alignItems: 'center',
          boxShadow: '0 20px 60px rgba(15,27,20,0.05)',
        }}>
          <div>
            <div style={{
              fontSize: 12, fontWeight: 700, color: BRAND.green, letterSpacing: 2,
              textTransform: 'uppercase', marginBottom: 14,
            }}>TẢI ỨNG DỤNG</div>
            <h2 style={{
              margin: 0, fontSize: 40, fontWeight: 800, letterSpacing: -1.1, color: BRAND.ink,
              lineHeight: 1.1,
            }}>
              Cài đặt 54Vie<br/>
              <span style={{ color: BRAND.green }}>cho cả 2 nền tảng</span>
            </h2>

            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '14px 22px', borderRadius: 14,
                background: BRAND.ink, color: '#fff', textDecoration: 'none',
                minWidth: 200,
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
                  <path d="M17.05 12.04c-.03-2.9 2.37-4.3 2.48-4.37-1.36-1.98-3.47-2.25-4.21-2.28-1.78-.18-3.49 1.05-4.39 1.05-.92 0-2.32-1.03-3.81-1-1.96.03-3.77 1.14-4.78 2.89-2.04 3.54-.52 8.77 1.45 11.65.97 1.41 2.12 2.99 3.63 2.93 1.46-.06 2.01-.94 3.77-.94 1.74 0 2.25.94 3.79.91 1.57-.03 2.56-1.43 3.51-2.85 1.11-1.63 1.57-3.22 1.59-3.3-.04-.02-3.05-1.17-3.08-4.65zM14.16 3.5c.81-.99 1.36-2.36 1.21-3.74-1.17.05-2.59.78-3.43 1.76-.75.87-1.41 2.27-1.23 3.61 1.31.1 2.64-.66 3.45-1.63z"/>
                </svg>
                <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
                  <div style={{ fontSize: 10, fontWeight: 500, opacity: 0.7 }}>Tải về trên</div>
                  <div style={{ fontSize: 17, fontWeight: 700 }}>App Store</div>
                </div>
              </a>

              <a href="#" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '14px 22px', borderRadius: 14,
                background: BRAND.ink, color: '#fff', textDecoration: 'none',
                minWidth: 200,
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M3.6 2.3c-.4.4-.6 1-.6 1.7v16c0 .7.2 1.3.6 1.7l8.4-9.7-8.4-9.7z" fill="#34A853"/>
                  <path d="M16.8 9l-4.8 2.8 8.4 4.9c.4-.4.6-.9.6-1.3v-.8c0-.4-.2-.9-.6-1.3l-3.6-4.3z" fill="#FBBC04"/>
                  <path d="M3.6 21.7c.7.7 1.7.7 2.5.2l10.5-6 -4.6-2.8-8.4 8.6z" fill="#EA4335"/>
                  <path d="M3.6 2.3l8.4 8.6 4.6-2.6L6.1 2.1c-.8-.4-1.8-.4-2.5.2z" fill="#4285F4"/>
                </svg>
                <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
                  <div style={{ fontSize: 10, fontWeight: 500, opacity: 0.7 }}>Tải về trên</div>
                  <div style={{ fontSize: 17, fontWeight: 700 }}>Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* QR code mock */}
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
            padding: 24, borderRadius: 20,
            background: BRAND.bg, border: `1px solid ${BRAND.line}`,
          }}>
            <div style={{
              width: 180, height: 180, borderRadius: 14, background: BRAND.white,
              border: `1px solid ${BRAND.line}`, padding: 14,
              display: 'grid', placeItems: 'center', position: 'relative',
            }}>
              {/* fake QR pattern */}
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                {[...Array(11)].map((_, r) =>
                  [...Array(11)].map((_, c) => {
                    const seed = (r * 7 + c * 13) % 5;
                    const filled = seed < 2;
                    if (!filled) return null;
                    return <rect key={`${r}-${c}`} x={c*9 + 2} y={r*9 + 2} width="7" height="7" fill={BRAND.ink}/>;
                  })
                )}
                {/* corner markers */}
                {[[2,2],[2,72],[72,2]].map(([x,y], i) => (
                  <g key={i}>
                    <rect x={x} y={y} width="24" height="24" fill={BRAND.ink}/>
                    <rect x={x+4} y={y+4} width="16" height="16" fill={BRAND.white}/>
                    <rect x={x+8} y={y+8} width="8" height="8" fill={BRAND.ink}/>
                  </g>
                ))}
                {/* logo center */}
                <rect x="40" y="40" width="20" height="20" fill={BRAND.white}/>
              </svg>
              <img src="images/logo_1024px.png" alt="54Vie" style={{
                position: 'absolute', width: 36, height: 36, objectFit: 'contain',
                background: BRAND.white, padding: 2, borderRadius: 6,
              }}/>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: BRAND.ink }}>Quét để tải app</div>
              <div style={{ fontSize: 11, color: BRAND.mute, marginTop: 4 }}>iOS & Android · 54Vie</div>
            </div>
          </div>
        </div>
      </HomeContainer>
    </section>
  );
}
window.HomeDownload = HomeDownload;
