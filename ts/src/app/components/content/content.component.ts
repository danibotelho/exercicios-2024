import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  discussoes = [
    {
      assunto: 'O que é Angular ',
      autor: 'Carlos Henrique Santos',
      pergunta: 'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo... ',
    },
    {
      assunto: 'Component e uma Directive',
      autor: 'John Doe' ,
      pergunta: 'Qual a diferença entre um Component e uma Directive? ',
    }
  ];
}
