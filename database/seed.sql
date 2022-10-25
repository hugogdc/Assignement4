INSERT INTO `assignement3`.`company` (`idcompany`, `name`, `numberEmployee`, `value`) VALUES ('01', 'Microsoft', '500', '100000000000');
INSERT INTO `assignement3`.`avgpaycheck` (`idavgpaycheck`, `salary`, `bonus`, `total`) VALUES ('01', '2000', '200', '2200');
INSERT INTO `assignement3`.`job` (`idjob`, `jobname`, `idavgpaycheck`, `idcompany`) VALUES ('01', 'Engineer', '01', '01');
INSERT INTO `assignement3`.`persons` (`idpersons`, `firstname`, `lastname`, `idjob`) VALUES ('01', 'John', 'Doe', '01');
