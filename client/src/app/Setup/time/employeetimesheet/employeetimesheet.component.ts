import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-employeetimesheet',
  templateUrl: './employeetimesheet.component.html',
  styleUrls: ['./employeetimesheet.component.css'],
  styles: ['angular2-calendar/dist/css/angular2-calendar.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeetimesheetComponent implements OnInit {
 
  constructor() { }
 initialize_calendar(){
      $('.calender').each(function(){
         var calendar=$(this)
        console.log(calendar)
         calendar.fullCalendar({
           header:{left:'prev,next today',center:'title',right:'month,agendaWeek,agendaDay'},
           selectable:true,
           selectHelper:true,
           editable:true,
           eventLimit:true
         })
      })
    }
  ngOnInit() {

  	 this.initialize_calendar();

   
    $(document).on('turbolinks:load',this.initialize_calendar);
     console.log(this.initialize_calendar)
  }

}
