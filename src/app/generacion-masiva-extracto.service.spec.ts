import { TestBed } from '@angular/core/testing';

import { GeneracionMasivaExtractoService } from './generacion-masiva-extracto.service';

describe('GeneracionMasivaExtractoService', () => {
  let service: GeneracionMasivaExtractoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneracionMasivaExtractoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
