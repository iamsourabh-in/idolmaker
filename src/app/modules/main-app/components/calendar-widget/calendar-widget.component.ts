import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-widget',
  templateUrl: './calendar-widget.component.html',
  styleUrls: ['./calendar-widget.component.css']
})
export class CalendarWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getDateCustom() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const d = new Date();
    return monthNames[d.getMonth()];
  }
}
