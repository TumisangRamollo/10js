-- Admin table
CREATE TABLE adminUser (
        user_id serial PRIMARY KEY,
        firstname VARCHAR(50) NOT NULL,
        lastname VARCHAR(50) NOT NULL,
        username VARCHAR ( 50 ) UNIQUE NOT NULL,
        password VARCHAR ( 50 ) NOT NULL,
        email VARCHAR ( 255 ) UNIQUE NOT NULL,
        created_on TIMESTAMP
);

INSERT INTO adminUser (firstname, lastname,username, password, email )
    VALUES ('Tumisang', 'Ramollo', 'tumi111', 'Walalawasala1!', 'ramollosamuel2@gmail.com');