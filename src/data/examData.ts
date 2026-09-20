import { Question } from '../types';

export const EXAM_METADATA = {
  title: 'Đề thi tham khảo GK Tiêu hóa',
  subtitle: 'Đại học Y Dược TP.HCM – Y3',
  durationMinutes: 40,
  totalQuestions: 70,
  passingScoreOutOf10: 5.0,
  notice: 'Đề bám ma trận lượng giá của đề cương module (13 mục tiêu học tập, mức độ Nhớ – Hiểu – Áp dụng), kiến thức chuẩn lấy từ Bài giảng Hệ Tiêu hóa (ĐHYD TP.HCM).'
};

export const EXAM_QUESTIONS: Question[] = [
  // --- GIẢI PHẪU (1 - 13) ---
  {
    id: 1,
    category: 'GIẢI PHẪU',
    question: 'Vòng bạch huyết Waldeyer ở vùng hầu gồm những thành phần nào?',
    options: [
      'Amidan vòm họng, amidan vòi, amidan khẩu cái và amidan đáy lưỡi',
      'Amidan khẩu cái, amidan đáy lưỡi và các hạch cổ sâu trên',
      'Amidan vòm họng, amidan khẩu cái và các nang lympho của thực quản',
      'Amidan vòi, amidan khẩu cái và các mảng lympho của hầu dưới'
    ],
    correctAnswer: 0,
    explanation: 'Vùng hầu có hệ mô lympho phát triển tạo vòng Waldeyer gồm amidan vòm họng, amidan vòi, amidan khẩu cái và amidan đáy lưỡi.',
    source: 'Bài 6, tr. 54'
  },
  {
    id: 2,
    category: 'GIẢI PHẪU',
    question: 'Cấu tạo lớp cơ của thực quản thay đổi theo đoạn như thế nào?',
    options: [
      '1/3 trên là cơ trơn, 1/3 giữa pha lẫn, 1/3 dưới là cơ vân',
      '1/3 trên là cơ vân, 1/3 giữa pha lẫn cơ vân và cơ trơn, 1/3 dưới là cơ trơn',
      'Toàn bộ thực quản chỉ có cơ trơn, trừ cơ thắt thực quản trên',
      'Toàn bộ thực quản chỉ có cơ vân, trừ đoạn bụng'
    ],
    correctAnswer: 1,
    explanation: '1/3 trên chỉ có cơ vân, 1/3 giữa pha lẫn cơ vân và cơ trơn, 1/3 dưới chỉ còn cơ trơn – phù hợp với giai đoạn đầu của động tác nuốt có kiểm soát và giai đoạn sau theo nhu động không chủ ý.',
    source: 'Bài 6, tr. 54'
  },
  {
    id: 3,
    category: 'GIẢI PHẪU',
    question: 'Một bệnh nhân nam 60 tuổi nuốt nghẹn tăng dần, sụt 8 kg trong 3 tháng. Nội soi và sinh thiết cho kết quả carcinom tế bào gai ở thực quản đoạn ngực. Phim CT ghi nhận khối u đã xâm lấn ra mô mỡ trung thất dù bề dày thành thực quản chỉ mới dày khu trú. Đặc điểm cấu tạo nào của thực quản giải thích tốt nhất hiện tượng u xâm lấn ra ngoài sớm như vậy?',
    options: [
      'Đoạn ngực của thực quản không có lớp thanh mạc, chỉ được bao bởi lớp áo ngoài (bao xơ)',
      'Lớp cơ của thực quản đoạn ngực rất mỏng và không liên tục',
      'Thực quản không có lớp dưới niêm mạc nên u lan trực tiếp ra ngoài',
      'Niêm mạc thực quản là biểu mô trụ đơn nên dễ bị phá hủy'
    ],
    correctAnswer: 0,
    explanation: 'Thực quản chỉ có thanh mạc ở đoạn bụng; đoạn ngực chỉ được bao bởi lớp áo ngoài (bao xơ), không có hàng rào thanh mạc nên u dễ xâm lấn trung thất sớm.',
    source: 'Bài 6, tr. 54'
  },
  {
    id: 4,
    category: 'GIẢI PHẪU',
    question: 'Trong một ca cắt gan, khi máu chảy nhiều từ diện cắt, phẫu thuật viên luồn ngón trỏ qua lỗ mạc nối rồi kẹp bờ tự do của mạc nối nhỏ và ghi nhận máu chảy giảm rõ rệt. Bộ ba cấu trúc nào đã bị kẹp?',
    options: [
      'Ống mật chủ, động mạch gan riêng và tĩnh mạch cửa',
      'Ống gan chung, động mạch gan chung và tĩnh mạch chủ dưới',
      'Ống túi mật, động mạch túi mật và tĩnh mạch cửa',
      'Ống mật chủ, động mạch vị tá tràng và tĩnh mạch lách'
    ],
    correctAnswer: 0,
    explanation: 'Bờ tự do của mạc nối nhỏ là dây chằng gan – tá tràng, chứa cuống gan: ống mật chủ, động mạch gan riêng và tĩnh mạch cửa; kẹp bộ ba này làm giảm chảy máu từ gan.',
    source: 'Bài 5, tr. 43'
  },
  {
    id: 5,
    category: 'GIẢI PHẪU',
    question: 'Một bệnh nhân thủng ổ loét mặt sau thân vị, dịch dạ dày chảy ra nhưng chưa lan khắp ổ bụng; khám bụng chỉ đề kháng nhẹ vùng thượng vị. Trên CT, dịch và hơi tụ lại trong một khoang kín phía sau dạ dày. Khoang đó là:',
    options: [
      'Hậu cung mạc nối (túi mạc nối)',
      'Ngách gan thận (túi Morison)',
      'Rãnh cạnh đại tràng phải',
      'Túi cùng trực tràng – bàng quang'
    ],
    correctAnswer: 0,
    explanation: 'Mạc nối nhỏ cùng dạ dày tạo vách ngăn: dịch ở phía trước chảy vào ổ phúc mạc lớn, dịch ở phía sau tụ lại trong hậu cung mạc nối.',
    source: 'Bài 5, tr. 43'
  },
  {
    id: 6,
    category: 'GIẢI PHẪU',
    question: 'Động mạch vị mạc nối phải là nhánh của động mạch nào?',
    options: [
      'Động mạch vị tá tràng',
      'Động mạch lách',
      'Động mạch gan riêng',
      'Động mạch mạc treo tràng trên'
    ],
    correctAnswer: 0,
    explanation: 'Động mạch vị mạc nối phải là nhánh của động mạch vị tá tràng; động mạch vị mạc nối trái là nhánh của động mạch lách.',
    source: 'Bài 5, tr. 43; Bài 2'
  },
  {
    id: 7,
    category: 'GIẢI PHẪU',
    question: 'Đoạn nào của đại tràng là vùng ranh giới tưới máu giữa động mạch mạc treo tràng trên và động mạch mạc treo tràng dưới, do đó dễ bị thiếu máu nhất khi tụt huyết áp kéo dài?',
    options: [
      'Kết tràng góc lách',
      'Manh tràng',
      'Kết tràng góc gan',
      'Kết tràng chậu hông'
    ],
    correctAnswer: 0,
    explanation: 'Kết tràng góc lách là vùng ranh giới cấp máu giữa động mạch mạc treo tràng trên (động mạch kết tràng giữa) và động mạch mạc treo tràng dưới (động mạch kết tràng trái).',
    source: 'Bài 4, tr. 33'
  },
  {
    id: 8,
    category: 'GIẢI PHẪU',
    question: 'Trong lòng trực tràng có bao nhiêu nếp ngang (nếp trực tràng)?',
    options: [
      'Hai nếp',
      'Ba nếp',
      'Năm nếp',
      'Từ sáu đến mười nếp'
    ],
    correctAnswer: 1,
    explanation: 'Lòng trực tràng có ba nếp ngang: nếp trực tràng trên, giữa và dưới; nếp giữa nằm bên phải.',
    source: 'Bài 4, tr. 35'
  },
  {
    id: 9,
    category: 'GIẢI PHẪU',
    question: 'Thùy vuông của gan được giới hạn bởi các cấu trúc nào?',
    options: [
      'Hố túi mật ở bên phải, khe dây chằng tròn ở bên trái, cửa gan ở phía sau và bờ dưới gan ở phía trước',
      'Tĩnh mạch chủ dưới ở bên phải, khe dây chằng tĩnh mạch ở bên trái và cửa gan ở phía trước',
      'Khe dây chằng liềm ở bên trái và rãnh dọc phải ở bên phải, trên mặt hoành',
      'Hố túi mật ở bên trái, tĩnh mạch chủ dưới ở bên phải và cửa gan ở phía trước'
    ],
    correctAnswer: 0,
    explanation: 'Thùy vuông chỉ thấy ở mặt tạng, giới hạn bởi hố túi mật bên phải, khe dây chằng tròn bên trái, cửa gan phía sau và bờ dưới gan phía trước.',
    source: 'Bài 11, tr. 116'
  },
  {
    id: 10,
    category: 'GIẢI PHẪU',
    question: 'Tĩnh mạch cửa được hợp thành bởi hai tĩnh mạch nào và ở vị trí nào?',
    options: [
      'Tĩnh mạch lách và tĩnh mạch mạc treo tràng trên, ở sau cổ tụy ngang mức đốt sống thắt lưng 1',
      'Tĩnh mạch lách và tĩnh mạch mạc treo tràng dưới, ở sau đầu tụy ngang mức đốt sống thắt lưng 3',
      'Tĩnh mạch mạc treo tràng trên và dưới, ở trước tĩnh mạch chủ dưới ngang mức đốt sống ngực 12',
      'Tĩnh mạch vị trái và tĩnh mạch lách, ở bờ trên thân tụy'
    ],
    correctAnswer: 0,
    explanation: 'Tĩnh mạch cửa do tĩnh mạch mạc treo tràng trên và tĩnh mạch lách hợp lại ở phía trước tĩnh mạch chủ dưới, ngang mức đốt sống thắt lưng 1, sau cổ tụy.',
    source: 'Bài 11, tr. 119'
  },
  {
    id: 11,
    category: 'GIẢI PHẪU',
    question: 'Một phụ nữ 55 tuổi đau hạ sườn phải nhiều đợt, nay vàng da, bilirubin trực tiếp tăng. Siêu âm: nhiều sỏi trong túi mật, một sỏi lớn kẹt ở cổ túi mật; đường mật trong gan giãn, ống mật chủ đoạn dưới không thấy sỏi và không giãn. Cơ chế gây vàng da phù hợp nhất là:',
    options: [
      'Sỏi cổ túi mật chèn ép ống gan chung nằm sát bên',
      'Sỏi đã di chuyển xuống bóng gan tụy rồi tự rớt ra',
      'Viêm túi mật cấp gây tán huyết làm tăng bilirubin',
      'Co thắt cơ vòng Oddi do đau kéo dài'
    ],
    correctAnswer: 0,
    explanation: 'Ống gan chung nằm sát cổ túi mật và ống túi mật; sỏi lớn kẹt ở đây có thể chèn ép ống gan chung gây vàng da tắc mật dù ống mật chủ đoạn dưới không có sỏi.',
    source: 'Bài 11, tr. 119'
  },
  {
    id: 12,
    category: 'GIẢI PHẪU',
    question: 'Vì sao cắt lách có thể làm tổn thương tụy, gây rò dịch tụy sau mổ?',
    options: [
      'Vì đuôi tụy nằm trong dây chằng lách – thận và có thể chạm tới rốn lách',
      'Vì đầu tụy nằm ngay sau rốn lách trong mạc nối nhỏ',
      'Vì ống tụy chính đi ngang qua cuống lách trước khi vào tá tràng',
      'Vì tụy được cấp máu hoàn toàn bởi động mạch lách'
    ],
    correctAnswer: 0,
    explanation: 'Đuôi tụy là phần duy nhất của tụy nằm trong phúc mạc, đi trong dây chằng lách – thận và có thể chạm rốn lách, nên dễ bị tổn thương khi cắt lách.',
    source: 'Bài 12; Bài 22, tr. 233'
  },
  {
    id: 13,
    category: 'GIẢI PHẪU',
    question: 'Phát biểu nào sau đây đúng về mạc nối lớn?',
    options: [
      'Đi từ bờ cong lớn dạ dày tới kết tràng ngang nên còn gọi là dây chằng vị – kết tràng, cấu tạo bởi bốn lá phúc mạc',
      'Đi từ bờ cong nhỏ dạ dày tới gan, cấu tạo bởi hai lá phúc mạc',
      'Là phần phúc mạc phủ mặt trước thận và tá tràng, cấu tạo bởi một lá',
      'Là di tích của mạc treo vị trước, chứa cuống gan ở bờ phải'
    ],
    correctAnswer: 0,
    explanation: 'Mạc nối lớn đi từ bờ cong lớn dạ dày tới kết tràng ngang nên còn gọi là dây chằng vị – kết tràng; do hai lá trước và hai lá sau dính nhau nên có bốn lá.',
    source: 'Bài 5, tr. 43'
  },

  // --- MÔ PHÔI (14 - 22) ---
  {
    id: 14,
    category: 'MÔ PHÔI',
    question: 'Tế bào gốc của tuyến đáy vị tập trung chủ yếu ở vùng nào của tuyến?',
    options: [
      'Cổ tuyến',
      'Đáy tuyến',
      'Phễu tuyến',
      'Lớp cơ niêm'
    ],
    correctAnswer: 0,
    explanation: 'Tế bào gốc của tuyến dạ dày chủ yếu nằm ở vùng cổ tuyến, từ đó biệt hóa và di chuyển lên bề mặt hoặc xuống đáy tuyến.',
    source: 'Bài 6, tr. 54'
  },
  {
    id: 15,
    category: 'MÔ PHÔI',
    question: 'So với tuyến đáy vị, tuyến môn vị có đặc điểm nào sau đây?',
    options: [
      'Chủ yếu gồm tế bào cổ tuyến tiết chất nhầy và lysozyme, kèm các tế bào nội tiết',
      'Chủ yếu gồm tế bào thành tiết HCl và yếu tố nội tại',
      'Chủ yếu gồm tế bào chính tiết pepsinogen ở đáy tuyến',
      'Không có tế bào nội tiết, chỉ có tế bào gốc'
    ],
    correctAnswer: 0,
    explanation: 'Tuyến tâm vị và môn vị chủ yếu tiết chất nhầy và lysozyme; riêng tuyến môn vị còn có tế bào G tiết gastrin. Tế bào thành và tế bào chính tập trung ở tuyến đáy vị.',
    source: 'Bài 6, tr. 54; Bài 8, tr. 71'
  },
  {
    id: 16,
    category: 'MÔ PHÔI',
    question: 'Biểu mô của hầu có đặc điểm nào sau đây?',
    options: [
      'Phần cao tiếp giáp khoang mũi sau là biểu mô trụ giả tầng có lông chuyển; phần thấp tiếp giáp thực quản là biểu mô lát tầng không sừng hóa',
      'Toàn bộ hầu được lót bởi biểu mô lát tầng sừng hóa',
      'Toàn bộ hầu được lót bởi biểu mô trụ đơn có vi nhung mao',
      'Phần cao là biểu mô lát tầng sừng hóa; phần thấp là biểu mô vuông đơn'
    ],
    correctAnswer: 0,
    explanation: 'Hầu là nơi gặp nhau của đường tiêu hóa và hô hấp: phần cao có biểu mô trụ giả tầng có lông chuyển kèm tế bào đài, phần thấp là biểu mô lát tầng không sừng hóa.',
    source: 'Bài 6, tr. 54'
  },
  {
    id: 17,
    category: 'MÔ PHÔI',
    question: 'Niêm mạc đại tràng khác niêm mạc ruột non ở điểm nào?',
    options: [
      'Không có nhung mao, tuyến dạng ống đơn thẳng và rất nhiều tế bào đài',
      'Có nhung mao thấp hơn nhưng nhiều vi nhung mao hơn',
      'Không có tế bào đài và không có tế bào nội tiết đường tiêu hóa',
      'Không có cơ niêm nên lớp đệm liên tục với lớp dưới niêm'
    ],
    correctAnswer: 0,
    explanation: 'Ruột già không có nếp vòng (trừ đoạn xa) và không có nhung mao; tuyến là tuyến ống đơn thẳng với rất nhiều tế bào đài tiết nhầy.',
    source: 'Bài 6, tr. 56'
  },
  {
    id: 18,
    category: 'MÔ PHÔI',
    question: 'Ống vân của tuyến nước bọt có “vân” ở cực đáy tế bào là do đâu và có ý nghĩa gì?',
    options: [
      'Do các ty thể xếp dọc giữa những nếp gấp màng đáy, phục vụ vận chuyển ion (tái hấp thu Na⁺, bài tiết K⁺)',
      'Do các hạt chế tiết xếp thành hàng ở cực đáy, phục vụ xuất bào men amylase',
      'Do các sợi cơ – biểu mô bao quanh, giúp tống nước bọt ra khỏi nang',
      'Do lớp glycocalyx dày ở cực đáy, giúp hấp thu nước từ mô kẽ'
    ],
    correctAnswer: 0,
    explanation: 'Ống vân có các nếp gấp màng đáy với ty thể xếp dọc tạo hình ảnh “vân”, phản ánh chức năng vận chuyển ion của đoạn ống này.',
    source: 'Bài 14 – tuyến nước bọt'
  },
  {
    id: 19,
    category: 'MÔ PHÔI',
    question: 'Ruột sau của phôi tạo nên những cấu trúc nào?',
    options: [
      '1/3 sau kết tràng ngang, kết tràng xuống, kết tràng sigma, trực tràng và lớp lót bên trong của bàng quang – niệu đạo',
      'Toàn bộ kết tràng ngang, manh tràng và ruột thừa',
      'Hồi tràng, manh tràng và 2/3 trước kết tràng ngang',
      'Trực tràng, ống hậu môn toàn bộ và cơ thắt hậu môn ngoài'
    ],
    correctAnswer: 0,
    explanation: 'Ruột sau tạo 1/3 sau kết tràng ngang, kết tràng xuống, kết tràng sigma, trực tràng và phần cao ống hậu môn; nội bì ruột sau còn tạo lớp lót bên trong của bàng quang và niệu đạo.',
    source: 'Bài 22, tr. 235'
  },
  {
    id: 20,
    category: 'MÔ PHÔI',
    question: 'Trong quá trình phát triển, ruột giữa xoay tổng cộng bao nhiêu độ và quanh trục nào?',
    options: [
      '270° ngược chiều kim đồng hồ, quanh trục động mạch mạc treo tràng trên',
      '270° cùng chiều kim đồng hồ, quanh trục động mạch mạc treo tràng dưới',
      '180° ngược chiều kim đồng hồ, quanh trục ống noãn hoàng',
      '90° cùng chiều kim đồng hồ, quanh trục động mạch thân tạng'
    ],
    correctAnswer: 0,
    explanation: 'Ruột giữa xoay tổng cộng 270° ngược chiều kim đồng hồ quanh trục động mạch mạc treo tràng trên – ống noãn hoàng (90° trong thoát vị rốn sinh lý và 180° khi quai ruột trở về ổ bụng).',
    source: 'Bài 22, tr. 235'
  },
  {
    id: 21,
    category: 'MÔ PHÔI',
    question: 'Một bé trai 3 tuổi đi tiêu ra máu đỏ tươi lượng nhiều, không đau bụng, không sốt; nội soi đại tràng và dạ dày – tá tràng đều bình thường. Xạ hình có chất đánh dấu bắt ở vùng hố chậu phải. Tổn thương nhiều khả năng nằm ở đâu và do nguyên nhân phôi thai nào?',
    options: [
      'Túi thừa ở bờ tự do hồi tràng do tồn tại ống noãn hoàng, có chứa mô dạ dày lạc chỗ',
      'Túi thừa ở bờ mạc treo của hỗng tràng do khiếm khuyết mạc treo chung',
      'Nang đôi đại tràng do ruột sau không tách khỏi ổ nhớp',
      'Ruột xoay không hoàn toàn làm xoắn quai hồi tràng'
    ],
    correctAnswer: 0,
    explanation: 'Tồn tại ống noãn hoàng tạo túi thừa Meckel ở bờ tự do hồi tràng; mô dạ dày lạc chỗ trong túi thừa tiết acid gây loét và xuất huyết tiêu hóa dưới không đau ở trẻ nhỏ.',
    source: 'Bài 22, tr. 235 – dị tật ruột giữa'
  },
  {
    id: 22,
    category: 'MÔ PHÔI',
    question: 'Một bệnh nhân nam 52 tuổi ợ nóng nhiều năm, tự dùng thuốc không đều. Nội soi thấy niêm mạc màu hồng cá hồi lan lên trên đường nối thực quản – dạ dày 3 cm; sinh thiết vùng này thấy biểu mô trụ có tế bào đài xen kẽ. Hiện tượng mô học này được gọi là gì và ý nghĩa ra sao?',
    options: [
      'Chuyển sản ruột của biểu mô thực quản, là tổn thương tiền ung của carcinom tuyến',
      'Loạn sản độ cao của biểu mô lát tầng, cần cắt thực quản ngay',
      'Tăng sản lành tính của tuyến tâm vị, không cần theo dõi',
      'Viêm thực quản tăng bạch cầu ái toan, điều trị bằng corticoid tại chỗ'
    ],
    correctAnswer: 0,
    explanation: 'Biểu mô lát tầng không sừng của thực quản bị thay bằng biểu mô trụ có tế bào đài (chuyển sản ruột – thực quản Barrett) do trào ngược kéo dài; đây là tổn thương tiền ung của carcinom tuyến thực quản.',
    source: 'Bài 6, tr. 54; Bài 9 – bệnh lý ống tiêu hóa'
  },

  // --- SINH LÝ (23 - 46) ---
  {
    id: 23,
    category: 'SINH LÝ',
    question: 'Ở trạng thái nghỉ, lượng nước bọt được bài tiết khoảng bao nhiêu và tuyến nào đóng góp nhiều nhất?',
    options: [
      'Khoảng 30 mL/giờ, tuyến dưới hàm tiết khoảng 2/3',
      'Khoảng 30 mL/giờ, tuyến mang tai tiết khoảng 2/3',
      'Khoảng 400 mL/giờ, tuyến dưới lưỡi tiết khoảng 2/3',
      'Khoảng 400 mL/giờ, tuyến mang tai tiết khoảng 3/4'
    ],
    correctAnswer: 0,
    explanation: 'Lúc nghỉ, nước bọt tiết khoảng 30 mL/giờ, trong đó tuyến dưới hàm tiết khoảng 2/3, tuyến mang tai 1/4, còn lại là tuyến dưới lưỡi; khi kích thích mạnh có thể đạt 400 mL/giờ.',
    source: 'Bài 8, tr. 71'
  },
  {
    id: 24,
    category: 'SINH LÝ',
    question: 'Một bệnh nhân được tiêm atropine trước khi gây mê, sau đó than khô miệng rất khó chịu. Cơ chế nào giải thích đúng nhất?',
    options: [
      'Atropine ức chế thụ thể muscarinic, cắt mất kích thích phó giao cảm vốn là yếu tố chính làm tiết nhiều nước bọt loãng',
      'Atropine kích thích thụ thể beta-adrenergic làm nước bọt trở nên nhiều và loãng',
      'Atropine ức chế trực tiếp men amylase của nước bọt',
      'Atropine làm co mạch tuyến nước bọt qua thụ thể alpha, còn phó giao cảm không liên quan bài tiết'
    ],
    correctAnswer: 0,
    explanation: 'Kích thích phó giao cảm gây bài tiết lượng lớn nước bọt, nên thuốc kháng cholinergic như atropine ức chế bài tiết gây khô miệng; tác dụng phó giao cảm mạnh và kéo dài hơn giao cảm.',
    source: 'Bài 8, tr. 71'
  },
  {
    id: 25,
    category: 'SINH LÝ',
    question: 'Lượng dịch vị được bài tiết ở dạ dày mỗi ngày khoảng bao nhiêu?',
    options: [
      '0,5 lít',
      '1 lít',
      '2 lít',
      '5 lít'
    ],
    correctAnswer: 2,
    explanation: 'Khoảng 2 lít dịch vị được bài tiết ở dạ dày mỗi ngày.',
    source: 'Bài 8, tr. 71'
  },
  {
    id: 26,
    category: 'SINH LÝ',
    question: 'Một bệnh nhân loét dạ dày kháng trị được phẫu thuật cắt hang vị, giữ lại thân vị và đáy vị. Sau mổ, xét nghiệm ghi nhận lượng acid dịch vị giảm rõ dù tế bào thành gần như còn nguyên vẹn. Giải thích phù hợp nhất là:',
    options: [
      'Mất phần lớn tế bào G nên giảm gastrin kích thích tế bào thành',
      'Mất tế bào chính nên không còn pepsinogen để hoạt hóa acid',
      'Mất tế bào D nên somatostatin tăng cao ức chế tiết acid',
      'Mất tuyến đáy vị nên không còn yếu tố nội tại'
    ],
    correctAnswer: 0,
    explanation: 'Tế bào G tiết gastrin nằm ở tuyến môn vị vùng hang vị; cắt hang vị làm mất nguồn gastrin nên tế bào thành tuy còn nhưng thiếu kích thích, acid giảm.',
    source: 'Bài 8, tr. 71; Bài 23, tr. 240'
  },
  {
    id: 27,
    category: 'SINH LÝ',
    question: 'Cử động co thắt lưu động (phức hợp vận động di trú) của ống tiêu hóa xảy ra trong hoàn cảnh nào và có vai trò gì?',
    options: [
      'Giữa các bữa ăn, khi ống tiêu hóa trống, có vai trò quét sạch các chất cặn và vi khuẩn còn sót',
      'Ngay sau khi ăn, có vai trò nhào trộn thức ăn với dịch tiêu hóa',
      'Chỉ xảy ra ở đại tràng, có vai trò tống phân',
      'Chỉ xảy ra khi có dưỡng trấp acid ở tá tràng, có vai trò trung hòa acid'
    ],
    correctAnswer: 0,
    explanation: 'Cử động co thắt lưu động xuất hiện giữa các bữa ăn, khi ống tiêu hóa trống, có vai trò “dọn dẹp” các chất cặn và hạn chế ứ đọng vi khuẩn.',
    source: 'Bài 7 – hoạt động cơ học'
  },
  {
    id: 28,
    category: 'SINH LÝ',
    question: 'Dưỡng trấp di chuyển trong lòng đại tràng với vận tốc khoảng bao nhiêu?',
    options: [
      '5 cm/giờ, có khi mất tới 48 giờ để đi hết đại tràng',
      '5 cm/phút, mất khoảng 4 giờ để đi hết đại tràng',
      '1 cm/giây, mất khoảng 30 phút để đi hết đại tràng',
      '20 cm/giờ, mất khoảng 6 giờ để đi hết đại tràng'
    ],
    correctAnswer: 0,
    explanation: 'Dưỡng trấp đi trong đại tràng với vận tốc chậm khoảng 5 cm/giờ, có khi mất 48 giờ để đi hết đại tràng – điều kiện để hấp thu nước và điện giải.',
    source: 'Bài 7, tr. 66'
  },
  {
    id: 29,
    category: 'SINH LÝ',
    question: 'Một bệnh nhân nam 58 tuổi đái tháo đường típ 2 đã 15 năm, kiểm soát đường huyết kém, đến khám vì đầy bụng, no sớm và thỉnh thoảng nôn ra thức ăn của bữa trước. Nội soi dạ dày – tá tràng: còn thức ăn ứ đọng nhưng không thấy hẹp, không thấy u. Cơ chế nào giải thích tốt nhất triệu chứng của bệnh nhân?',
    options: [
      'Tổn thương thần kinh tự chủ làm rối loạn sóng chậm và nhu động, giảm khả năng tống thức ăn của hang vị',
      'Tăng tiết gastrin mạn tính làm co thắt cơ vòng môn vị',
      'Mất hoàn toàn cơ thắt thực quản dưới gây trào ngược liên tục',
      'Tăng hoạt động của phản xạ dạ dày – ruột làm đẩy thức ăn ngược lên'
    ],
    correctAnswer: 0,
    explanation: 'Bệnh cảnh liệt dạ dày do đái tháo đường: bệnh thần kinh tự chủ làm rối loạn sóng chậm và nhu động hang vị, gây ứ đọng thức ăn mà không có tắc nghẽn cơ học.',
    source: 'Bài 7 – rối loạn vận động ống tiêu hóa'
  },
  {
    id: 30,
    category: 'SINH LÝ',
    question: 'Sau một bữa ăn nhiều dầu mỡ, thức ăn ở lại dạ dày lâu hơn hẳn so với bữa ăn giàu tinh bột. Cơ chế chính là gì?',
    options: [
      'Acid béo ở tá tràng kích thích tiết CCK và khởi động phản xạ ruột – dạ dày làm chậm sự tống thức ăn',
      'Lipid làm tăng trực tiếp trương lực cơ thắt thực quản dưới',
      'Lipid làm tăng tần số sóng chậm ở hang vị nên môn vị đóng liên tục',
      'Lipid ức chế bài tiết secretin nên dịch tụy không được tiết ra'
    ],
    correctAnswer: 0,
    explanation: 'Acid béo và dưỡng trấp trong tá tràng kích thích tiết CCK và khởi động phản xạ ruột – dạ dày, làm chậm sự tống thức ăn để dưỡng trấp được tiêu hóa kịp.',
    source: 'Bài 7 – điều hòa sự thoát thức ăn; Bài 23'
  },
  {
    id: 31,
    category: 'SINH LÝ',
    question: 'Khi phân được đẩy vào trực tràng, đáp ứng nào sau đây xảy ra?',
    options: [
      'Trực tràng co thắt kèm giãn cơ thắt hậu môn trong, trong khi cơ thắt hậu môn ngoài vẫn co theo ý muốn cho đến khi thuận tiện',
      'Trực tràng giãn ra và cả hai cơ thắt hậu môn cùng co để giữ phân',
      'Cơ thắt hậu môn ngoài giãn tự động trước, cơ thắt trong co lại',
      'Cơ nâng hậu môn co làm đóng hoàn toàn ống hậu môn cho đến khi có cử động toàn thể kế tiếp'
    ],
    correctAnswer: 0,
    explanation: 'Phân vào trực tràng gây phản xạ co thắt trực tràng và giãn cơ thắt hậu môn trong (cơ trơn); cơ thắt hậu môn ngoài là cơ vân, được điều khiển tự ý nên có thể trì hoãn.',
    source: 'Bài 7, tr. 66'
  },
  {
    id: 32,
    category: 'SINH LÝ',
    question: 'Nhóm nào sau đây là các acid béo thiết yếu mà cơ thể người không tự tổng hợp được?',
    options: [
      'Acid linoleic, acid linolenic và acid arachidonic',
      'Acid palmitic, acid stearic và acid oleic',
      'Acid butyric, acid propionic và acid acetic',
      'Acid cholic, acid chenodeoxycholic và acid lithocholic'
    ],
    correctAnswer: 0,
    explanation: 'Ba acid béo thiết yếu là acid linoleic, acid linolenic và acid arachidonic.',
    source: 'Bài 16, tr. 165'
  },
  {
    id: 33,
    category: 'SINH LÝ',
    question: 'Hiện tượng nhũ tương hóa lipid trong lòng ruột được thực hiện chủ yếu nhờ yếu tố nào?',
    options: [
      'Muối mật và lecithin là những phân tử lưỡng cực, làm giảm sức căng bề mặt các hạt mỡ',
      'Lipase tụy cắt trực tiếp triglyceride thành các hạt mỡ nhỏ',
      'Bicarbonate của dịch tụy trung hòa acid làm mỡ tự tan',
      'Amylase nước bọt bao quanh hạt mỡ tạo lớp áo ưa nước'
    ],
    correctAnswer: 0,
    explanation: 'Muối mật và lecithin là phân tử lưỡng cực, bám lên hạt mỡ làm giảm sức căng bề mặt nên các hạt mỡ không tụ lại – đó là sự nhũ tương hóa.',
    source: 'Bài 16, tr. 165'
  },
  {
    id: 34,
    category: 'SINH LÝ',
    question: 'Một bệnh nhân viêm tụy mạn do rượu bị tiêu phân mỡ, được kê men tụy uống theo bữa ăn nhưng sau 3 tuần vẫn còn tiêu phân mỡ dù đã dùng đúng liều. Bác sĩ quyết định phối hợp thêm một thuốc ức chế bơm proton và triệu chứng cải thiện. Cơ sở sinh lý của quyết định này là gì?',
    options: [
      'Tụy mạn giảm tiết bicarbonate nên tá tràng còn acid, làm bất hoạt lipase vốn hoạt động tối ưu ở pH 7 – 8',
      'Thuốc ức chế bơm proton làm tăng tiết muối mật để nhũ tương hóa mỡ',
      'Acid dạ dày làm tăng nhu động ruột khiến men không kịp tác dụng',
      'Thuốc ức chế bơm proton trực tiếp thủy phân triglyceride thành acid béo'
    ],
    correctAnswer: 0,
    explanation: 'Lipase tụy hoạt động tối ưu ở pH 7 – 8. Viêm tụy mạn làm giảm cả men lẫn bicarbonate, tá tràng còn acid sẽ bất hoạt men bổ sung; nâng pH bằng thuốc ức chế bơm proton giúp men phát huy tác dụng.',
    source: 'Bài 8, tr. 78; Bài 16, tr. 165'
  },
  {
    id: 35,
    category: 'SINH LÝ',
    question: 'Vì sao uống vitamin C cùng lúc giúp tăng hấp thu sắt từ thức ăn?',
    options: [
      'Vì vitamin C khử Fe³⁺ thành Fe²⁺ là dạng được hấp thu dễ hơn',
      'Vì vitamin C gắn với sắt tạo phức tan được hấp thu nguyên vẹn',
      'Vì vitamin C kích thích tổng hợp transferrin ở tế bào ruột',
      'Vì vitamin C làm tăng pH tá tràng giúp sắt hòa tan'
    ],
    correctAnswer: 0,
    explanation: 'Fe²⁺ được hấp thu dễ hơn Fe³⁺; vitamin C khử Fe³⁺ thành Fe²⁺ nên hỗ trợ hấp thu sắt.',
    source: 'Bài 16, tr. 171'
  },
  {
    id: 36,
    category: 'SINH LÝ',
    question: 'Một bệnh nhân bệnh thận mạn giai đoạn cuối có calci máu thấp kéo dài dù khẩu phần calci đủ và không có bệnh lý ruột. Cơ chế phù hợp nhất là gì?',
    options: [
      'Thận giảm hydroxyl hóa 25-hydroxycholecalciferol thành 1,25-dihydroxycholecalciferol nên ruột giảm tổng hợp kênh vận chuyển calci',
      'Gan không chuyển được cholecalciferol thành 25-hydroxycholecalciferol',
      'Thiếu muối mật làm giảm hấp thu vitamin D ở hồi tràng',
      'Tăng tiết PTH làm tăng thải calci qua ruột'
    ],
    correctAnswer: 0,
    explanation: 'Vitamin D₃ được hydroxyl hóa ở gan thành 25-hydroxycholecalciferol rồi hoạt hóa tại thận thành 1,25-dihydroxycholecalciferol – chất cần cho tổng hợp kênh vận chuyển Ca²⁺ ở ruột. Suy thận làm mất bước hoạt hóa này.',
    source: 'Bài 16, tr. 171'
  },
  {
    id: 37,
    category: 'SINH LÝ',
    question: 'Sắt được dự trữ trong tế bào niêm mạc ruột và được vận chuyển trong máu lần lượt dưới dạng nào?',
    options: [
      'Ferritin trong tế bào và transferrin trong máu',
      'Transferrin trong tế bào và ferritin trong máu',
      'Hemosiderin trong tế bào và haptoglobin trong máu',
      'Apoferritin trong tế bào và albumin trong máu'
    ],
    correctAnswer: 0,
    explanation: 'Trong tế bào niêm mạc ruột, sắt kết hợp apoferritin tạo ferritin để dự trữ; trong máu, sắt được chuyên chở bởi transferrin.',
    source: 'Bài 16, tr. 171; Bài 18, tr. 196'
  },
  {
    id: 38,
    category: 'SINH LÝ',
    question: 'Mỗi ngày gan bài tiết khoảng bao nhiêu mL dịch mật vào ống tiêu hóa?',
    options: [
      '100 mL',
      '500 mL',
      '1.500 mL',
      '3.000 mL'
    ],
    correctAnswer: 1,
    explanation: 'Mỗi ngày: nước bọt khoảng 1.500 mL, dịch tụy 1.500 mL, dịch mật 500 mL, bài tiết ruột non 1.000 mL.',
    source: 'Bài 16, tr. 168'
  },
  {
    id: 39,
    category: 'SINH LÝ',
    question: 'Lượng nước mà đại tràng hấp thu mỗi ngày ở người bình thường khoảng:',
    options: [
      '1.900 mL',
      '7.000 mL',
      '500 mL',
      '100 mL'
    ],
    correctAnswer: 0,
    explanation: 'Ruột non hấp thu khoảng 7.000 mL/ngày, đại tràng hấp thu thêm khoảng 1.900 mL, chỉ còn khoảng 100 mL theo phân.',
    source: 'Bài 16, tr. 168'
  },
  {
    id: 40,
    category: 'SINH LÝ',
    question: 'Một bé 2 tuổi tiêu chảy cấp, người nhà không cho uống ORS mà cho uống nhiều nước ngọt có gas và nước trái cây đóng hộp. Sau một ngày, bé đi tiêu nhiều hơn và mất nước nặng hơn. Cơ chế của tình trạng xấu đi này là gì?',
    options: [
      'Lượng đường cao không được hấp thu hết làm tăng áp lực thẩm thấu trong lòng ruột, kéo thêm nước vào lòng ruột',
      'Đường trong nước ngọt ức chế bơm Na⁺-K⁺-ATPase của tế bào hấp thu',
      'CO₂ trong nước có gas làm tăng nhu động do kích thích cơ học',
      'Nước trái cây làm giảm nồng độ Na⁺ lòng ruột nên glucose không được hấp thu'
    ],
    correctAnswer: 0,
    explanation: 'Lượng đường cao vượt khả năng hấp thu làm tăng độ thẩm thấu trong lòng ruột, kéo nước vào lòng ruột và làm tiêu chảy nặng thêm – lý do không dùng nước ngọt thay ORS.',
    source: 'Bài 17, tr. 176'
  },
  {
    id: 41,
    category: 'SINH LÝ',
    question: 'Một bệnh nhân nữ 34 tuổi tiêu chảy 5 – 7 lần/ngày trong 3 tháng, phân nhiều nước, không máu, không sốt. Trong thời gian nhịn ăn hoàn toàn 48 giờ để chuẩn bị nội soi, bệnh nhân hết tiêu chảy; ăn lại thì tiêu chảy tái phát. Cơ chế nào phù hợp nhất?',
    options: [
      'Tiêu chảy thẩm thấu do chất tan không hấp thu được trong khẩu phần',
      'Tiêu chảy tiết dịch do độc tố hoặc hormone kích thích bài tiết',
      'Tiêu chảy do viêm làm thoát dịch rỉ viêm vào lòng ruột',
      'Tiêu chảy do rối loạn vận động làm tăng nhu động'
    ],
    correctAnswer: 0,
    explanation: 'Đặc điểm phân biệt kinh điển: tiêu chảy thẩm thấu giảm hoặc hết khi nhịn ăn (vì mất chất tan gây thẩm thấu), còn tiêu chảy tiết dịch vẫn tiếp diễn dù nhịn ăn.',
    source: 'Bài 17, tr. 176'
  },
  {
    id: 42,
    category: 'SINH LÝ',
    question: 'Một bệnh nhân sau phẫu thuật cắt bỏ đoạn dài ruột non, hiện mở thông hồi tràng ra da với lưu lượng dịch 2.500 mL/ngày. Khí máu động mạch: pH 7,29; HCO₃⁻ 15 mmol/L; khoảng trống anion bình thường; Cl⁻ máu tăng. Giải thích phù hợp nhất là:',
    options: [
      'Mất một lượng lớn dịch ruột giàu bicarbonate gây toan chuyển hóa tăng clo máu',
      'Ứ đọng acid lactic do giảm tưới máu ruột gây toan tăng khoảng trống anion',
      'Mất HCl qua dịch ruột gây kiềm chuyển hóa bù trừ',
      'Tăng thải K⁺ qua hậu môn nhân tạo gây kiềm chuyển hóa hạ kali'
    ],
    correctAnswer: 0,
    explanation: 'Dịch ruột non giàu bicarbonate; mất lượng lớn qua hậu môn nhân tạo gây toan chuyển hóa với khoảng trống anion bình thường và tăng clo máu.',
    source: 'Bài 16 – xuất tiết và hấp thu điện giải; Bài 17'
  },
  {
    id: 43,
    category: 'SINH LÝ',
    question: 'Theo định nghĩa, tiêu chảy là tình trạng:',
    options: [
      'Đi tiêu phân lỏng từ 3 lần/ngày trở lên với lượng phân trên 200 g/ngày',
      'Đi tiêu phân lỏng từ 2 lần/ngày trở lên với lượng phân trên 100 g/ngày',
      'Đi tiêu bất kỳ số lần nào nhưng phân không thành khuôn trong trên 4 tuần',
      'Đi tiêu từ 5 lần/ngày trở lên kèm mất nước trên 5% trọng lượng cơ thể'
    ],
    correctAnswer: 0,
    explanation: 'Tiêu chảy: đi tiêu phân lỏng ≥ 3 lần/ngày với lượng phân > 200 g/ngày; cấp < 2 tuần, dai dẳng 2 – 4 tuần, mạn > 4 tuần.',
    source: 'Bài 17, tr. 176'
  },
  {
    id: 44,
    category: 'SINH LÝ',
    question: 'Secretin được bài tiết bởi tế bào nào, do kích thích gì và gây tác dụng chính nào?',
    options: [
      'Tế bào S ở niêm mạc tá tràng, khi dưỡng trấp acid xuống tá tràng, kích thích tế bào ống tụy bài tiết bicarbonate',
      'Tế bào G ở hang vị, khi có peptid trong dạ dày, kích thích tế bào nang tụy tiết men',
      'Tế bào I ở hỗng tràng, khi có acid béo, gây co bóp túi mật',
      'Tế bào D ở tá tràng, khi pH tăng, ức chế bài tiết dịch tụy'
    ],
    correctAnswer: 0,
    explanation: 'Secretin do tế bào S của niêm mạc tá tràng tiết ra khi dưỡng trấp acid xuống tá tràng, kích thích tế bào ống tụy và ống mật bài tiết nước và bicarbonate.',
    source: 'Bài 8, tr. 78 – 81; Bài 23, tr. 240'
  },
  {
    id: 45,
    category: 'SINH LÝ',
    question: 'Trong một nghiên cứu, người tình nguyện được uống 50 g glucose và, trong lần khác, được truyền tĩnh mạch glucose sao cho đường huyết tăng y hệt. Kết quả: nồng độ insulin máu sau đường uống cao hơn hẳn. Chất nào giải thích tốt nhất sự khác biệt này?',
    options: [
      'GIP được tiết khi có glucose trong lòng ruột, kích thích tế bào beta tiết insulin trước cả khi đường huyết tăng',
      'Secretin được tiết khi glucose vào tá tràng, trực tiếp kích thích tế bào beta',
      'Gastrin được tiết do glucose làm căng dạ dày, kích thích tế bào beta',
      'Somatostatin giảm tiết khi glucose vào ruột, làm mất ức chế tế bào beta'
    ],
    correctAnswer: 0,
    explanation: 'GIP (peptide phụ thuộc glucose có ái lực với insulin) được tiết khi có glucose trong lòng ruột và kích thích tế bào beta tiết insulin – hiệu ứng incretin, giải thích vì sao đường uống gây tiết insulin nhiều hơn đường truyền tĩnh mạch.',
    source: 'Bài 23, tr. 240'
  },
  {
    id: 46,
    category: 'SINH LÝ',
    question: 'Đặc điểm nào sau đây đúng về hệ thần kinh nội tại (thần kinh ruột) của ống tiêu hóa?',
    options: [
      'Có thể duy trì các phản xạ tại chỗ và nhu động ngay cả khi các sợi thần kinh ngoại lai bị cắt',
      'Chỉ gồm các sợi hướng tâm truyền cảm giác đau về tủy sống',
      'Chỉ hoạt động khi có xung động từ dây X truyền xuống',
      'Nằm hoàn toàn trong lớp thanh mạc và không liên hệ với lớp cơ'
    ],
    correctAnswer: 0,
    explanation: 'Hệ thần kinh nội tại (đám rối thần kinh cơ và đám rối dưới niêm) có thể tự tạo các phản xạ tại chỗ, duy trì nhu động và bài tiết ngay cả khi mất chi phối thần kinh ngoại lai.',
    source: 'Bài 23, tr. 240'
  },

  // --- VI SINH (47 - 49) ---
  {
    id: 47,
    category: 'VI SINH',
    question: 'Cơ chế nào giúp hệ vi khuẩn thường trú bảo vệ ký chủ chống lại vi khuẩn gây bệnh?',
    options: [
      'Chiếm chỗ bám trên niêm mạc, cạnh tranh dinh dưỡng, tạo môi trường acid và tiết bacteriocin',
      'Thực bào trực tiếp các vi khuẩn gây bệnh trong lòng ruột',
      'Tiết kháng thể IgA vào lòng ruột để trung hòa độc tố',
      'Phá hủy lớp chất nhầy để vi khuẩn gây bệnh không bám được'
    ],
    correctAnswer: 0,
    explanation: 'Vi khuẩn thường trú bảo vệ ký chủ bằng cách chiếm chỗ bám và dinh dưỡng, tạo môi trường acid, tiết bacteriocin/colicin và kích thích miễn dịch tại chỗ.',
    source: 'Bài 20, tr. 217'
  },
  {
    id: 48,
    category: 'VI SINH',
    question: 'Một phụ nữ 25 tuổi khỏe mạnh bị nhiễm trùng tiểu, cấy nước tiểu mọc Escherichia coli. Kết quả này minh họa điều gì về hệ vi khuẩn thường trú?',
    options: [
      'Vi khuẩn thường trú của đại tràng có thể gây bệnh khi đến vị trí khác trong cơ thể',
      'Escherichia coli không bao giờ là vi khuẩn thường trú của đường ruột',
      'Hệ vi khuẩn thường trú luôn có độc lực cao hơn vi khuẩn ngoại lai',
      'Nhiễm trùng tiểu chứng tỏ bệnh nhân bị loạn khuẩn nặng ở ruột'
    ],
    correctAnswer: 0,
    explanation: 'Vi khuẩn thường trú có thể gây bệnh khi “đi lạc chỗ”: E. coli từ đại tràng đi ngược lên niệu đạo gây nhiễm khuẩn tiết niệu – ví dụ kinh điển của bất lợi do hệ vi khuẩn thường trú.',
    source: 'Bài 20, tr. 217'
  },
  {
    id: 49,
    category: 'VI SINH',
    question: 'Đặc tính sinh men urease của Helicobacter pylori được ứng dụng trong những phương pháp chẩn đoán nào?',
    options: [
      'Test urease nhanh trên mẫu sinh thiết và test hơi thở urê',
      'Huyết thanh chẩn đoán và tìm kháng nguyên trong phân',
      'Nuôi cấy trong môi trường vi hiếu khí và nhuộm Giemsa',
      'Test hơi thở urê và huyết thanh chẩn đoán'
    ],
    correctAnswer: 0,
    explanation: 'Urease của H. pylori là cơ sở của test urease nhanh trên mẫu sinh thiết và test hơi thở urê; huyết thanh chẩn đoán và kháng nguyên phân dựa trên nguyên lý khác.',
    source: 'Bài 21, tr. 226'
  },

  // --- DƯỢC LÝ (50 - 56) ---
  {
    id: 50,
    category: 'DƯỢC LÝ',
    question: 'Một bệnh nhân được kê ciprofloxacin điều trị nhiễm trùng và đang tự dùng thêm một thuốc kháng acid chứa Al(OH)₃ – Mg(OH)₂ ngay sau mỗi liều kháng sinh. Sau 3 ngày, tình trạng nhiễm trùng không cải thiện. Nguyên nhân hợp lý nhất là:',
    options: [
      'Cation kim loại trong thuốc kháng acid tạo phức với kháng sinh và việc thay đổi pH dạ dày làm giảm hấp thu kháng sinh',
      'Thuốc kháng acid phá hủy trực tiếp phân tử kháng sinh trong máu',
      'Thuốc kháng acid làm tăng chuyển hóa kháng sinh ở gan qua CYP3A4',
      'Thuốc kháng acid làm tăng thải kháng sinh qua mật'
    ],
    correctAnswer: 0,
    explanation: 'Thuốc kháng acid tạo phức với tetracyclin, fluoroquinolon, itraconazol và sắt, đồng thời làm thay đổi pH dạ dày ảnh hưởng hấp thu; nên uống cách nhau ít nhất 2 giờ.',
    source: 'Bài 10, tr. 103'
  },
  {
    id: 51,
    category: 'DƯỢC LÝ',
    question: 'Cách dùng hợp lý của nhóm thuốc kháng acid (antacid) là:',
    options: [
      'Uống sau ăn 1 – 2 giờ hoặc trước ăn 30 phút, 3 – 4 lần/ngày và trước khi ngủ',
      'Uống một lần duy nhất vào buổi sáng lúc đói',
      'Uống cùng lúc với bữa ăn để trung hòa acid ngay khi được tiết ra',
      'Chỉ uống khi có cơn đau, không quá 1 lần/ngày'
    ],
    correctAnswer: 0,
    explanation: 'Antacid nên uống sau ăn 1 – 2 giờ hoặc trước ăn 30 phút, liều trung bình 3 – 4 lần/ngày vào sau các bữa ăn chính và trước khi ngủ.',
    source: 'Bài 10, tr. 103'
  },
  {
    id: 52,
    category: 'DƯỢC LÝ',
    question: 'Một bệnh nhân bệnh thận mạn (độ lọc cầu thận 20 mL/phút) tự dùng thuốc kháng acid chứa magne hydroxit nhiều lần mỗi ngày trong 2 tháng, nay vào viện vì buồn nôn, yếu cơ, giảm phản xạ gân xương và tụt huyết áp. Cơ chế của tình trạng này là:',
    options: [
      'Magne được hấp thu một phần nhưng thải trừ qua thận, nên tích tụ gây tăng magne máu ở bệnh nhân suy thận',
      'Nhôm gắn phospho ở ruột gây hạ phospho máu cấp tính',
      'Thuốc kháng acid gây kiềm chuyển hóa nặng dẫn đến hạ calci ion hóa',
      'Magne hydroxit gây tiêu chảy thẩm thấu dẫn đến mất natri nặng'
    ],
    correctAnswer: 0,
    explanation: 'Cả Mg và Al đều được hấp thu một phần và thải trừ qua thận; bệnh nhân suy thận dùng kéo dài sẽ tích tụ, tăng magne máu gây yếu cơ, giảm phản xạ và tụt huyết áp.',
    source: 'Bài 10, tr. 103'
  },
  {
    id: 53,
    category: 'DƯỢC LÝ',
    question: 'Đặc điểm nào sau đây đúng với nhóm thuốc kháng thụ thể H₂?',
    options: [
      'Ức chế cạnh tranh tại thụ thể H₂ của tế bào thành, tác dụng phụ thuộc liều và có thể bị dung nạp khi dùng kéo dài',
      'Ức chế không hồi phục bơm H⁺/K⁺-ATPase nên tác dụng kéo dài 24 – 48 giờ',
      'Chỉ tác dụng tại chỗ trên niêm mạc, không hấp thu vào máu',
      'Không ảnh hưởng đến tiết acid ban đêm vì tiết acid ban đêm không qua histamin'
    ],
    correctAnswer: 0,
    explanation: 'Kháng H₂ ức chế cạnh tranh trên thụ thể H₂ của tế bào thành, tác dụng phụ thuộc liều; dùng kéo dài có thể xuất hiện hiện tượng dung nạp thuốc. Ức chế không hồi phục bơm proton là đặc điểm của PPI.',
    source: 'Bài 10, tr. 103 – 106'
  },
  {
    id: 54,
    category: 'DƯỢC LÝ',
    question: 'Một bệnh nhân vừa đặt stent mạch vành đang dùng aspirin và clopidogrel, có tiền căn xuất huyết tiêu hóa nên cần một thuốc ức chế bơm proton lâu dài. Lựa chọn nào hợp lý nhất và vì sao?',
    options: [
      'Pantoprazole, vì ít ức chế CYP2C19 nên ít làm giảm hoạt hóa clopidogrel',
      'Omeprazole, vì ức chế CYP2C19 mạnh giúp tăng nồng độ clopidogrel',
      'Cimetidine, vì không qua chuyển hóa gan',
      'Không dùng thuốc nào, vì mọi thuốc giảm tiết acid đều làm mất tác dụng clopidogrel'
    ],
    correctAnswer: 0,
    explanation: 'PPI chuyển hóa qua CYP2C19 và CYP3A4; omeprazole ức chế CYP2C19 mạnh làm giảm hoạt hóa clopidogrel (tiền chất), nên pantoprazole được ưu tiên.',
    source: 'Bài 10, tr. 106'
  },
  {
    id: 55,
    category: 'DƯỢC LÝ',
    question: 'Trong phác đồ tiệt trừ Helicobacter pylori, vì sao bắt buộc phải phối hợp thuốc ức chế bơm proton với kháng sinh (amoxicillin, clarithromycin)?',
    options: [
      'Vì nâng pH dạ dày giúp kháng sinh ổn định, đạt nồng độ tác dụng và diệt được vi khuẩn đang phân chia',
      'Vì thuốc ức chế bơm proton tự nó diệt được H. pylori nên rút ngắn thời gian dùng kháng sinh',
      'Vì kháng sinh chỉ hấp thu được khi dạ dày có pH dưới 2',
      'Vì thuốc ức chế bơm proton ngăn kháng sinh gây loét thêm niêm mạc'
    ],
    correctAnswer: 0,
    explanation: 'Hiệu lực của amoxicillin và clarithromycin trên H. pylori tăng rõ khi pH dạ dày được nâng lên (vùng pH 6 – 7); PPI vừa nâng pH vừa làm vi khuẩn chuyển sang trạng thái phân chia – trạng thái nhạy kháng sinh.',
    source: 'Bài 21, tr. 226'
  },
  {
    id: 56,
    category: 'DƯỢC LÝ',
    question: 'Thuốc nào sau đây thuộc nhóm đồng vận somatostatin, được dùng trong những trường hợp tiêu chảy tiết dịch nặng?',
    options: [
      'Octreotide',
      'Diphenoxylate',
      'Carboxymethylcellulose',
      'Diiodohydroxyquinoline'
    ],
    correctAnswer: 0,
    explanation: 'Octreotide là chất đồng vận somatostatin, nằm trong nhóm thuốc chống tiêu chảy không đặc hiệu, dùng cho tiêu chảy tiết dịch nặng.',
    source: 'Bài 17, tr. 181'
  },

  // --- CHẨN ĐOÁN HÌNH ẢNH (57 - 61) ---
  {
    id: 57,
    category: 'CHẨN ĐOÁN HÌNH ẢNH',
    question: 'Trên hình ảnh học, mặt phẳng đi qua cấu trúc nào chia gan thành gan phải và gan trái?',
    options: [
      'Tĩnh mạch gan giữa',
      'Dây chằng liềm',
      'Tĩnh mạch gan phải',
      'Ngành phải của tĩnh mạch cửa'
    ],
    correctAnswer: 0,
    explanation: 'Mặt phẳng qua tĩnh mạch gan giữa (đi từ hố túi mật đến tĩnh mạch chủ dưới) chia gan thành gan phải và gan trái theo phân chia phẫu thuật.',
    source: 'Bài 11, tr. 116; Bài 13'
  },
  {
    id: 58,
    category: 'CHẨN ĐOÁN HÌNH ẢNH',
    question: 'Một bệnh nhân đau hạ sườn phải, vàng da nhẹ. Siêu âm bụng thấy nhiều sỏi túi mật, ống mật chủ giãn 10 mm nhưng không thấy sỏi trong ống mật chủ. Nhận định nào đúng nhất?',
    options: [
      'Siêu âm rất nhạy với sỏi túi mật nhưng kém nhạy với sỏi ống mật chủ đoạn thấp do hơi ruột che, cần khảo sát thêm bằng MRCP',
      'Không thấy sỏi trên siêu âm đủ để loại trừ sỏi ống mật chủ',
      'Ống mật chủ giãn 10 mm là bình thường ở người chưa cắt túi mật',
      'Cần chụp X quang bụng không sửa soạn để tìm sỏi vì đa số sỏi mật cản quang'
    ],
    correctAnswer: 0,
    explanation: 'Siêu âm có độ nhạy rất cao với sỏi túi mật nhưng hạn chế ở đoạn xa ống mật chủ do hơi ruột; ống mật chủ giãn kèm vàng da đòi hỏi khảo sát thêm (MRCP) dù siêu âm không thấy sỏi.',
    source: 'Bài 13, tr. 139'
  },
  {
    id: 59,
    category: 'CHẨN ĐOÁN HÌNH ẢNH',
    question: 'Một bệnh nhân nam 68 tuổi vàng da tăng dần, sụt cân. Chụp cộng hưởng từ đường mật – tụy thấy giãn cả ống mật chủ lẫn ống tụy chính, cắt cụt đột ngột ở vùng đầu tụy. Dấu hiệu này gợi ý điều gì nhất?',
    options: [
      'Khối u vùng đầu tụy hoặc bóng gan tụy chèn ép cả hai ống',
      'Sỏi kẹt ở ống túi mật gây ứ mật ngược dòng',
      'Viêm tụy cấp thể phù gây chèn ép tạm thời',
      'Xơ gan gây chèn ép đường mật trong gan'
    ],
    correctAnswer: 0,
    explanation: 'Giãn đồng thời ống mật chủ và ống tụy chính với cắt cụt ở đầu tụy (“dấu hai ống”) gợi ý mạnh khối u vùng đầu tụy hoặc bóng gan tụy.',
    source: 'Bài 13 – hình ảnh học gan mật tụy'
  },
  {
    id: 60,
    category: 'CHẨN ĐOÁN HÌNH ẢNH',
    question: 'Trên siêu âm, dấu hiệu nào giúp phân biệt các nhánh tĩnh mạch cửa với các tĩnh mạch gan?',
    options: [
      'Thành tĩnh mạch cửa tăng âm rõ do có bao xơ quanh cửa bao bọc',
      'Tĩnh mạch cửa không bao giờ thấy được trên siêu âm',
      'Tĩnh mạch gan luôn có thành tăng âm dày hơn tĩnh mạch cửa',
      'Tĩnh mạch cửa đổ trực tiếp vào tĩnh mạch chủ dưới ngay dưới cơ hoành'
    ],
    correctAnswer: 0,
    explanation: 'Các nhánh tĩnh mạch cửa có thành tăng âm rõ do được bao bọc bởi bao xơ quanh cửa, khác với tĩnh mạch gan có thành mỏng, không tăng âm.',
    source: 'Bài 13, tr. 134 – 139'
  },
  {
    id: 61,
    category: 'CHẨN ĐOÁN HÌNH ẢNH',
    question: 'Một bệnh nhân nam 45 tuổi đau bụng đột ngột dữ dội vùng thượng vị, bụng gồng cứng như gỗ. X quang bụng đứng không sửa soạn thấy hình liềm sáng dưới vòm hoành phải. Hình ảnh này tương ứng với tình trạng nào?',
    options: [
      'Hơi tự do trong ổ phúc mạc do thủng tạng rỗng',
      'Hơi trong đường mật do rò mật – ruột',
      'Bóng hơi đại tràng bị kẹt dưới hoành, không có giá trị bệnh lý',
      'Tràn khí màng phổi phải lan xuống dưới hoành'
    ],
    correctAnswer: 0,
    explanation: 'Liềm hơi dưới vòm hoành trên phim bụng đứng là dấu hiệu hơi tự do trong ổ phúc mạc, chỉ điểm thủng tạng rỗng (ở bệnh nhân này là thủng ổ loét dạ dày – tá tràng).',
    source: 'Bài 13 – X quang bụng không sửa soạn'
  },

  // --- GIẢI PHẪU BỆNH (62 - 66) ---
  {
    id: 62,
    category: 'GIẢI PHẪU BỆNH',
    question: 'Trên mẫu sinh thiết niêm mạc hang vị, hình ảnh các nang lympho (có tâm mầm) xuất hiện trong lớp đệm có ý nghĩa gì?',
    options: [
      'Gợi ý nhiễm Helicobacter pylori và là nền của u lympho tế bào B vùng rìa (MALT)',
      'Là cấu trúc bình thường luôn hiện diện ở niêm mạc hang vị',
      'Đặc trưng cho viêm dạ dày tự miễn giai đoạn sớm',
      'Là dấu hiệu chắc chắn của carcinom dạ dày giai đoạn sớm'
    ],
    correctAnswer: 0,
    explanation: 'Bình thường niêm mạc dạ dày không có nang lympho; sự xuất hiện của chúng gắn với nhiễm H. pylori và là nền phát sinh u lympho MALT.',
    source: 'Bài 9; Bài 21'
  },
  {
    id: 63,
    category: 'GIẢI PHẪU BỆNH',
    question: 'Một bệnh nhân nam 60 tuổi xơ gan do viêm gan siêu vi B, tái khám định kỳ. Siêu âm phát hiện một nốt đường kính 3 cm ở hạ phân thùy VI, AFP tăng cao; CT có cản quang thấy khối bắt thuốc mạnh ở thì động mạch và thải thuốc nhanh ở thì tĩnh mạch. Chẩn đoán phù hợp nhất là:',
    options: [
      'Carcinom tế bào gan',
      'Nang gan đơn thuần',
      'Áp xe gan do vi khuẩn',
      'Nốt tái tạo lành tính không cần theo dõi'
    ],
    correctAnswer: 0,
    explanation: 'Nốt trên nền xơ gan, AFP tăng, bắt thuốc thì động mạch và thải thuốc thì tĩnh mạch là bộ ba điển hình của carcinom tế bào gan.',
    source: 'Bài 15 – bệnh lý gan; Bài 13'
  },
  {
    id: 64,
    category: 'GIẢI PHẪU BỆNH',
    question: 'Một bệnh nhân nam 40 tuổi uống rượu nhiều năm, khám thấy gan to, men gan tăng nhẹ, siêu âm gan nhiễm mỡ; bệnh nhân ngưng rượu hoàn toàn và sau 6 tháng gan trở về kích thước bình thường, men gan bình thường. Điều này minh họa đặc điểm nào của bệnh gan do rượu?',
    options: [
      'Giai đoạn gan nhiễm mỡ có thể hồi phục hoàn toàn nếu ngưng rượu, khác với giai đoạn xơ gan',
      'Gan nhiễm mỡ do rượu luôn tiến triển thành xơ gan bất kể ngưng rượu',
      'Sự hồi phục chứng tỏ bệnh nhân chưa từng có tổn thương tế bào gan',
      'Xơ hóa ở khoảng cửa có thể tự tiêu hoàn toàn trong vài tuần'
    ],
    correctAnswer: 0,
    explanation: 'Bệnh gan do rượu tiến triển qua ba giai đoạn: gan nhiễm mỡ (hồi phục được nếu ngưng rượu) → viêm gan do rượu → xơ gan (không hồi phục).',
    source: 'Bài 15, tr. 155 – 156'
  },
  {
    id: 65,
    category: 'GIẢI PHẪU BỆNH',
    question: 'So với viêm tụy cấp thể phù, viêm tụy cấp thể hoại tử xuất huyết khác biệt chủ yếu ở đặc điểm nào?',
    options: [
      'Có hoại tử nhu mô tụy kèm xuất huyết và hoại tử mỡ lan rộng ra mô quanh tụy',
      'Nhu mô tụy xơ hóa chắc và các nang tuyến bị teo nhỏ',
      'Tăng số lượng tiểu đảo tụy trong nhu mô còn lại',
      'Chỉ có phù mô kẽ, không kèm thấm nhập tế bào viêm'
    ],
    correctAnswer: 0,
    explanation: 'Thể hoại tử xuất huyết có hoại tử nhu mô tụy, xuất huyết và hoại tử mỡ lan rộng quanh tụy; thể phù chỉ có phù nề và thấm nhập viêm, tiên lượng tốt hơn nhiều.',
    source: 'Bài 15 – viêm tụy cấp'
  },
  {
    id: 66,
    category: 'GIẢI PHẪU BỆNH',
    question: 'Hình ảnh mô học của niêm mạc ruột non trong tiêu chảy cấp do virus (ví dụ Rotavirus) là:',
    options: [
      'Nhung mao teo ngắn, tù đầu, tăng sinh tế bào hốc tuyến',
      'Loét sâu xuyên lớp cơ niêm kèm hoại tử fibrinoid mạch máu',
      'Thấm nhập bạch cầu đa nhân dày đặc tạo các áp xe hốc tuyến lan tỏa',
      'Chuyển sản tế bào gai ở biểu mô nhung mao'
    ],
    correctAnswer: 0,
    explanation: 'Virus phá hủy tế bào hấp thu ở đỉnh nhung mao làm nhung mao teo ngắn, tù đầu, kèm tăng sinh tế bào hốc tuyến để bù trừ – hậu quả là kém hấp thu và tiêu chảy.',
    source: 'Bài 9 – giải phẫu bệnh tiêu chảy'
  },

  // --- CẬN LÂM SÀNG (67 - 70) ---
  {
    id: 67,
    category: 'CẬN LÂM SÀNG',
    question: 'Giá trị chính của xét nghiệm 5’-nucleotidase trong thực hành lâm sàng là gì?',
    options: [
      'Xác định tình trạng tăng phosphatase kiềm có nguồn gốc từ gan – mật hay không',
      'Phát hiện hoại tử tế bào gan sớm hơn AST và ALT',
      'Đánh giá chức năng tổng hợp của gan thay cho albumin',
      'Xác định mức độ tán huyết ở bệnh nhân vàng da'
    ],
    correctAnswer: 0,
    explanation: '5’-nucleotidase có giá trị chính là xác định tính đặc hiệu gan – mật của tình trạng tăng phosphatase kiềm.',
    source: 'Bài 19, tr. 207'
  },
  {
    id: 68,
    category: 'CẬN LÂM SÀNG',
    question: 'Một thai phụ 30 tuần, khỏe mạnh, không ngứa, không vàng da; xét nghiệm thường quy cho thấy phosphatase kiềm tăng gần gấp đôi giới hạn trên, trong khi GGT, AST, ALT và bilirubin đều bình thường. Nhận định hợp lý nhất là:',
    options: [
      'Phosphatase kiềm tăng có nguồn gốc từ nhau thai, vì GGT không tăng trong thai kỳ bình thường',
      'Bệnh nhân bị ứ mật trong thai kỳ, cần điều trị ngay',
      'Bệnh nhân có tổn thương tế bào gan tiềm ẩn cần sinh thiết gan',
      'Kết quả này chắc chắn do bệnh lý xương kèm theo'
    ],
    correctAnswer: 0,
    explanation: 'GGT không tăng trong thai kỳ bình thường, trong khi phosphatase kiềm tăng do nguồn gốc nhau thai; GGT bình thường kèm men gan và bilirubin bình thường giúp loại trừ bệnh gan mật.',
    source: 'Bài 19, tr. 207'
  },
  {
    id: 69,
    category: 'CẬN LÂM SÀNG',
    question: 'Một bệnh nhân nam 45 tuổi nhập viện vì vàng da và mệt mỏi. Xét nghiệm: AST 1.850 IU/L, ALT 2.240 IU/L, bilirubin toàn phần 6 mg/dL, albumin 40 g/L, INR 1,1. Bệnh nhân khai có uống rượu vài lon bia mỗi tuần và mới dùng một loại thuốc bắc không rõ loại 2 tuần nay. Nhận định nào sau đây hợp lý nhất?',
    options: [
      'Mức tăng men gan rất cao kiểu này phù hợp tổn thương gan cấp do thuốc hoặc siêu vi, không phù hợp bệnh gan do rượu vốn hiếm khi vượt 500 IU/L',
      'Đây là bệnh cảnh điển hình của xơ gan do rượu mất bù',
      'Albumin và INR bình thường loại trừ mọi tổn thương gan cấp',
      'Tỉ số AST/ALT dưới 1 chứng tỏ nguyên nhân do rượu'
    ],
    correctAnswer: 0,
    explanation: 'Aminotransferase tăng trên 1.000 IU/L điển hình cho viêm gan siêu vi cấp, tổn thương gan do thuốc/độc chất hoặc thiếu máu cục bộ; bệnh gan do rượu hiếm khi vượt 500 IU/L và thường có AST/ALT > 2.',
    source: 'Bài 19 – aminotransferase'
  },
  {
    id: 70,
    category: 'CẬN LÂM SÀNG',
    question: 'Vì sao nồng độ bilirubin huyết thanh có độ nhạy thấp trong việc phát hiện sớm rối loạn chức năng gan?',
    options: [
      'Vì gan có khả năng dự trữ chức năng lớn, có thể tăng tốc độ bài tiết bilirubin lên khoảng 10 lần so với bình thường',
      'Vì bilirubin không do gan chuyển hóa mà chủ yếu do thận thải',
      'Vì bilirubin chỉ tăng khi có tán huyết đi kèm',
      'Vì bilirubin gắn albumin nên không đo được chính xác trong máu'
    ],
    correctAnswer: 0,
    explanation: 'Gan có khả năng dự trữ chức năng lớn: tốc độ bài tiết bilirubin tối đa gấp khoảng 10 lần bình thường, nên bilirubin máu chỉ tăng khi tổn thương đã đáng kể.',
    source: 'Bài 19, tr. 204'
  }
];

export const CATEGORIES = [
  'GIẢI PHẪU',
  'MÔ PHÔI',
  'SINH LÝ',
  'VI SINH',
  'DƯỢC LÝ',
  'CHẨN ĐOÁN HÌNH ẢNH',
  'GIẢI PHẪU BỆNH',
  'CẬN LÂM SÀNG'
] as const;
