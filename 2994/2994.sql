select doctors.name, round(sum(attendances.hours*150*(work_shifts.bonus/100)+(attendances.hours*150)),1) as salary
from doctors inner join attendances on attendances.id_doctor = doctors.id
inner join work_shifts on work_shifts.id = attendances.id_work_shift
group by doctors.name
order by salary desc