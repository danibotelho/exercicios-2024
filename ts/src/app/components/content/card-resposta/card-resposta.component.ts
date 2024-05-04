import { Component, Input, OnInit } from '@angular/core';

interface FormResposta {
  nome: string;
  resposta: string;
  tipoParticipante: string;
  icon: string;
}

@Component({
  selector: 'app-card-resposta',
  templateUrl: './card-resposta.component.html',
  styleUrls: ['./card-resposta.component.css'],
})
export class CardRespostaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  respostas: FormResposta[] = [
    {
      nome: 'Adriano da Silva',
      resposta:
        'Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo. ',
      tipoParticipante: 'Autor',
      icon: '../assets/check-laranja.png',
    },
    {
      nome: 'Carlos Henrique Santos',
      resposta:
        'Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo. \nObrigada pela resposta, muito interessante o seu trabalho! ',
      tipoParticipante: '',
      icon: '',
    },

    {
      nome: 'Carmila Ferreira Andrade',
      resposta:
        'Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo. \nSituado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.',
      tipoParticipante: 'Coautor',
      icon: '../assets/check-laranja.png',
    },
  ];
}
