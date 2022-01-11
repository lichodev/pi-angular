import { Component, OnInit } from '@angular/core';
import { PiTabService } from 'src/app/services/pi-tab.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  constructor(private tabSvc: PiTabService) { }

  ngOnInit(): void {
      this.tabSvc.setSelected("QUIERO SER PARTE");
  }

}
