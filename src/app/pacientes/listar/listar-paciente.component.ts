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

  alterarStatus(paciente: Paciente): void {
    if (confirm('Deseja alterar o status do Paciente "' + paciente.nome + '"?')) {
      this.pacienteService.alterarStatus(paciente.id);
      this.pacientes = this.listarTodos();
    } else {
      this.pacientes = this.listarTodos();
    }
  }

  remover($event: any, paciente: Paciente): void {
    $event.preventDefault();
    if (confirm('Deseja remover o Paciente "' + paciente.nome + '"?')) {
       this.pacienteService.remover(paciente.id);
      this.pacientes = this.listarTodos();
    } else {
      this.pacientes = this.listarTodos();
    }
  }

}
