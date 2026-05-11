// 54Vie — B2B page (Liên hệ doanh nghiệp)
// Phụ thuộc: BRAND (app.jsx), HomeContainer (homepage.jsx), HomePageShell + SubPageHero (homepage/_shared.jsx)

function B2BPage() {
  const OFFERS = [
    {
      icon: '🏢',
      title: 'Tài khoản doanh nghiệp',
      desc: 'Quản lý chuyến đi nhân viên tập trung. Xuất hoá đơn VAT tự động, báo cáo theo phòng ban.',
    },
    {
      icon: '📦',
      title: 'Logistics & vận chuyển',
      desc: 'Hợp đồng vận chuyển hàng cồng kềnh, định kỳ. Tracking đơn hàng theo lô, SLA cam kết.',
    },
    {
      icon: '🤝',
      title: 'Đối tác đội xe',
      desc: 'Tích hợp đội xe sẵn có của bạn vào nền tảng 54Vie. Tăng tỷ lệ lấp đầy chuyến.',
    },
    {
      icon: '🔌',
      title: 'API & tích hợp',
      desc: 'API đặt xe, tracking, webhook. SDK iOS/Android cho app riêng của doanh nghiệp.',
    },
  ];

  return (
    <HomePageShell>
      <SubPageHero
        kicker="DOANH NGHIỆP"
        title="Hợp tác cùng 54Vie"
        subtitle="Giải pháp di chuyển và vận chuyển dành cho doanh nghiệp, đội xe, và đối tác công nghệ."
      />

      {/* Offers grid */}
      <section style={{ padding: '64px 0 40px' }}>
        <HomeContainer>
          <h2 style={{
            margin: '0 0 28px', fontSize: 32, fontWeight: 900, color: BRAND.ink, letterSpacing: -0.8,
          }}>Bạn đang quan tâm điều gì?</h2>
          <div className="hp-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {OFFERS.map(o => (
              <div key={o.title} style={{
                padding: 28, borderRadius: 18,
                background: BRAND.white, border: `1px solid ${BRAND.line}`,
                display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                <span style={{ fontSize: 32, lineHeight: 1 }}>{o.icon}</span>
                <h3 style={{ margin: 0, fontSize: 20, fontWeight: 900, color: BRAND.ink, letterSpacing: -0.4 }}>{o.title}</h3>
                <p style={{ margin: 0, fontSize: 14, color: BRAND.ink2, lineHeight: 1.65 }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </HomeContainer>
      </section>

      {/* Contact form */}
      <section style={{ padding: '40px 0 80px' }}>
        <HomeContainer>
          <div className="hp-grid-2" style={{
            background: BRAND.bg, border: `1px solid ${BRAND.line}`,
            borderRadius: 24, padding: '48px 48px',
            display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48,
          }}>
            {/* Left: contact info */}
            <div>
              <h2 style={{
                margin: 0, fontSize: 32, fontWeight: 900, color: BRAND.ink, letterSpacing: -0.8, lineHeight: 1.05,
              }}>Để lại thông tin — chúng tôi gọi lại.</h2>
              <p style={{
                margin: '16px 0 0', fontSize: 15, color: BRAND.ink2, lineHeight: 1.65,
              }}>
                Đội ngũ B2B sẽ liên hệ trong giờ hành chính tiếp theo. Hoặc bạn có thể chủ động liên hệ qua các kênh dưới đây.
              </p>

              <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { l: 'Email', v: 'tunv@54vie.vn', href: 'mailto:tunv@54vie.vn' },
                  { l: 'Hotline B2B', v: '0326 110 792', href: 'tel:0326110792' },
                  {
                    l: 'Văn phòng',
                    v: 'Tầng 1 Lầu trệt (Thông tầng), Khối B, Tháp B2, Lô F\nTrung tâm hành chính huyện Bình Chánh\nThị trấn Tân Túc, Huyện Bình Chánh, TP.HCM',
                    multiline: true,
                  },
                ].map(c => (
                  <div key={c.l} style={{
                    padding: '14px 18px', borderRadius: 12,
                    background: BRAND.white, border: `1px solid ${BRAND.line}`,
                  }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: BRAND.mute, letterSpacing: 0.6, textTransform: 'uppercase' }}>{c.l}</div>
                    {c.href ? (
                      <a href={c.href} style={{
                        marginTop: 4, fontSize: 16, fontWeight: 800, color: BRAND.ink,
                        textDecoration: 'none', display: 'block',
                      }}>{c.v}</a>
                    ) : (
                      <div style={{
                        marginTop: 4,
                        fontSize: c.multiline ? 13 : 16,
                        fontWeight: c.multiline ? 600 : 800,
                        color: c.multiline ? BRAND.ink2 : BRAND.ink,
                        lineHeight: c.multiline ? 1.55 : 1.3,
                        whiteSpace: c.multiline ? 'pre-line' : 'normal',
                      }}>{c.v}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <form style={{ display: 'flex', flexDirection: 'column', gap: 14 }} onSubmit={(e) => e.preventDefault()}>
              {[
                { id: 'company', label: 'Tên công ty', placeholder: 'Công ty TNHH ABC' },
                { id: 'name',    label: 'Người liên hệ', placeholder: 'Nguyễn Văn A' },
                { id: 'phone',   label: 'Số điện thoại', placeholder: '+84 ...' },
                { id: 'email',   label: 'Email', placeholder: 'name@company.com' },
              ].map(f => (
                <div key={f.id}>
                  <label style={{
                    display: 'block', marginBottom: 6,
                    fontSize: 12, fontWeight: 800, color: BRAND.ink2, letterSpacing: 0.4,
                  }}>{f.label}</label>
                  <input
                    placeholder={f.placeholder}
                    style={{
                      width: '100%', padding: '12px 14px', borderRadius: 10,
                      border: `1px solid ${BRAND.line}`, background: BRAND.white,
                      fontSize: 14, color: BRAND.ink, fontFamily: 'inherit', outline: 'none',
                    }}
                  />
                </div>
              ))}

              <div>
                <label style={{
                  display: 'block', marginBottom: 6,
                  fontSize: 12, fontWeight: 800, color: BRAND.ink2, letterSpacing: 0.4,
                }}>Nhu cầu cụ thể</label>
                <select style={{
                  width: '100%', padding: '12px 14px', borderRadius: 10,
                  border: `1px solid ${BRAND.line}`, background: BRAND.white,
                  fontSize: 14, color: BRAND.ink, fontFamily: 'inherit', outline: 'none',
                }}>
                  <option>Tài khoản doanh nghiệp (đặt xe nhân viên)</option>
                  <option>Logistics – vận chuyển hàng định kỳ</option>
                  <option>Đối tác đội xe</option>
                  <option>API & tích hợp công nghệ</option>
                  <option>Khác</option>
                </select>
              </div>

              <div>
                <label style={{
                  display: 'block', marginBottom: 6,
                  fontSize: 12, fontWeight: 800, color: BRAND.ink2, letterSpacing: 0.4,
                }}>Mô tả ngắn</label>
                <textarea
                  rows={4}
                  placeholder="Quy mô đội ngũ, số chuyến/tháng dự kiến, hoặc yêu cầu cụ thể…"
                  style={{
                    width: '100%', padding: '12px 14px', borderRadius: 10,
                    border: `1px solid ${BRAND.line}`, background: BRAND.white,
                    fontSize: 14, color: BRAND.ink, fontFamily: 'inherit', outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button type="submit" style={{
                marginTop: 8, padding: '16px 24px', borderRadius: 12,
                background: BRAND.ink, color: '#fff', border: 'none',
                fontSize: 15, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                boxShadow: '0 14px 28px rgba(15,27,20,0.2)',
              }}>
                Gửi yêu cầu
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-5-5l5 5-5 5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>

              <p style={{ margin: 0, fontSize: 11, color: BRAND.mute, lineHeight: 1.5 }}>
                Bằng việc gửi, bạn đồng ý cho 54Vie liên hệ qua các thông tin đã cung cấp. Thông tin được lưu theo Chính sách bảo mật.
              </p>
            </form>
          </div>
        </HomeContainer>
      </section>
    </HomePageShell>
  );
}
window.B2BPage = B2BPage;
