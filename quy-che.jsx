// 54Vie — Quy chế hoạt động sàn TMĐT (Operating Regulations)
// Phụ thuộc: LongFormPage (homepage/_shared.jsx)
// ⚠️ EPIC-029: bắt buộc cho hồ sơ đăng ký Bộ Công Thương (tích đỏ). BẢN NHÁP — chờ luật sư rà + anh ký ban hành trước khi publish (merge main). Nguồn: epics/EPIC-029-legal-compliance/homepage/DRAFT-quy-che.md

function QuyChePage() {
  const SECTIONS = [
    {
      title: 'Điều 1. Giới thiệu và nguyên tắc chung',
      body: [
        'Sàn: ứng dụng 54Vie do Công ty TNHH 54Vie (MST 0318861258) vận hành — nền tảng kết nối khách hàng có nhu cầu vận chuyển với tài xế đối tác.',
        '54Vie là đơn vị cung cấp phần mềm hỗ trợ kết nối vận tải, không phải đơn vị kinh doanh vận tải. Hoạt động tuân thủ pháp luật Việt Nam.',
      ],
    },
    {
      title: 'Điều 2. Giải thích từ ngữ',
      body: [
        'Khách hàng: người sử dụng dịch vụ để đặt chuyến đi hoặc gửi hàng.',
        'Tài xế (người cung cấp dịch vụ): cá nhân/đơn vị cung cấp dịch vụ vận chuyển qua nền tảng.',
        'Phí dịch vụ: khoản 54Vie thu của tài xế trên mỗi chuyến hoàn tất.',
        'Tài khoản phí dịch vụ: khoản tạm ứng phí dịch vụ của tài xế, dùng để cấn trừ phí dịch vụ phát sinh.',
      ],
    },
    {
      title: 'Điều 3. Đối tượng và điều kiện tham gia',
      body: [
        'Khách hàng: cá nhân/tổ chức có tài khoản đã xác thực.',
        'Tài xế ô tô/xe tải: phải có giấy phép lái xe phù hợp, xe biển số vàng, phù hiệu (XE HỢP ĐỒNG/XE TẢI), thuộc đơn vị có giấy phép kinh doanh vận tải (HTX/công ty), đăng kiểm, bảo hiểm; hoàn tất KYC.',
        'Tài xế xe máy: theo quy định áp dụng với loại hình.',
      ],
    },
    {
      title: 'Điều 4. Quyền và nghĩa vụ của 54Vie (chủ sàn)',
      body: [
        'Cung cấp nền tảng kết nối ổn định; bảo vệ dữ liệu cá nhân theo Chính sách bảo mật.',
        'Không quyết định giá cước; không thu hộ tiền cước (khách trả tiền mặt cho tài xế).',
        'Thu phí dịch vụ theo tỷ lệ phần trăm với tài xế; hỗ trợ giải quyết tranh chấp.',
        'Kiểm tra giấy tờ tài xế (KYC); tạm ngưng tài khoản vi phạm.',
        'Lưu trữ và cung cấp thông tin cho cơ quan nhà nước theo yêu cầu hợp pháp.',
      ],
    },
    {
      title: 'Điều 5. Quyền và nghĩa vụ của tài xế',
      body: [
        'Bảo đảm đủ điều kiện kinh doanh vận tải theo pháp luật; cung cấp giấy tờ trung thực.',
        'Tự nhận hoặc đề xuất giá; cung cấp dịch vụ an toàn, đúng cam kết.',
        'Nạp và duy trì tài khoản phí dịch vụ; chịu nghĩa vụ thuế của mình.',
        'Không gian lận, không từ chối/huỷ chuyến bất hợp lý.',
      ],
    },
    {
      title: 'Điều 6. Quyền và nghĩa vụ của khách hàng',
      body: [
        'Cung cấp thông tin chính xác; nhập giá; thanh toán tiền mặt đúng cho tài xế.',
        'Ứng xử văn minh; không sử dụng dịch vụ trái pháp luật.',
      ],
    },
    {
      title: 'Điều 7. Cơ chế giá và giao kết',
      body: [
        'Khách nhập giá → tài xế nhận hoặc đề xuất → khách xác nhận → hình thành hợp đồng dịch vụ vận chuyển giữa khách và tài xế.',
        '54Vie là bên trung gian kết nối.',
      ],
    },
    {
      title: 'Điều 8. Phí dịch vụ và tài khoản phí dịch vụ',
      body: [
        'Phí dịch vụ là tỷ lệ phần trăm trên mỗi chuyến hoàn tất, thu của tài xế (mức công bố trong ứng dụng).',
        'Tài khoản phí dịch vụ là khoản tạm ứng phí, chỉ dùng để cấn trừ phí dịch vụ cho 54Vie; không phải ví điện tử hay phương tiện thanh toán. Phần nạp chưa sử dụng được hoàn lại theo yêu cầu.',
      ],
    },
    {
      title: 'Điều 9. Bảo vệ thông tin cá nhân',
      body: [
        'Việc thu thập, xử lý và bảo vệ dữ liệu cá nhân thực hiện theo Chính sách bảo mật — tuân thủ Luật Bảo vệ dữ liệu cá nhân 2025.',
      ],
    },
    {
      title: 'Điều 10. Giải quyết tranh chấp và khiếu nại',
      body: [
        'Kênh khiếu nại: mục Hỗ trợ trong ứng dụng, email, hoặc hotline.',
        'Quy trình: tiếp nhận → xác minh (dữ liệu chuyến: GPS, thời gian, đánh giá) → phản hồi trong thời hạn cam kết → leo thang nếu chưa thoả đáng.',
        'Tranh chấp không tự giải quyết được sẽ đưa ra cơ quan có thẩm quyền theo pháp luật.',
      ],
    },
    {
      title: 'Điều 11. Hành vi cấm và hàng cấm',
      body: [
        'Cấm gian lận, mạo danh, vận chuyển hàng cấm/trái pháp luật, can thiệp hệ thống.',
        'Chế tài: cảnh báo → tạm khoá → khoá vĩnh viễn.',
      ],
    },
    {
      title: 'Điều 12. Điều khoản thi hành',
      body: [
        'Quy chế có hiệu lực từ ngày ban hành; các cập nhật được thông báo trên nền tảng.',
      ],
    },
  ];

  return (
    <LongFormPage
      kicker="PHÁP LÝ"
      title="Quy chế hoạt động"
      subtitle="Quy chế hoạt động sàn giao dịch thương mại điện tử 54Vie."
      updatedAt="29/06/2026"
      sections={SECTIONS}
    />
  );
}
window.QuyChePage = QuyChePage;
