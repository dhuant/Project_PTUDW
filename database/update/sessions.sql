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

 Date: 22/06/2018 00:14:22
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
INSERT INTO `sessions` VALUES ('Cb5yID4maFOrtJlqiEMc60v9BKNDT7yB', 1529666172, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isLogged\":true,\"user\":{\"id\":18,\"Username\":\"longk\",\"Password\":\"6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b\",\"Fullname\":\"Thai Ba Long\",\"CMND\":\"null\",\"DOB\":\"0000-00-00 00:00:00\",\"Sex\":\"Unknown\",\"Address\":\"null\",\"Phone\":\"0987654559\",\"Email\":\"longk@gmail.com\",\"Permission\":0,\"Actived\":1}}');
INSERT INTO `sessions` VALUES ('ix6FfNzEgYGol-GbiG3p1v7degFQhaI_', 1529681147, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isLogged\":true,\"limit\":9,\"user\":{\"id\":1,\"Username\":\"nnlinh97\",\"Password\":\"e7042ac7d09c7bc41c8cfa5749e41858f6980643bc0db1a83cc793d3e24d3f77\",\"Fullname\":\"Nguyễn Ngọc Linh\",\"CMND\":\"212481093\",\"DOB\":\"1997-07-13T17:00:00.000Z\",\"Sex\":\"Male\",\"Address\":\"Quận 10\",\"Phone\":\"0978289014\",\"Email\":\"nnlinh97it@gmail.com\",\"Permission\":1,\"Actived\":1}}');
INSERT INTO `sessions` VALUES ('lJy6KHJmvkUAC5h0YTg0M2TilSXG1Yuw', 1529687064, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isLogged\":true,\"limit\":9,\"user\":{\"id\":1,\"Username\":\"nnlinh97\",\"Password\":\"e7042ac7d09c7bc41c8cfa5749e41858f6980643bc0db1a83cc793d3e24d3f77\",\"Fullname\":\"Nguyễn Ngọc Linh\",\"CMND\":\"212481093\",\"DOB\":\"1997-07-13T17:00:00.000Z\",\"Sex\":\"Male\",\"Address\":\"Quận 10\",\"Phone\":\"0978289014\",\"Email\":\"nnlinh97it@gmail.com\",\"Permission\":1,\"Actived\":1}}');

SET FOREIGN_KEY_CHECKS = 1;
