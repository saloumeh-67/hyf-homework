
--Create a new database containing the following tables:
--Class: with the columns: id, name, begins (date), ends (date)
--Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE Table class(
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `begins` DATE,
    `ends` DATE
);
create table student(
    `id` INT PRIMARY KEY ,
    `name` VARCHAR(255)NOT NULL,
    `email` VARCHAR(255) UNIQUE NOT NULL,
    `phone` INT, 
    `class_id`int(10), FOREIGN KEY (class_id) 
     REFERENCES class(id));
);
--Create an index on the name column of the student table.
CREATE index idx_name
on student(name);
--Add a new column to the class table named status 
ALTER TABLE class
ADD status VARCHAR(255);
INSERT INTO class(status) VALUES('not-started'), ('ongoing'),('finished');