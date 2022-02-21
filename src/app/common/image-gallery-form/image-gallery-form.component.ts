import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-image-gallery-form',
  templateUrl: './image-gallery-form.component.html',
  styleUrls: ['./image-gallery-form.component.scss']
})
export class ImageGalleryFormComponent implements OnInit {

    imageForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
      this.imageForm = this.fb.group({
          image: [null, Validators.required],
          description: [null, Validators.required],
      })
  }

}
