CREATE DATABASE Guessing_Game;
USE Guessing_Game;

CREATE TABLE `Player` (
                          `id` int (10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
                          `name` varchar (255) DEFAULT NULL,
                          `nickname` varchar(255) NOT NULL,
                          `created_at` timestamp NOT NULL DEFAULT current_timestamp()
);

INSERT INTO `Player` (name, nickname)
VALUES ('Dominik', 'Doschi'),
       ('Sebastian', 'Sebi');


CREATE TABLE `Game` (
                        `id` int (10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
                        `player_id` int (10) NOT NULL,
                        `randomNumber` int (11) NOT NULL,
                        `tried_tries` int(11) NOT NULL,
                        `left_tries` int(11) NOT NULL,
                        `won` INT(1) NOT NULL,
                        CONSTRAINT `fk_game_player` FOREIGN KEY (`player_id`) REFERENCES `Player` (`id`)
);


INSERT INTO `Game` (player_id, randomNumber, tried_tries, left_tries, won)
VALUES (1, 89, 5, 5, 1),
       (2, 70, 4, 6, 1);
