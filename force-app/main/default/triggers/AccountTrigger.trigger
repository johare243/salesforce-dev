public AccountTrigger on Account (after update) {
  switch on Trigger.operationType {
    when AFTER_UPDATE {
      List<Account> toUpDate = new LIst<Account>();
      String timeStamp = 'Updated at: ' + String.valueOf(Datetime.now().getTime());

      for (Account a : Trigger.new) {
        toUpdate.add(new Account(Id = a.Id, Description = timeStamp));
      }

      if (!toUpdate.IsEmpty()) {
        Database.update(toUpDate, false);
      }
    }
  }
}
