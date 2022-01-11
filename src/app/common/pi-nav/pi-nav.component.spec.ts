import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiNavComponent } from './pi-nav.component';

describe('PiNavComponent', () => {
  let component: PiNavComponent;
  let fixture: ComponentFixture<PiNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
