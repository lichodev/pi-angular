import { Component, OnInit } from '@angular/core';
import { Tip } from 'src/app/models/tip';
import { TipService } from 'src/app/services/tip.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
    selector: 'app-welcome-pop-up',
    templateUrl: './welcome-pop-up.component.html',
    styleUrls: ['./welcome-pop-up.component.scss']
})
export class WelcomePopUpComponent implements OnInit {

    tip!: Tip;

    constructor(private tipSvc: TipService,
        private tknSvc: TokenService) { }

    ngOnInit(): void {
        this.tip = this.tipSvc.getWelcomeTip();
    }

    saveSeen() {
        this.tknSvc.setTipSeen();
    }

}
