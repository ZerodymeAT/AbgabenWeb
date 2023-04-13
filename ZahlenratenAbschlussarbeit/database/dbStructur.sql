DROP DATABASE IF EXISTS zahlenraten;
CREATE DATABASE zahlenraten;
USE zahlenraten;

CREATE TABLE `db_user` (
`id` int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` text NOT NULL,
`nickname` varchar(191) NOT NULL,
`created_at` timestamp NOT NULL DEFAULT current_timestamp()
);

CREATE TABLE `db_scoreboard` (
`id` int (10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
`player_id` int (10) NOT NULL,
`randomNumber` int (11) NOT NULL,
`number_of_tries` int(11) NOT NULL,
`left_tries` int(11) NOT NULL,
`won` INT(11) NOT NULL,
CONSTRAINT `fk_ScoreToPlayer` FOREIGN KEY (`player_id`) REFERENCES `db_user` (`id`)
);