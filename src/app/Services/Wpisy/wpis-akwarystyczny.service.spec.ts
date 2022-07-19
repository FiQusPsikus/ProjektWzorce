import { TestBed } from '@angular/core/testing';

import { WpisAkwarystycznyService } from './wpis-akwarystyczny.service';

describe('WpisAkwarystycznyService', () => {
  let service: WpisAkwarystycznyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WpisAkwarystycznyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
