import { TestBed } from '@angular/core/testing';

import { Empleado } from './empleado';

describe('Empleado', () => {
  let service: Empleado;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Empleado);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
