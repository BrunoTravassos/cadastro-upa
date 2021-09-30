import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[nomePaciente]'
})
export class NomePacienteDirective implements OnInit {

  @Input() nomePaciente: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.nomePaciente) {
      this.el.nativeElement.style.color = 'green';
    }
  }

}
