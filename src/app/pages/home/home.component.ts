import { Component, OnInit } from '@angular/core';
import { PiTabService } from 'src/app/services/pi-tab.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    urlImages: string[] = [
        "../../../assets/headers/yellow-header.jpg",
        "../../../assets/headers/aqua-header.jpg",
        "../../../assets/headers/pink-header.jpg",
        "../../../assets/headers/dark-aqua-header.jpg",
        "../../../assets/headers/purple-header.jpg",
        "../../../assets/headers/green-header.jpg"
    ];
    currentImg: string = this.urlImages[this.urlImages.length-1];
    timer: any;

  constructor(private tabSvc: PiTabService) { }

  ngOnInit(): void {
      this.tabSvc.setSelected("INICIO");
      this.turnImages();
  }

  turnImages() {
      let count: number = 0;
    this.timer = setInterval(() => {
        if (count >= this.urlImages.length) 
            count = 0;
        this.currentImg = this.urlImages[count];
        count++;
    }, 1500);
  }

  ngOnDestroy(): void {
      clearInterval(this.timer);
  }

}
