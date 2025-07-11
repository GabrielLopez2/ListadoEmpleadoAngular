import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormularioEmpleadoComponent } from './componentes/formulario-empleado/formulario-empleado';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados';
import { Encabezado } from './componentes/encabezado/encabezado';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    Encabezado,
    FormularioEmpleadoComponent,
    ListaEmpleadosComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'listado-empleados';
}
