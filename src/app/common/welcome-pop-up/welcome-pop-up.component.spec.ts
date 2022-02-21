import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePopUpComponent } from './welcome-pop-up.component';

describe('WelcomePopUpComponent', () => {
  let component: WelcomePopUpComponent;
  let fixture: ComponentFixture<WelcomePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomePopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
