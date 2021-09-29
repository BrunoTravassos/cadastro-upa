import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteService } from '.';
import { ListarPacienteComponent } from './listar/listar-paciente.component';



@NgModule({
  declarations: [
    ListarPacienteComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PacienteService
  ]
})
export class PacientesModule { }
