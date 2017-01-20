create table category (
	id INT NOT NULL auto_increment,
	type VARCHAR(50) NOT NULL,
	description VARCHAR(255),
	PRIMARY KEY(id)
);
create table purchase_item (
	id INT NOT NULL auto_increment,
	reference_id VARCHAR(255) NOT NULL,
	trans_date DATE NOT NULL,
	post_date DATE NOT NULL,
	description VARCHAR(255) NOT NULL,
	amount DOUBLE(7,2) NOT NULL,
	category_id INT,
	PRIMARY KEY(id),
	FOREIGN KEY (category_id) REFERENCES category(id),
	UNIQUE(reference_id)
);

