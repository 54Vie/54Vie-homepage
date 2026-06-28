// 54Vie — Terms page (Điều khoản sử dụng)
// Phụ thuộc: LongFormPage (homepage/_shared.jsx)
// ⚠️ EPIC-029: cash-only + phí dịch vụ % + tài khoản phí dịch vụ. BẢN NHÁP — chờ luật sư rà trước khi publish (merge main). Nguồn: epics/EPIC-029-legal-compliance/homepage/DRAFT-terms.md

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
      title: 'Bản chất dịch vụ — sàn kết nối',
      body: [
        '54Vie là nền tảng công nghệ kết nối khách hàng với tài xế. 54Vie không phải là đơn vị vận tải, không sở hữu phương tiện, không thuê tài xế.',
        'Tài xế là bên trực tiếp cung cấp dịch vụ vận chuyển và tự chịu trách nhiệm về phương tiện, giấy phép và an toàn chuyến đi.',
      ],
    },
    {
      title: 'Tài khoản người dùng',
      body: [
        'Mỗi người chỉ được đăng ký một tài khoản, gắn với số điện thoại được xác thực qua OTP.',
        'Bạn chịu trách nhiệm bảo mật thông tin đăng nhập. 54Vie không bao giờ yêu cầu mật khẩu hay mã OTP qua bất kỳ kênh nào ngoài chính ứng dụng.',
      ],
    },
    {
      title: 'Cơ chế giá và đấu giá',
      body: [
        'Khách hàng tự nhập giá mong muốn cho chuyến đi. Tài xế xem giá và quyết định nhận hoặc đề xuất mức khác.',
        '54Vie không ấn định giá cước; chỉ áp dụng mức tối thiểu nhằm hạn chế giá không hợp lệ.',
        'Khi khách chọn tài xế và xác nhận, hợp đồng dịch vụ vận chuyển hình thành giữa khách và tài xế; 54Vie là bên trung gian kết nối.',
      ],
    },
    {
      title: 'Thanh toán cước',
      body: [
        'Khách hàng thanh toán bằng tiền mặt trực tiếp cho tài xế.',
        '54Vie không xử lý thanh toán cước và không thu hộ tiền cước.',
      ],
    },
    {
      title: 'Phí dịch vụ và tài khoản phí dịch vụ',
      body: [
        '54Vie thu phí dịch vụ theo tỷ lệ phần trăm trên mỗi chuyến hoàn tất, đối với tài xế. Khách hàng không trả phí nền tảng riêng.',
        'Tài xế nạp trước một khoản (tạm ứng phí dịch vụ) vào tài khoản phí dịch vụ; hệ thống cấn trừ phí dịch vụ khi hoàn tất chuyến.',
        'Số tiền nạp là khoản tạm ứng phí dịch vụ cho 54Vie, chỉ dùng để cấn trừ phí dịch vụ phát sinh. Đây không phải tiền gửi, không phải ví điện tử, không phải phương tiện thanh toán, và không dùng để thanh toán cho bên thứ ba. 54Vie không cung ứng dịch vụ trung gian thanh toán. Phần nạp chưa sử dụng được hoàn lại theo yêu cầu.',
      ],
    },
    {
      title: 'Trách nhiệm của tài xế',
      body: [
        'Tài xế bảo đảm xe và bản thân đủ điều kiện kinh doanh vận tải theo pháp luật. Với ô tô/xe tải: biển số vàng, phù hiệu, thuộc đơn vị có giấy phép kinh doanh vận tải/HTX, đăng kiểm, bảo hiểm.',
        'Tài xế chịu trách nhiệm về an toàn của khách và hàng hoá trong suốt chuyến đi.',
      ],
    },
    {
      title: 'Huỷ chuyến',
      body: [
        'Khách hàng có thể huỷ miễn phí trong thời gian quy định sau khi ghép tài xế. Sau thời gian này, có thể phát sinh phí huỷ tuỳ tình huống.',
        'Tài xế huỷ chuyến không lý do chính đáng có thể bị giảm điểm uy tín hoặc tạm ngưng nhận chuyến mới.',
      ],
    },
    {
      title: 'Giải quyết tranh chấp và khiếu nại',
      body: [
        '54Vie hỗ trợ giải quyết tranh chấp dựa trên dữ liệu trong ứng dụng (lộ trình GPS, thời gian, đánh giá).',
        'Kênh khiếu nại: trong ứng dụng (mục Hỗ trợ) hoặc email hỗ trợ. Quy trình chi tiết theo Quy chế hoạt động sàn.',
      ],
    },
    {
      title: 'Hành vi bị cấm',
      body: [
        'Gian lận, mạo danh, sử dụng dịch vụ cho mục đích trái pháp luật, vận chuyển hàng cấm, can thiệp hệ thống.',
        'Vi phạm có thể bị khoá tài khoản.',
      ],
    },
    {
      title: 'Thay đổi điều khoản',
      body: [
        '54Vie có thể điều chỉnh điều khoản này theo thời gian. Người dùng được thông báo qua ứng dụng và email tối thiểu 7 ngày trước khi điều khoản mới có hiệu lực.',
        'Tiếp tục sử dụng dịch vụ sau ngày hiệu lực được coi là đồng ý với điều khoản mới.',
      ],
    },
  ];

  return (
    <LongFormPage
      kicker="PHÁP LÝ"
      title="Điều khoản sử dụng"
      subtitle="Quy định chung khi sử dụng dịch vụ 54Vie. Vui lòng đọc kỹ trước khi đăng ký tài khoản."
      updatedAt="29/06/2026"
      sections={SECTIONS}
    />
  );
}
window.TermsPage = TermsPage;
