/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import { LightningElement, track } from 'lwc';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import FullCalendarJS from '@salesforce/resourceUrl/FullCalendarJS';
import { NavigationMixin } from 'lightning/navigation';
import fetchAllJobs from '@salesforce/apex/FullCalendarController.fetchAllJobs';

export default class FullCalendar extends NavigationMixin(LightningElement) {
    
    calendarInit = false;
    @track allJobs = [];
    @track selectedJob = undefined;

    initFullCalendar(){
        const ele = this.template.querySelector('div.fullcalendarjs');
        // eslint-disable-next-line no-undef
        $(ele).fullCalendar({
          header: {
              left: 'prev,next today',
              center: 'title',
              right: 'month,basicWeek,basicDay,listWeek'
          },
          themeSystem : 'standard',
          defaultDate: new Date(), 
          navLinks: true,
          editable: true,
          eventLimit: true,
          events: this.allJobs,
          dragScroll : true,
          droppable: true,
          weekNumbers : true,
          eventDrop: function(event, delta, revertFunc) {
            alert(event.title + " was dropped on " + event.start.format());
            if (!confirm("Are you sure about this change? ")) {
              revertFunc();
            }
          },
          eventClick: function(event, jsEvent, view) {
            alert('Job Clicked '+event.title)
            this.selectedJob =  event;
          },
          dayClick :function(job, jsEvent, view) {
            jsEvent.preventDefault();
            
          },
          eventMouseover : function(event, jsEvent, view) {
          }
        });
    }

    getAllJobs(){
        fetchAllJobs()
        .then(result => {
            this.allJobs = result.map(job => {
                return {
                    id : job.Id,
                    editable : true,
                    title : job.Name,
                    start : job.Start_Time__c,
                    end : job.End_Time__c,
                    description : job.Notes__c,
                    allDay : false,
                };
            });
            this.initFullCalendar();
        })
        .catch(error => {
            window.console.log('Error: ', error)
        })
        .finally(() => {
        })
    }

    closeModal(){
        this.selectedJob = undefined;
    }

    // renderedCallback() {
    //     if (this.calendarInit) {
    //         return;
    //     }
    //     this.calendarInit = true;

    //     Promise.all([
    //         loadScript(this, FullCalendarJS + '/jquery.min.js'),
    //         loadScript(this, FullCalendarJS + '/moment.min.js'),
    //         loadScript(this, FullCalendarJS + '/theme.js'),
    //         loadScript(this, FullCalendarJS + '/fullcalendar.min.js'),
    //         loadStyle(this, FullCalendarJS + '/fullcalendar.min.css'),
    //       ])
    //       .then(() => {
    //         this.getAllJobs();
    //       })
    //       .catch(error => {
    //           console.log('Error: ', error);
    //       })
    //     }
    // }
}