select amount as most_frequent_value from
(
SELECT  amount, COUNT(amount) AS v
FROM value_table
GROUP BY amount
ORDER BY v DESC
LIMIT 1
)as a