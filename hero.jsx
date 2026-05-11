// 54Vie — Homepage Hero section
// Phụ thuộc: BRAND (app.jsx), HomeContainer (homepage.jsx)

function HomeHero() {
  return (
    <section className="hp-hero-section" style={{
      position: 'relative', overflow: 'hidden',
      background: BRAND.white,
      paddingTop: 56, paddingBottom: 120,
    }}>
      {/* Color blob accents — bottom-left red, top-right blue */}
      <div style={{
        position: 'absolute', top: '-25%', right: '-20%', width: 760, height: 760,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${BRAND.greenSoft} 0%, transparent 65%)`,
        pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute', bottom: '-30%', left: '-15%', width: 520, height: 520,
        borderRadius: '50%',
        background: `radial-gradient(circle, #FFE0E0 0%, transparent 65%)`,
        pointerEvents: 'none',
      }}/>

      {/* Floating star (red — borrowed from logo) */}
      <svg style={{
        position: 'absolute', top: 110, left: '7%',
        width: 28, height: 28, transform: 'rotate(-14deg)',
      }} viewBox="0 0 24 24" fill="#E03131">
        <path d="M12 2l2.4 7.4H22l-6.1 4.6 2.4 7.4-6.3-4.7-6.3 4.7 2.4-7.4L2 9.4h7.6z"/>
      </svg>
      <svg style={{
        position: 'absolute', bottom: 140, right: '12%',
        width: 18, height: 18, transform: 'rotate(20deg)', opacity: 0.85,
      }} viewBox="0 0 24 24" fill="#E03131">
        <path d="M12 2l2.4 7.4H22l-6.1 4.6 2.4 7.4-6.3-4.7-6.3 4.7 2.4-7.4L2 9.4h7.6z"/>
      </svg>

      <HomeContainer className="hp-grid-hero" style={{
        position: 'relative', paddingTop: 40,
        display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr',
        gridTemplateAreas: '"text phone" "cta phone"',
        gridTemplateRows: 'auto auto',
        columnGap: 56, rowGap: 32,
        alignItems: 'center',
      }}>
        {/* Text */}
        <div className="hp-hero-text" style={{ position: 'relative', gridArea: 'text', alignSelf: 'end' }}>
          <h1 className="hp-h-xl" style={{
            margin: 0, fontSize: 76, fontWeight: 900,
            lineHeight: 0.98, letterSpacing: -2.2, color: BRAND.ink,
          }}>
            Minh bạch giá.<br/>
            <span style={{ position: 'relative', display: 'inline-block', color: BRAND.green }}>
              Công bằng
              <svg style={{
                position: 'absolute', left: -4, right: -4, bottom: -10, width: 'calc(100% + 8px)',
              }} viewBox="0 0 200 14" preserveAspectRatio="none">
                <path
                  d="M2 9 Q 50 1, 100 7 T 198 5"
                  stroke={BRAND.green} strokeWidth="4" fill="none" strokeLinecap="round"
                />
              </svg>
            </span>{' '}từng chuyến.
          </h1>

          <p style={{
            margin: '32px 0 0', fontSize: 19, lineHeight: 1.55, color: BRAND.ink2,
            maxWidth: 540, fontWeight: 500,
          }}>
            Bạn đề xuất giá, tài xế bid lại trong 60 giây.{' '}
            <b style={{ color: BRAND.ink, fontWeight: 800 }}>Rõ ràng từ đầu</b> — không phí ẩn, không áp giá khung.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="hp-hero-cta hp-cta-row" style={{
          gridArea: 'cta', alignSelf: 'start',
          display: 'flex', gap: 12, flexWrap: 'wrap',
        }}>
          <a href="#download" style={{
            padding: '18px 28px', borderRadius: 14,
            background: BRAND.ink, color: '#fff',
            fontSize: 15, fontWeight: 800, letterSpacing: 0.2,
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10,
            boxShadow: '0 18px 36px rgba(15,27,20,0.22)',
          }}>
            Tải app đặt xe
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-5-5l5 5-5 5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#driver" style={{
            padding: '18px 26px', borderRadius: 14,
            background: 'transparent', color: BRAND.ink, fontSize: 15, fontWeight: 800,
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
            border: `2px solid ${BRAND.ink}`,
          }}>
            Tôi muốn lái xe
          </a>
        </div>

        {/* Right: phone mockup, tilted, sticker cards */}
        <div className="hp-hero-phone" style={{
          position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center',
          minHeight: 580, gridArea: 'phone',
        }}>
          {/* Decorative donut behind */}
          <svg
            style={{ position: 'absolute', width: 520, height: 520, top: '-20px', right: '-40px', opacity: 0.7 }}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="46" stroke={BRAND.green} strokeWidth="0.5" fill="none" strokeDasharray="1 3"/>
            <circle cx="50" cy="50" r="38" stroke={BRAND.green} strokeWidth="0.5" fill="none" strokeDasharray="1 3"/>
          </svg>

          <style>{`
            @keyframes phoneFloat {
              0%, 100% { transform: rotate(-4deg) translateY(0); }
              50%      { transform: rotate(-4deg) translateY(-14px); }
            }
            @keyframes stickerBidFloat {
              0%, 100% { transform: rotate(5deg) translateY(0); }
              50%      { transform: rotate(5deg) translateY(-10px); }
            }
            @keyframes stickerDriverFloat {
              0%, 100% { transform: rotate(-6deg) translateY(0); }
              50%      { transform: rotate(-6deg) translateY(-12px); }
            }
          `}</style>

          {/* Phone frame */}
          <div className="hp-phone-frame" style={{
            position: 'relative', width: 320, height: 560,
            borderRadius: 44, background: BRAND.ink,
            padding: 10,
            animation: 'phoneFloat 4s ease-in-out infinite',
            boxShadow: '0 40px 80px rgba(15,27,20,0.28), 0 12px 24px rgba(15,27,20,0.10)',
          }}>
            {/* Screen */}
            <div style={{
              width: '100%', height: '100%', borderRadius: 36, overflow: 'hidden',
              background: `linear-gradient(180deg, ${BRAND.greenSoft} 0%, ${BRAND.white} 50%)`,
              position: 'relative', display: 'flex', flexDirection: 'column',
              padding: '36px 22px 22px',
            }}>
              {/* notch */}
              <div style={{
                position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)',
                width: 90, height: 22, borderRadius: 999, background: BRAND.ink,
              }}/>

              {/* Hero logo in phone */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 32 }}>
                <img src="images/logo_1024px.png" alt="" style={{ width: 96, height: 96, objectFit: 'contain' }}/>
                <div style={{ fontSize: 28, fontWeight: 900, color: BRAND.ink, letterSpacing: -0.8, marginTop: 8 }}>
                  54<span style={{ color: BRAND.green }}>Vie</span>
                </div>
              </div>

              {/* Mock route card */}
              <div style={{
                marginTop: 24, background: BRAND.white, borderRadius: 16, padding: 14,
                border: `1px solid ${BRAND.line}`,
                boxShadow: '0 6px 14px rgba(15,27,20,0.06)',
              }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 4 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 999, background: BRAND.green }}/>
                    <div style={{ width: 2, flex: 1, background: BRAND.line, margin: '4px 0' }}/>
                    <div style={{ width: 8, height: 8, borderRadius: 2, background: '#E03131' }}/>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11, color: BRAND.mute, fontWeight: 700 }}>Điểm đón</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: BRAND.ink }}>Vincom Đồng Khởi</div>
                    <div style={{ fontSize: 11, color: BRAND.mute, fontWeight: 700, marginTop: 10 }}>Điểm đến</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: BRAND.ink }}>Sân bay Tân Sơn Nhất</div>
                  </div>
                </div>
              </div>

              {/* Bid input mock */}
              <div style={{
                marginTop: 12, background: BRAND.greenSoft, borderRadius: 16, padding: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{ fontSize: 11, color: BRAND.green, fontWeight: 800, letterSpacing: 0.4 }}>BẠN ĐỀ XUẤT</div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: BRAND.ink, letterSpacing: -0.5, marginTop: 2 }}>120.000 ₫</div>
                </div>
                <div style={{
                  padding: '10px 14px', borderRadius: 10, background: BRAND.green, color: '#fff',
                  fontSize: 12, fontWeight: 800, letterSpacing: 0.3,
                }}>Đăng</div>
              </div>
            </div>
          </div>

          {/* Floating bid card — sticker style */}
          <div className="hp-sticker-bid hp-card-tilt" style={{
            position: 'absolute', top: 30, right: -10, width: 230,
            background: BRAND.white, borderRadius: 16, padding: 14,
            border: `1px solid ${BRAND.line}`,
            boxShadow: '0 24px 40px rgba(15,27,20,0.14)',
            display: 'flex', alignItems: 'center', gap: 12,
            animation: 'stickerBidFloat 4.6s ease-in-out 0.3s infinite',
          }}>
            <div style={{
              width: 42, height: 42, borderRadius: 12,
              background: BRAND.greenSoft, display: 'grid', placeItems: 'center',
              color: BRAND.green, fontWeight: 900, fontSize: 18,
            }}>₫</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11, color: BRAND.mute, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>Tài xế bid</div>
              <div style={{ fontSize: 16, fontWeight: 900, color: BRAND.ink, letterSpacing: -0.3 }}>110.000 ₫</div>
            </div>
            <span style={{
              fontSize: 10, fontWeight: 800, color: '#fff',
              background: BRAND.green, padding: '4px 8px', borderRadius: 6,
            }}>-8%</span>
          </div>

          {/* Floating driver rating card */}
          <div className="hp-sticker-driver hp-card-tilt" style={{
            position: 'absolute', bottom: 36, left: -24, width: 220,
            background: BRAND.white, borderRadius: 16, padding: 14,
            border: `1px solid ${BRAND.line}`,
            boxShadow: '0 24px 40px rgba(15,27,20,0.14)',
            display: 'flex', alignItems: 'center', gap: 12,
            animation: 'stickerDriverFloat 5.2s ease-in-out 0.6s infinite',
          }}>
            <div style={{
              width: 42, height: 42, borderRadius: 999,
              background: BRAND.green, display: 'grid', placeItems: 'center',
              color: '#fff', fontWeight: 900, fontSize: 16,
            }}>H</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: BRAND.ink }}>Trần Văn Hùng</div>
              <div style={{ fontSize: 11, color: BRAND.mute, fontWeight: 700, marginTop: 2 }}>★ 4.9 · 1.240 chuyến</div>
            </div>
          </div>
        </div>
      </HomeContainer>
    </section>
  );
}
window.HomeHero = HomeHero;
