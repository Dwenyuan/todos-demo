import { TestBed } from '@angular/core/testing';

import { KeyboradService } from './keyborad.service';

describe('KeyboradService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeyboradService = TestBed.get(KeyboradService);
    expect(service).toBeTruthy();
  });
});
