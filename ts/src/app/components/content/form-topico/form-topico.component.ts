import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-topico',
  templateUrl: './form-topico.component.html',
  styleUrls: ['./form-topico.component.css'],
})
export class FormTopicoComponent implements OnInit {
  @Output() enviarEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  enviar() {
    this.enviarEvent.emit();
  }
  
}
