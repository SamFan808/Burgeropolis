### Schema

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	burger_name varchar(255),
	devoured BOOLEAN
);