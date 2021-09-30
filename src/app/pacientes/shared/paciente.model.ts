export class Paciente {
  constructor(
    public id?: number,
    public nome?: string,
    public cpf?: string,
    public endereco?: string,
    public tipoPrioridade?: string,
    public status?: boolean,
    public atendimento?: boolean

  ) {

  }
}
