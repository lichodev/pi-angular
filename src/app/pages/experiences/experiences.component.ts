import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PiTabService } from 'src/app/services/pi-tab.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

    thereIsUserLoged: boolean = true;

    constructor(private tabSvc: PiTabService,
        private authSvc: AuthService,
        private tknSvc: TokenService) { }

    ngOnInit(): void {
        this.tabSvc.setSelected("INFO");
    }

    isLogged(): boolean {
        if (this.tknSvc.getToken()) return true;
        else return false;
    }

}
