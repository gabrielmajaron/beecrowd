SELECT categories.name as name, SUM(products.amount) as sum
FROM products
INNER JOIN categories on categories.id = products.id_categories
GROUP BY categories.id