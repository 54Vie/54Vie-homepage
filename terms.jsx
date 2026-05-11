// 54Vie — Terms page (Điều khoản sử dụng)
// Phụ thuộc: LongFormPage (homepage/_shared.jsx)

function TermsPage() {
  const SECTIONS = [
    {
      title: 'Phạm vi áp dụng',
      body: [
        'Điều khoản này áp dụng cho tất cả người dùng đăng ký, truy cập hoặc sử dụng ứng dụng 54Vie (sau đây gọi là "Dịch vụ"), bao gồm khách hàng đặt xe, khách hàng gửi hàng, và tài xế đối tác.',
        'Việc bạn tạo tài khoản hoặc tiếp tục sử dụng Dịch vụ đồng nghĩa với việc chấp nhận toàn bộ điều khoản dưới đây.',
      ],
    },
    {
      title: 'Tài khoản người dùng',
      body: [
        'Mỗi người chỉ được đăng ký một tài khoản. Tài khoản gắn với số điện thoại được xác thực qua OTP.',
        'Bạn chịu trách nhiệm bảo mật thông tin đăng nhập. 54Vie không yêu cầu bạn cung cấp mật khẩu hay mã OTP qua bất kỳ kênh nào ngoài chính ứng dụng.',
      ],
    },
    {
      title: 'Cơ chế đấu giá',
      body: [
        'Khách hàng đề xuất mức giá cho chuyến đi. Tài xế gần đó có thể chấp nhận giá hoặc bid lại mức giá khác trong vòng 60 giây.',
        'Khi khách hàng chọn một tài xế và xác nhận, hợp đồng dịch vụ giữa khách và tài xế được hình thành. 54Vie đóng vai trò trung gian kết nối.',
      ],
    },
    {
      title: 'Thanh toán & phí',
      body: [
        'Thanh toán có thể bằng tiền mặt trực tiếp hoặc qua phương thức điện tử được hỗ trợ trong ứng dụng.',
        '54Vie thu phí nền tảng cố định mỗi chuyến đối với tài xế. Khách hàng không phải trả phí nền tảng riêng — toàn bộ số tiền hiển thị trên ứng dụng là tổng số khách thanh toán.',
      ],
    },
    {
      title: 'Huỷ chuyến',
      body: [
        'Khách hàng có thể huỷ miễn phí trong 60 giây đầu sau khi ghép tài xế. Sau thời gian này, có thể phát sinh phí huỷ tuỳ tình huống.',
        'Tài xế huỷ chuyến không lý do chính đáng có thể bị giảm điểm uy tín hoặc tạm ngưng nhận chuyến mới.',
      ],
    },
    {
      title: 'Trách nhiệm và bồi thường',
      body: [
        '54Vie không phải là bên vận chuyển. Tài xế là người trực tiếp thực hiện dịch vụ và chịu trách nhiệm về an toàn của khách + hàng hoá trong suốt chuyến đi.',
        'Trường hợp xảy ra sự cố, 54Vie hỗ trợ giải quyết tranh chấp dựa trên dữ liệu trong ứng dụng (lộ trình GPS, thời gian, đánh giá).',
      ],
    },
    {
      title: 'Thay đổi điều khoản',
      body: [
        '54Vie có thể điều chỉnh điều khoản này theo thời gian. Người dùng được thông báo qua ứng dụng + email tối thiểu 7 ngày trước khi điều khoản mới có hiệu lực.',
        'Tiếp tục sử dụng dịch vụ sau ngày hiệu lực được coi là đồng ý với điều khoản mới.',
      ],
    },
  ];

  return (
    <LongFormPage
      kicker="PHÁP LÝ"
      title="Điều khoản sử dụng"
      subtitle="Quy định chung khi sử dụng dịch vụ 54Vie. Vui lòng đọc kỹ trước khi đăng ký tài khoản."
      updatedAt="11/05/2026"
      sections={SECTIONS}
    />
  );
}
window.TermsPage = TermsPage;
