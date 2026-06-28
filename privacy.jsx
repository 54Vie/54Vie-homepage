// 54Vie — Privacy page (Chính sách bảo mật)
// Phụ thuộc: LongFormPage (homepage/_shared.jsx)
// ⚠️ EPIC-029: cập nhật theo Luật Bảo vệ dữ liệu cá nhân 2025 + NĐ 356/2025. BẢN NHÁP — chờ luật sư rà trước khi publish (merge main). Nguồn: epics/EPIC-029-legal-compliance/homepage/DRAFT-privacy.md

function PrivacyPage() {
  const SECTIONS = [
    {
      title: 'Bên kiểm soát dữ liệu',
      body: [
        'Công ty TNHH 54Vie (MST 0318861258) là bên kiểm soát dữ liệu cá nhân của người dùng ứng dụng 54Vie.',
        'Mọi câu hỏi về dữ liệu cá nhân, vui lòng liên hệ Người phụ trách bảo vệ dữ liệu cá nhân (DPO): privacy@54vie.vn.',
      ],
    },
    {
      title: 'Thông tin chúng tôi thu thập',
      body: [
        'Khách hàng: số điện thoại, họ tên, vị trí GPS (khi đặt/đi chuyến), thông tin chuyến đi (điểm đón/trả, thời gian, giá).',
        'Tài xế: bổ sung thông tin định danh (CCCD, giấy phép lái xe), thông tin và giấy tờ phương tiện (cà-vẹt, đăng kiểm, bảo hiểm, phù hiệu, giấy phép kinh doanh vận tải/HTX), lịch sử chuyến.',
        'Dữ liệu kỹ thuật: thiết bị, phiên đăng nhập; dữ liệu sử dụng ẩn danh (nếu bạn đồng ý).',
        'CCCD và vị trí là dữ liệu cá nhân nhạy cảm — được xử lý với biện pháp bảo vệ tăng cường.',
      ],
    },
    {
      title: 'Cơ sở pháp lý và sự đồng ý',
      body: [
        'Chúng tôi xử lý dữ liệu trên cơ sở sự đồng ý của bạn (thể hiện khi đăng ký) và để thực hiện dịch vụ kết nối vận tải mà bạn yêu cầu.',
        'Bạn có quyền rút lại đồng ý bất kỳ lúc nào (qua cài đặt hoặc privacy@54vie.vn); việc rút lại có thể khiến một số chức năng không hoạt động.',
      ],
    },
    {
      title: 'Mục đích sử dụng',
      body: [
        'Cung cấp dịch vụ kết nối khách – tài xế; hỗ trợ, giải quyết khiếu nại và tranh chấp.',
        'Bảo đảm an toàn: chia sẻ thông tin cần thiết giữa khách và tài xế cùng chuyến; tính năng khẩn cấp.',
        'Cải thiện chất lượng dịch vụ (chỉ với dữ liệu ẩn danh, nếu bạn đồng ý).',
        'Tuân thủ pháp luật: cung cấp dữ liệu khi cơ quan có thẩm quyền yêu cầu hợp pháp.',
        '54Vie không xử lý thanh toán cước — khách thanh toán tiền mặt trực tiếp cho tài xế.',
      ],
    },
    {
      title: 'Vị trí GPS',
      body: [
        'GPS chỉ được thu khi bạn mở app và đang đặt/đi chuyến (khách) hoặc đang online nhận chuyến (tài xế, kể cả khi chạy nền).',
        'Bạn có thể tắt quyền truy cập vị trí từ cài đặt thiết bị bất kỳ lúc nào.',
      ],
    },
    {
      title: 'Bên thứ ba xử lý dữ liệu',
      body: [
        'Chúng tôi sử dụng các nhà cung cấp sau để vận hành dịch vụ: Google (Google Maps Platform, Firebase — bản đồ, định tuyến, thông báo đẩy, phân tích); nhà cung cấp dịch vụ OTP/tin nhắn (xác thực số điện thoại); nhà cung cấp hạ tầng máy chủ/lưu trữ.',
        '54Vie không bán dữ liệu cá nhân cho bên thứ ba quảng cáo.',
      ],
    },
    {
      title: 'Chuyển dữ liệu ra nước ngoài',
      body: [
        'Một số nhà cung cấp (Google/Firebase) có hạ tầng ngoài lãnh thổ Việt Nam, nên một phần dữ liệu có thể được lưu trữ/xử lý ở nước ngoài.',
        'Chúng tôi thực hiện đánh giá tác động và áp dụng biện pháp bảo vệ theo quy định pháp luật Việt Nam.',
      ],
    },
    {
      title: 'Lưu trữ và bảo mật',
      body: [
        'Dữ liệu được mã hoá khi truyền tải (TLS) và áp dụng kiểm soát truy cập.',
        'Lịch sử chuyến lưu tối đa 24 tháng; dữ liệu định danh tài xế lưu trong thời gian còn hoạt động và thời hạn luật định.',
      ],
    },
    {
      title: 'Quyền của chủ thể dữ liệu',
      body: [
        'Bạn có quyền: được biết/truy cập, chỉnh sửa, xoá, hạn chế và phản đối xử lý, rút lại đồng ý, yêu cầu xuất dữ liệu, và khiếu nại tới cơ quan nhà nước có thẩm quyền.',
        'Gửi yêu cầu qua privacy@54vie.vn — chúng tôi phản hồi trong thời hạn luật định.',
      ],
    },
    {
      title: 'Vi phạm dữ liệu',
      body: [
        'Trường hợp xảy ra vi phạm dữ liệu cá nhân, chúng tôi thông báo cho cơ quan có thẩm quyền và chủ thể bị ảnh hưởng theo quy định (trong vòng 72 giờ kể từ khi phát hiện).',
      ],
    },
    {
      title: 'Cookie và phân tích',
      body: [
        'Website sử dụng cookie kỹ thuật để duy trì phiên đăng nhập.',
        'Dữ liệu phân tích sử dụng chỉ được thu thập khi bạn đồng ý (tuỳ chọn) và được ẩn danh trước khi xử lý.',
      ],
    },
    {
      title: 'Thay đổi chính sách',
      body: [
        'Chính sách có thể được cập nhật; bản mới được thông báo qua ứng dụng/website.',
        'Tiếp tục sử dụng dịch vụ sau ngày hiệu lực được coi là đã biết bản cập nhật.',
      ],
    },
  ];

  return (
    <LongFormPage
      kicker="BẢO MẬT"
      title="Chính sách bảo mật"
      subtitle="Cách 54Vie thu thập, sử dụng, và bảo vệ dữ liệu cá nhân của bạn — theo Luật Bảo vệ dữ liệu cá nhân 2025."
      updatedAt="29/06/2026"
      sections={SECTIONS}
    />
  );
}
window.PrivacyPage = PrivacyPage;
