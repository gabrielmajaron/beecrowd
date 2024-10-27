select name, customers_number from 
(  
  (
    (
    SELECT '1' as a1, lawyers.name as name, trunc(lawyers.customers_number, 0)  as customers_number
    FROM lawyers
    WHERE customers_number = (SELECT MAX(customers_number) FROM lawyers) 
  ) 
  union
  (
    SELECT '2' as a1, lawyers.name as name, trunc(lawyers.customers_number, 0)  as customers_number
    FROM lawyers
    WHERE customers_number = (SELECT min(customers_number) FROM lawyers) 
  ) 
  union
  select '3' as a1, 'Average' as name,  trunc(avg(customers_number),0) as customers_number from lawyers 
  )  
  order by a1
) as a

