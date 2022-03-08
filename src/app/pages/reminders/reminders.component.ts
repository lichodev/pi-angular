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

    constructor(private tabSvc: PiTabService,
        private reminderSvc: ReminderService,
        private matDialog: MatDialog,
        private fb: FormBuilder) { }

    ngOnInit(): void {
        this.tabSvc.setSelected("INFO");
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
        this.reminderSvc.getById(id)
            .subscribe(r => {
                let path = 'data:image/jpeg;base64,' + r.image; 
                r.image = path;
                let reminder: Reminder = r;
                console.log(reminder)
                this.matDialog.open(ImagePopUpComponent, {
                    data: {
                        id: id,
                        poll: true,
                        reminder: reminder,
                    }
                })
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

}
