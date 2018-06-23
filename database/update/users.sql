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

 Date: 23/06/2018 20:29:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Password` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Fullname` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `CMND` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `DOB` datetime(0) NULL DEFAULT NULL,
  `Sex` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Address` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Phone` varchar(15) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Email` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Permission` int(11) NULL DEFAULT NULL COMMENT 'admin: 2\nnhanvien: 1\nkhachhang: 0',
  `Actived` int(11) NULL DEFAULT NULL COMMENT 'actived: 1\nblocked: 0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'nnlinh97', 'e7042ac7d09c7bc41c8cfa5749e41858f6980643bc0db1a83cc793d3e24d3f77', 'Nguyễn Ngọc Linh', '212481093', '1997-07-14 00:00:00', 'Male', 'Quận 10', '0978289014', 'nnlinh97it@gmail.com', 1, 1);
INSERT INTO `users` VALUES (2, 'huantd', 'e7042ac7d09c7bc41c8cfa5749e41858f6980643bc0db1a83cc793d3e24d3f77', 'Trần Đình Huân', '212481095', '1997-10-11 00:00:00', 'Female', 'Bình Thạnh', '0976998997', 'huantd@gmail.com', 1, 1);
INSERT INTO `users` VALUES (4, 'huycao', 'e7042ac7d09c7bc41c8cfa5749e41858f6980643bc0db1a83cc793d3e24d3f77', 'Cao Gia Huy', '212234543', '2018-06-20 00:00:00', 'Male', 'Quận 5', '0987654322', 'huycao@gmail.com', 1, 0);
INSERT INTO `users` VALUES (6, 'hieuho', 'e7042ac7d09c7bc41c8cfa5749e41858f6980643bc0db1a83cc793d3e24d3f77', 'Ho Chi Hieu', '212652369', '1997-10-23 00:00:00', 'Male', '181/3 TP', '0987654554', 'hieuho@gmail.com', 0, 1);
INSERT INTO `users` VALUES (7, 'tiendinh', 'e7042ac7d09c7bc41c8cfa5749e41858f6980643bc0db1a83cc793d3e24d3f77', 'Nguyễn Đình Tiến', '212111357', '2018-06-27 00:00:00', 'Male', 'Quận 11', '0987543754', 'tiendinh@gmail.com', 0, 1);
INSERT INTO `users` VALUES (8, 'thanglee', 'e7042ac7d09c7bc41c8cfa5749e41858f6980643bc0db1a83cc793d3e24d3f77', 'Trần Lê Thăng', '2122243336', '2018-06-27 00:00:00', 'Other', '606/12 Q10', '0987654008', 'thanglee@gmail.com', 0, 1);
INSERT INTO `users` VALUES (9, 'tradat', '9c31e4a36195f37bb6804015199277eae880c6643588c9b3a5c9e8263e1c8128', 'Trà Ngọc Tiến Đạt', '2122243224', '1997-08-14 00:00:00', 'Female', 'KTX Hòa Hảo', '0987334597', 'tiendat97@gmail.com', 1, 1);
INSERT INTO `users` VALUES (11, 'minhdat', 'e7042ac7d09c7bc41c8cfa5749e41858f6980643bc0db1a83cc793d3e24d3f77', 'Trần Minh Đạt', '212224431', '1997-07-30 00:00:00', 'Other', 'Quận 10', '0987543754', 'datdat@gmail.com', 1, 0);
INSERT INTO `users` VALUES (12, 'anlee', '9dbaa0f36388f66c058c2983697c48553c79f2ec44c0a2ff31541e4793a84ef7', 'Hoàng Lê An', '2122243225', '1997-10-21 00:00:00', 'Other', '181/3 TP', '0987654442', 'anlee@gmail.com', 1, 1);
INSERT INTO `users` VALUES (18, 'longk', '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b', 'Thai Ba Long', '2122243339', '2018-06-20 00:00:00', 'Female', 'Quận 5', '0987654559', 'longk@gmail.com', 0, 1);

SET FOREIGN_KEY_CHECKS = 1;
