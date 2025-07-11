import { Component } from '@angular/core';
import { Empleado } from '../../modelos/empleado.model';
import { EmpleadoService } from '../../servicios/empleado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-empleados.html',
  styleUrl: './lista-empleados.css'
})
export class ListaEmpleadosComponent {
  empleados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoService) {}

  ngDoCheck() {
    this.empleados = this.empleadoService.getEmpleados();
  }

  eliminarEmpleado(index: number) {
    this.empleadoService.eliminarEmpleado(index);
  }
}
