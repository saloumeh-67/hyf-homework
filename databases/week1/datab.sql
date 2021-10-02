--ALTER TABLE
	--Find out how many tasks in the task table do not have a valid due date
	SELECT count(title) from task where due_date is NULL; 
	--Find all the tasks that are marked as done.
	SELECT * from task 
    join status on task.status_id = status.id 
    where status.name  = 'Done';
	-- Find all the tasks that are not marked as done
	SELECT * from task 
    join status on task.status_id = status.id 
    where status.name  != 'Done';
    --Get all the tasks, sorted with the most recently created first
	SELECT title, created from task ORDER BY created DESC;
	--Get the single most recently created task
	SELECT title, created from task ORDER BY created DESC LIMIT 1;
	--Get the title and due date of all tasks where the title or description contains database
	SELECT title, due_date FROM task WHERE title LIKE "%database%" OR description LIKE "%database%";
	--Get the title and status (as text) of all tasks
	SELECT task.title, status.name from task,status where task.status_id = status_id;
	--Get the name of each status, along with a count of how many tasks have that status
    SELECT task.title, status.name from task,status where task.status_id = status.id; 
	--Get the names of all statuses, sorted by the status with most tasks first
   SELECT status.name, count(*) FROM status JOIN task ON task.status_id = status.id
   GROUP BY status.name 
   ORDER BY count(*) DESC; 
   --I wanted to use orderby but I coulden't find out how it would be nice if you help with that :).