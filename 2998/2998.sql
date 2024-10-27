select a.name, a.investment, a.month_of_payback, a.return from
(
  select clients.id, clients.name, clients.investment, 
t1.month as month_of_payback, 
SUM(
    case
    when t1.client_id = t2.client_id then T2.profit
    else 0
    end
  )-clients.investment as return,
   ROW_NUMBER() OVER (
            PARTITION BY 
                clients.id, 
                clients.name
            ORDER BY 
                clients.id, 
                clients.name
        ) as row_num
from operations as t1
INNER JOIN operations AS t2 on t1.id >= t2.id
inner join clients on clients.id = t1.client_id
GROUP BY clients.id,t1.id, t1.month,t1.client_id,clients.investment, clients.name
having (SUM(
    case
    when t1.client_id = t2.client_id then T2.profit
    else 0
    end
  )-clients.investment)>=0  
ORDER BY return
  ) as a
  where a.row_num=1
  order by return desc