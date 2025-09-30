public with sharing class FullCalendarController {

    @AuraEnabled(cacheable=true)
    public static List<Job__c> fetchAllJobs(){
        try {
            List<Job__c> allJobs = [SELECT Id, Name, Start_Time__c, End_Time__c, Notes__c, Status__c FROM Job__c LIMIT 10];
            return allJobs; 
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}