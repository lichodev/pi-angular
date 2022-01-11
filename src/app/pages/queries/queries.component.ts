import { Component, OnInit } from '@angular/core';
import { PiTabService } from 'src/app/services/pi-tab.service';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {

  constructor(private tabSvc: PiTabService) { }

  ngOnInit(): void {
    this.tabSvc.setSelected("CONSULTAS");
  }

}
