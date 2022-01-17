import { Component, OnInit } from '@angular/core';
import { PiNavComponent } from 'src/app/common/pi-nav/pi-nav.component';
import { PiTabService } from 'src/app/services/pi-tab.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {

  constructor(private tabSvc: PiTabService) { }

  ngOnInit(): void {
      this.tabSvc.setSelected("INFO");
  }

}
