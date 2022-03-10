import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Reminder } from 'src/app/models/reminder';
import { GalleryService } from 'src/app/services/gallery.service';
import { ReminderService } from 'src/app/services/reminder.service';

@Component({
    selector: 'app-image-pop-up',
    templateUrl: './image-pop-up.component.html',
    styleUrls: ['./image-pop-up.component.scss']
})
export class ImagePopUpComponent implements OnInit {

    image!: any;
    reminder: Reminder = {id : 0, since : 0, until : 0, likes :0, dislikes :0, image :"" }
    id!: number;
    poll!: boolean;
    type: string = "reminder";

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
        private reminderSvc: ReminderService,
        private gallerySvc: GalleryService) {
        this.id = data.id;
        //this.reminder = data.reminder;
        this.poll = data.poll;
        
    }

    ngOnInit(): void {
        if(this.data.poll)
            this.getReminder();
        else
            this.getImageGallery();
    }

    getReminder() {
        this.reminderSvc.getById(this.data.id)
        .subscribe(r => {
            this.image = 'data:image/jpeg;base64,' + r.image;
        })
    }

    getImageGallery() {
        this.gallerySvc.getById(this.data.id)
        .subscribe(i => {
            this.image = 'data:image/jpeg;base64,' + i.image;
        })

    }

}
