import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css'],
})
export class ResumoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() mostrarResumo = true;

  alternarFormato() {
    let lerMenos = document.getElementById('pontos');
    let lerMais = document.getElementById('mais');
    let btnLeiaTexto = document.getElementById('btn-leiaTexto');

    if (lerMenos?.style.display == 'none') {
      lerMenos.style.display = 'inline';
      lerMais!.style.display = 'none';
      btnLeiaTexto!.innerHTML = 'ver mais';
    } else {
      lerMenos!.style.display = 'none';
      lerMais!.style.display = 'inline';
      btnLeiaTexto!.innerHTML = 'ver menos';
    }
  }
}
