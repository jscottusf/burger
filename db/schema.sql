DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table plans.
CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE burger_menu (
    id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50) NOT NULL,
    burger_description TEXT NULL,
    burger_price DECIMAL(10, 2) NULL,
    PRIMARY KEY (id)
);
