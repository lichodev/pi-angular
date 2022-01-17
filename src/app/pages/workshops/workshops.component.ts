import { Component, OnInit } from '@angular/core';
import { Workshop } from 'src/app/models/workshop';
import { PiTabService } from 'src/app/services/pi-tab.service';
import { WorkshopService } from 'src/app/services/workshop.service';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss']
})
export class WorkshopsComponent implements OnInit {

    workshops: Workshop[] = [];

  constructor(private tabSvc: PiTabService,
    private workshopSvc: WorkshopService) { }

  ngOnInit(): void {
    this.tabSvc.setSelected("INFO");    
    this.workshops = this.workshopSvc.getWorkshops();
  }

}
