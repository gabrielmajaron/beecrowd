select a.name, "Fator N"
from
(
select life_registry.name, omega, to_char(omega*1.618, 'FM999990.000') AS "Fator N" from life_registry
inner join dimensions on dimensions.id = life_registry.dimensions_id
where life_registry.name like 'Richard%'
and (dimensions.name ='C875' or dimensions.name ='C774')
order by omega
) as a