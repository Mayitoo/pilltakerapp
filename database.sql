CREATE DATABASE pill_taker;
USE pill_taker;


CREATE TABLE pill(
id INT(11),
pname VARCHAR(50) NOT NULL,
dexpire VARCHAR(20) NOT NULL,
dtakei VARCHAR(50) NOT NULL,
dtakef VARCHAR(50) NOT NULL,
image VARCHAR(100),
schedulee VARCHAR(100)
);