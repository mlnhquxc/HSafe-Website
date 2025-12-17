export interface Product {
  id: number;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  specs: string[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  image: string;
  gallery?: string[];
  relatedIds: number[];
}

export const products: Product[] = [
  {
    id: 1,
    slug: "non-bao-ho-thong-minh-tag-dinh-vi",
    name: "HSafe Safety Helmet Tag",
    shortDescription: "Tag định vị gắn trên nón bảo hộ, giám sát an toàn và theo dõi vị trí người lao động theo thời gian thực.",
    fullDescription: `Nón bảo hộ HSafe được thiết kế đặc biệt cho môi trường công nghiệp khắc nghiệt. Tích hợp công nghệ định vị UWB tiên tiến, thiết bị cho phép theo dõi vị trí công nhân với độ chính xác cao trong nhà máy và công trường.

Hệ thống cảnh báo va chạm thông minh giúp phát hiện và cảnh báo kịp thời khi người lao động tiếp cận vùng nguy hiểm hoặc có nguy cơ va chạm với thiết bị, phương tiện di chuyển. Trên nón tích hợp nút báo động, còi buzzer và đèn nháy cảnh báo giúp cả người đeo và khu vực xung quanh dễ dàng nhận biết khi có sự cố.

Nút SOS tích hợp cho phép công nhân gửi tín hiệu khẩn cấp ngay lập tức trong trường hợp gặp sự cố, đảm bảo được hỗ trợ nhanh chóng từ đội ngũ an toàn.

Thiết bị có thể đo được các chỉ số sinh trắc học quan trọng như nhịp tim, nhiệt độ cơ thể, mức độ vận động và tư thế làm việc, hỗ trợ bộ phận an toàn phát hiện sớm tình trạng mệt mỏi hoặc làm việc sai tư thế.

Tùy nhu cầu triển khai, nón có thể được cấu hình thêm GPS ngoài trời và/hoặc cảm biến nhịp tim:
- Khi bật GPS và nhịp tim: giám sát sức khỏe sâu hơn và theo dõi cả ngoài trời, đổi lại thời lượng pin giảm do chạy nhiều cảm biến.
- Khi tắt GPS và nhịp tim: tối ưu thời gian dùng pin lâu hơn, phù hợp kịch bản chỉ cần định vị UWB trong nhà và cảnh báo va chạm.
Bạn có thể chọn gói cấu hình để cân bằng giữa mức độ giám sát và chi phí/vận hành, ví dụ: chỉ UWB + SOS (pin siêu lâu), hoặc UWB + GPS, hoặc đầy đủ UWB + GPS + nhịp tim cho nhà máy cần an toàn cao. Ở cấu hình tiêu chuẩn, nón hỗ trợ một ca làm việc liên tục khoảng 8 giờ, kháng nước hiệu quả và vẫn giữ trọng lượng nhẹ ~350g để người lao động đội cả ngày mà không bị khó chịu.`,
    specs: [
      "Tích hợp tag định vị UWB",
      "Khoảng cách tới các Anchor lên đến ~250m (trong điều kiện triển khai phù hợp)",
      "Cảnh báo va chạm thông minh với còi buzzer & đèn nháy",
      "Pin hỗ trợ tới ~8 giờ cho một ca làm việc (tùy cấu hình cảm biến)",
      "Trọng lượng nhẹ ~350g",
      "Nút SOS khẩn cấp & nút báo động trên nón",
      "Đo nhịp tim, nhiệt độ, mức độ vận động & tư thế làm việc",
      "Kháng nước hiệu quả, phù hợp môi trường công nghiệp",
    ],
    features: [
      {
        title: "Định vị chính xác",
        description:
          "Công nghệ UWB cho độ chính xác cao, cập nhật vị trí theo thời gian thực",
        icon: "location"
      },
      {
        title: "Cảnh báo va chạm",
        description:
          "Phát hiện và cảnh báo khi tiếp cận vùng nguy hiểm bằng còi buzzer, đèn nháy và thông báo về hệ thống",
        icon: "warning"
      },
      {
        title: "Pin siêu bền",
        description:
          "Hỗ trợ một ca làm việc liên tục ~8 giờ, có thể tối ưu thêm tùy cấu hình cảm biến",
        icon: "battery"
      },
      {
        title: "Giám sát sinh trắc học",
        description:
          "Theo dõi nhịp tim, nhiệt độ, mức độ vận động và tư thế làm việc của người lao động",
        icon: "health"
      },
      {
        title: "SOS khẩn cấp",
        description: "Gửi tín hiệu cầu cứu chỉ với một nút bấm",
        icon: "sos"
      }
    ],
    image: "/images/HSafe-helmet-with-tag.png",
    relatedIds: [2, 5, 3]
  },
  {
    id: 2,
    slug: "anchor-tram-co-dinh",
    name: "HSafe Anchor",
    shortDescription:
      "Hệ thống Anchor (Anchor Master & Anchor Slave) để định vị chính xác vị trí của tag trong nhà máy và công trường.",
    fullDescription: `Hệ thống Anchor HSafe được lắp đặt tại các vị trí chiến lược trong nhà máy và công trường để tạo thành mạng lưới định vị chính xác.

Mỗi Anchor hoạt động như một điểm tham chiếu, thu nhận tín hiệu từ các tag đeo trên người lao động và phương tiện, từ đó tính toán vị trí chính xác theo thời gian thực.

Trong hệ thống HSafe, Anchor được chia thành hai loại:
- Anchor Master: đóng vai trò đồng bộ thời gian, thu thập dữ liệu từ các Anchor Slave, quản lý cấu hình khu vực và truyền dữ liệu về server.
- Anchor Slave: triển khai dày đặc trong khu vực cần định vị, lắng nghe tín hiệu từ tag và Anchor Master để tính toán vị trí với độ chính xác cao.

Thiết bị hỗ trợ đa dạng phương thức kết nối: LAN có dây, WiFi không dây, hoặc 4G LTE cho những vị trí khó triển khai hạ tầng mạng. Với khả năng kháng nước hiệu quả, Anchor có thể lắp đặt cả trong nhà và ngoài trời.`,
    specs: [
      "Kiến trúc Anchor Master & Anchor Slave",
      "Hỗ trợ mạng LAN/WiFi",
      "Kết nối 4G LTE (tùy chọn cho Anchor Master)",
      "Kháng nước hiệu quả, lắp đặt ngoài trời",
      "Tầm phủ 50-100m cho mỗi Anchor",
      "Nguồn PoE hoặc DC từ trụ pin năng lượng mặt trời",
      "Cài đặt & quản lý từ xa qua web",
    ],
    features: [
      {
        title: "Phân vai Master/Slave",
        description:
          "Anchor Master quản lý đồng bộ & truyền dữ liệu, Anchor Slave triển khai dày đặc để tăng độ phủ & độ chính xác",
        icon: "network",
      },
      {
        title: "Tầm phủ rộng",
        description:
          "Mỗi anchor phủ sóng 50-100m bán kính, dễ dàng mở rộng vùng định vị bằng cách bổ sung Anchor Slave",
        icon: "signal",
      },
      {
        title: "Chống chịu thời tiết",
        description:
          "Kháng nước, lắp đặt ngoài trời, chịu mưa nắng & môi trường công nghiệp khắc nghiệt",
        icon: "shield",
      },
      {
        title: "Dễ triển khai",
        description:
          "Cấu hình từ xa qua giao diện web, hỗ trợ quản lý riêng Anchor Master và Anchor Slave",
        icon: "settings",
      },
    ],
    image: "/images/HSafe-anchor.png",
    relatedIds: [1, 3, 4]
  },
  {
    id: 3,
    slug: "tag-xe-quan-ly-lo-trinh",
    name: "HSafe Vehicle Tag",
    shortDescription:
      "Thiết bị gắn trên xe tại cảng/nhà máy, kết nối UWB với hệ thống HSafe để định vị real-time, dẫn đường an toàn, cảnh báo va chạm và quản lý lộ trình.",
    fullDescription: `HSafe Vehicle Tag là thiết bị gắn trực tiếp lên xe trong khu vực cảng/nhà máy, kết nối UWB với hệ thống HSafe để quản lý phương tiện an toàn và hiệu quả.

- Điện áp vận hành ổn định: 3.3V.
- Định vị real-time: theo dõi chính xác vị trí xe.
- Dẫn đường có hướng dẫn: hiển thị hình ảnh/âm thanh lộ trình đã thiết lập cho tài xế di chuyển đúng tuyến trong cảng/nhà máy.
- Giám sát trạng thái xe: phát hiện mất cân bằng, va chạm với người/xe khác, hỗ trợ cảnh báo an toàn. Cảnh báo va chạm giữa các thiết bị ở khoảng cách thực tế: tối thiểu ~3m (có vật cản), tối đa ~30m (không vật cản).
- SOS khẩn cấp: phát âm thanh cảnh báo để thu hút chú ý khi có sự cố.
- Cập nhật từ xa: OTA qua mạng để luôn mới và ổn định.
- Định danh nhanh: mỗi thiết bị có mã QR riêng để quản lý và truy xuất thông tin.
- Chống bụi, chống thấm tốt, phù hợp môi trường cảng/nhà máy.

Quản lý năng lượng thông minh:
- Normal Mode: kích hoạt khi pin ≥ 10%, mọi tính năng hoạt động đầy đủ.
- Sleep Mode: tự động khi không có lộ trình; sau 5 phút không nhiệm vụ sẽ sleep, mỗi 5 giây thức dậy kiểm tra lộ trình, có nhiệm vụ sẽ khởi động lại, nếu không sẽ tiếp tục sleep. Nhờ vậy thời gian pin có thể kéo dài tới ~1 tuần sau mỗi lần sạc (đã thử nghiệm thực tế tại nhà máy).

Thiết kế giao diện đơn giản, màn hình cảm ứng kèm 6 nút chức năng giúp tài xế thao tác nhanh và dễ quan sát trong quá trình vận hành.`,
    specs: [
      "Định vị UWB real-time",
      "Hướng dẫn lộ trình bằng hình ảnh/âm thanh",
      "Giám sát va chạm & trạng thái cân bằng xe",
      "SOS âm thanh khẩn cấp",
      "Cập nhật OTA từ xa",
      "Mã QR định danh từng thiết bị",
      "Điện áp 3.3V, Sleep Mode kéo dài pin tới ~1 tuần",
      "Chống bụi/nước, cảnh báo va chạm 3–30m (thực tế)",
    ],
    features: [
      {
        title: "Định vị kép",
        description: "GPS ngoài trời + UWB trong nhà chính xác",
        icon: "gps"
      },
      {
        title: "Nhận diện tự động",
        description: "Tự động check-in/out khi qua cổng",
        icon: "scan"
      },
      {
        title: "Geofencing",
        description: "Cảnh báo khi vào/ra khỏi vùng quy định",
        icon: "fence"
      },
      {
        title: "Báo cáo thông minh",
        description: "Tự động tạo báo cáo hoạt động hàng ngày",
        icon: "report"
      }
    ],
    image: "/images/HSafe-vehicle-tag.jpeg",
    relatedIds: [2, 4, 1]
  },
  {
    id: 4,
    slug: "tag-vat-tu-pallet",
    name: "HSafe Supplies Tag",
    shortDescription: "Giải pháp định vị linh hoạt bảo vệ từ dụng cụ cầm tay giá trị cao đến máy móc cơ giới khổng lồ, chống thất thoát và tối ưu năng suất.",
    fullDescription: `Giải pháp của chúng tôi được thiết kế linh hoạt để bảo vệ từ những vật dụng nhỏ giá trị cao đến các thiết bị cơ giới khổng lồ.

A. DỤNG CỤ CẦM TAY & THIẾT BỊ ĐO LƯỜNG
Giải quyết bài toán: Chống mất cắp vặt, thất lạc và giảm thời gian tìm kiếm.

Dụng cụ điện: Máy khoan pin, máy bắt vít, máy mài, súng bắn bu lông.
Thiết bị đo lường chính xác: Máy cân bằng Laser, máy đo khoảng cách, Ampe kìm, Đồng hồ vạn năng, Camera nhiệt.
Thiết bị an toàn & Liên lạc: Bộ đàm chuyên dụng, Máy đo khí cầm tay, Thiết bị bảo hộ cá nhân cao cấp.
Khuôn mẫu & Jig: Các loại đồ gá, khuôn mẫu cơ khí chính xác, hộp mũi khoan/dao phay CNC đắt tiền.

B. MÁY MÓC CƠ GIỚI & TÀI SẢN LỚN
Giải quyết bài toán: Giám sát vị trí, đo lường thời gian hoạt động và tối ưu chi phí thuê máy.

Xe cơ giới hạng nặng: Xe nâng, xe lu, máy xúc, xe cẩu, xe ủi.
Thiết bị phụ trợ di động: Máy phát điện công nghiệp, máy nén khí di động, tháp đèn chiếu sáng ban đêm, máy hàn công nghiệp cỡ lớn.
Vật tư giá trị cao: Các lô cáp điện/cáp đồng (chống trộm lõi đồng), cốp pha nhôm/thép định hình, container văn phòng/kho vật tư.
    Vận chuyển nội bộ: Xe điện, Pallet sắt chuyên dụng.

    VÌ SAO BẠN CẦN GẮN TAG ĐỊNH VỊ?

    Chống thất thoát & Trộm cắp:
    Cảnh báo tức thời: Nhận thông báo ngay khi máy khoan, máy cắt hoặc cuộn cáp bị di chuyển ra khỏi "Vùng An Toàn" (vùng địa lý an toàn) thiết lập sẵn. Giám sát liên tục, bảo vệ tài sản ngay cả khi công trường không có người trông coi vào ban đêm.

    Tăng năng suất lao động:
    Tìm kiếm trong tích tắc: Không còn cảnh kỹ sư tốn 30 phút mỗi ngày chỉ để đi tìm cái máy đo laser hay xe nâng. Định vị chính xác vị trí tài sản trên bản đồ số. Chỉ cần một thao tác quét để biết số lượng tài sản hiện có.

    Tối ưu chi phí vận hành:
    Giám sát hiệu suất: Biết chính xác máy phát điện hay xe lu đã hoạt động bao nhiêu giờ thực tế (dựa trên cảm biến rung/di chuyển) để tránh lãng phí nhiên liệu hoặc chi phí thuê máy. Lên lịch bảo trì: Theo dõi lịch sử sử dụng để chủ động bảo dưỡng, kéo dài tuổi thọ thiết bị.`,
    specs: ["Định vị tài sản real-time", "Chống trộm cắp", "Giám sát thời gian hoạt động", "Pin lên đến 2 năm", "Chống nước IP65", "Kích thước nhỏ gọn"],
    features: [
      {
        title: "Chống thất thoát",
        description: "Cảnh báo tức thời khi tài sản di chuyển khỏi vùng an toàn, giám sát liên tục",
        icon: "shield"
      },
      {
        title: "Tăng năng suất",
        description: "Tìm kiếm tài sản trong tích tắc, giảm 90% thời gian kiểm kê",
        icon: "asset"
      },
      {
        title: "Tối ưu chi phí",
        description: "Giám sát hiệu suất và lên lịch bảo trì chủ động",
        icon: "warehouse"
      },
      {
        title: "Pin siêu dài",
        description: "Sử dụng lên đến 2 năm, tiết kiệm vận hành",
        icon: "battery"
      }
    ],
    image: "/images/HSafe-pallet-tag.jpeg",
    relatedIds: [2, 3, 1]
  },
  {
    id: 5,
    slug: "dong-ho-thong-minh",
    name: "HSafe Safety Watch",
    shortDescription: "Đồng hồ đeo tay tích hợp giám sát sức khỏe và định vị cho công nhân.",
    fullDescription: `Đồng hồ thông minh HSafe là thiết bị đeo tay đa chức năng, kết hợp giám sát sức khỏe và định vị an toàn trong một thiết kế nhỏ gọn, thời trang.

Cảm biến sinh trắc tiên tiến liên tục theo dõi nhịp tim, SpO2, và các chỉ số sức khỏe quan trọng. Thuật toán AI phát hiện các dấu hiệu bất thường và cảnh báo sớm nguy cơ sức khỏe.

Tính năng phát hiện té ngã tự động gửi cảnh báo đến trung tâm điều hành khi người đeo gặp sự cố. Nút SOS cho phép gọi trợ giúp khẩn cấp chỉ với một thao tác đơn giản.`,
    specs: ["Đo nhịp tim liên tục", "Đo SpO2 (nồng độ oxy)", "Phát hiện té ngã AI", "Định vị thời gian thực", "Nút SOS khẩn cấp", "Chống nước IP68", "Pin 7 ngày", "Màn hình AMOLED"],
    features: [
      {
        title: "Giám sát sức khỏe",
        description: "Nhịp tim, SpO2, stress liên tục 24/7",
        icon: "health"
      },
      {
        title: "Phát hiện té ngã",
        description: "AI tự động phát hiện và báo động khi té ngã",
        icon: "fall"
      },
      {
        title: "Định vị chính xác",
        description: "GPS + UWB theo dõi vị trí mọi lúc",
        icon: "location"
      },
      {
        title: "SOS một chạm",
        description: "Gọi trợ giúp ngay với một nút bấm",
        icon: "sos"
      }
    ],
    image: "/images/HSafe-watch.png",
    relatedIds: [1, 2, 3]
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  const normalized = decodeURIComponent(slug).trim().toLowerCase();
  return products.find((p) => p.slug.toLowerCase() === normalized);
}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product): Product[] {
  return product.relatedIds
    .map((id) => getProductById(id))
    .filter((p): p is Product => p !== undefined);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

