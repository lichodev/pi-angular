import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ImagePopUpComponent } from 'src/app/common/image-pop-up/image-pop-up.component';
import { Reminder } from 'src/app/models/reminder';
import { PiTabService } from 'src/app/services/pi-tab.service';
import { ReminderService } from 'src/app/services/reminder.service';

@Component({
    selector: 'app-reminders',
    templateUrl: './reminders.component.html',
    styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {

    reminders: Reminder[] =[];
    reminderForm!: FormGroup;
    image!: File;
    mybreakpoint!: number;

    constructor(private tabSvc: PiTabService,
        private reminderSvc: ReminderService,
        private matDialog: MatDialog,
        private fb: FormBuilder) { }

    ngOnInit(): void {
        this.tabSvc.setSelected("INFO");
        this.handleSize(window.innerWidth);
        this.reminderForm = this.fb.group({
            since: [null, Validators.required],
            until: [null, Validators.required],
        })
        this.reminderSvc.get().subscribe( reminders => {
            reminders.forEach(r => {
                let path = 'data:image/jpeg;base64,' + r.image;
                r.image = path;
                this.reminders.push(r)
            });
        })
    }

    openSingleShow(id: number) {
        this.matDialog.open(ImagePopUpComponent, {
            data: {
                id: id,
                poll: true,
            }
        })
    }

    onFileChange(event: any) {

        if (event.target.files.length > 0) {
            this.image = event.target.files[0];
        }
    }

    post() {
        this.reminderSvc.post(this.reminderForm.value, this.image)
        .subscribe(r=> {
            console.log(r);
        })
    }

    handleSize(width: number) {
        if (width <= 700) this.mybreakpoint = 1;
        else if (width <= 900) this.mybreakpoint = 2;
        else this.mybreakpoint = 3;
    }

    giveSize(event: any) {
        this.handleSize(event.target.innerWidth);
    }

}
