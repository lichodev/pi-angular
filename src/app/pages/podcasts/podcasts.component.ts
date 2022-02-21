import { Component, OnInit } from '@angular/core';
import { Podcast } from 'src/app/models/podcast';
import { AuthService } from 'src/app/services/auth.service';
import { PiTabService } from 'src/app/services/pi-tab.service';
import { PodcastService } from 'src/app/services/podcast.service';

@Component({
    selector: 'app-podcasts',
    templateUrl: './podcasts.component.html',
    styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {


    podcasts: Podcast[] = [];

    constructor(private tabSvc: PiTabService,
        private podcastSvc: PodcastService,
        private authSvc: AuthService) { }

    ngOnInit(): void {
        this.tabSvc.setSelected("INFO");  
        this.podcasts = this.podcastSvc.getPodcasts();
    }

    isLogged(): boolean {
        return this.authSvc.getIsLogged();
    }

}
