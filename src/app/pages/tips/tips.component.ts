import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FastNoteComponent } from 'src/app/common/fast-note/fast-note.component';
import { TipFormComponent } from 'src/app/common/tip-form/tip-form.component';
import { Tip } from 'src/app/models/tip';
import { AuthService } from 'src/app/services/auth.service';
import { PiTabService } from 'src/app/services/pi-tab.service';
import { TipService } from 'src/app/services/tip.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
    selector: 'app-tips',
    templateUrl: './tips.component.html',
    styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {

    tips: Tip[] = [];
    timer: any;

    constructor(private tabSvc: PiTabService,
        private tipSvc: TipService,
        private authSvc: AuthService,
        private matDialog: MatDialog,
        private tknSvc: TokenService) { }

    ngOnInit(): void {
        this.tabSvc.setSelected("INFO");
        this.getTips();
    }

    isLogged(): boolean {
        if (this.tknSvc.getToken()) return true;
        return false;
    }

    getTips() {
        this.tips = [];
        this.tipSvc.getTips().subscribe(tips => {
            tips.forEach(tip => {
                let path = 'data:image/jpeg;base64,' + tip.image;
                let newTip: Tip = { id: tip.id, image: path, title: tip.title, text: tip.text };
                this.tips.push(newTip);
            });
        });

    }

    openForm(): void {
        const dialog = this.matDialog.open(TipFormComponent);

        dialog.afterClosed().subscribe(result => {
            this.getTips();
        });
    }

}
