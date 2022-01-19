import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
    selector: 'app-confirm-pop-up',
    templateUrl: './confirm-pop-up.component.html',
    styleUrls: ['./confirm-pop-up.component.scss']
})
export class ConfirmPopUpComponent implements OnInit {

    action!: string;
    object!: string;
    send!: boolean;
    textSendButton!: string;
    admin!: boolean;
    service: any;
    timer: any;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
        private router: Router) {
        this.action = data.action;
        this.object = data.object;
        this.send = data.send;
        this.admin = data.admin;
        this.service = data.service;
        if (this.send) this.textSendButton = "Enviar";
        else if (this.admin) this.textSendButton = "Sí";
        else this.textSendButton = "Seguir editando";
    }

    ngOnInit(): void {
    }

    post(): void {
        if (this.send) {
            this.service.post();
            location.reload();
        } else if (this.admin) {
            this.service.confirm();
        }
    }

    cancel(): void {
        if (!this.send && !this.admin) {
            this.service.clear();
            location.reload();
        }
    }

}
