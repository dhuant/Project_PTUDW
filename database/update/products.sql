/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 100131
 Source Host           : localhost:3306
 Source Schema         : bookstore

 Target Server Type    : MySQL
 Target Server Version : 100131
 File Encoding         : 65001

 Date: 23/06/2018 20:28:54
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Picture` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Description` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Date` datetime(0) NULL DEFAULT NULL,
  `View` int(11) NULL DEFAULT NULL,
  `Amount` int(11) NULL DEFAULT NULL,
  `Sale` int(11) NULL DEFAULT NULL,
  `Price` int(11) NULL DEFAULT NULL,
  `Category` int(11) NULL DEFAULT NULL,
  `Brand` int(11) NULL DEFAULT NULL,
  `Author` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Origin` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Creator` int(11) NULL DEFAULT NULL,
  `Sell` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_Cat_idx`(`Category`) USING BTREE,
  INDEX `FK_Brand_idx`(`Brand`) USING BTREE,
  INDEX `FK_Creator_idx`(`Creator`) USING BTREE,
  CONSTRAINT `FK_Brand` FOREIGN KEY (`Brand`) REFERENCES `brands` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_Cat` FOREIGN KEY (`Category`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_Creator` FOREIGN KEY (`Creator`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 48 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (1, 'Bé Trổ Tài Tô Màu', 'be-tro-tai-to-mau.jpg', 'Mùa hè trời trong x anh thật dễ chịu, ai cũng muốn đi dã ngoại, tắm biển, trồng cây, tung tăng cùng bạn bè. Bé hãy thêm màu sắc vào trang bên cạnh theo ý thích của mình nhé!', '2018-06-07 00:00:00', 23, 20, 20, 80000, 1, 1, '', 'Việt Nam', 1, 12);
INSERT INTO `products` VALUES (4, 'Chuyện Ông Gióng', 'chuyen-ong-giong.jpg', 'Chuyện ông Gióng được nhà văn Tô Hoài viết lời và họa sĩ Mai Long vẽ đã dựng một tượng đài nghệ thuật về người anh hùng làng Phù Đổng đẹp đẽ và hào sảng trong lòng bạn đọc. Ấn bản này được phục dựng từ hình ảnh, nội dung của bản in 1974.', '2018-06-07 00:00:00', 4, 25, 39, 105000, 1, 4, 'Tô Hoài', 'Việt Nam', 1, 15);
INSERT INTO `products` VALUES (5, 'Kính Vạn Hoa', 'kinh-van-hoa.jpg', '\"Đọc Kính vạn hoa, tôi cảm ơn Nguyễn Nhật Ánh đã dày công phản ánh những sinh hoạt muôn mặt của lứa tuổi học trò. Từ cách học với các thủ thuật “phổ thơ” để ghi nhớ thuộc lòng các công thức Toán, Lý, Hoá, Anh văn... đến lối làm thơ, kể vè, dựng hoạt cảnh để học tập các môn Văn, Sử. Từ trò chơi bóng đá, thi giải câu đố... ở sân trường đến những chuyến đi nghỉ hè khám phá các vùng xa', '2018-06-07 00:00:00', 11, 33, 35, 85000, 1, 2, 'Nguyễn Nhật Ánh', 'Việt Nam', 1, 1);
INSERT INTO `products` VALUES (6, 'Nàng Lọ Lem Trong Ngày Cưới', 'nang-lo-lem-trong-ngay-cuoi.jpg', 'Hãy làm cho hình ảnh các nàng công chúa trở nên tuyệt vời bằng bút màu của em nhé! Tất cả các nàng công chúa xinh đẹp nhất đều có mặt trong bộ sách \"Tô màu cùng công chúa\"', '2018-06-07 00:00:00', 11, 12, 15, 95000, 1, 3, '', 'Việt Nam', 1, 78);
INSERT INTO `products` VALUES (7, 'Sự Tích Hồ Gươm', 'su-tich-ho-guom.jpg', 'Sự Tích Hồ Gươm - Tủ Sách Truyện Tranh Cổ Tích Việt Nam', '2018-06-07 00:00:00', 4, 12, 15, 73000, 1, 1, '', 'Việt Nam', 1, 19);
INSERT INTO `products` VALUES (8, 'Anh Chàng Nhanh Trí', 'anh-chang-nhanh-tri.jpg', 'Những câu chuyện dân gian nuôi dưỡng tâm hồn các em, giúp các em biết học điều hay lẽ phải, yêu cái thiện, ghét cái xấu và trân trọng truyền thống cha ông.', '2018-06-08 00:00:00', 23, 25, 25, 105000, 1, 4, 'Dân Gian Việt Nam', 'Việt Nam', 1, 32);
INSERT INTO `products` VALUES (10, 'Cây Tre Trăm Đốt', 'cay-tre-tram-dot.jpg', 'Truyện Tranh (8856), Việt Nam (9140), Văn Học Thiếu Nhi (9280), Sách Thiếu Nhi (2501).', '2018-06-08 00:00:00', 36, 55, 0, 73000, 1, 4, 'Truyện Cổ Tích Việt Nam', 'Việt Nam', 1, 45);
INSERT INTO `products` VALUES (11, 'Có Công Mài Sắt Có Ngày Nên Kim', 'co-cong-mai-sat-co-ngay-nen-kim.jpg', 'Những câu chuyện dân gian nuôi dưỡng tâm hồn các em, giúp các em biết học điều hay lẽ phải, yêu cái thiện, ghét cái xấu và trân trọng truyền thống cha ông. Bộ sách Tranh truyện dân gian Việt Nam là món quà ý nghĩa với những câu chuyện được tuyển chọn và biên soạn kĩ lưỡng.', '2018-06-08 00:00:00', 15, 29, 20, 105000, 1, 1, 'Tranh Truyện Dân Gian Việt Nam', 'Việt Nam', 1, 23);
INSERT INTO `products` VALUES (12, 'Mật Thư Trên Ngọn Đa', 'mat-thu-tren-ngon-da.jpg', 'Một câu chuyện mang sắc màu cổ tích dành cho tuổi thần tiên được kể trong khung cảnh êm đềm của làng quê Việt.\r\n“Nếu bạn đứng trên ngọn cây đa cổ thụ, nhìn thấy ông mặt trời sau dãy núi phía xa đang từ từ nhô lên như quả bóng lửa, tỏa tia nắng rẻ quạt rọi xuống cánh đồng. Làng mạc, bụi tre, dòng sông… \"', '2018-06-08 00:00:00', 7, 23, 38, 95000, 1, 2, 'Tuổi Thần Tiên', 'Việt Nam', 1, 26);
INSERT INTO `products` VALUES (13, 'Ngủ Ngon Nào Cừu Non', 'ngu-ngon-nao-cuu-non.jpg', 'Cừu con bị mất ngủ rồi, bạn ấy phải làm sao đây? Bé hãy theo dõi câu chuyện được minh họa vô cùng sinh động, đẹp mắt này và cùng đếm với bạn Cừu con nhé!\r\nNhờ sự giúp đỡ của những người bạn yêu quý trong nông trại, bé đoán xem điều gì giúp Cừu con ngủ ngoan nào?', '2018-06-08 00:00:00', 13, 45, 15, 73000, 1, 3, '', 'Việt Nam', 1, 19);
INSERT INTO `products` VALUES (14, 'Cậu Bé Tích Chu', 'cau-be-tich-chu.jpg', 'Cùng với những lời ru ngọt ngào của mẹ, những câu chuyện cổ tích của bà đã góp phần nuôi dưỡng tâm hồn trẻ thơ.', '2018-06-08 00:00:00', 5, 35, 38, 72000, 1, 5, '', 'Việt Nam', 1, 16);
INSERT INTO `products` VALUES (15, 'Việt Nam danh tác - Bỉ Võ', 'nhanam-01.jpg', '\"Khốn nạn! Khách có ra hồn khách. Người sang trọng thì đã đi cô đầu, đi nhảy, nên chỉ có rặt những phường cu li cu leo, cơm thầy cơm cô rửng mỡ hay may mắn lắm, ông bồi, ông bếp, bác tài, bác ét là ào chốn này để ma những phút khoái trá về nhục thể. Được vài ba hào của chúng thật mướt mồ hôi trán; có khi xong xuôi đâu đấy, chúng còn kéo dài giờ ra bằng những câu chuyện đểu cáng xen vào những cá cấu véo cháy đùi non...\r\n\r\nNghĩ đến đấy Tám Bình rùng mình...\"', '2018-06-20 21:48:28', 7, 20, 30, 65000, 2, 2, NULL, 'Việt Nam', 1, 5);
INSERT INTO `products` VALUES (16, 'Việt Nam danh tác - Ngày Xưa', 'nhanam-02.jpg', 'Nguyễn Nhược Pháp sinh tại Hà Nội, ông là con của nhà văn, nhà báo, dịch giả, học giả Nguyễn Văn Vĩnh, quê quán: xã Phượng Dục, huyện Phú Xuyên, Thành phố Hà Nội. Ông học tại trường Albert Sarraut và đỗ tú tài. Ông làm thơ từ sớm và đã từng viết cho các báo Annam Nouveau, Hà Nội Báo, Tinh hoa, Đông Dương Tạp chí. Ông mất năm 24 tuổi tại Hà Nội do bệnh thương hàn.', '2018-06-21 21:50:43', 10, 10, 30, 42000, 2, 2, NULL, 'Việt Nam', 1, 8);
INSERT INTO `products` VALUES (17, 'Việt Nam danh tác - Tinh Huyết', 'nhanam-03.jpg', 'Tinh huyết là tập thơ đầu tay của Bích Khê xuất bản năm 1939 và là tác phẩm duy nhất của tác giả được in lúc sinh thời.\r\n\r\nĐây là tập thơ với nhiều sáng tạo và cách tân độc đáo; nhiều tìm tòi trong nghệ thuật tạo hình, cấu trúc, ngôn từ; cảm xúc lạ, đẹp. Một số bài có ý thơ phóng túng và lời thơ táo bạo: “Nếu Nguyễn Bính là một miền đồng bằng thân thuộc thì Bích Khê là một đỉnh núi lạ. Có những nhà thơ làm thơ. Có những nhà thơ vừa làm thơ vừa đẩy lịch sử thơ ca duy tân thêm một bước. Có những n', '2018-06-04 21:51:45', 7, 25, 0, 58000, 2, 2, NULL, 'Việt Nam', 1, 10);
INSERT INTO `products` VALUES (18, 'Để con được ốm', 'nhanam-04.jpg', '\"Cái hay của sách là giúp chúng ta - những học trò bỡ ngỡ trong lớp học “làm cha mẹ” - giảm bớt áp lực trong quá trình nuôi con. Nuôi con không bao giờ nhàn nhã, nhưng nên mang đến niềm vui, thay vì sự căng thẳng và những chuỗi ngày dài băn khoăn lo lắng, rồi dẫn tới bao điều không hay khác.\"\r\n\r\n(Bs. Đinh Huỳnh Linh, Bệnh viện Tim mạch Quốc gia)', '2018-06-21 21:52:54', 15, 10, 0, 80000, 1, 10, NULL, 'Việt Nam', 1, 6);
INSERT INTO `products` VALUES (19, 'Sống như người Paris', 'nhanam-05.jpg', 'Sống Như Người Paris\r\n\r\nNhững cô gái Paris luôn có điều gì thật bí ẩn, với vẻ duyên dáng và nhẹ nhõm chết người của họ. Bạn đã nhận ra điều đó từ lâu, nhưng không thể cắt nghĩa vì sao!\r\n\r\nỞ đây, trong cuốn sách này, đích thân phụ nữ Paris sẽ đưa ra định nghĩa về... chính họ, và cho ta biết thế nào là một quý cô Paris xét trên mọi mặt: văn hóa, thời trang và thái độ...\r\n\r\nHọ sẽ mách cho bạn biết làm thế nào để trở nên gợi cảm, để khiến bạn trai của bạn phải lên cơn ghen, để tiếp cận đám cưới và p', '2018-07-06 21:53:45', 23, 18, 30, 90000, 2, 2, NULL, 'Pháp', 1, 11);
INSERT INTO `products` VALUES (20, 'Nhật ký Đặng Thùy Trâm - Tái bản (2016)', 'nhanam-06.jpg', 'Một cuốn nhật kí nhặt được bên xác của một nữ Việt Cộng đã suýt bị người lính Mỹ ném vào lửa, nhưng người phiên dịch đã khuyên anh ta nên giữ lại vì \"trong đó có lửa\". Nhật kí Đặng Thùy Trâm là những ghi chép hàng ngày của một người nữ bác sĩ về cuộc sống của chị nơi chiến tuyến. Cuốn nhật kí là thế giới riêng của người trí thức nhạy cảm mà không yếu đuối, tha thiết với cuộc sống mà không hề sợ hãi trước những gian nan. Ở đó ta vẫn gặp những băn khoăn trăn trở trước tình yêu, trước cuộc sống phứ', '2018-06-21 21:54:41', 18, 12, 0, 69000, 6, 11, NULL, 'Việt Nam', 1, 7);
INSERT INTO `products` VALUES (21, 'Hãy đi đặt người canh gác', 'nhanam-07.jpg', 'Một cuốn tiểu thuyết hay.', '2018-06-18 21:55:23', 12, 22, 30, 110000, 2, 6, NULL, 'Mỹ', 1, 13);
INSERT INTO `products` VALUES (22, 'Sau lưng gió bấc', 'nhanam-08.jpg', 'Nếu bạn năm tuổi, bạn sẽ thấy đây là một cuốn truyện đáng yêu và mê hoặc. Bạn sẽ cảm mến cậu bé Kim Cương với nụ cười ngọt ngào, khuôn mặt tĩnh tại như mặt hồ và tâm hồn của một thiên thần. Bạn sẽ choáng ngợp trước Bà Gió cao lớn tuyệt đẹp, làn tóc đen bay lồng lộng ẩn chứa bí mật của màn đêm. Bạn sẽ mê mải cuốn theo những chuyến phiêu lưu của Kim Cương và Gió Bấc, lướt trên đồng cỏ nước Anh, cuộn quanh những ống khói thành London thế kỷ 19, quét dọc ngang bầu trời mênh mông, vù vù trên mặt biển', '2018-06-21 21:56:16', 8, 23, 30, 90000, 2, 2, NULL, 'Mỹ', 1, 7);
INSERT INTO `products` VALUES (23, 'Thân gửi sở thú - Tái bản (2017)', 'nhanam-09.jpg', 'Thân gửi Sở thú là một trong những cuốn sách tranh kinh điển của thế giới, đã tròn 25 năm tuổi và vẫn luôn là một cuốn sách yêu thích của nhiều thế hệ độc giả nhí. Cuốn sách đặc biệt dành riêng cho trẻ từ 0-3 tuổi, với các mẫu câu và từ vựng đơn giản, sử dụng cấu trúc lặp. Điểm đặc biệt thú vị ở Thân gửi Sở thú là những miếng lật đem lại những bất ngờ thú vị cho các bé. Cuốn sách không chỉ giúp tăng cường vốn từ vựng thông qua việc đọc, mà còn thông qua các hoạt động chạm và cảm nhận.', '2018-06-12 21:56:56', 13, 15, 30, 60000, 1, 12, NULL, 'Anh', 1, 14);
INSERT INTO `products` VALUES (24, 'Đời về cơ bản là buồn cười', 'nhanam-10.jpg', 'TOP 100 BEST SELLER - Lê Bích - Nhân vật ảo với chiếc bụng phệ, rốn lồi, khuôn mặt luôn tỏ vẻ tư lự, trên thông thiên văn, dưới tường địa lý, tam giáo, cửu lưu, tứ thư, ngũ kinh, tinh thần yêu nước trung trinh, đạo đức lung linh, phong tục, luật lệ, bản quyền, Horoscope, vật lý lượng tử... cái gì Lê Bích cũng tưởng là chàng biết.\r\n\r\nNăm 2015, Lê Bích xuất hiện và nhanh chóng thu hút được các bạn trẻ nhờ những phát ngôn “chuẩn không cần chỉnh” do chính nhóm bạn nghĩ ra, bên cạnh đó cũng có một số', '2018-06-12 21:57:47', 15, 21, 30, 50000, 2, 2, NULL, 'Việt Nam', 1, 11);
INSERT INTO `products` VALUES (25, 'Ti mệnh', 'bv1.jpg', 'Một cuốn tiểu thuyết hay.', '2018-06-04 22:03:14', 4, 10, 30, 135000, 6, 9, NULL, 'Việt Nam', 1, 7);
INSERT INTO `products` VALUES (26, 'Sự trỗi dậy và suy tàn của đế chế thứ 3', 'bv2.jpg', 'Một cuốn tiểu thuyết hay.', '2018-06-18 22:48:20', 14, 14, 0, 150000, 6, 13, NULL, 'Pháp', 1, 5);
INSERT INTO `products` VALUES (27, 'Academy start 6 WB', 'bv3.jpg', 'The Workbook provides lesson-by-lesson written practice of structural forms, core vocabulary, and reading and writing skills to reinforce the Pupil\'s Book content. Engaging, contextualised activities make language practice meaningful and purposeful, and specifically designed writing practice supports pupils of all levels in writing independently.', '2018-06-25 00:00:00', 11, 18, 30, 140000, 3, 3, '', 'Mỹ', 1, 20);
INSERT INTO `products` VALUES (28, 'Academy start 5 PB', 'bv4.jpg', 'The Workbook provides lesson-by-lesson written practice of structural forms, core vocabulary, and reading and writing skills to reinforce the Pupil\'s Book content. Engaging, contextualised activities make language practice meaningful and purposeful, and specifically designed writing practice supports pupils of all levels in writing independently.', '2018-06-26 22:49:58', 17, 30, 30, 140000, 3, 3, NULL, 'Mỹ', 1, 15);
INSERT INTO `products` VALUES (29, 'Academy start 5 WB', 'bv5.jpg', 'The Workbook provides lesson-by-lesson written practice of structural forms, core vocabulary, and reading and writing skills to reinforce the Pupil\'s Book content. Engaging, contextualised activities make language practice meaningful and purposeful, and specifically designed writing practice supports pupils of all levels in writing independently.', '2018-06-28 22:50:34', 13, 13, 30, 140000, 3, 10, NULL, 'Mỹ', 1, 10);
INSERT INTO `products` VALUES (30, 'Thời thơ ngây (Tái bản 2017)', 'bv6.jpg', 'Cuốn sách kể về câu chuyện của một cặp đôi thuộc tầng lớp thượng lưu xã hội Mỹ đang chuẩn bị kết hôn. Newland Archer, một luật sư hào hoa và là người thừa kế của một trong những gia đình có danh tiếng bậc nhất ở New York lúc bấy giờ, đang háo hức chuẩn bị cho đám cưới mơ ước của mình với tiểu thư May Welland xinh đẹp. Đúng vào thời điểm ấy,nữ Bá tước Ellen Olenska, cô chị họ xinh đẹp của May trở về từ châu Âu sau tin đồn ly hôn với một Bá tước người Ba Lan. Ban đầu, Archer lo lắng vì tai tiếng c', '2018-06-11 22:51:07', 16, 22, 30, 109000, 2, 3, NULL, 'Mỹ', 1, 14);
INSERT INTO `products` VALUES (31, 'Sát nhân mạng', 'bv7.jpg', 'Với Sát nhân mạng, cây viết tiểu thuyết trinh thám nổi tiếng Jeffery Deaver đã khai thác một chủ đề mới về hacker và thế giới máy tính, những thứ vô cùng gắn bó với cuộc sống hiện đại. Câu chuyện xuất phát từ ý niệm rất giản đơn: Sẽ đáng sợ thế nào nếu ai đó có thể biết mọi điều về cuộc sống của chúng ta - những điều chúng ta nghĩ là bí mật của riêng mình, và sử dụng chính những thông tin ấy để sát hại chúng ta. Nỗi cô đơn và sự ruồng bỏ suốt thuở thiếu thời đã biến Phate thành một hacker máu lạ', '2018-06-13 22:51:55', 12, 30, 30, 145000, 6, 4, NULL, 'Đức', 1, 23);
INSERT INTO `products` VALUES (32, 'Kế thừa hay chuyển giao', 'bv8.jpg', 'Giống như bất cứ người nào từng tham gia vào doanh nghiệp gia đình, bạn cũng sẽ bị thu hút bởi những áp lực và khả năng, những sự căng thẳng cũng như những trải nghiệm rõ ràng của loại hình kinh doanh này. Cuốn sách “Kế thừa hay chuyển giao: Sự sống còn của doanh nghiệp gia đình” sẽ tìm hiểu một số câu chuyện thành công - và một số ít thảm kịch - và cố gắng chỉ ra những hành động bạn cần nắm bắt để đảm bảo cho sự thành công của một doanh nghiệp gia đình, ngay cả khi bạn là người sáng lập, là ông', '2018-06-05 22:52:26', 17, 42, 30, 80000, 6, 4, NULL, 'Thụy Sĩ', 1, 27);
INSERT INTO `products` VALUES (33, 'Khoa học cực ngầu', 'bv9.jpg', 'Khoa học có thể rất bất ngờ, hấp dẫn và tất nhiên rất “ngầu”. Sách này giới thiệu 50 trò chơi minh chứng cho sự kỳ thú ấy. Và tuyệt nhất là bạn có thể thực hiện tất cả những trò này tại nhà một cách an toàn với sự hỗ trợ của người lớn. Mọi người sẽ rớt quai hàm xuống tận sàn nhà khi bạn giữ lon nước ngọt đứng nghiêng không đổ, khi bạn giật mạnh tấm khăn trải bàn mà bát đĩa vẫn ở nguyên trên bàn, khi bạn đút lọt quả trứng luộc vào chai cổ hẹp, hoặc khi bạn bẻ cong được ánh sáng xuyên qua dòng nướ', '2018-06-06 23:17:27', 5, 7, 30, 70000, 1, 3, NULL, 'Mỹ', 1, 5);
INSERT INTO `products` VALUES (34, 'Lính bắn tỉa Mỹ', 'bv10.jpg', 'Trong vòng mười năm từ 1999 đến 2009, xạ thủ Chris Kyle của lực lượng biệt kích SEAL thuộc Hải quân Mỹ đã bắn hạ nhiều hơn bất cứ tay súng bắn tỉa nào trong quân sử Hoa Kỳ. Các chiến binh Mỹ, những đồng đội mà anh bảo vệ, yểm trợ với sự chính xác chết người từ trên các mái nhà, các chỗ ẩn náu kín đáo, đã gọi anh là “Huyền thoại”; trong khi kẻ thù thì sợ Kyle đến nỗi trao thưởng lớn cho kẻ nào lấy được đầu của anh... Hấp dẫn và khó quên, sự miêu tả tài tình kinh nghiệm bậc thầy của Chris Kyle trê', '2018-06-04 23:17:31', 21, 43, 0, 125000, 6, 3, NULL, 'Mỹ', 1, 17);
INSERT INTO `products` VALUES (35, 'Oxford Learner\'s Pocket Dictionary of Business English ', 'ta-01.jpg', 'Over 3,500 key words and phrases presented in context 180 topics including the news, technology and the environment Sections on essay writing and spoken English Covers vocabulary for Cambridge exams and IELTS \'Cover and check\' card makes it easy for students to test themselves', '2018-06-29 23:17:34', 34, 24, 0, 86000, 3, 6, NULL, 'Mỹ', 1, 21);
INSERT INTO `products` VALUES (36, 'Oxford Learner\'s Pocket Verbs And Tenses ', 'ta-02.jpg', 'A concise explanation of a key element of the English language: verbs and tenses Helps you avoid mistakes with tips and examples of common errors Gives examples from spoken and written English Written by grammar expert Jon Hird, who teaches English at the University of Oxford', '2018-06-28 23:17:37', 14, 26, 0, 153000, 3, 5, NULL, 'Mỹ', 1, 12);
INSERT INTO `products` VALUES (37, 'Oxford Learner\'s Pocket Grammar', 'ta-03.jpg', 'Each of the 180 grammar topics is organized into 2-page sections Explains how the grammar for each topic is used and how to avoid mistakes Includes a tip to help students sound more natural Covers the topics students need to know for the Cambridge ESOL exams (FCE, CAE and CPE).', '2018-06-27 23:17:40', 7, 31, 0, 98000, 4, 5, NULL, 'Mỹ', 1, 17);
INSERT INTO `products` VALUES (38, 'Oxford Learner\'s Pocket Dictionary', 'ta-04.jpg', 'Up-to-date vocabulary with new words from British and American English Oxford 3000(t) keywords (the most important words to learn in English) are marked with a key symbol Corpus-based examples show how words are used Lots of help with irregular forms and spelling Explains thousands of idioms and phrasal verbs', '2018-06-12 23:17:44', 12, 12, 30, 67000, 4, 5, NULL, 'Mỹ', 1, 10);
INSERT INTO `products` VALUES (39, 'Oxford Learner\'s Pocket Word Skill', 'ta-05.jpg', 'Over 3,500 key words and phrases presented in context 180 topics including the news, technology and the environment Sections on essay writing and spoken English Covers vocabulary for Cambridge exams and IELTS \'Cover and check\' card makes it easy for students to test themselves', '2018-06-04 23:17:46', 10, 30, 30, 73000, 3, 6, NULL, 'Mỹ', 1, 24);
INSERT INTO `products` VALUES (40, 'Năng đoạn kim cương', 'kt1.jpg', 'Cuốn sách này là một câu chuyện về tác giả đã xây dựng đơn vị kim cương lại tại Andin International như thế nào khi sử dụng những nguyên tắc được thu thập từ trí tuệ xưa cổ của Phật giáo, từ cái không có gì thành một hoạt động khắp thế giới sinh nhiều triệu đô la mỗi năm. Phần lớn những quyết định và chính sách trong đơn vị của Tác giả trong suốt thời gian tác giả giữ chức Phó Chủ tịch đều được suy động bỏi những nguyên tắc mà bạn sẽ tìm thấy trong cuốn sách này.', '2018-06-26 23:17:50', 27, 20, 30, 95000, 5, 5, NULL, 'Singapore', 1, 10);
INSERT INTO `products` VALUES (41, 'Mật mã phái đẹp', 'kt2.jpg', 'Mật mã của Nữ doanh dân hướng đến các nữ doanh nhân, nữ chuyên gia, những người kinh doanh ngoài giờ (những người đi làm toàn thời gian và xây dựng doanh nghiệp riêng ngoài giờ làm việc), cũng như bất cứ ai muốn trở thành một phụ nữ tốt hơn. Cuốn sách này sẽ không dạy bạn cách xây dựng một doanh nghiệp nhiều tỷ đô-la hay cách leo lên bậc thang danh vọng của một tập đoàn. Nó sẽ không dạy bạn về các hệ thống hay quy trình hoạt động. Nhưng nó sẽ dạy bạn làm thế nào để xây dựng lòng tự tin ở bản thâ', '2018-06-25 23:17:54', 15, 40, 30, 75000, 5, 9, NULL, 'Mỹ', 1, 25);
INSERT INTO `products` VALUES (42, 'Những chú chó bán hàng', 'kt3.jpg', 'Quyển sách bán chạy thế giới này, Những chú chó bán hàng, đã truyền cảm hứng cho những chủ doanh nghiệp nhỏ, những người bán hàng trực tiếp, và doanh nhân trên toàn thế giới trong gần một thập niên qua bởi vì thông điệp rõ ràng của quyển sách: Sự khác biệt giữa có “Ý Tưởng Triệu Đôla” với thật sự có hàng triệu đôla là khả năng bán ý tưởng, khái niệm, dịch vụ và sản phẩm của bạn. Cho dù bạn đang tìm kiếm công ăn việc làm, tuyển một đội ngũ xuất sắc và giúp họ đi đúng hướng, bán dịch vụ, tăng vốn,', '2018-06-11 23:17:57', 29, 39, 0, 105000, 5, 5, NULL, 'Mỹ', 1, 30);
INSERT INTO `products` VALUES (43, 'Hãy đến hiệu thuốc yunkil', 'kt4.jpg', 'Hãy Đến Hiệu Thuốc Yukil\r\n\r\nHãy Đến Hiệu Thuốc Yukil của CEO nổi tiếng ở Hàn Quốc - Top 10 “kinh nghiệm kinh doanh đắc nhân tâm giúp vượt qua khủng hoảng” do độc giả bình chọn.\r\n\r\nGần đây, người ta hay nói nhiều đến kinh doanh đắc nhân tâm. Kinh doanh đắc nhân tâm không phải được thực hiện chỉ bằng lời nói. Điều này chỉ có thể làm được khi ta toàn tâm đặt lòng mình hướng tới khách hàng. Mở lòng mình ở mọi nơi, khiến cho lòng người chuyển động về phía mình, đó được gọi là “kinh doanh đắc nhân tâm', '2018-06-25 23:18:00', 21, 13, 30, 73000, 4, 9, NULL, 'Mỹ', 1, 23);
INSERT INTO `products` VALUES (44, 'Những bài học đầu tư từ Warren Buffett', 'kt5.jpg', 'Những ai từng đọc về Warren Buffett hẳn cũng hiểu thành công của nhà đầu tư vĩ đại nhất thế giới này không chỉ đến từ khả năng đầu tư mà còn có từ triết lý đằng sau nó, cùng với một tính cách độc đáo và lối sống bình dị.', '2018-06-18 23:18:03', 18, 12, 30, 120000, 5, 5, NULL, 'Mỹ', 1, 12);
INSERT INTO `products` VALUES (45, 'Ý tưởng đột phá trong kinh doanh', 'kt6.jpg', 'Jeremy Gutsche là cái tên không còn xa lạ gì với những người yêu thích sự sáng tạo và đổi mới. Anh là ông chủ của Trend Hunter - trang web chuyên viết về các xu hướng nổi tiếng, thu hút hơn 20 triệu lượt truy cập mỗi tháng. Khi ra mắt tác phẩm tâm huyết của mình - \"Better and Faster: Ý tưởng đột phá trong kinh doanh\", Gutsche hẳn cũng đã dự đoán được xu hướng \"không thể khác được\": Cuốn sách của anh nhanh chóng đứng trong danh sách New York Times Bestseller, được gọi là \"viên ngọc quý\" và có sức', '2018-06-11 23:18:06', 13, 20, 30, 90000, 4, 10, NULL, 'Mỹ', 1, 22);
INSERT INTO `products` VALUES (46, 'Quản lý', 'kt7.jpg', '“Quản lý thời gian” cũng giống như một món quà bạn dành tặng bản thân trong tương lai. Bởi khi thời gian trôi đi và những dấu hiệu lão hóa ngày càng xuất hiện nhiều hơn trên cơ thể và cả tâm trí bạn, bạn vẫn có thể tự tin rằng mình sẽ vẫn không bị mất đi sự sắc bén. Bạn sẽ sẵn sàng bước về phía trước, vì bạn đã biết cách củng cố và bảo tồn kỹ năng điều hành của mình ngay từ khi còn trẻ!\r\n\r\nRichard Guare và Peg Dawson là những chuyên gia về Thần kinh học và Tâm lý học. Các tác phẩm của họ thường ', '2018-05-28 23:18:08', 19, 18, 30, 70000, 5, 13, NULL, 'Mỹ', 1, 21);
INSERT INTO `products` VALUES (47, 'Để thế giới biết bạn là ai', 'kt8.jpg', 'Đây là một cuốn sách về nghệ thuật bán hàng, nhưng nó lại không dạy bạn cách để bán một món hàng cụ thể. Có một sự thật là tất cả chúng ta đều là người bán hàng, bất kể chúng ta là ai, theo nghề nghiệp gì, hoạt động trong lĩnh vực nào, bất kể đâu là đam mê mà ta đang theo đuổi. Bạn không nhất thiết phải bán một món hàng cụ thể mới là người bán hàng, mỗi lúc bạn chuyện trò cùng ai đó, chia sẻ một ý kiến, giải thích một ý tưởng, chính là bạn đang bán ra món sở hữu giá trị nhất của bạn – chính bạn.', '2018-06-11 23:18:12', 17, 22, 35, 80000, 4, 11, NULL, 'Đức', 1, 23);

SET FOREIGN_KEY_CHECKS = 1;
