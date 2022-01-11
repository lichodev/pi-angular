import { Component, OnInit } from '@angular/core';
import { PiTabService } from 'src/app/services/pi-tab.service';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss']
})
export class WorkshopsComponent implements OnInit {

  constructor(private tabSvc: PiTabService) { }

  ngOnInit(): void {
    this.tabSvc.setSelected("INFO");    
  }

}
