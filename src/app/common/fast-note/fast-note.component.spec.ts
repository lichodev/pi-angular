import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastNoteComponent } from './fast-note.component';

describe('FastNoteComponent', () => {
  let component: FastNoteComponent;
  let fixture: ComponentFixture<FastNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
