select a.name as type, a.price from
(
  select products.id,products.name, products.type, '20.0' as price
from products
where products.type = 'A'
union
select products.id,products.name, products.type, '70.0' as price
from products
where products.type = 'B'
union
select products.id,products.name as type,products.type, '530.5' as price
from products
where products.type = 'C'
order by type, id desc
  ) as a
