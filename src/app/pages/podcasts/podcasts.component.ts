import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FastNoteComponent } from 'src/app/common/fast-note/fast-note.component';
import { PodcastFormComponent } from 'src/app/common/podcast-form/podcast-form.component';
import { Podcast } from 'src/app/models/podcast';
import { AuthService } from 'src/app/services/auth.service';
import { PiTabService } from 'src/app/services/pi-tab.service';
import { PodcastService } from 'src/app/services/podcast.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
    selector: 'app-podcasts',
    templateUrl: './podcasts.component.html',
    styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {


    podcasts: Podcast[] = [];

    constructor(private tabSvc: PiTabService,
        private podcastSvc: PodcastService,
        private authSvc: AuthService,
        private tknSvc: TokenService,
        private matDialog: MatDialog,
        private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.tabSvc.setSelected("INFO");
        this.getPodcasts();
    }
    
    getPodcasts() {
        this.podcasts = [];
        this.podcastSvc.getPodcasts().subscribe(pod => {
            pod.forEach(p => {
                p.audio = 'data:audio/mp3;base64,' + p.audio;
                p.image = 'data:image/jpeg;base64,' + p.image;
            });
            this.podcasts = pod;
        })

    }

    sanitize(audio: string): SafeUrl {
        let safeUrl = this.sanitizer.bypassSecurityTrustUrl('data:audio/mp3;base64,' + audio);
        console.log(safeUrl)
        return safeUrl;
    }

    isLogged(): boolean {
        if (this.tknSvc.getToken()) return true;
        return false;
    }

    openForm(): void {
        const dialog = this.matDialog.open(PodcastFormComponent);

        dialog.afterClosed().subscribe(result => {
            this.getPodcasts();
           
        });
    }
}
