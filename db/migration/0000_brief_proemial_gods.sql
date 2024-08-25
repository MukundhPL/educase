CREATE TABLE `School` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(500) NOT NULL,
	`address` varchar(250) NOT NULL,
	`latitude` float NOT NULL,
	`longitude` float NOT NULL,
	CONSTRAINT `School_id` PRIMARY KEY(`id`)
);
