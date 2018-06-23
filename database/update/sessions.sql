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

 Date: 23/06/2018 20:28:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sessions
-- ----------------------------
DROP TABLE IF EXISTS `sessions`;
CREATE TABLE `sessions`  (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL,
  PRIMARY KEY (`session_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sessions
-- ----------------------------
INSERT INTO `sessions` VALUES ('4NijJ_d6ZWuf-Yfcb8gXxa-SeouSdSt2', 1529846684, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isLogged\":true,\"Total\":122000,\"cartLayout\":[{\"id\":12,\"Name\":\"Mật Thư Trên Ngọn Đa\",\"Count\":1,\"Price\":58000,\"Picture\":\"mat-thu-tren-ngon-da.jpg\"},{\"id\":1,\"Name\":\"Bé Trổ Tài Tô Màu\",\"Count\":1,\"Price\":64000,\"Picture\":\"be-tro-tai-to-mau.jpg\"}],\"user\":{\"id\":1,\"Username\":\"nnlinh97\",\"Password\":\"e7042ac7d09c7bc41c8cfa5749e41858f6980643bc0db1a83cc793d3e24d3f77\",\"Fullname\":\"Nguyễn Ngọc Linh\",\"CMND\":\"212481093\",\"DOB\":\"1997-07-13T17:00:00.000Z\",\"Sex\":\"Male\",\"Address\":\"Quận 10\",\"Phone\":\"0978289014\",\"Email\":\"nnlinh97it@gmail.com\",\"Permission\":1,\"Actived\":1},\"cart\":[{\"id\":\"12\",\"count\":1},{\"id\":\"1\",\"count\":1}]}');
INSERT INTO `sessions` VALUES ('FP4moB9PmjZBOxD3OBjpbIpoaBOvKmzg', 1529773957, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isLogged\":true,\"user\":{\"id\":6,\"Username\":\"hieuho\",\"Password\":\"e7042ac7d09c7bc41c8cfa5749e41858f6980643bc0db1a83cc793d3e24d3f77\",\"Fullname\":\"Ho Chi Hieu\",\"CMND\":\"212652369\",\"DOB\":\"1997-10-22T17:00:00.000Z\",\"Sex\":\"Male\",\"Address\":\"181/3 TP\",\"Phone\":\"0987654554\",\"Email\":\"hieuho@gmail.com\",\"Permission\":0,\"Actived\":1},\"limit\":\"18\"}');
INSERT INTO `sessions` VALUES ('SoS4czzjqQziz4JF3xFa2_LO0gD7WQ-S', 1529760632, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isLogged\":true,\"user\":{\"id\":1,\"Username\":\"nnlinh97\",\"Password\":\"e7042ac7d09c7bc41c8cfa5749e41858f6980643bc0db1a83cc793d3e24d3f77\",\"Fullname\":\"Nguyễn Ngọc Linh\",\"CMND\":\"212481093\",\"DOB\":\"1997-07-13T17:00:00.000Z\",\"Sex\":\"Male\",\"Address\":\"Quận 10\",\"Phone\":\"0978289014\",\"Email\":\"nnlinh97it@gmail.com\",\"Permission\":1,\"Actived\":1}}');

SET FOREIGN_KEY_CHECKS = 1;
