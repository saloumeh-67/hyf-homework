--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT into task (title,description,created,updated,due_date,status_id,user_id)
VALUES("study","learning database",'2020-9-29 13:35:10','2020-9-29 13:40:10','2020-10-1 12:00:00','2','11');
--Change the title of a task
UPDATE task
SET title = "this one changed"
WHERE id = 28;
--Change a task due date
UPDATE task 
SET due_date = '2018-12-01 14:30:00'
WHERE id = 28;
--Change a task status
UPDATE task
SET status_id = 1
WHERE id = 28;
--Mark a task as complete
UPDATE task
SET status_id = 3
WHERE id = 10;
--Delete a task
DELETE FROM task 
where id = 13;
