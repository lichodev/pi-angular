import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PodcastService } from 'src/app/services/podcast.service';

@Component({
  selector: 'app-podcast-form',
  templateUrl: './podcast-form.component.html',
  styleUrls: ['./podcast-form.component.scss']
})
export class PodcastFormComponent implements OnInit {

    podcastForm!: FormGroup;

  constructor(private podcastSvc: PodcastService,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
      this.podcastForm = this.fb.group({
          title: [null, Validators.required],
          audio: [null, Validators.required],
          image: [null, Validators.required],
      })
  }

  post(): void {
      this.podcastSvc.post(this.podcastForm.value);
  }

}
