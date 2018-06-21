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

 Date: 22/06/2018 00:13:47
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for brands
-- ----------------------------
DROP TABLE IF EXISTS `brands`;
CREATE TABLE `brands`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Description` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of brands
-- ----------------------------
INSERT INTO `brands` VALUES (1, 'Kim Đồng', 'NXB Kim Đồng tên thật là Nông Văn Dền');
INSERT INTO `brands` VALUES (2, 'Nhã Nam', 'NXB Nhã Nam quê ở Bình Định');
INSERT INTO `brands` VALUES (3, 'Bách Việt', 'NXB này nghe nói đâu đó ở Hà Nội');
INSERT INTO `brands` VALUES (4, 'Đinh Tị', 'nothing');
INSERT INTO `brands` VALUES (5, 'Trẻ', 'tuổi trẻ tài cao');
INSERT INTO `brands` VALUES (6, 'Minh Long', 'Truyện hoạt hình Nhật Bản');
INSERT INTO `brands` VALUES (9, 'LimBooks', 'ở Áo');
INSERT INTO `brands` VALUES (10, 'Parragon', 'nothing');
INSERT INTO `brands` VALUES (11, 'Sterling', 'nothing');
INSERT INTO `brands` VALUES (12, 'Trí Việt', '');
INSERT INTO `brands` VALUES (13, 'Thái Hà', '');

SET FOREIGN_KEY_CHECKS = 1;
