import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() assunto: string | undefined;
  @Input() autor: string | undefined;
  @Input() pergunta: string | undefined;
  @Input() index: number | undefined;
}
