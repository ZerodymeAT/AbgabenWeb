DROP DATABASE IF EXISTS zahlenraten;
CREATE DATABASE zahlenraten;
USE zahlenraten;

CREATE TABLE `db_userwithscoreboard` (
`id` int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(50) NOT NULL,
`nickname` varchar(191) NOT NULL,
`created_at` timestamp NOT NULL DEFAULT current_timestamp(),
`randomNumber` int (10),
`number_of_tries` int(10),
`left_tries` int(10),
`minmaxrange` int(10),
`won` tinyint(1)
);