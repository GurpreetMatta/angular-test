import { TestBed } from '@angular/core/testing';

import { AuthGuardsService } from './auth-guards.service';

describe('AuthGuardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuardsService = TestBed.get(AuthGuardsService);
    expect(service).toBeTruthy();
  });
});
