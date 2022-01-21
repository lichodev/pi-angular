import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueriesUserComponent } from './queries-user.component';

describe('QueriesUserComponent', () => {
  let component: QueriesUserComponent;
  let fixture: ComponentFixture<QueriesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueriesUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueriesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
