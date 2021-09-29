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
    this.pacientes = [
      new Paciente(1, 'Teste 01', '32432','rua teste', 'min',true),
      new Paciente(2, 'Teste 02', '32432', 'rua teste', 'min', false )
    ]
  }

  listarTodos(): Paciente[]{
    return this.pacienteService.listarTodos();
  }

}
