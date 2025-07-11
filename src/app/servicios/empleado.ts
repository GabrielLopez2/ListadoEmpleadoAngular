import { Injectable } from '@angular/core';
import { Empleado } from '../modelos/empleado.model';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private empleados: Empleado[] = [];

  constructor() {
    this.cargarDesdeLocalStorage();
  }

  private guardarEnLocalStorage() {
    localStorage.setItem('empleados', JSON.stringify(this.empleados));
  }

  private cargarDesdeLocalStorage() {
    const data = localStorage.getItem('empleados');
    if (data) {
      this.empleados = JSON.parse(data);
    }
  }

  getEmpleados(): Empleado[] {
    return this.empleados;
  }

  agregarEmpleado(empleado: Empleado) {
    this.empleados.push(empleado);
    this.guardarEnLocalStorage();
  }

  eliminarEmpleado(index: number) {
    this.empleados.splice(index, 1);
    this.guardarEnLocalStorage();
  }
}
