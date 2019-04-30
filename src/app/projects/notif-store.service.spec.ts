import { TestBed } from '@angular/core/testing';

import { NotifStoreService } from './notif-store.service';

describe('NotifStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotifStoreService = TestBed.get(NotifStoreService);
    expect(service).toBeTruthy();
  });
});
