import { TestBed, inject } from '@angular/core/testing';

import { DetailspageService } from './detailspage.service';

describe('DetailspageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailspageService]
    });
  });

  it('should be created', inject([DetailspageService], (service: DetailspageService) => {
    expect(service).toBeTruthy();
  }));
});
