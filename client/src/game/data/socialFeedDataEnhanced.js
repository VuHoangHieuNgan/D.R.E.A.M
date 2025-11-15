const SOCIAL_FEED_DATA = [
  // Du lịch (travel)
  // --- DU LỊCH (TRAVEL) ---
  { 
    id: 'tr_01', 
    author: 'An Nhiên 🌿', 
    avatar: 'https://i.pravatar.cc/150?u=travel1', 
    content: '"Chữa lành" tại một homestay hidden gem ở Đà Lạt. Sáng cafe, chiều săn mây, tối đốt lửa trại. Hoàn toàn không có khách du lịch ồn ào. Ai cần info không ạ? 🌲☁️ #healing #dalat #hiddengem', 
    image: 'https://dulichviet.com.vn/images/bandidau/nhung-quan-ca-phe-tuyet-dep-danh-cho-du-khach-du-lich-da-lat-.jpg',
    image_desc: 'Ảnh một ly cà phê đặt trên bàn gỗ, view nhìn ra thung lũng mây mù.', 
    likes: 3205, 
    comments: 245, 
    shares: 88, 
    category: 'travel', 
    timestamp: '2 giờ trước',
    comments_list: [
      { id: 'tr_01_c1', author: 'Linh Trần', text: 'Inbox em xin tên homestay với ạ, đang cần một nơi yên tĩnh như này!' },
      { id: 'tr_01_c2', author: 'Phương Vy', text: 'Mình cũng vừa ở đây tuần trước. View đỉnh của chóp! Chị chủ nhà siêu dễ thương.' },
      { id: 'tr_01_c3', author: 'Hoàng Long', text: 'Chắc giá phòng cao lắm nhỉ bạn? Nhìn xịn quá.' }
    ] 
  },
  { 
    id: 'tr_02', 
    author: 'Dr. Sang Chảnh', 
    avatar: 'https://i.pravatar.cc/150?u=travel2', 
    content: 'Trải nghiệm cuối tuần "chanh sả" tại resort 6 sao ở Phú Quốc. Đắt xắt ra miếng mọi người ạ, nhưng view và dịch vụ thì không chê vào đâu được. 💎 #phuquoc #luxurytravel', 
    image: 'https://www.annhome.vn/wp-content/uploads/2020/04/vinpearl-be%CC%82%CC%89-bo%CC%9Bi-vo%CC%82-cu%CC%9B%CC%A3c.jpg',
    image_desc: 'Ảnh chụp từ ban công villa nhìn ra bãi biển riêng và hồ bơi vô cực.', 
    likes: 4890, 
    comments: 512, 
    shares: 120, 
    category: 'travel', 
    timestamp: '5 giờ trước',
    comments_list: [
      { id: 'tr_02_c1', author: 'Quý Bà Sành Điệu', text: 'Nơi chữa lành tâm hồn đây rồi. Inbox mình xin giá phòng với bạn nhé.' },
      { id: 'tr_02_c2', author: 'Backpacker Bụi', text: 'Tiền này mình đi được cả tháng ở Hà Giang... GATO quá.' },
      { id: 'tr_02_c3', author: 'My Nguyễn', text: 'Resort có bãi biển riêng không bạn ơi?' }
    ] 
  },
  { 
    id: 'tr_03', 
    author: 'Phượt Thủ 2 Bánh', 
    avatar: 'https://i.pravatar.cc/150?u=travel3', 
    content: 'Cảnh báo anh em đi Hà Giang mùa này! Sương mù dày đặc, đường trơn trượt cực kỳ nguy hiểm. Vừa chứng kiến một vụ suýt lao xuống vực. Đi chậm và cẩn thận nhé! 🙏 #hagiangloop #canhbao', 
    image: 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/2/8/lai-xe-khi-suong-mu-1-1675852199804838886139-14-0-502-780-crop-1675852250298818677042.jpg',
    image_desc: 'Ảnh con đường đèo chìm trong sương mù, tầm nhìn rất hạn chế.', 
    likes: 1578, 
    comments: 322, 
    shares: 450, 
    category: 'travel', 
    timestamp: '8 giờ trước',
    comments_list: [
      { id: 'tr_03_c1', author: 'Tay Lái Lụa', text: 'Cảm ơn bạn đã cảnh báo. An toàn là trên hết!' },
      { id: 'tr_03_c2', author: 'Hùng Nguyễn', text: 'Đi mùa này mới thấy hết vẻ đẹp của nó chứ bạn. Phải chấp nhận rủi ro thôi.' },
      { id: 'tr_03_c3', author: 'Mẹ Bỉm Sữa Lo Lắng', text: 'Trời ơi sợ quá, chắc nhà mình không đi nữa. Thà ở nhà cho an toàn.' }
    ] 
  },
  { 
    id: 'tr_04', 
    author: 'Du Lịch Giá Rẻ', 
    avatar: 'https://i.pravatar.cc/150?u=travel4', 
    content: 'Toàn bộ chi phí cho chuyến đi Sapa 3 ngày 2 đêm chỉ hết 1.500k/người. Ai nói đi Sapa tốn kém nào? Chấm (.) mình gửi full lịch trình + contact homestay giá rẻ. #sapa #budgettravel', 
    image: 'https://cattour.vn/images/upload/images/Sapa/ve-dep-an-tuong-cua-noc-nha-dong-duong-dinh-fansipan-tai-sapa/fansipansapa.png',
    image_desc: 'Ảnh selfie cùng nhóm bạn trên đỉnh Fansipan.', 
    likes: 8520, 
    comments: 3400, 
    shares: 1200, 
    category: 'travel', 
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 'tr_04_c1', author: 'Sinh Viên Nghèo', text: '.' },
      { id: 'tr_04_c2', author: 'Minh Đức', text: '1.5tr chắc chỉ ăn mì tôm với ở dorm thôi bạn nhỉ? Chứ sao rẻ thế được.' },
      { id: 'tr_04_c3', author: 'Thu Trang', text: 'Hóng lịch trình của bạn. Gửi mình với nhé. Thanks!' }
    ] 
  },
  { 
    id: 'tr_05', 
    author: 'Hà Nội Ăn Gì Chơi Gì', 
    avatar: 'https://i.pravatar.cc/150?u=travel5', 
    content: 'Hà Nội đang vào mùa đẹp nhất trong năm. Gió heo may, lá vàng rơi, mùi hoa sữa nồng nàn. Còn chờ gì nữa mà không xách xe máy đi một vòng quanh phố cổ? #hanoi #autumn', 
    image: 'https://cdn.realtech.com.vn/uploads/gostay/news/4176/kinh-nghiem-kham-pha-pho-phan-dinh-phung-1.jpg',
    image_desc: 'Ảnh con đường Phan Đình Phùng rợp bóng cây và lá vàng rơi.', 
    likes: 5234, 
    comments: 412, 
    shares: 230, 
    category: 'travel', 
    timestamp: '3 giờ trước',
    comments_list: [
      { id: 'tr_05_c1', author: 'Người Hà Nội Xa Xứ', text: 'Nhớ Hà Nội quá đi mất... 😢' },
      { id: 'tr_05_c2', author: 'Dân Sài Gòn', text: 'Ước gì Sài Gòn cũng có mùa thu.' }
    ] 
  },
  { 
    id: 'tr_06', 
    author: 'Cần Một Chỗ Trốn', 
    avatar: 'https://i.pravatar.cc/150?u=travel6', 
    content: 'Hội An dạo này đông quá, đi đâu cũng thấy toàn người là người. Có ai biết quán cafe nào yên tĩnh, vắng vẻ ở đây không ạ? #hoian #help', 
    image: 'https://images2.thanhnien.vn/528068263637045248/2025/1/31/z6276172456365fe0e5c9df6048611a911f6ea1cbeb7a7-17382925906541867264982.jpg',
    image_desc: 'Ảnh dòng người chen chúc đi dạo ở phố cổ Hội An về đêm.', 
    likes: 927, 
    comments: 189, 
    shares: 20, 
    category: 'travel', 
    timestamp: '4 giờ trước',
    comments_list: [
      { id: 'tr_06_c1', author: 'Thổ Địa Hội An', text: 'Bạn đi sâu vào mấy con hẻm nhỏ ấy, nhiều quán xinh mà vắng lắm.' },
      { id: 'tr_06_c2', author: 'Du Khách', text: 'Công nhận đông thật sự. Đi thuyền còn phải xếp hàng.' }
    ] 
  },
  { 
    id: 'tr_07', 
    author: 'Vietnam Hidden Gems', 
    avatar: 'https://i.pravatar.cc/150?u=travel7', 
    content: 'Ai nói miền Tây không có gì chơi? Về An Giang mùa nước nổi, đi thuyền giữa rừng tràm Trà Sư là một trải nghiệm không thể quên. #angiang #mekongdelta', 
    image: 'https://www.vietfuntravel.com.vn/image/data/Mien-tay-n/phuot-mien-tay-di-dau/Tra-Su-Forest-4-1.jpg',
    image_desc: 'Ảnh chiếc xuồng ba lá đang lướt trên mặt nước xanh biếc phủ đầy bèo tấm.', 
    likes: 6200, 
    comments: 540, 
    shares: 480, 
    category: 'travel', 
    timestamp: '5 giờ trước',
    comments_list: [
      { id: 'tr_07_c1', author: 'Người con Miền Tây', text: 'Tự hào quê tui quá!' },
      { id: 'tr_07_c2', author: 'Nhiếp Ảnh Gia', text: 'Màu xanh của bèo đẹp siêu thực. Bạn chụp bằng máy gì vậy?' },
      { id: 'tr_07_c3', author: 'Dân Phượt', text: 'Note lại liền. Cảm ơn bạn đã chia sẻ.' }
    ] 
  },
  { 
    id: 'tr_08', 
    author: 'Camping Cuối Tuần', 
    avatar: 'https://i.pravatar.cc/150?u=travel8', 
    content: 'Đốt lửa trại, nướng BBQ, ngắm sao trời ở hồ Trị An. Trải nghiệm camping cuối tuần quá đã! Tag đứa bạn muốn rủ đi cùng nào. #camping #hotrian', 
    image: 'https://trekking-camping.com/wp-content/uploads/2022/01/tiec-nuong-bbq-ho-tri-an.png',
    image_desc: 'Ảnh nhóm bạn đang ngồi quây quần bên đống lửa trại ban đêm.', 
    likes: 4120, 
    comments: 670, 
    shares: 312, 
    category: 'travel', 
    timestamp: '6 giờ trước',
    comments_list: [
      { id: 'tr_08_c1', author: 'Trang', text: '@Huy Đi không ông ơi?' },
      { id: 'tr_08_c2', author: 'Huy', text: 'Set kèo đi ad ơi!' }
    ] 
  },
  { 
    id: 'tr_09', 
    author: 'Reviewer Có Tâm', 
    avatar: 'https://i.pravatar.cc/150?u=travel9', 
    content: 'BÓC PHỐT tour du lịch Thái Lan 5 ngày 4 đêm giá 5 triệu. Toàn dẫn vào các điểm mua sắm, ép khách mua hàng, ăn uống thì tệ. Mọi người né công ty XYZ ra nhé!', 
    image: 'https://cafefcdn.com/203337114487263232/2024/8/13/zing-zing-11-17235387307561688366291-1723551676809-1723551677230412413184.jpg',
    image_desc: 'Ảnh chụp bữa ăn đạm bạc với cơm trắng và vài miếng rau.', 
    likes: 11500, 
    comments: 2150, 
    shares: 5200, 
    category: 'travel', 
    timestamp: '7 giờ trước',
    comments_list: [
      { id: 'tr_09_c1', author: 'Nạn Nhân', text: 'Ôi mình cũng vừa đi tour này xong, y chang luôn. Bực mình thật sự.' },
      { id: 'tr_09_c2', author: 'Du lịch Tự túc', text: 'Đã bảo rồi, thời đại này cứ tự đi cho lành.' },
      { id: 'tr_09_c3', author: 'Công Ty XYZ', text: 'Chào bạn, chúng tôi rất tiếc về trải nghiệm của bạn. Vui lòng cho chúng tôi xin thông tin để xử lý ạ.' }
    ] 
  },
  { 
    id: 'tr_10', 
    author: 'Xuất Ngoại Thôi', 
    avatar: 'https://i.pravatar.cc/150?u=travel10', 
    content: 'Kinh nghiệm xin visa đi Nhật tự túc. Tưởng khó mà dễ không tưởng. Ai cần mình chia sẻ full bộ hồ sơ không?', 
    image: 'https://media.vov.vn/sites/default/files/styles/large/public/2025-02/ho%20chieu%20Nhat%20Ban%2C%20passport%20Nhat%20Ban%20-japan%20times.jpg',
    image_desc: 'Ảnh bìa cuốn hộ chiếu Việt Nam và visa Nhật Bản.', 
    likes: 3980, 
    comments: 1490, 
    shares: 800, 
    category: 'travel', 
    timestamp: '8 giờ trước',
    comments_list: [
      { id: 'tr_10_c1', author: 'Mê Anime', text: 'Cho mình xin với bạn ơi. Ước mơ của mình đó! Arigatou!' },
      { id: 'tr_10_c2', author: 'Dịch Vụ Visa', text: 'Bên em làm dịch vụ chỉ 100$, bao đậu. Cần thì inbox nhé.' }
    ] 
  },
  {
    id: 'tr_11',
    author: 'Solo Traveler',
    avatar: 'https://i.pravatar.cc/150?u=travel11',
    content: 'Lần đầu đi du lịch một mình và cảm thấy thật sự tự do. Có ai ở đây cũng thuộc hội độc hành không? Chia sẻ điểm đến tiếp theo của bạn đi! #solotravel',
    image: 'https://img.freepik.com/hinh-chup-cao-cap/nhin-tu-phia-sau-nguoi-dan-ong-dung-o-bai-bien_1048944-21091824.jpg',
    image_desc: 'Ảnh một người đứng một mình nhìn ra biển lúc hoàng hôn.',
    likes: 2500,
    comments: 655,
    shares: 112,
    category: 'travel',
    timestamp: '10 giờ trước',
    comments_list: [
      { id: 'tr_11_c1', author: 'Yêu Tự Do', text: 'Mình đây! Chuyến tiếp theo là đi xuyên Việt bằng xe máy.' },
      { id: 'tr_11_c2', author: 'Người Hướng Nội', text: 'Mình cũng muốn thử mà chưa dám. Bạn cho mình thêm động lực đi!' }
    ]
  },
  {
    id: 'tr_12',
    author: 'Gia Đình Yêu Biển',
    avatar: 'https://i.pravatar.cc/150?u=travel12',
    content: 'Nha Trang hay Đà Nẵng thì hợp với gia đình có con nhỏ hơn ạ? Tiêu chí là biển sạch, đồ ăn ngon và có khu vui chơi cho các bé. Cảm ơn mọi người.',
    image: 'https://dulichbienhaitien.com.vn/gomsu/sanpham/anh/images/101-cach-tao-dang-chup-anh-gia-dinh-o-bien-dep-nghin-like-11.jpg',
    image_desc: 'Ảnh một gia đình đang chơi đùa trên bãi biển.',
    likes: 1890,
    comments: 714,
    shares: 93,
    category: 'travel',
    timestamp: '12 giờ trước',
    comments_list: [
      { id: 'tr_12_c1', author: 'Team Đà Nẵng', text: 'Đà Nẵng nhé bạn. Biển Mỹ Khê sạch, lại gần Bà Nà Hills, bọn trẻ con thích mê.' },
      { id: 'tr_12_c2', author: 'Team Nha Trang', text: 'Vote Nha Trang có Vinpearl Land, bé chơi cả ngày không hết.' }
    ]
  },
  {
    id: 'tr_13',
    author: 'Travel Blogger',
    avatar: 'https://i.pravatar.cc/150?u=travel13',
    content: 'Thử thách 24h sống không dùng tiền mặt ở Bangkok. Liệu có khả thi? Xem story của mình để theo dõi hành trình nhé! #bangkok #challenge',
    image: 'https://wetrek.vn/pic/Service/tung.tran@onese.vn/images/top-4-ngoi-chua-tuyet-dep-tai-thai-lan-se-khien-ban-selfie-den-moi-tay1.JPG',
    image_desc: 'Ảnh selfie trước một ngôi chùa lộng lẫy ở Thái Lan.',
    likes: 7325,
    comments: 1240,
    shares: 450,
    category: 'travel',
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 'tr_13_c1', author: 'Khán Giả', text: 'Hóng kết quả. Chắc là không thể đâu.' },
      { id: 'tr_13_c2', author: 'Người Thái Lan', text: 'Bên mình quét mã QR παντού. Easy game!' }
    ]
  },
  {
    id: 'tr_14',
    author: 'Couple Goals',
    avatar: 'https://i.pravatar.cc/150?u=travel14',
    content: 'Kỷ niệm 5 năm ngày cưới ở Santorini. Một trong những nơi lãng mạn nhất thế giới. ❤️ #santorini #coupletravel',
    image: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/crstkfzlkfa8qxo3jccj/G%C3%B3i%20Ch%E1%BB%A5p%20%E1%BA%A2nh%20Ri%C3%AAng%20v%E1%BB%9Bi%20Th%E1%BB%A3%20%E1%BA%A2nh%20Du%20L%E1%BB%8Bch%20%E1%BB%9F%20Santorini.jpg',
    image_desc: 'Ảnh một cặp đôi đang ngắm hoàng hôn trên nóc nhà mái vòm xanh đặc trưng.',
    likes: 9222,
    comments: 1030,
    shares: 604,
    category: 'travel',
    timestamp: '2 ngày trước',
    comments_list: [
      { id: 'tr_14_c1', author: 'FA Lâu Năm', text: 'Lướt feed buổi tối mà phải xem cảnh này sao... 😭' },
      { id: 'tr_14_c2', author: 'Hội chị em', text: '@Bạn Trai Em xem người ta kìa.' }
    ]
  },
  {
    id: 'tr_15',
    author: 'Check-in Sống Ảo',
    avatar: 'https://i.pravatar.cc/150?u=travel15',
    content: 'Cầu Vàng ở Bà Nà Hills vẫn chưa bao giờ hết hot. Lên hình cứ phải gọi là "ảo tung chảo". #goldenbridge #danang',
    image: 'https://nhuminhplazahotel.com/wp-content/uploads/2023/08/cach-tao-dang-chup-anh-o-cau-vang-1.jpg',
    image_desc: 'Ảnh một cô gái đang đi dạo trên Cầu Vàng.',
    likes: 8144,
    comments: 922,
    shares: 312,
    category: 'travel',
    timestamp: '3 ngày trước',
    comments_list: [
      { id: 'tr_15_c1', author: 'Nhiếp Ảnh Gia', text: 'Góc chụp đẹp quá bạn ơi!' },
      { id: 'tr_15_c2', author: 'Người Thực Tế', text: 'Chắc phải đi từ 6h sáng mới chụp được ảnh không có người như này nhỉ?' }
    ]
  },

  // --- ẨM THỰC (FOOD) ---
  { 
    id: 'f_01', 
    author: 'Street Food Hunter', 
    avatar: 'https://i.pravatar.cc/150?u=food1', 
    content: 'Bún đậu mắm tôm 30K nhưng chất lượng như 300K. Quán siêu khuất ở Đống Đa, chỉ dân sành ăn mới biết. Inbox mình chỉ cho nhé! 🤫 #bundaumamtom #hanoifood', 
    image: 'https://tophanoiaz.com/wp-content/uploads/2023/09/bun-dau-cau-giay_5.jpg',
    image_desc: 'Ảnh mẹt bún đậu đầy đặn với chả cốm, dồi sụn, đậu rán vàng.', 
    likes: 4567, 
    comments: 489, 
    shares: 210, 
    category: 'food', 
    timestamp: '2 giờ trước',
    comments_list: [
      { id: 'f_01_c1', author: 'Linh Kiu_Tee', text: 'Inbox em với chị ơi, thèm quá đi mất!' },
      { id: 'f_01_c2', author: 'Hoàng Long', text: '30k có thật không bạn, hay chỉ là pr? Nhìn mẹt bún đầy đặn quá.' },
      { id: 'f_01_c3', author: 'Gia Đình Là Số 1', text: 'Aaa quán này em biết! Chuẩn ngon, nhưng phải đi sớm không hết chỗ.' }
    ] 
  },
  { 
    id: 'f_02', 
    author: 'Eat Clean Healthy', 
    avatar: 'https://i.pravatar.cc/150?u=food2', 
    content: 'Thực đơn ức gà cho cả tuần không bị ngán. Ai bảo ăn kiêng là khổ nào? 💪 #eatclean #healthyfood #gymlife', 
    image: 'https://vuayenmach.vn/wp-content/uploads/2021/06/Che-do-an-kieng-voi-uc-ga-day-hap-dan-1.jpg',
    image_desc: 'Ảnh 7 hộp cơm healthy với ức gà được chế biến theo 7 kiểu khác nhau.', 
    likes: 8900, 
    comments: 912, 
    shares: 1500, 
    category: 'food', 
    timestamp: '4 giờ trước',
    comments_list: [
      { id: 'f_02_c1', author: 'Minh Thư Fitness', text: 'Cho mình xin công thức ướp ức gà với ạ, nhìn hấp dẫn quá!' },
      { id: 'f_02_c2', author: 'Trần Bách', text: 'Ăn cái này chắc 15p sau lại đói meo =)))' },
      { id: 'f_02_c3', author: 'Mai Anh', text: 'Tuyệt vời, cảm ơn bạn đã chia sẻ!' }
    ] 
  },
  {
    id: 'f_03',
    author: 'Thánh Sò',
    avatar: 'https://i.pravatar.cc/150?u=food3',
    content: 'Đêm hôm up nhẹ chiếc ảnh ốc hương sốt trứng muối cho mọi người cùng thèm. Chỗ này ốc tươi, sốt đậm đà, chấm bánh mì là hết sảy! 🤤 #ocdem #anvat',
    image: 'https://chaytudong.com/datafiles/163/2024-12/61559803-oc-huong-sot-trung-muoi-3.jpg',
    image_desc: 'Video cận cảnh chảo ốc hương sốt trứng muối vàng óng, sôi sùng sục.',
    likes: 6720,
    comments: 850,
    shares: 430,
    category: 'food',
    timestamp: '5 giờ trước',
    comments_list: [
      { id: 'f_03_c1', author: 'Cú Đêm', text: 'Tàn nhẫn quá bạn ơi, giờ này kiếm đâu ra...' },
      { id: 'f_03_c2', author: 'Hội Mê Ốc', text: 'Địa chỉ đi bạn ơi, cho cái địa chỉ đi mà!' }
    ]
  },
  {
    id: 'f_04',
    author: 'Trà Sữa Reviewer',
    avatar: 'https://i.pravatar.cc/150?u=food4',
    content: 'Quan điểm không thể chối cãi: Trà sữa mà không có trân châu thì không phải là trà sữa. Mọi người có đồng ý không? 🤔 #unpopularopinion #trasua',
    image: 'https://kenh14cdn.com/2019/7/21/trasua-15636843078521298857679.jpg',
    image_desc: 'Ảnh một ly trà sữa full topping trân châu.',
    likes: 9800,
    comments: 4200,
    shares: 1100,
    category: 'food',
    timestamp: '6 giờ trước',
    comments_list: [
      { id: 'f_04_c1', author: 'Team Trân Châu', text: 'Chuẩn không cần chỉnh! Trân châu là linh hồn của ly trà sữa.' },
      { id: 'f_04_c2', author: 'Team Thạch Topping', text: 'Không đồng ý. Mình chỉ uống với thạch thôi, nhai trân châu mỏi miệng.' },
      { id: 'f_04_c3', author: 'Healthy Girl', text: 'Mình chỉ uống trà không đường không topping thôi ạ.' }
    ]
  },
  {
    id: 'f_05',
    author: 'Reviewer Có Tâm',
    avatar: 'https://i.pravatar.cc/150?u=food5',
    content: 'BÓC PHỐT buffet lẩu nướng 299k. Quầy line lèo tèo, thịt bò thì toàn mỡ, nhân viên thì mặt nặng mày nhẹ. Quá thất vọng! Né gấp quán ABC ở Cầu Giấy ra nhé mọi người. 😡 #bocphot #review',
    image: 'https://sohanews.sohacdn.com/2019/9/16/photo-2-15686057067051104692012.jpg',
    image_desc: 'Ảnh đĩa thịt ba chỉ toàn mỡ được đặt trên vỉ nướng.',
    likes: 12400,
    comments: 3100,
    shares: 6500,
    category: 'food',
    timestamp: '8 giờ trước',
    comments_list: [
      { id: 'f_05_c1', author: 'Nạn Nhân Khác', text: 'Công nhận, mình cũng vừa đi ăn tuần trước. Quá tệ, không bao giờ quay lại.' },
      { id: 'f_05_c2', author: 'Chủ Quán ABC (giả)', text: 'Chào bạn, chúng tôi rất xin lỗi... (bị report)' }
    ]
  },
  {
    id: 'f_06',
    author: 'Anh Chàng Vào Bếp',
    avatar: 'https://i.pravatar.cc/150?u=food6',
    content: 'Thành quả tự làm phở cuốn tại nhà lần đầu tiên. Nước chấm chua ngọt phỏng theo công thức trên mạng. Mời cả nhà ăn online ạ! #homecooking #phocuon',
    image: 'https://noidiennaupho.com/wp-content/uploads/2024/10/nguyen-lieu-lam-pho-cuon-01.jpg',
    image_desc: 'Ảnh đĩa phở cuốn được xếp ngay ngắn, bên cạnh là bát nước chấm có đu đủ thái lát.',
    likes: 2450,
    comments: 520,
    shares: 150,
    category: 'food',
    timestamp: '9 giờ trước',
    comments_list: [
      { id: 'f_06_c1', author: 'Hội Yêu Bếp', text: 'Khéo tay quá bạn ơi! Nước chấm nhìn màu đẹp ghê.' },
      { id: 'f_06_c2', author: 'Người lười', text: 'Thèm quá, bạn có nhận ship không ạ?' }
    ]
  },
  {
    id: 'f_07',
    author: 'Cà Phê Sống Ảo',
    avatar: 'https://i.pravatar.cc/150?u=food7',
    content: 'Top 5 quán cafe trứng ngon chuẩn vị Hà Nội mà bạn phải thử. Lưu lại ngay để cuối tuần hẹn hò nhé. ☕🥚 #caphetrung #hanoian',
    image: 'https://thanhnien.mediacdn.vn/Uploaded/thanhhang/2022_06_08/269130144-133264782470846-440666493035570073-n-9695.jpeg',
    image_desc: 'Ảnh cốc cafe trứng màu vàng kem, được vẽ hình đẹp mắt.',
    likes: 7200,
    comments: 680,
    shares: 2300,
    category: 'food',
    timestamp: '10 giờ trước',
    comments_list: [
      { id: 'f_07_c1', author: 'Hảo Ngọt', text: 'Lưu lại liền! Cảm ơn list chất lượng của bạn.' },
      { id: 'f_07_c2', author: 'Team Đen Đá', text: 'Mình vẫn không uống được món này, thấy hơi tanh.' }
    ]
  },
  {
    id: 'f_08',
    author: 'Mì Gói Tinh Tế',
    avatar: 'https://i.pravatar.cc/150?u=food8',
    content: 'Nâng tầm mì gói với topping trứng lòng đào, kim chi và bò Mỹ. Bữa ăn "sang chảnh" ngày cuối tháng. Ai có cách nấu mì nào đỉnh hơn không?',
    image: 'https://afamilycdn.com/2018/7/31/mi-tom-27-1533021967755182110893.jpg',
    image_desc: 'Ảnh tô mì gói được trang trí đẹp mắt như ở nhà hàng.',
    likes: 11200,
    comments: 1300,
    shares: 980,
    category: 'food',
    timestamp: '12 giờ trước',
    comments_list: [
      { id: 'f_08_c1', author: 'Sinh Viên Hub', text: 'Đỉnh cao của nghệ thuật nấu mì là đây.' },
      { id: 'f_08_c2', author: 'Rich Kid Chế', text: 'Có tiền mua bò Mỹ thì ăn luôn phở cho nhanh bạn ơi.' }
    ]
  },
  {
    id: 'f_09',
    author: 'Thánh Sầu',
    avatar: 'https://i.pravatar.cc/150?u=food9',
    content: 'Đã vào mùa sầu riêng! Tranh thủ ăn thôi mọi người ơi. Trái này 5kg, hạt lép, cơm vàng rượm. 💛 #saurieng #durian',
    image: 'https://kenh14cdn.com/203336854389633024/2025/9/30/base64-17589705193791245161306-1759203158125-175920315855260221069.jpeg',
    image_desc: 'Ảnh múi sầu riêng vàng ươm, béo ngậy được tách ra.',
    likes: 9500,
    comments: 2400,
    shares: 750,
    category: 'food',
    timestamp: '14 giờ trước',
    comments_list: [
      { id: 'f_09_c1', author: 'Fan Sầu Riêng', text: 'Nhìn thôi đã thấy mùi thơm bay qua màn hình.' },
      { id: 'f_09_c2', author: 'Anti Sầu', text: 'Ám ảnh. Sao mọi người có thể ăn được món này nhỉ?' }
    ]
  },
  {
    id: 'f_10',
    author: 'Hội Phá Đảo Buffet',
    avatar: 'https://i.pravatar.cc/150?u=food10',
    content: 'Chiến thuật đi ăn buffet hải sản để không bị lỗ: Bước 1 - Bỏ qua salad, quầy khai vị. Bước 2 - Tấn công ngay vào quầy tôm hùm, cua hoàng đế. Bước 3 - ... Anh em bổ sung! 🦀🦐',
    image: 'https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/tranphuong/tiechaisan/%E1%BA%A2nh%20n%E1%BB%99i%20dung%20680x454%20-%20logo%20tr%C3%A1i.png',
    image_desc: 'Ảnh đĩa hải sản đầy ắp tôm hùm, cua, hàu.',
    likes: 13800,
    comments: 2900,
    shares: 4100,
    category: 'food',
    timestamp: '15 giờ trước',
    comments_list: [
      { id: 'f_10_c1', author: 'Chiến Binh Buffet', text: 'Bước cuối là không uống nước ngọt có ga nhé. Uống nước lọc thôi.' },
      { id: 'f_10_c2', author: 'Team Ăn Chậm', text: 'Đi ăn để thưởng thức chứ có phải đi đánh trận đâu ạ...' }
    ]
  },
  {
    id: 'f_11',
    author: 'Người Sành Rượu',
    avatar: 'https://i.pravatar.cc/150?u=food11',
    content: 'Một ly vang đỏ cho buổi tối cuối tuần thêm lãng mạn. Kết hợp với beefsteak là một sự lựa chọn hoàn hảo. 🍷🥩 #wine #beefsteak',
    image: 'https://emdoi.vn/wp-content/uploads/2025/03/quan-beesteak-lang-man-9.webp',
    image_desc: 'Ảnh một ly rượu vang đỏ đặt cạnh đĩa bò bít tết.',
    likes: 1800,
    comments: 210,
    shares: 90,
    category: 'food',
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 'f_11_c1', author: 'Lãng Mạn', text: 'Chill quá bạn ơi!' },
      { id: 'f_11_c2', author: 'Dân Nhậu', text: 'Tối thứ 7 máu chảy về tim, làm vài lon bia cho mát bạn ạ.' }
    ]
  },
  {
    id: 'f_12',
    author: 'Bánh Ngọt Mỗi Ngày',
    avatar: 'https://i.pravatar.cc/150?u=food12',
    content: 'Tiramisu - "Hãy mang em đi". Chiếc bánh ngọt ngào mang cả một câu chuyện tình yêu của nước Ý. #tiramisu #dessert',
    image: 'https://cdn.tgdd.vn/2021/02/content/5-800x500-4.jpg',
    image_desc: 'Ảnh một miếng bánh Tiramisu được cắt ra, thấy rõ các lớp bánh.',
    likes: 3850,
    comments: 435,
    shares: 380,
    category: 'food',
    timestamp: '2 ngày trước',
    comments_list: [
      { id: 'f_12_c1', author: 'Hảo Ngọt', text: 'Bánh yêu thích của mình! Nhìn ngon quá.' },
      { id: 'f_12_c2', author: 'Đang Giảm Cân', text: 'Lướt feed lúc nửa đêm là một tội ác... 😭' }
    ]
  },
  {
    id: 'f_13',
    author: 'Thích Ăn Cay',
    avatar: 'https://i.pravatar.cc/150?u=food13',
    content: 'Thử thách mì cay cấp độ 7. Liệu có ai dám chinh phục? Vị cay xé lưỡi nhưng cực kỳ kích thích.🌶️🔥 #spicychallenge #micay',
    image: 'https://cdn.tgdd.vn/2021/10/CookRecipe/Avatar/mi-cay-7-cap-do-thumbnail.jpg',
    image_desc: 'Ảnh bát mì cay Hàn Quốc đỏ rực, khói bốc nghi ngút.',
    likes: 5178,
    comments: 1818,
    shares: 620,
    category: 'food',
    timestamp: '2 ngày trước',
    comments_list: [
      { id: 'f_13_c1', author: 'Team Ăn Cay', text: 'Đã thử và thành công! Đỉnh của chóp!' },
      { id: 'f_13_c2', author: 'Team Dạ Dày Yếu', text: 'Nhìn thôi đã thấy nóng rát rồi...' }
    ]
  },
  {
    id: 'f_14',
    author: 'Chè Khúc Bạch',
    avatar: 'https://i.pravatar.cc/150?u=food14',
    content: 'Món chè tuổi thơ. Nhớ ngày xưa mẹ hay làm. Giờ lớn rồi vẫn thèm. #chekhucbach #childhood',
    image: 'https://candycancook.com/wp-content/uploads/2013/07/cach-lam-che-khuc-bach-final-1.jpg',
    image_desc: 'Ảnh bát chè khúc bạch nhiều màu sắc với vải thiều và hạnh nhân.',
    likes: 2250,
    comments: 322,
    shares: 240,
    category: 'food',
    timestamp: '3 ngày trước',
    comments_list: [
      { id: 'f_14_c1', author: 'Ký Ức 8x', text: 'Đúng là món chè huyền thoại. Cảm ơn bạn đã gợi nhớ.' },
      { id: 'f_14_c2', author: 'Gen Z', text: 'Đây là món gì vậy ạ? Nhìn lạ quá.' }
    ]
  },
  {
    id: 'f_15',
    author: 'Gà Rán Là Chân Ái',
    avatar: 'https://i.pravatar.cc/150?u=food15',
    content: 'Cuộc chiến không hồi kết: Gà rán KFC hay Gà rán Lotteria ngon hơn? Mọi người cho xin ý kiến để tối nay em còn biết đường order. 🍗',
    image: 'https://iqfoods.vn/wp-content/uploads/2024/11/so-sanh-ga-ran-kfc-lotteria-2.jpg',
    image_desc: 'Ảnh ghép một miếng gà rán của KFC và một miếng của Lotteria.',
    likes: 9320,
    comments: 5360,
    shares: 1200,
    category: 'food',
    timestamp: '3 ngày trước',
    comments_list: [
      { id: 'f_15_c1', author: 'Team KFC', text: 'Một phiếu cho KFC. Gà giòn rụm, vị đặc trưng không lẫn đi đâu được.' },
      { id: 'f_15_c2', author: 'Team Lotteria', text: 'Lotteria có nhiều loại sốt hơn, ăn không bị ngán. Khoai tây lắc cũng ngon nữa.' },
      { id: 'f_15_c3', author: 'Fan Popeyes', text: 'Mọi người quên mất Popeyes rồi sao?' }
    ]
  },

  // --- CÔNG NGHỆ (TECH) ---
  {
    id: 't_01',
    author: 'Tech War Zone',
    avatar: 'https://i.pravatar.cc/150?u=tech1',
    category: 'tech',
    content: 'Đang dùng iPhone 14 Pro Max, có nên lên đời 15 không hay chờ 16? Thấy bảo pin hẻo với nóng máy lắm. Anh em tư vấn phát! 🤯 #iphone #apple',
    image: 'https://www.homepaylater.vn/static/24a4ce6620d7b812f6c2f02e2ae50493/fbb82/4_su_khac_biet_giua_iphone_14_pro_max_va_iphone_15_pro_max_9b8df8a71b.jpg',
    image_desc: 'Ảnh so sánh camera của hai đời iPhone.',
    likes: 3200,
    comments: 670,
    shares: 120,
    timestamp: '1 giờ trước',
    comments_list: [
      { id: 't_01_c1', author: 'iFan Chính Hiệu', text: 'Lên luôn bác ơi, Titan nhẹ hều, cầm sướng tay lắm.' },
      { id: 't_01_c2', author: 'SamSung User', text: 'Tầm tiền đấy mua S24 Ultra không sướng hơn à? Màn đẹp, cam xịn.' },
      { id: 't_01_c3', author: 'Người Dùng Thông Thái', text: '14 vẫn còn ngon chán, lên làm gì phí tiền. Đợi 16 thay đổi thiết kế hẵng mua.' }
    ]
  },
  {
    id: 't_02',
    author: 'Góc Setup Đẹp',
    avatar: 'https://i.pravatar.cc/150?u=tech2',
    category: 'tech',
    content: 'Góc làm việc tại gia của mình sau 6 tháng "nhịn ăn nhịn mặc". Tone đen - gỗ óc chó nam tính. Đã đủ chuẩn để work from home chưa các bác? 🔥 #battlestation #setup',
    image: 'https://gongangshop.vn/wp-content/uploads/2024/05/Loi-ich-cua-den-man-hinh.webp',
    image_desc: 'Ảnh góc máy tính gọn gàng với màn hình ultrawide, đèn treo màn hình và cây xanh.',
    likes: 12500,
    comments: 890,
    shares: 2100,
    timestamp: '2 giờ trước',
    comments_list: [
      { id: 't_02_c1', author: 'Nghiện Decor', text: 'Cái bàn bác mua ở đâu đấy? Xin link với!' },
      { id: 't_02_c2', author: 'Dân IT', text: 'Đi dây gọn thế. Nhìn lại gầm bàn nhà mình như ổ nhện =)))' },
      { id: 't_02_c3', author: 'Vợ Bác', text: 'À, hóa ra tiền lương tháng này đi đâu hết là ở đây hả?' }
    ]
  },
  {
    id: 't_03',
    author: 'Dev Meme',
    avatar: 'https://i.pravatar.cc/150?u=tech3',
    category: 'tech',
    content: 'Code chạy: Không dám thở.\nCode lỗi: Không biết tại sao lỗi.\nCode fix xong: Không biết tại sao chạy được.\nCuộc đời lập trình viên... 🥲 #coding #devlife',
    image: 'https://cdn-media.sforum.vn/storage/app/media/ctv_seo3/meme-meo-cuoi-15.jpg',
    image_desc: 'Ảnh meme chú mèo ngồi trước máy tính với vẻ mặt hoang mang tột độ.',
    likes: 15600,
    comments: 2100,
    shares: 5600,
    timestamp: '3 giờ trước',
    comments_list: [
      { id: 't_03_c1', author: 'Junior Dev', text: 'Đúng quá anh ơi. Sợ nhất là thứ 6 deploy.' },
      { id: 't_03_c2', author: 'PM (Project Manager)', text: 'Thế feature A xong chưa em? Deadline chiều nay đấy.' },
      { id: 't_03_c3', author: 'Tester', text: 'Để đấy tôi tìm ra bug cho mà xem 😈' }
    ]
  },
  {
    id: 't_04',
    author: 'Review Công Nghệ',
    avatar: 'https://i.pravatar.cc/150?u=tech4',
    category: 'tech',
    content: 'Trên tay kính thực tế ảo Vision Pro 80 triệu. Trải nghiệm như phim viễn tưởng nhưng đeo 15 phút là mỏi cổ. Theo các bạn đây là tương lai hay cú lừa? 🥽 #vr #apple #visionpro',
    image: 'https://cdn.tgdd.vn/News/1560642/visionprostein3-1280x720.jpg',
    image_desc: 'Ảnh một người đang đeo kính VR và thao tác tay trong không khí.',
    likes: 8900,
    comments: 1500,
    shares: 900,
    timestamp: '4 giờ trước',
    comments_list: [
      { id: 't_04_c1', author: 'Rich Kid', text: 'Đã order, đang đợi ship về. Tiền nào của nấy thôi.' },
      { id: 't_04_c2', author: 'Dân Cày Game', text: 'Giá này build được dàn PC khủng long rồi. Không đáng.' },
      { id: 't_04_c3', author: 'Tech Expert', text: 'Công nghệ thì đỉnh đấy nhưng chưa thực dụng. Đợi phiên bản Air nhẹ hơn.' }
    ]
  },
  {
    id: 't_05',
    author: 'Hội Bàn Phím Cơ',
    avatar: 'https://i.pravatar.cc/150?u=tech5',
    category: 'tech',
    content: 'Âm thanh của sự "nghiện ngập". Gõ Blue switch ban đêm đảm bảo cả xóm cùng nghe. Bác nào có vợ/người yêu cẩn thận bị "tác động vật lý" nhé 🤣 #mechanicalkeyboard',
    image: 'https://i.ytimg.com/vi/lhMdF44vq-U/sddefault.jpg',
    image_desc: 'Video test sound bàn phím cơ với tiếng clicky rất to.',
    likes: 4500,
    comments: 780,
    shares: 320,
    timestamp: '6 giờ trước',
    comments_list: [
      { id: 't_05_c1', author: 'Nạn Nhân', text: 'Mình vừa bị đuổi ra sảnh ngủ vì gõ phím lúc 2h sáng đây...' },
      { id: 't_05_c2', author: 'Team Linear', text: 'Red switch êm ru mới là chân ái. Blue ồn ào quá.' },
      { id: 't_05_c3', author: 'Newbie', text: 'Bộ này custom hết bao nhiêu lúa vậy thớt?' }
    ]
  },
  {
    id: 't_06',
    author: 'AI Revolution',
    avatar: 'https://i.pravatar.cc/150?u=tech6',
    category: 'tech',
    content: 'Sora AI mới của OpenAI khủng khiếp quá! Chỉ cần gõ văn bản là tạo ra video như phim điện ảnh. Editor, Cameraman liệu có thất nghiệp hàng loạt không? 😱 #AI #Sora #OpenAI',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS81pnIlwMqbU3xZ2G2edLmLK9oIbFjGdT-A&s',
    image_desc: 'Video demo của Sora AI tạo ra cảnh đường phố Tokyo chân thực.',
    likes: 21000,
    comments: 4500,
    shares: 12000,
    timestamp: '8 giờ trước',
    comments_list: [
      { id: 't_06_c1', author: 'Designer Lo Lắng', text: 'Chắc phải đi học nghề khác thôi, AI nó làm hết rồi.' },
      { id: 't_06_c2', author: 'Tech Optimist', text: 'AI là công cụ thôi, người biết dùng AI sẽ thay thế người không biết dùng.' },
      { id: 't_06_c3', author: 'Người Hoài Nghi', text: 'Vẫn còn nhiều lỗi lắm, nhìn kỹ mấy ngón tay xem, dị dạng hết.' }
    ]
  },
  {
    id: 't_07',
    author: 'Đồ Chơi Số',
    avatar: 'https://i.pravatar.cc/150?u=tech7',
    category: 'tech',
    content: 'Review máy đọc sách Kobo. Màn hình đẹp hơn Kindle nhưng hệ điều hành hơi lag. Ai thích vọc vạch cài truyện tranh thì ngon. 📚',
    image: 'https://preview.redd.it/reading-manga-on-kindle-v0-8dxjq6v9ef6e1.jpeg?width=640&crop=smart&auto=webp&s=e394a54400536519ddb4b6f4b96d0fd31e6c0125',
    image_desc: 'Ảnh máy đọc sách hiển thị trang truyện tranh One Piece sắc nét.',
    likes: 1200,
    comments: 340,
    shares: 50,
    timestamp: '9 giờ trước',
    comments_list: [
      { id: 't_07_c1', author: 'Mọt Sách', text: 'Đang dùng Kindle Paperwhite 5 thấy quá ổn, pin trâu cả tháng.' },
      { id: 't_07_c2', author: 'Wibu', text: 'Đọc manga thì con nào best nhất tầm giá 3 củ các bác?' }
    ]
  },
  {
    id: 't_08',
    author: 'Thợ Sửa Lap',
    avatar: 'https://i.pravatar.cc/150?u=tech8',
    category: 'tech',
    content: 'Khách mang máy đến bảo "em chỉ đổ có tý nước lọc vào thôi". Mở ra mainboard mốc xanh mốc đỏ. Các bạn lưu ý đồ điện tử kị nhất là nước nhé, kể cả nước thánh! 💧🚫',
    image: 'https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/487565658_3637843679789590_7998146810177725786_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0b6b33&_nc_eui2=AeE-VCDOHTWwwvP5VohTLHVqTPS8D3_8DBtM9LwPf_wMG_9W25h8vSayP5dGPUtfYtLYAZ7y_W8jDwDc7xtCtFr3&_nc_ohc=_-WCvJhkyAoQ7kNvwECfyMY&_nc_oc=AdmFqCG67ikpsT8BImV-oHsgAyQ3gNYNW3Vb_PIsyUpnAwTaMl0HDGw4mq6DjnoxKnYp6Ki18HgFI1hIy2rgdDAh&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&_nc_gid=Eedna2yBA7dSshcc6gXDlw&oh=00_Afh6SW5jDJTgkWF4hDrMZSiwv5H8WQwWWP_ohIQN8GcG1A&oe=691DE623',
    image_desc: 'Ảnh cận cảnh mainboard laptop bị rỉ sét và chập cháy.',
    likes: 5600,
    comments: 420,
    shares: 150,
    timestamp: '10 giờ trước',
    comments_list: [
      { id: 't_08_c1', author: 'Người Dùng Ngây Thơ', text: 'Thế cứu được dữ liệu không anh ơi?' },
      { id: 't_08_c2', author: 'Dân Kỹ Thuật', text: 'Ca này thay main mới cho nhanh chứ sửa gì tầm này.' }
    ]
  },
  {
    id: 't_09',
    author: 'Smart Home Việt',
    avatar: 'https://i.pravatar.cc/150?u=tech9',
    category: 'tech',
    content: 'Vừa lắp xong hệ thống nhà thông minh. Đi làm về cửa tự mở, đèn tự sáng, máy lạnh bật sẵn, rèm kéo ra. Cảm giác như Iron Man 😎 #smarthome #iot',
    image: 'https://lumi.vn/wp-content/uploads/2023/07/dieu-khien-nha-bang-giong-noi-voi-google.jpg',
    image_desc: 'Video quay cảnh điều khiển giọng nói tắt bật đèn trong phòng khách.',
    likes: 3800,
    comments: 560,
    shares: 280,
    timestamp: '12 giờ trước',
    comments_list: [
      { id: 't_09_c1', author: 'Bảo Mật', text: 'Tiện thì tiện thật nhưng hacker nó hack vào cam thì xong phim.' },
      { id: 't_09_c2', author: 'Người Lười', text: 'Chi phí tổng vệ sinh hết bao nhiêu vậy bác? Nhìn ham quá.' }
    ]
  },
  {
    id: 't_10',
    author: 'Crypto Holder',
    avatar: 'https://i.pravatar.cc/150?u=tech10',
    category: 'tech',
    content: 'Bitcoin lại phá đỉnh! Ai bán non hôm qua giơ tay điểm danh nào. 🚀🌕 HODL TO DIE! 💎🙌 #bitcoin #crypto #blockchain',
    image: 'https://s3.remitano.com/uploads/markdown_image/attachment/76473/image.png',
    image_desc: 'Ảnh biểu đồ nến xanh dựng đứng của giá Bitcoin.',
    likes: 2500,
    comments: 3400,
    shares: 500,
    timestamp: '14 giờ trước',
    comments_list: [
      { id: 't_10_c1', author: 'Người Về Bờ', text: 'May quá chưa bán, cuối cùng cũng gỡ lại được tiền cưới vợ.' },
      { id: 't_10_c2', author: 'Kẻ Mất Tiền', text: 'Vừa cắt lỗ hôm qua xong hôm nay nó bay. Cay thật sự!' },
      { id: 't_10_c3', author: 'Chuyên Gia Tài Chính', text: 'Cẩn thận bẫy tăng giá ảo (bull trap) nha các nhà đầu tư F0.' }
    ]
  },
  {
    id: 't_11',
    author: 'Tai Nghe True Wireless',
    avatar: 'https://i.pravatar.cc/150?u=tech11',
    category: 'tech',
    content: 'Sony WF-1000XM5 chống ồn đỉnh thật, đeo vào là điếc luôn với thế giới bên ngoài. Nhưng thiết kế đeo hơi đau tai. Có ai bị giống mình không?',
    image: 'https://www.appgefahren.de/wp-content/uploads/2023/07/Sony-WF-1000XM5-1.jpg',
    image_desc: 'Ảnh tai nghe nhét tai Sony đặt trong hộp sạc.',
    likes: 1800,
    comments: 290,
    shares: 60,
    timestamp: '16 giờ trước',
    comments_list: [
      { id: 't_11_c1', author: 'Audio Phile', text: 'Chất âm Sony thì khỏi bàn, bass chắc nịch. Nhưng đúng là fit tai hơi kén.' },
      { id: 't_11_c2', author: 'Airpods User', text: 'Cứ Airpods Pro mà dùng, đeo cả ngày chả thấy gì.' }
    ]
  },
  {
    id: 't_12',
    author: 'Laptop Gaming',
    avatar: 'https://i.pravatar.cc/150?u=tech12',
    category: 'tech',
    content: 'Laptop Gaming tầm 25 triệu thì nên mua hãng nào tản nhiệt tốt nhất hiện nay các bác? Asus, Acer hay Lenovo? Em cày game AAA. 🎮',
    image: 'https://cdn.hstatic.net/200000837185/file/en-mua-laptop-asus-hay-lenovo-1-xgear_23827ae52bb04ad5b153c9d428ab5667_1024x1024.jpg',
    image_desc: 'Ảnh 3 chiếc laptop gaming của 3 hãng khác nhau.',
    likes: 2200,
    comments: 850,
    shares: 120,
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 't_12_c1', author: 'Fan Lenovo', text: 'Legion 5 vô địch tầm giá nhé. Tản nhiệt bao mát.' },
      { id: 't_12_c2', author: 'Fan Asus', text: 'TUF Gaming dạo này cũng ngon rồi, thiết kế đẹp hơn.' }
    ]
  },
  {
    id: 't_13',
    author: 'Cảnh Báo Lừa Đảo',
    avatar: 'https://i.pravatar.cc/150?u=tech13',
    category: 'tech',
    content: 'Chiêu trò lừa đảo mới: Gọi điện giả danh cục viễn thông dọa khóa sim sau 2 tiếng. Mọi người tuyệt đối không cung cấp CMND hay bấm phím lạ nhé! Chia sẻ để người thân cảnh giác! ⚠️',
    image: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/6/11/1203406/Tin-Nhan-Rac.jpg',
    image_desc: 'Ảnh chụp màn hình tin nhắn và cuộc gọi lừa đảo.',
    likes: 18000,
    comments: 2500,
    shares: 30000,
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 't_13_c1', author: 'Bà Nội Trợ', text: 'Hôm qua nó vừa gọi cho mẹ chị, may mà chị ngăn kịp. Sợ quá.' },
      { id: 't_13_c2', author: 'Thanh Niên Cứng', text: 'Em toàn trêu lại tụi nó, bảo em đang ở đồn công an này anh đến đây mà khóa =)))' }
    ]
  },
  {
    id: 't_14',
    author: 'Máy Ảnh Film',
    avatar: 'https://i.pravatar.cc/150?u=tech14',
    category: 'tech',
    content: 'Màu film Kodak Gold 200 chụp nắng Sài Gòn vẫn là cái gì đó rất thơ. Có ai còn giữ đam mê chụp máy film giữa thời đại kỹ thuật số không? 📸',
    image: 'https://vietbis.vn/Image/Picture/Hanoi/kien-truc-nha-pho-co.jpg',
    image_desc: 'Ảnh một góc phố Sài Gòn màu hoài cổ, nhiễu hạt đặc trưng của ảnh film.',
    likes: 3400,
    comments: 210,
    shares: 180,
    timestamp: '2 ngày trước',
    comments_list: [
      { id: 't_14_c1', author: 'Nghệ Sĩ Mơ Mộng', text: 'Mình thích cái cảm giác hồi hộp đợi tráng phim.' },
      { id: 't_14_c2', author: 'Người Thực Dụng', text: 'Chơi cái này tốn kém quá, cuộn phim giờ đắt gấp 3 ngày xưa rồi.' }
    ]
  },
  {
    id: 't_15',
    author: 'Windows vs Mac',
    avatar: 'https://i.pravatar.cc/150?u=tech15',
    category: 'tech',
    content: 'Dùng MacOS 10 năm, hôm qua chuyển sang Windows 11 thấy nó... khôn hơn hẳn cái khoản quản lý cửa sổ. Anh em Mac đừng ném đá em nhé. 😅 #windows11 #macos',
    image: 'https://cafefcdn.com/203337114487263232/2021/6/25/lcimg00e7c70faf00475697d77b-16245863769971979766851.jpg',
    image_desc: 'Ảnh chụp màn hình giao diện snap layout của Windows 11.',
    likes: 5100,
    comments: 1200,
    shares: 340,
    timestamp: '2 ngày trước',
    comments_list: [
      { id: 't_15_c1', author: 'Fan Win', text: 'Chào mừng trở về với chính nghĩa!' },
      { id: 't_15_c2', author: 'Fan Táo', text: 'Windows dùng vài tháng là rác máy, lag tung chảo. Mac dùng 5 năm vẫn mượt.' },
      { id: 't_15_c3', author: 'Linux User', text: 'Tôi dùng Arch Linux, tôi chỉ đi ngang qua cười khẩy.' }
    ]
  },

    // --- MEME/HÀI HƯỚC (MEME) ---
  {
    id: 'm_01',
    author: 'Meme Chúa',
    avatar: 'https://i.pravatar.cc/150?u=meme1',
    category: 'meme',
    content: 'Tâm trạng của tôi khi nhận lương đầu tháng vs. Tâm trạng sau 3 ngày đóng hết các loại tiền nhà, tiền net, tiền điện nước...',
    image_desc: 'Ảnh ghép: bên trái là ảnh chó Shiba cười toe toét, bên phải là ảnh chó Shiba rơm rớm nước mắt.',
    likes: 18456,
    comments: 2567,
    shares: 8890,
    timestamp: '1 giờ trước',
    comments_list: [
      { id: 'm_01_c1', author: 'Đồng Cảnh Ngộ', text: 'Thêm tiền trả nợ thẻ tín dụng nữa bạn ơi. 🥲' },
      { id: 'm_01_c2', author: 'Người Lạc Quan', text: 'Không sao, còn mì tôm ta còn sống!' },
      { id: 'm_01_c3', author: 'Thực Tế', text: 'Tồn tại tới ngày 15 đã là một thành công rồi.' }
    ]
  },
  {
    id: 'm_02',
    author: 'Góc Sinh Viên',
    avatar: 'https://i.pravatar.cc/150?u=meme2',
    category: 'meme',
    content: 'Giảng viên: "Slide bài giảng tôi sẽ không gửi đâu nhé, các bạn phải tự chép bài."\nCũng là giảng viên:',
    image_desc: 'Ảnh slide bài giảng dày đặc chữ, chữ siêu nhỏ và chỉ lướt qua trong 3 giây.',
    likes: 21300,
    comments: 3600,
    shares: 9950,
    timestamp: '2 giờ trước',
    comments_list: [
      { id: 'm_02_c1', author: 'Team Chụp Lén', text: 'May mà có cái điện thoại.' },
      { id: 'm_02_c2', author: 'Thủ Khoa', text: 'Tại các bạn lười thôi, chứ mình vẫn chép kịp.' },
      { id: 'm_02_c3', author: 'Gen Z', text: 'Thời đại này rồi mà sao không gửi slide nhỉ?' }
    ]
  },
  {
    id: 'm_03',
    author: 'Chuyện Công Sở',
    avatar: 'https://i.pravatar.cc/150?u=meme3',
    category: 'meme',
    content: 'Đồng nghiệp: "Task này dễ mà, 15 phút là xong."\n15 phút sau:',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm_lQh2AuXmhoWSQCyf1kdINwUHq-XxoYWn49vDxgiYI5ekjtombsU2jayhMTymnQUDjM&usqp=CAU',
    image_desc: 'Ảnh meme một người đang nhìn vào màn hình lỗi đỏ chót với vẻ mặt hoang mang tột độ.',
    likes: 12300,
    comments: 1320,
    shares: 4450,
    timestamp: '3 giờ trước',
    comments_list: [
      { id: 'm_03_c1', author: 'Nạn Nhân', text: 'Và cái 15 phút đấy kéo dài 3 ngày chưa xong.' },
      { id: 'm_03_c2', author: 'Đồng nghiệp tốt', text: 'Nói vậy để động viên nhau thôi mà bạn làm căng thế.' }
    ]
  },
  {
    id: 'm_04',
    author: 'Hướng Nội',
    avatar: 'https://i.pravatar.cc/150?u=meme4',
    category: 'meme',
    content: 'Khi đang yên đang lành thì bạn thân tag vào một video "quay ngẫu nhiên người lạ ngoài đường".',
    image: 'https://media.makeameme.org/created/wait-a-minute-04f9d17f5a.jpg',
    image_desc: 'Ảnh meme "Wait a minute, Who are you?"',
    likes: 19500,
    comments: 2100,
    shares: 3800,
    timestamp: '4 giờ trước',
    comments_list: [
      { id: 'm_04_c1', author: 'Tôi Sợ Hãi', text: 'Làm ơn đừng làm thế... 🙏' },
      { id: 'm_04_c2', author: 'Bạn Thân Tốt Bụng', text: '@Bạn thân nhất của tôi chuẩn bị nhé, cuối tuần này đi săn ảnh nào!' }
    ]
  },
  {
    id: 'm_05',
    author: 'Hội Yêu Mèo',
    avatar: 'https://i.pravatar.cc/150?u=meme5',
    category: 'meme',
    content: 'Mua cho "hoàng thượng" cái nệm 500k.\n"Hoàng thượng":',
    image_desc: 'Ảnh một con mèo đang nằm ngủ ngon lành trong cái thùng carton bên cạnh cái nệm xịn.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeAE0PpLrYQb9LJqczIINe1rCAIVlMwMSpaQ&s',
    likes: 27500,
    comments: 3375,
    shares: 11500,
    timestamp: '5 giờ trước',
    comments_list: [
      { id: 'm_05_c1', author: 'Con Sen', text: 'Giống mèo nhà mình y chang.' },
      { id: 'm_05_c2', author: 'Mèo Là Chân Ái', text: 'Boss thích là được, con sen không có quyền ý kiến.' }
    ]
  },
  {
    id: 'm_06',
    author: 'Góc Lười Biếng',
    avatar: 'https://i.pravatar.cc/150?u=meme6',
    category: 'meme',
    content: 'Não tôi mỗi sáng: "Hôm nay phải dậy sớm tập thể dục, ăn sáng healthy, làm việc năng suất!"\nCơ thể tôi:',
    image: 'https://nguoiduatin.mediacdn.vn/zoom/600_315/upload/4-2025/images/2025-10-08/apple-1759909731-480-width740height495_anh_cat_4_3.jpg',
    image_desc: 'Ảnh meme nút "Snooze" (báo lại) trên điện thoại được phóng to.',
    likes: 16200,
    comments: 1410,
    shares: 7610,
    timestamp: '6 giờ trước',
    comments_list: [
      { id: 'm_06_c1', author: 'Chiến Binh Giường', text: 'Cái giường nó có một sức hút kỳ lạ bạn ạ.' },
      { id: 'm_06_c2', author: 'PT Online', text: 'Do bạn chưa có đủ quyết tâm thôi. Inbox mình tư vấn lộ trình nhé.' }
    ]
  },
  {
    id: 'm_07',
    author: 'Hội Ghét Chờ Đợi',
    avatar: 'https://i.pravatar.cc/150?u=meme7',
    category: 'meme',
    content: 'Khi shipper gọi điện bảo: "5 phút nữa em tới". Và đây là mình sau 30 phút.',
    image: 'https://media.istockphoto.com/id/459448461/vi/anh/ch%E1%BB%9D-%C4%91%E1%BB%A3i-t%C3%ACnh-y%C3%AAu-%C4%91%C3%ADch-th%E1%BB%B1c.jpg?s=612x612&w=0&k=20&c=4sXu8PoIY1QAdW0S4jesH1grItbQkYNnzBcE51G2lLI=',
    image_desc: 'Ảnh meme một bộ xương đang ngồi trên ghế chờ đợi.',
    likes: 19800,
    comments: 2220,
    shares: 8350,
    timestamp: '7 giờ trước',
    comments_list: [
      { id: 'm_07_c1', author: 'Shipper Có Tâm', text: 'Đôi khi kẹt xe hoặc nhiều đơn quá các bác thông cảm ạ. Bọn em cũng không muốn thế đâu.' },
      { id: 'm_07_c2', author: 'Khách Hàng', text: '5 phút của shipper có khi là 1 tiếng của mình.' }
    ]
  },
  {
    id: 'm_08',
    author: 'Drama Queen',
    avatar: 'https://i.pravatar.cc/150?u=meme8',
    category: 'meme',
    content: 'Bạn bè: "Kể đi"\nTôi: "Thôi chuyện nhỏ không có gì đâu"\nCũng là tôi sau 2 giây:',
    image: 'https://1office.vn/wp-content/uploads/2023/11/So-do-tu-duy-la-gi.png',
    image_desc: 'Ảnh một người đang vẽ ra một sơ đồ tư duy phức tạp, chằng chịt các mối quan hệ.',
    likes: 22950,
    comments: 3110,
    shares: 9150,
    timestamp: '8 giờ trước',
    comments_list: [
      { id: 'm_08_c1', author: 'Bà Tám Quận 1', text: 'Relatable! Có hóng hớt là tinh thần tỉnh táo hẳn.' },
      { id: 'm_08_c2', author: 'Người Bị Hóng', text: 'Đấy là lý do tôi không bao giờ kể chuyện cho bạn bè.' }
    ]
  },
  {
    id: 'm_09',
    author: 'Game Thủ',
    avatar: 'https://i.pravatar.cc/150?u=meme9',
    category: 'meme',
    content: 'Mẹ tôi: "Chơi nốt ván này rồi đi ăn cơm!"\nVán game dài 50 phút của tôi:',
    image: 'https://cdn.xaluannews.com/images/news/Image/2018/07/22/65b545c2e3bfa9.img.jpg',
    image_desc: 'Ảnh meme một cậu bé cười khổ và toát mồ hôi.',
    likes: 18700,
    comments: 2100,
    shares: 6130,
    timestamp: '10 giờ trước',
    comments_list: [
      { id: 'm_09_c1', author: 'Đồng đội', text: 'Combat cuối căng thế bỏ đi sao được.' },
      { id: 'm_09_c2', author: 'Phụ huynh', text: 'Ăn xong rồi chơi tiếp không được à? Hay để mẹ rút dây mạng?' }
    ]
  },
  {
    id: 'm_10',
    author: 'Team Mù Đường',
    avatar: 'https://i.pravatar.cc/150?u=meme10',
    category: 'meme',
    content: 'Google Maps: "Rẽ trái."\nTôi sau khi rẽ trái:',
    image_desc: 'https://manager.topcity.vn/Images/5100/google-map1.jpg',
    likes: 17450,
    comments: 1660,
    shares: 5220,
    timestamp: '12 giờ trước',
    comments_list: [
      { id: 'm_10_c1', author: 'Người Đồng Cảnh', text: 'Đã hơn một lần phải quay đầu xe... Cảm giác thật bất lực.' },
      { id: 'm_10_c2', author: 'Tổ Lái', text: 'Quan trọng là phải nhìn trước ngó sau nữa chứ bạn.' }
    ]
  },
  {
    id: 'm_11',
    author: 'Cú Đêm',
    avatar: 'https://i.pravatar.cc/150?u=meme11',
    category: 'meme',
    content: 'Mình lúc 11h đêm: "Ok xem nốt tập này rồi đi ngủ."\nCũng là mình lúc 4h sáng:',
    image: 'https://cdn.kienthuc.net.vn/images/cf739f51f3276a5be16e9cbb75eb670526dd9990dfdbd4578de56ea497cf5d7a9568c56e04781269f25ceb95651634ecce5ab9331e4ce182c36f4121580efa1af61d0efb5e397257e5e3f1c729408ae2dc8d72211af690aeb68d7915e4eb0525bab7d7221de595f606bc3512b2a20afa/giai-ma-thu-vi-tai-sao-mat-cua-meo-lai-phat-sang-trong-dem-Hinh-3.jpg',
    image_desc: 'Ảnh con cú mèo với đôi mắt mở to, sáng rực trong đêm.',
    likes: 24100,
    comments: 3250,
    shares: 11320,
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 'm_11_c1', author: 'Team Cày Phim', text: 'Cái nút "Tập tiếp theo" nó có ma lực lắm.' },
      { id: 'm_11_c2', author: 'Dân Y Tế', text: 'Cẩn thận kẻo sáng dậy thấy mình tối thui đó bạn ơi.' }
    ]
  },
  {
    id: 'm_12',
    author: 'Người Đàn Ông Lực Điền',
    avatar: 'https://i.pravatar.cc/150?u=meme12',
    category: 'meme',
    content: 'Khi crush nhờ mở hộ cái nắp chai nước mà mình đã vặn hết sức bình sinh.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMRgSgiEXj_fjJ-FJikBsMHbL2wFsQe5aHQ&s',
    image_desc: 'Ảnh The Rock đang gồng cơ bắp và mếu máo sắp khóc.',
    likes: 29900,
    comments: 3380,
    shares: 14400,
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 'm_12_c1', author: 'Người Từng Trải', text: 'Cảm giác gân tay sắp nổ tung nhưng cái nắp vẫn không nhúc nhích.' },
      { id: 'm_12_c2', author: 'Cô Gái Tinh Tế', text: 'Dùng mép áo lót vào là mở được ngay thôi các anh ạ.' }
    ]
  },
  {
    id: 'm_13',
    author: 'Hội Những Người "Chút Nữa"',
    avatar: 'https://i.pravatar.cc/150?u=meme13',
    category: 'meme',
    content: 'Từ nhà tôi đến công ty và "chút nữa" của mẹ tôi, đâu là khoảng cách xa hơn?',
    image: 'https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSmuYwHy-hA2e1Zv9I0bKUrWU3yAyFe0mj3LsC9l2s2K4GfzSC4S77lC2B4suTqszTKhFMdwuZyi5dufcsz0ddl7hnaP7b7sUdJ9sU4KvL8ibJ8qLoy1d3y-ANus8dW8h4kpcriyXZZhTvnfia42jJanQ798-DuhuTK0Y_NL0tBLTuw2KnyOmnYJ7nxLbcRlZBzSWQH53lTLmbw6I-AjyrPzDraPAfdrFkYqdkGoMf18AvLqio_sx6Q4XhYMCXB7ru2153XMyYlvHPIGS1fZ337wIxDwMUJJIAnyJt8z-NlVFnVZffOvSvjTafRvN_ZA4BWxkSx0RjJ2mfOoXMAvauoUzU9kmL0aqsfpvGwM1Z9a5NSDqBOdzmNKPDkzRrVefyBpP77rc3COFDALkS7YrfLVnjTuEbs7p4iy95sCcFHqgu_cgCRymAak4v5_73h0VqP2pJ4o8DUjNhsBDFKAJQOvcG1GSXqN9LSIQqxBBhi84fCrxAHRhVCKOhPN4fi2QHCQJUBZnC9PgskxYZ2G3jwT6tTZchr0tL8cnRve0gpNkApkmEJUamowx0sOInA0BivBL__cCnHCUrBehzJsXnprQXE_7ctx6SYFYZvz5ZiIh7hYdH2N7WDahzkw5n8bS8ZVRnSMbIzaaK28TUW8TDhTDvbST3G606cXuK1Q-D6chikIIKxeuP6WbC1MY9ZosUhDf1bmuPaghIvJLdemMuBA4Er0jqFmn8GmtpRd6hNTfOJEEgpdgZfMQJFPyr2hSRmBwDyRp7c9d_emcyUY7Ro22ZqWyKGS12MtGOlxK9MR3TWcvVOq4_-O2uV8Qnb5dCUigF5dSFpDgCpCO5yWASDZguwCJ9UGSZPlJ_BXMnUuLijNqMvQQrmlDFlNWgFSRZOxKCTlIecr24Wq5KgS0_fkTwQc4LPwYKEoWqT5PNgaa0lGPjqZ22xsRzI9GpOW9LWrIIUUvYk2zskwyGRvTH0yQUI1y2TRQSxK3mdo-LzQJkIyhODm01aOfsbc4MrNPpNGERV2OU8g8_QIVd9Vmf_M5q6yuK6w681_QB8IWKxkUoMbtuo389tsWOWLt89D_8OcaYh3vSqY5tCTnBhsxSZfAsNa8ItJ3GxbET0MaBEdmp2rgGgoaM_Uj3w5LaQx5-XLNUBS3jex_v5mYiS2dEpIbfKHZjiAmLZlYjnMayGvRcFFG-CRyaWaCtLw5KLnzhQMo34uSDY0bFQ0JrpfvZwC=s1024-rj',
    image_desc: 'Ảnh meme so sánh hai hành tinh cách xa nhau.',
    likes: 17600,
    comments: 1310,
    shares: 8390,
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 'm_13_c1', author: 'Người Con', text: '"Mẹ sắp về tới nơi rồi" và 2 tiếng sau vẫn chưa thấy mẹ đâu.' },
      { id: 'm_13_c2', author: 'Bà Mẹ', text: 'Chút nữa là trong quá trình rồi, ý chúng mày là gì?' }
    ]
  },
  {
    id: 'm_14',
    author: 'Team Trí Nhớ Vàng',
    avatar: 'https://i.pravatar.cc/150?u=meme14',
    category: 'meme',
    content: 'Khi đang đi thì quên mất mình định đi đâu.',
    image: 'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474323vsP/photo-1-165050922259862485373.jpg',
    image_desc: 'Ảnh John Travolta trong phim Pulp Fiction đang nhìn xung quanh với vẻ bối rối.',
    likes: 20500,
    comments: 1780,
    shares: 9260,
    timestamp: '2 ngày trước',
    comments_list: [
      { id: 'm_14_c1', author: 'Hội Não Cá Vàng', text: 'Mình đi vào phòng rồi lại đi ra vì không nhớ mình vào để làm gì.' },
      { id: 'm_14_c2', author: 'Bác sĩ online', text: 'Có thể bạn đang bị thiếu Omega-3.' }
    ]
  },
  {
    id: 'm_15',
    author: 'Rich Kid "pha ke"',
    avatar: 'https://i.pravatar.cc/150?u=meme15',
    category: 'meme',
    content: 'Khi tài khoản ngân hàng còn 50k nhưng bạn bè rủ đi ăn nhà hàng sang chảnh.',
    image: 'https://truongtotnhat.vn/wp-content/uploads/2025/09/wojak-dang-khoc-tham-ben-trong-chiec-mat-na-tuoi-cuoi.jpg',
    image_desc: 'Ảnh một người đang đeo mặt nạ hình mặt cười, nhưng có một giọt nước mắt đang rơi.',
    likes: 25700,
    comments: 2210,
    shares: 10270,
    timestamp: '2 ngày trước',
    comments_list: [
      { id: 'm_15_c1', author: 'Cùng Hoàn Cảnh', text: '"Xin lỗi, nay tao có hẹn rồi..."' },
      { id: 'm_15_c2', author: 'Bạn Thân', text: 'Đi đi tao bao!' }
    ]
  },

  // --- CHÍNH TRỊ/XÃ HỘI (POLITICS) ---
  {
    id: 'p_01',
    author: 'Góc Nhìn Gen Z',
    avatar: 'https://i.pravatar.cc/150?u=pol1',
    category: 'politics',
    content: 'Đề xuất tăng tuổi nghỉ hưu lên 65 cho cả nam và nữ đang được thảo luận. Người trẻ chúng ta sẽ phải "cày" đến bao giờ? Quan điểm của mọi người thế nào? 🤔 #laodong #chinhsach',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Q9s37BQGQidCuiin_pFIrhw3MADGHbhAVA&s',
    image_desc: 'Ảnh một người lớn tuổi đang làm việc trong văn phòng.',
    likes: 8700,
    comments: 4200,
    shares: 1200,
    timestamp: '1 giờ trước',
    comments_list: [
      { id: 'p_01_c1', author: 'Người Đi Làm', text: 'Chưa kịp hưởng lương hưu đã "xanh cỏ" rồi. Phản đối!' },
      { id: 'p_01_c2', author: 'Chuyên gia Kinh tế', text: 'Đây là xu thế chung của thế giới để chống vỡ quỹ bảo hiểm xã hội. Các bạn nên nhìn vào bức tranh lớn hơn.' },
      { id: 'p_01_c3', author: 'Sinh viên', text: 'Các bác về hưu muộn thì chúng em biết kiếm việc ở đâu?' }
    ]
  },
  {
    id: 'p_02',
    author: 'Cafe Sáng Với Doanh nhân',
    avatar: 'https://i.pravatar.cc/150?u=pol2',
    category: 'politics',
    content: 'Giá xăng lại tăng kỷ lục, kéo theo giá mọi mặt hàng đều tăng. Trong khi lương thì vẫn đứng yên. Doanh nghiệp và người dân đang thực sự "ngấm đòn". #giaca #lamphat',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Y3qKs1jOqe7w7JucH4uy1Xe9FUvE26Fh-A&s',
    image_desc: 'Ảnh bảng hiển thị giá xăng dầu tại một trạm xăng.',
    likes: 11500,
    comments: 3800,
    shares: 2500,
    timestamp: '2 giờ trước',
    comments_list: [
      { id: 'p_02_c1', author: 'Nội trợ Thông thái', text: 'Ra chợ cái gì cũng tăng giá, chóng cả mặt. Phải thắt chặt chi tiêu thôi.' },
      { id: 'p_02_c2', author: 'Chủ Doanh nghiệp', text: 'Chi phí vận hành tăng cao, không tăng giá bán thì không có lãi. Khó cho cả đôi bên.' },
      { id: 'p_02_c3', author: 'Xe Ôm Công Nghệ', text: 'Mỗi cuốc xe giờ chẳng còn lãi được bao nhiêu...' }
    ]
  },
  {
    id: 'p_03',
    author: 'Hóng Biến Xã Hội',
    avatar: 'https://i.pravatar.cc/150?u=pol3',
    category: 'politics',
    content: 'Clip ghi lại cảnh một "rich kid" lái siêu xe gây náo loạn đường phố và có thái độ thách thức cơ quan chức năng. Luật pháp có công bằng cho tất cả mọi người? 😠 #phapluat #richkid',
    image: 'https://image.plo.vn/w1000/Uploaded/2025/yqdxwpwjv/2025_08_12/canh-sat-giao-thong-4-8942-4132.jpg.webp',
    image_desc: 'Video một thanh niên đang tranh cãi với cảnh sát giao thông.',
    likes: 25000,
    comments: 9800,
    shares: 8000,
    timestamp: '3 giờ trước',
    comments_list: [
      { id: 'p_03_c1', author: 'Người Dân', text: 'Cần phải xử lý thật nghiêm để làm gương!' },
      { id: 'p_03_c2', author: 'Bạn Của Bố Mình Là To', text: 'Chắc lại phạt cho tồn tại thôi. Con ông cháu cha cả.' },
      { id: 'p_03_c3', author: 'Luật Sư', text: 'Hành vi này có thể bị truy cứu trách nhiệm hình sự về tội gây rối trật tự công cộng.' }
    ]
  },
  {
    id: 'p_04',
    author: 'Giáo Dục Today',
    avatar: 'https://i.pravatar.cc/150?u=pol4',
    category: 'politics',
    content: 'Bạo lực học đường đang trở thành một vấn nạn đáng báo động. Trách nhiệm thuộc về gia đình, nhà trường hay chính các em học sinh? Đã đến lúc cần có những giải pháp mạnh tay hơn. #baoluchocduong',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdIFHJxz8W79D4i4mZwIIzAJLOAzx7dUftbQ&s',
    image_desc: 'Ảnh minh họa một nhóm học sinh đang bắt nạt một bạn khác.',
    likes: 8900,
    comments: 2100,
    shares: 1800,
    timestamp: '5 giờ trước',
    comments_list: [
      { id: 'p_04_c1', author: 'Phụ huynh lo lắng', text: 'Gia đình là gốc rễ. Bố mẹ không dạy dỗ thì nhà trường sao dạy nổi.' },
      { id: 'p_04_c2', author: 'Giáo viên', text: 'Áp lực thành tích, sĩ số lớp quá đông khiến giáo viên khó quan tâm hết được. Cần sự chung tay của cả xã hội.' },
      { id: 'p_04_c3', author: 'Học sinh', text: 'Đôi khi chỉ vì "nhìn đểu" thôi ạ...' }
    ]
  },
  {
    id: 'p_05',
    author: 'Môi Trường & Đời Sống',
    avatar: 'https://i.pravatar.cc/150?u=pol5',
    category: 'politics',
    content: 'Dự án chung cư cao cấp xây lấp hồ để làm cảnh quan. Hàng trăm người dân phản đối vì lo ngại ngập lụt và mất đi "lá phổi xanh" của khu vực. #do thịhoa #moitruong',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3py0Rp4fgWYBoQfuKAH4dasHdKjePWWxyGQ&s',
    image_desc: 'Ảnh một chiếc máy xúc đang đổ đất xuống hồ nước.',
    likes: 13000,
    comments: 3200,
    shares: 4500,
    timestamp: '6 giờ trước',
    comments_list: [
      { id: 'p_05_c1', author: 'Cư Dân', text: 'Không thể chấp nhận được! Phải bảo vệ hồ bằng mọi giá!' },
      { id: 'p_05_c2', author: 'Nhà Quy Hoạch', text: 'Đây là dự án đã được phê duyệt, có đánh giá tác động môi trường đầy đủ. Mọi người không nên phản ứng thái quá.' }
    ]
  },
  {
    id: 'p_06',
    author: 'Tin Tức Nóng Hổi',
    avatar: 'https://i.pravatar.cc/150?u=pol6',
    category: 'politics',
    content: 'Vấn đề an toàn thực phẩm: Lại phát hiện hàng tấn chân gà đông lạnh không rõ nguồn gốc được tuồn vào các quán ăn vỉa hè. Mọi người nên cẩn trọng khi ăn ngoài. 🤢 #antoanthucpham',
    image: 'https://danviet.ex-cdn.com/files/f1/upload/3-2015/images/2015-07-06/1436810169-ccbjchan_ga_7_aqgf.jpg',
    image_desc: 'Ảnh kho hàng bẩn thỉu chứa đầy các thùng chân gà đông lạnh.',
    likes: 18000,
    comments: 4100,
    shares: 9800,
    timestamp: '8 giờ trước',
    comments_list: [
      { id: 'p_06_c1', author: 'Người Hay Ăn Vặt', text: 'Thôi xong, món chân gà sả tắc yêu thích của tôi... Từ nay xin chừa.' },
      { id: 'p_06_c2', author: 'Cơ quan Chức năng', text: 'Chúng tôi đang vào cuộc điều tra, sẽ xử lý nghiêm các trường hợp vi phạm.' }
    ]
  },
  {
    id: 'p_07',
    author: 'Thị Trường Chứng Khoán',
    avatar: 'https://i.pravatar.cc/150?u=pol7',
    category: 'politics',
    content: 'Thị trường chứng khoán Việt Nam lại "đỏ lửa". Có nên bắt đáy hay cắt lỗ lúc này? Các nhà đầu tư F0 đang hoang mang tột độ. #chungkhoan #VNIndex',
    image: 'https://media.vneconomy.vn/images/upload/2024/08/14/ce011cec-8c69-4461-ab07-4e950ca76d1a.png',
    image_desc: 'Biểu đồ chứng khoán đỏ rực, lao dốc không phanh.',
    likes: 5400,
    comments: 2800,
    shares: 800,
    timestamp: '10 giờ trước',
    comments_list: [
      { id: 'p_07_c1', author: 'Nhà Đầu Tư F0', text: 'Mất hết tiền ăn sáng của em rồi. Huhuhu' },
      { id: 'p_07_c2', author: 'Sói Già Phố Wall', text: 'Đây là cơ hội cho người dũng cảm. Đáy rồi, múc!' },
      { id: 'p_07_c3', author: 'Thận Trọng', text: 'Chưa phải đáy đâu, đừng bắt dao rơi.' }
    ]
  },
  {
    id: 'p_08',
    author: 'Drama Showbiz Việt',
    avatar: 'https://i.pravatar.cc/150?u=pol8',
    category: 'politics',
    content: 'Nghệ sĩ A bị tố trốn thuế hàng chục tỷ đồng. Liệu có hay không một "vùng cấm" trong showbiz? #showbiz #drama',
    image: 'https://img.pikbest.com/wp/202345/woman-face-silhouette-of-a-s_9586330.jpg!w700wp',
    image_desc: 'Ảnh bóng đen của một người nổi tiếng.',
    likes: 22000,
    comments: 7600,
    shares: 5500,
    timestamp: '12 giờ trước',
    comments_list: [
      { id: 'p_08_c1', author: 'Anti-fan', text: 'Biết ngay mà! Đề nghị cơ quan thuế vào cuộc làm rõ.' },
      { id: 'p_08_c2', author: 'Fan Cứng', text: 'Chỉ là tin đồn thôi. Đợi thông tin chính thức. Mãi yêu idol.' }
    ]
  },
  {
    id: 'p_09',
    author: 'Câu Chuyện Cuộc Sống',
    avatar: 'https://i.pravatar.cc/150?u=pol9',
    category: 'politics',
    content: 'Áp lực "con nhà người ta" đang hủy hoại thế hệ trẻ. Bố mẹ đang kỳ vọng hay đang tạo ra gánh nặng cho con cái?',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR3IBF7GZg_c6zxG8Upm1kLR9UtBiJ65Jf2Q&s',
    image_desc: 'Ảnh một học sinh đang ngủ gục trên bàn học với chồng sách vở cao ngất.',
    likes: 16000,
    comments: 3500,
    shares: 6000,
    timestamp: '14 giờ trước',
    comments_list: [
      { id: 'p_09_c1', author: 'Thế Hệ Z', text: '"Bố mẹ chỉ muốn tốt cho con thôi." - câu nói ám ảnh nhất.' },
      { id: 'p_09_c2', author: 'Phụ Huynh', text: 'Không áp lực làm sao có kim cương? Ngày xưa chúng tôi còn khổ hơn nhiều.' }
    ]
  },
  {
    id: 'p_10',
    author: 'Giao Thông Hà Nội',
    avatar: 'https://i.pravatar.cc/150?u=pol10',
    category: 'politics',
    content: 'Ý thức tham gia giao thông của một bộ phận người dân quá kém. Vượt đèn đỏ, đi ngược chiều, leo lên cả vỉa hè. Mọi người nghĩ sao?',
    image: 'https://cdn-i.vtcnews.vn/resize/ma/upload/2025/09/19/truong-chinh5-21010970.jpg',
    image_desc: 'Ảnh ngã tư hỗn loạn, xe máy đi ngược chiều và leo lên vỉa hè.',
    likes: 7800,
    comments: 2900,
    shares: 1100,
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 'p_10_c1', author: 'Người Tham Gia Giao Thông', text: 'Nhiều lúc vội quá nên phải làm liều thôi, cũng chẳng muốn đâu.' },
      { id: 'p_10_c2', author: 'Người Đi Bộ', text: 'Vỉa hè cũng không còn an toàn nữa. Quá chán!' }
    ]
  },
  {
    id: 'p_11',
    author: 'Sách và Tri thức',
    avatar: 'https://i.pravatar.cc/150?u=pol11',
    category: 'politics',
    content: 'Văn hóa đọc đang dần biến mất trong giới trẻ? Mọi người nghĩ sao khi lướt mạng xã hội dễ hơn đọc một cuốn sách?',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYDv5M135lFfwmLAdf4PrzDCe8YmjPof-Cw&s',
    image_desc: 'Ảnh so sánh một người đang đọc sách và một người đang lướt điện thoại.',
    likes: 6500,
    comments: 1800,
    shares: 2200,
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 'p_11_c1', author: 'Mọt Sách', text: 'Đọc sách vẫn là con đường tri thức ngắn nhất. Tiếc cho các bạn trẻ.' },
      { id: 'p_11_c2', author: 'Gen Z Thực Tế', text: 'Bây giờ có Tóm tắt sách, Nghe sách nói. Vẫn tiếp thu kiến thức nhưng nhanh hơn thôi mà.' }
    ]
  },
  {
    id: 'p_12',
    author: 'Hệ Thống Y Tế',
    avatar: 'https://i.pravatar.cc/150?u=pol12',
    category: 'politics',
    content: 'Tình trạng quá tải tại các bệnh viện tuyến đầu. Bệnh nhân nằm la liệt ngoài hành lang. Bao giờ vấn đề này mới được giải quyết triệt để?',
    image: 'https://hnm.1cdn.vn/2018/06/22/hanoimoi.com.vn-uploads-tuandiep-2018-6-22-_2.jpg',
    image_desc: 'Ảnh hành lang bệnh viện đông đúc, bệnh nhân và người nhà ngồi la liệt.',
    likes: 19000,
    comments: 4100,
    shares: 7500,
    timestamp: '2 ngày trước',
    comments_list: [
      { id: 'p_12_c1', author: 'Người Nhà Bệnh Nhân', text: 'Nhìn mà xót xa. Vừa khổ bệnh nhân, vừa khổ bác sĩ.' },
      { id: 'p_12_c2', author: 'Y Bác Sĩ', text: 'Chúng tôi cũng đã cố gắng hết sức rồi...' }
    ]
  },
  {
    id: 'p_13',
    author: 'Câu Chuyện Khởi Nghiệp',
    avatar: 'https://i.pravatar.cc/150?u=pol13',
    category: 'politics',
    content: 'Phong trào "bỏ phố về quê" sau đại dịch: là một giấc mơ màu hồng hay một thực tế phũ phàng? #startup #bophoveque',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4PUY1XC8DpYH0ifrOuzaskM0XJ_izI0C8Q&s',
    image_desc: 'Ảnh một căn nhà gỗ mộc mạc giữa vườn rau xanh mướt.',
    likes: 8200,
    comments: 1900,
    shares: 2800,
    timestamp: '2 ngày trước',
    comments_list: [
      { id: 'p_13_c1', author: 'Người Mơ Mộng', text: 'Cuộc sống an yên mình hằng ao ước.' },
      { id: 'p_13_c2', author: 'Người Đã Trải', text: 'Về quê được 1 năm lại phải quay lại thành phố cày cuốc đây. Không dễ ăn đâu các bạn.' }
    ]
  },
  {
    id: 'p_14',
    author: 'Người Đưa Tin',
    avatar: 'https://i.pravatar.cc/150?u=pol14',
    category: 'politics',
    content: 'Bất động sản "đóng băng", hàng loạt nhà đầu tư đu đỉnh đang "ngộp thở" vì phải gồng lãi ngân hàng. Liệu bong bóng có vỡ?',
    image: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2025/2/25/1468498/Du_An_Bo_Hoang-01.jpg',
    image_desc: 'Ảnh một khu đô thị vắng tanh không một bóng người.',
    likes: 11000,
    comments: 3300,
    shares: 4100,
    timestamp: '3 ngày trước',
    comments_list: [
      { id: 'p_14_c1', author: 'Nhà Đầu Tư Đu Đỉnh', text: 'Cứu em với các bác...' },
      { id: 'p_14_c2', author: 'Chờ Bắt Đáy', text: 'Cứ chờ đi, giá còn xuống nữa.' }
    ]
  },
  {
    id: 'p_15',
    author: 'Tin Tức Quốc Tế',
    avatar: 'https://i.pravatar.cc/150?u=pol15',
    category: 'politics',
    content: 'Căng thẳng địa chính trị giữa các cường quốc ngày càng gia tăng. Việt Nam sẽ đứng về phía nào trong cuộc chiến thương mại này? #geopolitics',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj6FrxYWu8fOPTGQn-zqL-gGsma_SOPUcFiA&s',
    image_desc: 'Ảnh lá cờ của các quốc gia đang đối đầu nhau.',
    likes: 7500,
    comments: 3100,
    shares: 950,
    timestamp: '3 ngày trước',
    comments_list: [
      { id: 'p_15_c1', author: 'Chuyên gia', text: 'Chính sách "cây tre" vẫn là lựa chọn khôn ngoan nhất.' },
      { id: 'p_15_c2', author: 'Anh Hùng Bàn Phím', text: 'Chọn phe đi chứ, sao cứ trung lập mãi được.' }
    ]
  },

  // --- SỨC KHỎE (HEALTH) ---
  {
    id: 'h_01',
    author: 'Sống Khỏe Mỗi Ngày',
    avatar: 'https://i.pravatar.cc/150?u=health1',
    category: 'health',
    content: 'CẢNH BÁO: 5 dấu hiệu "thầm lặng" của đột quỵ mà bạn tuyệt đối không được bỏ qua. Đặc biệt là những người trẻ tuổi đang làm việc văn phòng. Hãy chia sẻ để bảo vệ người thân của bạn! 🙏 #dotquy #suckhoe',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShC0pKj2bcu075Rx_817O-Vqkw70BM4UvMKw&s',
    image_desc: 'Ảnh infographic mô tả 5 dấu hiệu cảnh báo đột quỵ.',
    likes: 19500,
    comments: 2800,
    shares: 32000,
    timestamp: '1 giờ trước',
    comments_list: [
      { id: 'h_01_c1', author: 'Người Lo Lắng', text: 'Đọc xong thấy dấu hiệu nào cũng giống mình... Hoang mang quá.' },
      { id: 'h_01_c2', author: 'Lan Anh', text: 'Cảm ơn admin. Bài viết rất hữu ích. Đã share về cho cả nhà cùng đọc.' },
      { id: 'h_01_c3', author: 'Thanh Niên Cứng', text: 'Cứ thể dục thể thao đều đặn thì chả sợ gì.' }
    ]
  },
  {
    id: 'h_02',
    author: 'Chữa Lành Tự Nhiên',
    avatar: 'https://i.pravatar.cc/150?u=health2',
    category: 'health',
    content: 'Bạn có biết? Uống nước chanh ấm pha mật ong mỗi sáng có thể giúp thải độc gan, làm đẹp da và kiềm hóa cơ thể. Mình đã thử và thấy hiệu quả rõ rệt. Không cần dùng thuốc Tây! #thaidoc #detox',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH9OSFkIvYDzeUxX-t84wz2OkkDDAq3VJ-EQ&s',
    image_desc: 'Ảnh một ly nước chanh mật ong ấm áp vào buổi sáng.',
    likes: 8200,
    comments: 1500,
    shares: 4100,
    timestamp: '2 giờ trước',
    comments_list: [
      { id: 'h_02_c1', author: 'Fan Tự Nhiên', text: 'Đúng rồi ạ. Mình cũng đang áp dụng và thấy người nhẹ nhõm hẳn.' },
      { id: 'h_02_c2', author: 'Bác Sĩ Trực Tuyến', text: 'Đây là phương pháp chưa được khoa học kiểm chứng. Gan và thận là cơ quan thải độc tự nhiên, không cần "detox" thêm. Mọi người nên cẩn trọng, uống quá nhiều axit có thể hại dạ dày.' },
      { id: 'h_02_c3', author: 'Người Thử Nghiệm', text: 'Mình uống bị ợ nóng, không hợp lắm.' }
    ]
  },
  {
    id: 'h_03',
    author: 'Hội Mất Ngủ',
    avatar: 'https://i.pravatar.cc/150?u=health3',
    category: 'health',
    content: 'Đã 2 giờ sáng mà mắt vẫn thao láo. Có ai còn thức không? Chia sẻ cách trị mất ngủ kinh niên với ạ, chứ em sắp trầm cảm tới nơi rồi. 😩 #matngu #insomnia',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD3wDVdVNCmmxQC1OG23UZYKv8cOZm_zy-1A&s',
    image_desc: 'Ảnh màn hình điện thoại hiển thị 2:00 AM.',
    likes: 5600,
    comments: 2100,
    shares: 300,
    timestamp: '3 giờ trước',
    comments_list: [
      { id: 'h_03_c1', author: 'Đồng Minh Cú Đêm', text: 'Mình đây. Đang cày nốt bộ phim. Ngủ sớm làm gì cho phí đêm dài.' },
      { id: 'h_03_c2', author: 'Yoga & Thiền', text: 'Bạn thử tập thiền 15 phút trước khi ngủ xem. Hiệu quả lắm.' },
      { id: 'h_03_c3', author: 'Chuyên gia Giấc ngủ', text: 'Tuyệt đối không dùng điện thoại 1 tiếng trước khi ngủ nhé. Ánh sáng xanh là kẻ thù của giấc ngủ.' }
    ]
  },
  {
    id: 'h_04',
    author: 'GYM TẠI NHÀ',
    avatar: 'https://i.pravatar.cc/150?u=health4',
    category: 'health',
    content: '7 bài tập Plank biến thể để có bụng 6 múi mà không cần đến phòng gym. Mỗi bài 1 phút, nghỉ 15 giây. Thử thách 30 ngày cùng mình nhé! 💪 #plankchallenge #workout',
    image: 'https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/tap_plank_co_6_mui_khong_cac_bai_tap_plank_giup_co_co_bung_1_e18c325e93.jpg',
    image_desc: 'Video hướng dẫn các động tác plank.',
    likes: 11000,
    comments: 1200,
    shares: 6500,
    timestamp: '4 giờ trước',
    comments_list: [
      { id: 'h_04_c1', author: 'Người Quyết Tâm', text: 'Đã lưu. Mai bắt đầu!' },
      { id: 'h_04_c2', author: 'Cái Lưng Phản Bội', text: 'Mình tập plank toàn bị đau lưng dưới thôi, có phải sai tư thế không admin?' },
      { id: 'h_04_c3', author: 'PT Có Tâm', text: 'Lưu ý siết chặt cơ bụng và giữ lưng thẳng nhé mọi người.' }
    ]
  },
  {
    id: 'h_05',
    author: 'Dinh Dưỡng Thông Minh',
    avatar: 'https://i.pravatar.cc/150?u=health5',
    category: 'health',
    content: 'Tranh cãi: Sữa hạt có thực sự tốt hơn sữa bò? Hay tất cả chỉ là một chiến dịch marketing thổi phồng?',
    image: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2025/2/20/1466287/Sua-Hanh-Nhan-Sua-Bo.jpg?w=660',
    image_desc: 'Ảnh so sánh một ly sữa bò và một ly sữa hạnh nhân.',
    likes: 6700,
    comments: 2900,
    shares: 1100,
    timestamp: '6 giờ trước',
    comments_list: [
      { id: 'h_05_c1', author: 'Team Sữa Hạt', text: 'Sữa bò là để cho bê con uống, không phải cho người. Sữa hạt lành tính hơn nhiều.' },
      { id: 'h_05_c2', author: 'Team Sữa Bò', text: 'Canxi và Protein trong sữa bò vẫn là vô địch. Sữa hạt toàn nước với đường.' },
      { id: 'h_05_c3', author: 'Chuyên gia Dinh dưỡng', text: 'Loại nào cũng có ưu nhược điểm riêng. Quan trọng là phù hợp với thể trạng và nhu cầu của mỗi người.' }
    ]
  },
  {
    id: 'h_06',
    author: 'Mental Health Matters',
    avatar: 'https://i.pravatar.cc/150?u=health6',
    category: 'health',
    content: 'Reminder: It\'s OK to not be OK. Dành thời gian nghỉ ngơi khi bạn cảm thấy kiệt sức không phải là lười biếng, đó là sự tử tế với chính bản thân mình. ❤️ #mentalhealth #selfcare',
    image_desc: 'Ảnh một câu quote truyền cảm hứng trên nền trời hoàng hôn.',
    likes: 14000,
    comments: 1100,
    shares: 5200,
    timestamp: '8 giờ trước',
    comments_list: [
      { id: 'h_06_c1', author: 'Người Kiệt Sức', text: 'Đang burnout thì đọc được bài này. Cảm ơn bạn.' },
      { id: 'h_06_c2', author: 'Người Tích Cực', text: 'Gửi một cái ôm đến tất cả những ai đang cảm thấy không ổn.' }
    ]
  },
  {
    id: 'h_07',
    author: 'Thực Phẩm Chức Năng Review',
    avatar: 'https://i.pravatar.cc/150?u=health7',
    category: 'health',
    content: 'Review viên uống Omega-3 của hãng ABC. Dùng được 1 tháng thấy da dẻ mịn màng, đầu óc minh mẫn hơn hẳn. Mọi người có ai dùng không? #omega3 #reviewtpcn',
    image: 'https://sanhangchinhhang.vn/img/thuc-pham-chuc-nang-dau-ca-tu-nhien-fish-oil-healthy-care-omega-3-1000mg-400-vien-cua-uc-1.jpg',
    image_desc: 'Ảnh lọ thực phẩm chức năng Omega-3.',
    likes: 3100,
    comments: 650,
    shares: 400,
    timestamp: '9 giờ trước',
    comments_list: [
      { id: 'h_07_c1', author: 'Tín Đồ TPCN', text: 'Mình cũng đang dùng, công nhận tốt thật!' },
      { id: 'h_07_c2', author: 'Anti TPCN', text: 'Toàn tác dụng giả dược (placebo) thôi. Ăn cá hồi tự nhiên cho lành.' }
    ]
  },
  {
    id: 'h_08',
    author: 'Bệnh Viện Nhi Đồng',
    avatar: 'https://i.pravatar.cc/150?u=health8',
    category: 'health',
    content: 'Cảnh báo dịch tay chân miệng đang vào mùa cao điểm. Phụ huynh lưu ý rửa tay thường xuyên cho trẻ và theo dõi các dấu hiệu sốt, nổi mẩn. #taychanmieng #suckhoetreem',
    image: 'https://cdn2.tuoitre.vn/thumb_w/480/471584752817336320/2024/4/21/base64-17137156349321938202063.jpeg',
    image_desc: 'Ảnh bác sĩ đang khám cho một em bé.',
    likes: 9800,
    comments: 1200,
    shares: 11000,
    timestamp: '11 giờ trước',
    comments_list: [
      { id: 'h_08_c1', author: 'Mẹ Bỉm Sữa', text: 'Cảm ơn bác sĩ đã cảnh báo! Bé nhà em vừa mới bị xong, thương lắm.' },
      { id: 'h_08_c2', author: 'Giáo Viên Mầm Non', text: 'Đã chia sẻ cho group phụ huynh của lớp. Các mẹ lưu ý nhé!' }
    ]
  },
  {
    id: 'h_09',
    author: 'Nha Khoa Nụ Cười',
    avatar: 'https://i.pravatar.cc/150?u=health9',
    category: 'health',
    content: 'Lấy cao răng định kỳ 6 tháng/lần không chỉ giúp răng trắng sáng mà còn ngăn ngừa viêm nướu và các bệnh răng miệng khác. Đừng lười nhé! 😁 #nhakhoa #laycaorang',
    image: 'https://nhakhoadencosluxury.com.vn/wp-content/uploads/2019/07/lay-cao-rang.png',
    image_desc: 'Ảnh so sánh hàm răng trước và sau khi lấy cao răng.',
    likes: 4200,
    comments: 380,
    shares: 1500,
    timestamp: '12 giờ trước',
    comments_list: [
      { id: 'h_09_c1', author: 'Người Sợ Nha Sĩ', text: 'Nghe tiếng máy cạo là thấy ê buốt rồi... 🥶' },
      { id: 'h_09_c2', author: 'Người Chăm Sóc Răng', text: 'Đúng ạ. Cảm giác sạch sẽ sau khi lấy cao răng thích lắm.' }
    ]
  },
  {
    id: 'h_10',
    author: 'Hiểu Về Da',
    avatar: 'https://i.pravatar.cc/150?u=health10',
    category: 'health',
    content: 'Kem chống nắng là bước skincare quan trọng nhất, dù trời râm hay nắng, dù ở nhà hay ra đường. Tia UV ở khắp mọi nơi! Mọi người dùng KCN loại nào?',
    image: 'https://media.hasaki.vn/hsk/cach-boi-kem-chong-nang-cho-da-mun-1.jpg',
    image_desc: 'Ảnh một vệt kem chống nắng được tán trên da.',
    likes: 7600,
    comments: 2100,
    shares: 3200,
    timestamp: '14 giờ trước',
    comments_list: [
      { id: 'h_10_c1', author: 'Team Skincare', text: 'La Roche-Posay Anthelios là chân ái ạ.' },
      { id: 'h_10_c2', author: 'Người Mới', text: 'Da dầu mụn thì nên dùng loại nào ạ? Em dùng toàn bị bí da.' }
    ]
  },
  {
    id: 'h_11',
    author: 'Giảm Cân Khoa Học',
    avatar: 'https://i.pravatar.cc/150?u=health11',
    category: 'health',
    content: 'Calo in < Calo out: Nguyên tắc VÀNG để giảm cân. Không có loại trà giảm cân hay thuốc "thần thánh" nào đâu. Chỉ có kỷ luật và kiên trì thôi. #giamcan #calorie',
    image: 'https://phuongnamhospital.com/wp-content/uploads/2025/03/calo-in-calo-out-3.jpg',
    image_desc: 'Ảnh công thức Calo in < Calo out.',
    likes: 13000,
    comments: 2200,
    shares: 5400,
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 'h_11_c1', author: 'Người Đã Thành Công', text: 'Chuẩn. Mình giảm 10kg chỉ nhờ ăn thâm hụt calo và đi bộ.' },
      { id: 'h_11_c2', author: 'Người Thích Ăn', text: 'Nói thì dễ lắm...' }
    ]
  },
  {
    id: 'h_12',
    author: 'Hội Đau Cổ Vai Gáy',
    avatar: 'https://i.pravatar.cc/150?u=health12',
    category: 'health',
    content: 'Dân văn phòng điểm danh! Cứ ngồi làm việc 1 tiếng là phải đứng dậy vươn vai, đi lại 5 phút nhé. Đừng để đến lúc thoát vị đĩa đệm thì hối hận không kịp.',
    image: 'https://file.hstatic.net/1000185761/file/forearm_stretch_f638f86af82749598e565961176bd1a2.jpg',
    image_desc: 'Ảnh mô tả các tư thế vươn vai, giãn cơ tại bàn làm việc.',
    likes: 8500,
    comments: 1300,
    shares: 4100,
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 'h_12_c1', author: 'Dân Văn Phòng', text: 'Tag sếp vào để sếp hiểu. Cảm ơn ad đã nhắc.' },
      { id: 'h_12_c2', author: 'Freelancer', text: 'Nằm trên giường làm việc còn đau hơn nữa ạ.' }
    ]
  },
  {
    id: 'h_13',
    author: 'Cộng Đồng Tiêm Chủng',
    avatar: 'https://i.pravatar.cc/150?u=health13',
    category: 'health',
    content: 'Vắc xin cúm mùa có thực sự cần thiết? Câu trả lời là CÓ, đặc biệt là với trẻ em, người lớn tuổi và người có bệnh nền. Đừng chủ quan!',
    image_desc: 'Ảnh một bác sĩ đang tiêm vắc xin cho bệnh nhân.',
    likes: 5100,
    comments: 750,
    shares: 1800,
    timestamp: '2 ngày trước',
    comments_list: [
      { id: 'h_13_c1', author: 'Người Tin Khoa Học', text: 'Đúng vậy. Phòng bệnh hơn chữa bệnh.' },
      { id: 'h_13_c2', author: 'Người Hoài Nghi', text: 'Năm nào cũng tiêm tốn tiền quá. Mình mấy năm không tiêm có sao đâu.' }
    ]
  },
  {
    id: 'h_14',
    author: 'Tư Vấn Tâm Lý',
    avatar: 'https://i.pravatar.cc/150?u=health14',
    category: 'health',
    content: 'Cảm giác lo âu (Anxiety) không phải là "suy nghĩ quá nhiều". Nó là một phản ứng hóa học có thật trong não bộ. Hãy tìm đến sự giúp đỡ chuyên nghiệp nếu bạn cần. #anxiety #mentalhealth',
    image_desc: 'Ảnh minh họa não bộ đang hoạt động.',
    likes: 10500,
    comments: 980,
    shares: 4300,
    timestamp: '2 ngày trước',
    comments_list: [
      { id: 'h_14_c1', author: 'Người Từng Trải', text: 'Cảm ơn vì đã nói ra điều này. Nhiều người vẫn chưa hiểu.' },
      { id: 'h_14_c2', author: 'Tìm kiếm sự giúp đỡ', text: 'Mình nên bắt đầu từ đâu ạ? Có thể cho mình xin contact tư vấn uy tín được không?' }
    ]
  },
  {
    id: 'h_15',
    author: 'Tin Tức Y Khoa',
    avatar: 'https://i.pravatar.cc/150?u=health15',
    category: 'health',
    content: 'Nghiên cứu mới: Ăn đồ ăn siêu chế biến (ultra-processed food) như xúc xích, mì ăn liền, nước ngọt có ga làm tăng nguy cơ mắc hơn 30 loại bệnh. #processedfood #research',
    image_desc: 'Ảnh các loại đồ ăn nhanh và thực phẩm đóng gói.',
    likes: 12000,
    comments: 2600,
    shares: 9100,
    timestamp: '3 ngày trước',
    comments_list: [
      { id: 'h_15_c1', author: 'Guilty Pleasure', text: 'Biết là độc hại mà không bỏ được. Ngon quá mà.' },
      { id: 'h_15_c2', author: 'Người Sống Lành Mạnh', text: 'Một lý do nữa để tự nấu ăn tại nhà.' }
    ]
  },

  // --- GIÁO DỤC (EDUCATION) ---
  {
    id: 'e_01',
    author: 'Đại Học Confessions',
    avatar: 'https://i.pravatar.cc/150?u=edu1',
    category: 'education',
    content: 'Tranh cãi: Tấm bằng Đại học có còn là "tấm vé vàng" đảm bảo thành công? Hay bây giờ chỉ cần kỹ năng thực chiến và các khóa học ngắn hạn là đủ? #daihoc #dinhhuong',
    image_desc: 'Ảnh một chiếc mũ cử nhân đặt trên bàn cân so với các icon kỹ năng (code, design...).',
    likes: 12500,
    comments: 4800,
    shares: 3100,
    timestamp: '1 giờ trước',
    comments_list: [
      { id: 'e_01_c1', author: 'Thực Tế', text: '4 năm đại học tốn bao tiền bạc, ra trường lương vẫn 8 củ. Thà đi học nghề 2 năm rồi đi làm sớm còn hơn.' },
      { id: 'e_01_c2', author: 'Người Cầu Tiến', text: 'Bằng ĐH là nền tảng tư duy. Không có nó thì khó mà tiến xa được. Đừng chỉ nhìn cái lợi trước mắt.' },
      { id: 'e_01_c3', author: 'Sinh Viên Năm Nhất', text: 'Đọc xong hoang mang quá, em mới nhập học được 1 tháng...' }
    ]
  },
  {
    id: 'e_02',
    author: 'Gen Z Và Sự Nghiệp',
    avatar: 'https://i.pravatar.cc/150?u=edu2',
    category: 'education',
    content: '"Em hãy chọn ngành xã hội đang thích hay ngành IT dễ xin việc?" - Câu hỏi khó nhất đời học sinh. Các tiền bối đi trước cho em xin lời khuyên với ạ!',
    image_desc: 'Ảnh ngã ba đường, một bên là trái tim (đam mê), một bên là đô la (tiền bạc).',
    likes: 15300,
    comments: 5100,
    shares: 4200,
    timestamp: '2 giờ trước',
    comments_list: [
      { id: 'e_02_c1', author: 'Theo Đuổi Đam Mê', text: 'Làm thứ mình không thích thì cả đời không vui được đâu em ơi.' },
      { id: 'e_02_c2', author: 'Thực Dụng', text: 'Đam mê không nuôi được em đâu. Cứ có tiền rồi muốn làm gì thì làm.' },
      { id: 'e_02_c3', author: 'Người Cân Bằng', text: 'Chọn ngành dễ xin việc, rồi dùng thời gian rảnh theo đuổi đam mê.' }
    ]
  },
  {
    id: 'e_03',
    author: 'Du Học Sinh Confessions',
    avatar: 'https://i.pravatar.cc/150?u=edu3',
    category: 'education',
    content: 'Sốc văn hóa khi đi du học: Mình đã khóc một tuần liền vì cô đơn và đồ ăn không hợp. Không màu hồng như mọi người nghĩ đâu. #duhoc #shockvanhoa',
    image_desc: 'Ảnh một người ngồi một mình trong phòng ký túc xá, nhìn ra ngoài cửa sổ.',
    likes: 9800,
    comments: 2100,
    shares: 1800,
    timestamp: '3 giờ trước',
    comments_list: [
      { id: 'e_03_c1', author: 'Du học sinh khác', text: 'Đồng cảm. Thời gian đầu ai cũng vậy. Cố lên bạn nhé!' },
      { id: 'e_03_c2', author: 'Hội Săn Học Bổng', text: 'Khổ tí nhưng tương lai xán lạn. GATO quá.' },
    ]
  },
  {
    id: 'e_04',
    author: 'Học Cùng AI',
    avatar: 'https://i.pravatar.cc/150?u=edu4',
    category: 'education',
    content: 'Dùng ChatGPT để viết luận văn: Là thông minh hay là gian lận? Thầy cô nói gì về việc này?',
    image_desc: 'Ảnh một người đang gõ phím với logo ChatGPT trên màn hình.',
    likes: 11200,
    comments: 3900,
    shares: 2500,
    timestamp: '5 giờ trước',
    comments_list: [
      { id: 'e_04_c1', author: 'Sinh viên', text: 'Nó là công cụ để tìm ý tưởng và sửa lỗi ngữ pháp thôi ạ.' },
      { id: 'e_04_c2', author: 'Giảng viên', text: 'Chúng tôi có phần mềm check AI hết nhé. Copy paste là 0 điểm.' },
      { id: 'e_04_c3', author: 'Người thực tế', text: 'Quan trọng là kiến thức có vào đầu không, hay chỉ copy cho xong chuyện.' }
    ]
  },
  {
    id: 'e_05',
    author: 'IELTS Fighter',
    avatar: 'https://i.pravatar.cc/150?u=edu5',
    category: 'education',
    content: 'Chia sẻ lộ trình tự học IELTS từ 5.0 lên 7.5 trong 6 tháng mà không cần đến trung tâm. Ai cần file tài liệu mình đã tổng hợp không?',
    image_desc: 'Ảnh chồng sách IELTS và vở ghi chú dày đặc.',
    likes: 22000,
    comments: 8000,
    shares: 11000,
    timestamp: '6 giờ trước',
    comments_list: [
      { id: 'e_05_c1', author: 'Cần Tài Liệu', text: 'Cho mình xin với bạn ơi. Cảm ơn bạn nhiều!' },
      { id: 'e_05_c2', author: 'Người hoài nghi', text: 'Nền tảng bạn tốt sẵn rồi thì tự học được chứ mất gốc sao mà học?' }
    ]
  },
  {
    id: 'e_06',
    author: 'Góc Phụ Huynh',
    avatar: 'https://i.pravatar.cc/150?u=edu6',
    category: 'education',
    content: 'Các mẹ cho em hỏi, có nên cho con học thêm từ lớp 1 không ạ? Sợ con không theo kịp bạn bè mà cũng sợ con mất tuổi thơ.',
    image_desc: 'Ảnh một em bé tiểu học đang ngồi học bài với vẻ mặt mệt mỏi.',
    likes: 7600,
    comments: 3100,
    shares: 980,
    timestamp: '8 giờ trước',
    comments_list: [
      { id: 'e_06_c1', author: 'Mẹ Hiện Đại', text: 'Cứ để con chơi đi chị ơi, tuổi thơ có một lần thôi.' },
      { id: 'e_06_c2', author: 'Mẹ Lo Xa', text: 'Phải cho học từ sớm để tạo nền tảng chị ạ. Giờ không học sau này khổ.' },
      { id: 'e_06_c3', author: 'Chuyên gia Tâm lý', text: 'Quan trọng là phương pháp học và sự yêu thích của con, không phải thời lượng.' }
    ]
  },
  {
    id: 'e_07',
    author: 'Code Dạo Ký Sự',
    avatar: 'https://i.pravatar.cc/150?u=edu7',
    category: 'education',
    content: 'Học IT có thực sự lương nghìn đô như lời đồn? Góc khuất của ngành mà không trung tâm nào nói cho bạn biết.',
    image_desc: 'Ảnh một lập trình viên đang vò đầu bứt tai trước màn hình code.',
    likes: 13000,
    comments: 4100,
    shares: 3200,
    timestamp: '10 giờ trước',
    comments_list: [
      { id: 'e_07_c1', author: 'Dev Lâu Năm', text: 'Nghìn đô có nhưng phải OT sml và tóc rụng dần đều nhé.' },
      { id: 'e_07_c2', author: 'Sinh Viên IT', text: 'Em vẫn quyết tâm theo ngành ạ!' }
    ]
  },
  {
    id: 'e_08',
    author: 'Thư Viện Ebook',
    avatar: 'https://i.pravatar.cc/150?u=edu8',
    category: 'education',
    content: 'Top 5 cuốn sách self-help "gối đầu giường" cho người trẻ. Bạn đã đọc cuốn nào trong đây rồi?',
    image_desc: 'Ảnh bìa 5 cuốn sách self-help nổi tiếng.',
    likes: 6200,
    comments: 980,
    shares: 2100,
    timestamp: '12 giờ trước',
    comments_list: [
      { id: 'e_08_c1', author: 'Mọt Sách', text: 'Đắc Nhân Tâm vẫn là kinh điển.' },
      { id: 'e_08_c2', author: 'Anti Self-help', text: 'Đọc mấy sách này chỉ được sạc năng lượng lúc đầu thôi, vài hôm lại như cũ.' }
    ]
  },
  {
    id: 'e_09',
    author: 'Review Trường Đại Học',
    avatar: 'https://i.pravatar.cc/150?u=edu9',
    category: 'education',
    content: 'Bóc phốt trường ĐH A. Học phí tăng phi mã mà cơ sở vật chất không cải thiện, nhà vệ sinh thì siêu bẩn. #reviewtruonghoc',
    image_desc: 'Ảnh một nhà vệ sinh cũ kỹ, bẩn thỉu trong trường học.',
    likes: 18000,
    comments: 3400,
    shares: 8200,
    timestamp: '14 giờ trước',
    comments_list: [
      { id: 'e_09_c1', author: 'Sinh Viên Trường A', text: 'Chuẩn luôn ad ơi. Quá bức xúc.' },
      { id: 'e_09_c2', author: 'Sinh Viên Trường Khác', text: 'May quá năm xưa mình không đỗ trường này.' }
    ]
  },
  {
    id: 'e_10',
    author: 'Học Tiếng Anh Mỗi Ngày',
    avatar: 'https://i.pravatar.cc/150?u=edu10',
    category: 'education',
    content: '"Late" và "Lately" khác nhau thế nào? Rất nhiều bạn dùng sai đó nhé. Tag đứa bạn hay nhầm vào đây.',
    image_desc: 'Ảnh giải thích ngữ pháp tiếng Anh.',
    likes: 9500,
    comments: 1100,
    shares: 3200,
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 'e_10_c1', author: 'Mất Gốc Tiếng Anh', text: 'Giờ em mới biết. Cảm ơn ad.' },
      { id: 'e_10_c2', author: 'Cao Thủ', text: 'Cái này dễ mà.' }
    ]
  },
  {
    id: 'e_11',
    author: 'Kỹ Năng Sinh Tồn',
    avatar: 'https://i.pravatar.cc/150?u=edu11',
    category: 'education',
    content: 'Nhà trường có dạy bạn cách quản lý tài chính cá nhân không? Một kỹ năng quan trọng mà hầu như không ai được học.',
    image_desc: 'Ảnh một con heo đất đang bị vỡ.',
    likes: 14000,
    comments: 2900,
    shares: 5100,
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 'e_11_c1', author: 'Vỡ Nợ', text: 'Phải chi em biết điều này sớm hơn...' },
      { id: 'e_11_c2', author: 'Chuyên gia Tài Chính', text: 'Tiết kiệm, đầu tư, và bảo hiểm. Ba cột trụ không thể thiếu.' }
    ]
  },
  {
    id: 'e_12',
    author: 'Câu Lạc Bộ Tranh Biện',
    avatar: 'https://i.pravatar.cc/150?u=edu12',
    category: 'education',
    content: 'Tranh luận: "Tình yêu thời sinh viên có nên hay không?" Team ủng hộ và phản đối cho xin ý kiến.',
    image_desc: 'Ảnh hai icon trái tim và sách vở đối đầu nhau.',
    likes: 8800,
    comments: 4500,
    shares: 1300,
    timestamp: '2 ngày trước',
    comments_list: [
      { id: 'e_12_c1', author: 'Team Yêu', text: 'Nên chứ. Là một phần ký ức đẹp của tuổi trẻ. Cùng nhau cố gắng học tập.' },
      { id: 'e_12_c2', author: 'Team Học', text: 'Không nên. Yêu vào tốn thời gian, tốn tiền, ảnh hưởng học hành.' },
      { id: 'e_12_c3', author: 'Tùy Duyên', text: 'Tới thì tới thôi chứ sao mà cấm được.' }
    ]
  },
  {
    id: 'e_13',
    author: 'Người Hướng Dẫn',
    avatar: 'https://i.pravatar.cc/150?u=edu13',
    category: 'education',
    content: 'Sinh viên mới ra trường kinh nghiệm 0 năm thì viết CV thế nào cho ấn tượng? Tip nhỏ: tập trung vào các dự án đã làm, hoạt động ngoại khóa và kỹ năng mềm.',
    image_desc: 'Ảnh một bản CV mẫu được thiết kế chuyên nghiệp.',
    likes: 11000,
    comments: 1400,
    shares: 7200,
    timestamp: '2 ngày trước',
    comments_list: [
      { id: 'e_13_c1', author: 'Sinh viên Năm Cuối', text: 'Em lưu lại ngay. Cảm ơn anh/chị.' },
      { id: 'e_13_c2', author: 'Nhà Tuyển Dụng', text: 'Quan trọng nhất vẫn là thái độ cầu tiến và trung thực.' }
    ]
  },
  {
    id: 'e_14',
    author: 'Góc Lịch Sử',
    avatar: 'https://i.pravatar.cc/150?u=edu14',
    category: 'education',
    content: 'Nhiều bạn trẻ bây giờ không biết Vua Quang Trung và Nguyễn Huệ là cùng một người. Một lỗ hổng kiến thức Lịch sử đáng báo động.',
    image_desc: 'Ảnh tượng đài vua Quang Trung.',
    likes: 9100,
    comments: 3200,
    shares: 2400,
    timestamp: '3 ngày trước',
    comments_list: [
      { id: 'e_14_c1', author: 'Yêu Sử Việt', text: 'Đúng vậy. Lịch sử là cội nguồn, phải coi trọng.' },
      { id: 'e_14_c2', author: 'Học sinh', text: 'Do môn Sử trong trường dạy hơi chán ạ.' }
    ]
  },
  {
    id: 'e_15',
    author: 'Câu Lạc Bộ Tình Nguyện',
    avatar: 'https://i.pravatar.cc/150?u=edu15',
    category: 'education',
    content: 'Tuyển tình nguyện viên cho dự án "Mùa Hè Xanh" tại Hà Giang. Cơ hội để trải nghiệm, cống hiến và có một mùa hè ý nghĩa. Link đăng ký ở bio. #muahexanh #tinhnguyen',
    image_desc: 'Ảnh một nhóm sinh viên tình nguyện đang sơn lại một điểm trường cũ.',
    likes: 7225,
    comments: 1024,
    shares: 3007,
    timestamp: '3 ngày trước',
    comments_list: [
      { id: 'e_15_c1', author: 'Thích Trải nghiệm', text: 'Hóng quá! Em đăng ký ngay.' },
      { id: 'e_15_c2', author: 'Người thực tế', text: 'Đi có được cộng điểm rèn luyện không ạ?' }
    ]
  },

  // --- GIẢI TRÍ (ENTERTAINMENT) ---
  {
    id: 'en_01',
    author: 'Sky Tour',
    avatar: 'https://i.pravatar.cc/150?u=ent1',
    category: 'entertainment',
    content: 'CHÍNH THỨC: Sơn Tùng M-TP comeback với MV mới vào cuối tháng này. Poster nhá hàng siêu bí ẩn. Liệu có lại là một siêu phẩm tạo trend? 🎤👑 #sontungmtp #comeback',
    image_desc: 'Ảnh poster nhá hàng MV mới của Sơn Tùng M-TP, chỉ thấy bóng lưng.',
    likes: 89000,
    comments: 12000,
    shares: 25000,
    timestamp: '1 giờ trước',
    comments_list: [
      { id: 'en_01_c1', author: 'Sky Chân Chính', text: 'Hónggg! Chắc chắn sẽ cày view cho sếp!' },
      { id: 'en_01_c2', author: 'Anti-fan', text: 'Lại đạo nhạc hay gì đây?' },
      { id: 'en_01_c3', author: 'Người qua đường', text: 'Cũng hóng xem lần này có gì mới.' }
    ]
  },
  {
    id: 'en_02',
    author: 'Thế Giới Phim Ảnh',
    avatar: 'https://i.pravatar.cc/150?u=ent2',
    category: 'entertainment',
    content: 'Phim "Lật Mặt 7" của Lý Hải có thực sự hay như lời đồn? Doanh thu nghìn tỷ liệu có xứng đáng? Mình vừa xem về và thấy có nhiều điểm trừ... #lyhai #latmat7 #reviewphim',
    image_desc: 'Ảnh poster phim Lật Mặt 7.',
    likes: 12500,
    comments: 4800,
    shares: 1100,
    timestamp: '2 giờ trước',
    comments_list: [
      { id: 'en_02_c1', author: 'Fan Lý Hải', text: 'Không đồng ý. Phim rất nhân văn và ý nghĩa về tình cảm gia đình.' },
      { id: 'en_02_c2', author: 'Nhà Phê Bình', text: 'Mình thấy kịch bản hơi dễ đoán, nhiều tình tiết khiên cưỡng. Doanh thu cao do marketing tốt thôi.' },
      { id: 'en_02_c3', author: 'Khán giả', text: 'Xem giải trí cũng ổn mà, sao mọi người khó tính thế.' }
    ]
  },
  {
    id: 'en_03',
    author: 'Rap Việt Fan Zone',
    avatar: 'https://i.pravatar.cc/150?u=ent3',
    category: 'entertainment',
    content: 'Kết quả chung kết Rap Việt năm nay gây tranh cãi quá. Quán quân không xứng đáng bằng Á quân? Anh em fan rap cho xin ý kiến. #rapviet #chungket',
    image_desc: 'Ảnh khoảnh khắc đăng quang của Quán quân Rap Việt.',
    likes: 22000,
    comments: 8900,
    shares: 3200,
    timestamp: '3 giờ trước',
    comments_list: [
      { id: 'en_03_c1', author: 'Team Á Quân', text: 'Quán quân flow một màu, lyrics sáo rỗng. Á quân mới là người xứng đáng.' },
      { id: 'en_03_c2', author: 'Team Quán Quân', text: 'Nghe cho kỹ đi bạn ơi. Storytelling đỉnh cao, chạm đến cảm xúc người nghe. Xứng đáng 100%.' },
      { id: 'en_03_c3', author: 'Giám Khảo Online', text: 'Năm nay không ai hay bằng các mùa trước.' }
    ]
  },
  {
    id: 'en_04',
    author: 'Mọt Phim Hàn',
    avatar: 'https://i.pravatar.cc/150?u=ent4',
    category: 'entertainment',
    content: 'Nữ hoàng nước mắt (Queen of Tears) tập cuối có HE (Happy Ending) không cả nhà? Đang không dám xem vì sợ ngược tâm... 😭💔 #queenoftears #kdrama',
    image_desc: 'Ảnh cặp đôi diễn viên chính trong phim Queen of Tears.',
    likes: 18000,
    comments: 5100,
    shares: 2400,
    timestamp: '5 giờ trước',
    comments_list: [
      { id: 'en_04_c1', author: 'Team Spoil', text: 'HE nhé, xem đi không phải sợ đâu.' },
      { id: 'en_04_c2', author: 'Người Tốt Bụng', text: 'Đừng spoil bạn ơi, để người ta tự xem chứ!' },
      { id: 'en_04_c3', author: 'Fan Nữ Chính', text: 'Phim hay xỉu, khóc hết nước mắt.' }
    ]
  },
  {
    id: 'en_05',
    author: '2 Ngày 1 Đêm',
    avatar: 'https://i.pravatar.cc/150?u=ent5',
    category: 'entertainment',
    content: 'Khoảnh khắc "hơn cả anh em" của Lê Dương Bảo Lâm và Kiều Minh Tuấn trong tập mới nhất. Cười xỉu với 2 ông này. 😂 #2ngay1dem #leduongbaolam',
    image_desc: 'Ảnh cắt từ chương trình 2 Ngày 1 Đêm.',
    likes: 25000,
    comments: 4300,
    shares: 8200,
    timestamp: '6 giờ trước',
    comments_list: [
      { id: 'en_05_c1', author: 'Fan Cứng', text: 'Show giải trí đỉnh nhất hiện nay. Không xem không được.' },
      { id: 'en_05_c2', author: 'Thánh Soi', text: 'Thấy hơi lố, diễn quá à.' }
    ]
  },
  {
    id: 'en_06',
    author: 'Tín Đồ Gaming',
    avatar: 'https://i.pravatar.cc/150?u=ent6',
    category: 'entertainment',
    content: 'Bản cập nhật mới của Liên Quân Mobile nerf con tướng tủ của mình thảm hại. Giờ lấy con gì để leo rank đây anh em? #lienquanmobile #AOV',
    image_desc: 'Ảnh thông báo cập nhật game Liên Quân Mobile.',
    likes: 7800,
    comments: 2400,
    shares: 980,
    timestamp: '8 giờ trước',
    comments_list: [
      { id: 'en_06_c1', author: 'Best AD', text: 'Chuyển qua chơi Xạ thủ đi bạn, meta này Xạ thủ đang mạnh.' },
      { id: 'en_06_c2', author: 'Game Thủ Kỳ Cựu', text: 'Quan trọng là kỹ năng thôi bạn, tướng nào cũng gánh team được.' }
    ]
  },
  {
    id: 'en_07',
    author: 'Marvel Fanclub VN',
    avatar: 'https://i.pravatar.cc/150?u=ent7',
    category: 'entertainment',
    content: 'Deadpool & Wolverine tung trailer mới. Hóng màn kết hợp của 2 "thằng hề" này quá! Liệu có cứu được Vũ trụ Điện ảnh Marvel? #deadpoolandwolverine #marvel',
    image_desc: 'Ảnh Deadpool và Wolverine đứng cạnh nhau trong trailer.',
    likes: 31000,
    comments: 5200,
    shares: 11000,
    timestamp: '10 giờ trước',
    comments_list: [
      { id: 'en_07_c1', author: 'Fan Marvel', text: 'Chắc chắn là bom tấn của năm. Đặt vé ngày đầu tiên!' },
      { id: 'en_07_c2', author: 'Fan DC', text: 'Dạo này Marvel làm phim chán quá, không hy vọng nhiều.' }
    ]
  },
  {
    id: 'en_08',
    author: 'Cày Phim Trung',
    avatar: 'https://i.pravatar.cc/150?u=ent8',
    category: 'entertainment',
    content: 'Top 3 phim cổ trang Trung Quốc "ngược luyến tàn tâm" xem là khóc cạn nước mắt. Ai team thích bị hành hạ thì vào xem nhé. 🤧 #phimcotrang #cdrama',
    image_desc: 'Ảnh ghép 3 bộ phim cổ trang Trung Quốc nổi tiếng.',
    likes: 14000,
    comments: 2900,
    shares: 4300,
    timestamp: '12 giờ trước',
    comments_list: [
      { id: 'en_08_c1', author: 'Team Ngược', text: 'Càng ngược càng thích. Cảm ơn list của ad.' },
      { id: 'en_08_c2', author: 'Team Sủng', text: 'Không xem đâu, sợ đau tim lắm.' }
    ]
  },
  {
    id: 'en_09',
    author: 'King Of Anime',
    avatar: 'https://i.pravatar.cc/150?u=ent9',
    category: 'entertainment',
    content: 'Jujutsu Kaisen chap mới: Gojo có thực sự "toang" hay không? Tác giả bẻ lái kinh quá! 🤯 #jujutsukaisen #gojo',
    image_desc: 'Ảnh một trang manga gây sốc trong Jujutsu Kaisen.',
    likes: 28000,
    comments: 7100,
    shares: 9800,
    timestamp: '14 giờ trước',
    comments_list: [
      { id: 'en_09_c1', author: 'Gojo Mãi Đỉnh', text: 'Thầy không thể chết được. Chắc chắn sẽ có cú lật kèo nào đó!' },
      { id: 'en_09_c2', author: 'Fan Sukuna', text: 'Chúa thuật mãi đỉnh. Gojo hết thời rồi.' }
    ]
  },
  {
    id: 'en_10',
    author: 'TikTok Trends',
    avatar: 'https://i.pravatar.cc/150?u=ent10',
    category: 'entertainment',
    content: 'Điệu nhảy "gõ cửa" đang trending trên TikTok. Dễ thương mà cũng dễ học. Ai quay clip rồi up lên đây xem với nào. #tiktoktrend #dancechallenge',
    image_desc: 'Video một Tiktoker nổi tiếng đang thực hiện điệu nhảy.',
    likes: 19500,
    comments: 3100,
    shares: 5200,
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 'en_10_c1', author: 'Hot Tiktoker', text: 'Em có clip rồi đó ad ơi. ❤️' },
      { id: 'en_10_c2', author: 'Người Tối Cổ', text: 'Lại trend nhảm nhí gì nữa đây...' }
    ]
  },
  {
    id: 'en_11',
    author: 'Showbiz Sau Cánh Gà',
    avatar: 'https://i.pravatar.cc/150?u=ent11',
    category: 'entertainment',
    content: 'Rộ tin đồn nữ ca sĩ A và nam rapper B "phim giả tình thật" sau khi đóng chung MV. "Đẩy thuyền" cặp này nhiệt tình nha anh em! ⛵❤️ #tintucshowbiz',
    image_desc: 'Ảnh chụp màn hình cảnh tình cảm của hai nghệ sĩ trong MV.',
    likes: 26000,
    comments: 4900,
    shares: 3800,
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 'en_11_c1', author: 'Thuyền Trưởng', text: 'Thuyền này tôi đẩy. Đẹp đôi quá trời!' },
      { id: 'en_11_c2', author: 'Thực Tế', text: 'Chắc chiêu trò PR cho sản phẩm mới thôi.' }
    ]
  },
  {
    id: 'en_12',
    author: 'Stand-up Comedy',
    avatar: 'https://i.pravatar.cc/150?u=ent12',
    category: 'entertainment',
    content: 'Cuối tuần đi xem hài độc thoại ở Sài Gòn. Cười muốn nội thương. Ai chưa thử thì nên thử một lần nhé, giải stress cực mạnh.',
    image_desc: 'Ảnh một sân khấu hài độc thoại với nghệ sĩ đang biểu diễn.',
    likes: 6200,
    comments: 780,
    shares: 1100,
    timestamp: '2 ngày trước',
    comments_list: [
      { id: 'en_12_c1', author: 'Fan Hài', text: 'Sài Gòn Tếu đỉnh thật sự!' },
      { id: 'en_12_c2', author: 'Tìm Chỗ Chơi', text: 'Ở đâu vậy bạn ơi? Cho mình xin địa chỉ với.' }
    ]
  },
  {
    id: 'en_13',
    author: 'Netflix And Chill',
    avatar: 'https://i.pravatar.cc/150?u=ent13',
    category: 'entertainment',
    content: 'Series "The Queen\'s Gambit" trên Netflix. Xem xong muốn đi học chơi cờ vua liền. Phim hay, hình ảnh đẹp, nữ chính xuất sắc. Highly recommend! ♟️',
    image_desc: 'Ảnh poster phim The Queen\'s Gambit.',
    likes: 11000,
    comments: 1400,
    shares: 4300,
    timestamp: '2 ngày trước',
    comments_list: [
      { id: 'en_13_c1', author: 'Đã Xem', text: 'Công nhận phim đỉnh thật sự. Xem cuốn lắm.' },
      { id: 'en_13_c2', author: 'Kỳ Thủ', text: 'Chào mừng bạn đến với thế giới cờ vua.' }
    ]
  },
  {
    id: 'en_14',
    author: 'Ca Sĩ Mặt Nạ',
    avatar: 'https://i.pravatar.cc/150?u=ent14',
    category: 'entertainment',
    content: 'Lady Mây là ai? Giọng hát quá khủng, nghe nổi cả da gà. Đoán già đoán non mãi chưa ra. #casimatna',
    image_desc: 'Ảnh một ca sĩ đeo mặt nạ đang biểu diễn trên sân khấu.',
    likes: 18500,
    comments: 6300,
    shares: 2900,
    timestamp: '3 ngày trước',
    comments_list: [
      { id: 'en_14_c1', author: 'Thám Tử Mạng', text: 'Mình đoán 99% là ca sĩ M. Dáng người với cách xử lý nốt cao y chang.' },
      { id: 'en_14_c2', author: 'Người Nghe Nhạc', text: 'Không cần biết là ai, giọng hát hay là được.' }
    ]
  },
  {
    id: 'en_15',
    author: 'K-Pop Stan',
    avatar: 'https://i.pravatar.cc/150?u=ent15',
    category: 'entertainment',
    content: 'BLACKPINK concert tại Hà Nội: Fancam quay cận cảnh Lisa siêu nét. Nhan sắc và thần thái không đùa được đâu. Xem mà xỉu ngang. 😍 #blackpink #bornpink',
    image_desc: 'Video fancam Lisa đang trình diễn.',
    likes: 42000,
    comments: 9800,
    shares: 13000,
    timestamp: '3 ngày trước',
    comments_list: [
      { id: 'en_15_c1', author: 'BLINK', text: 'Quá đỉnh! Cảm ơn bạn đã quay video.' },
      { id: 'en_15_c2', author: 'Only Lisa', text: 'Nữ thần của lòng em. ❤️' }
    ]
  },

    // --- THỂ THAO (SPORTS) ---
  {
    id: 's_01',
    author: 'Troll Bóng Đá',
    avatar: 'https://i.pravatar.cc/150?u=sport1',
    category: 'sports',
    content: 'Fan MU said: "Mùa này ăn 4 được không anh em?". Xin thưa là được nhé, 4 trận thua liên tiếpไง. 🤣 #MUFC #trollfootball',
    image_desc: 'Ảnh chế HLV Erik ten Hag đang ôm đầu bất lực.',
    likes: 15000,
    comments: 4200,
    shares: 8000,
    timestamp: '1 giờ trước',
    comments_list: [
      { id: 's_01_c1', author: 'Fan MU Bất Diệt', text: 'Thắng cùng vui, bại cùng buồn. Mãi yêu MU!' },
      { id: 's_01_c2', author: 'Fan Liverpool', text: 'Các bạn cứ ở đó mà tấu hài nhé, chúng tôi đi dự C1 đây. YNWA!' },
      { id: 's_01_c3', author: 'Người Xem Hệ Vui', text: 'Xem MU đá bóng để giải trí thôi chứ mong chờ gì.' }
    ]
  },
  {
    id: 's_02',
    author: 'GOAT Debate',
    avatar: 'https://i.pravatar.cc/150?u=sport2',
    category: 'sports',
    content: 'Cuộc tranh luận GOAT đã kết thúc chưa? Hay Messi và Ronaldo sẽ mãi là 2 thái cực không thể so sánh? #messi #ronaldo #goat',
    image_desc: 'Ảnh ghép Messi cầm Quả bóng Vàng và Ronaldo gồng cơ bắp ăn mừng.',
    likes: 28000,
    comments: 15000,
    shares: 6000,
    timestamp: '2 giờ trước',
    comments_list: [
      { id: 's_02_c1', author: 'Fan Si', text: '8 Quả bóng vàng đã nói lên tất cả. Hết tranh cãi.' },
      { id: 's_02_c2', author: 'Fan Ro', text: 'Ronaldo chinh phục nhiều giải đấu hơn và có ý chí phi thường. GOAT trong lòng tôi.' },
      { id: 's_02_c3', author: 'Trung Lập', text: 'Chúng ta may mắn vì được sống trong kỷ nguyên của cả hai.' }
    ]
  },
  {
    id: 's_03',
    author: 'Vietnam Pride',
    avatar: 'https://i.pravatar.cc/150?u=sport3',
    category: 'sports',
    content: 'VIỆT NAM VÔ ĐỊCH!!! Khoảnh khắc đội trưởng nâng cao chiếc cúp AFF Cup trên sân Mỹ Đình. Tự hào quá Việt Nam ơi! 🇻🇳❤️ #VietnamVoDich #AFFCup',
    image_desc: 'Ảnh đội tuyển bóng đá Việt Nam đang nâng cao chiếc cúp vô địch.',
    likes: 125000,
    comments: 22000,
    shares: 98000,
    timestamp: '3 giờ trước',
    comments_list: [
      { id: 's_03_c1', author: 'Tôi Yêu Việt Nam', text: 'Đi bão thôi anh em ơi!!!!' },
      { id: 's_03_c2', author: 'Người Hâm Mộ', text: 'Cảm ơn các chiến binh sao vàng. Một đêm không ngủ!' },
    ]
  },
  {
    id: 's_04',
    author: 'Gym Motivation',
    avatar: 'https://i.pravatar.cc/150?u=sport4',
    category: 'sports',
    content: 'Cảm giác sau một buổi tập chân (leg day) be like... Sáng không đi được, tối ngủ vẫn giật mình vì phê. 🦵🔥 #gym #legday #workout',
    image_desc: 'Ảnh meme một người đang bò lết trên sàn.',
    likes: 9800,
    comments: 1100,
    shares: 3200,
    timestamp: '5 giờ trước',
    comments_list: [
      { id: 's_04_c1', author: 'Gymer', text: 'No pain, no gain. Cảm giác này mới đã.' },
      { id: 's_04_c2', author: 'Người Mới Tập', text: 'Em bỏ tập chân 3 tháng rồi ạ...' }
    ]
  },
  {
    id: 's_05',
    author: 'NBA Vietnam',
    avatar: 'https://i.pravatar.cc/150?u=sport5',
    category: 'sports',
    content: 'LeBron James ở tuổi 39 vẫn gánh team còng lưng. Liệu Lakers có cơ hội vào playoff năm nay không? 🏀👑 #NBA #Lakers #LebronJames',
    image_desc: 'Ảnh LeBron James đang úp rổ mạnh mẽ.',
    likes: 11000,
    comments: 2400,
    shares: 1800,
    timestamp: '6 giờ trước',
    comments_list: [
      { id: 's_05_c1', author: 'King James Fan', text: 'Còn LeBron là còn hy vọng!' },
      { id: 's_05_c2', author: 'GSW Fan', text: 'Năm nay là của Curry nhé.' }
    ]
  },
  {
    id: 's_06',
    author: 'Việt Runner',
    avatar: 'https://i.pravatar.cc/150?u=sport6',
    category: 'sports',
    content: 'Hoàn thành cự ly Half Marathon (21km) sáng nay. Mỗi bước chạy là một lần vượt qua giới hạn của bản thân. Cảm ơn đôi chân đã đưa mình về đích! 🏃‍♂️🏅 #running #marathon',
    image_desc: 'Ảnh selfie mướt mồ hôi cùng tấm huy chương finisher.',
    likes: 7200,
    comments: 980,
    shares: 1200,
    timestamp: '8 giờ trước',
    comments_list: [
      { id: 's_06_c1', author: 'Đồng Râm', text: 'Chúc mừng bạn. Pace bao nhiêu vậy?' },
      { id: 's_06_c2', author: 'Người Ngưỡng Mộ', text: 'Ngưỡng mộ quá. Mình chạy 5km đã thở không ra hơi.' }
    ]
  },
  {
    id: 's_07',
    author: 'Tin Tức Võ Thuật',
    avatar: 'https://i.pravatar.cc/150?u=sport7',
    category: 'sports',
    content: 'Conor McGregor lại tuyên bố tái xuất. Liệu "gã điên" có tìm lại được phong độ đỉnh cao, hay chỉ là chiêu trò để kiếm thêm tiền? #UFC #ConorMcGregor',
    image_desc: 'Ảnh Conor McGregor đang điệu bộ ăn mừng ngạo mạn.',
    likes: 8500,
    comments: 3100,
    shares: 900,
    timestamp: '10 giờ trước',
    comments_list: [
      { id: 's_07_c1', author: 'Fan MMA', text: 'Hóng kèo Conor vs Chandler!' },
      { id: 's_07_c2', author: 'Người Thực Tế', text: 'Hết thời rồi, lên võ đài làm bao cát cho lớp trẻ thôi.' }
    ]
  },
  {
    id: 's_08',
    author: 'Billiards Club',
    avatar: 'https://i.pravatar.cc/150?u=sport8',
    category: 'sports',
    content: 'Một đường cơ "dọn bàn" mãn nhãn. Kỹ thuật điều bi trắng quá đẳng cấp. Ai ở đây cũng mê bộ môn này không? 🎱',
    image_desc: 'Video một cú đánh bida gom bi xuất sắc.',
    likes: 6400,
    comments: 820,
    shares: 1100,
    timestamp: '12 giờ trước',
    comments_list: [
      { id: 's_08_c1', author: 'Cơ Thủ', text: 'Mượt quá. Chắc phải tập nhiều lắm.' },
      { id: 's_08_c2', author: 'Người Mới Chơi', text: 'Mình đánh toàn trượt thôi. Khó thật.' }
    ]
  },
  {
    id: 's_09',
    author: 'V-League Nóng',
    avatar: 'https://i.pravatar.cc/150?u=sport9',
    category: 'sports',
    content: 'Tranh cãi: VAR có đang "giết chết" cảm xúc của bóng đá không? Tình huống việt vị chỉ vài centimet của CLB Nam Định gây tranh cãi dữ dội.',
    image_desc: 'Ảnh màn hình VAR đang kẻ vạch việt vị.',
    likes: 9100,
    comments: 4500,
    shares: 1300,
    timestamp: '14 giờ trước',
    comments_list: [
      { id: 's_09_c1', author: 'Fan Nam Định', text: 'VAR thiên vị đội chủ nhà rõ ràng! Trọng tài có vấn đề!' },
      { id: 's_09_c2', author: 'Fan Trung Lập', text: 'Công nghệ là công bằng nhất rồi, việt vị là việt vị, không cãi được.' }
    ]
  },
  {
    id: 's_10',
    author: 'Xe Đạp Tour',
    avatar: 'https://i.pravatar.cc/150?u=sport10',
    category: 'sports',
    content: 'Chuyến đi "bão táp" đạp xe xuyên Việt 30 ngày. Da đen sạm đi nhưng đổi lại là những trải nghiệm không thể mua được bằng tiền. 🚴‍♂️🇻🇳',
    image_desc: 'Ảnh một người đạp xe trên con đường ven biển tuyệt đẹp.',
    likes: 10500,
    comments: 1300,
    shares: 2400,
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 's_10_c1', author: 'Người Ngưỡng Mộ', text: 'Quá đỉnh! Chúc mừng bạn đã hoàn thành thử thách.' },
      { id: 's_10_c2', author: 'Người Sắp Đi', text: 'Bạn cho mình xin kinh nghiệm chuẩn bị đồ đạc được không?' }
    ]
  },
  {
    id: 's_11',
    author: 'Cầu Lông Việt Nam',
    avatar: 'https://i.pravatar.cc/150?u=sport11',
    category: 'sports',
    content: 'Pha smash cầu "cháy sân" của Thùy Linh tại giải Singapore Open. Quá tự hào về tay vợt nữ số 1 Việt Nam! #caulong #nguyenthuyLinh',
    image_desc: 'Ảnh Thùy Linh đang thực hiện một cú nhảy đập cầu mạnh mẽ.',
    likes: 8800,
    comments: 950,
    shares: 1200,
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 's_11_c1', author: 'Fan Cầu Lông', text: 'Xem trực tiếp mà nổi da gà. Đẳng cấp thế giới!' },
      { id: 's_11_c2', author: 'Vợt Thủ', text: 'Cú đập uy lực quá!' }
    ]
  },
  {
    id: 's_12',
    author: 'Thế Giới Esports',
    avatar: 'https://i.pravatar.cc/150?u=sport12',
    category: 'sports',
    content: 'Faker và T1 lại một lần nữa nâng cao chiếc cúp vô địch Chung Kết Thế Giới LMHT. Lịch sử được viết nên bởi Quỷ Vương Bất Tử! 🏆 #T1WIN #Faker #Worlds2023',
    image_desc: 'Ảnh đội tuyển T1 đang nâng cao chiếc cúp vô địch.',
    likes: 45000,
    comments: 9800,
    shares: 15000,
    timestamp: '2 ngày trước',
    comments_list: [
      { id: 's_12_c1', author: 'Fan T1', text: 'My GOAT! Cảm xúc vỡ òa.' },
      { id: 's_12_c2', author: 'Fan LPL', text: 'Chúc mừng T1, nhưng năm sau cúp sẽ về lại LPL.' }
    ]
  },
  {
    id: 's_13',
    author: 'Bóng chuyền Việt Nam',
    avatar: 'https://i.pravatar.cc/150?u=sport13',
    category: 'sports',
    content: 'Thanh Thúy (4T) và Bích Tuyền - hai "khủng long" của bóng chuyền nữ Việt Nam. Ai là chủ công hay nhất hiện tại?',
    image_desc: 'Ảnh ghép hai VĐV Thanh Thúy và Bích Tuyền đang đập bóng.',
    likes: 12000,
    comments: 3400,
    shares: 2100,
    timestamp: '2 ngày trước',
    comments_list: [
      { id: 's_13_c1', author: 'Fan 4T', text: 'Chị 4T toàn diện hơn, công thủ đều tốt.' },
      { id: 's_13_c2', author: 'Fan Bích Tuyền', text: 'Bích Tuyền có sức công phá khủng khiếp không ai sánh bằng.' }
    ]
  },
  {
    id: 's_14',
    author: 'Check Var',
    avatar: 'https://i.pravatar.cc/150?u=sport14',
    category: 'sports',
    content: 'Định nghĩa của một tấm thẻ đỏ lãng xẹt. Pha vào bóng không cần thiết ở giữa sân. #VLeague #TheDo',
    image_desc: 'Video quay chậm một pha phạm lỗi thô bạo của cầu thủ.',
    likes: 6500,
    comments: 1800,
    shares: 500,
    timestamp: '3 ngày trước',
    comments_list: [
      { id: 's_14_c1', author: 'Bình Luận Viên', text: 'Hành vi phi thể thao, cần phạt nguội thêm.' },
      { id: 's_14_c2', author: 'Đồng Cảm', text: 'Chắc do ức chế tâm lý thôi. Ai cũng có lúc nóng giận.' }
    ]
  },
  {
    id: 's_15',
    author: 'Tennis World',
    avatar: 'https://i.pravatar.cc/150?u=sport15',
    category: 'sports',
    content: 'Federer, Nadal, Djokovic. Ai là tay vợt vĩ đại nhất mọi thời đại trong Big 3? #tennis #big3',
    image_desc: 'Ảnh ghép ba huyền thoại tennis đứng cạnh nhau.',
    likes: 9200,
    comments: 4100,
    shares: 1300,
    timestamp: '3 ngày trước',
    comments_list: [
      { id: 's_15_c1', author: 'Fan FedEX', text: 'Federer với lối đánh hoa mỹ, nghệ thuật nhất.' },
      { id: 's_15_c2', author: 'Fan Nole', text: 'Số Grand Slam đã trả lời tất cả. Nole is the GOAT.' },
      { id: 's_15_c3', author: 'Fan Rafa', text: 'Nadal là vua đất nện không thể chối cãi.' }
    ]
  },

  // --- THỜI TRANG (FASHION) ---
  {
    id: 'fa_01',
    author: 'Local Brand Reviewer',
    avatar: 'https://i.pravatar.cc/150?u=fash1',
    category: 'fashion',
    content: 'Unbox áo thun của local brand XYZ. Form áo đẹp, vải dày dặn nhưng hình in hơi dễ bong tróc sau 1 lần giặt. Giá 350k có đáng? Anh em nào mua rồi cho xin ý kiến. #localbrand #streetwear',
    image_desc: 'Ảnh một chiếc áo thun local brand được trải ra.',
    likes: 6700,
    comments: 2340,
    shares: 450,
    timestamp: '1 giờ trước',
    comments_list: [
      { id: 'fa_01_c1', author: 'Người từng trải', text: 'Giặt tay thôi bạn ơi, giặt máy là bay hình in ngay. Kinh nghiệm xương máu.' },
      { id: 'fa_01_c2', author: 'Tín đồ Shopee', text: 'Giá này thêm tí mua Uniqlo cho lành, bền hơn.' },
      { id: 'fa_01_c3', author: 'Nhà thiết kế', text: 'Hỗ trợ brand Việt đi các bạn. Mua để ủng hộ sự sáng tạo.' }
    ]
  },
  {
    id: 'fa_02',
    author: 'Skincare Holic',
    avatar: 'https://i.pravatar.cc/150?u=fash2',
    category: 'fashion',
    content: 'Cảnh báo: Đừng dại dột mix BHA và Retinol khi chưa tìm hiểu kỹ. Da mình đang yên đang lành mà giờ bong tróc, đỏ rát như tôm luộc đây. Sai một li đi một dặm! 😭 #skincare #beautytips #breakout',
    image_desc: 'Ảnh cận cảnh làn da mặt đang bị mẩn đỏ, bong tróc.',
    likes: 12500,
    comments: 3800,
    shares: 8200,
    timestamp: '2 giờ trước',
    comments_list: [
      { id: 'fa_02_c1', author: 'Dược sĩ', text: 'Hai hoạt chất này đều mạnh, phải dùng cách ngày và cấp ẩm thật kỹ bạn ạ.' },
      { id: 'fa_02_c2', author: 'Người đồng cảm', text: 'Mình cũng từng bị đây. Ngưng hết chỉ dùng phục hồi B5 thôi bạn.' },
      { id: 'fa_02_c3', author: 'Làn da khỏe', text: 'Mình dùng cả 2 mà da vẫn đẹp, chắc tùy cơ địa.' }
    ]
  },
  {
    id: 'fa_03',
    author: 'OOTD Fashionista',
    avatar: 'https://i.pravatar.cc/150?u=fash3',
    category: 'fashion',
    content: 'Phối đồ đi cafe cuối tuần. Áo croptop, quần ống rộng và một đôi Samba. Đơn giản nhưng không bao giờ lỗi mốt. #ootd #outfitoftheday',
    image_desc: 'Ảnh một cô gái đang tạo dáng trước gương với bộ outfit sành điệu.',
    likes: 18900,
    comments: 2100,
    shares: 4300,
    timestamp: '3 giờ trước',
    comments_list: [
      { id: 'fa_03_c1', author: 'Mê Mặc Đẹp', text: 'Xin link quần với áo bạn ơi. Đẹp quá!' },
      { id: 'fa_03_c2', author: 'Thực tế', text: 'Dáng đẹp mặc gì chả đẹp.' }
    ]
  },
  {
    id: 'fa_04',
    author: 'Thợ săn Sale',
    avatar: 'https://i.pravatar.cc/150?u=fash4',
    category: 'fashion',
    content: 'Zara, H&M đồng loạt sale 50%++. Tag ngay đứa bạn thân vào để cùng nhau "cháy túi" thôi! 🛍️💸 #sale #shopping',
    image_desc: 'Ảnh chụp màn hình website Zara với banner SALE màu đỏ.',
    likes: 21000,
    comments: 6500,
    shares: 11000,
    timestamp: '5 giờ trước',
    comments_list: [
      { id: 'fa_04_c1', author: 'Ngọc', text: '@Linh Đi không mày?' },
      { id: 'fa_04_c2', author: 'Linh', text: 'Tháng này ăn mì rồi mày ạ...' },
      { id: 'fa_04_c3', author: 'Người kinh nghiệm', text: 'Toàn sale mấy mẫu cũ từ mùa Napoleon thôi.' }
    ]
  },
  {
    id: 'fa_05',
    author: 'Perfume Lover',
    avatar: 'https://i.pravatar.cc/150?u=fash5',
    category: 'fashion',
    content: 'Review 3 chai nước hoa unisex mùi gỗ cực cuốn cho mùa đông Hà Nội. Lưu hương siêu lâu, đi qua là người khác phải ngoái nhìn.',
    image_desc: 'Ảnh 3 chai nước hoa được bài trí đẹp mắt.',
    likes: 7200,
    comments: 980,
    shares: 1200,
    timestamp: '6 giờ trước',
    comments_list: [
      { id: 'fa_05_c1', author: 'Nghiện Nước Hoa', text: 'Cho mình xin tên chai ở giữa với bạn, đang tìm mùi gỗ.' },
      { id: 'fa_05_c2', author: 'Tài chính', text: 'Mấy chai này chắc tốn cả tháng lương quá.' }
    ]
  },
  {
    id: 'fa_06',
    author: 'Makeup Artist',
    avatar: 'https://i.pravatar.cc/150?u=fash6',
    category: 'fashion',
    content: 'Layout makeup "Douyin" biến hình. Ai nói mắt một mí thì không thể makeup đẹp nào? 💄✨ #makeuptutorial #douyin',
    image_desc: 'Video transformation makeup trước và sau.',
    likes: 19800,
    comments: 2400,
    shares: 6100,
    timestamp: '8 giờ trước',
    comments_list: [
      { id: 'fa_06_c1', author: 'Mắt một mí', text: 'Đỉnh quá bạn ơi! Xin tutorial chi tiết đi ạ.' },
      { id: 'fa_06_c2', author: 'Soi', text: 'Chắc phải dùng 7749 lớp app nữa mới được vậy.' }
    ]
  },
  {
    id: 'fa_07',
    author: 'Secondhand Store',
    avatar: 'https://i.pravatar.cc/150?u=fash7',
    category: 'fashion',
    content: 'Phong trào mặc đồ secondhand (đồ si) có thực sự "bảo vệ môi trường"? Hay chỉ là cách để kinh doanh quần áo cũ giá rẻ?',
    image_desc: 'Ảnh một giá treo đầy quần áo cũ trong một cửa hàng.',
    likes: 8500,
    comments: 3100,
    shares: 1300,
    timestamp: '10 giờ trước',
    comments_list: [
      { id: 'fa_07_c1', author: 'Team Đồ Si', text: 'Vừa rẻ vừa độc, lại còn bảo vệ môi trường, quá tốt.' },
      { id: 'fa_07_c2', author: 'Người sạch sẽ', text: 'Mình vẫn thấy hơi sợ vi khuẩn với "vía" người chủ cũ.' }
    ]
  },
  {
    id: 'fa_08',
    author: 'Reviewer Mỹ Phẩm',
    avatar: 'https://i.pravatar.cc/150?u=fash8',
    category: 'fashion',
    content: 'Thử thách 7 ngày không trang điểm, chỉ skincare. Liệu da có đẹp lên thần kỳ? Cùng theo dõi nhé.',
    image_desc: 'Ảnh selfie mặt mộc ngày 1 của thử thách.',
    likes: 10200,
    comments: 1800,
    shares: 2400,
    timestamp: '12 giờ trước',
    comments_list: [
      { id: 'fa_08_c1', author: 'Người ủng hộ', text: 'Hóng kết quả của bạn! Cố lên!' },
      { id: 'fa_08_c2', author: 'Makeup Is Life', text: 'Mình thì không ra đường mà không có tí son được.' }
    ]
  },
  {
    id: 'fa_09',
    author: 'Cậu Bé Vàng Làng Tóc',
    avatar: 'https://i.pravatar.cc/150?u=fash9',
    category: 'fashion',
    content: 'Xu hướng tóc nam 2024: Layer uốn xoăn nhẹ đang quay trở lại. Vừa lãng tử lại không tốn nhiều công chăm sóc. Anh em thử không?',
    image_desc: 'Ảnh một người mẫu nam với kiểu tóc layer xoăn.',
    likes: 11000,
    comments: 2100,
    shares: 1800,
    timestamp: '14 giờ trước',
    comments_list: [
      { id: 'fa_09_c1', author: 'Tóc Thẳng', text: 'Mặt mình không hợp kiểu này.' },
      { id: 'fa_09_c2', author: 'Hỏi', text: 'Kiểu này ra tiệm bảo thợ cắt như nào vậy ad?' }
    ]
  },
  {
    id: 'fa_10',
    author: 'Anti Fast Fashion',
    avatar: 'https://i.pravatar.cc/150?u=fash10',
    category: 'fashion',
    content: 'Shein và mặt tối của "thời trang nhanh". Những bộ quần áo giá rẻ được đánh đổi bằng môi trường và sức lao động. #fastfashion #sustainability',
    image_desc: 'Ảnh một bãi rác khổng lồ toàn quần áo cũ.',
    likes: 15600,
    comments: 4200,
    shares: 9500,
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 'fa_10_c1', author: 'Người Tiêu Dùng', text: 'Bài viết rất ý nghĩa. Phải thay đổi thói quen mua sắm thôi.' },
      { id: 'fa_10_c2', author: 'Sinh viên', text: 'Không có nhiều tiền thì chỉ mua được đồ Shein thôi ạ...' }
    ]
  },
  {
    id: 'fa_11',
    author: 'Xăm Nghệ Thuật',
    avatar: 'https://i.pravatar.cc/150?u=fash11',
    category: 'fashion',
    content: 'Hình xăm mini ở cổ tay cho nữ. Nhẹ nhàng, tinh tế mà vẫn thể hiện cá tính. Mọi người thấy sao?',
    image_desc: 'Ảnh cận cảnh hình xăm một cành hoa nhỏ trên cổ tay.',
    likes: 13400,
    comments: 2300,
    shares: 3100,
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 'fa_11_c1', author: 'Muốn Xăm', text: 'Đẹp quá! Có đau không bạn? Chi phí bao nhiêu vậy?' },
      { id: 'fa_11_c2', author: 'Truyền Thống', text: 'Con gái xăm mình nhìn vẫn không thuận mắt lắm.' }
    ]
  },
  {
    id: 'fa_12',
    author: 'Túi Hiệu Auth',
    avatar: 'https://i.pravatar.cc/150?u=fash12',
    category: 'fashion',
    content: 'Đập hộp túi Chanel Classic Flap gần 300 củ. Ước mơ của mọi cô gái. Có đáng để đầu tư không?',
    image_desc: 'Video unbox một chiếc túi hiệu Chanel.',
    likes: 9800,
    comments: 3400,
    shares: 1200,
    timestamp: '2 ngày trước',
    comments_list: [
      { id: 'fa_12_c1', author: 'Ngưỡng Mộ', text: 'Đẹp quá chị ơi. Bằng cả năm lương của em...' },
      { id: 'fa_12_c2', author: 'Người Thực Tế', text: '300tr mua được mảnh đất ở quê rồi.' }
    ]
  },
  {
    id: 'fa_13',
    author: 'Tips Mặc Đẹp',
    avatar: 'https://i.pravatar.cc/150?u=fash13',
    category: 'fashion',
    content: 'Quy tắc phối màu quần áo cơ bản cho người mới bắt đầu. Chỉ cần nắm vững là không bao giờ sợ mặc xấu.',
    image_desc: 'Ảnh bánh xe màu sắc trong thời trang.',
    likes: 18000,
    comments: 1900,
    shares: 9800,
    timestamp: '2 ngày trước',
    comments_list: [
      { id: 'fa_13_c1', author: 'Người Cần Giúp', text: 'Lưu lại ngay! Cảm ơn ad.' },
      { id: 'fa_13_c2', author: 'Fashion Killa', text: 'Mình thì cứ đen trắng cho nhanh.' }
    ]
  },
  {
    id: 'fa_14',
    author: 'Old Money Aesthetics',
    avatar: 'https://i.pravatar.cc/150?u=fash14',
    category: 'fashion',
    content: 'Phong cách "Old Money" có phải chỉ dành cho người giàu không? #oldmoney #quietluxury',
    image_desc: 'Ảnh một người mặc trang phục tối giản, thanh lịch bằng vải linen.',
    likes: 12000,
    comments: 3100,
    shares: 2200,
    timestamp: '3 ngày trước',
    comments_list: [
      { id: 'fa_14_c1', author: 'Người Theo Trend', text: 'Quan trọng là thần thái và cách phối đồ thôi.' },
      { id: 'fa_14_c2', author: 'Thực Tế', text: 'Phải giàu ngầm thì mới toát ra được cái "khí chất" đấy.' }
    ]
  },
  {
    id: 'fa_15',
    author: 'Reviewer Nước Súc Miệng',
    avatar: 'https://i.pravatar.cc/150?u=fash15',
    category: 'fashion',
    content: 'Thử thách dùng dầu dừa súc miệng (oil pulling) trong 30 ngày. Kết quả bất ngờ: răng trắng hơn, hơi thở thơm mát. Mọi người nên thử! #oilpulling',
    image_desc: 'Ảnh một chai dầu dừa và một chiếc thìa.',
    likes: 7200,
    comments: 1800,
    shares: 3100,
    timestamp: '3 ngày trước',
    comments_list: [
      { id: 'fa_15_c1', author: 'Người Tò Mò', text: 'Nghe lạ vậy? Có thật không bạn?' },
      { id: 'fa_15_c2', author: 'Nha Sĩ', text: 'Phương pháp này không thể thay thế việc đánh răng và dùng chỉ nha khoa. Hiệu quả làm trắng cũng chưa được khoa học chứng minh.' }
    ]
  },

  // --- JOKE/HÀI HƯỚC (JOKE) ---
  {
    id: 'j_01',
    author: 'Truyện Cười Mỗi Ngày',
    avatar: 'https://i.pravatar.cc/150?u=joke1',
    category: 'joke',
    content: 'Đi phỏng vấn.\nHR: "Điểm yếu của em là gì?"\nTôi: "Em quá trung thực."\nHR: "Anh không nghĩ đó là điểm yếu."\nTôi: "Em có quan tâm *** gì anh nghĩ đâu." 😂',
    image_desc: '',
    likes: 12500,
    comments: 1300,
    shares: 4500,
    timestamp: '1 giờ trước',
    comments_list: [
      { id: 'j_01_c1', author: 'Người Đi Phỏng Vấn', text: 'Ước gì mình cũng dám trả lời như vậy.' },
      { id: 'j_01_c2', author: 'Nhà Tuyển Dụng', text: 'Auto trượt nhé em.' },
    ]
  },
  {
    id: 'j_02',
    author: 'Chúa Tể Chơi Chữ',
    avatar: 'https://i.pravatar.cc/150?u=joke2',
    category: 'joke',
    content: 'Người ta thường nói "Yên tĩnh".\nSao không ai nói "Yên ồn" nhỉ? 🤔',
    image:'',
    image_desc: '',
    likes: 9800,
    comments: 2100,
    shares: 1800,
    timestamp: '2 giờ trước',
    comments_list: [
      { id: 'j_02_c1', author: 'Bậc Thầy Ngôn Ngữ', text: 'Hack não quá ad ơi.' },
      { id: 'j_02_c2', author: 'Người Nghiêm Túc', text: 'Vì tĩnh trái nghĩa với động, không phải ồn.' },
      { id: 'j_02_c3', author: 'Người Chơi Hơn', text: 'Vậy sao lại nói "Yên bề gia thất" mà không ai nói "Yên bề gia bại"?' }
    ]
  },
  {
    id: 'j_03',
    author: 'Status Vô Tri',
    avatar: 'https://i.pravatar.cc/150?u=joke3',
    category: 'joke',
    content: 'Mọi người cho hỏi, sạc dự phòng hết pin thì sạc ở đâu?',
    image:'https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSlcJ5zATJ3-X5__LrNQuCb87P6LaTPwnQ3WitnaRfNG2KB4ueFgtd1CW7NHh6SmWDVqzogMno035-m-eRdt9IucSdr8HXpLhdaAHoNyv2qvnnwiqjl4S-R_wshftuuOLb-9a1_oz7qSzXRJcmeayNZLcvba5Z8wxE5Wv-klgJcTxfAfUViLhFrz3NW2GEYsXx_fqJ0Cf89GaU7htX9_5MvNnANhsoBUjgb-eIcQ0X2bC-u0sv7PxdxiBYXNWSsSSii-CgM6mrChIoq1hVYgsXn2y66TPJUowlFDZpVBVSUPvoRP7iO8NlEqMSADTYwsPEw0N5x7ksPum_24UTaDOcW7d4QzMPWMseKIInRKhsqPQ08_4DHA919cBFGBdKoeqbTtGIor8UWjYTl7b_-PTk9Am3B3jrNaop-U8pwmSiY1-9fkIvZajZere5FSpHUhmWhHkSLSNCBS01ChCTj7fukU3VhdSg5q4qyYhF4T7yKFfBmSK3R2QTGUO7r9ACUGpZNf2gYLA3-8G5mCaaO8wOjQ8TawEgOjBCUInhc61wGXwCNpWCAQjYDf0rUWwjXuJGrhTz8-z-UHZ_tBa2W4m-LhVHyG6Bd-_xsWRNGlTwaNYkRh2Su8kCnKkFs_L9bzD15PltE8pEEhABJnEYdS-faC9CvrZk52vtLMho2x15Jn3DtxaiFd7lMhguaXewIWiwhJMDvx2u_nuJZ8Vwm1yZgPYSqrMkQA4lfQiPVMz6Bx7HSjSxYuOjktySOixUGLEjDH2UlYHRSk4iJYourOp6u5MXpl6vc4MGB7m_an_bhHOlnVUS1DEHJCeO8cdE045NRyMiq3L3ye0VZzhY5g6fYFkVNoFMXFOdQ8Oc7F6PCZmaSQFf09IFfHVTGOmNQHZ-Ubd3mjIr5T5ZjliPteoz0zqBoavLMMa8Q3Ryh2-s9oddM9ZDrHZH82CSp-3ndo8JDTWTnTfwyTA4wYp4XBcYK4iUTmWx2aKvt4rysbPiT1EQkfPiB8V_xvSw1Mj7pDzQt7OQawvbhWCcIBx0ba_WSv98YQ9IhQeHPLuGqRvneY_USC5SAmZXUssPjM14x-XDqnctAgd3G8tl2UAoNrvJH5AFLYSYuyF62nqZwfjN98g-VfE7CYR1A1OZNXw2zrgPFru_fAgIDmUam_9VwoQLt7fYUwVM14nJHHAvnfJ6mi-cTWwk6xSb_uZwyY3xN7N9ecRvg0b0qAFhIG1dIy0elloJ2125VOkaiXErLzj8a7rxI3fiJp6s3sfrjb1F9MAC7Tu_iDa3GpsTsE6zCS7zLp0KN8s_G9Tn2By_NFajc9Weg80T4S33DlRTqRj-WZNpIL=s1024-rj',
    image_desc: '',
    likes: 15300,
    comments: 4200,
    shares: 5100,
    timestamp: '3 giờ trước',
    comments_list: [
      { id: 'j_03_c1', author: 'Thông Minh', text: 'Dùng một cái sạc dự phòng khác để sạc cho nó.' },
      { id: 'j_03_c2', author: 'Logic', text: 'Thì cắm vào ổ điện chứ đâu ba?' },
      { id: 'j_03_c3', author: 'Thiên Tài', text: 'Cắm nó vào chính nó để có năng lượng vô hạn.' }
    ]
  },
  {
    id: 'j_04',
    author: 'Tiếng Việt Giàu Đẹp',
    avatar: 'https://i.pravatar.cc/150?u=joke4',
    category: 'joke',
    content: '"Để mai tính" là một lời hứa hẹn đầy tính bất định.',
    image:'https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSmYMqjKyWILVJ16I_yQWnqM2vxbqrmFtBKWFW_5sXKSKliqqJHh8nhlMLDnSDzXax1q59V6fFfDvPgg5HorBXYCGP-8zZKQLMosOcO50MXHxTXIBaqp0Xaoq2r4_zv73NLP4VsATMDQtBso9jePV_57eW55R7xa5h3JYvHH0CfpzD4ABPRdEc9iqbet-CiY-F3lGLU0w9vg78BmZy182RUkctMcjlFiELCCqE9I_DAY3J-LJ_v4tQhI2DsVia2Cr7Xc30XtOMka5CF9aTIjlwWVCsebzj_6ZFrCMZsJwAwgnO3bs-Ea4_mR9auzShPPlWlu7HUpmlrP365NY3T967GB3gMR8xLxlTyhjwZt1kyvcB2hmJ5WqPRk1EHGaXqY3PNjXKtJj6z8QSaMeC1JwbIvZ4R4C_hs80UgrF-ocBuQK4nOCYE-jq_MpXFwOozaBR6HvEH6RWV-EdMksIYEJELDDHcEA10CaOBUWOzokEASyETDnJsaZYWeDb0DTGjrR4WrCm19cP6PimL83dYVZcKEy9NV7B_EZGx_ihMGgeVC-4vnI-1Jy1vZj--CCESbaKTRz7EIGkSDwy-cr5YAVCc1mogEldX14jzbeNlVUpTz6HV1AHPuKXxUsliUK9z5CfaNd7L6rOQNOf-on_5RNqS6u0bxfluqMe_7QF0cY8hikLj4GKmutzWOWrEAIiMhCrpWIweyqi0TgalyHQeRRJsMoz-_exkZYASDtaKl2Man3183htW64ysD8e0gcQSVV4v-qVlA8lt4uGdU93pSWTc1lrnZYQd9uceBavo081iUEBrqVztUeR0CYRAp58_bOg67JgL3iEXZyCIDvWdC2NMcJFHa_jE9wc9lkdqsRO-DuMyJkwLDMX8FTQLS2Ulzw5Eae1mKlv4fGKPQ9FKLFxoDbT4DORoRYKwWPJwQMkD2S2B1qWAkqSnnKNyu8I17cFfMXqBqJeiZu_5OOPKSBEN0D_wEAvcJSZQz8HeT_3dlfEUf3JXxwVuZKfEa0X4_eYXFWJcjadwe5cldZMOmChp92-6BR6I4rwRZl_JOIgLUqV695s9U-J1K5VlevhSlTJAab_FrKrD38mYxDa19ZTQG3gELkKl_D1FKhsmgLUuXbPQlztgmIz0f16DegRNIHCy9plr0fulYev1xMgVOi7whObFWukFmtSC8FjrvsNXLVK4qxYu7IocVQm_Vj19WXnzzDLmvNADew8gdax7cDwSlKd8V8AzZ_c-0GAHWQoA41ko7rMd7eSXlXXU76Xe5AXENGCRLtYOjN1E8wY45LNyAuT_ZoXRR6buxczvWn4eWmzJTQb6WUT-E8f5vvEpZWqe9=s1024-rj',
    image_desc: '',
    likes: 11000,
    comments: 1100,
    shares: 3200,
    timestamp: '5 giờ trước',
    comments_list: [
      { id: 'j_04_c1', author: 'Nạn Nhân', text: '"Mai anh trả" và tôi đợi đến giờ vẫn chưa thấy...' },
      { id: 'j_04_c2', author: 'Team "Mai Làm"', text: 'Nhưng chưa bao giờ nói là mai nào.' }
    ]
  },
  {
    id: 'j_05',
    author: 'Câu Chuyện Vợ Chồng',
    avatar: 'https://i.pravatar.cc/150?u=joke5',
    category: 'joke',
    content: 'Vợ tôi nói cô ấy cần "không gian riêng".\nThế là tôi đổi mật khẩu Wifi.',
    image:'https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSkRzdEUmLyYW0QyHu-unKvRvPlyjXp16rAmnvuWZHD9uoUanpF5wrZvQHYIZYBtPzNeGQmnIghVEZhZIkEagZN3dj-U4FHR72hnjz4O_j8wz4APhHP_-ZDaFlnjgeh-YuDuKLR8R5Lm1VLO8PMO6uPwA6BAXXXJlQ_4xaBK4_jDIJt1sifp6JReNYd-eBAtWfxvBIU8bIKMb7SbIlxU_Mqyus2jE02E1tZxhj7jfn3E_8O5G6fRMGoECw1fJ3SY9TSctbJFPU9FSWtOo1ooufp5mQ2Jngw71x-wnm__uU63jxvrDWDlhYgu_Bw2DtNdWOCYjUT6cx1asuseW71uo2hIPHKZGdpy_XoCNovJp_kRFAc3Bds3EsYxb1f1vklA3lbrFtXwVvrDgym102hAz-XaGQbABag965fKmzEU_TDuscpdXIKCvgyKkmoU9gT2UhMB2ChyGy7e1twoBZOYxUDqh_kpIZkcX5Jzdbk5dXjCgn7qsWI-_LN5wS-52DK0IW8rlRF6w-rXy3xiYjATFzPehm4kK7H5_Xlyf3H-9E6kKAC5OD_kDInR8w699X9VCwaQpPfuyaFSJOJ7fA2G3i_CSTxGf9ej2VN-Q-Cuv-npNxycse4wAsgwVi_HdBhs778Hb4WVrHU8N9Uq_tyRF4jfWJHaDSxqM9Stk_aZdtEISjRkrCOyll1eoWqHJLpKkqlRUWBv_zMSMqD4p40B-8qezmH96Do2MX5iWVmL33TOIAO75PC7pPDGERQuujFlTrJuq59bZ77VXJYAbbx1CB3SmVMeff-3aSyXZoRM_5HXjZRiVMY_tKzpQXmhJ9T__IW4blr2-XSnGW5kGWIjtkW1LNrAr7hQ4kZV2sBnHmAh5dXAy3ra7mF4DfvtT7Smd4uCm_bhTpVQUsp5a9-VkwDzY72WNLtyVrzeE7TAgQWTh1OUBQxESWJdyltW5LsuW-J1l-xH59t0NxpjVVqt4AkaJS974ZXYFop8bX_dDHyoXvlea1_GKddBO_ARfoGlqiRvP5ffkb4Vyh61MKTH8nFXNsMHbjpU_HbLhRYWsUyaX6VTH_BMcXLTwgqR4ZhjA8tgIKKv7QvV4FRa7afpPXPEJegZCueN2sU1YQSD4Xf6U_Zi_7KEbqQmJKlCVFt7X7Rkl6XNLEsN6KxDhWEJ4hpSM4RhRu9PfWW9O3qWfLJuWU1Vy7g5yRDDGeEoYrxirTVFBFR-4BUj8x8vY0D1Hm7m3JNE394WS-BxILf2CJT9kNzk3qnBfj19W36pB0nkR6e1lY_fmsyesCDA5JyF4XrhIhB4Li4iQ2Kg-JErs7J95VsuEzvhZ71dDcBjrq3XmmhZ=s1024-rj',
    image_desc: '',
    likes: 18700,
    comments: 2400,
    shares: 9800,
    timestamp: '6 giờ trước',
    comments_list: [
      { id: 'j_05_c1', author: 'Người Chồng', text: 'Chúc bác may mắn sống sót qua đêm nay.' },
      { id: 'j_05_c2', author: 'Người Vợ', text: 'Tối nay ra sofa mà tận hưởng không gian riêng của anh nhé.' }
    ]
  },
  {
    id: 'j_06',
    author: 'Lý Sự Cùn',
    avatar: 'https://i.pravatar.cc/150?u=joke6',
    category: 'joke',
    content: 'Nếu một ngày bạn cảm thấy mình vô dụng, hãy nhớ rằng chữ "p" trong từ "psychology" (tâm lý học) còn vô dụng hơn bạn.',
    image:'https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSl01fn8ioOH0ojyPJXBhfh9WfSI8uQs8AalgxjpFauScu0y6BkQzIs0r3kFTaz-AWqrMpXWid7n8-s9rwOUpm2Qc8AzGifRxJZHfpNh1Uct2M5DIhkp3Jln0SDW6hUll9XjhLRxL-BZZyu9bNKbIgcyJjO5NDFO7-x32Whgie3VCK2CchwQGx175ximHsU9UoVMt8AKcKbAXc5JtiRztz16j5_ep-vtcQT9uZbEgHjshRlxaR4p-i343S78WAuKZS4jGAacH-El4tXo7u9hzv89Ra2r04XNx6VTImGJiTon1GURLRVlbdZdcmonzDCSFAIlujWvodMSNatlHSgqbxvJw5fXEzQvEWBhqaac3ycQ5ygxevsfI4bdpLpW23uZ_9IqW61CYo8PGJ8NbN15yGuxdGSymwe_kHTZQZY1VLYrz0a1qIRVBfyZr9iTGrECGqf7rz_bXY-jK207zZo2UDA18CZP-FDuTc29rrraX9Bqnxu-drhaUBjKlADWgqbekHSxHospNfCChwhfpNsq7bXnpgsr1DlL0X1gnm9rYP6vRNaEFjkb2mljm5TRZZSwJ_mjRUc16bTnQB3b8UCgppD1HOqfJzZxJ4fMg2YwWQ73YK1UadXSkLEcOPcqRahGeMxvg6qdrcUbysj9qaKWAOa9Mjn41e-RX5i0Yq8p6whusFyeGxNXycFxyf1Zu0bMjbleOAGIqruqqLlirhjRvfUkqXcLd81st8hIMCb_HfxgpPGxHrhCbu4Z_th1MJolHIKNb30imI_uWNth2fYxadpBGVY-5qkiom5U7vG2yrg0D-07zhIsfK8XIpFiJmbMoBrjckc5_Zl2sGTmxdFAeFCRJSX83cclDlM31__5fACWcucd82gmlIFeQxUuT4r-WrHksv8ASi_Elw_jTli-yEYDZijvdveGeXLvSh99ehe0RRJt2WElY4Km2Gvco_8MkjhImkiO4lD9qnGH7f_W5YT9PDNECqYEp6F_-0tGu-F7rXXgOGEJMTKG-lXaZ7SZp6BnjyMaBC3YGbbiSt8aN1FyNd2M9tswtSH3g70_AGhb8mfbkU3VfsBLXa2nutd9LeU8j0T3JnPmYfhLLQzzSkXDUErEtSvbrFEeQF_2WxgiLL9tJQHzOkSBgCm-JV03zPqksyIBslS3952Osvn7JocnXfLNYEv4V52AJq0u4DB5_z_W4brAOPUnI6T7cJ6X2isJFalbD3d2cwFXmgz-xAy9ZU-bpG9H_dX0YJi7xAOr6By8RnR1tEa-5rDnmyGsHFDfxpm7B1KlYXlFem7wThgYCKZdFAztB-7fmyo4d6lFvlxuU202qosixpyeb8SKWD8c=s1024-rj',
    image_desc: '',
    likes: 22000,
    comments: 2900,
    shares: 11000,
    timestamp: '8 giờ trước',
    comments_list: [
      { id: 'j_06_c1', author: 'Người Được An Ủi', text: 'Tự nhiên thấy tự tin hơn hẳn. Cảm ơn ad.' },
      { id: 'j_06_c2', author: 'Dân Ngôn Ngữ', text: 'Nó có tác dụng về mặt ngữ nguyên học đấy bạn ơi.' }
    ]
  },
  {
    id: 'j_07',
    author: 'Truyện Cười IT',
    avatar: 'https://i.pravatar.cc/150?u=joke7',
    category: 'joke',
    content: 'Tại sao lập trình viên ghét ra ngoài? \nVì ở ngoài không có ctrl+Z.',
    image:'https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSnw2IcO5HVcGhoXW2kTv-jNE8Ee8gLqeXPD4pI52EmrOiWCsZJQLfc2lEmnC543gWZahQ_yruOGLSya_zymuO5Y-TGpNUgC7wxZWnZ4ts_TJCbFF6mS6ufPBtED0LZw1bgNkfbXYHqfBq0Us_HqL9STOjuRAekZ3oGbItcD_WNwGSNnkAeHEpDmdR1BrFzHShyDDoHlUC8RfEfrblcWLIktdlnI7LPNy5htZlbDIC99t66PrD1YRgWoNnvKivrtOHSPt-syNPaTQSrhCsLExFo2MfnNfvQCCHNwvstkl09oktU9nEXjtKU4VuQuAFk8qAWmCwsqp9NyCsTG-HIjIWB44OYSRtEbJr2wzn2QGtsalskdQwKyuPF0NyTxVb7pv9sCZK0lKnDDC27Zfpo0tTcPWWGZfoG40mftRgBKbN7WFtwXj3w8iySHOw7x--_GJIX_gZjqllN_4h5ZsaXX8M0ZkKw0VR5w2C3-9jPiTRtlgmKWAZ_bDvz00ri2meHSZAFhHGlpiGpdWe9BpI2V5X_PefSSlPbDBiJCqFA1Tqnzn6UvxFCzpzOUrNUstvD0PFlVb0DvO6WwnjlXmSozWN1raGBiaLK4k2tkndXgH08AW0xEiZR3-wC0ANeq_HVhx_gzxwMhR2PzU9wBrDFgg-1jm98aENudqWa8hzOQEnehqcCx_Q-76i2zh_Z4LMFA-Wh6x3P8vpWgdtaGoMcSdNoHXUSgHlxs1z0C91rYgmW3sy8ELFg-Hxo0Zyh2vxrsMr0Vz7EBHWN8Ga9yYBggfpMVgolQ_buP431thyb9zexniUT5PAZf8DwzsxCetByle7lxpOwRKNDyyP9GRIxXBXMTrdKVKBGvNRUU1l9yQ8kHnCuAG-Et3BzeiTR4sA6yU7PPV5MS1nSOfLjhOq6yCKfi116RN1a1jUFE1VDNPqegytBQc1OkDQXPUN4ll_ODFgOPBt81j2Df_qKwbCRuK30KIY4YQ09W9Urm6sAduEAloM5LO1LZ4g7YBYICmn9eFbUo4sIbjb_hF_h3Ryl_R2X8TFi_S5cv9dETmJf4rQNgcHWzOPfvtnncVHq-M16bSocTqnZjbkTIikjv3jELczz_6AoaOyFLELjDnN-Arge1mHlyAinTgxNxXY9QY56x7D2O4CrxPgHIITHqZvCz4ICXoAetwnotwYH3txVentpnUU-H1pT_y1Gp4yDcp-77e-XA_scHQYcy0dHCThcW8_J24YuVtA_Av9L5OKcigqVdljOoSnzFszi47HEz3vusAA66jQ2_XqoBp2hf1mWOn2SVtSyxCaeqAJ5vDLATjMOc6xoDvtAFeHZrre-kbPdOyB12=s1024-rj',
    image_desc: '',
    likes: 9100,
    comments: 1200,
    shares: 3100,
    timestamp: '10 giờ trước',
    comments_list: [
      { id: 'j_07_c1', author: 'Dev', text: 'Chuẩn =))) Nhiều lúc nói nhầm mà tay cứ đưa ra tìm phím.' },
      { id: 'j_07_c2', author: 'Tester', text: 'Yên tâm, các bạn Dev tạo ra bug, chúng tôi sẽ tìm ra.' }
    ]
  },
  {
    id: 'j_08',
    author: 'Hài Hước Đời Sống',
    avatar: 'https://i.pravatar.cc/150?u=joke8',
    category: 'joke',
    content: 'Mới mua một cuốn sách có tựa đề "Làm thế nào để giải quyết 50% vấn đề của bạn".\nThế là tôi mua 2 cuốn.',
    image:'https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSk_LWs5pF-hwz4Rk1y4UAAqcBUnHXwHNEbVsvJP2nRQyLUE8Iyu1WFb9AS57evfH4LMWU4-MHoc5dr1vaUyd8DgTE3gChks497jcc7YaH94n0hx4UXYMfHI6O-M4et9-s98qVjznAzkxmE2MB9ZXhPoX56mPFDrXPhb_aGpXaAB8VFti41NNoUkmOjUIbgCtUn1ZU-mB61ijYpHnt2GgsEL_nE-W_e8eztYarO9KmTy5A-7q3c5LMi4LtWiQfYgpvUEwsJ1ehMEpAcdsT2eP2OwPkj8EMt4B1yGHb2crfJ6RiL2HHtgyzeftZ9Bu_QU5LjidcsgmrmGX4ikW1c5IiXUBTKdrVuckXTCDlea574HfDGm5g0Rc-oylxGc01Z6NS3SiRABlMN9ilRbvHtmRvN6yV2RBOCEPZ0FDN53axLYDVpz4YC342v3t2-UFvpu4gLquCpqBFc4ny-FChXD4F5snITl-DzMoEdWTRwsh2I0sTz5Xs5D9zI27ltZfBbD2bjSIBn7jUDrFLfGh5tcHvULwrOxhE8VGEPNwJrfIuab4lnq7mVB7GO0UfgRicZYrKMkoytRqFwzbwJToxDbCDh2VaQcXV87TMBrdSdP_meNKW6g0lT923cAjL-RmEePpgA61fC5xYvRoSW3wkm0xxcPFPCs3jueRd50-IednTvpA52cfYrcNCF7QWrn6m07pUclTMnCOxQVxSd_c6PjD8br_QRjCXcoZ0lo0A-03QsvPSpkEhAINhoV-pPmxkFp7oNv7B8bRJ_zjXwf9Spa2UdrZKNd2s7pktjwOBD1-DX-Jzg-L-PYiLj2MnN_AIpyxbym72rHMe_MYQTYqowCD3Qtj_c9NLZUSb33lWCmfo7HrjNWEj_Yq6lGlekE9dUkShGIO83SXQg4z9RUwW_VzD8HgFQxxVs-UH7_8fqvLcXiCAwD9ZHr4m7tRezCgEutF-v89Me8VlrpGyq1RkwHHCyC0LnqE-lRn9T-j_2dSAPSS7iU-JVHet1MZ7hHncQm3oecb5ITzesvTlsLS24nXdHlIMmzEgYyKLm-osrpVvq0ZqSNGT7IgdQsw7OANzz_a0BzC1f4fJ50_gKfuSMsHQQC-Jp6m5OStEQ7wPSDDsmajSayq3-fvf3AOL5eX8J4pKefKrn7QyUza2htK0GX5macwrMW7vJUp6-FesrY0AzUk3RZbZCk2ZNU7FMnaTboABnJk7tsChvQP-zXeOmhCtvCY41CmoEqaWnCCy6XwXsq-znzSEFa4R1yfCrYaX52b0EMg0joLf2RINvQzCaPo4Qx8cLurY9-1cThErvXwlxu4Hed_0C8Nbx5_gCkRw_L3nrG=s1024-rj',
    image_desc: '',
    likes: 16500,
    comments: 1800,
    shares: 7500,
    timestamp: '12 giờ trước',
    comments_list: [
      { id: 'j_08_c1', author: 'Tư Duy Logic', text: 'IQ vô cực là đây.' },
      { id: 'j_08_c2', author: 'Người Bán Sách', text: 'Chào mừng quý khách đến với hiệu sách của chúng tôi.' }
    ]
  },
  {
    id: 'j_09',
    author: 'Câu Đố Hại Não',
    avatar: 'https://i.pravatar.cc/150?u=joke9',
    category: 'joke',
    content: 'Đố mọi người: Cái gì mà Adam có 2, Eva chỉ có 1?',
    image:'https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSlcqAsvxo6T3_fR2RjFnjBBvOeVoS987jEgo3R8W37r4blmXA8-Qr_hkN27NxeKreltidu6_vq2NeRwXDqhADjXQ3sLCuWQ-1ADqor8lcP4EVBpies1uT3SA6rBmYiUgtzbgpyuMfMH6ekT8LFktRs-Ha-jO2-mkVpkEKgvWl1EZPblYS1zlhzxJwK_p9A8INlhbUijZWA3lwYq8l7xhfFjgGh2dF6oj3YlFXJZPgnt4iuA1E29jY9Wi0f40_8P_B9uDzlqCNUxjzRsuCNBT2ibmD0LMWj0u0jeWzXqrp8BeKO8ltTrInYKsSUGOOWjdF7bbhYjiTWNVlwgtkhNsUXN6bYFXiwJRD0AjsCqUIdpfwuA9HdryUFegmFUJLOUcei3mM72kXWzPd8B6V9CyXB8rYAiQFN-_Wor-u9kdk8avU-51bTgrRB6KGyWzEkQ9SGcSOYP1UtHiYTt44jWgzDPSrV4gw4Yw4sE17Om1om0oJrvcqGMnifFI3aZGqucb4MQKkXMYdE1wEquwv8H7MLarltLPGcR8byTbbDH0_EycJKMgtfEbF9dKISBxwtTkbFzkWQmLCmq1KwV-rVGRc6t50ktNRh8n4XLc0nKO8Ede6fYVfCLWLudaBnkecYSGfEJVqSqahjkEBbqTWTkkvZGqHX11e6ywFCpK4dEbLywkDYmQGlGdC9lETEZikYByT1IkGfimEPNFulKif_qJKn6VIQ8tUUuFKPS6byJ9D8lwmuJoK8LHq8NyKzHc1TY0D6F_Hj0SWO_LVH7-4guc5hk-VLKhHG_lqccJduRtKhzHl-AK8qb69X73qP7IsaRuZNh0NhxkZUsKVvp1eOkqAns29LovPorPUOeDcz3XN_DxPYlfzrWLm9dv1V61jIpJYt2UjaggSGuYTVXp31fR2IxBHBPe_5L3BRGUsUU-3KngL6C5_RP5j2pwbDxmyshsER_KsJuxecUO2AYtcKdIOSVhIyaG08FZrf-aAakeR4fQigxw-b0PbOQX9KFMeqsVFznJ1TbUirkModEXc17SxKswPaXpedpaW1OVyY7t1xoEEqA7cFscj2UgyCI2OsrLLDJsalHLqR6KyrmRJ1n69D1INqioumPTUTygfTMBbKNs296ij2v_sTT4RvzwBLPkpvLJqPMk_Qx-HSymASeIKVUMyYIDq9cz9MKIIDCQbA-vBtDrYF2hipWFUMVZqdF2ZSlYPMmXA5NxX-OMEELaxbUa3P12wzcY0zy2g8y8W_R_tzahGHTF4IiMhkbgfYIbI7n8waqYYetaX7qxdXhPcY4Auf0H6Hb48UIo7n_1YkufjsAwZQra7VPRrGVRD5PMYOd=s1024-rj',
    image_desc: '',
    likes: 19800,
    comments: 6300,
    shares: 4300,
    timestamp: '14 giờ trước',
    comments_list: [
      { id: 'j_09_c1', author: 'Người Ngây Thơ', text: 'Chịu ạ, là cái gì thế?' },
      { id: 'j_09_c2', author: 'Người Trong Sáng', text: 'Là chữ "a".' },
      { id: 'j_09_c3', author: 'Đầu Óc Đen Tối', text: 'Mình đã nghĩ đến một thứ khác...' }
    ]
  },
  {
    id: 'j_10',
    author: 'Những Câu Nói Bất Hủ',
    avatar: 'https://i.pravatar.cc/150?u=joke10',
    category: 'joke',
    content: 'Tương lai của con sau này sẽ như thế nào, còn phụ thuộc vào con muốn làm bố đứa bé hay ông nội nó.',
    image:'https://lh3.googleusercontent.com/gg-dl/ABS2GSnSHXq9rqRUVaLKlsi9Qyl84zmf85v7Xg_UctJ4OhslsAOPRTv6SBonm6etlazBIxII2s3OWU6Fx3CAY5Cg1yzsiHg000jPm2eUWGkUDiN3WRQjNtrrpUPNpQhdJZsqYXfh2finEOUWByhIQDNBs5RuDoRukpH0EyFKIbAYKA8bnYNk=s1024-rj',
    image_desc: '',
    likes: 24000,
    comments: 3100,
    shares: 11000,
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 'j_10_c1', author: 'Thâm Thúy', text: 'Triết lý sâu sắc quá.' },
      { id: 'j_10_c2', author: 'Đang Hoang Mang', text: 'Wait... What?' }
    ]
  },
  {
    id: 'j_11',
    author: 'Puns Tiếng Việt',
    avatar: 'https://i.pravatar.cc/150?u=joke11',
    category: 'joke',
    content: 'Bác sĩ dặn bệnh nhân không được ăn cay. Bệnh nhân liền đi ăn me.',
    image_desc: '',
    image: 'https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSmXvo-j12opP98syWJ-L9QcpSE-Ia-CZPditDbjzZHzfby--L8U4DtXix1ukbohNdkpcc_SOopxdobKgQZ9_1CHpRKPry7muHll32xVEYUdtq0UoJV1wRK0hEEsk1CWbGO7x276ZIDNdRhD-KAbyCJaUUi_s7yyoCmfsg_4GbN8Pf1NdxxFN91JvwK-yuJ0VlsLwFNIpKtzgMzkYADNDQ-Xe8UMoX7TZNTXVf6EdnvfczCZ3d2VQbSP5ErGhrQZCphPjR4p-uhbnSJUJPBU-KXbXI8DOQqLhzpybFtggKq3oSh_1MyeVEGE5d7C7cKUGSo95wfVt3Pyxnl5z9weC7nAzRKcLm2PFLI4ffgZqpEASDpKZxBHf6Y0k2SuN-IEAvBKaGwdJz-nj_xfXTO3Xrn1rCrie9iEEftDaf0rXXHOZfAv-cXrPeRBwHE178VoA4SkmUeZf65_aWk_UliTSyGUtemz9k0-HLpjOA4j_zPnrWQZr1GBJxCK9o7B0P0bL9d4HbhTOr05wYK5snVtUcdkCG5UfyhEqn3AXMlNrxzbtvdrLa26oNrCoCJEh4Ord_1B-0wlBVqlVZ4On_qlckHtDskn2lRM8dWqffNhaOEZdmo6pG4aV-3MtitHDMBLFq7ZyrppKbbVC7lmBvVGjUm5Uxa0_IqHUBNT4dNI-_Ip2Fb-WObJKZacHc0N-o4kOA4r35FEYS9tMTwr4wSoywp1SafFchfHoV9UpQQH2bnNkQHb9WVsbc9jFTKBAeVMTvkLvgmuB53DEW9XbvWTGnJQ--CmnZ4l45WytIPEP4RgABhwmjaOd3MaYK3gpJ8BWQFgKWu2ivc2BegCiVGnjyErpGnb2tFi9eWE7uJOuQsDXrrGVf9bZ-yHeGYDNYxsKMIe-Qp8uRV8FVJ-8BAZOt_IDXQ4M_oCsslIuHKB6V4I1M8ofvNcRBPOY92jJTZ4b_HOMObLzXN8dkwWOBo2aa9tocvHmRr43JjgbKOSMkCuwI_mVc9rnXhNMfjfYgpnudboYnc5C-WheChEj8EOKKPMIcSBMSn5JEDspsjeVVTT5Pu26GkvpfvVcVjEC-izcR7d-Su_qFzf5y4F_EFDxpPeXfKhbcgwCDWTBaMyw8d6YH1qzijQ4zhV8XH7TxgJFRSqJRQ-ruw2nKvOs2xHeWALC9F1pI946dzilAFQIP90iWF3Ju4NW8QnIj2eMDHscNmjFndlVNFuNRs45NIiOP139hofcLNS_E6QZqWFyZTN3LLOZuMZGO4U37N302i1JvB-yjMoe01cNlyzOwomFAm8oYAdfZBwcf_xVTp_hmKLF-H6WN0pXgEIZruHrtjDBM3I=s1024-rj',
    likes: 8100,
    comments: 950,
    shares: 2200,
    timestamp: '1 ngày trước',
    comments_list: [
      { id: 'j_11_c1', author: 'Haha', text: 'Vì me không cay? =)))' },
      { id: 'j_11_c2', author: 'Người Khó Tính', text: 'Nhạt...' }
    ]
  },
  {
    id: 'j_12',
    author: 'Truyện Cười Dân Gian',
    avatar: 'https://i.pravatar.cc/150?u=joke12',
    category: 'joke',
    content: 'Bà bán bún riêu rao: "Ai ăn bún riêu đâyyy!"\nMột anh đi qua hỏi: "Bún nguội không bà?"\nBà hàng rong: "Không, bún tôi nóng hổi!"\nAnh kia: "Thế thôi, tôi đang cần bún nguội để tạt vào mặt đứa tôi ghét."',
    image: 'https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSm-lkml_m9MmUQ4w4B7EzdSzri26djNidGl8Fnvhf1F8aw71F6TrckVf_3HxrSNnT2eJpLKwXde5Q_16JNDxC09qETMH4GLO2uB1osHYTLcNpcBQZxED4XvYpQHTm6TnTN--fTI75HsYVbwur6c_kBV3R8-NheTe8C98CSOaJV1VzJCm9B9-hRp4-X56i5nUSezm0zZ5-awP7L_hfsoYFdsk4HDbwZ4f9yoaV4aZ8AAvqp1-0Qg_ePC_6IKy_xN2s-Mhbu6D_222W0PV1kjGCSUjWCQeUPmHMHQxT1C6vYBbNgB1sf-OcgEbjqIAooDR-XR0HsWzJNUHiiD9aG4-Yfb3Dd89xglqdG_bIhosaVX4Vhffa9Xtne9ohzGFg8TJLdDotyI5OAjUrnFO74z9birdW_TiyEIkCipuJQyK7kKlb31yjedWlgK6cY6ayxzLz27GP6TLIeAY0jtZaJ3T7oN_UR2yXonddqsI1SNYQ9ieUGliht43GFqN7P_kwqxQeA_1YO07xLi_MG7oSHH4uCGlVTmVp37PWHWiAg_vGmDLM-sOm1j_dAsi_49JPKdHyP4B2xpKke7Q98xhPI3Ik7GVCONtXdlBOwOfyiKFDO1LvSVegyJXpACl4vggFZr198nU7HMzLJUd_Vur9SExtPtKFTYTVfuDX99UgBQIELTyuytUwsmSo8uusiOOSasg1FCPKOMOP8OkJMKYT3EMv0LFKDaRAQlyLwmE02ynVNPabY0DHOAy4viWNmDrEDQVTSdRWDArv-YrUTl_VrY0bGwueS5vKOnsDcHgIdeYhytoG1GY7bEtLYArELWSk4El8JG9VgmdzYsxvjmE6TrUGs3hdK09D-Vnf8gVJmVeLG8Z9rP4htvLVcqmNuCWTgZ4Du80BlLBZ6r35xMN9-JVdewKPdxW_cBVPY0pNRl8iuiw8Lipsm2X-bRxYi7l2CklefRKX2aSFcdwxc33l-efkjC9m4ALesfao4a23ZX7LMXb-PGrL5ipe-GqYMCLTJwgbJwnPSIkUA_yb8ACa8lZPvr3mq5W2JlKnA1KLdNtP0cEYsJAHxYRuF-uwCpD6Ob9IaYHspRsSSqJY7aVbvhNNgENDZuOTEM_1hE7OZBu2bWtevUPh7cfGYKXd6DxjnvLW7tlGUg6Qg3Xx5Bbp6bYW8zRpwao5E8fhMqqj8GVgCCJWCe_NRgpQmMXnFpZ2TpFILf5UGmXzyZ68G9Vwqgqpls_4xjg-z-fkB9nWugXVpghqVYEnF_yVmXnK19GD0xUNwmjylaEnxqUqaSNDKdK0B1_AgGJC2QfGIWbUSItmWTyP8qqdC6r-_XVOar8CTE68k=s1024-rj',
    image_desc: '',
    likes: 13000,
    comments: 1400,
    shares: 5300,
    timestamp: '2 ngày trước',
    comments_list: [
      { id: 'j_12_c1', author: 'Bất Ngờ', text: 'Plot twist không lường trước được.' },
      { id: 'j_12_c2', author: 'Đồng Cảm', text: 'Cho em xin một bát về tạt sếp em với.' }
    ]
  },
  {
    id: 'j_13',
    author: 'Góc Tự Kỷ',
    avatar: 'https://i.pravatar.cc/150?u=joke13',
    category: 'joke',
    content: 'Thử thách lớn nhất trong ngày của mình là quyết định xem nên ăn gì cho bữa trưa.',
    image: 'https://tse2.mm.bing.net/th/id/OIP.70ggeYS0ZL2HsEtxB9kq-AHaGf?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    image_desc: '',
    likes: 19000,
    comments: 2800,
    shares: 7900,
    timestamp: '2 ngày trước',
    comments_list: [
      { id: 'j_13_c1', author: 'Hội Những Người Không Biết Ăn Gì', text: 'Và cuối cùng vẫn là "cơm sườn".' },
      { id: 'j_13_c2', author: 'Gợi ý', text: 'Cơm bụi đi bạn.' }
    ]
  },
  {
    id: 'j_14',
    author: 'Nỗi Lòng Sinh Viên',
    avatar: 'https://i.pravatar.cc/150?u=joke14',
    category: 'joke',
    content: 'Trên đời này có 3 thứ không thể tin được:\n1. Quảng cáo mì tôm.\n2. Con gái nói "Em không sao đâu."\n3. Giảng viên nói "Phần này không thi đâu."',
    image: 'https://tse2.mm.bing.net/th/id/OIP.70ggeYS0ZL2HsEtxB9kq-AHaGf?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    image_desc: '',
    likes: 27000,
    comments: 4100,
    shares: 12000,
    timestamp: '3 ngày trước',
    comments_list: [
      { id: 'j_14_c1', author: 'Sinh Viên Đã Tốt Nghiệp', text: 'Chuẩn từng chữ một.' },
      { id: 'j_14_c2', author: 'Nạn Nhân', text: 'Và câu "phần này không thi đâu" chiếm 5 điểm trong đề thi.' }
    ]
  },
  {
    id: 'j_15',
    author: 'Châm Ngôn Sống',
    avatar: 'https://i.pravatar.cc/150?u=joke15',
    category: 'joke',
    content: 'Khi cuộc đời cho bạn cả trăm lý do để khóc, hãy cho nó thấy bạn có cả nghìn lý do để... đi ngủ.',
    image: 'https://tse4.mm.bing.net/th/id/OIP.qIUCvhm1uK45AAstJopP3gHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    image_desc: '',
    likes: 21500,
    comments: 2200,
    shares: 9400,
    timestamp: '3 ngày trước',
    comments_list: [
      { id: 'j_15_c1', author: 'Người Lười', text: 'Ngủ là cách giải quyết mọi vấn đề.' },
      { id: 'j_15_c2', author: 'Tích Cực', text: 'Ngủ một giấc dậy rồi giải quyết tiếp!' }
    ]
  }
];

// Export data with comments already included
export const SOCIAL_FEED_DATA_WITH_COMMENTS = SOCIAL_FEED_DATA;
