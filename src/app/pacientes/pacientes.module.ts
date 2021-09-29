import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteService } from './shared';
import { ListarPacienteComponent } from './listar';



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
