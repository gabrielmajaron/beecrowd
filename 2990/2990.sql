select empregados.cpf, empregados.enome, departamentos.dnome from empregados
inner join departamentos
on departamentos.dnumero = empregados.dnumero
where empregados.cpf not in
(
select empregados.cpf
from empregados left join trabalha
on trabalha.cpf_emp = empregados.cpf
inner join projetos 
on projetos.pnumero = trabalha.pnumero
inner join departamentos
on departamentos.dnumero = projetos.dnumero
 ) 
 order by cpf
  
  