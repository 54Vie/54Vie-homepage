// 54Vie — Help page (Trung tâm trợ giúp)
// Phụ thuộc: BRAND (app.jsx), HomeContainer (homepage.jsx), HomePageShell + SubPageHero (homepage/_shared.jsx)

function HelpPage() {
  const CATEGORIES = [
    { icon: '🚖', title: 'Đặt xe',            desc: 'Đặt chuyến, đấu giá, thanh toán, huỷ chuyến.',          href: '/#services' },
    { icon: '📦', title: 'Gửi hàng',          desc: 'Quy định hàng hoá, theo dõi đơn, khiếu nại giao nhận.', href: '/#services' },
    { icon: '🪪', title: 'Tài khoản & KYC',   desc: 'Đăng ký, đăng nhập, xác thực, đổi mật khẩu.',           href: '#faq' },
    { icon: '💳', title: 'Thanh toán',        desc: 'Liên kết ngân hàng, nạp/rút ví, lấy hoá đơn.',          href: '#faq' },
    { icon: '🛡', title: 'An toàn',            desc: 'SOS, chia sẻ hành trình, báo cáo tài xế/khách.',        href: '/safety/' },
    { icon: '👤', title: 'Tài xế đối tác',    desc: 'Đăng ký, lịch chạy, bid giá, thu nhập, KYC.',           href: '/#driver' },
  ];
  const FAQ = [
    { q: 'Tôi đề xuất giá thấp quá thì sao?', a: 'Tài xế có thể không nhận hoặc bid cao hơn. Bạn có thể tăng giá lúc bất kỳ trong khi chờ.' },
    { q: 'Có thể huỷ chuyến sau khi ghép tài xế không?', a: 'Có. Trong 1 phút đầu sau khi ghép, huỷ miễn phí. Sau đó tính phí nhỏ.' },
    { q: 'Tài xế không tới đúng giờ, làm sao?', a: 'Liên hệ tổng đài 0326 110 792 hoặc nhấn nút SOS trong app — nhân viên xử lý ngay.' },
    { q: 'Tôi muốn lấy hoá đơn VAT?', a: 'Vào Lịch sử chuyến → chọn chuyến → "Xuất hoá đơn". Hoá đơn gửi email trong 24 giờ.' },
  ];

  return (
    <HomePageShell>
      <SubPageHero
        kicker="HỖ TRỢ"
        title="Trung tâm trợ giúp"
        subtitle="Câu hỏi thường gặp, hướng dẫn sử dụng, và cách liên hệ trực tiếp với 54Vie."
      />

      {/* Search bar */}
      <section style={{ padding: '40px 0 0' }}>
        <HomeContainer>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '14px 18px', borderRadius: 14,
            background: BRAND.white, border: `1.5px solid ${BRAND.ink}`,
            maxWidth: 640, margin: '0 auto',
            boxShadow: '0 10px 24px rgba(15,27,20,0.06)',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke={BRAND.ink2} strokeWidth="1.8"/>
              <path d="M16 16l4 4" stroke={BRAND.ink2} strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            <input
              placeholder="Tìm hướng dẫn, ví dụ: huỷ chuyến, xuất hoá đơn…"
              style={{
                flex: 1, border: 'none', outline: 'none', background: 'transparent',
                fontSize: 15, color: BRAND.ink, fontFamily: 'inherit',
              }}
            />
            <span style={{
              fontSize: 11, color: BRAND.mute, background: BRAND.bg,
              padding: '4px 8px', borderRadius: 6, fontWeight: 700,
            }}>⌘K</span>
          </div>
        </HomeContainer>
      </section>

      {/* Categories grid */}
      <section style={{ padding: '56px 0 40px' }}>
        <HomeContainer>
          <h2 style={{
            margin: '0 0 28px', fontSize: 28, fontWeight: 900, color: BRAND.ink, letterSpacing: -0.6,
          }}>Chọn chủ đề</h2>
          <div className="hp-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {CATEGORIES.map(c => (
              <a key={c.title} href={c.href} style={{
                padding: 28, borderRadius: 16,
                background: BRAND.white, border: `1px solid ${BRAND.line}`,
                textDecoration: 'none', color: BRAND.ink,
                display: 'flex', flexDirection: 'column', gap: 10,
                transition: 'border-color .2s',
              }}>
                <span style={{ fontSize: 32, lineHeight: 1 }}>{c.icon}</span>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: BRAND.ink, letterSpacing: -0.3 }}>{c.title}</h3>
                <p style={{ margin: 0, fontSize: 13.5, color: BRAND.ink2, lineHeight: 1.55 }}>{c.desc}</p>
              </a>
            ))}
          </div>
        </HomeContainer>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '40px 0 64px', scrollMarginTop: 80 }}>
        <HomeContainer>
          <h2 style={{
            margin: '0 0 24px', fontSize: 28, fontWeight: 900, color: BRAND.ink, letterSpacing: -0.6,
          }}>Câu hỏi thường gặp</h2>
          <div style={{
            background: BRAND.white, border: `1px solid ${BRAND.line}`,
            borderRadius: 16, overflow: 'hidden',
          }}>
            {FAQ.map((f, i) => (
              <details key={f.q} style={{
                padding: '20px 24px',
                borderTop: i === 0 ? 'none' : `1px solid ${BRAND.line}`,
              }}>
                <summary style={{
                  cursor: 'pointer', fontSize: 16, fontWeight: 800, color: BRAND.ink,
                  listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  {f.q}
                  <span style={{ color: BRAND.mute, fontSize: 22, fontWeight: 400 }}>+</span>
                </summary>
                <p style={{ margin: '12px 0 0', fontSize: 14, color: BRAND.ink2, lineHeight: 1.65 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </HomeContainer>
      </section>

      {/* Contact CTA */}
      <section style={{ padding: '0 0 80px' }}>
        <HomeContainer>
          <div style={{
            padding: 32, borderRadius: 20,
            background: BRAND.bg, border: `1px solid ${BRAND.line}`,
            display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center',
          }}>
            <div>
              <h3 style={{ margin: 0, fontSize: 22, fontWeight: 900, color: BRAND.ink }}>Vẫn chưa tìm thấy?</h3>
              <p style={{ margin: '8px 0 0', fontSize: 14, color: BRAND.ink2 }}>Liên hệ trực tiếp tổng đài hoặc gửi email — phản hồi trong 24 giờ.</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <a href="mailto:developer@54vie.vn" style={{
                padding: '12px 20px', borderRadius: 12,
                background: BRAND.white, border: `1px solid ${BRAND.line}`,
                color: BRAND.ink, fontSize: 14, fontWeight: 700, textDecoration: 'none',
              }}>developer@54vie.vn</a>
              <a href="tel:0326110792" style={{
                padding: '12px 20px', borderRadius: 12,
                background: BRAND.ink, color: '#fff',
                fontSize: 14, fontWeight: 800, textDecoration: 'none',
              }}>0326 110 792</a>
            </div>
          </div>
        </HomeContainer>
      </section>
    </HomePageShell>
  );
}
window.HelpPage = HelpPage;
