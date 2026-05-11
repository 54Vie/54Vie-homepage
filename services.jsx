// 54Vie — Homepage Services section
// Phụ thuộc: BRAND (app.jsx), HomeContainer (homepage.jsx)

function HomeServices() {
  const SERVICES = [
    {
      n: '01',
      persona: 'Cho khách',
      title: 'Đặt xe',
      tag: 'Phổ biến',
      stat: { v: '30s', l: 'Nhận chuyến trung bình' },
      bullets: [
        'Ô tô 4–7 chỗ. Đề xuất giá → tài xế bid lại',
        'Theo dõi GPS real-time qua app',
        'Thanh toán tiền mặt hoặc chuyển khoản',
      ],
      tilt: -1.5,
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <path d="M5 17h14M7 17V9l2-3h6l2 3v8" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round"/>
          <circle cx="8.5" cy="17" r="1.7" fill="#fff"/>
          <circle cx="15.5" cy="17" r="1.7" fill="#fff"/>
        </svg>
      ),
    },
    {
      n: '02',
      persona: 'Cho khách',
      title: 'Gửi hàng',
      tag: 'Mới',
      stat: null,
      bullets: [
        'Xe tải nội thành cho hàng cồng kềnh',
        'Tài xế bốc dỡ phụ giúp khi cần',
        'Theo dõi GPS chi tiết từng phút',
      ],
      tilt: 1.2,
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="7" width="11" height="9" rx="1.5" stroke="#fff" strokeWidth="1.8"/>
          <path d="M13 10h5l3 3v3h-8z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round"/>
          <circle cx="7" cy="18" r="2" stroke="#fff" strokeWidth="1.8"/>
          <circle cx="17" cy="18" r="2" stroke="#fff" strokeWidth="1.8"/>
        </svg>
      ),
    },
    {
      n: '03',
      persona: 'Cho tài xế',
      title: 'Tài xế đối tác',
      tag: 'Đang tuyển',
      stat: null,
      bullets: [
        'Bid giá theo khả năng — bạn quyết',
        'Lịch chạy tự do, không ép giờ',
        'Cộng đồng tài xế hỗ trợ lẫn nhau trong app',
      ],
      tilt: -0.8,
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <circle cx="9" cy="8" r="3.5" stroke="#fff" strokeWidth="1.8"/>
          <path d="M3 20c0-3 3-5 6-5s6 2 6 5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M16 10l1.5 1.5L21 8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="hp-section-pad" style={{
      position: 'relative', padding: '120px 0 100px', background: BRAND.white, overflow: 'hidden',
    }}>
      {/* big background number for decoration */}
      <div className="hp-bg-54" style={{
        position: 'absolute', top: 60, right: -40,
        fontSize: 280, fontWeight: 900, color: BRAND.greenSoft,
        letterSpacing: -8, lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
      }}>54</div>

      <HomeContainer style={{ position: 'relative' }}>
        <div style={{ marginBottom: 64, maxWidth: 760 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 12px', borderRadius: 999,
            background: BRAND.greenSoft, color: BRAND.green,
            fontSize: 12, fontWeight: 800, letterSpacing: 1.2,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.green }}/>
            DỊCH VỤ
          </div>
          <h2 className="hp-h-lg" style={{
            margin: '20px 0 0', fontSize: 60, fontWeight: 900, letterSpacing: -2, color: BRAND.ink,
            lineHeight: 0.98,
          }}>
            Ba dịch vụ.{' '}
            <span style={{
              position: 'relative', display: 'inline-block', color: BRAND.green,
            }}>Một app.
              <svg style={{
                position: 'absolute', left: -2, right: -2, bottom: -8, width: 'calc(100% + 4px)',
              }} viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M2 7 Q 25 1, 50 5 T 98 4" stroke={BRAND.green} strokeWidth="3.5" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p style={{
            margin: '24px 0 0', fontSize: 18, color: BRAND.ink2, lineHeight: 1.55, maxWidth: 560, fontWeight: 500,
          }}>
            Hai dịch vụ cho người dùng — một dịch vụ cho tài xế. 54Vie phục vụ cả hai chiều của thị trường, không phụ thuộc bên thứ ba.
          </p>
        </div>

        <div className="hp-grid-3" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
        }}>
          {SERVICES.map((s, i) => {
            const isDriver = s.persona === 'Cho tài xế';
            return (
              <article key={s.n} className="hp-card-tilt" style={{
                position: 'relative',
                background: isDriver ? BRAND.greenSoft : BRAND.white,
                color: BRAND.ink,
                border: `1.5px solid ${BRAND.ink}`,
                borderRadius: 20, padding: 28,
                display: 'flex', flexDirection: 'column', gap: 18,
                transform: `rotate(${s.tilt}deg) translateY(${i % 2 ? '20px' : '0'})`,
                boxShadow: i % 2 ? '0 18px 30px rgba(15,27,20,0.08)' : '0 24px 40px rgba(15,27,20,0.10)',
              }}>
                {/* Top row: persona chip + tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{
                    fontSize: 10, fontWeight: 800, letterSpacing: 1,
                    color: BRAND.mute,
                    textTransform: 'uppercase',
                  }}>{s.persona}</span>
                  <span style={{
                    fontSize: 10, fontWeight: 800,
                    color: isDriver ? '#fff' : BRAND.green,
                    background: isDriver ? BRAND.green : BRAND.greenSoft,
                    padding: '4px 9px', borderRadius: 6, letterSpacing: 0.4,
                    transform: 'rotate(-2deg)', display: 'inline-block',
                  }}>{s.tag}</span>
                </div>

                {/* Icon block — bold gradient */}
                <div style={{
                  width: 64, height: 64, borderRadius: 16,
                  background: `linear-gradient(135deg, ${BRAND.green} 0%, ${BRAND.greenDark} 100%)`,
                  display: 'grid', placeItems: 'center',
                  boxShadow: `0 12px 22px ${BRAND.green}40`,
                }}>{s.icon}</div>

                <h3 style={{
                  margin: 0, fontSize: 28, fontWeight: 900, letterSpacing: -0.7,
                  color: BRAND.ink,
                }}>{s.title}</h3>

                {/* Headline stat (optional) */}
                {s.stat && (
                  <div style={{
                    display: 'flex', alignItems: 'baseline', gap: 10,
                    padding: '12px 0', borderTop: `1px dashed ${BRAND.line}`,
                    borderBottom: `1px dashed ${BRAND.line}`,
                  }}>
                    <span style={{
                      fontSize: 32, fontWeight: 900, color: BRAND.ink,
                      letterSpacing: -1, lineHeight: 1,
                    }}>{s.stat.v}</span>
                    <span style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: 0.4,
                      color: BRAND.mute,
                      textTransform: 'uppercase',
                    }}>{s.stat.l}</span>
                  </div>
                )}

                {/* Bullets */}
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {s.bullets.map(b => (
                    <li key={b} style={{
                      display: 'flex', gap: 10, alignItems: 'flex-start',
                      fontSize: 13.5, fontWeight: 500, lineHeight: 1.5,
                      color: BRAND.ink2,
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                        <path d="M5 12.5l4.5 4.5L19 7" stroke={BRAND.green} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>

                <a href="#" style={{
                  marginTop: 4, fontSize: 14, fontWeight: 800,
                  color: BRAND.ink,
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
                }}>
                  {isDriver ? 'Đăng ký làm tài xế' : 'Tìm hiểu thêm'}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-5-5l5 5-5 5" stroke={BRAND.ink} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </article>
            );
          })}
        </div>
      </HomeContainer>
    </section>
  );
}
window.HomeServices = HomeServices;
