CREATE DATABASE devMeet;


CREATE TABLE users(
   user_id uuid  PRIMARY KEY DEFAULT
   uuid_generate_v4(),
   user_name VARCHAR(255) NOT NULL,
   user_password VARCHAR(255) NOT NULL,
    user_comfirmpassword VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- test user --
INSERT INTO users(user_name, user_password, user_comfirmpassword) VALUES ('jacob', 'jacob1234', 'jacob21234');
