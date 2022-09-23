# Write your MySQL query statement below

# Method 1)

(select distinct Salary from Employee order by Salary desc limit 1, 1), NULL)

# Method 2)

select
    max(Salary) as SecondHighestSalary 
from
    Employee
where
    Salary
not in(
    select max(Salary) from Employee
)


# Method 3)

SELECT IFNULL(
(SELECT distinct Salary
FROM Employee
ORDER BY Salary desc limit 1,1)
, null) as SecondHighestSalary ;