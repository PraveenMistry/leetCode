# Write your MySQL query statement below

# select Score, dense_rank() over(order by Score desc) as 'Rank' from Scores;

SELECT score,
    dense_rank() OVER (
        ORDER BY score DESC
        ) AS 'rank'
FROM Scores
ORDER BY score DESC;