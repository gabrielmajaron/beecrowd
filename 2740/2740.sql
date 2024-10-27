select name from
(
  select a.position, name from
(
  select league.position as position, concat('Podium: ',league.team) as name from league 
 where league.position <=3
 union
 select league.position as position, concat('Demoted: ',league.team) as name from league where league.position >=14  
)as a
 order by a.position
  ) as b