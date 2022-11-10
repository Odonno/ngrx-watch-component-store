import { TestBed } from '@angular/core/testing';

import { NgrxWatchComponentStoreService } from './ngrx-watch-component-store.service';

describe('NgrxWatchComponentStoreService', () => {
  let service: NgrxWatchComponentStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgrxWatchComponentStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
