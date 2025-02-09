import { TestBed } from '@angular/core/testing';

import { DownloadsServiceService } from './downloads-service.service';

describe('DownloadsServiceService', () => {
  let service: DownloadsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
