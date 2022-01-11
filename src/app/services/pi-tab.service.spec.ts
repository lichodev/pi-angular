import { TestBed } from '@angular/core/testing';

import { PiTabService } from './pi-tab.service';

describe('PiTabService', () => {
  let service: PiTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
