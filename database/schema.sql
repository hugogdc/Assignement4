CREATE TABLE `assignement3`.`company` (
  `idcompany` VARCHAR(50) NOT NULL,
  `name` VARCHAR(45) NULL,
  `numberEmployee` INT(10) NULL,
  `value` DOUBLE NULL,
  PRIMARY KEY (`idcompany`));

CREATE TABLE `assignement3`.`avgpaycheck` (
  `idavgpaycheck` VARCHAR(50) NOT NULL,
  `salary` DOUBLE NULL,
  `bonus` DOUBLE NULL,
  `total` DOUBLE NULL,
  PRIMARY KEY (`idavgpaycheck`));

CREATE TABLE `assignement3`.`job` (
  `idjob` VARCHAR(50) NOT NULL,
  `jobname` VARCHAR(45) NULL,
  `idavgpaycheck` VARCHAR(50),
  `idcompany` VARCHAR(50),
  PRIMARY KEY (`idjob`),
  CONSTRAINT FK_jobcompany FOREIGN KEY (idcompany)
  REFERENCES company(idcompany),
  CONSTRAINT FK_jobavgpaycheck FOREIGN KEY (idavgpaycheck)
  REFERENCES avgpaycheck(idavgpaycheck));

CREATE TABLE `assignement3`.`persons` (
  `idpersons` VARCHAR(50) NOT NULL,
  `firstname` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `idjob` VARCHAR(45) NULL,
  PRIMARY KEY (`idpersons`),
  FOREIGN KEY (`idjob`) REFERENCES Job(`idjob`));
  
  