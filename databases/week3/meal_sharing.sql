CREATE Table meal(
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(250) NOT NULL,
    `description` TEXT,
    `location` VARCHAR(150),
    `when` DATETIME,
    `max_reservations` INT,
    `price` DECIMAL(10.2),
    `created_date` DATE
  );
CREATE Table reservation(
    `id`INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `number_of_guests` INT NOT NULL,
    `meal_id` INT NOT NULL,
    `created_date` DATE,
    `contact_phonenumber` VARCHAR(250),
    `contact_name` VARCHAR(250),
    `contact_email` VARCHAR(250),
    FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`)
  );
CREATE TABLE review(
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(300),
    `description` TEXT,
    `meal_id` INT,
    FOREIGN KEY(`meal_id`) REFERENCES `meal` (`id`),
    `stars` INT,
    `created_date` DATE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
--add meals data
INSERT INTO meal (`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`)VALUES("hand_made_pasta","how to make great pasta","online","2021-10-01","4","500","2021-9-1");
INSERT INTO meal (`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`)VALUES("homemade_gnocchi","Learn best Genocchi","online","2021-10-02","4","350","2021-9-1");
INSERT INTO meal (`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`)VALUES("tomato_ravioli","italian tomato and ravioli","online","2021-10-3","4","500","2021-9-1");
INSERT INTO meal (`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`)VALUES("panna_cotta","real taste of our country","online","2021-10-4","4","400","2021-9-1");
INSERT INTO meal (`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`)VALUES("carbonerra","taste you never forget","online","2021-10-5","4","500","2021-9-1");
--add reservation data
INSERT INTO reservation(`number_of_guests`,`meal_id`,`created_date`,`contact_phonenumber`,`contact_name`,`contact_email`)VALUES("4","3","2021-9-1","11223344","Jiu","
aurajiu@gmail.com");
INSERT INTO reservation(`number_of_guests`,`meal_id`,`created_date`,`contact_phonenumber`,`contact_name`,`contact_email`)VALUES("4","1","2021-9-1","22113311","Shabnam","
Www.shabnamght77@gmail.com
");
INSERT INTO reservation(`number_of_guests`,`meal_id`,`created_date`,`contact_phonenumber`,`contact_name`,`contact_email`)VALUES("4","5","2021-9-1","33221144","Divya","
guttuladivyajyothi@gmail.com");
--add review table data
INSERT INTO review(`title`, `description`, `meal_id`, `stars`, `created_date`)VALUES("Really-GOOD"," make it again",5,4.5,"2021-10-3");
INSERT INTO review(`title`, `description`, `meal_id`, `stars`, `created_date`)VALUES("good","recomended",1,4.5,"2021-10-2");
INSERT INTO review(`title`, `description`, `meal_id`, `stars`, `created_date`)VALUES("It was ok","it takes too much time",3,2.5,"2021-10-4");
INSERT INTO review(`title`, `description`, `meal_id`, `stars`, `created_date`)VALUES("not happy","I had better",4,1,"2021-10-5");
INSERT INTO review(`title`, `description`, `meal_id`, `stars`, `created_date`)VALUES("super","Definitly make again",5,5,"2021-10-6");
--Create these queries 
SELECT * from meal;
INSERT INTO meal (`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`)VALUES("calzone","how to make spinach calzone","online","2021-10-01","4","400","2021-9-1");
SELECT * from meal WHERE id = 3;
--UPDATE table_name
--SET column1 = value1, column2 = value2, ...
--WHERE condition;
UPDATE  meal 
SET description = "it cant be more Italian"
WHERE id = 6;
DELETE from meal WHERE id = 2;
--Reservation queries
SELECT * from reservation;
INSERT INTO reservation(`number_of_guests`,`meal_id`,`created_date`,`contact_phonenumber`,`contact_name`,`contact_email`)VALUES("4","7","2021-9-2","44455566","Sunil","sunilkumarmahajan@gmail.com");
SELECT * from reservation WHERE id = 4;
UPDATE reservation
SET created_date = '2021-10-4'
WHERE id = 4;
DELETE from reservation WHERE id = 5;
--review data 
SELECT * from review;
INSERT INTO review(`title`, `description`, `meal_id`, `stars`, `created_date`)VALUES("super","easy to cook",7,4,"2021-10-9");
select * from review WHERE id =7;
UPDATE review
set title = "super good", stars = "4.5"
WHERE id = 7;
DELETE from review WHERE id = 6;
--Additional queries
--Get meals that has a price smaller than a specific price fx 90
SELECT * from meal where price < 400;
--Get meals that still has available reservations
INSERT INTO reservation(`number_of_guests`,`meal_id`,`created_date`,`contact_phonenumber`,`contact_name`,`contact_email`)VALUES('4',"7","2021-9-2",null,null,null);
DELETE from reservation where id=7; 
INSERT INTO meal (`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`)VALUES("pasta","how to make great olive pasta","online","2021-10-011",NULL,"350","2021-9-1");
SELECT * from meal WHERE max_reservations = NULL;
--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * from meal WHERE title LIKE '%pasta%';
--Get meals that has been created between two dates
UPDATE meal
SET created_date = '2021-09-3'
WHERE id = 3;
SELECT created_date
FROM meal 
WHERE 2021-09-01 OR 2021-09-03;
--Get only specific number of meals fx return only 5 meals
SELECT * from meal WHERE id > 3;
--Get the meals that have good reviews
SELECT * from review WHERE stars > 4;
--Get reservations for a specific meal sorted by created_date
SELECT meal.id, reservation.meal_id, meal.title, 
reservation.number_of_guests, reservation.created_date FROM meal, reservation
WHERE meal.title LIKE "carbonerra" and meal.id=reservation.meal_id
ORDER BY reservation.created_date;
--Sort all meals by average number of stars in the reviews
select avg(review.stars) ,meal.title,review.meal_id from meal
join review on meal.id=review.meal_id
group by meal.id order by avg(review.stars);