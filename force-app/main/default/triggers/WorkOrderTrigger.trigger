trigger WorkOrderTrigger on WorkOrder (before insert) {
  switch on Trigger.operationType {
    when BEFORE_INSERT {

    }
    when AFTER_INSERT {

    }
    when BEFORE_UPDATE {

    }
    when AFTER_UPDATE {

    }
  }
}