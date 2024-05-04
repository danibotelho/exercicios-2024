import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface FormDiscussao {
  assunto: string;
  autor: string;
  pergunta: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  mostrarCriar: boolean = true;
  mostrarCardCriado: boolean = false;
  mostrarMsgTopicoCriado: boolean = false;


  ngOnInit(): void {}

  discussoes: FormDiscussao[] = [
    {
      assunto: 'O que é Angular ',
      autor: 'Carlos Henrique Santos',
      pergunta:
        'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo... ',
    },
    {
      assunto: 'Component e uma Directive',
      autor: 'John Doe',
      pergunta: 'Qual a diferença entre um Component e uma Directive? ',
    },
  ];



  alterarComponente() {
    this.mostrarCriar = !this.mostrarCriar;
  }

  criarTopico() {
    this.mostrarCriar = false;
    this.mostrarCardCriado = false;
  }

  enviar() {
    this.mostrarCriar = true;
    this.mostrarCardCriado = true;
    this.mostrarMsgTopicoCriado = true;
  }

  @Output() criarTopicoEvent = new EventEmitter<void>();
  @Output() enviarEvent = new EventEmitter<void>();
}
