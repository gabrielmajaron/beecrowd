SELECT customers.name, rentals.rentals_date FROM customers
INNER JOIN rentals
ON customers.id = rentals.id_customers
WHERE EXTRACT(MONTH FROM rentals.rentals_date) = 9
AND EXTRACT(YEAR FROM rentals.rentals_date) = 2016