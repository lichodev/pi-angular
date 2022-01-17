import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience-admin',
  templateUrl: './experience-admin.component.html',
  styleUrls: ['./experience-admin.component.scss']
})
export class ExperienceAdminComponent implements OnInit {

    experiences: Experience[] = [];
    displayedColumns: string[] = ['experience', 'image', 'actions'];
    dataSource = this.experiences;

  constructor(private experienceSvc: ExperienceService) { }

  ngOnInit(): void {
      this.experiences = this.experienceSvc.getExperiences();
      this.dataSource = this.experiences;
  }

}
