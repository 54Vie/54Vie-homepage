// 54Vie — Safety page (An toàn)
// Phụ thuộc: BRAND (app.jsx), HomeContainer (homepage.jsx), HomePageShell + SubPageHero (homepage/_shared.jsx)

function SafetyPage() {
  const PILLARS = [
    {
      n: '01',
      title: 'Định danh tài xế',
      desc: 'KYC 5 bước trước khi nhận chuyến đầu tiên: CCCD, GPLX, đăng ký xe, bảo hiểm, ảnh xe + tài xế.',
    },
    {
      n: '02',
      title: 'SOS trong app',
      desc: 'Nút khẩn cấp một chạm — liên kết trực tiếp tới tổng đài + thân nhân khẩn cấp đã cài sẵn.',
    },
    {
      n: '03',
      title: 'Chia sẻ hành trình',
      desc: 'Gửi link theo dõi real-time cho người thân. Thấy vị trí, biển số, thông tin tài xế.',
    },
    {
      n: '04',
      title: 'Đánh giá 2 chiều',
      desc: 'Khách đánh giá tài xế. Tài xế đánh giá khách. Người dưới 4.5★ sẽ bị review.',
    },
  ];
  const TIPS = [
    { icon: '📋', text: 'Kiểm tra biển số xe + tên tài xế trước khi lên xe.' },
    { icon: '🔒', text: 'Đặt chuyến qua app — không thoả thuận ngoài luồng.' },
    { icon: '👁', text: 'Theo dõi lộ trình trong app. Báo ngay nếu xe đi sai đường.' },
    { icon: '📞', text: 'Lưu số tổng đài 0326 110 792 vào danh bạ trước khi đi.' },
    { icon: '💺', text: 'Ngồi ghế sau khi đi 1 mình. Thắt dây an toàn.' },
    { icon: '🚫', text: 'Không chia sẻ OTP/mật khẩu cho bất kỳ ai — kể cả nhân viên 54Vie.' },
  ];

  return (
    <HomePageShell>
      <SubPageHero
        kicker="AN TOÀN"
        title="An toàn là trên hết"
        subtitle="54Vie thiết kế quy trình + công nghệ để mỗi chuyến đi đều an toàn cho cả khách và tài xế."
      />

      {/* Pillars */}
      <section style={{ padding: '64px 0' }}>
        <HomeContainer>
          <h2 style={{
            margin: '0 0 28px', fontSize: 32, fontWeight: 900, color: BRAND.ink, letterSpacing: -0.8,
          }}>Bốn lớp bảo vệ</h2>
          <div className="hp-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {PILLARS.map(p => (
              <div key={p.n} style={{
                padding: 28, borderRadius: 18,
                background: BRAND.white, border: `1px solid ${BRAND.line}`,
                display: 'flex', gap: 18,
              }}>
                <div style={{
                  fontSize: 32, fontWeight: 900, color: BRAND.green,
                  letterSpacing: -1, lineHeight: 1, minWidth: 48,
                }}>{p.n}</div>
                <div>
                  <h3 style={{ margin: 0, fontSize: 20, fontWeight: 900, color: BRAND.ink, letterSpacing: -0.4 }}>{p.title}</h3>
                  <p style={{ margin: '10px 0 0', fontSize: 14, color: BRAND.ink2, lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </HomeContainer>
      </section>

      {/* SOS callout */}
      <section style={{ padding: '0 0 64px' }}>
        <HomeContainer>
          <div style={{
            padding: '40px 48px', borderRadius: 24,
            background: '#FFE5E5', border: '1.5px solid #E03131',
            display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center',
          }}>
            <div>
              <span style={{
                display: 'inline-block', padding: '4px 10px', borderRadius: 6,
                background: '#E03131', color: '#fff', fontSize: 11, fontWeight: 900, letterSpacing: 1,
              }}>KHẨN CẤP</span>
              <h2 style={{
                margin: '14px 0 0', fontSize: 32, fontWeight: 900, color: BRAND.ink, letterSpacing: -0.6,
              }}>Cần hỗ trợ khẩn ngay?</h2>
              <p style={{ margin: '10px 0 0', fontSize: 15, color: BRAND.ink2, lineHeight: 1.6 }}>
                Bấm SOS trong app — tổng đài 54Vie + thân nhân khẩn cấp sẽ được gọi trong 5 giây.
              </p>
            </div>
            <a href="tel:113" style={{
              padding: '18px 28px', borderRadius: 14,
              background: '#E03131', color: '#fff',
              fontSize: 15, fontWeight: 900, textDecoration: 'none',
              boxShadow: '0 14px 28px rgba(224,49,49,0.4)',
              whiteSpace: 'nowrap',
            }}>Gọi 113 — Công an</a>
          </div>
        </HomeContainer>
      </section>

      {/* Tips list */}
      <section style={{ padding: '0 0 80px' }}>
        <HomeContainer>
          <h2 style={{
            margin: '0 0 24px', fontSize: 28, fontWeight: 900, color: BRAND.ink, letterSpacing: -0.6,
          }}>Mẹo an toàn cho khách</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
            {TIPS.map(t => (
              <div key={t.text} style={{
                display: 'flex', alignItems: 'flex-start', gap: 14,
                padding: '16px 20px', borderRadius: 12,
                background: BRAND.bg, border: `1px solid ${BRAND.line}`,
              }}>
                <span style={{ fontSize: 22, lineHeight: 1 }}>{t.icon}</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: BRAND.ink2, lineHeight: 1.5 }}>{t.text}</span>
              </div>
            ))}
          </div>
        </HomeContainer>
      </section>
    </HomePageShell>
  );
}
window.SafetyPage = SafetyPage;
