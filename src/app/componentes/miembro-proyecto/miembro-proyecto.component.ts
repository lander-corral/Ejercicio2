import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from 'src/app/modelo/empleado';
import { Proyecto } from 'src/app/modelo/proyecto';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-miembro-proyecto',
  templateUrl: './miembro-proyecto.component.html',
  styleUrls: ['./miembro-proyecto.component.css']
})
export class MiembroProyectoComponent implements OnInit {
  @Input() empleado: Empleado;
  proyecto: Proyecto;
  ocultar: Boolean = true;

  constructor() {
    this.empleado = new Empleado(1,"Juan López","V");
  }

  ngOnInit() {
  }

  cambiarVisibilidad(){
    this.ocultar = !this.ocultar;
  }

}
