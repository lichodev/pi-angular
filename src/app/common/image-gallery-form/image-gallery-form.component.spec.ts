import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalleryFormComponent } from './image-gallery-form.component';

describe('ImageGalleryFormComponent', () => {
  let component: ImageGalleryFormComponent;
  let fixture: ComponentFixture<ImageGalleryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageGalleryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGalleryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
