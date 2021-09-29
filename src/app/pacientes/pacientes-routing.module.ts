import { Routes } from "@angular/router";
import { ListarPacienteComponent } from ".";

export const PacienteRoutes: Routes = [
  {
    path: 'pacientes',
    redirectTo: 'pacientes/listar'
  },
  {
    path: 'pacientes/listar',
    component: ListarPacienteComponent
  }
];
