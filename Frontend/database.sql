CREATE DATABASE ContactUs;

CREATE TABLE Admin (
    id int,
    user_firstname varchar(255),
    user_lastname varchar(255),
  Date TIMESTAMP NOT NULL DEFAULT CURRENT_DATE(),
);

 CREATE TABLE UserContactUs (
	id serial PRIMARY KEY,
	firstname VARCHAR ( 50 ) NOT NULL,
	lastname VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) NOT NULL,
	messages VARCHAR ( 1000 ) NOT NULL,
	created_on TIMESTAMP NOT NULL,
);


CREATE TABLE Photos (
	id serial PRIMARY KEY,
	image bytea NOT NULL,
	image_name VARCHAR ( 50 ) NOT NULL,
		created_on TIMESTAMP NOT NULL
);

CREATE TABLE Videos (
	id serial PRIMARY KEY,
	image bytea NOT NULL,
	video_name VARCHAR ( 50 ) NOT NULL,
		created_on TIMESTAMP NOT NULL
);






-- .setItem("myObject", JSON.stringify(myObject));
-- .localStorage.getItem(JSON.parse(newObject)));