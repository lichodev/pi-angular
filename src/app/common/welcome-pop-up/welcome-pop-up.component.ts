import { Component, OnInit } from '@angular/core';
import { Tip } from 'src/app/models/tip';
import { TipService } from 'src/app/services/tip.service';

@Component({
  selector: 'app-welcome-pop-up',
  templateUrl: './welcome-pop-up.component.html',
  styleUrls: ['./welcome-pop-up.component.scss']
})
export class WelcomePopUpComponent implements OnInit {

    tip!: Tip;

  constructor(private tipSvc: TipService) { }

  ngOnInit(): void {
      this.tip = this.tipSvc.getWelcomeTip();
  }

}
