# Write your MySQL query statement below

select P.firstname, P.lastName, A.city, A.state from Person P
left join Address A
on P.personId = A.personId;


# OR

select firstName, lastName, null as city, null as state
from person 
where personId not in (select personId from address)

union

select person.firstName, person.lastName, address.city, address.state
from person inner join address 
where person.personId = address.personId