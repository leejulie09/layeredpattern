-- create postings table
CREATE TABLE postings
(
id INT AUTO_INCREMENT,
user_id INT NOT NULL,
contents VARCHAR(2000) NULL,
created_at DATETIME DEFAULT NOW(),
PRIMARY KEY (id),
FOREIGN KEY (user_id) REFERENCES users (id)
);


-- create postings_images table
CREATE TABLE posting_images
(
id INT AUTO_INCREMENT,
posting_id INT NOT NULL,
image_url VARCHAR(3000),
created_at DATETIME DEFAULT NOW(),
PRIMARY KEY (id),
FOREIGN KEY (posting_id) REFERENCES postings (id)
);
