DROP DATABASE IF EXISTS second_blind_date_db;

CREATE DATABASE second_blind_date_db;

CREATE TABLE `second_blind_date_db`.`user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `sexual_orientation` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
);

CREATE TABLE `second_blind_date_db`.`answer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `question_id` int NOT NULL,
  `answer` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);