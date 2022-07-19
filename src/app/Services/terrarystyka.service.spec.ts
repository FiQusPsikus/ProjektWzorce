import { TestBed } from '@angular/core/testing';

import { TerrarystykaService } from './terrarystyka.service';

describe('TerrarystykaService', () => {
  let service: TerrarystykaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerrarystykaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
