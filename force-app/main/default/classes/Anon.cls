List<Account> records = [SELECT Id, Name FROM Account LIMIT 1];
Account a = records[0];
a.Name = a.Name + '1';
update(a);
System.debug(records);
