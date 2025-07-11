import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empleado } from '../../modelos/empleado.model';
import { EmpleadoService } from '../../servicios/empleado';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-formulario-empleado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-empleado.html',
  styleUrl: './formulario-empleado.css'
})
export class FormularioEmpleadoComponent {
  nuevoEmpleado: Empleado = {
    numEmpleado: 0,
    nombre: '',
    correo: '',
    telefono: '',
    fechaNacimiento: '',
    sexo: 'Masculino'
  };

  constructor(private empleadoService: EmpleadoService) {}

  agregarEmpleado() {
    this.empleadoService.agregarEmpleado({ ...this.nuevoEmpleado });
    this.nuevoEmpleado = {
      numEmpleado: 0,
      nombre: '',
      correo: '',
      telefono: '',
      fechaNacimiento: '',
      sexo: 'Masculino'
    };
  }
}
