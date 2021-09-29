import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteService, NomePacienteDirective } from './shared';
import { ListarPacienteComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarPacientesComponent } from './cadastrar';
import { EditarPacienteComponent } from './editar';



@NgModule({
  declarations: [
    ListarPacienteComponent,
    CadastrarPacientesComponent,
    EditarPacienteComponent,
    NomePacienteDirective
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
