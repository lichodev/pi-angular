import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiFooterComponent } from './pi-footer.component';

describe('PiFooterComponent', () => {
  let component: PiFooterComponent;
  let fixture: ComponentFixture<PiFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
