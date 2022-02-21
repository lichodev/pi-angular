import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TipFormComponent } from 'src/app/common/tip-form/tip-form.component';
import { Tip } from 'src/app/models/tip';
import { AuthService } from 'src/app/services/auth.service';
import { PiTabService } from 'src/app/services/pi-tab.service';
import { TipService } from 'src/app/services/tip.service';

@Component({
    selector: 'app-tips',
    templateUrl: './tips.component.html',
    styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {

    tips: Tip[] = [];

    constructor(private tabSvc: PiTabService,
        private tipSvc: TipService,
        private authSvc: AuthService,
        private matDialog: MatDialog) { }

    ngOnInit(): void {
        this.tabSvc.setSelected("INFO");
        this.tips = this.tipSvc.getTips();
    }

    isLogged(): boolean {
        return this.authSvc.getIsLogged();
    }

    openForm(): void {
        this.matDialog.open(TipFormComponent);
    }
}
