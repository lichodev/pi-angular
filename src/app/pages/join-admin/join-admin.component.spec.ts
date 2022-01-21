import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinAdminComponent } from './join-admin.component';

describe('JoinAdminComponent', () => {
  let component: JoinAdminComponent;
  let fixture: ComponentFixture<JoinAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
