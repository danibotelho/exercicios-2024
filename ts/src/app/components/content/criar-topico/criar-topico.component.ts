import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-criar-topico',
  templateUrl: './criar-topico.component.html',
  styleUrls: ['./criar-topico.component.css'],
})
export class CriarTopicoComponent implements OnInit {
  mostrarBotaoCriarTopico: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  @Output() criarTopicoEvent = new EventEmitter<void>();
  @Input() mostrarMsgTopicoCriado: boolean | undefined;

  alterarComponenteCriarTopico() {
    this.mostrarBotaoCriarTopico = !this.mostrarBotaoCriarTopico;
  }

  criarTopico() {
    this.criarTopicoEvent.emit();
  }
}
