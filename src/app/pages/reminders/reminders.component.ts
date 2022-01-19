import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImagePopUpComponent } from 'src/app/common/image-pop-up/image-pop-up.component';
import { PiNavComponent } from 'src/app/common/pi-nav/pi-nav.component';
import { PiTabService } from 'src/app/services/pi-tab.service';

@Component({
    selector: 'app-reminders',
    templateUrl: './reminders.component.html',
    styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {

    constructor(private tabSvc: PiTabService,
        private matDialog: MatDialog) { }

    ngOnInit(): void {
        this.tabSvc.setSelected("INFO");
    }

    openSingleShow(img: string) {
        this.matDialog.open(ImagePopUpComponent, {
            data: {
                image: img,
            }
        })
    }

}
