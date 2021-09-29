import { Component, OnInit } from '@angular/core';
import { Paciente, PacienteService } from '..';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.css']
})
export class ListarPacienteComponent implements OnInit {
  pacientes: Paciente[];

  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {
    this.pacientes = this.listarTodos();
    
  }

  listarTodos(): Paciente[]{
    return this.pacienteService.listarTodos();
  }

}
