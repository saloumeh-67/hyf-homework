ALTER TABLE
	status CHANGE id id int unsigned NOT NULL;
	select COUNT(*)from task;
	--Find out how many tasks in the task table do not have a valid due date
	SELECT * from task where due_date is NULL; 
	--Find all the tasks that are marked as done.
	SELECT * from task 
    join status on task.status_id = status.id 
    where status.name  = 'Done';
	-- Find all the tasks that are not marked as done
	SELECT * from task 
    join status on task.status_id = status.id 
    where status.id < 3;
    --Get all the tasks, sorted with the most recently created first
	SELECT MAX(created) from task GROUP BY user_id;
	--Get the single most recently created task
	SELECT MAX(created)from task;
	--Get the title and due date of all tasks where the title or description contains database
	SELECT title, due_date FROM task WHERE title LIKE "%database%" OR description LIKE "%database%";
	--Get the title and status (as text) of all tasks
	SELECT task.title, status.name from task,status where task.status_id = status_id;
	--Get the name of each status, along with a count of how many tasks have that status
    SELECT status.name, count(*) FROM status JOIN task ON task.status_id = status.id
    GROUP BY status.name; 
	--Get the names of all statuses, sorted by the status with most tasks first
   SELECT status.name, count(*) FROM status JOIN task ON task.status_id = status.id
   GROUP BY status.name 
   ORDER BY count(*) DESC; 
   --I wanted to use orderby but I coulden't find out how it would be nice if you help with that :).