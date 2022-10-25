select persons.firstname, persons.lastname, job.jobname from persons join job on persons.idjob = job.idjob;
select * from company where idcompany = (select idcompany from job where jobname = 'Engineer');
select jobname from job where idcompany = (select idcompany from company where name = 'Microsoft');
select salary, bonus, total from avgpaycheck where idavgpaycheck = (select idavgpaycheck from job where jobname = 'Engineer');
select firstname, lastname from persons where idjob = (select idjob from job where idavgpaycheck = (select idavgpaycheck from avgpaycheck where total > 2000));