// 54Vie — Homepage Driver CTA section
// Phụ thuộc: BRAND (app.jsx), HomeContainer (homepage.jsx)

function HomeDriver() {
  const PERKS = [
    { icon: '⏱', label: 'Lịch chạy tự do, không ép giờ' },
    { icon: '⚖', label: 'Tự định giá — bid theo khả năng' },
    { icon: '🛡', label: 'Hỗ trợ pháp lý + bảo hiểm tai nạn' },
    { icon: '⚡', label: 'KYC online trong 24 giờ' },
  ];

  return (
    <section id="driver" style={{ padding: '80px 0' }}>
      <HomeContainer>
        <div className="hp-grid-2 hp-card-pad" style={{
          position: 'relative', overflow: 'hidden',
          background: BRAND.white,
          borderRadius: 32, padding: '72px 56px',
          display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center',
          color: BRAND.ink,
        }}>
          {/* Big background "54" — bold typography decor */}
          <div className="hp-bg-54" style={{
            position: 'absolute', top: -40, right: -60,
            fontSize: 360, fontWeight: 900, color: BRAND.greenSoft,
            letterSpacing: -10, lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
          }}>54</div>

          {/* Glow */}
          <div style={{
            position: 'absolute', top: -100, left: '40%', width: 500, height: 500,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${BRAND.green}1A 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}/>

          {/* Floating red star (logo accent) */}
          <svg style={{
            position: 'absolute', top: 56, right: '38%',
            width: 22, height: 22, transform: 'rotate(15deg)', opacity: 0.9,
          }} viewBox="0 0 24 24" fill="#E03131">
            <path d="M12 2l2.4 7.4H22l-6.1 4.6 2.4 7.4-6.3-4.7-6.3 4.7 2.4-7.4L2 9.4h7.6z"/>
          </svg>

          {/* Left: copy */}
          <div style={{ position: 'relative' }}>
            {/* Tape badge tilted */}
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 16px', borderRadius: 4,
              background: BRAND.green, color: '#fff',
              fontSize: 11, fontWeight: 900, letterSpacing: 1.6,
              transform: 'rotate(-2deg)',
              boxShadow: `0 6px 14px ${BRAND.green}55`,
            }}>
              TÀI XẾ
            </span>

            <h2 className="hp-h-xl" style={{
              margin: '28px 0 0', fontSize: 64, fontWeight: 900,
              lineHeight: 1.0, letterSpacing: -2, color: BRAND.ink,
            }}>
              Chạy theo<br/>
              lịch{' '}
              <span style={{ position: 'relative', display: 'inline-block', color: BRAND.green }}>
                của bạn
                <svg style={{
                  position: 'absolute', left: -4, right: -4, bottom: -10, width: 'calc(100% + 8px)',
                }} viewBox="0 0 140 14" preserveAspectRatio="none">
                  <path d="M2 9 Q 35 1, 70 7 T 138 5" stroke={BRAND.green} strokeWidth="4" fill="none" strokeLinecap="round"/>
                </svg>
              </span>.
            </h2>

            <p style={{
              margin: '32px 0 0', fontSize: 17, lineHeight: 1.6,
              color: BRAND.ink2, maxWidth: 460, fontWeight: 500,
            }}>
              Tham gia mạng lưới tài xế 54Vie. Đăng ký miễn phí — KYC trong 24 giờ là bắt đầu nhận chuyến.
            </p>

            {/* Perks grid 2x2 — bigger, with icons */}
            <div style={{
              marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10,
            }}>
              {PERKS.map(p => (
                <div key={p.label} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '12px 14px', borderRadius: 12,
                  background: BRAND.bg,
                  border: `1px solid ${BRAND.line}`,
                }}>
                  <span style={{ fontSize: 18, lineHeight: 1 }}>{p.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: BRAND.ink2, lineHeight: 1.35 }}>{p.label}</span>
                </div>
              ))}
            </div>

            <div className="hp-cta-row" style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#" style={{
                padding: '18px 28px', borderRadius: 14,
                background: BRAND.ink, color: '#fff',
                fontSize: 15, fontWeight: 800, textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 10,
                boxShadow: '0 16px 32px rgba(15,27,20,0.20)',
              }}>
                Đăng ký làm tài xế
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-5-5l5 5-5 5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#" style={{
                padding: '18px 26px', borderRadius: 14,
                background: 'transparent', color: BRAND.ink,
                border: `2px solid ${BRAND.ink}`,
                fontSize: 15, fontWeight: 800, textDecoration: 'none',
              }}>Xem cách hoạt động</a>
            </div>
          </div>

          {/* Right: Income mock card */}
          <div style={{
            position: 'relative', display: 'flex', justifyContent: 'center',
          }}>
            <div className="hp-card-tilt" style={{
              position: 'relative',
              width: '100%', maxWidth: 340,
              background: BRAND.white, color: BRAND.ink,
              border: `1px solid ${BRAND.line}`,
              borderRadius: 24, padding: 28,
              boxShadow: '0 30px 60px rgba(15,27,20,0.12)',
              transform: 'rotate(2deg)',
            }}>
              {/* Top: avatar + name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 999,
                  background: `linear-gradient(135deg, ${BRAND.green}, ${BRAND.greenDark})`,
                  display: 'grid', placeItems: 'center',
                  color: '#fff', fontSize: 18, fontWeight: 900,
                }}>H</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: BRAND.ink }}>Trần Văn Hùng</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: BRAND.mute }}>★ 4.9 · 1.240 chuyến</div>
                </div>
                <span style={{
                  fontSize: 9, fontWeight: 900, color: BRAND.green,
                  background: BRAND.greenSoft, padding: '4px 8px', borderRadius: 6, letterSpacing: 0.4,
                }}>TOP 10%</span>
              </div>

              {/* Big number — week earning */}
              <div style={{ marginBottom: 4 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: BRAND.mute, letterSpacing: 0.6, textTransform: 'uppercase' }}>Tuần này</div>
                <div style={{
                  fontSize: 44, fontWeight: 900, color: BRAND.ink,
                  letterSpacing: -1.5, lineHeight: 1, marginTop: 6,
                }}>
                  2.450.000<span style={{ fontSize: 22, color: BRAND.mute, fontWeight: 700 }}> ₫</span>
                </div>
                <div style={{
                  marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 4,
                  fontSize: 12, fontWeight: 800, color: BRAND.green,
                  padding: '4px 10px', borderRadius: 999, background: BRAND.greenSoft,
                }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M7 14l5-5 5 5" stroke={BRAND.green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  +18% so với tuần trước
                </div>
              </div>

              {/* Mini bar chart */}
              <div style={{
                marginTop: 24, paddingTop: 20, borderTop: `1px dashed ${BRAND.line}`,
                display: 'flex', alignItems: 'flex-end', gap: 6, height: 80,
              }}>
                {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <div style={{
                      width: '100%', height: `${h}%`, borderRadius: 6,
                      background: i === 5
                        ? `linear-gradient(180deg, ${BRAND.green}, ${BRAND.greenDark})`
                        : BRAND.greenSoft,
                    }}/>
                    <span style={{ fontSize: 9, fontWeight: 700, color: BRAND.mute }}>
                      {['T2','T3','T4','T5','T6','T7','CN'][i]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div style={{
                marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10,
              }}>
                <div style={{ padding: '10px 12px', borderRadius: 10, background: BRAND.bg }}>
                  <div style={{ fontSize: 18, fontWeight: 900, color: BRAND.ink, letterSpacing: -0.4 }}>32</div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: BRAND.mute, textTransform: 'uppercase', letterSpacing: 0.4 }}>Chuyến / tuần</div>
                </div>
                <div style={{ padding: '10px 12px', borderRadius: 10, background: BRAND.bg }}>
                  <div style={{ fontSize: 18, fontWeight: 900, color: BRAND.ink, letterSpacing: -0.4 }}>76K</div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: BRAND.mute, textTransform: 'uppercase', letterSpacing: 0.4 }}>TB / chuyến</div>
                </div>
              </div>
            </div>

            {/* Floating sticker — "Mức TB" */}
            <div style={{
              position: 'absolute', top: -16, left: -20,
              padding: '10px 14px', borderRadius: 10,
              background: BRAND.green, color: '#fff',
              fontSize: 11, fontWeight: 900, letterSpacing: 0.6,
              transform: 'rotate(-8deg)',
              boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
            }}>
              VÍ DỤ MỨC THU NHẬP
            </div>
          </div>
        </div>
      </HomeContainer>
    </section>
  );
}
window.HomeDriver = HomeDriver;
