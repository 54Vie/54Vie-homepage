// 54Vie — Homepage "Why 54Vie" section
// Phụ thuộc: BRAND (app.jsx), HomeContainer (homepage.jsx)

function HomeWhy() {
  const FEATURES = [
    {
      n: '1',
      title: 'Đấu giá minh bạch',
      desc: 'Bạn đề xuất giá. Tài xế gần nhất bid lại trong 60 giây. Toàn bộ hiển thị công khai — không phí ẩn.',
    },
    {
      n: '2',
      title: 'Tài xế là đối tác',
      desc: 'Không ép giờ chạy, không phạt điểm bí mật, không khoá tài khoản đột ngột. Điều khoản công khai từ ngày đầu.',
    },
    {
      n: '3',
      title: 'Hỗ trợ 24/7',
      desc: 'Tổng đài hoạt động 24/7. Phản hồi nhanh, xử lý dứt điểm.',
    },
    {
      n: '4',
      title: 'Hiểu đường, hiểu khách',
      desc: 'Đội ngũ vận hành sát thị trường. Phản ứng nhanh khi giá xăng đổi, đường tắc, hay có khu vực mới — không phải chờ qua nhiều tầng phê duyệt.',
    },
  ];

  return (
    <section id="why" className="hp-section-pad" style={{
      position: 'relative', padding: '120px 0', background: BRAND.bg, overflow: 'hidden',
    }}>
      {/* Diagonal accent stripe */}
      <div style={{
        position: 'absolute', top: 80, right: -100,
        width: 400, height: 6, background: BRAND.green,
        transform: 'rotate(-2deg)', borderRadius: 999,
      }}/>

      <HomeContainer>
        <div className="hp-grid-2" style={{
          display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 64, alignItems: 'flex-start',
        }}>
          {/* Left: heading sticky-feel */}
          <div className="hp-sticky-off" style={{ position: 'sticky', top: 100 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 12px', borderRadius: 999,
              background: BRAND.white, color: BRAND.green,
              fontSize: 12, fontWeight: 800, letterSpacing: 1.2,
              border: `1px solid ${BRAND.line}`,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.green }}/>
              VÌ SAO 54VIE
            </div>
            <h2 className="hp-h-xl" style={{
              margin: '20px 0 0', fontSize: 72, fontWeight: 900, letterSpacing: -2.2, color: BRAND.ink,
              lineHeight: 0.96,
            }}>
              Rõ ràng<br/>
              <span style={{
                position: 'relative', display: 'inline-block', color: BRAND.green,
              }}>
                từ đầu.
                <svg style={{
                  position: 'absolute', left: -4, right: -4, bottom: -10, width: 'calc(100% + 8px)',
                }} viewBox="0 0 120 14" preserveAspectRatio="none">
                  <path d="M2 9 Q 30 1, 60 7 T 118 5" stroke={BRAND.green} strokeWidth="4" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p style={{
              margin: '28px 0 0', fontSize: 17, color: BRAND.ink2, lineHeight: 1.6, maxWidth: 420, fontWeight: 500,
            }}>
              Bốn điều 54Vie luôn giữ — với người đặt xe, với tài xế, và với chính sản phẩm.
            </p>
          </div>

          {/* Right: manifesto-style list */}
          <div style={{
            background: BRAND.white, borderRadius: 24,
            border: `1.5px solid ${BRAND.ink}`,
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(15,27,20,0.08)',
          }}>
            {FEATURES.map((f, i) => (
              <div key={f.n} style={{
                display: 'grid', gridTemplateColumns: '90px 1fr',
                padding: '32px 32px',
                borderTop: `1px solid ${BRAND.line}`,
                alignItems: 'flex-start', gap: 8,
                background: i % 2 === 0 ? BRAND.white : 'rgba(232, 236, 248, 0.3)',
              }}>
                <div style={{
                  fontSize: 56, fontWeight: 900, color: BRAND.green,
                  letterSpacing: -2, lineHeight: 0.9,
                  fontFamily: 'Inter, monospace',
                }}>{f.n}</div>
                <div style={{ paddingTop: 8 }}>
                  <h3 style={{
                    margin: 0, fontSize: 24, fontWeight: 900, color: BRAND.ink, letterSpacing: -0.5,
                  }}>{f.title}</h3>
                  <p style={{
                    margin: '10px 0 0', fontSize: 15, color: BRAND.ink2, lineHeight: 1.6, fontWeight: 500,
                  }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </HomeContainer>
    </section>
  );
}
window.HomeWhy = HomeWhy;
