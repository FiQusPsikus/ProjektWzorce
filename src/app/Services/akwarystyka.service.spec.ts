import { TestBed } from '@angular/core/testing';

import { AkwarystykaService } from './akwarystyka.service';

describe('AkwarystykaService', () => {
  let service: AkwarystykaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AkwarystykaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
