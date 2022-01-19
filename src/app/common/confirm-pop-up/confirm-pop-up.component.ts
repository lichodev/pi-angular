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
    service: any;
    timer: any;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router) {
        this.action = data.action;
        this.object = data.object;
        this.send = data.send;
        this.service = data.service;
        if (this.send) this.textSendButton = "Enviar";
        else this.textSendButton = "Seguir editando";
     }

    ngOnInit(): void {
    }

    post(): void {
        if (this.send) {
            this.service.post();
            location.reload();
        }
    }

    cancel(): void {
        if (!this.send) {
            this.service.clear();
            location.reload();
        }
    }

}
