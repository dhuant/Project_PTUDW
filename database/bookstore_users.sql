-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bookstore
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Password` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Fullname` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `CMND` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DOB` datetime DEFAULT NULL,
  `Sex` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Address` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Phone` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Email` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Permission` int(11) DEFAULT NULL COMMENT 'admin: 2\nnhanvien: 1\nkhachhang: 0',
  `Actived` int(11) DEFAULT NULL COMMENT 'actived: 1\nblocked: 0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'nnlinh97','e7042ac7d09c7bc41c8cfa5749e41858f6980643bc0db1a83cc793d3e24d3f77','Nguyễn Ngọc Linh','212481093','1997-07-14 00:00:00','Other','Quận 10','0978289014','nnlinh97it@gmail.com',1,1),(2,'huantd','e7042ac7d09c7bc41c8cfa5749e41858f6980643bc0db1a83cc793d3e24d3f77','Trần Đình Huân','212481095','1997-10-11 00:00:00','Other','Bình Thạnh','0976998997','huantd@gmail.com',1,1),(4,'huycao','e7042ac7d09c7bc41c8cfa5749e41858f6980643bc0db1a83cc793d3e24d3f77','Cao Gia Huy','212234543','2018-06-20 00:00:00','Male','Quận 5','0987654322','huycao@gmail.com',1,0),(6,'hieuho','e7042ac7d09c7bc41c8cfa5749e41858f6980643bc0db1a83c','Ho Chi Hieu','212652369','1997-10-23 00:00:00','Female','181/3 TP','0987654554','hieuho@gmail.com',1,1),(7,'tiendinh','1450e20f04c98096eac8874561d2c09dc5b38ff9f5574657e1','Nguyễn Đình Tiến','212111357','2018-06-27 00:00:00','Male','Quận 11','0987543754','tiendinh@gmail.com',1,1),(8,'thanglee','70d6cb8f59a035e01032d3d9225d0af08e30c0d8219e4d027275f57953a2b8bf','Trần Lê Thăng','2122243336','2018-06-27 00:00:00','Other','606/12 Q10','0987654008','thanglee@gmail.com',1,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-05  0:01:13