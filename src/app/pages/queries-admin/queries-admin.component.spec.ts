import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueriesAdminComponent } from './queries-admin.component';

describe('QueriesAdminComponent', () => {
  let component: QueriesAdminComponent;
  let fixture: ComponentFixture<QueriesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueriesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueriesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
