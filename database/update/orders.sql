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

 Date: 23/06/2018 20:28:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Customer` int(11) NULL DEFAULT NULL,
  `Date` datetime(0) NULL DEFAULT NULL,
  `Status` int(11) NULL DEFAULT NULL,
  `Total` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_Cus_idx`(`Customer`) USING BTREE,
  CONSTRAINT `FK_Cus` FOREIGN KEY (`Customer`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 49 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES (1, 1, '2018-06-22 00:26:12', 0, 185000);
INSERT INTO `orders` VALUES (2, 6, '2018-06-20 11:45:00', 2, 273000);
INSERT INTO `orders` VALUES (43, 1, '2018-06-23 19:49:50', 0, 246000);
INSERT INTO `orders` VALUES (44, 1, '2018-06-23 19:52:00', 2, 122000);

SET FOREIGN_KEY_CHECKS = 1;
