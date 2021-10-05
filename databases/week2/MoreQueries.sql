--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT user.id,task.title, user.email
FROM user, user_task, task WHERE
user.email LIKE "%@spotify.com" AND
user.id=user_task.user_id AND
user_task.task_id=task.id; 
--Get all the tasks for 'Donald Duck' with status 'Not started'
/*SELECT column_name(s)
FROM table1
INNER JOIN/join table2
ON table1.column_name = table2.column_name;
*/
SELECT * FROM user_task 
JOIN task ON task_id=task.id 
JOIN user ON user_id=user.id 
JOIN status ON status_id=status.id 
-- filtering records based on more than one condition
WHERE user.name='Donald Duck' AND
status.name LIKE "Not started";
--Get all the tasks for 'Maryrose Meadows' 
--that were created in september (hint: month(created)=month_number)
SELECT * from user_task
JOIN task on task_id= task.id
JOIN user on user_id= user.id
WHERE user.name = "Maryrose Meadows" AND
month(created) = 9;
--Find how many tasks where created in each month
--e.g. how many tasks were created in october, how many tasks were created
-- in november, etc. (hint: use group by)
SELECT COUNT(id), month(created)
FROM task 
GROUP BY MONTH(created);