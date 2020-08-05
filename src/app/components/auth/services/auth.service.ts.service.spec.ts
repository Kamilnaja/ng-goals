import { TestBed } from '@angular/core/testing';

import { Auth.Service.TsService } from './auth.service.ts.service';

describe('Auth.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Auth.Service.TsService = TestBed.get(Auth.Service.TsService);
    expect(service).toBeTruthy();
  });
});
