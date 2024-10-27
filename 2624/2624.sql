select count(*) from
(
  select city from customers
group by city
  ) as a