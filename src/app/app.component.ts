import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WelcomePopUpComponent } from './common/welcome-pop-up/welcome-pop-up.component';
import { TokenService } from './services/token.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    title = 'primeraInfancia';
    constructor(private matDialog: MatDialog,
        private tknSvc: TokenService) { }

    ngOnInit() {
        if (!this.tknSvc.thereIsTipSeen())
            this.matDialog.open(WelcomePopUpComponent, {backdropClass: 'backdropBackground'});
    }
}
