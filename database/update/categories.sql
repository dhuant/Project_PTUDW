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

 Date: 23/06/2018 00:07:14
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Description` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES (1, 'Thiếu Nhi', 'Dành cho trẻ em');
INSERT INTO `categories` VALUES (2, 'Văn Học', 'văn học việt nam');
INSERT INTO `categories` VALUES (3, 'Tiếng Anh', 'Tiếng anh dành cho người Mỹ không biết tiếng anh :v ');
INSERT INTO `categories` VALUES (4, 'Nước Ngoài', 'văn học nước ngoài và nhiều loại khác');
INSERT INTO `categories` VALUES (5, 'Kinh Tế', 'chính trị gia, tùm lum thứ chuyện trên đời');
INSERT INTO `categories` VALUES (6, 'Khác', 'sách khác');

SET FOREIGN_KEY_CHECKS = 1;
