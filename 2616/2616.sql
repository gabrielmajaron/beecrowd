
SELECT customers.id, customers.name FROM customers
WHERE customers.id NOT IN
(
    SELECT customers.id FROM customers 
    INNER JOIN locations ON locations.id_customers = customers.id    
)