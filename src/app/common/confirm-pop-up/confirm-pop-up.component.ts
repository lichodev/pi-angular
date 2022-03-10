import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    public dialogRef: MatDialogRef<ConfirmPopUpComponent>,) {
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
            this.service.ok();
        } else if (this.admin) {
            this.service.confirm();
        } else {
            this.data.reload = false;
        }
        this.timer = setTimeout(() => {
            this.dialogRef.close();
        })
    }

    cancel(): void {
        if (!this.send && !this.admin) {
            this.service.clear();
            this.data.reload = true;
        }
    }

}
