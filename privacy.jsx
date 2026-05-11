// 54Vie — Privacy page (Chính sách bảo mật)
// Phụ thuộc: LongFormPage (homepage/_shared.jsx)

function PrivacyPage() {
  const SECTIONS = [
    {
      title: 'Thông tin chúng tôi thu thập',
      body: [
        'Khi bạn sử dụng 54Vie, chúng tôi thu thập: số điện thoại, họ tên, vị trí GPS trong khi sử dụng app, thông tin chuyến đi (điểm đón/trả, thời gian, giá).',
        'Với tài xế: bổ sung thông tin định danh (CCCD, GPLX), thông tin phương tiện, và lịch sử chạy chuyến.',
      ],
    },
    {
      title: 'Mục đích sử dụng',
      body: [
        'Cung cấp dịch vụ kết nối khách – tài xế, xử lý thanh toán, và hỗ trợ khiếu nại.',
        'Cải thiện chất lượng dịch vụ: phân tích thời gian chờ, lộ trình tối ưu, mức giá trung bình theo khu vực.',
        'Tuân thủ pháp luật: cung cấp dữ liệu khi cơ quan có thẩm quyền yêu cầu hợp pháp.',
      ],
    },
    {
      title: 'Vị trí GPS',
      body: [
        'GPS chỉ được thu thập khi bạn mở app và đang trong chuyến đi (khách) hoặc đang online nhận chuyến (tài xế).',
        'Bạn có thể tắt quyền truy cập vị trí từ cài đặt thiết bị bất kỳ lúc nào — nhưng một số chức năng có thể không hoạt động.',
      ],
    },
    {
      title: 'Chia sẻ dữ liệu',
      body: [
        '54Vie KHÔNG bán dữ liệu cá nhân cho bên thứ ba quảng cáo.',
        'Dữ liệu chỉ được chia sẻ với: (1) tài xế/khách trong cùng chuyến đi (tên, biển số, số điện thoại đã ẩn); (2) đối tác thanh toán khi cần; (3) cơ quan nhà nước theo yêu cầu pháp lý.',
      ],
    },
    {
      title: 'Lưu trữ và bảo mật',
      body: [
        'Dữ liệu được mã hoá khi truyền tải (TLS) và lưu trữ trên hạ tầng có chứng chỉ bảo mật chuẩn quốc tế.',
        'Lịch sử chuyến đi được lưu tối đa 24 tháng. Dữ liệu định danh (CCCD, GPLX) được lưu trong suốt thời gian tài xế còn hoạt động.',
      ],
    },
    {
      title: 'Quyền của bạn',
      body: [
        'Bạn có quyền: xem toàn bộ dữ liệu mà 54Vie giữ về bạn, yêu cầu chỉnh sửa thông tin sai, hoặc yêu cầu xoá tài khoản.',
        'Gửi yêu cầu qua privacy@54vie.vn — chúng tôi phản hồi trong vòng 30 ngày làm việc.',
      ],
    },
    {
      title: 'Cookie và phân tích',
      body: [
        'Website 54Vie sử dụng cookie kỹ thuật để duy trì phiên đăng nhập. Không dùng cookie quảng cáo hay tracking bên thứ ba.',
        'Dữ liệu phân tích sử dụng (lượt truy cập, hành vi) được ẩn danh trước khi xử lý.',
      ],
    },
  ];

  return (
    <LongFormPage
      kicker="BẢO MẬT"
      title="Chính sách bảo mật"
      subtitle="Cách 54Vie thu thập, sử dụng, và bảo vệ thông tin cá nhân của bạn."
      updatedAt="11/05/2026"
      sections={SECTIONS}
    />
  );
}
window.PrivacyPage = PrivacyPage;
