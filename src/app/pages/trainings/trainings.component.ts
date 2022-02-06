import { Component, OnInit } from '@angular/core';
import { PiTabService } from 'src/app/services/pi-tab.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {

    images: string[] = [
        "../../../assets/trainings/cap1.jpeg",
        "../../../assets/trainings/cap2.jpeg",
        "../../../assets/trainings/cap3.jpeg",
    ];

  constructor(private tabSvc: PiTabService) { }

  ngOnInit(): void {
    this.tabSvc.setSelected("INFO");
  }

}
