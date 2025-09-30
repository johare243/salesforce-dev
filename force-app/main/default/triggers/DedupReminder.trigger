trigger DedupReminder on Account (after insert) {
    for (Account acc : Trigger.new) {
        Case c = new Case();
        c.Subject = 'Dedupe this Account';
        c.OwnerId = '0056g000002P5WfAAK';
        c.AccountId = acc.Id;
        insert c;
    }
}