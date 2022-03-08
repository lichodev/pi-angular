import { Component, OnInit } from '@angular/core';
import { Reminder } from 'src/app/models/reminder';
import { ReminderService } from 'src/app/services/reminder.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {

    reminder!: Reminder;
    type: string ="reminder";
    id!: number; 

    constructor(private reminderSvc: ReminderService) { }

    ngOnInit(): void {
        this.id = parseInt(location.href.slice(-1)); 
        this.reminderSvc.getById(this.id).subscribe(rem => { 
            let path = 'data:image/jpeg;base64,' + rem.image;
            rem.image = path;
            this.reminder = rem;
        });
    }

}
