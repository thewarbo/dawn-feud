import { Component, Input, OnInit } from '@angular/core';
import { GameResponse } from '../response';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() index: number=0;
  @Input() answer: GameResponse = {answer: "Dawn", responses: 50};
  @Input() answers: GameResponse[] = [];
  @Input() guessed: boolean[] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
