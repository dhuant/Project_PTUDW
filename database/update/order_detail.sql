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

 Date: 23/06/2018 00:07:19
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for order_detail
-- ----------------------------
DROP TABLE IF EXISTS `order_detail`;
CREATE TABLE `order_detail`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Order` int(11) NOT NULL,
  `Product` int(11) NULL DEFAULT NULL,
  `Count` int(11) NULL DEFAULT NULL,
  `Price` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `Order`) USING BTREE,
  INDEX `FK_Order_idx`(`Order`) USING BTREE,
  INDEX `FK_Pro_idx`(`Product`) USING BTREE,
  CONSTRAINT `FK_Order` FOREIGN KEY (`Order`) REFERENCES `orders` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_Pro` FOREIGN KEY (`Product`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of order_detail
-- ----------------------------
INSERT INTO `order_detail` VALUES (1, 1, 1, 1, 80000);
INSERT INTO `order_detail` VALUES (2, 1, 4, 1, 105000);
INSERT INTO `order_detail` VALUES (3, 2, 10, 1, 73000);
INSERT INTO `order_detail` VALUES (4, 2, 11, 1, 105000);
INSERT INTO `order_detail` VALUES (5, 2, 12, 1, 95000);

SET FOREIGN_KEY_CHECKS = 1;
