import { TestBed } from '@angular/core/testing';

import { WpisTerrarystycznyService } from './wpis-terrarystyczny.service';

describe('WpisTerrarystycznyService', () => {
  let service: WpisTerrarystycznyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WpisTerrarystycznyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
