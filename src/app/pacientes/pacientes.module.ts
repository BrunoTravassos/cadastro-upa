import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteService } from './shared';
import { ListarPacienteComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarPacientesComponent } from './cadastrar';



@NgModule({
  declarations: [
    ListarPacienteComponent,
    CadastrarPacientesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    PacienteService
  ]
})
export class PacientesModule { }
