import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEmpleado } from './formulario-empleado';

describe('FormularioEmpleado', () => {
  let component: FormularioEmpleado;
  let fixture: ComponentFixture<FormularioEmpleado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEmpleado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEmpleado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
