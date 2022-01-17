import { Component, OnInit } from '@angular/core';
import { PiTabService } from 'src/app/services/pi-tab.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

    thereIsUserLoged: boolean = false;

  constructor(private tabSvc: PiTabService) { }

  ngOnInit(): void {
      this.tabSvc.setSelected("INFO");
  }

}
