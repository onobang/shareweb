import { TestBed } from '@angular/core/testing';

import { KosakataService } from './kosakata.service';

describe('KosakataService', () => {
  let service: KosakataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KosakataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
